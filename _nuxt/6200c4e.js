(window.webpackJsonp=window.webpackJsonp||[]).push([[15,5],{417:function(t,e,n){var content=n(425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(29).default)("0edbb02b",content,!0,{sourceMap:!1})},419:function(t,e,n){"use strict";n.r(e);n(46);var r={props:{listArray:Array},data:function(){return{listItem:this.listArray}},methods:{dateStirngReplace:function(t){return t.replace(/T.*$/,"").replace(/(-)/g,"/")}}},l=n(5),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.listItem,(function(e){return n("li",{key:e.index},[e.datetime?[n("span",{staticClass:"time"},[t._v(t._s(t.dateStirngReplace(e.datetime)))]),t._v("\n      -\n    ")]:e.created_at?[n("span",{staticClass:"time"},[t._v(t._s(t.dateStirngReplace(e.created_at)))]),t._v("\n      -\n    ")]:t._e(),t._v(" "),n("a",{attrs:{href:e.url,target:"_blank",rel:"noopener",lang:"ja"}},[t._v("\n      "+t._s(e.title)+"\n      "),n("open-new-icon")],1)],2)})),0)}),[],!1,null,null,null);e.default=component.exports},424:function(t,e,n){"use strict";n(417)},425:function(t,e,n){var r=n(28)(!1);r.push([t.i,"svg[data-v-01a5ff8a]{width:12px;height:12px;margin:0 0 -1px 4px}",""]),t.exports=r},432:function(t,e,n){"use strict";n.r(e);var r={name:"SectionsPresentations",data:function(){return{listStage:[{title:"HTML だけで UI を作る限界、あるいは無理なくユースケースと向き合っていくためには",url:"https://docs.google.com/presentation/d/e/2PACX-1vRfZCfZpjvKndrrHZYH4QQsMM8JwcRYCbYlgeIaJxEQdvz5BbWFx2pKv2ctZ1KT8CTztpC-hR1n6vIO/pub?start=false&loop=false&delayms=3000",datetime:"2021-09-15T21:38:00.000Z"},{title:"PWA版Twitterをスクリーンリーダー検証してみる",url:"https://scrapbox.io/yamanoku/PWA%E7%89%88Twitter%E3%82%92%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%83%AA%E3%83%BC%E3%83%80%E3%83%BC%E6%A4%9C%E8%A8%BC%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B",datetime:"2021-06-26T18:50:00.000Z"},{title:"これからもつづけるWebアクセシビリティ",url:"https://docs.google.com/presentation/d/e/2PACX-1vRIhRTjYc1yxxNRSE0-PbTHTyvSHh07pkuVapbek_-0wkYyF0scZ5XU0danIEky5YJToE0W3AwUCDXc/pub?start=false&loop=false&delayms=3000",datetime:"2021-01-12T19:30:00.000Z"},{title:"Vue3 からはじめるWebアクセシビリティ",url:"https://docs.google.com/presentation/d/e/2PACX-1vR-hRI-IEV5PUCLg1XTDlMGsDyZ4OhGBgXM8o3yaI1VKBOXSOEk6qwT8YFuzwsOpmyDIvjr2T_aYCWV/pub?start=false&loop=false&delayms=3000",datetime:"2020-12-08T20:30:00.000Z"}],listWrite:[{title:"markuplintをプロダクトに導入してみた",url:"https://engineer.crowdworks.jp/entry/using-markuplint",datetime:"2021-10-07T13:00:00.000Z"},{title:"生まれ変わったログインページにまつわるフロントエンド開発の話",url:"https://engineer.crowdworks.jp/entry/renewal-login",datetime:"2021-08-18T18:00:00.000Z"},{title:"UI の実装で考えていること, 気をつけたいこと",url:"https://zenn.dev/yamanoku/articles/c69decedfb1699",datetime:"2020-12-09T18:00:00.000Z"},{title:"クラウドワークス #accessibility チャンネル 気になる話題 Pickup 2020",url:"https://zenn.dev/yamanoku/scraps/443087a170fcbe",datetime:"2020-12-07T00:00:00.000Z"},{title:"クラウドワークスのフロントエンド活動を振り返る 2020",url:"https://engineer.crowdworks.jp/entry/crowdworks_frontend_2020",datetime:"2020-12-01T09:00:00.000Z"}]}}},l=(n(424),n(5)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"presentations","aria-labelledby":"presentations_heading"}},[n("h2",{attrs:{id:"presentations_heading"}},[t._v("\n    "+t._s(t.$t("heading.presentations.title"))+"\n  ")]),t._v(" "),"ja"!==this.$i18n.locale?[n("em",[t._v(t._s(t.$t("onlyJPText")))])]:t._e(),t._v(" "),n("h3",{attrs:{id:"presentations-stage"}},[t._v("\n    "+t._s(t.$t("heading.presentations.stage"))+"\n  ")]),t._v(" "),n("global-slide-list",{attrs:{listArray:t.listStage}}),t._v(" "),n("h3",{attrs:{id:"presentations-write"}},[t._v("\n    "+t._s(t.$t("heading.presentations.write"))+"\n  ")]),t._v(" "),n("global-slide-list",{attrs:{listArray:t.listWrite}}),t._v(" "),n("i18n",{attrs:{tag:"p",path:"archivePage.externalLink"},scopedSlots:t._u([{key:"title",fn:function(){return[n("a",{attrs:{href:"https://archives.yamanoku.net",target:"_blank",rel:"noopener"}},[t._v(t._s(t.$t("archivePage.title"))),n("open-new-icon")],1)]},proxy:!0}])})],2)}),[],!1,null,"01a5ff8a",null);e.default=component.exports;installComponents(component,{GlobalSlideList:n(419).default})}}]);