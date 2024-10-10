const teams = [
  {
    name: "FC Barcelona",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/2/24/FC_Barcelona.svg/1024px-FC_Barcelona.svg.png",
    stadium: {
      name: "Camp Nou ðŸŸï¸",
      capacity: 99354,
    },
    history:
      "Founded in 1899 ðŸ†, FC Barcelona is one of the most successful clubs in European football history. Known for its attacking style of play and world-class players.",
    top_scorer: {
      name: "Lionel Messi ðŸ‘‘",
      goals: "672 âš½ï¸",
    },
    trophies: {
      LaLiga: "27 ðŸ†",
      "UEFA Champions League": "5 ðŸ†",
      "Copa del Rey": "31 ðŸ†",
      "UEFA Super Cup": "5 ðŸ†",
      "FIFA Club World Cup": "3 ðŸ†",
    },
    manager: "Xavi Hernandez ðŸ§ ",
    founded: "1899 â³",
    city: "Barcelona, Spain ðŸŒ",
    colors: ["Blue ðŸ”µ", "Red ðŸ”´"],
    rivalries: ["Real Madrid âš”ï¸", "Espanyol âš”ï¸"],
    owner: "Club members (Socios) ðŸ¢",
    kit: "https://www.soccerlord.se/wp-content/uploads/2018/09/Barcelona-Home-Long-Sleeve-Football-Shirt-24-25.jpg",
    id: 1,
  },
  {
    name: "Real Madrid CF",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/8/8a/FC_Real_Madrid_Logo.svg/800px-FC_Real_Madrid_Logo.svg.png",
    stadium: {
      name: "Santiago BernabÃ©u ðŸŸï¸",
      capacity: 81044,
    },
    history:
      "Founded in 1902 ðŸ†, Real Madrid is one of the most popular and successful football clubs in the world. The club is known for its strong European success.",
    top_scorer: {
      name: "Cristiano Ronaldo ðŸ‘‘",
      goals: "450 âš½ï¸",
    },
    trophies: {
      LaLiga: "35 ðŸ†",
      "UEFA Champions League": "14 ðŸ†",
      "Copa del Rey": "20 ðŸ†",
      "UEFA Super Cup": "5 ðŸ†",
      "FIFA Club World Cup": "4 ðŸ†",
    },
    manager: "Carlo Ancelotti ðŸ§ ",
    founded: "1902 â³",
    city: "Madrid, Spain ðŸŒ",
    colors: ["White âšªï¸"],
    rivalries: ["FC Barcelona âš”ï¸", "AtlÃ©tico Madrid âš”ï¸"],
    owner: "Club members (Socios) ðŸ¢",
    kit: "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFMZ0195-01-1.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=1200&q=50",
    id: 2,
  },
  {
    name: "Manchester United FC",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/7/7a/Manchester_United_FC_crest.svg/1024px-Manchester_United_FC_crest.svg.png",
    stadium: {
      name: "Old Trafford ðŸŸï¸",
      capacity: 74879,
    },
    history:
      "Founded in 1878 ðŸ†, Manchester United is one of the most successful English clubs with a rich history. Known for their iconic 'Class of '92'.",
    top_scorer: {
      name: "Wayne Rooney ðŸ‘‘",
      goals: "253 âš½ï¸",
    },
    trophies: {
      "Premier League": "20 ðŸ†",
      "UEFA Champions League": "3 ðŸ†",
      "FA Cup": "12 ðŸ†",
      "EFL Cup": "5 ðŸ†",
      "FIFA Club World Cup": "1 ðŸ†",
    },
    manager: "Erik ten Hag ðŸ§ ",
    founded: "1878 â³",
    city: "Manchester, England ðŸŒ",
    colors: ["Red ðŸ”´", "White âšªï¸"],
    rivalries: ["Manchester City âš”ï¸", "Liverpool âš”ï¸"],
    owner: "Glazer Family ðŸ¢",
    kit: "https://footballcentral.co.nz/cdn/shop/files/ManchesterUnitedAdultHomeJersey2425_f4291c4c-0af5-4df2-b0c2-3329ccda5461_700x700.jpg?v=1720014868",
    id: 3,
  },
  {
    name: "Liverpool FC",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/0/0a/FC_Liverpool.svg/800px-FC_Liverpool.svg.png",
    stadium: {
      name: "Anfield ðŸŸï¸",
      capacity: 53394,
    },
    history:
      "Founded in 1892 ðŸ†, Liverpool FC is one of the most decorated English clubs. The team is known for its passionate fans and 'You'll Never Walk Alone' anthem.",
    top_scorer: {
      name: "Ian Rush ðŸ‘‘",
      goals: "346 âš½ï¸",
    },
    trophies: {
      "Premier League": "19 ðŸ†",
      "UEFA Champions League": "6 ðŸ†",
      "FA Cup": "8 ðŸ†",
      "EFL Cup": "9 ðŸ†",
      "FIFA Club World Cup": "1 ðŸ†",
    },
    manager: "JÃ¼rgen Klopp ðŸ§ ",
    founded: "1892 â³",
    city: "Liverpool, England ðŸŒ",
    colors: ["Red ðŸ”´"],
    rivalries: ["Manchester United âš”ï¸", "Everton âš”ï¸"],
    owner: "Fenway Sports Group ðŸ¢",
    kit: "https://www.soccerlord.se/wp-content/uploads/2019/04/Liverpool-Home-Football-Shirt-24-25.jpg",
    id: 4,
  },
  {
    name: "Bayern Munich",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/1024px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
    stadium: {
      name: "Allianz Arena ðŸŸï¸",
      capacity: 75000,
    },
    history:
      "Founded in 1900 ðŸ†, Bayern Munich is the most successful German club, known for its dominance in the Bundesliga and European success.",
    top_scorer: {
      name: "Gerd MÃ¼ller ðŸ‘‘",
      goals: "566 âš½ï¸",
    },
    trophies: {
      Bundesliga: "33 ðŸ†",
      "UEFA Champions League": "6 ðŸ†",
      "DFB-Pokal": "20 ðŸ†",
      "UEFA Super Cup": "2 ðŸ†",
      "FIFA Club World Cup": "2 ðŸ†",
    },
    manager: "Thomas Tuchel ðŸ§ ",
    founded: "1900 â³",
    city: "Munich, Germany ðŸŒ",
    colors: ["Red ðŸ”´", "White âšªï¸"],
    rivalries: ["Borussia Dortmund âš”ï¸"],
    owner: "Club members (75%) and Audi, Adidas, Allianz (25%) ðŸ¢",
    kit: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgPPdc08vo_BG3uAjNcfsi5IF1D4oJUu2EfRgcCxhGEc4RhUh_273PcrEhvjjuPhXqPRG1P0bXOGLJj98Lp4PdtKuC-pYuhugrmBabyuEWW8cMGCq-kSf4wwvPOIwwV0I0X3q0NZJS1atuInA79o4XTj9dRP3yCwH7-XNViUcmjzgXSdo_qrCxg7msUyLgz/s1000/bayern%2024-25%20home%20kit%20red%20white%20%283%29.jpg",
    id: 5,
  },
  {
    name: "Paris Saint-Germain",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1024px-Paris_Saint-Germain_F.C..svg.png",
    stadium: {
      name: "Parc des Princes ðŸŸï¸",
      capacity: 47929,
    },
    history:
      "Founded in 1970 ðŸ†, Paris Saint-Germain (PSG) is one of the most successful French clubs, especially in the recent decade.",
    top_scorer: {
      name: "Edinson Cavani ðŸ‘‘",
      goals: "200 âš½ï¸",
    },
    trophies: {
      "Ligue 1": "11 ðŸ†",
      "Coupe de France": "14 ðŸ†",
      "Coupe de la Ligue": "9 ðŸ†",
      "TrophÃ©e des Champions": "11 ðŸ†",
    },
    manager: "Luis Enrique ðŸ§ ",
    founded: "1970 â³",
    city: "Paris, France ðŸŒ",
    colors: ["Blue ðŸ”µ", "Red ðŸ”´"],
    rivalries: ["Marseille âš”ï¸"],
    owner: "Qatar Sports Investments ðŸ¢",
    kit: "https://images.footballfanatics.com/paris-saint-germain/psg-nike-home-stadium-shirt-2024-25_ss5_p-200827669+pv-2+u-zsehjrrtq4aszhqrqd0f+v-gfgancmusfnavrx7ghgz.jpg?_hv=2&w=900",
    id: 6,
  },
  {
    name: "Juventus FC",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Juventus_FC_-_pictogram_black_%28Italy%2C_2017%29.svg/800px-Juventus_FC_-_pictogram_black_%28Italy%2C_2017%29.svg.png",
    stadium: {
      name: "Allianz Stadium ðŸŸï¸",
      capacity: 41507,
    },
    history:
      "Founded in 1897 ðŸ†, Juventus is the most successful Italian club, known for its success in Serie A and notable players like Alessandro Del Piero.",
    top_scorer: {
      name: "Alessandro Del Piero ðŸ‘‘",
      goals: "290 âš½ï¸",
    },
    trophies: {
      "Serie A": "36 ðŸ†",
      "Coppa Italia": "14 ðŸ†",
      "UEFA Champions League": "2 ðŸ†",
      "UEFA Europa League": "3 ðŸ†",
      "Supercoppa Italiana": "9 ðŸ†",
    },
    manager: "Massimiliano Allegri ðŸ§ ",
    founded: "1897 â³",
    city: "Turin, Italy ðŸŒ",
    colors: ["Black âš«ï¸", "White âšªï¸"],
    rivalries: ["Inter Milan âš”ï¸", "AC Milan âš”ï¸"],
    owner: "Agnelli Family (Exor N.V.) ðŸ¢",
    kit: "https://store.juventus.com/images/juventus/products/large/JU24E81_1.webp",
    id: 7,
  },
  {
    name: "Manchester City FC",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/9/96/Manchester_City_FC.svg/1024px-Manchester_City_FC.svg.png",
    stadium: {
      name: "Etihad Stadium ðŸŸï¸",
      capacity: 53400,
    },
    history:
      "Founded in 1880 ðŸ†, Manchester City became a major force in English football in the 2010s with the backing of the Abu Dhabi United Group.",
    top_scorer: {
      name: "Sergio AgÃ¼ero ðŸ‘‘",
      goals: "260 âš½ï¸",
    },
    trophies: {
      "Premier League": "9 ðŸ†",
      "FA Cup": "6 ðŸ†",
      "EFL Cup": "8 ðŸ†",
      "UEFA Champions League": "1 ðŸ†",
    },
    manager: "Pep Guardiola ðŸ§ ",
    founded: "1880 â³",
    city: "Manchester, England ðŸŒ",
    colors: ["Sky Blue ðŸ”µ", "White âšªï¸"],
    rivalries: ["Manchester United âš”ï¸"],
    owner: "City Football Group ðŸ¢",
    kit: "https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw887b23ea/images/large/701230876001_pp_01_mcfc.png?sw=800&sh=800&sm=fit",
    id: 8,
  },
  {
    name: "Chelsea FC",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/f/f7/FC_Chelsea_Logo.svg/1024px-FC_Chelsea_Logo.svg.png",
    stadium: {
      name: "Stamford Bridge ðŸŸï¸",
      capacity: 41837,
    },
    history:
      "Founded in 1905 ðŸ†, Chelsea became a major force in English football in the 2000s after being purchased by Roman Abramovich.",
    top_scorer: {
      name: "Frank Lampard ðŸ‘‘",
      goals: "211 âš½ï¸",
    },
    trophies: {
      "Premier League": "6 ðŸ†",
      "UEFA Champions League": "2 ðŸ†",
      "FA Cup": "8 ðŸ†",
      "EFL Cup": "5 ðŸ†",
      "UEFA Europa League": "2 ðŸ†",
    },
    manager: "Mauricio Pochettino ðŸ§ ",
    founded: "1905 â³",
    city: "London, England ðŸŒ",
    colors: ["Blue ðŸ”µ", "White âšªï¸"],
    rivalries: ["Arsenal âš”ï¸", "Tottenham âš”ï¸"],
    owner: "Clearlake Capital (Todd Boehly consortium) ðŸ¢",
    kit: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEixQ6nlTxrwxSOZvnsV404erKG0WnKXUGZCwrfuiyT_IDoCByIIGPQMksgiPIioaF-IqcRxMpnco6kiYYG5kwK2ZucMQ4_WZo-yg3XS62rPOjv3eXz-ubIgWa9UJ5LMdVQhECvGjWcPDFS2-BBDsELqbvce-c4D3hU0UOUwgBVhCaSmUmHcyA1phkHhAoXo/s1600/chelsea%2024%2025%20kit%20%288%29.jpg",
    id: 9,
  },
  {
    name: "AC Milan",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_AC_Milan.svg/800px-Logo_of_AC_Milan.svg.png",
    stadium: {
      name: "San Siro ðŸŸï¸",
      capacity: 80018,
    },
    history:
      "Founded in 1899 ðŸ†, AC Milan is one of the most successful Italian clubs, known for its European success in the 1990s.",
    top_scorer: {
      name: "Gunnar Nordahl ðŸ‘‘",
      goals: "221 âš½ï¸",
    },
    trophies: {
      "Serie A": "19 ðŸ†",
      "UEFA Champions League": "7 ðŸ†",
      "Coppa Italia": "5 ðŸ†",
      "UEFA Super Cup": "5 ðŸ†",
      "FIFA Club World Cup": "1 ðŸ†",
    },
    manager: "Stefano Pioli ðŸ§ ",
    founded: "1899 â³",
    city: "Milan, Italy ðŸŒ",
    colors: ["Red ðŸ”´", "Black âš«ï¸"],
    rivalries: ["Inter Milan âš”ï¸"],
    owner: "RedBird Capital Partners ðŸ¢",
    kit: "https://store.acmilan.com/cdn/shop/files/774949-A81_01_2738c450-dc7c-49a3-a94f-92f287d6bd98_grande.jpg?v=1716443193",
    id: 10,
  },
  {
    name: "AtlÃ©tico Madrid",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/0/01/FC_Atletico_Madrid_Logo.svg/800px-FC_Atletico_Madrid_Logo.svg.png",
    stadium: {
      name: "Wanda Metropolitano ðŸŸï¸",
      capacity: 68456,
    },
    history:
      "Founded in 1903 ðŸ†, AtlÃ©tico Madrid is known for its resilient defense and passionate supporters. One of the most successful Spanish clubs.",
    top_scorer: {
      name: "Luis AragonÃ©s ðŸ‘‘",
      goals: "172 âš½ï¸",
    },
    trophies: {
      LaLiga: "11 ðŸ†",
      "UEFA Europa League": "3 ðŸ†",
      "Copa del Rey": "10 ðŸ†",
      "UEFA Super Cup": "3 ðŸ†",
      "Intercontinental Cup": "1 ðŸ†",
    },
    manager: "Diego Simeone ðŸ§ ",
    founded: "1903 â³",
    city: "Madrid, Spain ðŸŒ",
    colors: ["Red ðŸ”´", "White âšªï¸"],
    rivalries: ["Real Madrid âš”ï¸"],
    owner: "Miguel Ãngel Gil MarÃ­n ðŸ¢",
    kit: "https://shop.atleticodemadrid.com/on/demandware.static/-/Sites-atm-master-catalog/default/dw1b391709/FN8790-406.jpg",
    id: 11,
  },
  {
    name: "Inter Milan",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/FC_Internazionale_Milano_2021.svg/1024px-FC_Internazionale_Milano_2021.svg.png",
    stadium: {
      name: "San Siro ðŸŸï¸",
      capacity: 80018,
    },
    history:
      "Founded in 1908 ðŸ†, Inter Milan is one of the most successful Italian clubs, known for its rivalry with AC Milan and its European triumphs.",
    top_scorer: {
      name: "Giuseppe Meazza ðŸ‘‘",
      goals: "284 âš½ï¸",
    },
    trophies: {
      "Serie A": "19 ðŸ†",
      "UEFA Champions League": "3 ðŸ†",
      "Coppa Italia": "9 ðŸ†",
      "Supercoppa Italiana": "7 ðŸ†",
      "FIFA Club World Cup": "1 ðŸ†",
    },
    manager: "Simone Inzaghi ðŸ§ ",
    founded: "1908 â³",
    city: "Milan, Italy ðŸŒ",
    colors: ["Black âš«ï¸", "Blue ðŸ”µ"],
    rivalries: ["AC Milan âš”ï¸"],
    owner: "Suning Holdings Group ðŸ¢",
    kit: "https://italiansportswearcollection.com/cdn/shop/files/InterMilanNikeHome24_25.jpg?v=1723676249",
    id: 12,
  },
  {
    name: "Ajax Amsterdam",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/7/79/Ajax_Amsterdam.svg/1024px-Ajax_Amsterdam.svg.png",
    stadium: {
      name: "Johan Cruyff Arena ðŸŸï¸",
      capacity: 55000,
    },
    history:
      "Founded in 1900 ðŸ†, Ajax is the most successful Dutch club, known for its youth academy and 'Total Football' philosophy.",
    top_scorer: {
      name: "Piet van Reenen ðŸ‘‘",
      goals: "273 âš½ï¸",
    },
    trophies: {
      Eredivisie: "36 ðŸ†",
      "UEFA Champions League": "4 ðŸ†",
      "KNVB Cup": "20 ðŸ†",
      "UEFA Super Cup": "3 ðŸ†",
      "Intercontinental Cup": "2 ðŸ†",
    },
    manager: "Maurice Steijn ðŸ§ ",
    founded: "1900 â³",
    city: "Amsterdam, Netherlands ðŸŒ",
    colors: ["Red ðŸ”´", "White âšªï¸"],
    rivalries: ["PSV Eindhoven âš”ï¸"],
    owner: "Publicly Traded (Euronext) ðŸ¢",
    kit: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLdzCSW2G0AKixHbFZMK52l42Ov8wzB7lD2aIvJ5BgZeU5ngzZXe07h6r5_GDRwjzFI3T-Ldp-gGEVcVaCK4GwmR9FzeVhc_BR8L1AmQQT0rDdcfIwlAznmuLgsS-gKUxQA2Jmb_79whhV_-CCWk9VFI0uI2sfvZLK4XszmE_yfB3XGUnyXBt7KisyRzY/s1600/ajax-24-25-home-kit%20%282%29.jpg",
    id: 13,
  },
  {
    name: "Borussia Dortmund",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg",
    stadium: {
      name: "Signal Iduna Park ðŸŸï¸",
      capacity: 81365,
    },
    history:
      "Founded in 1909 ðŸ†, Borussia Dortmund is known for its passionate fans and attacking football. The club has a rich history in German football.",
    top_scorer: {
      name: "Alfred Preissler ðŸ‘‘",
      goals: "177 âš½ï¸",
    },
    trophies: {
      Bundesliga: "8 ðŸ†",
      "DFB-Pokal": "5 ðŸ†",
      "UEFA Champions League": "1 ðŸ†",
      "DFL-Supercup": "6 ðŸ†",
      "UEFA Europa League": "1 ðŸ†",
    },
    manager: "Edin TerziÄ‡ ðŸ§ ",
    founded: "1909 â³",
    city: "Dortmund, Germany ðŸŒ",
    colors: ["Yellow ðŸŸ¡", "Black âš«ï¸"],
    rivalries: ["Bayern Munich âš”ï¸"],
    owner: "Borussia Dortmund GmbH & Co. KGaA ðŸ¢",
    kit: "https://www.bvbonlineshop.com/media/image/a6/26/2f/83912-1b73527656435_600x600.jpg",
    id: 14,
  },
  {
    name: "Tottenham Hotspur FC",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/b/b4/Tottenham_Hotspur.svg/800px-Tottenham_Hotspur.svg.png",
    stadium: {
      name: "Tottenham Hotspur Stadium ðŸŸï¸",
      capacity: 62850,
    },
    history:
      "Founded in 1882 ðŸ†, Tottenham Hotspur is a prominent English club, known for its attacking football and fierce rivalry with Arsenal.",
    top_scorer: {
      name: "Harry Kane ðŸ‘‘",
      goals: "280 âš½ï¸",
    },
    trophies: {
      "Premier League": "2 ðŸ†",
      "FA Cup": "8 ðŸ†",
      "EFL Cup": "4 ðŸ†",
      "UEFA Europa League": "2 ðŸ†",
    },
    manager: "Ange Postecoglou ðŸ§ ",
    founded: "1882 â³",
    city: "London, England ðŸŒ",
    colors: ["White âšªï¸", "Blue ðŸ”µ"],
    rivalries: ["Arsenal âš”ï¸", "Chelsea âš”ï¸"],
    owner: "ENIC Group ðŸ¢",
    kit: "https://cdn11.bigcommerce.com/s-5e8c3uvulz/images/stencil/original/products/15481/31904/YHSS24_NK_STADIUM_SS_SHIRT_1__08677.1718195503.jpg?c=1",
    id: 15,
  },
  {
    name: "AS Roma",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/f/f7/AS_Roma_logo_%282017%29.svg/800px-AS_Roma_logo_%282017%29.svg.png",
    stadium: {
      name: "Stadio Olimpico ðŸŸï¸",
      capacity: 72698,
    },
    history:
      "Founded in 1927 ðŸ†, AS Roma is a historic club from Italy, known for its passionate fanbase and rivalry with Lazio.",
    top_scorer: {
      name: "Francesco Totti ðŸ‘‘",
      goals: "307 âš½ï¸",
    },
    trophies: {
      "Serie A": "3 ðŸ†",
      "Coppa Italia": "9 ðŸ†",
      "Supercoppa Italiana": "2 ðŸ†",
      "UEFA Europa Conference League": "1 ðŸ†",
    },
    manager: "JosÃ© Mourinho ðŸ§ ",
    founded: "1927 â³",
    city: "Rome, Italy ðŸŒ",
    colors: ["Red ðŸ”´", "Yellow ðŸŸ¡"],
    rivalries: ["Lazio âš”ï¸"],
    owner: "The Friedkin Group ðŸ¢",
    kit: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjK6poyhh4YXS98ZibwYSiNalbQroD3tEvxI9dvK2UvKtuMRt9GH1xavt75Vp3H4uNUjBdNaclMbuSb7FHcfqaar4HuQJqd0cB62ZtAteY4At1GN43xMDLObf2eYt6hdCA5BYjE_xGJ__UCdSHBVJ6Lj3KCecD91KV7iHfJ5Bj1HSiqy5NGAt90XPzJ7gs/s1600/as-roma-24-25-home-kit%20%289%29.jpg",
    id: 16,
  },
  {
    name: "SL Benfica",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/6/6a/SL_Benfica_Logo.svg/1024px-SL_Benfica_Logo.svg.png",
    stadium: {
      name: "EstÃ¡dio da Luz ðŸŸï¸",
      capacity: 64642,
    },
    history:
      "Founded in 1904 ðŸ†, SL Benfica is the most successful club in Portugal, known for its dominance in the Primeira Liga.",
    top_scorer: {
      name: "EusÃ©bio ðŸ‘‘",
      goals: "473 âš½ï¸",
    },
    trophies: {
      "Primeira Liga": "38 ðŸ†",
      "TaÃ§a de Portugal": "26 ðŸ†",
      "UEFA Champions League": "2 ðŸ†",
      "TaÃ§a da Liga": "7 ðŸ†",
      "SupertaÃ§a CÃ¢ndido de Oliveira": "8 ðŸ†",
    },
    manager: "Roger Schmidt ðŸ§ ",
    founded: "1904 â³",
    city: "Lisbon, Portugal ðŸŒ",
    colors: ["Red ðŸ”´", "White âšªï¸"],
    rivalries: ["Sporting CP âš”ï¸", "Porto âš”ï¸"],
    owner: "Club members (Socios) ðŸ¢",
    id: 17,
  },
  {
    name: "Porto FC",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/f/f1/FC_Porto.svg/800px-FC_Porto.svg.png",
    stadium: {
      name: "EstÃ¡dio do DragÃ£o ðŸŸï¸",
      capacity: 50033,
    },
    history:
      "Founded in 1893 ðŸ†, Porto FC is one of Portugalâ€™s 'Big Three' clubs and has achieved great success domestically and in European competitions.",
    top_scorer: {
      name: "Fernando Gomes ðŸ‘‘",
      goals: "355 âš½ï¸",
    },
    trophies: {
      "Primeira Liga": "30 ðŸ†",
      "TaÃ§a de Portugal": "19 ðŸ†",
      "UEFA Champions League": "2 ðŸ†",
      "TaÃ§a da Liga": "2 ðŸ†",
      "SupertaÃ§a CÃ¢ndido de Oliveira": "23 ðŸ†",
    },
    manager: "SÃ©rgio ConceiÃ§Ã£o ðŸ§ ",
    founded: "1893 â³",
    city: "Porto, Portugal ðŸŒ",
    colors: ["Blue ðŸ”µ", "White âšªï¸"],
    rivalries: ["Benfica âš”ï¸", "Sporting CP âš”ï¸"],
    owner: "Club members (Socios) ðŸ¢",
    kit: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhOXfrVqUm_wpfWFvvorYHog1IsrBNExPOjWY7BfQ-zqTK30mPIQy5EjNDZIct1oOcMHSajZRhiNkId5KUA7NMUzpohi0Axe7UjXw7SFK863oKuY0DtzLUuGMvMf9IRoZM7Y3Ur4E4U7ot-6l7brrEv1yuccuu7T2rtpn8IQlxAaLmHb1u71jo7VsllgQ/s1000/benfica-24-25-home-kit%20%282%29.jpg",
    id: 18,
  },
  {
    name: "Lazio",
    image:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/7/78/FC_Lazio_Logo.svg/1024px-FC_Lazio_Logo.svg.png",
    stadium: {
      name: "Stadio Olimpico ðŸŸï¸",
      capacity: 72698,
    },
    history:
      "Founded in 1900 ðŸ†, Lazio is one of Italyâ€™s oldest and most historic clubs, with a fierce rivalry with AS Roma.",
    top_scorer: {
      name: "Ciro Immobile ðŸ‘‘",
      goals: "195 âš½ï¸",
    },
    trophies: {
      "Serie A": "2 ðŸ†",
      "Coppa Italia": "7 ðŸ†",
      "Supercoppa Italiana": "5 ðŸ†",
      "UEFA Super Cup": "1 ðŸ†",
      "UEFA Europa League": "1 ðŸ†",
    },
    manager: "Maurizio Sarri ðŸ§ ",
    founded: "1900 â³",
    city: "Rome, Italy ðŸŒ",
    colors: ["Sky Blue ðŸ”µ", "White âšªï¸"],
    rivalries: ["AS Roma âš”ï¸"],
    owner: "Claudio Lotito ðŸ¢",
    kit: "https://www.laziostylestore.com/images/lazio/products/large/LZ24A01.webp",
    id: 19,
  },
  {
    name: "Napoli",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/SSC_Napoli_2024_%28deep_blue_navy%29.svg/1200px-SSC_Napoli_2024_%28deep_blue_navy%29.svg.png",
    stadium: {
      name: "Stadio Diego Armando Maradona ðŸŸï¸",
      capacity: 54726,
    },
    history:
      "Founded in 1926 ðŸ†, Napoli is one of Italy's most iconic clubs, known for its passionate fan base and historic success, particularly during the Maradona era.",
    top_scorer: {
      name: "Dries Mertens ðŸ‘‘",
      goals: "148 âš½ï¸",
    },
    trophies: {
      "Serie A": "3 ðŸ†",
      "Coppa Italia": "6 ðŸ†",
      "Supercoppa Italiana": "2 ðŸ†",
      "UEFA Cup": "1 ðŸ†",
    },
    manager: "Rudi Garcia ðŸ§ ",
    founded: "1926 â³",
    city: "Naples, Italy ðŸŒ",
    colors: ["Sky Blue ðŸ”µ", "White âšªï¸"],
    rivalries: ["Juventus âš”ï¸", "AS Roma âš”ï¸"],
    owner: "Aurelio De Laurentiis ðŸ¢",
    kit: "https://sc01.alicdn.com/kf/H23133b5c82d244cd82653390b7f5a1b3s.jpg",
    id: 20,
  },
];

