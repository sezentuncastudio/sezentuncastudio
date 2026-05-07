
// Helper to build Wix URL
const W = (id, w=1400) => {
  const ext = id.endsWith('.png') ? 'png' : 'jpg';
  const h = w >= 1400 ? 1800 : Math.round(w * 1.33);
  return `https://static.wixstatic.com/media/${id}/v1/fill/w_${w},h_${h}/file.${ext}`;
};
const IMGS = {
  fleu:{
    hero: ASSETS['asset_fleu_hero.jpg'],  // 536 KB base64 → asset_fleu_hero.jpg
    grid: [
      W('4ff32a_e1cdb17782114c70af8383341f7b225d~mv2.jpg', 900),
      W('4ff32a_97002f94ed3743d899df2d2ee5e4a03e~mv2.jpg', 900),
      W('4ff32a_2b8f14f9d2ba4811b10c5ef63ad1d542~mv2.jpg', 900),
      W('4ff32a_fcf1fb111ad043d998be99153f970db7~mv2.jpg', 900),
      W('4ff32a_ea996e5b38c04421a0729560fbc53787~mv2.jpg', 900),
    ]
  },
  bargozzy:{
    hero: W('4ff32a_24899dcb6d344007a66a44e44e7e6e78~mv2.jpg'),
    grid: [
      W('4ff32a_d4201f8768b349f589fd5f8a4c85e45a~mv2.jpg', 900),
      W('4ff32a_d275eea384484f30a6a98d6f52d536c9~mv2.jpg', 900),
      W('4ff32a_60457206be464f7dad8b7a87a1ff85fa~mv2.jpg', 900),
      W('4ff32a_baf069ee05b44ccf8e7b509d5598510af003.jpg', 900),
      W('4ff32a_dc0f4e43086f420984a40560168167be~mv2.jpg', 900),
    ]
  },
  beachyside:{
    hero: W('4ff32a_b491d6a703594ddebe1636e59710c1a3~mv2.jpg'),
    grid: [
      W('4ff32a_8138fda167db47caa672698045874dad~mv2.jpg', 900),
      W('4ff32a_df0d8685ae21414bbcc8ea8b3c22c149~mv2.jpg', 900),
      W('4ff32a_d73651a7f2a54add87df5c9579c42887~mv2.jpg', 900),
      W('4ff32a_3fe3ee6dbb4242409aa2aee4d8de3412~mv2.jpg', 900),
      W('4ff32a_4f7fd2dfe13d4473b710a63f972eb732~mv2.jpg', 900),
    ]
  },
  tanks:{
    hero: ASSETS['asset_tanks_hero.mp4'],  // 436 KB base64 → asset_tanks_hero.mp4
  },
  melez:{
    hero: W('4ff32a_3f4cc39eda964c2d9844933fba4125a0~mv2.jpg'),
    grid: [
      W('4ff32a_e8e97816fe85472ea6de9beba45377e8~mv2.jpg', 900),
      W('4ff32a_b4a48a5a57114844b0986ded59bec1a6~mv2.jpg', 900),
      W('4ff32a_3ecb5c6748de4bb3943c5d302b7d698d~mv2.jpg', 900),
      W('4ff32a_eefffbaac6d44f4e9aed341ae9c3ee01~mv2.jpg', 900),
      W('4ff32a_9bd58f61d29b45b8a49bb9b8d2aabc27~mv2.jpg', 900),
    ]
  },
  bera:{
    hero: W('4ff32a_8dda795877b8486595667931f45466fb~mv2.jpg'),
    grid: [
      W('4ff32a_c7d77598dc9748ddb7d0f97e1bd8a19e~mv2.jpg', 900),
      W('4ff32a_9a601dfeef274dae94a03182a7b0a5c1~mv2.jpg', 900),
      W('4ff32a_3744b75345af477cb10c2caaee9278f2~mv2.jpg', 900),
      W('4ff32a_f2fd7ae024f64660953739458a7f05b3~mv2.jpg', 900),
      W('4ff32a_4d2148d8abee4702b3085d1804eed335~mv2.jpg', 900),
    ],
    instagram: 'DSo1UCyiL0k'
  },
  takecoff:{
    hero: W('4ff32a_999d0df633024b8787ac00aaf043fcac~mv2.jpg'),
    grid: [
      W('4ff32a_aa1ff90f2c17430cb401a8ebcf068549~mv2.jpg', 900),
      W('4ff32a_1aea08584e214af4bce3d40f2be5474c~mv2.jpg', 900),
      W('4ff32a_b989dd519b254f81a0d16618d8a51bbb~mv2.jpg', 900),
    ]
  },
  handloom:{
    hero: W('a825f2_3c04fff508a74cf1bbbf9cbd967007b3~mv2.jpg'),
    grid: [
      W('a825f2_ec07491f470c45e9b5cf42b5819c80d6~mv2.jpg', 900),
      W('a825f2_0600a6811823445caa5c7d5580bdd620~mv2.jpg', 900),
      W('a825f2_582d964fcefa4f39a49fba296d8e903e~mv2.jpg', 900),
      W('a825f2_7f761967e7e34537b6e6f1c1696b6984~mv2.jpg', 900),
      W('a825f2_f85c59d87be64e72a3d28541c4915fa6~mv2.jpg', 900),
    ]
  },
  odetosun:{
    hero: W('4ff32a_4a86607ca0f94fbea8ad661e3fa645ee~mv2.jpg'),
    grid: [
      W('4ff32a_6bdc0a4cdf2b4fa0bad1fc4b5c75d461~mv2.png', 900),
    ]
  },
  fleim:{
    hero: W('4ff32a_ceb90d09df544f4cbeceb2dfd6c54849~mv2.jpg'),
    grid: [
      W('4ff32a_65528615c5204d7fbe8f08315b5e1b0c~mv2.jpg', 900),
      W('4ff32a_81d1299fb4ea453fba08536f8be4ca41~mv2.jpg', 900),
      W('4ff32a_bc42c43d53cb44d3ad961c587069a242~mv2.jpg', 900),
      W('4ff32a_b32ea0dd983747d78cc39f79d176a069~mv2.png', 900),
      W('4ff32a_b09e6e9ce45f4c22aa8d3a34fbbe27e2~mv2.png', 900),
    ]
  },
  authenticseconds:{
    hero: W('4ff32a_abfd0ebdd6f94f18afd047db0d33a76c~mv2.jpg'),
    grid: [
      W('4ff32a_08aa702070844a928887fedd0d8ed22f~mv2.jpg', 900),
      W('4ff32a_8fbad546a90d400d85331fb9ecc04194~mv2.jpg', 900),
      W('4ff32a_19c2099aab5845af823eb94e835672e2~mv2.jpg', 900),
      W('4ff32a_418f3e6679c340c8a9cfcb43d828d9b3~mv2.jpg', 900),
      W('4ff32a_27def4c332804979923c5456a4bb1539~mv2.jpg', 900),
    ]
  },
  trattoria:{
    hero: W('4ff32a_c212030d97e84098a6d88c409188787b~mv2.jpg'),
    grid: [
      W('4ff32a_005dca2280e14149a46bd410e8fd0621~mv2.jpg', 900),
      W('4ff32a_1dc1e7c69a29429bb6ad148dad284f0f~mv2.png', 900),
      W('4ff32a_53c890668b6042e098ba57ed5a6dad21~mv2.png', 900),
      W('4ff32a_5cd3a0e552a14fe7818ebee9a407e035~mv2.png', 900),
      W('4ff32a_5d91e52025f04ab99df5af600b9c4e90~mv2.png', 900),
    ]
  },
  generation78:{
    hero: W('4ff32a_0abe3ecb196749e4af6a0953a0b7bf4e~mv2.jpg'),
    grid: [
      W('4ff32a_cec6087c5d6e45d9bce37cfa701f183a~mv2.jpeg', 900),
      W('4ff32a_b3ad9c30cf3c4975a4881251282c6596~mv2.jpeg', 900),
      W('4ff32a_f9894e88e91f43a68eee797284fe2134~mv2.jpg', 900),
    ]
  },
  ipekyol:{
    hero: W('4ff32a_8259688205c34de7b484de35f4e44d5a~mv2.jpg'),
    grid: [
      W('4ff32a_7d60de6dafb64a37aeae348cbc16000c~mv2.jpg', 900),
      W('4ff32a_0af38fea13664110a2574a6573b40bd3~mv2.jpg', 900),
    ]
  },
  nidnoi:{
    hero: W('4ff32a_d8393cc549af4ee3b7c28e12ca4e2660~mv2.jpg'),
    grid: [
      W('4ff32a_d88dbaa5a7904d9fbe08c48cb46b2fe8~mv2.jpg', 900),
      W('4ff32a_18f97ae67d154c679165a04e943a1704~mv2.jpg', 900),
      W('4ff32a_c0c669cc63554aec9b2b801b065de9af~mv2.jpg', 900),
      W('4ff32a_e351800aa97c495bab74261ad22c2cb8~mv2.jpg', 900),
    ]
  },
  giselle:{
    hero: W('4ff32a_ea0930af27ff45c8a8c5e0c9c8d46167~mv2.jpg'),
    grid: [
      W('4ff32a_402a78cdc5ce4970bfc7ce590e71c6ba~mv2.jpg', 900),
      W('4ff32a_ee6f24e471b14a9db02ecbb27f15c267~mv2.jpg', 900),
    ]
  }
};
const DESC_EN = {
  fleu:'A complete brand identity and packaging system for Fléu, an Istanbul-based luxury leather handbag brand.',
  bargozzy:'A bold, memorable visual identity for Bargozzy — a pizza brand built by pizza lovers, for pizza lovers.',
  beachyside:'A refined packaging and identity system for a sea-inspired beauty brand.',
  tanks:'A visual identity system built around a dynamic, powerful brand voice.',
  melez:'A nature-inspired, organic packaging language for wellness brand Melez.',
  bera:'A timeless and sophisticated visual identity for retail brand BERA.',
  takecoff:'A minimal, characterful packaging system for gourmet sandwich brand Takecoff.',
  handloom:'Visual direction and campaign design for a Los Angeles-based textile brand.',
  odetosun:'A poetic and luxurious packaging language for a Mediterranean olive oil soap brand.',
  fleim:'A complete brand identity and packaging system for Fléim.',
  authenticseconds:'A powerful, dark, and sophisticated identity for a pre-loved luxury goods platform.',
  trattoria:'A warm, authentic, and inviting visual identity for an Italian restaurant.',
  generation78:'A striking art direction for a fashion brand campaign.',
  ipekyol:'Art direction for the holiday campaign of Turkey\'s heritage fashion brand.',
  nidnoi:'A natural and intimate visual identity for a Thai-inspired boutique hotel.',
  giselle:'An elegant and contemporary visual identity system for restaurant brand Giselle.'
};
const TITLES = {fleu:'Fléu',bargozzy:'Bargozzy',beachyside:'My Beachy Side',tanks:'TANKS',melez:'Melez',bera:'BERA',takecoff:'Takecoff',handloom:'The Handloom LA',odetosun:'Ode to Sun',fleim:'Fléim',authenticseconds:'Authentic Seconds',trattoria:'Trattoria di Kukina',generation78:'Génération 78',ipekyol:'İpekyol',nidnoi:'Nid Noi',giselle:'Giselle'};
const CATS_EN = {fleu:'Brand Identity · Packaging',bargozzy:'Brand Identity',beachyside:'Packaging Design',tanks:'Brand Identity',melez:'Packaging Design',bera:'Brand Identity',takecoff:'Packaging Design',handloom:'Art Direction',odetosun:'Packaging Design',fleim:'Brand Identity · Packaging',authenticseconds:'Brand Identity',trattoria:'Brand Identity',generation78:'Art Direction',ipekyol:'Art Direction',nidnoi:'Brand Identity',giselle:'Brand Identity'};
