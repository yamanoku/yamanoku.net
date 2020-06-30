__NUXT_JSONP__("/archive/beginner-make-nuxtjs-pwa", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG){return {data:[{page:{title:"よく分かってなくてもNuxt.jsでPWAが作れた話",description:"PWA nuxt.js Slack AWSLambda Netlify",date:"2018-12-06T00:00:00.000Z",author:"yamanoku",toc:[{id:M,depth:R,text:L},{id:A,depth:x,text:A},{id:C,depth:x,text:C},{id:D,depth:x,text:D},{id:B,depth:x,text:B},{id:W,depth:x,text:Y},{id:ah,depth:x,text:aj},{id:ak,depth:R,text:am}],body:{type:"root",children:[{type:b,tag:k,props:{},children:[{type:a,value:"この記事は"},{type:b,tag:f,props:{href:"https:\u002F\u002Fqiita.com\u002Fadvent-calendar\u002F2018\u002Fpwa",rel:[h,i],target:j},children:[{type:a,value:"PWA Advent Calendar 2018"}]},{type:a,value:"の6日目の記事になります。\n既視感のあるタイトルですが気にしないでください。"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:az}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:az}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"そこで今回は大した知識が無くともPWAを作ることができた話をしようと思います。\n内容として他の皆様と大したことやってないかもですが、こんなんでも形になったぞというのを知ってもらいたいのもあるので温かい目で見てくださいませ。"}]},{type:a,value:c},{type:b,tag:K,props:{id:M},children:[{type:b,tag:f,props:{href:"#reading",ariaHidden:o,tabIndex:p},children:[{type:b,tag:e,props:{className:[r,n]},children:[]}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:s,props:{src:"https:\u002F\u002Fgyazo.com\u002F60ae2a3a628a1c6b7ed77bc356fbaeab\u002Fthumb\u002F1000",alt:"Reading… Logo",width:320},children:[]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Link: "},{type:b,tag:f,props:{href:"https:\u002F\u002Freading.yamanoku.net\u002F",rel:[h,i],target:j},children:[{type:a,value:"https:\u002F\u002Freading.yamanoku.net"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"GitHub: "},{type:b,tag:f,props:{href:av,rel:[h,i],target:j},children:[{type:a,value:av}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"日頃自分が見ているニュースを集約してまとめてみたらどうなるだろうか、情報の蓄積・可視化みたいなのを考えておりそういうのができないかなと思ってそれを題材にPWAにしてみようと思いました。以下は経緯みたいなやつです。"}]},{type:a,value:c},{type:b,tag:ax,props:{},children:[{type:a,value:c},{type:b,tag:k,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fyamanoku.net\u002FLT\u002Flt04\u002F",rel:[h,i],target:j},children:[{type:a,value:"情報収集ってどうしてる？ - YAMALT vol.04"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:u,props:{id:A},children:[{type:b,tag:f,props:{href:"#%E5%8B%95%E4%BD%9C%E3%82%A4%E3%83%A1%E3%83%BC%E3%82%B8",ariaHidden:o,tabIndex:p},children:[{type:b,tag:e,props:{className:[r,n]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fgyazo.com\u002F8418eadc1713fd8f083a625706757786",rel:[h,i],target:j},children:[{type:b,tag:s,props:{alt:"Reading… iPhoneシュミレーターによる実動作イメージ図",src:"https:\u002F\u002Fgyazo.com\u002F8418eadc1713fd8f083a625706757786\u002Fthumb\u002F1000"},children:[]}]}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"自分が最近見た20件のニュース×５ページ分にした計100件を表示。\nページ間はページネーションで動きます。"}]},{type:a,value:c},{type:b,tag:u,props:{id:C},children:[{type:b,tag:f,props:{href:"#%E4%BD%BF%E7%94%A8%E6%8A%80%E8%A1%93",ariaHidden:o,tabIndex:p},children:[{type:b,tag:e,props:{className:[r,n]},children:[]}]},{type:a,value:C}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:"table",props:{},children:[{type:b,tag:"thead",props:{},children:[{type:b,tag:aB,props:{},children:[{type:b,tag:J,props:{align:v},children:[{type:a,value:"API"}]},{type:b,tag:J,props:{align:v},children:[{type:a,value:"ホスティング"}]},{type:b,tag:J,props:{align:v},children:[{type:a,value:"フレームワーク"}]}]}]},{type:b,tag:"tbody",props:{},children:[{type:b,tag:aB,props:{},children:[{type:b,tag:I,props:{align:v},children:[{type:a,value:"Slack API "},{type:b,tag:"br",props:{},children:[]},{type:a,value:" AWS API GateWay"}]},{type:b,tag:I,props:{align:v},children:[{type:a,value:N}]},{type:b,tag:I,props:{align:v},children:[{type:a,value:"Nuxt.js"}]}]}]}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"Nuxt.jsのプラグイン・モジュールは以下を使用"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:O,rel:[h,i],target:j},children:[{type:a,value:P}]},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"ページネーション。asyncもあって複数で連携できたり、"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"個人的には色々あるページネーションの中で導入が簡単（な印象）"}]},{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fpwa-module",rel:[h,i],target:j},children:[{type:a,value:"nuxt-community\u002Fpwa-module"}]},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"皆様ご存知のNuxt.jsでPWAにするなら必要になる"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"PWAにしなくともキャッシュ高速化にも使える"}]},{type:a,value:c}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"あと当初はNuxt1.0で作成していましたが、今年の2.0の発表に合わせて"},{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002Fyamanoku\u002Freading\u002Fcommit\u002F6124198e300dc1f8ccc74e14c6b9118e09f36a5d",rel:[h,i],target:j},children:[{type:a,value:"アップデートしました"}]},{type:a,value:"。"}]},{type:a,value:c},{type:b,tag:ax,props:{},children:[{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"Nuxt 2でgenerateしたPWAサイトです\n"},{type:b,tag:f,props:{href:Q,rel:[h,i],target:j},children:[{type:a,value:Q}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:u,props:{id:D},children:[{type:b,tag:f,props:{href:"#%E3%83%95%E3%83%AD%E3%83%BC%E3%83%81%E3%83%A3%E3%83%BC%E3%83%88",ariaHidden:o,tabIndex:p},children:[{type:b,tag:e,props:{className:[r,n]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"図です。"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:b,tag:s,props:{alt:"フローチャート 以下説明",src:"https:\u002F\u002Fi.gyazo.com\u002F6c87beb1a40364b5520050b0963fa3e9.png"},children:[]}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"投稿自体はTwitter"},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"シェアする内容の文頭に"},{type:b,tag:q,props:{},children:[{type:a,value:"Reading..."}]},{type:a,value:"とつけてツイート"},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"例："},{type:b,tag:f,props:{href:S,rel:[h,i],target:j},children:[{type:a,value:S}]}]},{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"別に「Reading」じゃなくてもいいけど、昔使ってた"},{type:b,tag:f,props:{href:"http:\u002F\u002Ffladdict.net\u002Fblog\u002F2012\u002F10\u002Fnews-storm.html",rel:[h,i],target:j},children:[{type:a,value:"ニュースアプリ"}]},{type:a,value:"の名残で自発的にやってる"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"主な発言地帯がTwitterなだけなので、別にIFTTTと連携できるならなんでもいい"}]},{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"DBは個人用Slack"},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"IFTTTで投稿連携"},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Twitterから「Reading...」と紐づけた特定のものを拾ってくる"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"連携して個人Slackに投稿されて全件検索される"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fgyazo.com\u002F1948eaf267fa165a4b4b1fef5afff211",rel:[h,i],target:j},children:[{type:b,tag:s,props:{alt:T,src:"https:\u002F\u002Fgyazo.com\u002F1948eaf267fa165a4b4b1fef5afff211\u002Fthumb\u002F1000"},children:[]}]}]},{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Slack APIの制約もあり100件までを抽出。古いものは取得内から消えていく。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"なぜSlackをデータベースにしたのか？"},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"お手軽サーバーレス体験"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Slack側のメッセージの修正や消去で即JSONに反映してくれる"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"無料で作れて垢バンの心配がない"},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Twitter単体だと心配"}]},{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"日経の米朝首脳会談の速報ページで前例あり"},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Ftwitter.com\u002Fkoni\u002Fstatus\u002F1006452321583271936",rel:[h,i],target:j},children:[{type:a,value:"こに@SocialDog\u002Fwhotwiさんのツイート: 日経の米朝首脳会談の速報ページ、気味の悪い拡張子のファイルによるとSlackが使われているっぽい。現地からSlackに投稿するとそのまま公開される仕組みっぽい。すごい今風。"}]}]},{type:a,value:c}]}]},{type:a,value:c}]}]},{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"AWSでAPI GatewayとLambda FunctionにてAPI変換"},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Slack APIから直接経由だと制約があってしんどかった"},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"devtools使うとどのslackから持ってきてるのかとかがわかっちゃう"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"tokenを隠蔽しても"},{type:b,tag:q,props:{},children:[{type:a,value:U}]},{type:a,value:"しビルドしたJS内にtokenとかが見えると警告メールが来てAPI止められる（計4敗）"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fgyazo.com\u002F22343b9c3de68ed9a44d24d81064bc6b",rel:[h,i],target:j},children:[{type:b,tag:s,props:{alt:T,src:"https:\u002F\u002Fgyazo.com\u002F22343b9c3de68ed9a44d24d81064bc6b\u002Fthumb\u002F1000"},children:[]}]}]},{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"変えてよかったこと"},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"tokenを完全隠蔽した"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"CORS対応したのでどこでも取得できる"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"gzip配信もできる"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"今のところは自分用なのもあって無料枠で収まる内容になってる"}]},{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fnetlify-meetup-tokyo.connpass.com\u002Fevent\u002F100705\u002F",rel:[h,i],target:j},children:[{type:a,value:"Netlify Meetup Tokyo #2"}]},{type:a,value:"で"},{type:b,tag:q,props:{},children:[{type:a,value:"Netlify Functions"}]},{type:a,value:"でもいけそうって話を@mottox2さんから聞けたのでNetlify内で完結できる方向に変えようかと考え中"}]},{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fscrapbox.io\u002Fyamanoku\u002FNetlify",rel:[h,i],target:j},children:[{type:a,value:N}]},{type:a,value:"でホスティング"},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fscrapbox.io\u002Fyamanoku\u002FGitHub",rel:[h,i],target:j},children:[{type:a,value:"GitHub"}]},{type:a,value:"リポジトリと紐づけてる"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:q,props:{},children:[{type:a,value:U}]},{type:a,value:" &  "},{type:b,tag:q,props:{},children:[{type:a,value:"push-dir --dir=dist --branch=master --cleanup"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"静的書き出しした"},{type:b,tag:q,props:{},children:[{type:a,value:"dist"}]},{type:a,value:"を"},{type:b,tag:q,props:{},children:[{type:a,value:V}]},{type:a,value:"ブランチにプッシュ"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:q,props:{},children:[{type:a,value:V}]},{type:a,value:"ブランチをホスティング"},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fgyazo.com\u002F89e1780586aa0aee4322c9a1cdee3fed",rel:[h,i],target:j},children:[{type:b,tag:s,props:{alt:"Image from Gyazo",src:"https:\u002F\u002Fi.gyazo.com\u002F89e1780586aa0aee4322c9a1cdee3fed.png"},children:[]}]}]},{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"SSL化やらカスタムドメイン可やらプレレンダリング（今回は未使用）やら無料でやってくれてすごい。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"あとプライベートリポジトリも使える。"}]},{type:a,value:c}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:u,props:{id:B},children:[{type:b,tag:f,props:{href:"#%E3%83%91%E3%83%95%E3%82%A9%E3%83%BC%E3%83%9E%E3%83%B3%E3%82%B9",ariaHidden:o,tabIndex:p},children:[{type:b,tag:e,props:{className:[r,n]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:w,props:{id:X},children:[{type:b,tag:f,props:{href:"#lighthouse",ariaHidden:o,tabIndex:p},children:[{type:b,tag:e,props:{className:[r,n]},children:[]}]},{type:a,value:X}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Device: Emulated Nexus 5X"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Network throttling: 150 ms TCP RTT, 1,638.4 Kbps throughput (Simulated)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"CPU throttling: 4x slowdown (Simulated)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"上記設定で計測。Perfomance部分は変動ある感じですがだいたいこんな感じ"}]},{type:a,value:c},{type:b,tag:z,props:{id:"201896-計測"},children:[{type:b,tag:f,props:{href:"#201896-%E8%A8%88%E6%B8%AC",ariaHidden:o,tabIndex:p},children:[{type:b,tag:e,props:{className:[r,n]},children:[]}]},{type:a,value:Z}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fgyazo.com\u002F798f53d86ca89daf3d3d2c02187c44c2",rel:[h,i],target:j},children:[{type:b,tag:s,props:{alt:"Perfomance 91, PWA 96, Accessibility 88, Best Practice 100, SEO 100",src:"https:\u002F\u002Fgyazo.com\u002F798f53d86ca89daf3d3d2c02187c44c2\u002Fthumb\u002F1000"},children:[]}]}]},{type:a,value:c},{type:b,tag:z,props:{id:"2018122-計測"},children:[{type:b,tag:f,props:{href:"#2018122-%E8%A8%88%E6%B8%AC",ariaHidden:o,tabIndex:p},children:[{type:b,tag:e,props:{className:[r,n]},children:[]}]},{type:a,value:_}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fgyazo.com\u002F62f8aebc83ef63c8637401dca55fa6bd",rel:[h,i],target:j},children:[{type:b,tag:s,props:{alt:"Perfomance 95, PWA 96, Accessibility 90, Best Practice 100, SEO 100",src:"https:\u002F\u002Fgyazo.com\u002F62f8aebc83ef63c8637401dca55fa6bd\u002Fraw"},children:[]}]}]},{type:a,value:c},{type:b,tag:w,props:{id:"webpagetest"},children:[{type:b,tag:f,props:{href:"#webpagetest",ariaHidden:o,tabIndex:p},children:[{type:b,tag:e,props:{className:[r,n]},children:[]}]},{type:a,value:"WebPageTest"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"From: Tokyo, Japan - EC2 - Chrome - Cable"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"上記設定で計測。"}]},{type:a,value:c},{type:b,tag:z,props:{id:"201896-計測-1"},children:[{type:b,tag:f,props:{href:"#201896-%E8%A8%88%E6%B8%AC-1",ariaHidden:o,tabIndex:p},children:[{type:b,tag:e,props:{className:[r,n]},children:[]}]},{type:a,value:Z}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:b,tag:f,props:{href:$,rel:[h,i],target:j},children:[{type:a,value:$}]}]},{type:a,value:c},{type:b,tag:z,props:{id:"2018122-計測-1"},children:[{type:b,tag:f,props:{href:"#2018122-%E8%A8%88%E6%B8%AC-1",ariaHidden:o,tabIndex:p},children:[{type:b,tag:e,props:{className:[r,n]},children:[]}]},{type:a,value:_}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:b,tag:f,props:{href:aa,rel:[h,i],target:j},children:[{type:a,value:aa}]}]},{type:a,value:c},{type:b,tag:u,props:{id:W},children:[{type:b,tag:f,props:{href:"#fixed--updates",ariaHidden:o,tabIndex:p},children:[{type:b,tag:e,props:{className:[r,n]},children:[]}]},{type:a,value:Y}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"あんまりPWA要素と関係ないかもですが、更新したことなど。"}]},{type:a,value:c},{type:b,tag:w,props:{id:ab},children:[{type:b,tag:f,props:{href:"#%E3%83%9A%E3%83%BC%E3%82%B8%E3%83%8D%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%82%92%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AF%E3%81%99%E3%82%8B%E3%81%A8%E3%82%B9%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%AB%E4%BD%8D%E7%BD%AE%E3%81%8C%E4%BF%9D%E5%AD%98%E3%81%95%E3%82%8C%E3%81%9F%E3%81%BE%E3%81%BE%E3%81%AB%E3%81%AA%E3%81%A3%E3%81%A6%E3%82%8B",ariaHidden:o,tabIndex:p},children:[{type:b,tag:e,props:{className:[r,n]},children:[]}]},{type:a,value:ab}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"中間くらいまでスクロールした状態で移動するとページ間でその位置のまま"},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:q,props:{},children:[{type:a,value:"position: fixed"}]},{type:a,value:"と"},{type:b,tag:q,props:{},children:[{type:a,value:"vh"}]},{type:a,value:"を使っているせい"}]},{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"ページが切り替わったときの制御に"},{type:b,tag:q,props:{},children:[{type:a,value:ac}]},{type:a,value:"をかませた"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:ad,props:{className:[ae]},children:[{type:b,tag:af,props:{className:[ag,"language-javascript"]},children:[{type:b,tag:q,props:{},children:[{type:a,value:"methods"},{type:b,tag:e,props:{className:[g,ai]},children:[{type:a,value:":"}]},{type:a,value:t},{type:b,tag:e,props:{className:[g,m]},children:[{type:a,value:al}]},{type:a,value:F},{type:b,tag:e,props:{className:[g,an]},children:[{type:a,value:ao}]},{type:b,tag:e,props:{className:[g,m]},children:[{type:a,value:ap}]},{type:b,tag:e,props:{className:[g,m]},children:[{type:a,value:aq}]},{type:a,value:t},{type:b,tag:e,props:{className:[g,m]},children:[{type:a,value:al}]},{type:a,value:"\n    "},{type:b,tag:e,props:{className:[g,"dom","variable"]},children:[{type:a,value:"document"}]},{type:b,tag:e,props:{className:[g,m]},children:[{type:a,value:ar}]},{type:b,tag:e,props:{className:[g,"method",an,as]},children:[{type:a,value:"getElementsByClassName"}]},{type:b,tag:e,props:{className:[g,m]},children:[{type:a,value:ap}]},{type:b,tag:e,props:{className:[g,"string"]},children:[{type:a,value:"'news-list'"}]},{type:b,tag:e,props:{className:[g,m]},children:[{type:a,value:aq}]},{type:b,tag:e,props:{className:[g,m]},children:[{type:a,value:"["}]},{type:b,tag:e,props:{className:[g,at]},children:[{type:a,value:au}]},{type:b,tag:e,props:{className:[g,m]},children:[{type:a,value:"]"}]},{type:b,tag:e,props:{className:[g,m]},children:[{type:a,value:ar}]},{type:b,tag:e,props:{className:[g,as]},children:[{type:a,value:ac}]},{type:a,value:t},{type:b,tag:e,props:{className:[g,ai]},children:[{type:a,value:H}]},{type:a,value:t},{type:b,tag:e,props:{className:[g,at]},children:[{type:a,value:au}]},{type:b,tag:e,props:{className:[g,m]},children:[{type:a,value:";"}]},{type:a,value:F},{type:b,tag:e,props:{className:[g,m]},children:[{type:a,value:aw}]},{type:a,value:c},{type:b,tag:e,props:{className:[g,m]},children:[{type:a,value:aw}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:ad,props:{className:[ae]},children:[{type:b,tag:af,props:{className:[ag,"language-html"]},children:[{type:b,tag:q,props:{},children:[{type:b,tag:e,props:{className:[g,E]},children:[{type:b,tag:e,props:{className:[g,E]},children:[{type:b,tag:e,props:{className:[g,m]},children:[{type:a,value:"\u003C"}]},{type:a,value:ay}]},{type:a,value:F},{type:b,tag:e,props:{className:[g,y]},children:[{type:a,value:"for"}]},{type:b,tag:e,props:{className:[g,aA]},children:[{type:b,tag:e,props:{className:[g,m]},children:[{type:a,value:H}]},{type:b,tag:e,props:{className:[g,m]},children:[{type:a,value:G}]},{type:a,value:"lists"},{type:b,tag:e,props:{className:[g,m]},children:[{type:a,value:G}]}]},{type:a,value:F},{type:b,tag:e,props:{className:[g,y]},children:[{type:a,value:"@change"}]},{type:b,tag:e,props:{className:[g,aA]},children:[{type:b,tag:e,props:{className:[g,m]},children:[{type:a,value:H}]},{type:b,tag:e,props:{className:[g,m]},children:[{type:a,value:G}]},{type:a,value:ao},{type:b,tag:e,props:{className:[g,m]},children:[{type:a,value:G}]}]},{type:a,value:t},{type:b,tag:e,props:{className:[g,y]},children:[{type:a,value:"\u003C!--"}]},{type:a,value:t},{type:b,tag:e,props:{className:[g,y]},children:[{type:a,value:"ここ"}]},{type:a,value:t},{type:b,tag:e,props:{className:[g,y]},children:[{type:a,value:"--"}]},{type:b,tag:e,props:{className:[g,m]},children:[{type:a,value:aC}]}]},{type:a,value:"\n  :show-step-links=\"true\"\n  :limit=\"2\"\u003E\n"},{type:b,tag:e,props:{className:[g,E]},children:[{type:b,tag:e,props:{className:[g,E]},children:[{type:b,tag:e,props:{className:[g,m]},children:[{type:a,value:"\u003C\u002F"}]},{type:a,value:ay}]},{type:b,tag:e,props:{className:[g,m]},children:[{type:a,value:aC}]}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:w,props:{id:aD},children:[{type:b,tag:f,props:{href:"#%E7%B5%B5%E6%96%87%E5%AD%97%E3%81%8C%E3%83%91%E3%83%BC%E3%82%B9%E3%81%95%E3%82%8C%E3%81%A6%E3%81%84%E3%81%AA%E3%81%84",ariaHidden:o,tabIndex:p},children:[{type:b,tag:e,props:{className:[r,n]},children:[]}]},{type:a,value:aD}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fgyazo.com\u002F515ea122571f395b03d8be35b82e4469",rel:[h,i],target:j},children:[{type:b,tag:s,props:{alt:"🔥の絵文字が :fire: として出力されている",src:"https:\u002F\u002Fgyazo.com\u002F515ea122571f395b03d8be35b82e4469\u002Fthumb\u002F1000"},children:[]}]}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"単純にパースしてあげればいいのかなと思ったので、\n"},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.npmjs.com\u002Fpackage\u002Fnode-emoji",rel:[h,i],target:j},children:[{type:a,value:"node-emoji"}]},{type:a,value:" を使いました。"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fgyazo.com\u002F6586344df213347f483f99f7ea95c014",rel:[h,i],target:j},children:[{type:b,tag:s,props:{alt:"🔥絵文字が適応された",src:"https:\u002F\u002Fgyazo.com\u002F6586344df213347f483f99f7ea95c014\u002Fthumb\u002F1000"},children:[]}]}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"👍👍👍👍👍"}]},{type:a,value:c},{type:b,tag:w,props:{id:aE},children:[{type:b,tag:f,props:{href:"#%E3%83%9A%E3%83%BC%E3%82%B8%E3%83%8D%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E3%83%9C%E3%82%BF%E3%83%B3%E3%82%A2%E3%82%AF%E3%82%BB%E3%82%B7%E3%83%93%E3%83%AA%E3%83%86%E3%82%A3%E5%AF%BE%E5%BF%9C",ariaHidden:o,tabIndex:p},children:[{type:b,tag:e,props:{className:[r,n]},children:[]}]},{type:a,value:aE}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"今回ページネーションのライブラリで使用した"},{type:b,tag:f,props:{href:O,rel:[h,i],target:j},children:[{type:a,value:P}]},{type:a,value:"ですが、"},{type:b,tag:q,props:{},children:[{type:a,value:"\u003Ca\u003E"}]},{type:a,value:"タグのみで"},{type:b,tag:q,props:{},children:[{type:a,value:"href"}]},{type:a,value:"で明確なリンク遷移が明示されていない、リンクとして未完成な状態のままでした。\nまた、"},{type:b,tag:q,props:{},children:[{type:a,value:"tabindex"}]},{type:a,value:"指定もないのでタブキーでのフォーカスも効かない状態でした。"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"そこでページネーションのボタン部分をリンク要素としてではなく"},{type:b,tag:q,props:{},children:[{type:a,value:"button"}]},{type:a,value:"タグに変更して、意味あるタグを設置・タブにおけるフォーカスの両方を解消しようと思いました。"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"ただ、この内容についてIssueで報告する・プルリクエストを提出することを考えた時、個人での運用なのでいつ見てもらえるか・かつ受け入れられるかもわからないという不安がありました。"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"そこで、リポジトリをforkして自分専用用のモジュールを作ったほうが早いと感じたので、早速対応しました。"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:aF,rel:[h,i],target:j},children:[{type:a,value:aF}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fgyazo.com\u002F42475acc4d4f26575615095b57d77a70",rel:[h,i],target:j},children:[{type:b,tag:s,props:{alt:"aタグからbuttonタグに変更してタブキーのフォーカスが効くようになった",src:"https:\u002F\u002Fgyazo.com\u002F42475acc4d4f26575615095b57d77a70\u002Fthumb\u002F1000"},children:[]}]}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"ただ、開閉時の"},{type:b,tag:q,props:{},children:[{type:a,value:"aria-expanded"}]},{type:a,value:"ほかWAI-ARIA部分などはまだまだ対応しきれていないので、今後も改良する余地はありそうです（自前実装になる？）。"}]},{type:a,value:c},{type:b,tag:w,props:{id:"今後の更新・todoなど"},children:[{type:b,tag:f,props:{href:"#%E4%BB%8A%E5%BE%8C%E3%81%AE%E6%9B%B4%E6%96%B0%E3%83%BBtodo%E3%81%AA%E3%81%A9",ariaHidden:o,tabIndex:p},children:[{type:b,tag:e,props:{className:[r,n]},children:[]}]},{type:a,value:"今後の更新・TODOなど"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"以下Scrapboxのページにて順次手作業で更新予定です"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fscrapbox.io\u002Fyamanoku\u002FReading%E2%80%A6",rel:[h,i],target:j},children:[{type:a,value:"https:\u002F\u002Fscrapbox.io\u002Fyamanoku\u002FReading…"}]}]},{type:a,value:c},{type:b,tag:u,props:{id:ah},children:[{type:b,tag:f,props:{href:"#pwa%E3%82%92%E4%BD%9C%E3%81%A3%E3%81%A6%E3%81%BF%E3%81%A6%E3%81%AE%E6%84%9F%E6%83%B3",ariaHidden:o,tabIndex:p},children:[{type:b,tag:e,props:{className:[r,n]},children:[]}]},{type:a,value:aj}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Nuxt.jsにおけるPWA導入が圧倒的にやりやすい・分かりやすいかなと思いました"},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Vue.js依存ですが…"}]},{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"PWAだけに限らないですが、何かしら動くものを作ってみると、新しいものがきたらそこから派生してみる・検証することができる"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"まだまだ改善の余地は大きい部分はあるが試行錯誤していろんなことが検証できるのが楽しい"},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"こうしたらいいよ的なアドバイスお待ちしております（コメントでもTwitterでも）"}]},{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"今後の派生として、妻を個人Slackに招待して、家族間でのURL共有みたいなのがやれたらいいかなと思っている"},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"妻が結構検索しまくって共有してくれる（育児・買い物・行きたいところ等）"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"夫婦間での共有を簡易・履歴として残すようにしたい"}]},{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"自分でPWAを実装してみてAndroid実機で動かせるのがこれまでにない感覚で面白かった"},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"ちなみに"},{type:b,tag:f,props:{href:"https:\u002F\u002Fyamanoku.net",rel:[h,i],target:j},children:[{type:a,value:"ポートフォリオサイト"}]},{type:a,value:"もPWA化しています"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"GitHub Pagesと紐づけているので、配下のページ（リポジトリ）も自動的にPWA判定になっている？"},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fyamanoku.net\u002Fbirthday-countdown-js\u002F",rel:[h,i],target:j},children:[{type:a,value:"Birthday-Countdown.js"}]},{type:a,value:" など"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Service Workerがルートディレクトリで設定されているから？"}]},{type:a,value:c}]}]},{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"実際にPWAとして使えるものを使ってみたり検証したりしてみる"},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Service Workerがどのような感じで使われているかとか"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"自分はTwitterはネイティブではなく"},{type:b,tag:f,props:{href:"https:\u002F\u002Fmobile.twitter.com",rel:[h,i],target:j},children:[{type:a,value:"Twitter Lite"}]},{type:a,value:"（PWA版）のを使うようにしています。"}]},{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"企業の制作実体験記みたいなのが気になりだす（業務内でのノウハウや失敗など）"},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"最近だとHTML5カンファレンスや7月のHTML5 APP CONFERENCE 2018でその辺が聞けました"},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fspeakerdeck.com\u002Fsisidovski\u002Fnikkei-pwa-html5conf2018",rel:[h,i],target:j},children:[{type:a,value:"PWAの導入で得られた成果と見えてきた課題"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fscrapbox.io\u002Fyamanoku\u002FWeb_%E3%83%97%E3%83%A9%E3%83%83%E3%83%88%E3%83%95%E3%82%A9%E3%83%BC%E3%83%A0%E5%86%8D%E8%80%83_%EF%BD%9EPWA_%E3%81%AE%E3%82%82%E3%81%9F%E3%82%89%E3%81%99%E6%9C%AA%E6%9D%A5%E3%81%AE%E5%85%89%E3%81%A8%E5%BD%B1_%EF%BD%9E",rel:[h,i],target:j},children:[{type:a,value:"Web プラットフォーム再考 ～PWA のもたらす未来の光と影 ～"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fspeakerdeck.com\u002Fikasoumen\u002Fpixiv-chatstory-false-pwa-tositefalsequ-rizu-mi",rel:[h,i],target:j},children:[{type:a,value:"pixiv chatstory の PWA としての取り組み"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fspeakerdeck.com\u002Fkasanomo\u002Fmobairuneiteibuapurinidai-warucun-zai-chu-metefalsepwa",rel:[h,i],target:j},children:[{type:a,value:"モバイルネイティブアプリに代わる存在！？初めてのPWA"}]}]},{type:a,value:c}]}]},{type:a,value:c}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:"strong",props:{},children:[{type:a,value:"iOSマジお前．．．"}]},{type:a,value:"となる気持ちがよくわかる"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"以上になります。ご覧いただきありがとうございました。\n明日（12\u002F7）は@"},{type:b,tag:"em",props:{},children:[{type:a,value:"lemon2003"}]},{type:a,value:"さんになります。"}]},{type:a,value:c},{type:b,tag:K,props:{id:ak},children:[{type:b,tag:f,props:{href:"#%E3%80%90%E5%BC%8A%E7%A4%BE%E3%82%A2%E3%83%89%E3%83%99%E3%83%B3%E3%83%88%E3%82%AB%E3%83%AC%E3%83%B3%E3%83%80%E3%83%BCpr%E3%80%91",ariaHidden:o,tabIndex:p},children:[{type:b,tag:e,props:{className:[r,n]},children:[]}]},{type:a,value:am}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fgyazo.com\u002Fa2ce676febed730106792e210ad75eba",rel:[h,i],target:j},children:[{type:b,tag:s,props:{alt:"株式会社GEEK ロゴ",src:"https:\u002F\u002Fi.gyazo.com\u002Fa2ce676febed730106792e210ad75eba.jpg"},children:[]}]}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"最後に宣伝になりますが、私が所属している"},{type:b,tag:f,props:{href:"https:\u002F\u002Fqiita.com\u002Forganizations\u002Fgeekinc",rel:[h,i],target:j},children:[{type:a,value:"株式会社GEEK"}]},{type:a,value:"でもアドベントカレンダーをやっております。良ければご覧になってみてください。\n自分はこのアドベントカレンダーほか色んな所に出張執筆予定です。"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fadventar.org\u002Fcalendars\u002F3108",rel:[h,i],target:j},children:[{type:a,value:"GEEK Inc. Advent Calendar 2018"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"去年 → "},{type:b,tag:f,props:{href:"https:\u002F\u002Fadventar.org\u002Fcalendars\u002F2422",rel:[h,i],target:j},children:[{type:a,value:"GEEK Inc. Advent Calendar 2017"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"GEEKアドベントカレンダーの次回担当はマークアップエンジニアの大房さんになります。"}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fbeginner-make-nuxtjs-pwa",extension:".md",slug:"beginner-make-nuxtjs-pwa",createdAt:aG,updatedAt:aG}}],fetch:[],mutations:[]}}("text","element","\n","li","span","a","token","noopener","noreferrer","_blank","p","ul","punctuation","icon-link","true",-1,"code","icon","img"," ","h3","left","h4",3,"attr-name","h5","動作イメージ","パフォーマンス","使用技術","フローチャート","tag","\n  ","\"","=","td","th","h2","Reading…","reading","Netlify","https:\u002F\u002Fgithub.com\u002FTahaSh\u002Fvue-paginate","vue-paginate","https:\u002F\u002Ftwitter.com\u002Fyamanoku\u002Fstatus\u002F1043119076489318401",2,"https:\u002F\u002Ftwitter.com\u002Fyamanoku\u002Fstatus\u002F998900479487692800","Image","nuxt generate","master","fixed--updates","lighthouse","Fixed & Updates","2018\u002F9\u002F6 計測","2018\u002F12\u002F2 計測","https:\u002F\u002Fwww.webpagetest.org\u002Fresult\u002F180905_90_60fd3b52c101b6aaeb61fda8ac192468\u002F","https:\u002F\u002Fwww.webpagetest.org\u002Fresult\u002F181202_Q9_0b087ea9b135cf3ee5e8c790e07853a7\u002F","ページネーションをクリックするとスクロール位置が保存されたままになってる","scrollTop","div","nuxt-content-highlight","pre","line-numbers","pwaを作ってみての感想","operator","PWAを作ってみての感想","【弊社アドベントカレンダーpr】","{","【弊社アドベントカレンダーPR】","function","onPageChange","(",")",".","property-access","number","0","https:\u002F\u002Fgithub.com\u002Fyamanoku\u002Freading\u002F","}","blockquote","paginate-links","毎年何かしら自分のレベルに合わせて新技術に触れてみる・作ってみるみたいなのを課してるのですが、\n今年個人的にチャレンジしてみようと思ったものの１つにPWAがあります。","attr-value","tr","\u003E","絵文字がパースされていない","ページネーションのボタンアクセシビリティ対応","https:\u002F\u002Fgithub.com\u002Fyamanoku\u002Fvue-paginate","2020-06-30T23:16:36.600Z")));