/////* VAZIFA *///

const question = prompt("Qanday malumot kerak ?");
const results = [];

function askAboutClub(question) {
  if (question === "manager") {
    const managers = teams.map((team) => {
      return { teamId: team.id, teamName: team.name, manager: team.manager };
    });
    results.push(...managers);
  }

  if (question == "top_scorer") {
    const topScorer = teams.map((team) => {
      return {
        teamId: team.id,
        teamName: team.name,
        topScorer: team.top_scorer.name,
        scorerGoals: team.top_scorer.goals,
      };
    });
    results.push(...topScorer);
  }

  if (question == "stadium") {
    const stadium = teams.map((team) => {
      return {
        teamId: team.id,
        teamName: team.name,
        teamStadium: team.stadium.name,
        stadiumCapacitY: team.stadium.capacity,
      };
    });
    results.push(stadium);
  }
  if (question == "trophies") {
    const trophies = teams.map((team) => {
      return {
        teamId: team.id,
        teamName: team.name,
        teamTrophies: team.trophies,
      };
    });
    results.push(trophies);
  }

  if (question == "history") {
    const history = teams.map((team) => {
      return {
        teamId: team.id,
        teamName: team.name,
        teamHistory: team.history,
      };
    });
    results.push(history);
  }

  if (question == "founded") {
    const founded = teams.map((team) => {
      return {
        teamId: team.id,
        teamName: team.name,
        teamFounded: team.founded,
      };
    });
    results.push(founded);
  }

  if (question == "city") {
    const city = teams.map((team) => {
      return {
        teamId: team.id,
        teamName: team.name,
        teamCity: team.city,
      };
    });
    results.push(city);
  }

  if (question == "colors") {
    const color = teams.map((team) => {
      return {
        teamId: team.id,
        teamName: team.name,
        teamColor: team.colors,
      };
    });
    results.push(color);
  }

  if (question == "owner") {
    const owner = teams.map((team) => {
      return {
        teamId: team.id,
        teamName: team.name,
        teamOwner: team.owner,
      };
    });
    results.push(owner);
  }

  if (question == "rivalries") {
    const rivalries = teams.map((team) => {
      return {
        teamId: team.id,
        teamName: team.name,
        teamRivalries: team.rivalries,
      };
    });
    results.push(rivalries);
  }
}

askAboutClub(question);

console.log(results);
