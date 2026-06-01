import { useEffect, useRef, useState } from "react";

/**
 * Cinta negra estilo consola en el tope de la web.
 * Muestra el dólar blue de hoy, el precio del bitcoin, el clima de la ciudad
 * del visitante y una noticia relevante del día que rota en cada vuelta de la
 * cinta. Datos de APIs públicas:
 *   - dólar blue:  https://dolarapi.com
 *   - bitcoin:     https://api.coingecko.com
 *   - ubicación:   https://ipwho.is  (con respaldo en https://ipapi.co)
 *   - clima:       https://open-meteo.com
 *   - noticias:    https://news.google.com (RSS vía https://api.rss2json.com)
 *
 * Props:
 *   bgColor     -> color de fondo de la cinta   (default "#000000")
 *   textColor   -> color del texto              (default "#3fe06a")
 *   accentColor -> color del prompt y el cursor (default "#F5D244")
 */
const TopTicker = ({
  bgColor = "#000000",
  textColor = "#F5D244",
  accentColor = "#F5D244",
}) => {
  const [dolar, setDolar] = useState(null);     // string
  const [bitcoin, setBitcoin] = useState(null); // string
  const [clima, setClima] = useState(null);     // string
  const [noticia, setNoticia] = useState(null); // string (rota por vuelta)

  // Guardamos todas las noticias del día y vamos rotando entre ellas.
  const noticiasRef = useRef([]);

  // Elige una noticia random distinta a la que se está mostrando.
  const rotarNoticia = () => {
    const lista = noticiasRef.current;
    if (lista.length === 0) return;
    if (lista.length === 1) {
      setNoticia(lista[0]);
      return;
    }
    setNoticia((actual) => {
      let elegida;
      do {
        elegida = lista[Math.floor(Math.random() * lista.length)];
      } while (elegida === actual);
      return elegida;
    });
  };

  useEffect(() => {
    let cancelado = false;

    const fmt = (n) =>
      new Intl.NumberFormat("es-AR", { maximumFractionDigits: 0 }).format(n);

    const cargarDolar = async () => {
      try {
        const r = await fetch("https://dolarapi.com/v1/dolares/blue");
        const d = await r.json();
        if (cancelado) return;
        setDolar(
          `*** Dólar Blue Compra: $${fmt(d.compra)} > Venta: $${fmt(d.venta)}`
        );
      } catch {
        if (!cancelado) setDolar(null);
      }
    };

    const cargarBitcoin = async () => {
      try {
        const r = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true"
        );
        const d = await r.json();
        if (cancelado || !d.bitcoin) return;
        const precio = d.bitcoin.usd;
        const cambio = d.bitcoin.usd_24h_change;
        const flecha = cambio >= 0 ? "▲" : "▼";
        const signo = cambio >= 0 ? "+" : "";
        setBitcoin(
          `₿ Bitcoin: US$${fmt(precio)} ${flecha} ${signo}${cambio.toFixed(1)}% (24h)`
        );
      } catch {
        if (!cancelado) setBitcoin(null);
      }
    };

    // Noticias del día desde nuestra API route (Google News Argentina).
    const cargarNoticias = async () => {
      try {
        const r = await fetch("/api/noticias");
        if (!r.ok) return;
        const d = await r.json();
        if (cancelado || !d.titulares || d.titulares.length === 0) return;
        const titulares = d.titulares.map((t) => `📰 ${t}`);
        noticiasRef.current = titulares;
        // Mostramos una de entrada; las siguientes rotan por cada vuelta.
        setNoticia(titulares[Math.floor(Math.random() * titulares.length)]);
      } catch {
        // Si falla, simplemente no mostramos noticias (sin romper la cinta).
        if (!cancelado) noticiasRef.current = [];
      }
    };

    // Ubicación por IP, con un proveedor de respaldo si el primero falla.
    const obtenerUbicacion = async () => {
      try {
        const g = await (await fetch("https://ipwho.is/")).json();
        if (g && g.success !== false && g.latitude) {
          return { lat: g.latitude, lon: g.longitude, city: g.city };
        }
      } catch { /* probamos el respaldo */ }
      try {
        const g = await (await fetch("https://ipapi.co/json/")).json();
        if (g && g.latitude) {
          return { lat: g.latitude, lon: g.longitude, city: g.city };
        }
      } catch { /* sin ubicación */ }
      return null;
    };

    const cargarClima = async () => {
      try {
        const loc = await obtenerUbicacion();
        if (cancelado || !loc) return;
        const { lat, lon, city } = loc;

        const url =
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
          `&daily=temperature_2m_max,temperature_2m_min` +
          `&hourly=temperature_2m,precipitation_probability` +
          `&forecast_days=1&timezone=auto`;
        const w = await (await fetch(url)).json();
        if (cancelado || !w.daily) return;

        const min = Math.round(w.daily.temperature_2m_min[0]);
        const max = Math.round(w.daily.temperature_2m_max[0]);
        const horas = w.hourly.time;
        const lluvia = w.hourly.precipitation_probability;
        const temps = w.hourly.temperature_2m;

        const hora = (iso) => `${new Date(iso).getHours()}h`;

        // ¿Va a llover? buscamos la hora con mayor probabilidad si supera el 45%
        let idxLluvia = -1;
        lluvia.forEach((p, i) => {
          if (p >= 45 && (idxLluvia === -1 || p > lluvia[idxLluvia])) idxLluvia = i;
        });

        let fraseExtra = "";
        if (idxLluvia !== -1) {
          fraseExtra = `, ojo que puede llover cerca de las ${hora(horas[idxLluvia])} ` +
            `(${lluvia[idxLluvia]}% de probabilidad)`;
        } else if (min <= 8) {
          // Hora más fría del día
          let idxFrio = 0;
          temps.forEach((t, i) => { if (t < temps[idxFrio]) idxFrio = i; });
          fraseExtra = `, y va a hacer bastante frío alrededor de las ${hora(horas[idxFrio])}, ` +
            `¡abrigate!`;
        } else {
          fraseExtra = ", día sin lluvia a la vista";
        }

        const lugar = city ? `en ${city}` : "en tu ciudad";
        setClima(
          `El clima ${lugar} hoy: min ${min}° y max ${max}°${fraseExtra}`
        );
      } catch {
        if (!cancelado) setClima(null);
      }
    };

    cargarDolar();
    cargarBitcoin();
    cargarNoticias();
    cargarClima();
    return () => { cancelado = true; };
  }, []);

  const partes = [dolar, bitcoin, clima, noticia].filter(Boolean);
  const texto =
    partes.length > 0
      ? partes.join("   •••   ")
      : "Cargando cotización, bitcoin, clima y noticias de hoy...";

  return (
    <div
      className="w-full overflow-hidden border-b"
      style={{ backgroundColor: bgColor, borderColor: "rgba(245,210,68,0.18)" }}
      role="status"
      aria-live="polite"
    >
      <div
        className="flex items-center whitespace-nowrap py-1 text-[11px] md:text-xs"
        style={{ fontFamily: "monospace", color: textColor }}
      >
        <span className="px-3 select-none" style={{ color: accentColor }}>
          ~$
        </span>
        <div className="ticker-track" onAnimationIteration={rotarNoticia}>
          <span className="px-4">{texto}</span>
          <span className="px-4" aria-hidden="true">{texto}</span>
        </div>
        <span
          className="px-2 animate-pulse select-none"
          aria-hidden="true"
          style={{ color: accentColor }}
        >
          ▍
        </span>
      </div>
    </div>
  );
};

export default TopTicker;
