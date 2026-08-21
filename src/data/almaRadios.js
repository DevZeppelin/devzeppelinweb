/**
 * Emisoras que Alma Rockera retransmite. El primer objeto con `principal: true`
 * es el reproductor principal del sitio; el resto son emisoras alternativas.
 * Para sumar una nueva radio, agregar un objeto con su propio `embedSrc`.
 * `web` es opcional: si se conoce el sitio oficial de la emisora, se muestra un link.
 */
export const RADIOS = [
  {
    id: "alma-rockera",
    nombre: "Mendoza Suena Radio",
    descripcion: "Nuestra señal amniga en vivo: rock las 24 horas.",
    principal: true,
    fullWidth: true,
    height: 110,
    embedSrc: "https://radio17.servidorderadio.net/cp/widgets/player/single/?p=8034",
    web: "https://mendozasuena.com.ar",
  },
  {
    id: "undinamo-rock",
    nombre: "Undinamo Rock",
    descripcion: "Emisora amiga que retransmitimos como alternativa.",
    embedId: "ee01236ae",
    embedSrc:
      "https://streamingradioplayer.inovanex.com/s#/player-1#tema=5b9c07b2a2892d736b3871f9&id=ee01236ae&c=915ea9be2ec0f2d05b64bb43e1bab1f9e2beb1919ee1a678a9270c09c495730a&d=25a10fb2598a2ca6e8dc1de5b31304eaebced465a2eb1d5c28069b748b152c471b66854e3553162b71295a26fba94bb6752c42a504b70026615f3cb245193093dfb9b3dd026cf7e4949c01f95713ab3aa3c9896d1228275c4922bf672125d5b84a2b626654328493c8277320b0ff8cec89c44a78b3925b86a257b075059b6a24293a7ab9becf75647a898dbbd9ab2969f000320aee7a1cb72804a688a1b8bd525d71d75a78f3460c26574c93aaee4ed6c0dc42391130ca2ce382de3370642ec8cdf266fc147bdc736864d1d9e29edc756bb9283908225651fe67c41b525f5526d5c97c9a217d1c52464376799f5f336b5a7eb4372dc09b62fea2aedf71b5755814c9ca61cdcdcf45db29d47ca2da4a91f8c4eb33cc6367ba34f408b6ab58ff57",
  },
];
