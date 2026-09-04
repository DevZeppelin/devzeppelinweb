import { useMemo, useState } from "react";
import Layout from "@/components/layout/Layout";
import Seo from "@/components/Seo";
import { contact, site } from "@/lib/site";
import { breadcrumbJsonLd } from "@/lib/seo";
import { FaWhatsapp } from "react-icons/fa";

/**
 * /diagnostico — Autodiagnóstico digital para potenciales clientes.
 *
 * El visitante completa un pantallazo del estado de su negocio (web, redes,
 * qué le hace falta, propósito). Ninguna respuesta es obligatoria. Al finalizar
 * se arma un resumen de texto bien estructurado y se abre WhatsApp hacia el
 * número de Dev Zeppelin con ese resumen listo para enviar. No se envía nada a
 * ningún servidor: todo ocurre en el navegador.
 */

const WEB_OPTIONS = [
  "No tengo página web",
  "Tengo, pero está desactualizada o incompleta",
  "Tengo y funciona bien",
  "Solo uso Instagram / Facebook como \"web\"",
];

const ACTIVIDAD_OPTIONS = [
  "Publico seguido",
  "Muy de vez en cuando",
  "Están bastante abandonadas",
];

const REDES = ["Instagram", "Facebook", "TikTok", "YouTube", "LinkedIn", "Ninguna"];

const NECESIDADES = [
  "Una página web",
  "Mantener mis redes activas y prolijas",
  "Reels o videos para mostrar lo que hago",
  "Un sistema o automatización para ordenar el trabajo",
  "Capacitar a mi equipo en tecnología / IA",
  "Renovar mi imagen / logo",
  "Todavía no lo tengo claro",
];

