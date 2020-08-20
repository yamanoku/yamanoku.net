window.__NUXT__=(function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B){return {staticAssetsBase:"\u002F_nuxt\u002Fstatic\u002F1597903955",layout:"default",error:null,state:{rhythm:{toggleRhythm:false},i18n:{routeParams:{}}},serverRendered:true,routePath:"\u002Fen\u002Fvue-a11y",config:{},__i18n:{langs:{en:{name:"Name - Okuto Oyama",nickname:"Nickname - Oyama Michinoku, yamanoku",job:{"1":"FrontEnd Designer","2":"Accessibility Advocator","3":"UI Designer","4":"Writer","5":"Document Translater","6":"Internet Watcher"},info:{"2008":{before:"Get into Iwate University of Art and Culture Course.",now:"Now - Art and Culture Course in Faculty of Humanities and Sociology"},"2014":"Get married.","2016":"Daughter is born",caption:"I'm active on the Internet under the name of Oyama-Michinoku, yamanoku. My birthday is October 30, 1989. I was born in Noshiro City, Akita Prefecture. I'm male. Currently, I lives in Nagareyama City, Chiba Prefecture. One daughter's father and three cat owners.",birth:"Born in Noshiro, Akita, Japan",sex:"Sex - Man",bfa:"Bachelor of Art and Culture Course.（BFA）",bfa01:"Fine Arts",bfa02:"Engineering and Design",live:"Live in Nagareyama, Chiba, Japan",photo:{alt:"Photo Okuto Oyama",caption:"Author's near shadow"}},career:{experiencedSkills:"Experienced skills",lapras:b,youtrust:o,curriculumVitae:"Curriculum Vitae",desc01:"I started my career as a Web designer, not as an engineer.",desc02:"I changed my job as an engineer to concentrate on programming because I thought that I could not understand the basics of what I could and could not do on the browser and could not make expressions and feature proposals that would be pleasing to users, rather than the influence of my previous career when I was in charge of all direction-design programming.",desc03:"I began my career as a markup engineer, taking basic coding and gradually moving into the frontend engineer space, including jQuery, Ajax communication, task runners, CSS design, and the use of frameworks.",desc04:"When I aim to become an engineer, there are some things that I want to achieve that I create “A product that has been used for a long time with a strong design”. We believe that we can achieve this not only through engineering, but also through UI design, user experience, and consideration for wider use. It's a difficult task, but I want to do it one by one so that everyone can enjoy better things."},product:{wafb:{title:"Web Accessibility for Beginners.",circleDetail:"Circle details | Scarlet dog",boothLink:"Sales page on Booth",noteLink:"Sales page on note"},slackprimoji:c,yamanokuCli:d,reading:e,vuePortfolio:f,vueA11yPage:{title:g,link:"Article about accessibility with Vue.js",info:{listitem01:"Published.",listitem02:"Posted on {awesomeA11yVue}",listitem03:"Added english page"}},crowding:"Crowding - Coding works",birthdayCount:h,glitch:i,browserCrash:j,sushi:k,qiitaCode:l,designFigma:m,updateInfo:"Update Information",releaseInfo:"Release Information",description:{wafb:"Presented in the 5th technical book fest. I would like to ask not only engineers but also all people involved with the web to see what kind of measures are available for web accessibility, such as machine-readable web pages, human-readable web pages, and WAI-ARIA web pages.",reading:"I came up with the idea of accumulating and visualizing information about what would happen if I collected and summarized the news that I always watch. It incorporates PWA technology so that it can also be viewed as an offline application.",vuePortfolio:"Portfolio template made by Vue.js. This is the first SPA created from vue cli. I used the Vue 1.0 versions at first, but now I can upgrade it to the Vue 2.0 versions.",vueA11yPage:"Created with the motivation to make people aware of accessibility in Vue.js development. Initially, it was put together as a presentation for a conference and later as an advent calendar article, but we are updating it on time to make it a more practical reference and functional document.",yamanokuCli:"This is a simple self-introduction tool that can be checked with the CLI. Fork is from sindresorhus.",slackprimoji:"Convert Pri-para character lines into Slack reaction emoji. The original story is from slack-reaction-decomoji produced by oti.",qiitaCode:"A Chrome extension that restores Qiita's code style to the previous one. Not published to the store. Therefore, add it in developer mode.",birthdayCount:"Counting down to yamanoku's birthday. Amazon's wish list will be released on that day. The next day, it will be reset and counted down again. This product uses TypeScript.",glitch:"A glitch expression tool using JavaScript. To adjust \u003Cinput type='range'\u003E. You can upload and change the image. Glitched images can also be saved.",browserCrash:"Represents on canvas the situation that is likely to happen when the browser becomes heavy on Windows OS. The browser is drawn indefinitely by moving the cursor. There is no illegality in this JavaScript.",sushi:"Rotating sushi using CSS3 animation."}},sns:{tumblr:{tumblr:n,tumblog:"Blog",artworks:"art works"},twitter:a,facebook:p,github:q,qiita:r,mstdn:s,instagram:t,hatena:u,steam:v},home:{title:"Home"},aboutPage:{title:"About yamanoku net",description:"yamanoku net is a portal site of Okuto Oyama called yamanoku.",heading:{toc:"Table of Contents",implementation:"Explaining site implementation",design:"Explaining site design"},subHeading:{markup:"Markup",components:"Component oriented design",pwa:w,i18n:"Internationalization",overdesign:"Don't overdesign.",fontSize:"Font size",contrast:"Color contrast",maxWidth:"About the greatest amount of content",verticalRhythm:"Vertical rhythm"},markup:{desc01:"Semantic markup implementation to realize information design of human-readable (Human can understand) and machine-readable (Be understood by the machine).",desc02:"It also implements content completion using WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications).",caption:"Assist users as they move from article to article by tying aria-labelledby to article elements."},components:{desc01:"You need to format the API you get for display, but managing it as a single component simplifies source code, allows multiple uses, and simplifies information design.",desc02:"For example, the slide list uses the following components to render:"},pwa:{desc01:"When browsing in Google Chrome, you can use desktop PWA from your PC or PWA from your mobile device.",desc02:"You can launch it as a native app without going through a browser, use the cache to get a fast page experience, or download it once and view it offline."},i18n:{desc01:"Since we are developing on Nuxt.js, we have introduced a tool called nuxt-18n. In addition to internationalization, rendering can also be done for specific languages.",desc02:"The following is a conditional expression that is displayed when it is not in Japanese."},designDescription:"Inclusive design designed for easy viewing by all users.",overdesign:{desc01:"Too much decoration can prevent you from getting the information you want. It is designed with the default style of the browser, that is, the standard image in mind.",desc02:"It's also the semantic markup of the design makes it possible to arrive at the information without feeling out of place, even with the default style in browser."},fontSize:{desc01:"The basic setting is 16 px, and the size ratio can be maintained even if the page is enlarged by rem."},contrast:{desc01:"All colors are set to have a contrast ratio of at least 4.5:1 with the background, but they are not pure black and white, but instead are balanced with fewer shades of gray.",desc02:"It is specified using the following custom properties (CSS Variables) for common use:",desc03:"It also supports dark mode (Gentle dark tones of the eyes), depending on the OS settings."},maxWidth:{desc01:"The maximum width of the main content is set to 80ch. ch is called a chain and is a variable unit depending on the size of the character.",desc02:"The advantage of this setting is that it can support users with dyslexia who cannot read long sentences, and it is less likely that some text will become unreadable as the character size increases."},verticalRhythm:{desc01:"We use vertical rhythm that emphasizes consistency throughout the page. The margins and margins are set relative to the line spacing of 24px.",desc02:"Cognitively impaired users can read text more easily if the words are evenly spaced."}},vueA11yPage:{title:g,description:"This post is from day 21 of the Web Accessibility Advent Calendar 2019. This article is about web accessibility support in Vue.js development.",heading:{bio:"Profile",book:"Books",webA11y:"What is accessibility?",vueA11y:"Vue.js & Web accessibility",a11yNote:"Points to note about the implementation in Vue.js",conclusion:"Conclusion"},subHeading:{book:"Web accessibility for beginners",webA11y:{"1":"Definition of accessibility","2":"Does accessibility support mean accommodating people with disabilities?","3":"Addressing accessibility for everyone to participate"},vueA11y:"There is no documentation of accessibility",a11yNote:{"1":"Don't implement anything in {div}","2":"Make it possible to operate with a keyboard","3":"Development of SPA","4":"Configuring Nuxt.js","5":"Test & Check",test:{"1":x,"2":y,"3":z,"4":"User test"}},conclusion:"Leverage the web and work on accessibility through Vue.js",info:"Information about this document"},titleSection:{desc01:"This article is Day 21 of the {link01}.",desc02:"This is about web accessibility support in Vue.js development.",link01:"Web Accessibility Advent Calendar 2019"},bio:{desc01:"My name is Okuto Oyama. On the Internet, I am active under the names of Oyama Michinoku and yamanoku.",desc02:"I started out as a web designer for a web production company and worked as a markup\u002Ffront-end engineer at GEEK Inc. before joining CrowdWorks Inc. in October 2019.",desc03:"My role is as a UX engineer. Individuals are also involved in accessibility advocate.",photoAlt:"Okuto Oyama"},book:{desc01:"I published a technical coterie magazine called “Web Accessibility for Beginners” at a 技術書典 (technical book festival), which I wanted to introduce as an introduction to web accessibility for those who are new to it.",desc02:"It is now selling in PDF file at BOOTH and Note.",desc03:"We also accept corrections, improvements, and suggestions in our feedback repository, Issue, on GitHub."},webA11y:{desc01:"First, Accessibility is defined as “admitting approach\u002Freceptiveness”; web accessibility refers to making information and content on the web accessible to all people.",desc02:"Making it accessible to all people means making it easy to browse for people who are unfamiliar with the device, avoiding difficult phrases and making it easy to understand, adjusting the contrast to make it easier to browse, and taking into account the use of assistive technologies such as screen readers that can read aloud.",quote01:"There are over one billion people with disabilities or about 15-20% of the population. The UN Convention on the Rights of Persons with Disabilities defines that access to information, including the Web, as a human right. Most countries around the world have ratified this UN convention, and several have adopted binding policies too. Yet regardless of any laws and regulations, implementing the accessibility standards is essential for people with disabilities, and useful for all.",link01:{text:"Video Introduction to Web Accessibility and W3C Standards | Web Accessibility Initiative (WAI) | W3C",link:"https:\u002F\u002Fwww.w3.org\u002FWAI\u002Fvideos\u002Fstandards-and-benefits\u002F"},desc03:"It's a common misconception that being accessible is perceived as being disabled-friendly.",desc04:"Indeed, accessibility support is also intended to enable people with disabilities to use it, but the real purpose is to “make available to everyone” so I think that the only thing that stands out is how to deal with disabled people, which leads to misunderstanding.",desc05:"Google I\u002FO now has a live captioning feature for real-time captioning in voice recognition. Whether it's for the hearing impaired, watching videos on mute, or transcribing sentences to help you understand what's going on, we've created something that anyone can use in any situation.",imgAlt01:"Introductory thumbnail of Live Caption feature",link02:{text:"Live transcription and captioning in Android are a boon to the hearing-impaired",link:"https:\u002F\u002Ftechcrunch.com\u002F2019\u002F05\u002F07\u002Flive-transcription-and-captioning-in-android-are-a-boon-to-the-hearing-impaired\u002F"},desc06:"Screen readers are not only for the visually impaired, but also to help people who have difficulty reading long sentences, such as dyslexia, and to make it easier to notice mistakes by having them read aloud rather than just visually checking sentences.",desc07:"Accessibility is often confused with “usability”, which emphasizes ease of use, but its purpose is to consider whether or not it can be used before it is easy to use. And being able to use it also means being able to participate.",desc08:"Other countries have laws to ensure accessibility, but this is because they consider accessibility itself to be a human right rather than a means to do so."},vueA11y:{desc01:"Now that you know something about accessibility, I'd like to talk about the main topic of Vue.js and web accessibility.",desc02:"I believe that one of the factors that made Vue.js so popular in Japan was the fact that the official documentation was translated into Japanese. For me, the Japanese translation of the documents made it very easy to work on them.",desc03:"By the way, do you know how much accessibility is mentioned in the official Vue.js documentation?",desc04:"In fact, no documentation mentions accessibility, only a slight mention of it in some of the documentation.",desc05:"React and Angular has an accessibility section in their official documentation that summarizes points to keep in mind when developing them.",listitem01:{text:"Accessibility – React",link:"https:\u002F\u002Freactjs.org\u002Fdocs\u002Faccessibility.html"},desc06:"I feel it's okay to have an accessibility item, as well as React and Angular. When I looked into the Vue.js Issue, Callum Macra seems to have been working on the document, but the Pull Request has not made any progress.",desc07:"It's still a work in progress, but the document, which is currently being edited, is very well put together for understanding web accessibility. I hope you'll take a look at it.",desc08:"Accessibility article in the official documentation have yet to be created, but instead an accessibility community for Vue.js has been created.",imgAlt01:"Screenshot of the Vue a11y site",desc09:"The community worked on some accessibility libraries for Vue.js, and I'm hoping to contribute in some way."},a11yNote:{desc01:"Next, we'll discuss what you should keep in mind when implementing Vue.js when considering web accessibility.",desc02:"The basic idea is to {strong01} to create web accessibility. This isn't that the {div} tag (or the {span} tag) is bad in and of itself, it's that you should use tags as needed outside of the look of that component.",strong01:"try to implement semantics",quote01:"For all user interface components (including but not limited to: form elements, links, and components generated by scripts), the name and role can be programmatically determined; states, properties, and values that can be set by the user can be programmatically set;",quote02:{text:"Understanding Success Criterion 4.1.2  | Understanding WCAG 2.0",link:"https:\u002F\u002Fwww.w3.org\u002FTR\u002FUNDERSTANDING-WCAG20\u002Fensure-compat-rsv.html"},desc03:"For example, if you implement a button from the {div} tag, you need to consider a lot of things.",desc04:"If you semantically implement this, you only need one {button} tag. The lack of semantics can diminish the inherent functionality of the system.",desc05:"People who use screen readers use the keyboard to access information. So you need to be aware that you can access all the information on the keyboard.",desc06:"Even if you don't use a screen reader, if you are used to using a computer, you may press the Enter key when submitting a form, press the ESC key when closing a dialog, or use the keyboard instead of the mouse.",desc07:"Along with the consideration of keyboard operations, you should also be aware of the outlines for focus. This is because removing the outline would make it difficult to grasp the current position.",desc08:"In modern front-end development, we're seeing more and more implementations of SPA ({abbr01}), which treats itself as dynamic content using a single HTML and JavaScript, so it's sometimes impossible to tell what and how things have changed in the page.",abbr01:A,desc09:"Page changes and status updates require an implementation using the {ariaLive} attribute. However, since you need to understand how to handle attribute values, you may want to consume the {vueAnnouncer} library to start with, which allows you to easily set up the reading of page moves in a router or state changes in a component.",desc10:"It may be a blind spot, but the language setting is required for {htmlAttrs} in {nuxtConfigJs}.",desc11:"If nothing is set, the language specification is {en}, i.e. English. If this is the case, even if the appearance of the application or site is Japanese, it will be an “English” application or the site in the browser's judgment.",desc12:"If not set, some screen readers will not read the non-English parts. {small01}. Even if you're not internationalized, you have to be careful about your language settings.",small01:"(This was confirmed with Android's Talkback feature)",desc13:"There is a library called {axeCore} developed by a company called deque systems that does accessibility checks. This is what is also used in Chrome's {LightHouse} accessibility item check.",imgAlt01:"An image of vue-axe in action, with an alert result appearing on the console of Chrome.",desc14:"This can be embedded to allow accessibility checks to be run on the console. The following are the settings.",desc15:"Some of you may be using it in your own component library or design system. It can't be checked by itself, but there is an add-on {storybookAddonA11y} that allows you to pass accessibility checks on components and stories.",imgAlt02:"Screen shot of storybook-addon-a11y",desc16:"You can also embed it in CI\u002FCD to find errors at build time. eslint is used as a static validation tool for JavaScript, and some plugins can check accessibility.",desc17:"Examples of checks include whether the {alt} attribute of {img} has a value, whether the form element has a label ({label}), and whether the emoji can be implemented in an accessible way.",desc18:"However, Lint checks the code conventions, so don't rely only on error detection.",desc19:"We've talked about mechanical testing, but studies have shown that automated checks and tests can only confirm 30% of all accessibility issues.",desc20:"Therefore, it also needs to be checked through user tests. We'll be doing some hands-on look and feel, such as browser checks, screen reader tests, and keyboard tests to make sure things are okay.",desc21:"The WCAG ({abbr02}) can be used as a reference to determine what kind of testing should be done. These are the guidelines for making web content accessible, published as W3C recommendations, and provide a technology-independent way to verify how to make it accessible.。",desc22:"However, it is also difficult to refer to the WCAG specification every time, so it would be good to be able to create your own guidelines after referring to the necessary elements."},conclusion:{desc01:"On March 12, 1989, Tim Berners-Lee of the European Organization for Nuclear Research (CERN) wrote “Information Management: A Proposal” to describe a more advanced information management system. This led to the invention of the WWW (World Wide Web).",imgAlt01:"Photo by Tim Berners-Lee",desc02:"Tim Berners-Lee writes, “The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.” he preached.",desc03:"And “Whatever the device you use for getting your information out, it should be the same information.” He also answered in an interview. This is exactly how the Web is the solution to accessibility.",desc04:"As proof, if you're reading this article, you can access this information anywhere, anytime if you can use the Internet. You may want to realize that you can do accessible things just by working with the Web.",desc05:"And now, 30 years later, {link01}",link01:"the number of Internet users in the world's population has crossed the 50% halfway mark!",desc06:"As this number grows, the disparity of inaccessibility to the Internet will become greater and greater.",quote01:"The fight for the web is one of the most important causes of our time. Today, half of the world is online. It is more urgent than ever to ensure the other half are not left behind offline, and that everyone contributes to a web that drives equality, opportunity, and creativity.",quote02:"(Omission)",quote03:"The web is for everyone and collectively we hold the power to change it. It won’t be easy. But if we dream a little and work a lot, we can get the web we want.",quote04:{text:"30 years on, what’s next #ForTheWeb?",link:"https:\u002F\u002Fwebfoundation.org\u002F2019\u002F03\u002Fweb-birthday-30\u002F"},desc07:"It's not that you can't come up with something accessible without a specific framework. However, I feel that Vue.js is a friendly and open-door JavaScript framework.",desc08:"Making things accessible is not a matter of “done for,” or “0 or 100,” but rather a matter of continuous review and trial-and-error while creating a product, so We hope to proceed slowly and steadily.",desc09:"Through this article, we hope that developers, designers, and others involved with Vue.js will become more interested in accessibility and empowered to work on accessibility in the future.",desc10:"We still have a lot of work to do, and it's a difficult field to advance, but I hope that this circle will expand little by little. Because “Accessibility” is acceptable to any person."},feedback:{github:{linkTitle:"Request for correction of the article “About accessibility with Vue.js”"}}},archivePage:{title:"Archive",desc01:"This page is a writing collection of past articles and logs of Okuto Oyama called yamanoku.",desc02:"We fixed the broken links during the document migration, but the content itself has not been updated, so please be careful when you refer to it.",slug:{feedback:"As this is an archived article, we do not accept requests for content updates, but please contact us if you find any typographical errors or omissions."},backText:"Back to Archive List",feedback:{github:{linkTitle:"Request for correction of archive document"}}},privacyPage:{title:"Privacy Policy",description:"yamanoku net privacy policy page. Provides information about access analysis tools.",analytics:{heading:"About Access Analysis Tools",desc01:"yamanoku net uses Google's access analysis tool “Google Analytics”.",desc02:"This Google Analytics server uses cookies to collect access information. This access information is collected anonymously and is not personally identifiable.",desc03:"Google Analytics cookies on this site will be retained for 26 months. This feature can be rejected by disabling cookies, so please check your browser settings.",link01:{title:"Google Analytics Terms of Service",url:"https:\u002F\u002Fwww.google.com\u002Fanalytics\u002Fterms\u002Fus.html"},link02:{title:"How Google uses information from sites or apps that use our services",url:"https:\u002F\u002Fpolicies.google.com\u002Ftechnologies\u002Fpartner-sites?hl=en"}}},heading:{basic:"Basic Info",job:"Job Info",career:"Career Info",productList:"Product List",todoList:"TODO List",techStack:"Technology Stack",relatedList:"Related Links List",presentations:{title:"Presentations",stage:"Stage",write:"Writing"},sns:"Social Service",contact:"Contact"},error:{"500":{text01:"A server error has occurred. Please wait for a while and try again.",text02:"If it is still not recovered, please contact us via the email address."}},prefixAlt:{photo:"Photo: ",thumbnail:"Thumbnail: ",screenshot:"ScreenShot: "},multilingual:"Multilingual Page",details:{summary:"Details",summary_feedback:"Correction requests for articles"},feedback:{github:{link:"Issue details: ",title:"Creating a GitHub Issue"},twitter:{title:"Tweet for author"}},backTop:"Return to the top page",onlyJPText:"Sorry, Japanese text only"},ja:{name:"名前 - 大山奥人",nickname:"ニックネーム - おおやまみちのく, yamanoku",job:{"1":"フロントエンドデザイナー","2":"アクセシビリティ啓蒙家","3":"UIデザイナー","4":"ライター","5":"ドキュメント翻訳","6":"インターネットウォッチャー"},info:{"2008":{before:"岩手大学教育学部芸術文化課程入学",now:"現 人文社会学部芸術文化専修プログラム"},"2014":" 結婚","2016":" 娘が産まれる",caption:"ネット上では、おおやまみちのく、yamanokuと名乗って活動しています。誕生日は1989年10月30日。秋田県能代市生まれ。性別は男性。現在千葉県流山市在住。一児（娘）の父と3匹の猫の飼い主。",birth:" 秋田県能代市生まれ",sex:"性別 - 男性",bfa:"学士（美術）",bfa01:"芸術",bfa02:"デザインエンジニアリング",live:"千葉県流山市在住",photo:{alt:"写真 大山奥人",caption:"著者近影"}},career:{experiencedSkills:"経験した技術",lapras:b,youtrust:o,curriculumVitae:"職務経歴書",desc01:"自分のキャリアのスタートはWebデザイナーとしてで、エンジニアから始まったわけではありません。",desc02:"これまでのキャリアの中でディレクション・デザイン・プログラミングをすべて担当する業務に就いた影響より、ブラウザ上のできること・できないことの根幹の理解をせず、ユーザにとって喜ばれる表現や機能提案は出来ないのだと思い、プログラミングに専任するためエンジニアとして転職しました。",desc03:"最初はマークアップエンジニアとして業務を通じ基礎的なコーディングを取得し、jQuery、Ajax通信、タスクランナー、CSS設計、フレームワークの使用など徐々にフロントエンドエンジニアという領域にも踏み入れていきました。",desc04:"私がエンジニアを目指すにあたり実現していきたいことの中に「強固な設計で長く使われてるプロダクト」を作っていくことがあります。それはエンジニアリングだけでは達成できることではなくUIデザインやユーザの体験、幅広い層に使ってもらうための考慮なども必要となると考えています。難易度が高いことではありますがより良きものを皆が享受できるよう1つずつ課題をこなしていきたいと思っています。"},product:{wafb:{title:"これからはじめるWebアクセシビリティ",circleDetail:"サークル詳細 | こんのいぬ",boothLink:"Booth 販売ページ",noteLink:"note 販売ページ"},slackprimoji:c,yamanokuCli:d,reading:e,vuePortfolio:f,vueA11yPage:{title:B,link:"「Vue.jsから考えるアクセシビリティについて」記事ページ",info:{listitem01:"公開",listitem02:"{awesomeA11yVue}に掲載",listitem03:"英訳ページ追加"}},crowding:"Crowding - コーディング小作品",birthdayCount:h,glitch:i,browserCrash:j,sushi:k,qiitaCode:l,designFigma:m,updateInfo:"更新情報",releaseInfo:"リリース情報",description:{wafb:"技術書典5にて発表。Webアクセシビリティはどういった対応があるのか、マシンリーダブルとヒューマンリーダブル、WAI-ARIAについて、求められるアクセシビリティを意識したWebページなど、エンジニアだけでなくWebに関わるすべての人に見てもらいたい一冊です。（アクセシビリティとは、近づきやすさやアクセスのしやすさのこと）",reading:"いつも自分が見ているニュースを集めてまとめてみたらどうなるだろうか、情報の蓄積・見える化というものを考え作りました。オフラインアプリケーションとしても閲覧できるようPWA技術を取り入れています。",vuePortfolio:"Vue.js製のポートフォリオテンプレートです。vue-cliから作成したSPA処女作です。はじめはVue1.0系で作ってましたが、Vue2.0系にバージョンアップ対応しています。",vueA11yPage:"Vue.js開発においてアクセシビリティを意識してもらうためのモチベーションで作成しました。当初はとあるカンファレンスのための発表記事としてまとめて、その後アドベントカレンダーの記事として発表しましたが、より実践的に参考・機能するドキュメントとなるよう適時更新しています。",yamanokuCli:"CLIで確認できる簡易自己紹介ツールです。 fork元は sindresorhus氏より。",slackprimoji:"プリパラキャラのセリフをSlackのリアクション用絵文字に変換。元ネタはoti氏制作の slack-reaction-decomojiより。",qiitaCode:"Qiitaのcodeスタイルを以前のものに戻すChrome拡張機能。ストアに公開していません。そのため、デベロッパーモードにて追加して使用してください。",birthdayCount:"yamanokuの誕生日までをカウントダウンしています。当日になったらAmazonの欲しい物リストが公開されます。翌日にはリセットされてふたたびカウントダウンされます。TypeScriptを使用しています。",glitch:"JavaScriptによるグリッチ表現ツールです。\u003Cinput type='range'\u003Eで調整できます。アップロードして画像を変更できます。グリッチした画像を保存も可能です。",browserCrash:"WindowsOSでブラウザが重くなったときにおこりそうな状況をcanvas上で表現。カーソルを動かすことによりブラウザが無限に描画されます。 このJavaScriptには違法性はまったくありません。",sushi:"CSS3 animationを使用して寿司を回転させてみました。"}},sns:{tumblr:{tumblr:n,tumblog:"ブログ",artworks:"アートワーク"},twitter:a,facebook:p,github:q,qiita:r,mstdn:s,instagram:t,hatena:u,steam:v},home:{title:"ホーム"},aboutPage:{title:"yamanoku netについて",description:"yamanoku netは、yamanokuこと大山奥人のポータルサイトです。",heading:{toc:"目次",implementation:"ページ実装の解説",design:"ページデザインの解説"},subHeading:{markup:"マークアップ",components:"コンポーネント指向設計",pwa:w,i18n:"国際化対応",overdesign:"オーバーデザインしすぎない",fontSize:"文字サイズ",contrast:"カラーコントラスト",maxWidth:"最大幅について",verticalRhythm:"バーティカルリズム"},markup:{desc01:"ヒューマンリーダブル（人が理解できる）とマシンリーダブル（機械が理解できる）となる情報設計を実現するためにセマンティクスなマークアップの実装しています。",desc02:"また、WAI-ARIA（Web Accessibility Initiative - Accessible Rich Internet Applications）を使用して、コンテンツの補完をするための実装も行っています。",caption:"aria-labelledbyとarticle要素を紐付けることで記事間を移動するときにユーザを支援します。"},components:{desc01:"表示のために得るAPIを整形する必要がありますが、1つのコンポーネントで管理することで、ソースコードの簡略化・複数での使い回しや情報設計の効率化を図ることができます。",desc02:"たとえばスライド一覧のリストでは以下コンポーネントを使ってレンダリングしています。"},pwa:{desc01:"Google Chromeで閲覧している場合、PCからはデスクトップPWA、モバイル端末からはPWAとして利用することができます。",desc02:"ブラウザを通さずにネイティブアプリとして起動できたり、キャッシュを活用した早いページ体験、1度ダウンロードするとオフラインで閲覧することもできます。"},i18n:{desc01:"Nuxt.jsで開発しているのでnuxt-18nというツールを導入しています。国際化対応ほか、特定の言語のみに表示する場合などのレンダリング処理も可能となっています。",desc02:"以下は日本語ではない場合に表示される条件式です。"},designDescription:"あらゆる層の方が見やすいようにインクルーシブデザインを取り入れています。",overdesign:{desc01:"過剰な装飾をしすぎることは目的の情報にたどり着く阻害に成り得ます。ブラウザのデフォルトスタイル、つまり標準の姿を意識したデザインにしています。",desc02:"また、セマンティクスなマークアップで設計していることで、ブラウザ標準のスタイルのままでも違和感なく情報にたどり着けるようになっています。"},fontSize:{desc01:"基本16pxになるように設定しており、ページを拡大してもサイズ比を維持したremで指定しています。"},contrast:{desc01:"使用しているカラーはいずれも、背景とのコントラスト比が最低でも4.5:1となるように設定されていますが、純粋な白黒ではなく、濃淡を抑えてバランスをとったカラーとなっています。",desc02:"共通で使用できるよう、以下カスタム・プロパティ（CSS変数）を使用して指定しています。",desc03:"また、OSの設定によりますが、ダークモード（目に優しい暗い色調）にも対応しています。"},maxWidth:{desc01:"メインコンテンツの最大幅は80chに設定しています。chはチェーンと呼ばれ、文字のサイズによって可変する単位です。",desc02:"この設定にすることのメリットとして、長文が読めない読字障害の利用者のサポートができたり、文字サイズが大きくなるに従ってテキストの一部が欠けて読めなくなるような事態も発生しにくくなります。"},verticalRhythm:{desc01:"ページ全体の一貫性を重視したバーティカルリズムを採用しています。24pxの行間を基準としてマージンや余白などを設定しています。",desc02:"認知障害がある利用者は、単語と単語の間隔が均一になっていると、テキストをより容易に読めるようになります。"}},vueA11yPage:{title:B,description:"こちらは、Webアクセシビリティ Advent Calendar 2019の21日目の記事です。この記事ではVue.js開発におけるWebアクセシビリティ対応にまつわる内容となっております。",heading:{bio:"自己紹介",book:"著書",webA11y:"アクセシビリティとは何か",vueA11y:"Vue.jsとWebアクセシビリティ",a11yNote:"Vue.jsにおける実装の留意点",conclusion:"おわりに"},subHeading:{book:"これからはじめるwebアクセシビリティ",webA11y:{"1":"アクセシビリティの定義","2":"アクセシビリティ対応とは障害者対応なのか","3":"皆が参加できるためのアクセシビリティ対応"},vueA11y:"アクセシビリティのドキュメントがない",a11yNote:{"1":"何でも{div}で実装しない","2":"キーボードで操作できるようにする","3":"SPA開発","4":"Nuxt.jsの設定","5":"テスト・チェック",test:{"1":x,"2":y,"3":z,"4":"ユーザテスト"}},conclusion:"Vue.js を通じて、Webを活かして、アクセシビリティに取り組もう",info:"このドキュメントに関する情報"},titleSection:{desc01:"こちらは、{link01}の21日目の記事です。",desc02:"この記事はVue.js開発におけるWebアクセシビリティ対応にまつわる内容となっております。",link01:"Webアクセシビリティ Advent Calendar 2019"},bio:{desc01:"大山奥人{small01}と申します。ネット上では、おおやまみちのく、yamanokuと名乗って活動しています。",desc02:"制作会社のWebデザイナーとして働き出し、株式会社GEEKでマークアップ・フロントエンドエンジニアとして従事した後、2019年10月から株式会社クラウドワークスに在籍しております。",desc03:"役職はUXエンジニアです。個人ではアクセシビリティ啓蒙も行っています。",small01:"（おおやまおくと）",photoAlt:"大山奥人"},book:{desc01:"技術書典で「これからはじめるwebアクセシビリティ」という技術同人誌を発表しました。Webアクセシビリティをはじめる方向けの導入として知ってもらいたいのがきっかけでした。",desc02:"現在BOOTHやNoteでもPDFファイルにて販売しております。",desc03:"またGitHubのフィードバック用のリポジトリのIssueにて修正や改善、提案を受け入れています。"},webA11y:{desc01:"まず{A11Y}は「アクセスできる・アクセスしやすさ」と翻訳されます。WebアクセシビリティはWebにある情報やコンテンツに、あらゆる人がアクセスできようにすることを指します。",a11y:"Accessibility",desc02:"あらゆる人がアクセスできるようにするとはどういうことかというと、デバイス操作に慣れない人でも簡単に閲覧できるようにしたり、難しい言い回しを避けて理解しやすくしたり、コントラストを調整して閲覧しやすいデザインにしたり、音声読み上げをしてくれるスクリーンリーダーといった支援技術を使うために考慮するといったことです。",quote01:"世界には10億人、言い換えると、人口の15から20%の割合で障害を持つ人がいます。国連は障害者の権利条約を定めており、人権としてWebを含んだ情報へのアクセスはほとんどの国で国連条約として批准されています。また数カ国では政策として義務付けられています。法律や規制にも関わらずアクセシビリティ標準を実行するのは、障害を持つ人たちにも、すべての人達にも不可欠なことです。",link01:{text:"W3Cのアクセシビリティと標準技術 | Web Accessibility Initiative (WAI) | W3C",link:"https:\u002F\u002Fwww.w3.org\u002FWAI\u002Fvideos\u002Fstandards-and-benefits\u002Fja"},desc03:"よくある誤解なのですが、アクセシビリティ対応をすることは障害者対応だと捉えられていることがあります。",desc04:"たしかにアクセシビリティ対応は障害者が使えるようにする目的もあるのですが、それ自体が目的なのではなく「あらゆる人が使えるようにする」ことが目的なので、障害者対応だけが先鋭化されて誤解につながっているように思います。",desc05:"Google I\u002FOでは音声認識においてリアルタイムで字幕がつけられるライブキャプション機能がつけられました。聴覚障害の方はもちろん、ミュートにした状態でビデオを見たり、文章を書き起こして内容の理解につなげたりなど、あらゆる状況においてどんな人でも使えるようなものを生み出しています。",imgAlt01:"Live Caption機能の紹介サムネイル",link02:{text:"Google I\u002FOはアクセシビリティ強化に全力、聴覚障害者にも電車でYouTubeを見るにも便利",link:"https:\u002F\u002Fjp.techcrunch.com\u002F2019\u002F05\u002F08\u002F2019-05-07-live-transcription-and-captioning-in-android-are-a-boon-to-the-hearing-impaired\u002F"},desc06:"スクリーンリーダーも視覚障害者のためだけではなく、読字障害といった長文を読むのが困難な人を手助けしたり、文章の確認を目視だけで行うよりも読み上げてもらうことで間違いに気づきやすくなります。",desc07:"アクセシビリティは使いやすさを重視する「ユーザビリティ」と混同されがちですが、使いやすいかどうか以前に使えるかどうかを考えることが目的です。そして、使えるということは、参加できるかどうかということにも繋がります。",desc08:"海外では法律でアクセシビリティを確保する決まりを定めていますが、これはアクセシビリティを手段として考えているより、アクセシビリティ自体を人権として捉えている部分があるからです。"},vueA11y:{desc01:"アクセシビリティについて何かを知っていただいたとことで、本題でもあるVue.jsとアクセシビリティにまつわる話をしていきたいと思います。",desc02:"Vue.jsが日本で爆発的な人気を誇った要因の1つとして公式ドキュメントが日本語訳されていたことがあると思っています。私自身、ドキュメントの日本語訳があることで非常に取り組みやすかったです。",desc03:"ところでそんなVue.jsの公式ドキュメントでアクセシビリティについてどれだけ言及されているか皆さんはご存知でしょうか。",desc04:"実はアクセシビリティに言及されたドキュメントはなく、一部のドキュメント内で軽く触れているだけなのです。",desc05:"ReactとAngularは公式ドキュメントにアクセシビリティの項目があり、開発における留意点などをまとめています。",listitem01:{text:"アクセシビリティ – React",link:"https:\u002F\u002Fja.reactjs.org\u002Fdocs\u002Faccessibility.html"},desc06:"私はReactやAngularと同様にアクセシビリティの項目を設けても良いと感じています。Vue.jsのIssueを調べてみたところCallum Macra氏がドキュメントを作成を進めていたようなのですが、現在Pull Requestは止まっている状態です。",desc07:"まだ途中ではありますが、現在編集が進んでいるドキュメントではWebアクセシビリティを理解するにとても良くまとまっている内容でした。英語のドキュメントですが、皆さんにも見ていただきたいです。",desc08:"公式ドキュメントでのアクセシビリティ項目の作成はまだですが、代わりにVue.jsのアクセシビリティコミュニティは作られています。",imgAlt01:"Vue a11yサイトのスクリーンショット",desc09:"このコミュニティではVue.jsのアクセシビリティプラグイン・ライブラリをいくつか作成しており、私も何かしら寄与できたらいいなと思っております。"},a11yNote:{desc01:"次にWebアクセシビリティを考慮する上でVue.jsの実装で留意しておくべきことについて紹介します。",desc02:"Webアクセシビリティをつくるには、{strong01}、というのが基本です。これは{div}タグ（または{span}タグ）自体が悪いのではなく、そのコンポーネントの見た目以外で必要に応じたタグを使うべきということです。",strong01:"セマンティクスな実装を心がける",quote01:"すべてのユーザインタフェースコンポーネントに、役割、状態、及び値の情報を提供することで、例えば、スクリーンリーダー、画面拡大ソフトウェア、及び音声認識ソフトウェアなどの、障害のある利用者が使用する支援技術との互換性を保つことが可能になる。",quote02:{text:"達成基準 4.1.2 を理解する | WCAG 2.0解説書",link:"https:\u002F\u002Fwaic.jp\u002Fdocs\u002FUNDERSTANDING-WCAG20\u002Fensure-compat-rsv.html"},desc03:"たとえばボタンを実装するとき、{div}タグから実装するとしたらさまざまな考慮が必要となります。",desc04:"これがセマンティクスな実装をすれば{button}タグ1つで済みます。セマンティクスでないことは本来もつ機能を損なってしまいかねません。",desc05:"スクリーンリーダーを利用する人はキーボードを使って情報にアクセスします。なのでキーボードであらゆる情報へアクセスできるかを意識する必要はあります。",desc06:"また、スクリーンリーダーを使用しなくとも、パソコンの操作に慣れてきた人であれば、フォームの送信でエンターキーを押したり、ダイアログを閉じる際にESCキーを押したり、マウス操作ではなくキーボード操作で行うことがあると思います。",desc07:"キーボード操作の考慮にあわせて、フォーカスのためのアウトラインも意識する必要があります。アウトラインを除去することで現在位置を把握しづらくなってしまうためです。",desc08:"モダンなフロントエンド開発において、SPA（{abbr01}）での実装は増えてきています。SPAは1つのHTMLとJavaScriptを使用した動的なコンテンツとして扱うため、ページ内で何がどう変わったのかを判定できないことがあります。",abbr01:A,desc09:"ページの変更や状態の更新では{ariaLive}属性を使用した実装が必要となります。ただし属性値の扱いを理解する必要があるため、はじめは{vueAnnouncer}というライブラリを利用してみても良いかも知れません。routerでのページ移動の読み上げや、コンポーネント内での状態変化の読み上げも簡単に設定できるようになります。",desc10:"盲点な部分かもしれませんが、{nuxtConfigJs}での{htmlAttrs}で言語設定は必要です。",desc11:"何も設定されていない場合、言語指定は{en}、つまり英語になっています。このままだとアプリケーションやサイトの見た目が日本語だとしても、ブラウザの判定では「英語の」アプリケーションやサイトとなってしまいます。",desc12:"未設定だとスクリーンリーダーによっては英語以外の部分を読み上げてくれない事態が起きます。{small01}。国際化対応をしていなくとも言語設定は気をつけなければなりません。",small01:"（これはAndroidのTalkback機能にて確認できました）",desc13:"{axeCore}というdeque systemsという会社が開発しているアクセシビリティチェックをするライブラリがあります。これはChromeの{LightHouse}のアクセシビリティ項目チェックでも使用されているものです。",imgAlt01:"vue-axeの動作イメージ。Chromeのコンソール上にアラート結果が出ている",desc14:"こちらは組み込むことでコンソール上でアクセシビリティチェックを通してくれます。以下は設定になります。",desc15:"自社のコンポーネントライブラリ、デザインシステムで利用されている方もいるかもしれません。こちらは単体ではチェックできませんが、アドオンに{storybookAddonA11y}があり、これを使うことでコンポーネントやストーリーに対してアクセシビリティチェックを通すことが出来ます。",imgAlt02:"storybook-addon-a11y スクリーンショット",desc16:"JavaScriptの静的検証ツールとして使われるeslintにはプラグインでアクセシビリティチェックができるものもあります。CI\u002FCDに組み込むことでビルド時にエラーを発見することも可能です。",desc17:"チェック内容の例をあげると、 {img}の{alt}属性に値が入っているか、フォーム要素にはラベル（{label}）が付与されているか、絵文字をアクセシブルに実装できているか、などがあります。",desc18:"ただしLintはあくまでコード規約をチェックするものなので、エラー判定のみに頼りきらないようにしましょう。",desc19:"機械的なテストについて紹介しましたが、自動化によるチェックやテストではすべてのアクセシビリティの問題のうちたった30%しか確認できないという研究結果が出ています。",desc20:"そのため、ユーザテストを通したチェックも必要となります。ブラウザチェックやスクリーンリーダーテスト、キーボードテストといった実際に見てみる、触ってみるのを試した上で問題ないかをテストしていきます。",desc21:"どういったテストをすべきかは、WCAG（{abbr02}）を参考にしましょう。これはW3C勧告として公開されたwebコンテンツをアクセシブルにするためのガイドラインで、どうすることでアクセシブルになるか、技術に依存しない検証方法も提示されています。",desc22:"しかし毎回WCAGの仕様を参照しにいくことも大変なので、必要な要素を参考にした上で独自のガイドラインを作成できると良さそうです。"},conclusion:{desc01:"1989年3月12日、欧州原子核研究機構（CERN）のティム・バーナーズ＝リーは「Information Management: A Proposal」（情報管理：提案）を執筆し、さらに進んだ情報管理システムを描きました。これによってWWW（World Wide Web）が発明されました。",imgAlt01:"写真：ティム・バーナーズ＝リー",desc02:"ティム・バーナーズ＝リーは「Webのパワーは、その普遍性にある。障害の有無に関係なく、誰もが使えることが、その本質である」と説きました。",desc03:"そして「情報を取得するためにどんなデバイスを使用していたとしても、取得できる情報は同じであるべきだ。」ともインタビューで答えていました。これこそまさにWebがアクセシビリティを実現するソリューションであることを示しています。",desc04:"その証拠にこの記事を読んでいるあなたは、インターネットを使うことができれば、場所や時間を問わずにこの情報にアクセスすることができています。Webにまつわる業務をしているだけでもアクセシブルなことを実現できている、ということは認識しておいても良いかもしれません。",desc05:"そしてあれから30年経った現在、{link01}。",link01:"世界人口におけるインターネット利用者の数は50%のハーフラインを超えました",desc06:"この数が大きくなることで、よりインターネットに触れられないことの格差というものも大きくなるように感じられます。Webというものを取り扱う人たちであればアクセシブルにしていくということは、より命題となってくることでしょう。",quote01:"ウェブのための戦いは、我々の時代におけるもっとも重要な大義の一つである。今日、世界の半分がネットにつながっている。その残り半分がネットにつながらないまま取り残されることなく、皆が平等、機会、創造性を推進するウェブに貢献できるようにすることは、かつてないほど差し迫った課題なのだ。",quote02:"（中略）",quote03:"ウェブは皆のためにあり、我々が力を合わせれば、ウェブを変える力を持つ。それは簡単ではないだろう。けれども、大きな夢を見ずにたくさん働ければ、我々は自分たちが望むウェブを手にできるのだ。",quote04:{text:"30 years on, what’s next #ForTheWeb? 日本語訳",link:"https:\u002F\u002Fwww.yamdas.org\u002Fcolumn\u002Ftechnique\u002Fweb-birthday-30j.html"},desc07:"アクセシビリティなものを生み出すのに特定のフレームワークじゃないとできないということはありません。ですが Vue.js は親しみやすく門戸が広いフレームワークだと感じています。",desc08:"アクセシブルにしていくことは「やっておしまい」「0か100か」という話でもなく、プロダクトを作りながら継続的に見直し試行錯誤していく部分もあるので、「いずれやる」ものとして捉えず、じっくりゆっくりと一つずつ進めていければと考えています。",desc09:"本記事を通じて、開発者やデザイナー、Vue.js に関わる人たちが少しでもアクセシビリティに興味をもち、これからアクセシビリティ対応をしてゆくためのエンパワーとなれることを願っています。",desc10:"まだまだやることが多く、進めづらい分野ではありますが、少しずつでもこの輪が広がればいいなと思っています。アクセシビリティとはいかなる人も受け入れてくれるものなのだから。"},feedback:{github:{linkTitle:"記事「Vue.jsから考えるアクセシビリティについて」の修正依頼"}}},archivePage:{title:"アーカイブ",desc01:"このページはyamanokuこと大山奥人が書いてきた過去の記事やログを収集したページです。",desc02:"移行時にリンク切れなど修正しましたが、内容自体は特にアップデートしておりませんので参照する際はその点ご注意ください。",slug:{feedback:"アーカイブ記事のため、内容に関する更新依頼は受け付けておりませんが、誤字や脱字などありましたらご連絡ください。"},backText:"アーカイブ一覧へ戻る",feedback:{github:{linkTitle:"アーカイブのドキュメントにまつわる修正依頼"}}},privacyPage:{title:"プライバシーポリシー",description:"yamanoku netのプライバシーポリシーページです。アクセス解析ツールについての説明が載っています。",analytics:{heading:"アクセス解析ツールについて",desc01:"yamanoku net（以下、当サイト）では、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。",desc02:"このGoogleアナリティクスはアクセス情報の収集のためにCookieを使用しています。このアクセス情報は匿名で収集されており、個人を特定するものではありません。",desc03:"当サイトでのGoogleアナリティクスのCookieは、26か月間保持されます。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。",link01:{title:"Googleアナリティクスの利用規約",url:"https:\u002F\u002Fwww.google.com\u002Fanalytics\u002Fterms\u002Fjp.html"},link02:{title:"Googleのサービスを使用するサイトやアプリから収集した情報のGoogleによる使用",url:"https:\u002F\u002Fpolicies.google.com\u002Ftechnologies\u002Fpartner-sites?hl=jp"}}},heading:{basic:"基本情報",job:"職業",career:"職歴",productList:"制作物一覧",todoList:"やること一覧",techStack:"利用技術",relatedList:"関連リンク一覧",presentations:{title:"発表一覧",stage:"登壇",write:"執筆"},sns:"ソーシャルサービス",contact:"連絡先"},error:{"500":{text01:"サーバエラーが発生しました。恐れ入りますがしばらくお待ちいただいた後再度アクセスしてください。",text02:"それでも復旧していない場合は、お手数をおかけしますが以下メールよりご連絡ください。"}},prefixAlt:{photo:"写真：",thumbnail:"サムネイル：",screenshot:"スクリーンショット："},multilingual:"多言語ページ",details:{summary:"詳細を確認する",summary_feedback:"この記事に関する修正依頼"},feedback:{github:{link:"修正内容：",title:"GitHub Issueを作成する"},twitter:{title:"著者にツイートする"}},backTop:"トップページに戻る"}}}}}("Twitter","LAPRAS","slack-reaction-primoji","yamanoku CLI","Reading...","Vue Portfolio Template","About accessibility with Vue.js","Birthday Countdown","glitchrange","canvas_browser-crash.js","rolling-sushi","Qiita Code Style Before","Product Design - Figma","Tumblr","YOUTRUST","Facebook","Github","Qiita","mstdn.jp","Instagram","Hatena","Steam","PWA (Progressive Web Application)","vue-axe","Storybook","eslint-plugin-vuejs-accessibility","Single Page Application","Vue.jsから考えるアクセシビリティについて"));