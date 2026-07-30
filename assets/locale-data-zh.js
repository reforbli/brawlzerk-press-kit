(() => {
  const STEAM_URL = "https://store.steampowered.com/app/4983810/BRAWLZERK/";

  const translations = window.BRAWLZERK_PRESSKIT_TRANSLATIONS;
  const runtimeCopy = window.BRAWLZERK_PRESSKIT_RUNTIME_COPY;

  if (!translations || !runtimeCopy) return;

  translations["zh-Hans"] = {
    meta: {
      title: "BRAWLZERK — 官方媒体资料包",
      description: "BRAWLZERK 官方媒体资料包。这是一款将幸存者类玩法与格斗游戏式攻防相结合的等距视角动作类 Roguelite 游戏。",
      ogDescription: "别只顾着逃跑，打回去。将格斗游戏式攻防与主动技能卡流派相结合的等距视角动作游戏。",
      ogImageAlt: "BRAWLZERK 标志与战斗主视觉图",
      ogLocale: "zh_CN"
    },
    common: {
      skip: "跳至正文",
      homeLabel: "BRAWLZERK 媒体资料包首页",
      navLabel: "主导航",
      basicFacts: "游戏基本信息",
      localeLabel: "选择语言",
      gifSlot: "视频位置",
      placeholderNote: "请替换为可暂停的游戏视频和封面图。",
      copySuccess: "媒体文案已复制到剪贴板。",
      copyFail: "复制失败，请手动选择文字。"
    },
    nav: {
      steam: "Steam",
      trailer: "预告片",
      assets: "素材",
      moreAria: "打开完整菜单",
      about: "游戏简介",
      developer: "开发者",
      features: "核心特色",
      press: "媒体文案",
      media: "媒体素材",
      contact: "联系方式"
    },
    hero: {
      eyebrow: "BRAWLZERK · 官方媒体资料包",
      title: "别只顾着逃跑，<br><span>打回去。</span>",
      lead: "将幸存者类玩法与格斗游戏式攻防相结合的等距视角动作类 Roguelite 游戏。",
      wishlistAria: "在新标签页中打开 BRAWLZERK Steam 商店页面",
      aboutButton: "查看游戏简介",
      featuresButton: "查看核心特色"
    },
    trailerSection: {
      eyebrow: "官方预告片",
      intro: "从亲自攻击、格挡与闪避的战斗，到主动技能卡和多样化的敌人行动，都可在官方玩法预告片中查看。"
    },
    strip: [
      { label: "游戏名称", value: "BRAWLZERK" },
      { label: "开发者", value: "Reforbli" },
      { label: "类型", value: "等距视角砍杀 · 幸存者类 · Roguelite 动作" },
      { label: "平台", value: "Windows PC · Steam" },
      { label: "发售日期", value: "2026年11月10日" },
      { label: "媒体联系", value: "reforbli@gmail.com" },
      { label: "Steam 商店页面", value: "Steam 商店页面 ↗", href: STEAM_URL, external: true, ariaLabel: "在新标签页中打开 BRAWLZERK Steam 商店页面" },
      { label: "开发者 X / Twitter", value: "@Reforbli ↗", href: "https://x.com/Reforbli", external: true, ariaLabel: "在新标签页打开开发者 X / Twitter @Reforbli" }
    ],
    about: {
      eyebrow: "游戏简介",
      title: "幸存者类的压迫感，<br><em>格斗游戏式的攻防。</em>",
      intro: "迎战蜂拥而来的敌人，亲自发起攻击，读懂敌人的行动并及时防守，在破绽出现时重新夺回主动权。",
      bodyLead: "在 BRAWLZERK 中，生存并不只是与敌人拉开距离，等待自动攻击。玩家要亲自选择轻重攻击与战斗技能，并通过格挡和闪避的时机主导攻防节奏。",
      bodySecond: "在一局游戏中，战斗、升级、被动奖励与主动技能卡获取会连续展开。每局的组合都会改变，但亲手完成的连招与时机判断始终是战斗核心。",
      quote: "“进攻是生存手段，防守是反击的开始。”",
      quoteCredit: "BRAWLZERK 战斗理念"
    },
    developer: {
      eyebrow: "个人游戏开发者",
      since: "战斗系统原型 · 始于2015年",
      origin: "从2015年到2025年，我一直使用《Warcraft III》编辑器开发等距视角的格斗游戏式战斗系统。",
      game: "BRAWLZERK 是一款将幸存者类玩法与我多年来开发、并进一步完善的战斗系统相结合的游戏。与此前的原型不同，本作使用 Unity 进行全新开发。",
      movement: "本作最特别的地方，是移动方式。",
      movementContrast: "一般游戏需要按下 WASD 键或点击鼠标才能移动，但本作并非如此。角色会自动移动，玩家只需用鼠标调整移动方向。",
      reasonsIntro: "这样设计有两个原因。",
      skillFrequency: "为了减轻操作疲劳。",
      skillCooldown: "本作中有些技能存在冷却时间，但大多数技能没有冷却时间，因此玩家在整场战斗中会非常频繁地使用技能。",
      clickFatigue: "如果为这样的游戏采用点击移动，那么每次技能结束后，玩家都必须再次点击以重新下达移动指令。如此频繁地重复这一操作，会造成严重的操作疲劳。",
      manySkills: "为了让玩家能够舒适地使用十种以上的技能。",
      oneHand: "要舒适地使用如此多的技能，就需要用左手操作其中的大部分技能。",
      wasdTradeoff: "如果使用 WASD 移动，左手的多根手指就会被移动操作占用。这样一来，能够舒适使用的技能键会大幅减少，也很难设计出可以舒适使用大量技能的操作方案。",
      solution: "",
      vision: "我希望能在等距视角下，为大家带来一款全新的动作游戏。",
      wishlist: "如果您愿意将 BRAWLZERK 加入愿望单，将会给我带来很大的帮助。",
      thanks: "谢谢。",
      steamLink: "前往Steam页面 ↗"
    },
    featuresHead: {
      eyebrow: "核心特色",
      title: "核心特色",
      intro: "亲自操作的进攻、能够衔接反击的主动防守，以及由主动技能卡和被动奖励组成的单局流派，是 BRAWLZERK 的三大核心。"
    },
    features: [
      {
        label: "亲自操作的进攻",
        title: "无需等待，亲手出击",
        summary: "将轻重攻击与战斗技能直接衔接，打断敌群的攻势。无需等待自动冷却攻击，而是根据距离与敌人状态选择合适招式。",
        bullets: ["轻重攻击与地面连招", "突进、击飞、追击与范围技能", "根据局势变化的直接输入"],
        gifTitle: "进攻与连招视频位置",
        gifGuide: "建议画面：冲入敌群 → 手动连招 → 范围终结",
        gifAria: "展示直接攻击和敌群连招的玩法视频"
      },
      {
        label: "主动防守",
        title: "挡下攻击的瞬间，反击就此开始",
        summary: "用普通格挡承受压力，再通过准确的完美格挡和完美闪避创造短暂反击机会。确认防守成功后，由玩家亲自输入逆转技。",
        bullets: ["格挡与完美格挡", "翻滚与完美闪避", "防守成功后亲自输入逆转技"],
        gifTitle: "格挡、闪避与逆转技视频位置",
        gifGuide: "建议画面：完美闪避与反击 → 逆转技扭转攻势",
        gifAria: "展示格挡、闪避和逆转技的玩法视频"
      },
      {
        label: "空中与墙边连招",
        title: "击飞、重新挑起，再逼向墙边",
        summary: "从地面连招将敌人击飞，追加空中攻击，还能重新挑起倒地敌人，或通过撞墙延长连招。",
        bullets: ["从地面衔接至空中的连招路线", "利用倒地状态重新追击", "结合位置与墙面的连招延伸"],
        gifTitle: "空中与墙边连招视频位置",
        gifGuide: "建议画面：击飞 → 空中追击 → 撞墙 → 终结",
        gifAria: "空中和墙边连招玩法视频位置"
      },
      {
        label: "主动技能卡与被动奖励",
        title: "用卡牌改变战局，用被动完成流派",
        summary: "组合战斗中直接使用的主动技能卡与强化整局游戏的被动奖励。多目标斩击、旋风斩、冻结、防御和机动强化，会让每一局产生不同打法。",
        bullets: ["从手牌选择并直接使用主动技能卡", "进攻、控制、防御与增益选项", "每局都会变化的被动组合"],
        gifTitle: "主动技能卡视频位置",
        gifGuide: "建议画面：主动技能控制敌群 → 改变战局",
        gifAria: "展示主动技能卡改变战局的玩法视频"
      },
      {
        label: "必须做出应对的敌人",
        title: "会进攻、会防守，也会拉开距离",
        summary: "敌人不会站着挨打。他们会突进施压、后退射击，防御型敌人还会观察攻击前摇并进行格挡，迫使玩家采取不同应对。",
        bullets: ["近距离施压与冲锋", "远程牵制与距离控制", "观察并格挡攻击的防御型敌人"],
        gifTitle: "敌人应对视频位置",
        gifGuide: "建议画面：分别应对冲锋、远程和格挡型敌人",
        gifAria: "展示敌人进攻、格挡和拉开距离的玩法视频"
      },
      {
        label: "连续进行的一局",
        title: "战斗与成长不断推进的一整局",
        summary: "在选定的竞技场中迎战增援、升级，并获取被动奖励和主动技能卡。单局流派会在下次挑战时重置，但金币与战斗记录会转化为永久强化和解锁内容。",
        bullets: ["在连续流程中推进战斗与成长", "随时间不断上升的压力", "通过金币和记录获得永久强化与解锁"],
        gifTitle: "单局成长视频位置",
        gifGuide: "建议画面：战斗 → 升级选择 → 卡牌奖励 → 强化后重返战斗",
        gifAria: "连续单局成长玩法视频位置"
      }
    ],
    press: {
      eyebrow: "媒体参考文案",
      title: "可按需要使用的<br><em>媒体参考文案。</em>",
      intro: "提供三种长度，供报道、视频简介和活动介绍参考。您可以直接引用，也可以根据媒体风格自由调整。复制按钮仅作为快捷功能。",
      cards: [
        { title: "一句话介绍", length: "简短", text: "BRAWLZERK 是一款将幸存者类玩法与格斗游戏式攻防相结合的等距视角动作类 Roguelite 游戏。", button: "复制一句话介绍" },
        { title: "简短介绍", length: "商店 / 报道", text: "别只顾着逃跑，打回去。BRAWLZERK 是一款将幸存者类玩法与格斗游戏式攻防相结合的等距视角动作类 Roguelite 游戏。亲自攻击、格挡、闪避并延续连招，再通过主动技能卡和被动奖励，在每一局中打造全新的战斗风格。", button: "复制简短介绍" },
        { title: "媒体通稿介绍", length: "标准介绍", text: "BRAWLZERK 将幸存者类游戏中蜂拥而来的敌群，与格斗游戏中通过时机争夺主动权的攻防，融合为一款等距视角动作游戏。\n\n玩家可以直接衔接轻重攻击与战斗技能，并通过格挡、完美格挡、翻滚、完美闪避和逆转技打断敌人的攻势。地面连招能够延伸为空中连招和撞墙追击，而面对会冲锋、射击或格挡的敌人时，也需要采取不同应对。\n\n在连续进行的一局中，战斗、升级、被动奖励与主动技能卡牌组会同步成长。每局变化的卡牌和被动组合，会在同一套手动战斗系统上形成截然不同的玩法。", button: "复制完整文案" }
      ]
    },
    media: {
      eyebrow: "媒体素材",
      title: "游戏截图、<br><em>标志与主视觉图。</em>",
      intro: "请从<a class='inline-scroll-link' href='#google-drive-download'>下方 Google Drive 链接</a>下载。",
      trailerKicker: "官方玩法预告片",
      trailerTitle: "BRAWLZERK 官方玩法预告片",
      trailerBody: "一段视频即可查看手动战斗、主动技能卡和多样化的敌人行动。",
      trailerMeta: "在 YOUTUBE 观看 ↗",
      trailerAria: "在 YouTube 观看 BRAWLZERK 官方玩法预告片",
      screenshot1Name: "横扫敌群的战斗",
      screenshot2Name: "主动技能爆发",
      screenshot3Name: "逆转技攻防",
      screenshot4Name: "格挡与反击",
      screenshot5Name: "狂热战斗",
      screenshot1Alt: "BRAWLZERK 玩法画面，大范围攻击命中敌群",
      screenshot2Alt: "BRAWLZERK 玩法画面，在敌群中发动强化范围攻击",
      screenshot3Alt: "BRAWLZERK 玩法画面，在昏暗竞技场中进行近身攻防",
      screenshot4Alt: "BRAWLZERK 玩法画面，玩家在密集敌群中进行格挡",
      screenshot5Alt: "BRAWLZERK 玩法画面，与强化敌人展开狂热战斗",
      guidelinesHeading: "媒体素材使用说明",
      guidelines: [
        "可在主要对象仍清晰可辨的前提下裁剪游戏截图和主视觉图。",
        "请保持标志原始比例和颜色。",
        "如能同时标注游戏名称与 Steam 商店页面链接，我们将不胜感激。",
        "建议署名：BRAWLZERK / Reforbli。"
      ]
    },
    downloads: {
      heading: "下载中心",
      linkLabel: "从 Google Drive 下载媒体资料包 ↗",
      fileDescription: "按素材类型整理了1080p官方预告片、游戏截图、无标志与含标志主视觉图、透明背景标志、Steam 素材和图标。",
      usageNote: "所提供的文件可用于 BRAWLZERK 的游戏介绍与报道，包括文章、评测、活动介绍、视频缩略图、网站、YouTube 和社交媒体，并可在必要范围内进行编辑。"
    },
    facts: {
      eyebrow: "一览",
      rows: [
        { label: "游戏名称", value: "BRAWLZERK" },
        { label: "开发者", value: "Reforbli" },
        { label: "类型", value: "等距视角砍杀 · 幸存者类 · Roguelite 动作" },
        { label: "平台", value: "Windows PC · Steam" },
        { label: "核心战斗系统", value: "轻重攻击 · 战斗技能 · 空中/墙边连招 · 格挡/完美格挡 · 翻滚/完美闪避 · 逆转技" },
        { label: "单局成长", value: "升级 · 被动奖励 · 主动技能卡牌组 · 永久强化与解锁" },
        {
          label: "官方链接",
          links: [
            { value: "Steam", href: STEAM_URL, external: true, ariaLabel: "在新标签页中打开 BRAWLZERK Steam 商店页面" },
            { value: "YouTube", href: "https://youtu.be/ul-CM7RlaXo", external: true, ariaLabel: "在 YouTube 观看 BRAWLZERK 官方玩法预告片" }
          ]
        },
        { label: "发行商", value: "Reforbli（自主发行）" },
        { label: "预计发售日期", value: "2026年11月10日" },
        { label: "媒体联系", value: "reforbli@gmail.com" },
        { label: "计划支持语言", value: "韩语 · 英语 · 日语 · 简体中文 · 繁体中文 · 德语 · 法语 · 意大利语 · 西班牙语（西班牙） · 俄语 · 葡萄牙语（葡萄牙/巴西）" },
        { label: "游戏模式", value: "单人游戏" },
        { label: "游戏引擎", value: "Unity" }
      ]
    },
    contact: {
      eyebrow: "媒体联系",
      title: "欢迎联系<br>BRAWLZERK。",
      body: "如需采访、评测与报道、活动介绍、媒体素材或其他媒体相关信息，请直接联系 Reforbli。",
      emailLabel: "电子邮箱",
      steamLabel: "Steam 商店页面",
      steamValue: "Steam 商店页面 ↗",
      steamAria: "在新标签页中打开 BRAWLZERK Steam 商店页面",
      twitterLabel: "开发者 X / Twitter",
      twitterAria: "在新标签页打开开发者 X / Twitter @Reforbli",
      releaseLabel: "发售日期",
      releaseValue: "2026年11月10日"
    },
    footer: {
      top: "返回顶部 ↑"
    }
  };

  translations["zh-Hant"] = {
    meta: {
      title: "BRAWLZERK — 官方媒體資料包",
      description: "BRAWLZERK 官方媒體資料包。這是一款將倖存者類玩法與格鬥遊戲式攻防結合的等距視角動作 Roguelite。",
      ogDescription: "別只顧著逃跑，打回去。將格鬥遊戲式攻防與主動技能卡流派結合的等距視角動作遊戲。",
      ogImageAlt: "BRAWLZERK 標誌與戰鬥主視覺圖",
      ogLocale: "zh_TW"
    },
    common: {
      skip: "跳至正文",
      homeLabel: "BRAWLZERK 媒體資料包首頁",
      navLabel: "主要導覽",
      basicFacts: "遊戲基本資訊",
      localeLabel: "選擇語言",
      gifSlot: "影片位置",
      placeholderNote: "請替換為可暫停的遊戲影片與封面圖。",
      copySuccess: "媒體文案已複製到剪貼簿。",
      copyFail: "複製失敗，請手動選取文字。"
    },
    nav: {
      steam: "Steam",
      trailer: "預告片",
      assets: "素材",
      moreAria: "開啟完整選單",
      about: "遊戲介紹",
      developer: "開發者",
      features: "核心特色",
      press: "媒體文案",
      media: "媒體素材",
      contact: "聯絡方式"
    },
    hero: {
      eyebrow: "BRAWLZERK · 官方媒體資料包",
      title: "別只顧著逃跑，<br><span>打回去。</span>",
      lead: "將倖存者類玩法與格鬥遊戲式攻防結合的等距視角動作 Roguelite。",
      wishlistAria: "在新分頁中開啟 BRAWLZERK Steam 商店頁面",
      aboutButton: "查看遊戲介紹",
      featuresButton: "查看核心特色"
    },
    trailerSection: {
      eyebrow: "官方預告片",
      intro: "從親自攻擊、格擋與閃避的戰鬥，到主動技能卡與多樣化的敵人行動，都可在官方玩法預告片中查看。"
    },
    strip: [
      { label: "遊戲名稱", value: "BRAWLZERK" },
      { label: "開發者", value: "Reforbli" },
      { label: "類型", value: "等距視角砍殺 · 倖存者類 · Roguelite 動作" },
      { label: "平台", value: "Windows PC · Steam" },
      { label: "發售日期", value: "2026年11月10日" },
      { label: "媒體聯絡", value: "reforbli@gmail.com" },
      { label: "Steam 商店頁面", value: "Steam 商店頁面 ↗", href: STEAM_URL, external: true, ariaLabel: "在新分頁中開啟 BRAWLZERK Steam 商店頁面" },
      { label: "開發者 X / Twitter", value: "@Reforbli ↗", href: "https://x.com/Reforbli", external: true, ariaLabel: "在新分頁開啟開發者 X / Twitter @Reforbli" }
    ],
    about: {
      eyebrow: "遊戲介紹",
      title: "倖存者類的壓迫感，<br><em>格鬥遊戲式的攻防。</em>",
      intro: "迎戰蜂擁而來的敵人，親自發動攻擊，讀懂敵人的行動並及時防守，在破綻出現時重新奪回主導權。",
      bodyLead: "在 BRAWLZERK 中，生存不只是與敵人拉開距離，等待自動攻擊。玩家要親自選擇輕重攻擊與戰鬥技能，並透過格擋與閃避的時機主導攻防節奏。",
      bodySecond: "在一局遊戲中，戰鬥、升級、被動獎勵與主動技能卡的取得會連續展開。每局的組合都會改變，但親手完成的連段與時機判斷始終是戰鬥核心。",
      quote: "「進攻是生存手段，防守是反擊的開始。」",
      quoteCredit: "BRAWLZERK 戰鬥理念"
    },
    developer: {
      eyebrow: "個人遊戲開發者",
      since: "戰鬥系統原型 · 始於2015年",
      origin: "從2015年到2025年，我一直使用《Warcraft III》編輯器開發等距視角的格鬥遊戲式戰鬥系統。",
      game: "BRAWLZERK 是一款將倖存者類玩法與我多年來開發、並進一步完善的戰鬥系統結合而成的遊戲。與先前的原型不同，本作使用 Unity 進行全新開發。",
      movement: "本作最特別的地方，是移動方式。",
      movementContrast: "一般遊戲需要按下 WASD 鍵或點擊滑鼠才能移動，但本作並非如此。角色會自動移動，玩家只需用滑鼠調整移動方向。",
      reasonsIntro: "這樣設計有兩個原因。",
      skillFrequency: "為了減輕操作疲勞。",
      skillCooldown: "本作中有些技能具有冷卻時間，但大多數技能沒有冷卻時間，因此玩家在整場戰鬥中會非常頻繁地使用技能。",
      clickFatigue: "如果為這樣的遊戲採用點擊移動，那麼每次技能結束後，玩家都必須再次點擊以重新下達移動指令。如此頻繁地重複這項操作，會造成嚴重的操作疲勞。",
      manySkills: "為了讓玩家能夠舒適地使用十種以上的技能。",
      oneHand: "要舒適地使用這麼多技能，就需要用左手操作其中的大部分技能。",
      wasdTradeoff: "如果使用 WASD 移動，左手的多根手指就會被移動操作占用。這樣一來，能夠舒適使用的技能鍵會大幅減少，也很難設計出可以舒適使用大量技能的操作方式。",
      solution: "",
      vision: "我希望能在等距視角下，為大家帶來一款全新的動作遊戲。",
      wishlist: "如果您願意將 BRAWLZERK 加入願望清單，將會給我帶來很大的幫助。",
      thanks: "謝謝。",
      steamLink: "前往Steam頁面 ↗"
    },
    featuresHead: {
      eyebrow: "核心特色",
      title: "核心特色",
      intro: "親自操作的進攻、能夠銜接反擊的主動防守，以及由主動技能卡與被動獎勵組成的單局流派，是 BRAWLZERK 的三大核心。"
    },
    features: [
      {
        label: "親自操作的進攻",
        title: "無須等待，親手出擊",
        summary: "將輕重攻擊與戰鬥技能直接串連，打斷敵群的攻勢。無須等待自動冷卻攻擊，而是依照距離與敵人狀態選擇合適招式。",
        bullets: ["輕重攻擊與地面連段", "突進、擊飛、追擊與範圍技能", "依局勢變化的直接輸入"],
        gifTitle: "進攻與連段影片位置",
        gifGuide: "建議畫面：衝入敵群 → 手動連段 → 範圍終結",
        gifAria: "展示直接攻擊與敵群連段的玩法影片"
      },
      {
        label: "主動防守",
        title: "擋下攻擊的瞬間，反擊就此開始",
        summary: "以普通格擋承受壓力，再透過準確的完美格擋與完美閃避創造短暫反擊機會。確認防守成功後，由玩家親自輸入逆轉技。",
        bullets: ["格擋與完美格擋", "翻滾與完美閃避", "防守成功後親自輸入逆轉技"],
        gifTitle: "格擋、閃避與逆轉技影片位置",
        gifGuide: "建議畫面：完美閃避與反擊 → 逆轉技扭轉攻勢",
        gifAria: "展示格擋、閃避與逆轉技的玩法影片"
      },
      {
        label: "空中與牆邊連段",
        title: "擊飛、重新挑起，再逼向牆邊",
        summary: "從地面連段將敵人擊飛，追加空中攻擊，還能重新挑起倒地敵人，或透過撞牆延長連段。",
        bullets: ["從地面銜接至空中的連段路線", "利用倒地狀態重新追擊", "結合位置與牆面的連段延伸"],
        gifTitle: "空中與牆邊連段影片位置",
        gifGuide: "建議畫面：擊飛 → 空中追擊 → 撞牆 → 終結",
        gifAria: "空中與牆邊連段玩法影片位置"
      },
      {
        label: "主動技能卡與被動獎勵",
        title: "以卡牌改變戰局，以被動完成流派",
        summary: "組合戰鬥中直接使用的主動技能卡與強化整局遊戲的被動獎勵。多目標斬擊、旋風斬、凍結、防禦與機動強化，會讓每一局產生不同打法。",
        bullets: ["從手牌選擇並直接使用主動技能卡", "進攻、控制、防禦與增益選項", "每局都會變化的被動組合"],
        gifTitle: "主動技能卡影片位置",
        gifGuide: "建議畫面：主動技能控制敵群 → 改變戰局",
        gifAria: "展示主動技能卡改變戰局的玩法影片"
      },
      {
        label: "必須做出應對的敵人",
        title: "會進攻、會防守，也會拉開距離",
        summary: "敵人不會站著挨打。他們會突進施壓、後退射擊，防禦型敵人還會觀察攻擊前搖並進行格擋，迫使玩家採取不同應對。",
        bullets: ["近距離施壓與衝鋒", "遠程牽制與距離控制", "觀察並格擋攻擊的防禦型敵人"],
        gifTitle: "敵人應對影片位置",
        gifGuide: "建議畫面：分別應對衝鋒、遠程與格擋型敵人",
        gifAria: "展示敵人進攻、格擋與拉開距離的玩法影片"
      },
      {
        label: "連續進行的一局",
        title: "戰鬥與成長不斷推進的一整局",
        summary: "在選定的競技場中迎戰增援、升級，並取得被動獎勵與主動技能卡。單局流派會在下次挑戰時重置，但金幣與戰鬥紀錄會轉化為永久強化與解鎖內容。",
        bullets: ["在連續流程中推進戰鬥與成長", "隨時間不斷上升的壓力", "透過金幣與紀錄取得永久強化與解鎖"],
        gifTitle: "單局成長影片位置",
        gifGuide: "建議畫面：戰鬥 → 升級選擇 → 卡牌獎勵 → 強化後重返戰鬥",
        gifAria: "連續單局成長玩法影片位置"
      }
    ],
    press: {
      eyebrow: "媒體參考文案",
      title: "可依需要使用的<br><em>媒體參考文案。</em>",
      intro: "提供三種長度，供報導、影片簡介與活動介紹參考。您可以直接引用，也可以依媒體風格自由調整。複製按鈕僅作為快捷功能。",
      cards: [
        { title: "一句話介紹", length: "簡短", text: "BRAWLZERK 是一款將倖存者類玩法與格鬥遊戲式攻防結合的等距視角動作 Roguelite。", button: "複製一句話介紹" },
        { title: "簡短介紹", length: "商店 / 報導", text: "別只顧著逃跑，打回去。BRAWLZERK 是一款將倖存者類玩法與格鬥遊戲式攻防結合的等距視角動作 Roguelite。親自進攻、格擋、閃避並延續連段，再運用主動技能卡與被動獎勵，在每局遊戲中打造全新的戰鬥風格。", button: "複製簡短介紹" },
        { title: "媒體通稿介紹", length: "標準介紹", text: "BRAWLZERK 將倖存者類遊戲中蜂擁而來的敵群，與格鬥遊戲中透過時機爭奪主導權的攻防，融合為一款等距視角動作遊戲。\n\n玩家可以直接串連輕重攻擊與戰鬥技能，並透過格擋、完美格擋、翻滾、完美閃避與逆轉技打斷敵人的攻勢。地面連段能夠延伸為空中連段與撞牆追擊，而面對會衝鋒、射擊或格擋的敵人時，也需要採取不同應對。\n\n在連續進行的一局中，戰鬥、升級、被動獎勵與主動技能卡牌組會同步成長。每局變化的卡牌與被動組合，會在同一套手動戰鬥系統上形成截然不同的玩法。", button: "複製完整文案" }
      ]
    },
    media: {
      eyebrow: "媒體素材",
      title: "遊戲截圖、<br><em>標誌與主視覺圖。</em>",
      intro: "請從<a class='inline-scroll-link' href='#google-drive-download'>下方 Google Drive 連結</a>下載。",
      trailerKicker: "官方玩法預告片",
      trailerTitle: "BRAWLZERK 官方玩法預告片",
      trailerBody: "一段影片即可查看手動戰鬥、主動技能卡與多樣化的敵人行動。",
      trailerMeta: "前往 YOUTUBE 觀看 ↗",
      trailerAria: "在 YouTube 觀看 BRAWLZERK 官方玩法預告片",
      screenshot1Name: "橫掃敵群的戰鬥",
      screenshot2Name: "主動技能爆發",
      screenshot3Name: "逆轉技攻防",
      screenshot4Name: "格擋與反擊",
      screenshot5Name: "狂熱戰鬥",
      screenshot1Alt: "BRAWLZERK 玩法畫面，大範圍攻擊命中敵群",
      screenshot2Alt: "BRAWLZERK 玩法畫面，在敵群中發動強化範圍攻擊",
      screenshot3Alt: "BRAWLZERK 玩法畫面，在昏暗競技場中進行近身攻防",
      screenshot4Alt: "BRAWLZERK 玩法畫面，玩家在密集敵群中進行格擋",
      screenshot5Alt: "BRAWLZERK 玩法畫面，與強化敵人展開狂熱戰鬥",
      guidelinesHeading: "媒體素材使用說明",
      guidelines: [
        "可在主要對象仍清晰可辨的前提下裁切遊戲截圖與主視覺圖。",
        "請維持標誌原始比例與顏色。",
        "若能同時標註遊戲名稱與 Steam 商店頁面連結，我們將不勝感激。",
        "建議署名：BRAWLZERK / Reforbli。"
      ]
    },
    downloads: {
      heading: "下載中心",
      linkLabel: "從 Google Drive 下載媒體資料包 ↗",
      fileDescription: "依素材類型整理了1080p官方預告片、遊戲截圖、無標誌與含標誌主視覺圖、透明背景標誌、Steam 素材與圖示。",
      usageNote: "所提供的檔案可用於 BRAWLZERK 的遊戲介紹與報導，包括文章、評測、活動介紹、影片縮圖、網站、YouTube 與社群媒體，並可在必要範圍內進行編輯。"
    },
    facts: {
      eyebrow: "一覽",
      rows: [
        { label: "遊戲名稱", value: "BRAWLZERK" },
        { label: "開發者", value: "Reforbli" },
        { label: "類型", value: "等距視角砍殺 · 倖存者類 · Roguelite 動作" },
        { label: "平台", value: "Windows PC · Steam" },
        { label: "核心戰鬥系統", value: "輕重攻擊 · 戰鬥技能 · 空中/牆邊連段 · 格擋/完美格擋 · 翻滾/完美閃避 · 逆轉技" },
        { label: "單局成長", value: "升級 · 被動獎勵 · 主動技能卡牌組 · 永久強化與解鎖" },
        {
          label: "官方連結",
          links: [
            { value: "Steam", href: STEAM_URL, external: true, ariaLabel: "在新分頁中開啟 BRAWLZERK Steam 商店頁面" },
            { value: "YouTube", href: "https://youtu.be/ul-CM7RlaXo", external: true, ariaLabel: "在 YouTube 觀看 BRAWLZERK 官方玩法預告片" }
          ]
        },
        { label: "發行商", value: "Reforbli（自主發行）" },
        { label: "預計發售日期", value: "2026年11月10日" },
        { label: "媒體聯絡", value: "reforbli@gmail.com" },
        { label: "預計支援語言", value: "韓文 · 英文 · 日文 · 簡體中文 · 繁體中文 · 德文 · 法文 · 義大利文 · 西班牙文（西班牙） · 俄文 · 葡萄牙文（葡萄牙／巴西）" },
        { label: "遊戲模式", value: "單人遊戲" },
        { label: "遊戲引擎", value: "Unity" }
      ]
    },
    contact: {
      eyebrow: "媒體聯絡",
      title: "歡迎聯絡<br>BRAWLZERK。",
      body: "如需採訪、評測與報導、活動介紹、媒體素材或其他媒體相關資訊，請直接聯絡 Reforbli。",
      emailLabel: "電子郵件",
      steamLabel: "Steam 商店頁面",
      steamValue: "Steam 商店頁面 ↗",
      steamAria: "在新分頁中開啟 BRAWLZERK Steam 商店頁面",
      twitterLabel: "開發者 X / Twitter",
      twitterAria: "在新分頁開啟開發者 X / Twitter @Reforbli",
      releaseLabel: "發售日期",
      releaseValue: "2026年11月10日"
    },
    footer: {
      top: "返回頁首 ↑"
    }
  };

  runtimeCopy["zh-Hans"] = {
    heroLead: "将幸存者类玩法与格斗游戏式攻防相结合的等距视角动作类 Roguelite 游戏。",
    trailerIntro: "从亲自攻击、格挡与闪避的战斗，到主动技能卡和多样化的敌人行动，都可在官方玩法预告片中查看。",
    mediaIntro: "请从<a class='inline-scroll-link' href='#google-drive-download'>下方 Google Drive 链接</a>下载。",
    featureVideoFallback: "您的浏览器不支持 HTML5 视频。",
    features: [
      {
        index: 0,
        label: "连招与完美格挡",
        title: "衔接招式，压制敌群",
        summary: "反制蜂拥而来的敌人，以连招将其逼至墙边。连续成功三次完美格挡，即可使战场上的所有敌人陷入眩晕。",
        video: "BRAWLZERK_About_01.webm",
        poster: "BRAWLZERK_Screenshot_01b.png",
        aria: "展示直接攻击和敌群连招的玩法视频"
      },
      {
        index: 1,
        label: "格挡 · 完美闪避 · 逆转技",
        title: "防守是反击的开始",
        summary: "格挡敌人的攻击，以完美闪避切入破绽，再用逆转技扭转攻势。",
        video: "BRAWLZERK_About_02_New.webm",
        poster: "BRAWLZERK_Screenshot_06.png",
        aria: "展示格挡、闪避和逆转技的玩法视频"
      },
      {
        index: 3,
        label: "主动技能卡",
        title: "改变战局走向",
        summary: "除了被动奖励，BRAWLZERK 还可获取战斗中直接使用的主动技能卡。一口气斩击多名敌人、发动旋风斩或将敌人冻结在原地，以不同方式改变战局。",
        video: "BRAWLZERK_About_04_New.webm",
        poster: "BRAWLZERK_Screenshot_02.png",
        aria: "展示主动技能卡改变战局的玩法视频"
      },
      {
        index: 4,
        label: "必须做出应对的敌人",
        title: "观察行动，立即反击",
        summary: "敌人不会站着挨打。有的会突进施压，有的会拉开距离射箭，还有的会格挡你的攻击。观察他们的行动，把握时机，再进行反击。",
        video: "BRAWLZERK_About_03_New.webm",
        poster: "BRAWLZERK_Screenshot_12.png",
        aria: "展示敌人进攻、格挡和拉开距离的玩法视频"
      }
    ],
    carousel: "BRAWLZERK 游戏截图",
    screenshotAlt: "BRAWLZERK 游戏截图",
    carouselRole: "轮播图",
    picker: "选择游戏截图",
    previous: "上一张游戏截图",
    next: "下一张游戏截图",
    view: "查看游戏截图",
    trailerTitle: "BRAWLZERK 官方玩法预告片",
    brandAssets: {
      eyebrow: "品牌素材预览",
      title: "标志、两款主视觉图与<br><em>四款商店图。</em>",
      intro: "预览标志、无标志与含标志主视觉图，以及主要 Steam 商店图。请从<a class='inline-scroll-link' href='#google-drive-download'>上方 Google Drive 链接</a>下载。",
      carousel: "BRAWLZERK 标志、主视觉图与 Steam 商店图预览",
      picker: "选择品牌素材",
      previous: "上一项品牌素材",
      next: "下一项品牌素材",
      original: "打开原始 PNG ↗",
      items: [
        ["主视觉图（无标志）", "BRAWLZERK 无标志主视觉图，主角被敌人包围"],
        ["主视觉图（含标志）", "含 BRAWLZERK 官方标志的主视觉图，可用于视频缩略图和社交媒体内容"],
        ["主商店图", "BRAWLZERK Steam 主商店图"],
        ["横幅商店图", "BRAWLZERK Steam 横幅商店图"],
        ["小型商店图", "BRAWLZERK Steam 小型商店图"],
        ["竖版商店图", "BRAWLZERK Steam 竖版商店图"],
        ["透明背景标志", "透明背景的 BRAWLZERK 标志"]
      ]
    }
  };

  runtimeCopy["zh-Hant"] = {
    heroLead: "將倖存者類玩法與格鬥遊戲式攻防結合的等距視角動作 Roguelite。",
    trailerIntro: "從親自攻擊、格擋與閃避的戰鬥，到主動技能卡與多樣化的敵人行動，都可在官方玩法預告片中查看。",
    mediaIntro: "請從<a class='inline-scroll-link' href='#google-drive-download'>下方 Google Drive 連結</a>下載。",
    featureVideoFallback: "您的瀏覽器不支援 HTML5 影片。",
    features: [
      {
        index: 0,
        label: "連段與完美格擋",
        title: "串連招式，壓制敵群",
        summary: "反制蜂擁而來的敵人，以連段將其逼至牆邊。連續成功三次完美格擋，即可使戰場上的所有敵人陷入暈眩。",
        video: "BRAWLZERK_About_01.webm",
        poster: "BRAWLZERK_Screenshot_01b.png",
        aria: "展示直接攻擊與敵群連段的玩法影片"
      },
      {
        index: 1,
        label: "格擋 · 完美閃避 · 逆轉技",
        title: "防守是反擊的開始",
        summary: "格擋敵人的攻擊，以完美閃避切入破綻，再用逆轉技扭轉攻勢。",
        video: "BRAWLZERK_About_02_New.webm",
        poster: "BRAWLZERK_Screenshot_06.png",
        aria: "展示格擋、閃避與逆轉技的玩法影片"
      },
      {
        index: 3,
        label: "主動技能卡",
        title: "改變戰局走向",
        summary: "除了被動獎勵，BRAWLZERK 還可取得戰鬥中直接使用的主動技能卡。一口氣斬擊多名敵人、發動旋風斬或將敵人凍結在原地，以不同方式改變戰局。",
        video: "BRAWLZERK_About_04_New.webm",
        poster: "BRAWLZERK_Screenshot_02.png",
        aria: "展示主動技能卡改變戰局的玩法影片"
      },
      {
        index: 4,
        label: "必須做出應對的敵人",
        title: "觀察行動，立即反擊",
        summary: "敵人不會站著挨打。有的會突進施壓，有的會拉開距離射箭，還有的會格擋你的攻擊。觀察他們的行動，把握時機，再進行反擊。",
        video: "BRAWLZERK_About_03_New.webm",
        poster: "BRAWLZERK_Screenshot_12.png",
        aria: "展示敵人進攻、格擋與拉開距離的玩法影片"
      }
    ],
    carousel: "BRAWLZERK 遊戲截圖",
    screenshotAlt: "BRAWLZERK 遊戲截圖",
    carouselRole: "輪播圖",
    picker: "選擇遊戲截圖",
    previous: "上一張遊戲截圖",
    next: "下一張遊戲截圖",
    view: "查看遊戲截圖",
    trailerTitle: "BRAWLZERK 官方玩法預告片",
    brandAssets: {
      eyebrow: "品牌素材預覽",
      title: "標誌、兩款主視覺圖與<br><em>四款商店圖。</em>",
      intro: "預覽標誌、無標誌與含標誌主視覺圖，以及主要 Steam 商店圖。請從<a class='inline-scroll-link' href='#google-drive-download'>上方 Google Drive 連結</a>下載。",
      carousel: "BRAWLZERK 標誌、主視覺圖與 Steam 商店圖預覽",
      picker: "選擇品牌素材",
      previous: "上一項品牌素材",
      next: "下一項品牌素材",
      original: "開啟原始 PNG ↗",
      items: [
        ["主視覺圖（無標誌）", "BRAWLZERK 無標誌主視覺圖，主角被敵人包圍"],
        ["主視覺圖（含標誌）", "含 BRAWLZERK 官方標誌的主視覺圖，可用於影片縮圖與社群媒體內容"],
        ["主要商店圖", "BRAWLZERK Steam 主要商店圖"],
        ["橫幅商店圖", "BRAWLZERK Steam 橫幅商店圖"],
        ["小型商店圖", "BRAWLZERK Steam 小型商店圖"],
        ["直式商店圖", "BRAWLZERK Steam 直式商店圖"],
        ["透明背景標誌", "透明背景的 BRAWLZERK 標誌"]
      ]
    }
  };
})();
