(window.webpackJsonp=window.webpackJsonp||[]).push([[11,4,6],{400:function(e,t,n){"use strict";n.r(t);n(401);var r={name:"GlobalHeadingComponent",props:{headingLevel:{type:Number,required:!0},headingText:{type:String,required:!0}},computed:{headline:function(){return"h"+this.headingLevel}}},l=n(8),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.headline,{tag:"component"},[e._v(e._s(e.headingText))])}),[],!1,null,null,null);t.default=component.exports},401:function(e,t,n){"use strict";var r=n(7),l=n(39),o=n(40),c=n(107),d=n(77),f=n(13),h=n(61).f,m=n(62).f,v=n(16).f,_=n(402).trim,E="Number",y=r.Number,k=y,A=y.prototype,T=o(n(78)(A))==E,I="trim"in String.prototype,x=function(e){var t=d(e,!1);if("string"==typeof t&&t.length>2){var n,r,l,o=(t=I?t.trim():_(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+t}for(var code,c=t.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>l)return NaN;return parseInt(c,r)}}return+t};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof y&&(T?f((function(){A.valueOf.call(n)})):o(n)!=E)?c(new k(x(t)),n,y):x(t)};for(var w,N=n(11)?h(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;N.length>C;C++)l(k,w=N[C])&&!l(y,w)&&v(y,w,m(k,w));y.prototype=A,A.constructor=y,n(19)(r,E,y)}},402:function(e,t,n){var r=n(5),l=n(45),o=n(13),c=n(403),d="["+c+"]",f=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),m=function(e,t,n){var l={},d=o((function(){return!!c[e]()||"​"!="​"[e]()})),f=l[e]=d?t(v):c[e];n&&(l[n]=f),r(r.P+r.F*d,"String",l)},v=m.trim=function(e,t){return e=String(l(e)),1&t&&(e=e.replace(f,"")),2&t&&(e=e.replace(h,"")),e};e.exports=m},403:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},422:function(e,t,n){"use strict";n.r(t);n(49);var r={props:{listArray:Array},data:function(){return{listItem:this.listArray}},methods:{dateStirngReplace:function(e){return e.replace(/T.*$/,"").replace(/(-)/g,"/")}}},l=n(8),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",e._l(e.listItem,(function(t){return n("li",{key:t.index},[t.datetime?[n("span",{staticClass:"time"},[e._v(e._s(e.dateStirngReplace(t.datetime)))]),e._v("\n      -\n    ")]:t.created_at?[n("span",{staticClass:"time"},[e._v(e._s(e.dateStirngReplace(t.created_at)))]),e._v("\n      -\n    ")]:e._e(),e._v(" "),n("a",{attrs:{href:t.url,target:"_blank",rel:"noopener"}},[e._v("\n      "+e._s(t.title)+"\n      "),n("external-link-icon")],1)],2)})),0)}),[],!1,null,null,null);t.default=component.exports},428:function(e,t,n){"use strict";n.r(t);var r=[{title:"アクセシブルなフロントエンド開発のこれまでとこれから",url:"https://speakerdeck.com/yamanoku/the-past-and-future-of-accessible-front-end-development",datetime:"2021-11-27T16:20:00.000Z"},{title:"HTML だけで UI を作る限界、あるいは無理なくユースケースと向き合っていくためには",url:"https://docs.google.com/presentation/d/e/2PACX-1vRfZCfZpjvKndrrHZYH4QQsMM8JwcRYCbYlgeIaJxEQdvz5BbWFx2pKv2ctZ1KT8CTztpC-hR1n6vIO/pub?start=false&loop=false&delayms=3000",datetime:"2021-09-15T21:38:00.000Z"},{title:"PWA版Twitterをスクリーンリーダー検証してみる",url:"https://scrapbox.io/yamanoku/PWA%E7%89%88Twitter%E3%82%92%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%83%AA%E3%83%BC%E3%83%80%E3%83%BC%E6%A4%9C%E8%A8%BC%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B",datetime:"2021-06-26T18:50:00.000Z"},{title:"これからもつづけるWebアクセシビリティ",url:"https://docs.google.com/presentation/d/e/2PACX-1vRIhRTjYc1yxxNRSE0-PbTHTyvSHh07pkuVapbek_-0wkYyF0scZ5XU0danIEky5YJToE0W3AwUCDXc/pub?start=false&loop=false&delayms=3000",datetime:"2021-01-12T19:30:00.000Z"}],l=[{title:"2021年オープンソースコントリビュート活動振り返り",url:"https://zenn.dev/yamanoku/articles/bd8d86ee79459b",datetime:"2021-12-30T10:00:00.000Z"},{title:"クラウドワークス #accessibility チャンネル で気になった話題 Pickup 2021年7〜12月編",url:"https://zenn.dev/yamanoku/scraps/d964d3efc75e09",datetime:"2021-12-14T00:00:00.000Z"},{title:"クラウドワークス #accessibility チャンネル で気になった話題 Pickup 2021年1〜6月編",url:"https://zenn.dev/yamanoku/scraps/6e4f4d5ed7563a",datetime:"2021-12-14T00:00:00.000Z"},{title:"crowdworks.jp のフロントエンド活動を振り返る 2021",url:"https://qiita.com/yamanoku/items/29a74ebf3d74b3017581",datetime:"2021-12-01T07:00:00.000Z"},{title:"markuplintをプロダクトに導入してみた",url:"https://engineer.crowdworks.jp/entry/using-markuplint",datetime:"2021-10-07T13:00:00.000Z"},{title:"生まれ変わったログインページにまつわるフロントエンド開発の話",url:"https://engineer.crowdworks.jp/entry/renewal-login",datetime:"2021-08-18T18:00:00.000Z"}],o={name:"IndexSectionsPresentations",data:function(){return{listStage:r,listWrite:l}}},c=n(8),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"presentations","aria-labelledby":"presentations_heading"}},[n("global-heading-component",{attrs:{id:"presentations_heading","heading-level":2,"heading-text":e.$t("heading.presentations.title")}}),e._v(" "),"ja"!==this.$i18n.locale?[n("em",[e._v(e._s(e.$t("onlyJPText")))])]:e._e(),e._v(" "),n("h3",{attrs:{id:"presentations-stage"}},[e._v("\n    "+e._s(e.$t("heading.presentations.stage"))+"\n  ")]),e._v(" "),n("global-slide-list",{attrs:{listArray:e.listStage}}),e._v(" "),n("global-heading-component",{attrs:{id:"presentations-write","heading-level":3,"heading-text":e.$t("heading.presentations.write")}}),e._v(" "),n("global-slide-list",{attrs:{listArray:e.listWrite}}),e._v(" "),n("i18n",{attrs:{tag:"p",path:"archivePage.externalLink"},scopedSlots:e._u([{key:"title",fn:function(){return[n("a",{attrs:{href:"https://archives.yamanoku.net",target:"_blank",rel:"noopener"}},[e._v(e._s(e.$t("archivePage.title"))),n("external-link-icon")],1)]},proxy:!0}])})],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{GlobalHeadingComponent:n(400).default,GlobalSlideList:n(422).default})}}]);