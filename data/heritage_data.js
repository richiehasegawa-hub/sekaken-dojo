// 遺産データ（JSONから自動生成）— fetch不要でfile://でも動作
// 更新日: 2026-04-25
// 総件数: 92件 (日本grade=3: 25件 / 世界grade=2: 67件)
// 内訳: 文化遺産59件・自然遺産29件・複合遺産4件
// 地域: アジア太平洋42・欧州北米25・アフリカ11・ラテンアメリカ10・アラブ3・他1
const HERITAGE_DATA = [
  {
    "id": "WH_JP_001",
    "name_jp": "法隆寺地域の仏教建造物",
    "name_en": "Buddhist Monuments in the Horyu-ji Area",
    "country": "日本",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 1993,
    "criteria": [
      "ii",
      "iv"
    ],
    "location": {
      "lat": 34.6144,
      "lng": 135.7344
    },
    "summary": "奈良県に建つ飛鳥時代創建の仏教建造物群。法隆寺の五重塔・金堂は世界最古の木造建築。法起寺と合わせて登録。",
    "highlights": [
      "五重塔",
      "金堂",
      "百済観音",
      "夢殿"
    ],
    "related_video": "https://www.youtube.com/watch?v=p2Fv8rQygAY",
    "official_url": "https://whc.unesco.org/ja/list/660",
    "grade": 3,
    "importance": 3
  },
  {
    "id": "WH_JP_002",
    "name_jp": "姫路城",
    "name_en": "Himeji-jo",
    "country": "日本",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 1993,
    "criteria": [
      "i",
      "iv"
    ],
    "location": {
      "lat": 34.8394,
      "lng": 134.6939
    },
    "summary": "兵庫県姫路市の白漆喰の城郭。「白鷺城」の別名。17世紀初頭の姿をほぼ完全な形で残す日本の城郭建築の最高傑作。",
    "highlights": [
      "大天守",
      "白漆喰",
      "連立天守"
    ],
    "related_video": "https://www.youtube.com/watch?v=p2Fv8rQygAY",
    "official_url": "https://whc.unesco.org/ja/list/661",
    "grade": 3,
    "importance": 3
  },
  {
    "id": "WH_JP_003",
    "name_jp": "屋久島",
    "name_en": "Yakushima",
    "country": "日本",
    "region": "アジア太平洋",
    "type": "natural",
    "year_inscribed": 1993,
    "criteria": [
      "vii",
      "ix"
    ],
    "location": {
      "lat": 30.3639,
      "lng": 130.5264
    },
    "summary": "鹿児島県南部の島。樹齢数千年の屋久杉（縄文杉など）を有する亜熱帯・温帯の森林生態系。多雨の島として知られる。",
    "highlights": [
      "縄文杉",
      "弥生杉",
      "白谷雲水峡"
    ],
    "related_video": "https://www.youtube.com/watch?v=p2Fv8rQygAY",
    "official_url": "https://whc.unesco.org/ja/list/662",
    "grade": 3,
    "importance": 3
  },
  {
    "id": "WH_JP_004",
    "name_jp": "白神山地",
    "name_en": "Shirakami-Sanchi",
    "country": "日本",
    "region": "アジア太平洋",
    "type": "natural",
    "year_inscribed": 1993,
    "criteria": [
      "ix"
    ],
    "location": {
      "lat": 40.4928,
      "lng": 140.0817
    },
    "summary": "青森・秋田の県境に広がる世界最大級のブナ原生林。ニホンカモシカ（特別天然記念物）が生息。",
    "highlights": [
      "ブナ原生林",
      "ニホンカモシカ",
      "十二湖"
    ],
    "related_video": "https://www.youtube.com/watch?v=p2Fv8rQygAY",
    "official_url": "https://whc.unesco.org/ja/list/663",
    "grade": 3,
    "importance": 3
  },
  {
    "id": "WH_JP_005",
    "name_jp": "古都京都の文化財（京都市、宇治市、大津市）",
    "name_en": "Historic Monuments of Ancient Kyoto (Kyoto, Uji and Otsu Cities)",
    "country": "日本",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 1994,
    "criteria": [
      "ii",
      "iv"
    ],
    "location": {
      "lat": 35.0116,
      "lng": 135.7681
    },
    "summary": "京都・宇治・大津に点在する17の寺社からなるシリアル遺産。金閣寺・銀閣寺・二条城・平等院・延暦寺など。",
    "highlights": [
      "鹿苑寺（金閣寺）",
      "慈照寺（銀閣寺）",
      "二条城",
      "平等院鳳凰堂",
      "比叡山延暦寺"
    ],
    "related_video": "https://www.youtube.com/watch?v=p2Fv8rQygAY",
    "official_url": "https://whc.unesco.org/ja/list/688",
    "grade": 3,
    "importance": 3
  },
  {
    "id": "WH_JP_006",
    "name_jp": "白川郷・五箇山の合掌造り集落",
    "name_en": "Historic Villages of Shirakawa-go and Gokayama",
    "country": "日本",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 1995,
    "criteria": [
      "iv",
      "v"
    ],
    "location": {
      "lat": 36.2577,
      "lng": 136.9063
    },
    "summary": "岐阜県白川村・富山県南砺市の豪雪地帯に残る合掌造り集落。約60度の急勾配茅葺き屋根が特徴。",
    "highlights": [
      "荻町集落",
      "相倉集落",
      "菅沼集落",
      "合掌造り家屋"
    ],
    "related_video": "https://www.youtube.com/watch?v=p2Fv8rQygAY",
    "official_url": "https://whc.unesco.org/ja/list/734",
    "grade": 3,
    "importance": 3
  },
  {
    "id": "WH_JP_007",
    "name_jp": "広島平和記念碑（原爆ドーム）",
    "name_en": "Hiroshima Peace Memorial (Genbaku Dome)",
    "country": "日本",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 1996,
    "criteria": [
      "vi"
    ],
    "location": {
      "lat": 34.3955,
      "lng": 132.4536
    },
    "summary": "1945年8月6日の原爆投下で被壊した旧産業奨励館の残骸。核兵器廃絶・平和の象徴「負の遺産」。登録基準(vi)のみ。",
    "highlights": [
      "原爆ドーム（外観）",
      "平和記念公園"
    ],
    "related_video": "https://www.youtube.com/watch?v=p2Fv8rQygAY",
    "official_url": "https://whc.unesco.org/ja/list/775",
    "grade": 3,
    "importance": 3
  },
  {
    "id": "WH_JP_008",
    "name_jp": "厳島神社",
    "name_en": "Itsukushima Shinto Shrine",
    "country": "日本",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 1996,
    "criteria": [
      "i",
      "ii",
      "iv",
      "vi"
    ],
    "location": {
      "lat": 34.2956,
      "lng": 132.3197
    },
    "summary": "広島県廿日市市宮島（厳島）に鎮座。平清盛が整えた海上社殿と大鳥居が絶景を成す。日本三景の一つ「安芸の宮島」。",
    "highlights": [
      "大鳥居",
      "海上社殿",
      "能舞台"
    ],
    "related_video": "https://www.youtube.com/watch?v=p2Fv8rQygAY",
    "official_url": "https://whc.unesco.org/ja/list/776",
    "grade": 3,
    "importance": 3
  },
  {
    "id": "WH_JP_009",
    "name_jp": "古都奈良の文化財",
    "name_en": "Historic Monuments of Ancient Nara",
    "country": "日本",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 1998,
    "criteria": [
      "ii",
      "iii",
      "iv",
      "vi"
    ],
    "location": {
      "lat": 34.6851,
      "lng": 135.8048
    },
    "summary": "奈良市の8資産（東大寺・春日大社・興福寺・元興寺・唐招提寺・薬師寺・平城宮跡・春日山原始林）。奈良時代の古都。",
    "highlights": [
      "東大寺大仏殿",
      "春日大社",
      "興福寺五重塔",
      "正倉院"
    ],
    "related_video": "https://www.youtube.com/watch?v=p2Fv8rQygAY",
    "official_url": "https://whc.unesco.org/ja/list/870",
    "grade": 3,
    "importance": 3
  },
  {
    "id": "WH_JP_010",
    "name_jp": "日光の社寺",
    "name_en": "Shrines and Temples of Nikko",
    "country": "日本",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 1999,
    "criteria": [
      "i",
      "iv",
      "vi"
    ],
    "location": {
      "lat": 36.758,
      "lng": 139.5994
    },
    "summary": "栃木県日光市の東照宮・二荒山神社・輪王寺（2社1寺・103棟）。神仏習合の聖地。権現造の傑作・東照宮。",
    "highlights": [
      "東照宮",
      "陽明門",
      "二荒山神社",
      "輪王寺"
    ],
    "related_video": "https://www.youtube.com/watch?v=p2Fv8rQygAY",
    "official_url": "https://whc.unesco.org/ja/list/913",
    "grade": 3,
    "importance": 3
  },
  {
    "id": "WH_JP_011",
    "name_jp": "琉球王国のグスク及び関連遺産群",
    "name_en": "Gusuku Sites and Related Properties of the Kingdom of Ryukyu",
    "country": "日本",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 2000,
    "criteria": [
      "ii",
      "iii",
      "vi"
    ],
    "location": {
      "lat": 26.2169,
      "lng": 127.7181
    },
    "summary": "沖縄県の首里城跡をはじめとする5グスク（城）と4関連遺産。12〜17世紀の琉球王国の文化を示す9資産。",
    "highlights": [
      "首里城跡",
      "中城城跡",
      "勝連城跡",
      "斎場御嶽"
    ],
    "related_video": "https://www.youtube.com/watch?v=p2Fv8rQygAY",
    "official_url": "https://whc.unesco.org/ja/list/972",
    "grade": 3,
    "importance": 3
  },
  {
    "id": "WH_JP_012",
    "name_jp": "紀伊山地の霊場と参詣道",
    "name_en": "Sacred Sites and Pilgrimage Routes in the Kii Mountain Range",
    "country": "日本",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 2004,
    "criteria": [
      "ii",
      "iii",
      "iv",
      "vi"
    ],
    "location": {
      "lat": 34.17,
      "lng": 135.8
    },
    "summary": "和歌山・三重・奈良の3霊場（吉野・大峯・熊野三山・高野山）と参詣道（熊野古道）。日本初の文化的景観。",
    "highlights": [
      "熊野古道",
      "熊野三山",
      "高野山",
      "吉野・大峯"
    ],
    "related_video": "https://www.youtube.com/watch?v=p2Fv8rQygAY",
    "official_url": "https://whc.unesco.org/ja/list/1142",
    "grade": 3,
    "importance": 3
  },
  {
    "id": "WH_JP_013",
    "name_jp": "知床",
    "name_en": "Shiretoko",
    "country": "日本",
    "region": "アジア太平洋",
    "type": "natural",
    "year_inscribed": 2005,
    "criteria": [
      "ix",
      "x"
    ],
    "location": {
      "lat": 44.0667,
      "lng": 145.0
    },
    "summary": "北海道東部の半島。世界最低緯度の季節海氷域。豊かな食物連鎖でヒグマ・オジロワシ・シャチが生息。",
    "highlights": [
      "知床五湖",
      "カムイワッカの滝",
      "季節海氷",
      "流氷"
    ],
    "related_video": "https://www.youtube.com/watch?v=p2Fv8rQygAY",
    "official_url": "https://whc.unesco.org/ja/list/1193",
    "grade": 3,
    "importance": 3
  },
  {
    "id": "WH_JP_014",
    "name_jp": "石見銀山遺跡とその文化的景観",
    "name_en": "Iwami Ginzan Silver Mine and its Cultural Landscape",
    "country": "日本",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 2007,
    "criteria": [
      "ii",
      "iii",
      "v"
    ],
    "location": {
      "lat": 35.1,
      "lng": 132.4333
    },
    "summary": "島根県大田市。16〜17世紀に世界の銀産出量の約1/3を占めた銀山遺跡。採掘・精錬・輸送の文化的景観を保存。",
    "highlights": [
      "龍源寺間歩",
      "大久保間歩",
      "温泉津港"
    ],
    "related_video": "https://www.youtube.com/watch?v=p2Fv8rQygAY",
    "official_url": "https://whc.unesco.org/ja/list/1246",
    "grade": 3,
    "importance": 2
  },
  {
    "id": "WH_JP_015",
    "name_jp": "平泉―仏国土（浄土）を表す建築・庭園及び考古学的遺跡群―",
    "name_en": "Hiraizumi – Temples, Gardens and Archaeological Sites Representing the Buddhist Pure Land",
    "country": "日本",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 2011,
    "criteria": [
      "ii",
      "vi"
    ],
    "location": {
      "lat": 38.9833,
      "lng": 141.1167
    },
    "summary": "岩手県平泉町。奥州藤原氏が浄土思想に基づき造営した中尊寺金色堂・毛越寺（浄土庭園）など5資産。",
    "highlights": [
      "中尊寺金色堂",
      "毛越寺浄土庭園",
      "観自在王院跡"
    ],
    "related_video": "https://www.youtube.com/watch?v=p2Fv8rQygAY",
    "official_url": "https://whc.unesco.org/ja/list/1277",
    "grade": 3,
    "importance": 3
  },
  {
    "id": "WH_JP_016",
    "name_jp": "小笠原諸島",
    "name_en": "Ogasawara Islands",
    "country": "日本",
    "region": "アジア太平洋",
    "type": "natural",
    "year_inscribed": 2011,
    "criteria": [
      "x"
    ],
    "location": {
      "lat": 27.0667,
      "lng": 142.1833
    },
    "summary": "東京都の南方約1,000kmに位置する海洋島群。「東洋のガラパゴス」と呼ばれ固有種多数。グリーンアノール（外来種）が問題。",
    "highlights": [
      "固有種の陸産貝類",
      "アオウミガメ",
      "小笠原固有の鳥類"
    ],
    "related_video": "https://www.youtube.com/watch?v=p2Fv8rQygAY",
    "official_url": "https://whc.unesco.org/ja/list/1362",
    "grade": 3,
    "importance": 3
  },
  {
    "id": "WH_JP_017",
    "name_jp": "富士山―信仰の対象と芸術の源泉",
    "name_en": "Fujisan, sacred place and source of artistic inspiration",
    "country": "日本",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 2013,
    "criteria": [
      "iii",
      "vi"
    ],
    "location": {
      "lat": 35.3606,
      "lng": 138.7274
    },
    "summary": "静岡・山梨の25資産。成層火山の富士山は信仰対象・芸術の源泉。江戸時代の富士講・御師文化。自然遺産ではなく文化遺産。",
    "highlights": [
      "富士山頂",
      "富士五湖",
      "三保松原",
      "富士山本宮浅間大社"
    ],
    "related_video": "https://www.youtube.com/watch?v=p2Fv8rQygAY",
    "official_url": "https://whc.unesco.org/ja/list/1418",
    "grade": 3,
    "importance": 3
  },
  {
    "id": "WH_JP_018",
    "name_jp": "富岡製糸場と絹産業遺産群",
    "name_en": "Tomioka Silk Mill and Related Sites",
    "country": "日本",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 2014,
    "criteria": [
      "ii",
      "iv"
    ],
    "location": {
      "lat": 36.2608,
      "lng": 138.8883
    },
    "summary": "群馬県の4資産（富岡製糸場・田島弥平旧宅・高山社跡・荒船風穴）。1872年開設の日本初官営工場。木骨レンガ造が特徴。",
    "highlights": [
      "富岡製糸場（操糸場・繭倉庫）",
      "木骨レンガ造",
      "ポール・ブリュナ"
    ],
    "related_video": "https://www.youtube.com/watch?v=p2Fv8rQygAY",
    "official_url": "https://whc.unesco.org/ja/list/1449",
    "grade": 3,
    "importance": 3
  },
  {
    "id": "WH_JP_019",
    "name_jp": "明治日本の産業革命遺産 製鉄・製鋼、造船、石炭産業",
    "name_en": "Sites of Japan's Meiji Industrial Revolution: Iron and Steel, Shipbuilding and Coal Mining",
    "country": "日本",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 2015,
    "criteria": [
      "ii",
      "iv"
    ],
    "location": {
      "lat": 33.8833,
      "lng": 130.8833
    },
    "summary": "岩手・静岡・山口・福岡・佐賀・長崎・熊本・鹿児島の8県23資産。幕末〜明治の産業化を証明。八幡製鉄所・軍艦島など。",
    "highlights": [
      "八幡製鉄所",
      "端島炭坑（軍艦島）",
      "三池炭鉱",
      "韮山反射炉",
      "萩の反射炉"
    ],
    "related_video": "https://www.youtube.com/watch?v=p2Fv8rQygAY",
    "official_url": "https://whc.unesco.org/ja/list/1484",
    "grade": 3,
    "importance": 3
  },
  {
    "id": "WH_JP_020",
    "name_jp": "ル・コルビュジエの建築作品：近代建築運動への顕著な貢献",
    "name_en": "The Architectural Work of Le Corbusier, an Outstanding Contribution to the Modern Movement",
    "country": "日本・フランス他6カ国",
    "region": "欧州・アジア",
    "type": "cultural",
    "year_inscribed": 2016,
    "criteria": [
      "i",
      "ii",
      "vi"
    ],
    "location": {
      "lat": 35.7154,
      "lng": 139.7763
    },
    "summary": "7カ国17資産のトランスバウンダリー・サイト。日本の構成資産は東京・上野の国立西洋美術館（ピロティが特徴）。",
    "highlights": [
      "国立西洋美術館",
      "ピロティ",
      "無限成長美術館"
    ],
    "related_video": "https://www.youtube.com/watch?v=p2Fv8rQygAY",
    "official_url": "https://whc.unesco.org/ja/list/1321",
    "grade": 3,
    "importance": 3
  },
  {
    "id": "WH_JP_021",
    "name_jp": "「神宿る島」宗像・沖ノ島と関連遺産群",
    "name_en": "Sacred Island of Okinoshima and Associated Sites in the Munakata Region",
    "country": "日本",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 2017,
    "criteria": [
      "ii",
      "iii"
    ],
    "location": {
      "lat": 34.2333,
      "lng": 130.1
    },
    "summary": "福岡県の玄界灘に浮かぶ沖ノ島と関連資産。4〜9世紀の祭祀遺物が国宝。一般立入禁止の神聖な島。",
    "highlights": [
      "沖ノ島（立入禁止）",
      "沖津宮",
      "宗像大社"
    ],
    "related_video": "https://www.youtube.com/watch?v=p2Fv8rQygAY",
    "official_url": "https://whc.unesco.org/ja/list/1535",
    "grade": 3,
    "importance": 2
  },
  {
    "id": "WH_JP_022",
    "name_jp": "長崎と天草地方の潜伏キリシタン関連遺産",
    "name_en": "Hidden Christian Sites in the Nagasaki Region",
    "country": "日本",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 2018,
    "criteria": [
      "iii"
    ],
    "location": {
      "lat": 32.7333,
      "lng": 130.0
    },
    "summary": "長崎・熊本の12資産。江戸時代の禁教期（約250年間）に信仰を守り続けた潜伏キリシタンの歴史を証明。",
    "highlights": [
      "原城跡",
      "天草・崎津集落",
      "平戸の聖地と集落",
      "頭ケ島の集落"
    ],
    "related_video": "https://www.youtube.com/watch?v=p2Fv8rQygAY",
    "official_url": "https://whc.unesco.org/ja/list/1562",
    "grade": 3,
    "importance": 2
  },
  {
    "id": "WH_JP_023",
    "name_jp": "百舌鳥・古市古墳群",
    "name_en": "Mozu-Furuichi Kofun Group: Mounded Tombs of Ancient Japan",
    "country": "日本",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 2019,
    "criteria": [
      "iii",
      "iv"
    ],
    "location": {
      "lat": 34.5611,
      "lng": 135.5
    },
    "summary": "大阪府の4〜5世紀の古墳群49基。仁徳天皇陵古墳（大山古墳）は全長約486mで世界最大級の墳墓の一つ。",
    "highlights": [
      "仁徳天皇陵古墳（大山古墳）",
      "誉田御廟山古墳",
      "前方後円墳"
    ],
    "related_video": "https://www.youtube.com/watch?v=p2Fv8rQygAY",
    "official_url": "https://whc.unesco.org/ja/list/1593",
    "grade": 3,
    "importance": 2
  },
  {
    "id": "WH_JP_024",
    "name_jp": "奄美大島、徳之島、沖縄島北部及び西表島",
    "name_en": "Amami-Oshima Island, Tokunoshima Island, the northern part of Okinawa Island, and Iriomote Island",
    "country": "日本",
    "region": "アジア太平洋",
    "type": "natural",
    "year_inscribed": 2021,
    "criteria": [
      "x"
    ],
    "location": {
      "lat": 28.4,
      "lng": 129.5
    },
    "summary": "鹿児島・沖縄の4島の特定地域。アマミノクロウサギ・ヤンバルクイナ・イリオモテヤマネコなど固有種が多数。",
    "highlights": [
      "アマミノクロウサギ",
      "イリオモテヤマネコ",
      "ヤンバルクイナ",
      "マングローブ林"
    ],
    "related_video": "https://www.youtube.com/watch?v=p2Fv8rQygAY",
    "official_url": "https://whc.unesco.org/ja/list/1617",
    "grade": 3,
    "importance": 2
  },
  {
    "id": "WH_JP_025",
    "name_jp": "北海道・北東北の縄文遺跡群",
    "name_en": "Jomon Prehistoric Sites in Northern Japan",
    "country": "日本",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 2021,
    "criteria": [
      "iii",
      "v"
    ],
    "location": {
      "lat": 40.8228,
      "lng": 140.7469
    },
    "summary": "北海道・青森・岩手・秋田の17遺跡。約1万5000〜2400年前の縄文文化を証明。三内丸山遺跡・大湯環状列石が代表。",
    "highlights": [
      "三内丸山遺跡",
      "大湯環状列石",
      "亀ヶ岡石器時代遺跡",
      "垣ノ島遺跡"
    ],
    "related_video": "https://www.youtube.com/watch?v=p2Fv8rQygAY",
    "official_url": "https://whc.unesco.org/ja/list/1632",
    "grade": 3,
    "importance": 2
  },
  {
    "id": "WH_EC_001",
    "name_jp": "ガラパゴス諸島",
    "name_en": "Galápagos Islands",
    "country": "エクアドル",
    "region": "ラテンアメリカ・カリブ",
    "type": "natural",
    "year_inscribed": 1978,
    "criteria": [
      "vii",
      "viii",
      "ix",
      "x"
    ],
    "location": {
      "lat": -0.6667,
      "lng": -90.55
    },
    "summary": "エクアドル沖太平洋の火山島群。ダーウィンが進化論のヒントを得た「進化の実験室」。固有種が多く、独自の進化を遂げたゾウガメ・海イグアナ等が生息。1978年に世界初の自然遺産の一つとして登録。",
    "highlights": [
      "ガラパゴスゾウガメ",
      "海イグアナ",
      "ダーウィンフィンチ",
      "ウミイグアナ"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/1",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_AU_001",
    "name_jp": "グレート・バリア・リーフ",
    "name_en": "Great Barrier Reef",
    "country": "オーストラリア",
    "region": "アジア太平洋",
    "type": "natural",
    "year_inscribed": 1981,
    "criteria": [
      "vii",
      "viii",
      "ix",
      "x"
    ],
    "location": {
      "lat": -18.2861,
      "lng": 147.7
    },
    "summary": "オーストラリア北東海岸沖に広がる世界最大のサンゴ礁。全長約2,300kmに約2,900のサンゴ礁・900の島。海水温上昇による大規模白化現象が繰り返し発生し、危機遺産認定が議論されている。",
    "highlights": [
      "サンゴ礁",
      "ウミガメ",
      "ジュゴン",
      "グリーン島"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/154",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_US_001",
    "name_jp": "グランド・キャニオン国立公園",
    "name_en": "Grand Canyon National Park",
    "country": "アメリカ合衆国",
    "region": "欧州・北米",
    "type": "natural",
    "year_inscribed": 1979,
    "criteria": [
      "vii",
      "viii",
      "ix",
      "x"
    ],
    "location": {
      "lat": 36.0544,
      "lng": -112.1401
    },
    "summary": "アリゾナ州を流れるコロラド川が刻んだ深さ約1,600mの大峡谷。地層の断面が約20億年の地球の歴史を示す地質学の教科書。全長約446km、最大幅約29km。",
    "highlights": [
      "コロラド川",
      "地層断面",
      "コンドル",
      "ブライトエンジェルトレイル"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/75",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_RU_001",
    "name_jp": "バイカル湖",
    "name_en": "Lake Baikal",
    "country": "ロシア",
    "region": "欧州・北米",
    "type": "natural",
    "year_inscribed": 1996,
    "criteria": [
      "vii",
      "viii",
      "ix",
      "x"
    ],
    "location": {
      "lat": 53.5,
      "lng": 108.1667
    },
    "summary": "シベリアに位置する世界最深の湖（最深部1,642m）。世界の淡水の約20%を蓄え、「シベリアの真珠」と呼ばれる。バイカルアザラシ（唯一の淡水生アザラシ）を含む約3,500種の固有生物が生息。",
    "highlights": [
      "バイカルアザラシ",
      "バイカルオームル",
      "透明度高い湖水",
      "リフト帯の湖"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/754",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_TZ_001",
    "name_jp": "セレンゲティ国立公園",
    "name_en": "Serengeti National Park",
    "country": "タンザニア",
    "region": "アフリカ",
    "type": "natural",
    "year_inscribed": 1981,
    "criteria": [
      "vii",
      "x"
    ],
    "location": {
      "lat": -2.3333,
      "lng": 34.8333
    },
    "summary": "タンザニア北部の広大な草原・サバンナ国立公園。毎年150万頭以上のヌーが行う「グレート・マイグレーション（大移動）」で世界的に有名。ライオン・ヒョウ・チーター・ゾウ等が生息。",
    "highlights": [
      "グレートマイグレーション（大移動）",
      "ヌー",
      "ライオン",
      "チーター"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/156",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_TZ_002",
    "name_jp": "ンゴロンゴロ保全地域",
    "name_en": "Ngorongoro Conservation Area",
    "country": "タンザニア",
    "region": "アフリカ",
    "type": "mixed",
    "year_inscribed": 1979,
    "criteria": [
      "iv",
      "vii",
      "viii",
      "ix",
      "x"
    ],
    "location": {
      "lat": -3.1667,
      "lng": 35.5
    },
    "summary": "タンザニアの世界最大のカルデラ（直径約19km）。「ノアの箱舟」と呼ばれ、カルデラ内に約2万5千頭の野生動物が生息。ラエトリのホモ・サピエンスの足跡化石（370万年前）も発見された複合遺産。",
    "highlights": [
      "ンゴロンゴロ・クレーター",
      "クロサイ（希少）",
      "ラエトリの足跡化石",
      "マサイ族"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/39",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_NP_001",
    "name_jp": "サガルマータ国立公園",
    "name_en": "Sagarmatha National Park",
    "country": "ネパール",
    "region": "アジア太平洋",
    "type": "natural",
    "year_inscribed": 1979,
    "criteria": [
      "vii"
    ],
    "location": {
      "lat": 27.9581,
      "lng": 86.9175
    },
    "summary": "世界最高峰エベレスト（サガルマータ、標高8,849m）を含むヒマラヤ山脈の国立公園。ユキヒョウ・ジャイアントパンダ（タクキン）等が生息。シェルパ族の文化も世界的に有名。",
    "highlights": [
      "エベレスト（8,849m）",
      "ユキヒョウ",
      "ヒマラヤ（山群）",
      "シェルパ族"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/120",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_AU_002",
    "name_jp": "カカドゥ国立公園",
    "name_en": "Kakadu National Park",
    "country": "オーストラリア",
    "region": "アジア太平洋",
    "type": "mixed",
    "year_inscribed": 1981,
    "criteria": [
      "i",
      "vi",
      "vii",
      "ix",
      "x"
    ],
    "location": {
      "lat": -12.9619,
      "lng": 132.4714
    },
    "summary": "北部準州の複合遺産。アボリジニの岩壁画（2万年前以上）と豊かな熱帯湿地生態系（ワニ・渡り鳥等）が共存。アボリジニが現在も居住し管理に参加する「生きた文化」の遺産。",
    "highlights": [
      "アボリジニ岩壁画",
      "イリエワニ",
      "渡り鳥・湿地",
      "ウォータ・アバ"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/147",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_NZ_001",
    "name_jp": "テ・ワヒポウナム―ニュージーランド南西部",
    "name_en": "Te Wahipounamu – South West New Zealand",
    "country": "ニュージーランド",
    "region": "アジア太平洋",
    "type": "natural",
    "year_inscribed": 1990,
    "criteria": [
      "vii",
      "viii",
      "ix",
      "x"
    ],
    "location": {
      "lat": -44.0,
      "lng": 168.0
    },
    "summary": "ニュージーランド南島南西部の複合遺産。氷河・フィヨルド・原始的な南極ブナ林を含む。ミルフォードサウンドが絶景。古来の超大陸ゴンドワナの一部で、固有のキウイ類・カカポ等の鳥類が生息。",
    "highlights": [
      "ミルフォードサウンド",
      "フォックス氷河",
      "フランツ・ジョセフ氷河",
      "カカポ（飛べない鳥）"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/551",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_CH_001",
    "name_jp": "スイスアルプス ユングフラウ-アレッチュ",
    "name_en": "Swiss Alps Jungfrau-Aletsch",
    "country": "スイス",
    "region": "欧州・北米",
    "type": "natural",
    "year_inscribed": 2001,
    "criteria": [
      "vii",
      "viii",
      "ix"
    ],
    "location": {
      "lat": 46.5,
      "lng": 8.0
    },
    "summary": "スイス南部のアルプス山系。ユングフラウ（4,158m）・アイガー・メンヒを含み、西欧最大の氷河アレッチュ氷河（約22km）がある。氷河期の地形形成過程を示す地質学的価値が高い。",
    "highlights": [
      "ユングフラウ（4,158m）",
      "アレッチュ氷河",
      "アイガー北壁",
      "高山植生"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/1037",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_IT_001",
    "name_jp": "ドロミテ",
    "name_en": "The Dolomites",
    "country": "イタリア",
    "region": "欧州・北米",
    "type": "natural",
    "year_inscribed": 2009,
    "criteria": [
      "vii",
      "viii"
    ],
    "location": {
      "lat": 46.4102,
      "lng": 11.8438
    },
    "summary": "北イタリアのアルプス東部に位置する独特の石灰岩地形（ドロストーン）の山塊群。朝夕に赤くそまる「エンロサドゥーラ（バラ色に染まる）」現象が有名。9つの山塊がシリアル登録。",
    "highlights": [
      "トレ・チメ・ディ・ラヴァレード",
      "ドロストーン地形",
      "エンロサドゥーラ",
      "9山塊シリアル"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/1237",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_IS_001",
    "name_jp": "スルツェイ",
    "name_en": "Surtsey",
    "country": "アイスランド",
    "region": "欧州・北米",
    "type": "natural",
    "year_inscribed": 2008,
    "criteria": [
      "ix"
    ],
    "location": {
      "lat": 63.3,
      "lng": -20.6
    },
    "summary": "1963〜67年の海底噴火で誕生した新島。生物のいない島にどのように生命が定着・進化するかを観察できる天然の実験室。植物・鳥類・昆虫の自然定着が継続的に観察されている。",
    "highlights": [
      "1963年噴火誕生",
      "生物の自然定着",
      "一次遷移の観察地",
      "立入制限"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/1267",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_US_002",
    "name_jp": "イエローストーン国立公園",
    "name_en": "Yellowstone National Park",
    "country": "アメリカ合衆国",
    "region": "欧州・北米",
    "type": "natural",
    "year_inscribed": 1978,
    "criteria": [
      "vii",
      "viii",
      "ix",
      "x"
    ],
    "location": {
      "lat": 44.428,
      "lng": -110.5885
    },
    "summary": "世界初の国立公園（1872年指定）。北米最大の超巨大火山（カルデラ）の上に位置し、オールド・フェイスフル間欠泉・グランド・プリズマティック・スプリング等2万以上の熱水地形を持つ。バイソン・オオカミが生息。",
    "highlights": [
      "オールドフェイスフル間欠泉",
      "グランドプリズマティックスプリング",
      "バイソン",
      "世界初の国立公園"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/28",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_US_003",
    "name_jp": "グレート・スモーキー山脈国立公園",
    "name_en": "Great Smoky Mountains National Park",
    "country": "アメリカ合衆国",
    "region": "欧州・北米",
    "type": "natural",
    "year_inscribed": 1983,
    "criteria": [
      "vii",
      "viii",
      "ix",
      "x"
    ],
    "location": {
      "lat": 35.6131,
      "lng": -83.4895
    },
    "summary": "テネシー・ノースカロライナ州にまたがるアパラチア山脈の国立公園。北米有数の落葉樹林の生物多様性を誇り、約1,500種の植物・200種の鳥類が生息。霧（スモーク）がかかった幻想的な山並みが特徴。",
    "highlights": [
      "落葉広葉樹林",
      "ブラックベア",
      "ホタルの同期点滅（稀少現象）",
      "チェロキー族の聖地"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/259",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_NP_002",
    "name_jp": "チトワン国立公園",
    "name_en": "Chitwan National Park",
    "country": "ネパール",
    "region": "アジア太平洋",
    "type": "natural",
    "year_inscribed": 1984,
    "criteria": [
      "vii",
      "ix",
      "x"
    ],
    "location": {
      "lat": 27.5,
      "lng": 84.3333
    },
    "summary": "ネパール南部タライ平原の国立公園。インドサイとベンガルトラの主要な生息地の一つ。草原・森林・湿地の多様な環境に約700種の植物・544種の鳥類が分布する。",
    "highlights": [
      "インドサイ（一角サイ）",
      "ベンガルトラ",
      "ガリアル（ガンジスワニ）",
      "象に乗ったサファリ"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/284",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_CN_001",
    "name_jp": "中国南部カルスト",
    "name_en": "South China Karst",
    "country": "中国",
    "region": "アジア太平洋",
    "type": "natural",
    "year_inscribed": 2007,
    "criteria": [
      "vii",
      "viii"
    ],
    "location": {
      "lat": 26.0,
      "lng": 104.0
    },
    "summary": "雲南・貴州・広西に広がる中国南部の多様なカルスト地形群（シリアル遺産）。石林（石の森）・荔波の峰林・武隆の天生橋等を含む世界有数のカルスト地形。",
    "highlights": [
      "石林（石の森）",
      "峰林（tower karst）",
      "天生橋（天然石橋）",
      "鍾乳洞"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/1248",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_AU_003",
    "name_jp": "クイーンズランドの湿潤熱帯地域",
    "name_en": "Wet Tropics of Queensland",
    "country": "オーストラリア",
    "region": "アジア太平洋",
    "type": "natural",
    "year_inscribed": 1988,
    "criteria": [
      "viii",
      "ix",
      "x"
    ],
    "location": {
      "lat": -17.0,
      "lng": 145.5
    },
    "summary": "オーストラリア北東部クイーンズランドの熱帯雨林。有袋類・単孔類（カモノハシ・ハリモグラ）など原始的な哺乳類の進化を示す生態系。1億年以上の植物進化の証拠が残る。",
    "highlights": [
      "カモノハシ",
      "クロコダイル",
      "有袋類（ポッサム等）",
      "古代系植物群"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/486",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_BR_001",
    "name_jp": "中央アマゾン保全地域群",
    "name_en": "Central Amazon Conservation Complex",
    "country": "ブラジル",
    "region": "ラテンアメリカ・カリブ",
    "type": "natural",
    "year_inscribed": 2000,
    "criteria": [
      "ix",
      "x"
    ],
    "location": {
      "lat": -2.5,
      "lng": -60.5
    },
    "summary": "南米アマゾン川流域最大の保護地域群。淡水生物多様性では世界最高水準で、ピンクカワイルカ・マナティ・ジャガーが生息。季節的な洪水による氾濫原（バルゼア）と高地林（テラフィルメ）が交互に展開する。",
    "highlights": [
      "ジャガー",
      "ピンクカワイルカ（ボト）",
      "巨大スイレン（ビクトリアレギア）",
      "バルゼア（氾濫原）"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/998",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_BR_002",
    "name_jp": "イグアス国立公園（ブラジル・アルゼンチン）",
    "name_en": "Iguazu National Park",
    "country": "ブラジル・アルゼンチン",
    "region": "ラテンアメリカ・カリブ",
    "type": "natural",
    "year_inscribed": 1984,
    "criteria": [
      "vii",
      "x"
    ],
    "location": {
      "lat": -25.6953,
      "lng": -54.4367
    },
    "summary": "ブラジル・アルゼンチン国境のイグアス川にある世界最大級の滝（幅約2.7km・高さ最大80m）。「悪魔ののど笛」と呼ばれる最大の滝壺が圧巻。周辺の亜熱帯雨林に約2,000種の植物・450種の鳥類が生息。",
    "highlights": [
      "イグアスの滝（幅約2.7km）",
      "悪魔ののど笛",
      "オオアリクイ",
      "オオカワウソ"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/303",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_MG_001",
    "name_jp": "アッツィナナナの雨林群（マダガスカル）",
    "name_en": "Rainforests of the Atsinanana",
    "country": "マダガスカル",
    "region": "アフリカ",
    "type": "natural",
    "year_inscribed": 2007,
    "criteria": [
      "ix",
      "x"
    ],
    "location": {
      "lat": -15.0,
      "lng": 50.0
    },
    "summary": "マダガスカル東部に点在する6つの国立公園からなるシリアル遺産。約8,800万年前にアフリカ大陸から分離したマダガスカル固有の生物（キツネザル類・カメレオン等）の宝庫。固有種率が極めて高い。",
    "highlights": [
      "キツネザル（レムール）類",
      "カメレオン固有種",
      "バオバブ（関連）",
      "固有種率90%超"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/1257",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_FR_001",
    "name_jp": "ピレネー山麓のモン・ペルデュ",
    "name_en": "Pyrénées – Mont Perdu",
    "country": "フランス・スペイン",
    "region": "欧州・北米",
    "type": "mixed",
    "year_inscribed": 1997,
    "criteria": [
      "iii",
      "iv",
      "v",
      "vii",
      "viii"
    ],
    "location": {
      "lat": 42.6833,
      "lng": 0.05
    },
    "summary": "フランス・スペイン国境のピレネー山脈中核部の複合遺産。モン・ペルデュ（モンテ・ペルディード、3,355m）を中心とする絶景の石灰岩地形と、山麓の伝統的農村景観が共存する。",
    "highlights": [
      "モン・ペルデュ（3,355m）",
      "石灰岩の峡谷（カニョン）",
      "伝統的牧畜景観",
      "越境遺産"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/773",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_CR_001",
    "name_jp": "グアナカステ保全地域",
    "name_en": "Area de Conservación Guanacaste",
    "country": "コスタリカ",
    "region": "ラテンアメリカ・カリブ",
    "type": "natural",
    "year_inscribed": 1999,
    "criteria": [
      "ix",
      "x"
    ],
    "location": {
      "lat": 10.9167,
      "lng": -85.6167
    },
    "summary": "コスタリカ北西部の乾燥・移行・熱帯雨林の多様な生態系を含む保護地域群。アカウミガメ等ウミガメの産卵地・渡り鳥のルートとしても重要。コスタリカは国土の25%が保護区という環境先進国。",
    "highlights": [
      "乾燥熱帯林",
      "アカウミガメ産卵",
      "エコツーリズム先進地",
      "生物多様性回廊"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/928",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_ID_001",
    "name_jp": "コモド国立公園",
    "name_en": "Komodo National Park",
    "country": "インドネシア",
    "region": "アジア太平洋",
    "type": "natural",
    "year_inscribed": 1991,
    "criteria": [
      "vii",
      "x"
    ],
    "location": {
      "lat": -8.55,
      "lng": 119.4833
    },
    "summary": "インドネシア東部のコモド島・リンカ島等からなる国立公園。世界最大のトカゲ「コモドドラゴン（コモドオオトカゲ）」の生息地。体長最大3m・体重70kgで、毒（バクテリア）による狩りを行う。",
    "highlights": [
      "コモドオオトカゲ（コモドドラゴン）",
      "マンタ（オニイトマキエイ）",
      "珊瑚礁",
      "島嶼生態系"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/609",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_ET_001",
    "name_jp": "シミエン国立公園（グレートリフトバレー）",
    "name_en": "Simien National Park",
    "country": "エチオピア",
    "region": "アフリカ",
    "type": "natural",
    "year_inscribed": 1978,
    "criteria": [
      "vii",
      "x"
    ],
    "location": {
      "lat": 13.2167,
      "lng": 38.0667
    },
    "summary": "エチオピア北部アフリカン・グレート・リフト・バレー（アフリカ大地溝帯）北部に位置する国立公園。垂直の玄武岩崖が連なる絶景。固有種のゲラダヒヒ（世界最大のヒヒ）とワリア・アイベックス（絶滅危惧）が生息。危機遺産記載歴あり。",
    "highlights": [
      "ゲラダヒヒ（固有種）",
      "ワリア・アイベックス",
      "玄武岩絶壁",
      "アフリカ大地溝帯"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/9",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_CA_001",
    "name_jp": "カナディアン・ロッキー山脈自然公園群",
    "name_en": "Canadian Rocky Mountain Parks",
    "country": "カナダ",
    "region": "欧州・北米",
    "type": "natural",
    "year_inscribed": 1984,
    "criteria": [
      "vii",
      "viii"
    ],
    "location": {
      "lat": 51.5,
      "lng": -116.5
    },
    "summary": "バンフ・ジャスパー・クートニー・ヨーホーの4国立公園とマウント・ロブソン等3州立公園からなるシリアル遺産。コロンビア氷原（北米最大の氷原の一つ）・モレーン湖の絶景が有名。",
    "highlights": [
      "コロンビア氷原",
      "バンフ（観光地）",
      "モレーン湖",
      "グリズリーベア"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/304",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_ZB_001",
    "name_jp": "モシ・オア・トゥンヤ／ビクトリア滝",
    "name_en": "Mosi-oa-Tunya / Victoria Falls",
    "country": "ザンビア・ジンバブエ",
    "region": "アフリカ",
    "type": "natural",
    "year_inscribed": 1989,
    "criteria": [
      "vii"
    ],
    "location": {
      "lat": -17.9243,
      "lng": 25.8572
    },
    "summary": "ザンベジ川に流れ落ちるアフリカ最大の滝。「モシ・オア・トゥンヤ」はトンガ語で「雷鳴轟く煙」の意。幅約1.7km・高さ約108mで、最大流量時には数十km先から水煙が見える。ザンビア・ジンバブエにまたがる越境遺産。",
    "highlights": [
      "落差約108m・幅約1.7km",
      "雷鳴轟く煙（水煙）",
      "越境遺産",
      "リビングストン島"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/509",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_DE_001",
    "name_jp": "ワッデン海",
    "name_en": "Wadden Sea",
    "country": "ドイツ・オランダ・デンマーク",
    "region": "欧州・北米",
    "type": "natural",
    "year_inscribed": 2009,
    "criteria": [
      "viii",
      "ix",
      "x"
    ],
    "location": {
      "lat": 53.5,
      "lng": 8.5
    },
    "summary": "北海沿岸のドイツ・オランダ・デンマーク3か国にまたがる世界最大の干潟（潮間帯）。干潮時に広大な砂泥干潟が現れ、渡り鳥1,200万羽以上の中継地、哺乳類・魚類の育成場として世界的重要性を持つ。",
    "highlights": [
      "世界最大の干潟",
      "渡り鳥1200万羽",
      "ゴマフアザラシ",
      "3か国越境遺産"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/1314",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_IT_002",
    "name_jp": "ストーンヘンジ、エーヴベリーと関連遺跡群",
    "name_en": "Stonehenge, Avebury and Associated Sites",
    "country": "イギリス",
    "region": "欧州・北米",
    "type": "cultural",
    "year_inscribed": 1986,
    "criteria": [
      "i",
      "ii",
      "iii"
    ],
    "location": {
      "lat": 51.1789,
      "lng": -1.8262
    },
    "summary": "イングランド南部ウィルトシャーの先史時代（新石器〜青銅器時代）の巨石記念物群。ストーンヘンジは直径30mのサークル状に立てられた巨石（最大50トン）。建造目的（天文暦・祭祀施設）は諸説あり。エーヴベリーはより規模が大きい環状列石。",
    "highlights": [
      "ブルーストーン（300km運搬）",
      "夏至の日の出",
      "エーヴベリー環状列石",
      "ドルメン・メンヒル"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/373",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_IT_003",
    "name_jp": "フィレンツェ歴史地区",
    "name_en": "Historic Centre of Florence",
    "country": "イタリア",
    "region": "欧州・北米",
    "type": "cultural",
    "year_inscribed": 1982,
    "criteria": [
      "i",
      "ii",
      "iii",
      "iv",
      "vi"
    ],
    "location": {
      "lat": 43.7731,
      "lng": 11.2558
    },
    "summary": "ルネサンス発祥地としてのイタリア中部の都市。メディチ家の庇護のもと14〜17世紀に花開いた芸術・文化の中心。ウフィツィ美術館・ドゥオーモ（サンタ・マリア・デル・フィオーレ大聖堂）・ヴェッキオ橋等が集積する。",
    "highlights": [
      "ドゥオーモ（クーポラ）",
      "ウフィツィ美術館",
      "ヴェッキオ橋",
      "メディチ家"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/174",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_IT_004",
    "name_jp": "ヴェネツィアとその潟",
    "name_en": "Venice and its Lagoon",
    "country": "イタリア",
    "region": "欧州・北米",
    "type": "cultural",
    "year_inscribed": 1987,
    "criteria": [
      "i",
      "ii",
      "iii",
      "iv",
      "v",
      "vi"
    ],
    "location": {
      "lat": 45.4375,
      "lng": 12.3358
    },
    "summary": "アドリア海北部の潟（ラグーン）に浮かぶ島嶼都市。約118の小島と400以上の橋で構成。5〜6世紀の難民が建設した水上都市で、海洋共和国として地中海交易を支配。海面上昇・地盤沈下・オーバーツーリズムが深刻。",
    "highlights": [
      "サン・マルコ大聖堂",
      "ドゥカーレ宮殿",
      "ゴンドラ",
      "ため息橋"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/394",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_IT_005",
    "name_jp": "ポンペイ、エルコラーノ及びトッレ・アンヌンツィアータの考古地域",
    "name_en": "Archaeological Areas of Pompei, Herculaneum and Torre Annunziata",
    "country": "イタリア",
    "region": "欧州・北米",
    "type": "cultural",
    "year_inscribed": 1997,
    "criteria": [
      "iii",
      "iv",
      "v"
    ],
    "location": {
      "lat": 40.7506,
      "lng": 14.4989
    },
    "summary": "ナポリ近郊で79年のヴェスヴィオ火山噴火により火山灰に埋没した古代ローマ都市。当時の生活様式・建築・壁画・モザイクが奇跡的に保存。現在も発掘継続中で、毎年新発見が続く。",
    "highlights": [
      "79年ヴェスヴィオ噴火",
      "火山灰保存の市街地",
      "フレスコ画",
      "犬の像（モザイク）"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/829",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_IT_006",
    "name_jp": "ローマの歴史地区、教皇領とサン・パオロ・フオーリ・レ・ムーラ大聖堂",
    "name_en": "Historic Centre of Rome",
    "country": "イタリア・バチカン",
    "region": "欧州・北米",
    "type": "cultural",
    "year_inscribed": 1980,
    "criteria": [
      "i",
      "ii",
      "iii",
      "iv",
      "vi"
    ],
    "location": {
      "lat": 41.9028,
      "lng": 12.4964
    },
    "summary": "「永遠の都」ローマの歴史的中心地とバチカン市国を含む遺産。コロッセオ・フォロ・ロマーノ・パンテオン・サン・ピエトロ大聖堂等、古代ローマから中世・ルネサンス・バロックに至る建築が集積。",
    "highlights": [
      "コロッセオ",
      "サン・ピエトロ大聖堂",
      "パンテオン",
      "フォロ・ロマーノ"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/91",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_TR_001",
    "name_jp": "イスタンブール歴史地域",
    "name_en": "Historic Areas of Istanbul",
    "country": "トルコ",
    "region": "欧州・北米",
    "type": "cultural",
    "year_inscribed": 1985,
    "criteria": [
      "i",
      "ii",
      "iii",
      "iv"
    ],
    "location": {
      "lat": 41.0082,
      "lng": 28.9784
    },
    "summary": "ボスポラス海峡に位置するヨーロッパとアジアをつなぐ都市。コンスタンティノープルとして東ローマ帝国の首都（330〜1453年）、その後オスマン帝国の首都として栄えた。アヤソフィア・ブルーモスク・トプカプ宮殿等が集積。",
    "highlights": [
      "アヤソフィア（ハギア・ソフィア）",
      "ブルーモスク（スルタンアフメト・ジャーミー）",
      "トプカプ宮殿",
      "グランドバザール"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/356",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_MX_001",
    "name_jp": "チチェン・イッツァ",
    "name_en": "Pre-Hispanic City of Chichen-Itza",
    "country": "メキシコ",
    "region": "ラテンアメリカ・カリブ",
    "type": "cultural",
    "year_inscribed": 1988,
    "criteria": [
      "i",
      "ii",
      "iii"
    ],
    "location": {
      "lat": 20.6843,
      "lng": -88.5678
    },
    "summary": "メキシコ・ユカタン半島のマヤ文明後古典期（9〜13世紀）の都市遺跡。エル・カスティージョ（ピラミッド）は春分・秋分に日陰で蛇が降りてくるように見える天文学的設計が有名。トルテク文化の影響も受けた。",
    "highlights": [
      "エル・カスティージョ（ピラミッド）",
      "春秋分の蛇の幻影",
      "セノーテ（聖なる泉）",
      "チャク・モール"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/483",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_MX_002",
    "name_jp": "テオティワカン古代都市",
    "name_en": "Pre-Hispanic City of Teotihuacan",
    "country": "メキシコ",
    "region": "ラテンアメリカ・カリブ",
    "type": "cultural",
    "year_inscribed": 1987,
    "criteria": [
      "i",
      "ii",
      "iii",
      "iv",
      "vi"
    ],
    "location": {
      "lat": 19.6925,
      "lng": -98.8439
    },
    "summary": "メキシコシティ北東約50kmの古代都市遺跡。紀元前200〜紀元600年頃に最盛期を迎え人口約15〜20万の都市。太陽のピラミッド（高さ65m・底辺225m）・月のピラミッド・「死者の大通り」が有名。建設者・滅亡理由は不明。",
    "highlights": [
      "太陽のピラミッド",
      "月のピラミッド",
      "死者の大通り",
      "羽毛ある蛇の神殿"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/414",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_CN_002",
    "name_jp": "北京と瀋陽の明・清朝の皇宮群（故宮）",
    "name_en": "Imperial Palaces of the Ming and Qing Dynasties in Beijing and Shenyang",
    "country": "中国",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 1987,
    "criteria": [
      "i",
      "ii",
      "iii",
      "iv"
    ],
    "location": {
      "lat": 39.9163,
      "lng": 116.3972
    },
    "summary": "北京の紫禁城（故宮）を中心とする明・清両朝の皇宮群。1406〜20年建造の故宮は約9,000室からなる世界最大の宮殿建築群。明の永楽帝が建設。宮殿のほか瀋陽の清朝宮殿も含む。",
    "highlights": [
      "紫禁城（故宮）",
      "天安門",
      "太和殿",
      "明・清24代の皇帝が居住"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/439",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_CN_003",
    "name_jp": "万里の長城",
    "name_en": "The Great Wall",
    "country": "中国",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 1987,
    "criteria": [
      "i",
      "ii",
      "iii",
      "iv",
      "vi"
    ],
    "location": {
      "lat": 40.4319,
      "lng": 116.5704
    },
    "summary": "中国北部を東西に走る城壁。秦の始皇帝が基礎を築き、明代（14〜17世紀）に現在見られる主な長城が完成。全長は諸説あるが21,196kmと計測された（2012年）。「宇宙から見える」は誤りとされる。",
    "highlights": [
      "八達嶺（観光地）",
      "好漢城（ハオハンポ）",
      "居庸関",
      "明代煉瓦長城"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/438",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_KH_001",
    "name_jp": "アンコールの遺跡群",
    "name_en": "Angkor",
    "country": "カンボジア",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 1992,
    "criteria": [
      "i",
      "ii",
      "iii",
      "iv"
    ],
    "location": {
      "lat": 13.4125,
      "lng": 103.8667
    },
    "summary": "9〜15世紀のクメール帝国の都城遺跡群。アンコール・ワット（ヒンドゥー教→仏教寺院）はその規模と保存状態で世界最大の宗教的建造物。アンコール・トムの「バイヨン（観世音菩薩の四面塔）」も有名。カンボジアの国旗にも描かれる。",
    "highlights": [
      "アンコール・ワット（世界最大の宗教建造物）",
      "バイヨン（四面塔）",
      "タ・プロームの樹木",
      "水利システム"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/668",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_PE_001",
    "name_jp": "マチュ・ピチュの歴史的聖域",
    "name_en": "Historic Sanctuary of Machu Picchu",
    "country": "ペルー",
    "region": "ラテンアメリカ・カリブ",
    "type": "mixed",
    "year_inscribed": 1983,
    "criteria": [
      "i",
      "iii",
      "vii",
      "ix"
    ],
    "location": {
      "lat": -13.1625,
      "lng": -72.545
    },
    "summary": "ペルー・アンデス山中（標高約2,430m）に位置するインカ帝国の遺跡。15世紀に建造されたとされ、スペイン征服者に発見されず保存された。「空中都市」「インカの失われた都市」とも呼ばれる。農地・神殿・住居が精緻な石組みで構成される複合遺産。",
    "highlights": [
      "太陽の神殿",
      "インティワタナ（石の日時計）",
      "アグアス・カリエンテス（麓の村）",
      "アンデス・コンドル"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/274",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_ML_001",
    "name_jp": "ティンブクトゥ",
    "name_en": "Timbuktu",
    "country": "マリ",
    "region": "アフリカ",
    "type": "cultural",
    "year_inscribed": 1988,
    "criteria": [
      "ii",
      "iv",
      "v"
    ],
    "location": {
      "lat": 16.7667,
      "lng": -3.0
    },
    "summary": "サハラ砂漠の南縁に位置するマリの古都。14〜16世紀にイスラム交易・学術の中心として「アフリカのエルドラド（黄金の都）」と呼ばれた。3つのモスク（ジンガレーベル・サンコレ・シディ・ヤヒア）と多数のイスラム神学校。武装勢力による破壊被害あり。",
    "highlights": [
      "ジンガレーベル・モスク",
      "サンコレ・モスク",
      "写本文書（トンブクトゥ写本）",
      "砂漠の学術都市"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/119",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_US_004",
    "name_jp": "メサ・ヴェルデ国立公園",
    "name_en": "Mesa Verde National Park",
    "country": "アメリカ合衆国",
    "region": "欧州・北米",
    "type": "cultural",
    "year_inscribed": 1978,
    "criteria": [
      "iii"
    ],
    "location": {
      "lat": 37.1836,
      "lng": -108.4886
    },
    "summary": "コロラド州の断崖に建設されたアナサジ族（古代プエブロ族）の岩窟集落（クリフドウェリング）。13世紀に突如放棄され、「クリフ・パレス」（217室）が最大。農業・天文学・建築技術の高度さで知られる。",
    "highlights": [
      "クリフ・パレス（217室）",
      "スプルース・ツリー・ハウス",
      "アナサジ族（古代プエブロ族）",
      "突然の放棄の謎"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/27",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_ET_002",
    "name_jp": "アクスムの遺跡",
    "name_en": "Aksum",
    "country": "エチオピア",
    "region": "アフリカ",
    "type": "cultural",
    "year_inscribed": 1980,
    "criteria": [
      "i",
      "iv"
    ],
    "location": {
      "lat": 14.1167,
      "lng": 38.7167
    },
    "summary": "エチオピア北部の古代アクスム王国（1〜7世紀）の都城跡。石製の巨大な石碑（ステーレ）群が有名で、最大のものは高さ33m・重さ520トン。ソロモン王とシバの女王の伝説、ユダヤ教・キリスト教の聖遺物（契約の箱）伝説と結びつく。",
    "highlights": [
      "巨大石碑（ステーレ）",
      "アクスム王国",
      "契約の箱（アーク）伝説",
      "シオンのマリア教会"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/15",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_CO_001",
    "name_jp": "カルタヘナの港・要塞・歴史的建造物群",
    "name_en": "Port, Fortresses and Group of Monuments, Cartagena",
    "country": "コロンビア",
    "region": "ラテンアメリカ・カリブ",
    "type": "cultural",
    "year_inscribed": 1984,
    "criteria": [
      "iv",
      "vi"
    ],
    "location": {
      "lat": 10.4236,
      "lng": -75.5478
    },
    "summary": "カリブ海に面するコロンビア北部の植民地時代の港湾都市。スペイン植民地時代に南米産の金銀の積み出し港として栄え、海賊防御のため堅固な要塞が建設された。カラフルなコロニアル建築が今も旧市街に残る。",
    "highlights": [
      "サン・フェリペ・デ・バラハス要塞",
      "植民地時代の城壁",
      "ゴールドミュージアム",
      "カリブ海",
      "奴隷貿易の歴史"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/285",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_ES_001",
    "name_jp": "グラナダのアルハンブラ宮殿、ヘネラリフェ離宮、アルバイシン地区",
    "name_en": "Alhambra, Generalife and Albayzín, Granada",
    "country": "スペイン",
    "region": "欧州・北米",
    "type": "cultural",
    "year_inscribed": 1984,
    "criteria": [
      "i",
      "iii",
      "iv"
    ],
    "location": {
      "lat": 37.1773,
      "lng": -3.5986
    },
    "summary": "スペイン・アンダルシアのイスラム建築の傑作。ナスル朝（13〜15世紀）が建造したアルハンブラ宮殿は、アラベスク装飾・ムカルナス（鍾乳石装飾）・幾何学タイル・庭園の融合が極致に達した建築。1492年レコンキスタで失墜。",
    "highlights": [
      "ライオンの中庭",
      "大使の間（ムカルナス天井）",
      "ヘネラリフェ離宮（庭園）",
      "アルバイシン地区（旧市街）"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/314",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_SN_001",
    "name_jp": "ゴレ島",
    "name_en": "Island of Gorée",
    "country": "セネガル",
    "region": "アフリカ",
    "type": "cultural",
    "year_inscribed": 1978,
    "criteria": [
      "vi"
    ],
    "location": {
      "lat": 14.6667,
      "lng": -17.4
    },
    "summary": "セネガル・ダカール沖の小島。15〜19世紀に大西洋奴隷貿易の最大の中継地の一つとして機能。「奴隷の家（メゾン・デ・エスクラーヴ）」の「帰らぬ扉」は奴隷たちが船に乗せられた最後の場所として象徴的。「負の遺産」の代表例。",
    "highlights": [
      "奴隷の家（メゾン・デ・エスクラーヴ）",
      "帰らぬ扉",
      "奴隷貿易の歴史",
      "負の遺産"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/26",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_UZ_001",
    "name_jp": "サマルカンド―文化の交差路",
    "name_en": "Samarkand – Crossroads of Cultures",
    "country": "ウズベキスタン",
    "region": "欧州・北米",
    "type": "cultural",
    "year_inscribed": 2001,
    "criteria": [
      "i",
      "ii",
      "iv"
    ],
    "location": {
      "lat": 39.6542,
      "lng": 66.9597
    },
    "summary": "シルクロードの中心都市。ティムール帝国（14〜15世紀）の最盛期に建造されたレギスタン広場（3つのメドレセ）・グル・エ・アミール廟・シャー・ジンダ廟が絢爛な青タイル装飾で覆われる。「東方の宝石」とも呼ばれる。",
    "highlights": [
      "レギスタン広場（3つのメドレセ）",
      "グル・エ・アミール廟（ティムール廟）",
      "シャー・ジンダ廟",
      "青いモザイクタイル"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/603",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_ML_002",
    "name_jp": "ジェンネの旧市街",
    "name_en": "Old Towns of Djenné",
    "country": "マリ",
    "region": "アフリカ",
    "type": "cultural",
    "year_inscribed": 1988,
    "criteria": [
      "iii",
      "iv"
    ],
    "location": {
      "lat": 13.9067,
      "lng": -4.5553
    },
    "summary": "マリ中部・ニジェール川内陸デルタに位置する古都。ジェンネ大モスク（グランド・モスク）は世界最大の日干しレンガ（アドベ）建造物で、毎年塗り直す「左官祭」が伝統的に行われる。13世紀以来のイスラム教の学術・交易の中心。",
    "highlights": [
      "ジェンネ大モスク（世界最大の日干しレンガ建築）",
      "アドベ（日干しレンガ）",
      "左官祭",
      "ニジェール川内陸デルタ"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/116",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_TH_001",
    "name_jp": "古都スコータイと周辺の歴史地区",
    "name_en": "Historic Town of Sukhothai and Associated Historic Towns",
    "country": "タイ",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 1991,
    "criteria": [
      "i",
      "iii"
    ],
    "location": {
      "lat": 17.0167,
      "lng": 99.7
    },
    "summary": "タイ初の統一王朝スコータイ王国（13〜14世紀）の首都遺跡。独自のスコータイ様式の仏教建築・仏像が数多く残る。王立寺院ワット・マハタートの蓮花形尖塔（スコータイ様式）が象徴的。タイ文字もこの時代に創出された。",
    "highlights": [
      "ワット・マハタート",
      "スコータイ様式仏像",
      "タイ文字誕生の地",
      "水管理施設（池・堀）"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/574",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_GB_001",
    "name_jp": "リヴァプール海商都市",
    "name_en": "Liverpool – Maritime Mercantile City",
    "country": "イギリス",
    "region": "欧州・北米",
    "type": "cultural",
    "year_inscribed": 2004,
    "criteria": [
      "ii",
      "iii",
      "iv"
    ],
    "location": {
      "lat": 53.4,
      "lng": -2.9833
    },
    "summary": "【2021年世界遺産リストから削除】イングランド北西部の港湾都市。18〜19世紀に大英帝国の商業・奴隷貿易の中核港として栄えた。ウォーターフロントの大規模再開発（高層ビル建設）により歴史的景観が損なわれ、2021年に世界遺産リストから削除された（リスト削除の3事例の一つ）。",
    "highlights": [
      "2021年世界遺産削除（3例目）",
      "ウォーターフロント再開発が原因",
      "アルバート・ドック",
      "ビートルズ発祥の地"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/1150",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_LA_001",
    "name_jp": "ルアン・パバンの町",
    "name_en": "Town of Luang Prabang",
    "country": "ラオス",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 1995,
    "criteria": [
      "ii",
      "iv",
      "v"
    ],
    "location": {
      "lat": 19.8856,
      "lng": 102.1347
    },
    "summary": "ラオス北部のメコン川とカーン川の合流点に位置する古都。ランサン王国（14〜18世紀）の首都として栄えた仏教都市。33の寺院・フランス植民地時代の建築と伝統的ラオス建築が融合した独特の都市景観。早朝の托鉢（タークバート）が有名。",
    "highlights": [
      "ワット・シエントーン（金色の壁画寺院）",
      "早朝の托鉢",
      "フランス植民地建築",
      "メコン川クルーズ"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/479",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_ET_003",
    "name_jp": "古都ハラール・ジュゴル",
    "name_en": "Harar Jugol, the Fortified Historic Town",
    "country": "エチオピア",
    "region": "アフリカ",
    "type": "cultural",
    "year_inscribed": 2006,
    "criteria": [
      "ii",
      "iii",
      "iv",
      "v"
    ],
    "location": {
      "lat": 9.3125,
      "lng": 42.1222
    },
    "summary": "エチオピア東部の城壁都市。アフリカ・イスラム第4の聖地とも言われ、16世紀に建造された城壁（ジュゴル）内に82のモスクと102の礼拝所が密集。「ハイエナの餌付け」という独特の伝統で有名。ランボーが暮らした地でも知られる。",
    "highlights": [
      "城壁（ジュゴル）",
      "82のモスク",
      "ハイエナの餌付け",
      "アフリカのイスラム聖地"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/1189",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_ZA_001",
    "name_jp": "ロベン島",
    "name_en": "Robben Island",
    "country": "南アフリカ",
    "region": "アフリカ",
    "type": "cultural",
    "year_inscribed": 1999,
    "criteria": [
      "iii",
      "vi"
    ],
    "location": {
      "lat": -33.8042,
      "lng": 18.3664
    },
    "summary": "南アフリカ・ケープタウン沖の島。17世紀からの監獄島として使われ、アパルトヘイト時代（1960〜90年代）にはネルソン・マンデラが18年間収監された。現在は博物館として元受刑者がガイドを務める。「負の遺産」・人権の勝利の象徴。",
    "highlights": [
      "マンデラの独房（18年）",
      "アパルトヘイト反対運動の象徴",
      "元受刑者ガイド",
      "ケープタウン沖"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/916",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_CN_004",
    "name_jp": "平遥古城",
    "name_en": "Ancient City of Ping Yao",
    "country": "中国",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 1997,
    "criteria": [
      "ii",
      "iii",
      "iv"
    ],
    "location": {
      "lat": 37.2,
      "lng": 112.1667
    },
    "summary": "山西省の明・清時代の城壁都市が完全な形で保存された遺産。14世紀建造の城壁（周囲6.4km）内に当時の街並みが現存。清朝に中国の金融ビジネスを支配した「票号（ひょうごう）」（山西商人の民間銀行）発祥地でもある。",
    "highlights": [
      "明清時代の城壁（周囲6.4km）",
      "票号（山西商人の銀行）",
      "16の古寺廟",
      "伝統的四合院"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/812",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_ID_002",
    "name_jp": "ボロブドゥール寺院遺跡群",
    "name_en": "Borobudur Temple Compounds",
    "country": "インドネシア",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 1991,
    "criteria": [
      "i",
      "ii",
      "vi"
    ],
    "location": {
      "lat": -7.6079,
      "lng": 110.2038
    },
    "summary": "インドネシア・ジャワ島中部の仏教遺跡。8〜9世紀シャイレーンドラ朝建造の世界最大規模の仏教建造物。5層の方形基壇＋3層の円形テラス＋頂上の大ストゥーパという曼荼羅的構造。72の鐘形ストゥーパの仏像が有名。",
    "highlights": [
      "世界最大の仏教建造物",
      "72の鐘形ストゥーパ",
      "2,672枚の浮彫パネル",
      "曼荼羅構造"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/592",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_ES_002",
    "name_jp": "コルドバの歴史地区",
    "name_en": "Historic Centre of Córdoba",
    "country": "スペイン",
    "region": "欧州・北米",
    "type": "cultural",
    "year_inscribed": 1984,
    "criteria": [
      "i",
      "ii",
      "iii",
      "iv"
    ],
    "location": {
      "lat": 37.8792,
      "lng": -4.7794
    },
    "summary": "スペイン・アンダルシアの古都。後ウマイヤ朝（756〜1031年）の首都として欧州最大の都市の一つに発展。メスキータ（モスク大聖堂）は、8世紀に建造されたモスクの内部に後からキリスト教の大聖堂が建設された独自の建築。",
    "highlights": [
      "メスキータ（モスク大聖堂）",
      "無数の列柱とアーチ",
      "ミフラーブ（聖龕）",
      "花の小径（フロール小路）"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/313",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_IL_001",
    "name_jp": "エルサレムの旧市街とその城壁群",
    "name_en": "Old City of Jerusalem and its Walls",
    "country": "ヨルダン（推薦国）",
    "region": "アラブ",
    "type": "cultural",
    "year_inscribed": 1981,
    "criteria": [
      "ii",
      "iii",
      "vi"
    ],
    "location": {
      "lat": 31.7781,
      "lng": 35.2359
    },
    "summary": "ユダヤ教・キリスト教・イスラム教の三宗教の聖地が密集する「聖都」。嘆きの壁（ユダヤ教）・聖墳墓教会（キリスト教）・岩のドーム/アル・アクサ・モスク（イスラム教）が共存。ヨルダンが推薦した危機遺産記載中。",
    "highlights": [
      "岩のドーム（黄金のドーム）",
      "嘆きの壁",
      "聖墳墓教会",
      "アル・アクサ・モスク"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/148",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_TR_002",
    "name_jp": "ハットゥシャ：ヒッタイトの首都",
    "name_en": "Hattusha: the Hittite Capital",
    "country": "トルコ",
    "region": "欧州・北米",
    "type": "cultural",
    "year_inscribed": 1986,
    "criteria": [
      "i",
      "ii",
      "iii",
      "iv"
    ],
    "location": {
      "lat": 40.0194,
      "lng": 34.6156
    },
    "summary": "トルコ中部のヒッタイト帝国の首都遺跡（紀元前17〜12世紀）。「獅子の門」「王の門」等の巨大城門と宮殿・神殿跡が残る。紀元前1274年のカデシュの戦い後のエジプト・ヒッタイト条約（世界最古の国際条約）原文がここで発見された。",
    "highlights": [
      "獅子の門",
      "王の門",
      "大神殿跡",
      "世界最古の国際条約（楔形文字）"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/377",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_MM_001",
    "name_jp": "バガン",
    "name_en": "Bagan",
    "country": "ミャンマー",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 2019,
    "criteria": [
      "iii",
      "iv",
      "vi"
    ],
    "location": {
      "lat": 21.1717,
      "lng": 94.8585
    },
    "summary": "ミャンマー中部イラワジ川中流域の古都。11〜13世紀のパガン王朝期に約10,000基が建造されたとされる仏塔（パゴダ）群が平原に広がる。現存約2,200基以上。2019年に念願の世界遺産登録（政治問題で長年困難だった）。",
    "highlights": [
      "約2,200基のパゴダ群",
      "スーラマニ寺院",
      "アーナンダ寺院",
      "バルーン・サンライズ"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/1588",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_AF_001",
    "name_jp": "バーミヤン渓谷の文化的景観と古代遺跡群",
    "name_en": "Cultural Landscape and Archaeological Remains of the Bamiyan Valley",
    "country": "アフガニスタン",
    "region": "アラブ",
    "type": "cultural",
    "year_inscribed": 2003,
    "criteria": [
      "i",
      "ii",
      "iii",
      "iv",
      "vi"
    ],
    "location": {
      "lat": 34.8333,
      "lng": 67.8333
    },
    "summary": "アフガニスタン中部ヒンドゥークシュ山脈に位置する仏教遺跡。2001年にタリバン政権が爆破した二体の大仏（東大仏53m・西大仏38m）跡地を含む。登録は爆破後の2003年。危機遺産リストに記載中。現在も再建か保存かで議論継続。",
    "highlights": [
      "2001年タリバンによる大仏爆破",
      "東大仏（53m）跡",
      "西大仏（38m）跡",
      "仏教壁画"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/208",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_SY_001",
    "name_jp": "パルミラの遺跡",
    "name_en": "Site of Palmyra",
    "country": "シリア",
    "region": "アラブ",
    "type": "cultural",
    "year_inscribed": 1980,
    "criteria": [
      "i",
      "ii",
      "iv"
    ],
    "location": {
      "lat": 34.5517,
      "lng": 38.2669
    },
    "summary": "シリア砂漠の中のローマ・パルミラ文明の遺跡。1〜3世紀に東西交易の中継都市として繁栄。2015〜16年にISIL（イスラム国）が占領し、ベル神殿・バールシャミン神殿・凱旋門・石棺塔墓を爆破・破壊。考古学者アサードが処刑された。危機遺産記載中。",
    "highlights": [
      "2015年ISIL占領・遺跡爆破",
      "ベル神殿（爆破）",
      "凱旋門（爆破→再建）",
      "テトラピロン"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/23",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_NP_003",
    "name_jp": "カトマンズの谷",
    "name_en": "Kathmandu Valley",
    "country": "ネパール",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 1979,
    "criteria": [
      "iii",
      "iv",
      "vi"
    ],
    "location": {
      "lat": 27.7167,
      "lng": 85.3167
    },
    "summary": "ネパール首都カトマンズとその周辺の7つの記念物地区（パタン・バクタプル・ボダナート等）からなるシリアル遺産。ヒンドゥー教と仏教が共存する独自の文化景観。2015年のネパール大地震で多くの建造物が損壊し、修復が進む。",
    "highlights": [
      "パシュパティナート寺院（火葬場）",
      "ボダナートの大仏塔",
      "スワヤンブナート",
      "バクタプル（中世都市保存）"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/121",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_PK_001",
    "name_jp": "モエンジョダロの遺跡",
    "name_en": "Archaeological Ruins at Moenjodaro",
    "country": "パキスタン",
    "region": "アジア太平洋",
    "type": "cultural",
    "year_inscribed": 1980,
    "criteria": [
      "ii",
      "iii"
    ],
    "location": {
      "lat": 27.3236,
      "lng": 68.1358
    },
    "summary": "パキスタン南部インダス川沿いのインダス文明最大の都市遺跡（紀元前2500〜1900年頃）。「死の丘」の意。碁盤の目状の都市計画・上下水道システム・公衆浴場（大浴場）等の高度な都市文明を示す。危機遺産記載中（塩分による劣化）。",
    "highlights": [
      "碁盤の目状都市計画",
      "大浴場（グレートバス）",
      "上下水道システム",
      "インダス文字（未解読）"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/138",
    "grade": 2,
    "importance": 2
  },
  {
    "id": "WH_CL_001",
    "name_jp": "ラパ・ヌイ国立公園",
    "name_en": "Rapa Nui National Park",
    "country": "チリ",
    "region": "ラテンアメリカ・カリブ",
    "type": "cultural",
    "year_inscribed": 1995,
    "criteria": [
      "i",
      "iii",
      "v"
    ],
    "location": {
      "lat": -27.1127,
      "lng": -109.3497
    },
    "summary": "太平洋の孤立した島イースター島（ラパ・ヌイ）。ポリネシア人が建造した887体以上のモアイ（巨大石像）で世界的に有名。最大のモアイは高さ9.8m・重さ約80トン。過剰伐採による環境破壊・文明崩壊の教訓としても引用される。",
    "highlights": [
      "モアイ（887体以上）",
      "アフ・トンガリキ（15体立像）",
      "ラノ・ララク採石場",
      "ポリネシア文化"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/715",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_FR_002",
    "name_jp": "ヴェルサイユの宮殿と庭園",
    "name_en": "Palace and Park of Versailles",
    "country": "フランス",
    "region": "欧州・北米",
    "type": "cultural",
    "year_inscribed": 1979,
    "criteria": [
      "i",
      "ii",
      "vi"
    ],
    "location": {
      "lat": 48.8049,
      "lng": 2.1204
    },
    "summary": "フランス・ルイ14世（太陽王）が建設した絶対王権の象徴。「太陽王」の宮廷文化・バロック建築・フランス式整形庭園の傑作。鏡の間（73m・357枚の鏡）・大噴水が有名。1789年フランス革命の舞台、1871年独仏戦争後のドイツ帝国宣言の場でもある。",
    "highlights": [
      "鏡の間（357枚の鏡）",
      "フランス式整形庭園",
      "ルイ14世（太陽王）",
      "大噴水"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/83",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_PL_001",
    "name_jp": "アウシュヴィッツ・ビルケナウ―ナチスドイツの強制・絶滅収容所（1940〜1945年）",
    "name_en": "Auschwitz Birkenau: German Nazi Concentration and Extermination Camp",
    "country": "ポーランド",
    "region": "欧州・北米",
    "type": "cultural",
    "year_inscribed": 1979,
    "criteria": [
      "vi"
    ],
    "location": {
      "lat": 50.0341,
      "lng": 19.1778
    },
    "summary": "ポーランド南部オシフィエンチム（独：アウシュヴィッツ）のナチスドイツによるユダヤ人等の大量虐殺（ホロコースト）の場。1940〜45年に約150万人（うち約90%がユダヤ人）が殺害された。「仕事が自由にする」の門・ガス室が残る。「負の遺産」を代表する最重要遺産。",
    "highlights": [
      "「仕事が自由にする」の門",
      "ガス室・焼却炉",
      "ビルケナウ（第二収容所）",
      "ホロコーストの証言"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/31",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_DE_002",
    "name_jp": "ドレスデンのエルベ渓谷",
    "name_en": "Dresden Elbe Valley",
    "country": "ドイツ",
    "region": "欧州・北米",
    "type": "cultural",
    "year_inscribed": 2004,
    "criteria": [
      "ii",
      "iii",
      "iv",
      "v"
    ],
    "location": {
      "lat": 51.05,
      "lng": 13.74
    },
    "summary": "【2009年世界遺産リストから削除】ドレスデン中心部のエルベ川沿いの文化的景観。ヴァルトシュロスヒェン橋の建設（市民投票で建設決定）が景観を分断するとして2009年に削除された。世界遺産削除の2例目（1例目はオマーンのアラビアオリックス）。",
    "highlights": [
      "2009年世界遺産削除（2例目）",
      "ヴァルトシュロスヒェン橋建設が原因",
      "ツヴィンガー宮殿",
      "ドレスデン聖母教会"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/1156",
    "grade": 2,
    "importance": 3
  },
  {
    "id": "WH_PE_002",
    "name_jp": "ナスカとパルパの地上絵",
    "name_en": "Lines and Geoglyphs of Nasca and Pampas de Jumana",
    "country": "ペルー",
    "region": "ラテンアメリカ・カリブ",
    "type": "cultural",
    "year_inscribed": 1994,
    "criteria": [
      "i",
      "iii",
      "iv"
    ],
    "location": {
      "lat": -14.7,
      "lng": -75.1333
    },
    "summary": "ペルー南部ナスカ台地に描かれた巨大な線画・図形（紀元前100年〜紀元700年頃）。ハチドリ・コンドル・クモ・宇宙人等の図形が上空からのみ全体像を把握できる規模。用途（天文暦・儀式・灌漑説など）は諸説あり未解明。",
    "highlights": [
      "ハチドリ（93m）",
      "コンドル（130m）",
      "宇宙人の線画",
      "用途の謎"
    ],
    "related_video": "",
    "official_url": "https://whc.unesco.org/ja/list/700",
    "grade": 2,
    "importance": 3
  }
];