export default function Diagnostico() {
  const [form, setForm] = useState({
    negocio: "",
    rubro: "",
    web: "",
    webUrl: "",
    redes: [],
    actividad: "",
    necesidades: [],
    proposito: "",
    comentario: "",
    contacto: "",
  });
  const [copiado, setCopiado] = useState(false);

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setCopiado(false);
  };

  const toggle = (key, value) => () => {
    setForm((f) => {
      const list = f[key];
      return {
        ...f,
        [key]: list.includes(value)
          ? list.filter((v) => v !== value)
          : [...list, value],
      };
    });
    setCopiado(false);
  };

  const resumen = useMemo(() => {
    const lines = ["*DIAGNÓSTICO DIGITAL · DEV ZEPPELIN*", ""];
    const add = (label, value) => {
      if (value && String(value).trim()) lines.push(`• *${label}:* ${String(value).trim()}`);
    };

    add("Negocio", form.negocio);
    add("Rubro", form.rubro);
    add("Página web", form.web);
    add("Link / red actual", form.webUrl);
    if (form.redes.length) add("Redes que tiene", form.redes.join(", "));
    add("Actividad en redes", form.actividad);
    if (form.necesidades.length)
      add("Qué siente que le falta", form.necesidades.join(" · "));
    add("Propósito / objetivo del año", form.proposito);
    add("Comentario", form.comentario);
    add("Contacto", form.contacto);

    if (lines.length === 2) return "";

    lines.push("", "— Enviado desde devzeppelin.ar/diagnostico");
    return lines.join("\n");
  }, [form]);

  const vacio = resumen === "";

  const enviarWhatsapp = () => {
    if (vacio) return;
    const url = `https://api.whatsapp.com/send?phone=${contact.whatsappNumber}&text=${encodeURIComponent(
      resumen
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const copiar = async () => {
    if (vacio) return;
    try {
      await navigator.clipboard.writeText(resumen);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    } catch {
      /* si el navegador bloquea el portapapeles, el usuario puede copiar del preview */
    }
  };

  const labelCls =
    "block text-yellow font-bold mb-2 tracking-wide uppercase text-xs";
  const inputCls =
    "w-full rounded-lg bg-primary border border-yellow/30 text-lightGray p-3 outline-none focus:border-yellow transition-colors placeholder:text-gray";
  const chipBase =
    "cursor-pointer select-none rounded-full border px-4 py-2 text-sm transition-all";

  return (
    <div>
      <Seo
        title="Autodiagnóstico digital gratis | Dev Zeppelin"
        description="Contanos en 2 minutos cómo está tu negocio online (web, redes, qué te hace falta) y te devolvemos por WhatsApp una propuesta concreta. Ninguna respuesta es obligatoria."
        path="/diagnostico"
        jsonLd={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Diagnóstico", path: "/diagnostico" },
        ])}
      />

      <Layout classDiagnostico={"bg-secundary text-yellow"}>
        <div className="bg-hero-pages bg-cover text-center py-16 md:py-32 px-4">
          <p
            className="text-xs tracking-widest text-yellow mb-3 uppercase"
            style={{ fontFamily: "Orbitron, sans-serif", opacity: 0.7 }}
          >
            ━━&nbsp; 2 minutos &nbsp;━━
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-yellow uppercase textDark">
            Autodiagnóstico digital
          </h1>
          <p className="text-lightGray max-w-2xl mx-auto mt-5 leading-relaxed">
            Contanos cómo está hoy tu negocio en internet. Con eso armamos un
            pantallazo y te sugerimos una propuesta concreta. No hace falta que
            respondas todo: completá lo que sepas y listo.
          </p>
        </div>

        <section className="max-w-3xl mx-auto px-4 md:px-6 py-12 md:py-16 text-lightGray">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              enviarWhatsapp();
            }}
            className="space-y-10"
          >
            {/* Negocio */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelCls} htmlFor="negocio">
                  Nombre del negocio
                </label>
                <input
                  id="negocio"
                  className={inputCls}
                  value={form.negocio}
                  onChange={set("negocio")}
                  placeholder="Ej.: Kiosco La Esquina"
                />
              </div>
              <div>
                <label className={labelCls} htmlFor="rubro">
                  Rubro
                </label>
                <input
                  id="rubro"
                  className={inputCls}
                  value={form.rubro}
                  onChange={set("rubro")}
                  placeholder="Ej.: gastronomía, indumentaria, servicios…"
                />
              </div>
            </div>

            {/* Web */}
            <div>
              <label className={labelCls}>¿Tenés página web?</label>
              <div className="flex flex-wrap gap-2">
                {WEB_OPTIONS.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => {
                      setForm((f) => ({ ...f, web: f.web === opt ? "" : opt }));
                      setCopiado(false);
                    }}
                    className={`${chipBase} ${
                      form.web === opt
                        ? "bg-yellow text-primary border-yellow font-bold"
                        : "border-yellow/30 text-lightGray hover:border-yellow"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <input
                className={`${inputCls} mt-3`}
                value={form.webUrl}
                onChange={set("webUrl")}
                placeholder="Link de tu web o red principal (opcional)"
              />
            </div>

            {/* Redes */}
            <div>
              <label className={labelCls}>¿En qué redes estás?</label>
              <div className="flex flex-wrap gap-2">
                {REDES.map((red) => (
                  <button
                    type="button"
                    key={red}
                    onClick={toggle("redes", red)}
                    className={`${chipBase} ${
                      form.redes.includes(red)
                        ? "bg-yellow text-primary border-yellow font-bold"
                        : "border-yellow/30 text-lightGray hover:border-yellow"
                    }`}
                  >
                    {red}
                  </button>
                ))}
              </div>

              <label className={`${labelCls} mt-5`}>
                ¿Qué tan activas están?
              </label>
              <div className="flex flex-wrap gap-2">
                {ACTIVIDAD_OPTIONS.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => {
                      setForm((f) => ({
                        ...f,
                        actividad: f.actividad === opt ? "" : opt,
                      }));
                      setCopiado(false);
                    }}
                    className={`${chipBase} ${
                      form.actividad === opt
                        ? "bg-yellow text-primary border-yellow font-bold"
                        : "border-yellow/30 text-lightGray hover:border-yellow"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Necesidades */}
            <div>
              <label className={labelCls}>
                ¿Qué sentís que te hace falta? (elegí las que quieras)
              </label>
              <div className="flex flex-wrap gap-2">
                {NECESIDADES.map((opt) => (
                  <button
                    type="button"
                    key={opt}
                    onClick={toggle("necesidades", opt)}
                    className={`${chipBase} ${
                      form.necesidades.includes(opt)
                        ? "bg-yellow text-primary border-yellow font-bold"
                        : "border-yellow/30 text-lightGray hover:border-yellow"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Propósito */}
            <div>
              <label className={labelCls} htmlFor="proposito">
                ¿Cuál es el propósito de tu negocio o qué querés lograr este año?
              </label>
              <textarea
                id="proposito"
                className={`${inputCls} min-h-[110px] resize-y`}
                value={form.proposito}
                onChange={set("proposito")}
                placeholder="Ej.: quiero que me encuentren más fácil y llegar a clientes de otras zonas."
              />
            </div>

            {/* Comentario */}
            <div>
              <label className={labelCls} htmlFor="comentario">
                Algo más que quieras contarnos
              </label>
              <textarea
                id="comentario"
                className={`${inputCls} min-h-[90px] resize-y`}
                value={form.comentario}
                onChange={set("comentario")}
                placeholder="Opcional"
              />
            </div>

            {/* Contacto */}
            <div>
              <label className={labelCls} htmlFor="contacto">
                Tu nombre y cómo contactarte
              </label>
              <input
                id="contacto"
                className={inputCls}
                value={form.contacto}
                onChange={set("contacto")}
                placeholder="Nombre + teléfono o @usuario (opcional)"
              />
            </div>

            {/* Preview */}
            <div>
              <label className={labelCls}>Resumen que vas a enviar</label>
              <pre
                className="w-full rounded-lg bg-primary border border-yellow/20 p-4 text-sm text-lightGray whitespace-pre-wrap break-words min-h-[80px]"
                style={{ fontFamily: "ui-monospace, monospace" }}
              >
                {vacio
                  ? "Completá al menos un campo para generar el resumen…"
                  : resumen}
              </pre>
            </div>

            {/* Acciones */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button
                type="submit"
                disabled={vacio}
                className="btn w-full sm:w-auto disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="text-lg" />
                Enviar por WhatsApp
              </button>
              <button
                type="button"
                onClick={copiar}
                disabled={vacio}
                className="text-yellow underline underline-offset-4 disabled:opacity-40 disabled:cursor-not-allowed text-sm"
              >
                {copiado ? "¡Copiado!" : "Copiar resumen"}
              </button>
            </div>

            <p className="text-gray text-xs leading-relaxed">
              No enviamos tus datos a ningún servidor. Al tocar “Enviar por
              WhatsApp” se abre un chat con {site.name} (+{contact.whatsappNumber})
              con este resumen listo para que lo mandes vos.
            </p>
          </form>
        </section>
      </Layout>
    </div>
  );
}
