(window.webpackJsonp=window.webpackJsonp||[]).push([[32,2,3,4,5],{400:function(t,e,n){"use strict";n.r(e);n(401);var r={name:"GlobalHeadingComponent",props:{headingLevel:{type:Number,required:!0},headingText:{type:String,required:!0}},computed:{headline:function(){return"h"+this.headingLevel}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.headline,{tag:"component"},[t._v(t._s(t.headingText))])}),[],!1,null,null,null);e.default=component.exports},401:function(t,e,n){"use strict";var r=n(7),o=n(39),l=n(40),c=n(107),d=n(77),h=n(13),m=n(61).f,f=n(62).f,v=n(16).f,_=n(402).trim,y="Number",k=r.Number,x=k,w=k.prototype,N=l(n(78)(w))==y,$="trim"in String.prototype,A=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,l=(e=$?e.trim():_(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,h=c.length;i<h;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+e};if(!k(" 0o1")||!k("0b1")||k("+0x1")){k=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof k&&(N?h((function(){w.valueOf.call(n)})):l(n)!=y)?c(new x(A(e)),n,k):A(e)};for(var E,I=n(11)?m(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),L=0;I.length>L;L++)o(x,E=I[L])&&!o(k,E)&&v(k,E,f(x,E));k.prototype=w,w.constructor=k,n(19)(r,y,k)}},402:function(t,e,n){var r=n(5),o=n(45),l=n(13),c=n(403),d="["+c+"]",h=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),f=function(t,e,n){var o={},d=l((function(){return!!c[t]()||"​"!="​"[t]()})),h=o[t]=d?e(v):c[t];n&&(o[n]=h),r(r.P+r.F*d,"String",o)},v=f.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(h,"")),2&e&&(t=t.replace(m,"")),t};t.exports=f},403:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},404:function(t,e,n){var content=n(406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("73dcd60c",content,!0,{sourceMap:!1})},405:function(t,e,n){"use strict";n(404)},406:function(t,e,n){var r=n(20)(!1);r.push([t.i,"article[data-v-5ec0125a]{border:1px solid var(--y-arcticle-border-color);padding-top:var(--y-rhythm-3);padding-left:var(--y-rhythm-3);padding-right:var(--y-rhythm-3)}article[data-v-5ec0125a]:before{display:none}ul[data-v-5ec0125a]{margin-bottom:0}",""]),t.exports=r},409:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{donateLinkList:[{title:"GitHub Sponsors",url:"https://github.com/sponsors/yamanoku"},{title:"Stripe Payment Links",url:"https://buy.stripe.com/00gaEY1Eh5bE7VC8ww"},{title:"Buy me a coffee",url:"https://buymeacoffee.com/yamanoku"}]}}},o=(n(405),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{attrs:{id:"donate","aria-labelledby":"donate_heading"}},[n("div",[n("em",{attrs:{id:"donate_heading"}},[t._v("\n      "+t._s(t.$t("heading.donate"))+"\n    ")])]),t._v(" "),n("p",[t._v("\n    "+t._s(t.$t("donate.desc01"))+"\n  ")]),t._v(" "),n("ul",[t._l(t.donateLinkList,(function(e){return[n("li",{key:e.title},[n("a",{attrs:{href:e.url,target:"_blank",rel:"noopener"}},[t._v(t._s(e.title)),n("external-link-icon")],1)])]}))],2)])}),[],!1,null,"5ec0125a",null);e.default=component.exports},410:function(t,e,n){"use strict";n.r(e);var r=n(8),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{attrs:{"aria-label":t.$t("multilingual")}},[n("global-heading-component",{attrs:{id:"local-switching","heading-level":2,"heading-text":t.$t("multilingual")}}),t._v(" "),n("ul",t._l(t.$i18n.locales,(function(e){return n("li",{key:e.code},[n("nuxt-link",{attrs:{lang:e.code,to:t.switchLocalePath(e.code)}},[t._v(t._s(e.name))])],1)})),0)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalHeadingComponent:n(400).default})},411:function(t,e,n){"use strict";e.a={asyncData:function(t){return{baseName:t.env.baseName,baseDesc:t.env.baseDesc,baseUrl:t.env.baseUrl,baseOgp:t.env.baseOgp,baseOgpAlt:t.env.baseName}},head:function(){var head={meta:[],bodyAttrs:{}};if(this.meta.title){var title="".concat(this.meta.title," | yamanoku.net");head.title=title,head.meta.push({hid:"og:title",property:"og:title",content:title})}return this.meta.description?(head.meta.push({hid:"description",name:"description",content:this.meta.description}),head.meta.push({hid:"og:description",property:"og:description",content:this.meta.description})):!this.meta.description&&this.meta.title&&(head.meta.push({hid:"description",name:"description",content:this.baseDesc}),head.meta.push({hid:"og:description",property:"og:description",content:this.baseDesc})),this.meta.type?head.meta.push({hid:"og:type",property:"og:type",content:this.meta.type}):"/"===this.$route.path&&head.meta.push({hid:"og:type",property:"og:type",content:"website"}),this.meta.image&&(head.meta.push({hid:"og:image",property:"og:image",content:this.meta.image}),head.meta.push({hid:"og:image:alt",property:"og:image:alt",content:this.meta.imageAlt}),head.meta.push({hid:"twitter:image:alt",property:"twitter:image:alt",content:this.meta.imageAlt})),head}}},425:function(t,e,n){var content=n(438);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("346a5ecc",content,!0,{sourceMap:!1})},436:function(t,e,n){"use strict";n.r(e);var r={props:{feedback:{type:Object,required:!0}},data:function(){return{gitHubLink:"https://github.com/yamanoku/yamanoku.github.io/issues/new?title=".concat(this.feedback.gitHubTitle,"&labels=document,feedback&body=URL：https://yamanoku.net").concat(this.feedback.routePath,"%0A").concat(this.$t("feedback.github.link")),twitterLink:"https://twitter.com/share?url=https://yamanoku.net".concat(this.feedback.routePath,"&text=@yamanoku")}}},o=n(8),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("details",[n("summary",[t._v(t._s(t.$t("details.summary_feedback")))]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:t.gitHubLink,target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(this.$t("feedback.github.title"))+"\n        "),n("external-link-icon")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:t.twitterLink,target:"_blank",rel:"noopener"}},[t._v("\n        "+t._s(this.$t("feedback.twitter.title"))+"\n        "),n("external-link-icon")],1)])])])}),[],!1,null,null,null);e.default=component.exports},437:function(t,e,n){"use strict";n(425)},438:function(t,e,n){var r=n(20)(!1);r.push([t.i,"a[target=_blank] svg{width:12px;height:12px;margin:0 0 -1px 4px}a[target=_blank] svg .open_new-1{fill:none}a[target=_blank] svg .open_new-2{fill:var(--y-black-base)}@media (prefers-color-scheme:dark){a[target=_blank] svg .open_new-2{fill:var(--y-white-low)}}",""]),t.exports=r},454:function(t,e,n){"use strict";n.r(e);var r={mixins:[n(411).a],data:function(){return{meta:{title:this.$t("vueA11yPage2019.title"),description:this.$t("vueA11yPage2019.description"),image:"https://yamanoku.net/ogp/ogp-vue-a11y-2019@2x.png",imageAlt:this.$t("vueA11yPage2019.title")},feedback:{gitHubTitle:this.$t("vueA11yPage2019.feedback.github.linkTitle"),routePath:this.$route.path}}}},o=(n(437),n(8)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"main"}},[n("global-heading-component",{attrs:{"heading-level":1,"heading-text":t.$t("vueA11yPage2019.title")}}),t._v(" "),n("vuejs-accessibility-2019-title"),t._v(" "),n("global-local-switch"),t._v(" "),n("vuejs-accessibility-2019-sections-bio"),t._v(" "),n("vuejs-accessibility-2019-sections-book"),t._v(" "),n("vuejs-accessibility-2019-sections-web-accessibility"),t._v(" "),n("vuejs-accessibility-2019-sections-vue-accessibility"),t._v(" "),n("vuejs-accessibility-2019-sections-accessible-notes"),t._v(" "),n("vuejs-accessibility-2019-sections-conclusion"),t._v(" "),n("global-feedback-list",{attrs:{feedback:t.feedback}}),t._v(" "),n("hr"),t._v(" "),n("global-donate-component"),t._v(" "),n("nuxt-link",{attrs:{to:t.localePath({name:"index"})}},[t._v(t._s(t.$t("backHome")))])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalHeadingComponent:n(400).default,GlobalLocalSwitch:n(410).default,GlobalFeedbackList:n(436).default,GlobalDonateComponent:n(409).default})}}]);