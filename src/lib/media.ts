// Every file lives in /public/media, named by its original asset id.
// This module gives every asset a readable name so components never
// reference bare hashes.
const m = (id: string, ext: string) => `/media/${id}.${ext}`;

export const media = {
  mascot: m("9e0e7a3feccefb6ec0b739df8159cbf4", "png"),
  cv: m("84e23b111e0b3e5de2d4fafa7f629053", "pdf"),
  aboutPortrait: m("ddedc6dbc2837b842b0d27518793e8d9", "jpg"),

  logos: {
    instagram: m("eb7bf57d1fcbf4a6ebf0a9e5ecb2fe9f", "png"),
    tiktok: m("1377ef25a3cca45fbf33699ce29ba67a", "png"),
    canva: m("abee429db30439435d75306f536f869f", "png"),
    photoshop: m("444f60fe93a39ed4f3f91d5df9fa6f00", "png"),
    illustrator: m("99ebc9969a0db0e8692ef080ca1edb4b", "png"),
    capcut: m("8c93cfab28473f823e4ed36d3f0562fe", "png"),
    claude: m("536f5f4db7647cd3034974f318e5ee26", "png"),
    adobePodcast: m("d20e66653b49ade54bf3c315ce276214", "png"),
    lightroom: m("de6ed3440c61e042f98705390a65b791", "png"),
    figma: m("f3aecc64b3b547d92d39ed38e3f67b5d", "png"),
  },

  designGraphique: {
    lyds: [
      m("43c5e82544c10ac9a3374e39a078172d", "jpg"),
      m("a5ec809415f671512ba7ceffc59c28ed", "jpg"),
      m("3954b9f8a041ebaf65af7fe01ed171b3", "jpg"),
      m("1dca6228145131f5bebbe5745947919f", "jpg"),
      m("5f74351e20d1ba0c98b6b943d0a00474", "jpg"),
      m("6ea7cecb0631a80dcead1a02c5847d81", "jpg"),
      m("ea206f62030e698a28955c2e9f54d2d4", "jpg"),
      m("7f4556568f37920543cac3bafa022efe", "jpg"),
    ],
    macbook: [m("be279b2192fa170a6301fa827f98d2de", "jpg")],
    jal: [
      m("ccd61c7b0646223ab70d709666475dd7", "jpg"),
      m("f15933ad2c19fcd19e82fad3089a7d0e", "jpg"),
      m("89250f67dd8a7119821c94f55c9f001f", "jpg"),
      m("caca932b839c4747baadbc1e666b454e", "jpg"),
      m("31e0b12843d873f016392b23a1143982", "jpg"),
      m("36f3151c743db4e3cb7e80581b93b12d", "jpg"),
    ],
    brave: [m("ad9eea76d7f350a39fe2429f7467e2d7", "jpg")],
    bravev: [m("21a3f4b1cb6c0355caaca322800be4dc", "png")],
    studio: [m("f90ac094cc37fe47731e8bf7162b7236", "jpg")],
    services: [m("8ea1a2933059051958df0a3c90d871cd", "jpg")],
    bilan: [m("39d6af3f89ca3fcde95ec8590732b0ca", "jpg")],
    ia: [m("1852152b8733d71ef3fd7c7960e5c098", "jpg")],
    peau: [m("8da54aea1d15bd494666df8661eb98e9", "jpg")],
    dentitor: [m("af714269588ffe5c8c42fd38a62a59d8", "jpg")],
  },

  webux: {
    mammonet: [
      m("60b55f1c430efec0510b721ad9be0ce7", "jpg"),
      m("1d9eb3bf8d077bbcde21504eb2d5a34c", "jpg"),
      m("3485be3539f2629fb0a9a57996c4a8fa", "jpg"),
      m("6cbd93ecc64e8fead77159d045965933", "jpg"),
      m("b3fe4039fe7257aa94598cda485e0a20", "jpg"),
      m("a35703973437aef857257b2abba73166", "jpg"),
      m("eb29bb00202d80a51951d567a04f6b40", "jpg"),
      m("669cabe0c6defe546e35c0143f132718", "jpg"),
      m("aecc80bc1fddfda75eea2a4e79b807b5", "jpg"),
      m("c2721682d32afeb0b37a65bd80c4d236", "jpg"),
      m("55fdbaf8716cb5b0da17958440dbb502", "jpg"),
    ],
    meditrace: [
      m("06060eda386685df57df28276142f227", "jpg"),
      m("9b05c7343f1a9ca6292b7029816981d0", "jpg"),
      m("b22ed86584867718bcb8bb5a8129ae89", "jpg"),
      m("02b9b0277c67f2af0d1eda8f8ac8468f", "jpg"),
      m("67ab135668f933989b93973c6ecdd041", "jpg"),
      m("b0e6d0c1769ee6bf676ba56684db111e", "jpg"),
      m("884405b2593e9d9e2ba3a8be52b338c8", "jpg"),
      m("6b1190265516cb4397d58d8494c2d369", "jpg"),
      m("17a8e57149e5435703f6e7d04f1d99ca", "jpg"),
    ],
  },

  photographie: {
    dip: [
      m("888c2f3f2416b8656107edbcb524b372", "jpg"),
      m("2d6795b08abd313310218a79e8b752f4", "jpg"),
      m("bb5409cd45235bde0b566414d0e62766", "jpg"),
      m("cabdf506dacf2d20e0d9d3f5bd44c1bc", "jpg"),
      m("e0b812af91b37843f4763fd3098fa002", "jpg"),
      m("5c72e30128679fd4bc7cadb9d413bf12", "jpg"),
      m("900ff6aa0cf20ad6ee6500df20c9713e", "jpg"),
      m("da267ae97d608c8b2f6b281d00d2fdcd", "jpg"),
    ],
    indaba: [
      m("7634c81a8addeaa2a8a13657ac0e98c0", "jpg"),
      m("c10931fec5d002e101fd08f4953bb063", "jpg"),
      m("4d18936eacf5bae4c5cef6a3037391b3", "jpg"),
      m("0adce7d23b9e16d103bca30b235b5df7", "jpg"),
      m("ac03b0781481e8ea6968642e6ffa1228", "jpg"),
      m("8762f81217fd80cb3341eea7bbf54ce8", "jpg"),
    ],
    sout: [
      m("692b4fe4b7dc2e3767b204ab781a676c", "jpg"),
      m("195bee941134c005dc1a65d27f062c98", "jpg"),
    ],
    perso: [m("b0d7670b011b4dc342655de2a1f0b122", "jpg")],
  },

  videos: {
    quiEstLyds: { src: m("58292d50c6f84bff8883ae78ebddc97a", "mp4"), poster: m("c61610264f516a5429386380df8c204f", "jpg") },
    tassiHangbe: { src: m("f194f793b8c7582132166195dae914c0", "mp4"), poster: m("e8abd8740637ca2ab319e4cd1b654112", "jpg") },
    saraBaartman: { src: m("481936c18b9daba7538d749bfd47647c", "mp4"), poster: m("cd06b6073ea9ae71a9ad4cffe3957844", "jpg") },
    unboxing: { src: m("be42bfffd01f5c46e4b64058eed86e39", "mp4"), poster: m("9226915b59d864333e38072dd10e5525", "jpg") },
    ademo: { src: m("93a79cdc7e1bfbb0dd3bbca784ad249b", "mp4"), poster: m("5c9e949f8dbd7eb6a885a8a47b324376", "jpg") },
  },

  parcoursCerts: [
    m("5ab6a77e50623378ad9304361828efeb", "jpg"),
    m("35de960997c9655b9b530107c0dcfc24", "jpg"),
    m("7d9c77358d78aee601aeb514e8a63734", "jpg"),
    m("80925ae2be011336a5b4ed947deb9d57", "jpg"),
    m("8c3f928275418a389fb0501a891b88b2", "jpg"),
    m("e42747bebf9655f247acfc0c62a54501", "jpg"),
    m("ddf59cfc6354ac74f0c207c0165ccb86", "jpg"),
    m("c2be25037e65a95ea9ece268fadf7707", "jpg"),
  ],
};
