(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{240:function(e,t,n){"use strict";n.r(t);var o=n(4),component=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{attrs:{"aria-label":e.$t("multilingual")}},[n("h2",{attrs:{id:"local-switching"}},[e._v(e._s(e.$t("multilingual")))]),e._v(" "),n("ul",{attrs:{role:"list"}},e._l(e.$i18n.locales,(function(t){return n("li",{key:t.code,attrs:{role:"listitem"}},[n("nuxt-link",{attrs:{lang:t.code,to:e.switchLocalePath(t.code)}},[e._v(e._s(t.name))])],1)})),0)])}),[],!1,null,null,null);t.default=component.exports},241:function(e,t,n){"use strict";t.a={asyncData:function(e){return{baseName:e.env.baseName,baseDesc:e.env.baseDesc,baseUrl:e.env.baseUrl,baseOgp:e.env.baseOgp}},head:function(){var head={meta:[],bodyAttrs:{}};if(this.meta.title){var title="".concat(this.meta.title," - yamanoku.net");head.title=title,head.meta.push({hid:"og:title",property:"og:title",content:title})}return this.meta.description?(head.meta.push({hid:"description",name:"description",content:this.meta.description}),head.meta.push({hid:"og:description",property:"og:description",content:this.meta.description})):!this.meta.description&&this.meta.title&&(head.meta.push({hid:"description",name:"description",content:this.baseDesc}),head.meta.push({hid:"og:description",property:"og:description",content:this.baseDesc})),this.meta.type?head.meta.push({hid:"og:type",property:"og:type",content:this.meta.type}):"/"===this.$route.path&&head.meta.push({hid:"og:type",property:"og:type",content:"website"}),this.meta.image&&head.meta.push({hid:"og:image",property:"og:image",content:this.meta.image}),head.bodyAttrs.class=this.$store.state.rhythm.toggleRhythm?"is-rhythm":"",head}}},246:function(e,t,n){e.exports=n.p+"img/product-about-accessibility-with-vuejs.ca3f8e8.webp"},247:function(e,t,n){e.exports=n.p+"img/product-about-accessibility-with-vuejs.e1a8517.png"},248:function(e,t,n){e.exports=n.p+"img/product-web-accessibility-for-beginner.a22bc48.webp"},249:function(e,t,n){e.exports=n.p+"img/product-web-accessibility-for-beginner.06e9f6f.jpg"},250:function(e,t,n){var content=n(266);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("0f69512a",content,!0,{sourceMap:!1})},251:function(e,t,n){var content=n(274);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("40227180",content,!0,{sourceMap:!1})},252:function(e,t,n){"use strict";n.r(t);var o={props:{feedback:{type:Object,required:!0}},data:function(){return{gitHubLink:"https://github.com/yamanoku/yamanoku.github.io/issues/new?title=".concat(this.feedback.gitHubTitle,"&labels=document,feedback&body=URL：https://yamanoku.net").concat(this.feedback.routePath,"%0A").concat(this.$t("feedback.github.link")),twitterLink:"https://twitter.com/share?url=https://yamanoku.net".concat(this.feedback.routePath,"&text=@yamanoku")}}},r=n(4),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("details",[n("summary",[e._v(e._s(e.$t("details.summary_feedback")))]),e._v(" "),n("ul",{attrs:{role:"list"}},[n("li",{attrs:{role:"listitem"}},[n("a",{attrs:{href:e.gitHubLink,target:"_blank",rel:"noopener"}},[e._v("\n        "+e._s(this.$t("feedback.github.title"))+"\n        "),n("open-new-icon")],1)]),e._v(" "),n("li",{attrs:{role:"listitem"}},[n("a",{attrs:{href:e.twitterLink,target:"_blank",rel:"noopener"}},[e._v("\n        "+e._s(this.$t("feedback.twitter.title"))+"\n        "),n("open-new-icon")],1)])])])}),[],!1,null,null,null);t.default=component.exports},265:function(e,t,n){"use strict";var o=n(250);n.n(o).a},266:function(e,t,n){(t=n(22)(!1)).push([e.i,"img{height:auto}a[target=_blank] svg{width:12px;height:12px;margin:0 0 -1px 4px}a[target=_blank] svg .open_new-1{fill:none}a[target=_blank] svg .open_new-2{fill:var(--black)}@media (prefers-color-scheme:dark){a[target=_blank] svg .open_new-2{fill:var(--white)}}",""]),e.exports=t},267:function(e,t,n){e.exports=n.p+"img/vue-a11y-bio-photo-okuto.cede6e8.webp"},268:function(e,t,n){e.exports=n.p+"img/vue-a11y-bio-photo-okuto.a601127.jpg"},269:function(e,t,n){e.exports=n.p+"img/vue-a11y-vuea11ycom.391e897.webp"},270:function(e,t,n){e.exports=n.p+"img/vue-a11y-vuea11ycom.a1d0c1a.png"},271:function(e,t,n){e.exports=n.p+"img/vue-a11y-vueaxe.34963f1.webp"},272:function(e,t,n){e.exports=n.p+"img/vue-a11y-vueaxe.deb8d6a.png"},273:function(e,t,n){"use strict";var o=n(251);n.n(o).a},274:function(e,t,n){(t=n(22)(!1)).push([e.i,"code:not(.hljs){line-height:1;padding:0}iframe.vue-accessible-modal{width:100%;height:500px;border:0;border-radius:4px;overflow:hidden}",""]),e.exports=t},290:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{buttonMarkupBefore:'\n        <template>\n          <div role="button" tabindex="0" @click="handleClick" @keyup="handleKeyUp">button</div>\n        </template>\n      ',buttonMarkupAfter:'\n        <template>\n          <button type="button">button</button>\n        </template>\n      ',nuxtJS:"\n        module.exports = {\n            head: {\n              htmlAttrs: {\n                lang: 'ja'\n              }\n            }\n        }\n      ",vueAxeInstall:"\n        # NPM\n        $ npm install -D axe-core vue-axe\n\n        # Yarn\n        $ yarn add -D axe-core vue-axe\n      ",vueAxeSetting:"\n        import Vue from 'vue'\n\n        if (process.env.NODE_ENV !== 'production') { // development environment\n          const VueAxe = require('vue-axe').default\n          const AXE_LOCALE_JA = require('axe-core/locales/ja.json') // locale setting\n\n          Vue.use(VueAxe, {\n            config: {\n              locale: AXE_LOCALE_JA\n            },\n            clearConsoleOnUpdate: false // Clears the console each time vue-axe runs\n          })\n        }\n      ",eslintEmoji:'\n        \x3c!-- Fail --\x3e\n        <span>🐼</span>\n        \x3c!-- Good --\x3e\n        <span role="img" aria-label="Panda">🐼</span>\n      '}}},r=(n(273),n(4)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{attrs:{id:"web-accessibility-notes:about-accessibility-with-vuejs"}},[o("h2",[e._v(e._s(e.$t("vueA11yPage.heading.a11yNote")))]),e._v(" "),o("p",[e._v("\n    "+e._s(e.$t("vueA11yPage.a11yNote.desc01"))+"\n  ")]),e._v(" "),o("i18n",{attrs:{tag:"h3",path:"vueA11yPage.subHeading.a11yNote.1"},scopedSlots:e._u([{key:"div",fn:function(){return[o("code",[e._v("div")])]},proxy:!0}])}),e._v(" "),o("i18n",{attrs:{tag:"p",path:"vueA11yPage.a11yNote.desc02"},scopedSlots:e._u([{key:"strong01",fn:function(){return[o("strong",[e._v(e._s(e.$t("vueA11yPage.a11yNote.strong01")))])]},proxy:!0},{key:"div",fn:function(){return[o("code",[e._v("div")])]},proxy:!0},{key:"span",fn:function(){return[o("code",[e._v("span")])]},proxy:!0}])}),e._v(" "),o("blockquote",[o("p",[e._v("\n      "+e._s(e.$t("vueA11yPage.a11yNote.quote01"))+"\n    ")]),e._v(" "),o("a",{attrs:{href:e.$t("vueA11yPage.a11yNote.quote02.link"),target:"_blank",rel:"noopener"}},[e._v(e._s(e.$t("vueA11yPage.a11yNote.quote02.text"))),o("open-new-icon")],1)]),e._v(" "),o("i18n",{attrs:{tag:"p",path:"vueA11yPage.a11yNote.desc03"},scopedSlots:e._u([{key:"div",fn:function(){return[o("code",[e._v("div")])]},proxy:!0}])}),e._v(" "),o("highlight-code",{attrs:{lang:"html"}},[e._v(e._s(e.buttonMarkupBefore))]),e._v(" "),o("i18n",{attrs:{tag:"p",path:"vueA11yPage.a11yNote.desc04"},scopedSlots:e._u([{key:"button",fn:function(){return[o("code",[e._v("button")])]},proxy:!0}])}),e._v(" "),o("highlight-code",{attrs:{lang:"html"}},[e._v(e._s(e.buttonMarkupAfter))]),e._v(" "),o("h3",[e._v(e._s(e.$t("vueA11yPage.subHeading.a11yNote.2")))]),e._v(" "),o("p",[e._v("\n    "+e._s(e.$t("vueA11yPage.a11yNote.desc05"))+"\n  ")]),e._v(" "),o("p",[e._v("\n    "+e._s(e.$t("vueA11yPage.a11yNote.desc06"))+"\n  ")]),e._v(" "),o("p",[e._v("\n    "+e._s(e.$t("vueA11yPage.a11yNote.desc07"))+"\n  ")]),e._v(" "),o("a",{attrs:{href:"https://codesandbox.io/s/vue-accessible-modal-9m474]",target:"_blank",rel:"noopener",lang:"en"}},[e._v("vue-accessible-modal - CodeSandbox"),o("open-new-icon")],1),e._v(" "),o("h3",[e._v(e._s(e.$t("vueA11yPage.subHeading.a11yNote.3")))]),e._v(" "),o("i18n",{attrs:{tag:"p",path:"vueA11yPage.a11yNote.desc08"},scopedSlots:e._u([{key:"abbr01",fn:function(){return[o("abbr",[e._v(e._s(e.$t("vueA11yPage.a11yNote.abbr01")))])]},proxy:!0}])}),e._v(" "),o("i18n",{attrs:{tag:"p",path:"vueA11yPage.a11yNote.desc09"},scopedSlots:e._u([{key:"ariaLive",fn:function(){return[o("code",[e._v("aria-live")])]},proxy:!0},{key:"vueAnnouncer",fn:function(){return[o("a",{attrs:{href:"https://github.com/vue-a11y/vue-announcer",target:"_blank",rel:"noopener",lang:"en"}},[e._v("vue-announcer"),o("open-new-icon")],1)]},proxy:!0}])}),e._v(" "),o("h3",[e._v(e._s(e.$t("vueA11yPage.subHeading.a11yNote.4")))]),e._v(" "),o("i18n",{attrs:{tag:"p",path:"vueA11yPage.a11yNote.desc10"},scopedSlots:e._u([{key:"nuxtConfigJs",fn:function(){return[o("code",[e._v("nuxt.config.js")])]},proxy:!0},{key:"htmlAttrs",fn:function(){return[o("code",[e._v("htmlAttrs")])]},proxy:!0}])}),e._v(" "),o("highlight-code",{attrs:{lang:"js"}},[e._v(e._s(e.nuxtJS))]),e._v(" "),o("i18n",{attrs:{tag:"p",path:"vueA11yPage.a11yNote.desc11"},scopedSlots:e._u([{key:"en",fn:function(){return[o("code",[e._v("en")])]},proxy:!0}])}),e._v(" "),o("i18n",{attrs:{tag:"p",path:"vueA11yPage.a11yNote.desc12"},scopedSlots:e._u([{key:"small01",fn:function(){return[o("small",[e._v(e._s(e.$t("vueA11yPage.a11yNote.small01")))])]},proxy:!0}])}),e._v(" "),o("h3",[e._v(e._s(e.$t("vueA11yPage.subHeading.a11yNote.5")))]),e._v(" "),o("h4",{attrs:{lang:"en"}},[e._v("vue-axe")]),e._v(" "),o("i18n",{attrs:{tag:"p",path:"vueA11yPage.a11yNote.desc13"},scopedSlots:e._u([{key:"axeCore",fn:function(){return[o("a",{attrs:{href:"https://github.com/dequelabs/axe-core",target:"_blank",rel:"noopener",lang:"en"}},[e._v("axe-core"),o("open-new-icon")],1)]},proxy:!0},{key:"LightHouse",fn:function(){return[o("a",{attrs:{href:"https://developers.google.com/web/tools/lighthouse/",target:"_blank",rel:"noopener",lang:"en"}},[e._v("Lighthouse"),o("open-new-icon")],1)]},proxy:!0}])}),e._v(" "),o("figure",[o("picture",[o("source",{attrs:{srcset:n(271),type:"image/webp"}}),e._v(" "),o("img",{attrs:{src:n(272),height:"96",alt:e.$t("vueA11yPage.a11yNote.imgAlt01")}})])]),e._v(" "),o("p",[e._v(e._s(e.$t("vueA11yPage.a11yNote.desc14")))]),e._v(" "),o("highlight-code",[e._v(e._s(e.vueAxeInstall))]),e._v(" "),o("highlight-code",{attrs:{lang:"js"}},[e._v(e._s(e.vueAxeSetting))]),e._v(" "),o("h4",{attrs:{lang:"en"}},[e._v("Storybook")]),e._v(" "),o("i18n",{attrs:{tag:"p",path:"vueA11yPage.a11yNote.desc15"},scopedSlots:e._u([{key:"storybookAddonA11y",fn:function(){return[o("a",{attrs:{href:"https://www.npmjs.com/package/@storybook/addon-a11y",target:"_blank",rel:"noopener"}},[e._v("storybook-addon-a11y"),o("open-new-icon")],1)]},proxy:!0}])}),e._v(" "),o("figure",[o("img",{attrs:{src:"https://raw.githubusercontent.com/storybookjs/storybook/HEAD/addons/a11y/docs/screenshot.png",height:"360",alt:e.$t("vueA11yPage.a11yNote.imgAlt02")}})]),e._v(" "),o("h4",{attrs:{lang:"en"}},[e._v("eslint-plugin-vuejs-accessibility")]),e._v(" "),o("p",[e._v(e._s(e.$t("vueA11yPage.a11yNote.desc16")))]),e._v(" "),o("i18n",{attrs:{tag:"p",path:"vueA11yPage.a11yNote.desc17"},scopedSlots:e._u([{key:"img",fn:function(){return[o("code",[e._v("img")])]},proxy:!0},{key:"alt",fn:function(){return[o("code",[e._v("alt")])]},proxy:!0},{key:"label",fn:function(){return[o("code",[e._v("label")])]},proxy:!0}])}),e._v(" "),o("highlight-code",{attrs:{lang:"html"}},[e._v(e._s(e.eslintEmoji))]),e._v(" "),o("p",[e._v(e._s(e.$t("vueA11yPage.a11yNote.desc18")))]),e._v(" "),o("h4",[e._v(e._s(e.$t("vueA11yPage.subHeading.a11yNote.test.4")))]),e._v(" "),o("p",[e._v(e._s(e.$t("vueA11yPage.a11yNote.desc19")))]),e._v(" "),o("a",{attrs:{href:"https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/",target:"_blank",rel:"noopener",lang:"en"}},[e._v("What we found when we tested tools on the world’s least-accessible\n    webpage - Accessibility in government"),o("open-new-icon")],1),e._v(" "),o("p",[e._v(e._s(e.$t("vueA11yPage.a11yNote.desc20")))]),e._v(" "),o("i18n",{attrs:{tag:"p",path:"vueA11yPage.a11yNote.desc21"},scopedSlots:e._u([{key:"abbr02",fn:function(){return[o("abbr",{attrs:{lang:"en"}},[e._v("Web Content Accessibility Guidelines")])]},proxy:!0}])}),e._v(" "),o("a",{attrs:{href:"https://waic.jp/docs/WCAG21/",target:"_blank",rel:"noopener",lang:"en"}},[e._v("Web Content Accessibility Guidelines (WCAG) 2.1"),o("open-new-icon")],1),e._v(" "),o("p",[e._v(e._s(e.$t("vueA11yPage.a11yNote.desc22")))]),e._v(" "),o("a",{attrs:{href:"https://openameba.github.io/a11y-guidelines/",target:"_blank",rel:"noopener",lang:"en"}},[e._v("Ameba Accessibility Guidelines"),o("open-new-icon")],1)],1)}),[],!1,null,null,null);t.default=component.exports},294:function(e,t,n){"use strict";n.r(t);var o=n(4),component=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{attrs:{id:"bio:about-accessibility-with-vuejs"}},[o("h2",[e._v(e._s(e.$t("vueA11yPage.heading.bio")))]),e._v(" "),o("p",[o("picture",[o("source",{attrs:{srcset:n(267),type:"image/webp"}}),e._v(" "),o("img",{attrs:{src:n(268),alt:e.$t("prefixAlt.photo")+e.$t("vueA11yPage.bio.photoAlt")}})])]),e._v(" "),o("i18n",{attrs:{tag:"p",path:"vueA11yPage.bio.desc01"},scopedSlots:e._u([{key:"small01",fn:function(){return[o("small",[e._v("\n        "+e._s(e.$t("vueA11yPage.bio.small01"))+"\n      ")])]},proxy:!0}])}),e._v(" "),o("p",[e._v("\n    "+e._s(e.$t("vueA11yPage.bio.desc02"))+"\n  ")]),e._v(" "),o("p",[e._v("\n    "+e._s(e.$t("vueA11yPage.bio.desc03"))+"\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports},296:function(e,t,n){"use strict";n.r(t);var o=n(4),component=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{attrs:{id:"book:about-accessibility-with-vuejs"}},[o("h2",[e._v(e._s(e.$t("vueA11yPage.heading.book")))]),e._v(" "),o("h3",[e._v(e._s(e.$t("vueA11yPage.subHeading.book")))]),e._v(" "),o("figure",[o("picture",[o("source",{attrs:{srcset:n(248),type:"image/webp"}}),e._v(" "),o("img",{attrs:{src:n(249),alt:e.$t("prefixAlt.photo")+e.$t("product.wafb.title")}})]),e._v(" "),o("figcaption",[o("p",[e._v("\n        "+e._s(e.$t("vueA11yPage.book.desc01"))+"\n      ")]),e._v(" "),o("p",[e._v("\n        "+e._s(e.$t("vueA11yPage.book.desc02"))+"\n      ")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://booth.pm/ja/items/1044446",target:"_blank",rel:"noopener"}},[e._v("これからはじめるwebアクセシビリティ - こんのいぬ -\n            BOOTH"),o("open-new-icon")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://note.mu/yamanoku/n/n3487a344ff84",target:"_blank",rel:"noopener"}},[e._v("「これからはじめるwebアクセシビリティ」をnoteにて販売します｜Okuto\n            Oyama｜note"),o("open-new-icon")],1)])]),e._v(" "),o("p",[e._v("\n        "+e._s(e.$t("vueA11yPage.book.desc03"))+"\n      ")]),e._v(" "),o("a",{attrs:{href:"https://github.com/yamanoku/accessibility_book-issues",target:"_blank",rel:"noopener"}},[e._v("yamanoku/accessibility_book-issues:\n        「これからはじめるwebアクセシビリティ」へのFB専用リポジトリ"),o("open-new-icon")],1)])])])}),[],!1,null,null,null);t.default=component.exports},301:function(e,t,n){"use strict";n.r(t);var o=n(4),component=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"web-accessibility:about-accessibility-with-vuejs"}},[n("h2",[e._v(e._s(e.$t("vueA11yPage.heading.webA11y")))]),e._v(" "),n("h3",[e._v(e._s(e.$t("vueA11yPage.subHeading.webA11y.1")))]),e._v(" "),n("i18n",{attrs:{tag:"p",path:"vueA11yPage.webA11y.desc01"},scopedSlots:e._u([{key:"A11Y",fn:function(){return[n("span",{attrs:{lang:"en"}},[e._v("Accessibility")])]},proxy:!0}])}),e._v(" "),n("p",[e._v(e._s(e.$t("vueA11yPage.webA11y.desc02")))]),e._v(" "),n("blockquote",[n("p",[e._v(e._s(e.$t("vueA11yPage.webA11y.quote01")))]),e._v(" "),n("a",{attrs:{href:e.$t("vueA11yPage.webA11y.link01.link"),target:"_blank",rel:"noopener"}},[e._v(e._s(e.$t("vueA11yPage.webA11y.link01.text"))),n("open-new-icon")],1)]),e._v(" "),n("h3",[e._v(e._s(e.$t("vueA11yPage.subHeading.webA11y.2")))]),e._v(" "),n("p",[e._v(e._s(e.$t("vueA11yPage.webA11y.desc03")))]),e._v(" "),n("p",[e._v(e._s(e.$t("vueA11yPage.webA11y.desc04")))]),e._v(" "),n("p",[e._v(e._s(e.$t("vueA11yPage.webA11y.desc05")))]),e._v(" "),n("figure",[n("img",{attrs:{src:"https://o.aolcdn.com/dims-global/dims3/GLOB/resize/1200x577/quality/80/https://techcrunch.com/wp-content/uploads/2019/05/live-caption.jpg",height:"480",alt:e.$t("vueA11yPage.webA11y.imgAlt01"),loading:"lazy"}}),e._v(" "),n("figcaption",[n("a",{attrs:{href:e.$t("vueA11yPage.webA11y.link02.link"),target:"_blank",rel:"noopener"}},[e._v(e._s(e.$t("vueA11yPage.webA11y.link02.text"))),n("open-new-icon")],1)])]),e._v(" "),n("p",[e._v(e._s(e.$t("vueA11yPage.webA11y.desc06")))]),e._v(" "),n("h3",[e._v(e._s(e.$t("vueA11yPage.subHeading.webA11y.3")))]),e._v(" "),n("p",[e._v(e._s(e.$t("vueA11yPage.webA11y.desc07")))]),e._v(" "),n("p",[e._v(e._s(e.$t("vueA11yPage.webA11y.desc08")))])],1)}),[],!1,null,null,null);t.default=component.exports},302:function(e,t,n){"use strict";n.r(t);var o=n(4),component=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{attrs:{id:"vuejs-and-web-accessibility:about-accessibility-with-vuejs"}},[o("h2",[e._v(e._s(e.$t("vueA11yPage.heading.vueA11y")))]),e._v(" "),o("p",[e._v("\n    "+e._s(e.$t("vueA11yPage.vueA11y.desc01"))+"\n  ")]),e._v(" "),o("h3",[e._v(e._s(e.$t("vueA11yPage.subHeading.vueA11y")))]),e._v(" "),o("p",[e._v(e._s(e.$t("vueA11yPage.vueA11y.desc02")))]),e._v(" "),o("p",[e._v(e._s(e.$t("vueA11yPage.vueA11y.desc03")))]),e._v(" "),o("p",[e._v(e._s(e.$t("vueA11yPage.vueA11y.desc04")))]),e._v(" "),o("blockquote",{attrs:{lang:"en"}},[e._m(0),e._v(" "),o("a",{attrs:{href:"https://vuejs.org/v2/guide/components.html#Listening-to-Child-Components-Events",target:"_blank",rel:"noopener"}},[e._v("Components Basics — Listening-to-Child-Components-Events —\n      Vue.js"),o("open-new-icon")],1)]),e._v(" "),o("blockquote",{attrs:{lang:"en"}},[e._m(1),e._v(" "),o("a",{attrs:{href:"https://vuejs.org/v2/cookbook/editable-svg-icons.html#Base-Example",target:"_blank",rel:"noopener"}},[e._v("Editable SVG Icon Systems — Base Example — Vue.js"),o("open-new-icon")],1)]),e._v(" "),o("p",[e._v(e._s(e.$t("vueA11yPage.vueA11y.desc05")))]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:e.$t("vueA11yPage.vueA11y.listitem01.link"),target:"_blank",rel:"noopener"}},[e._v(e._s(e.$t("vueA11yPage.vueA11y.listitem01.text"))),o("open-new-icon")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"https://angular.io/guide/accessibility",target:"_blank",rel:"noopener",lang:"en"}},[e._v("Angular - Accessibility in Angular"),o("open-new-icon")],1)])]),e._v(" "),o("p",[e._v(e._s(e.$t("vueA11yPage.vueA11y.desc06")))]),e._v(" "),o("a",{attrs:{href:"https://github.com/vuejs/vuejs.org/issues/974",target:"_blank",rel:"noopener",lang:"en"}},[e._v("Accessibility docs · Issue #974 · vuejs/vuejs.org"),o("open-new-icon")],1),e._v(" "),o("p",[e._v(e._s(e.$t("vueA11yPage.vueA11y.desc07")))]),e._v(" "),o("a",{attrs:{href:"https://github.com/callumacrae/vuejs.org/blob/a11y-docs/src/v2/guide/accessibility.md",target:"_blank",rel:"noopener",lang:"en"}},[e._v("vuejs.org/accessibility.md at a11y-docs ·\n    callumacrae/vuejs.org"),o("open-new-icon")],1),e._v(" "),o("h3",{attrs:{lang:"en"}},[e._v("Vue a11y")]),e._v(" "),o("p",[e._v(e._s(e.$t("vueA11yPage.vueA11y.desc08")))]),e._v(" "),o("figure",[o("picture",[o("source",{attrs:{srcset:n(269),type:"image/webp"}}),e._v(" "),o("img",{attrs:{src:n(270),height:"360",alt:e.$t("vueA11yPage.vueA11y.imgAlt01"),loading:"lazy"}})]),e._v(" "),o("figcaption",[o("a",{attrs:{href:"https://vue-a11y.com/",target:"_blank",rel:"noopener",lang:"en"}},[e._v("Vue a11y"),o("open-new-icon")],1)])]),e._v(" "),o("p",[e._v(e._s(e.$t("vueA11yPage.vueA11y.desc09")))])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n      As we develop our <blog-post> component, some features may require\n      communicating back up to the parent. For example, we may decide to\n      include an\n      "),t("b",[this._v("accessibility")]),this._v(" feature to enlarge the text of blog posts, while\n      leaving the rest of the page its default size:\n    ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n      You can use this base icon as is- the only thing you might need to\n      update is the viewBox depending on the viewBox of your icons. In the\n      base, we’re making the width, height, iconColor, and name of the icon\n      props so that it can be dynamically updated with props. The name will be\n      used for both the <title> content and its id for\n      "),t("b",[this._v("accessibility")]),this._v(".\n    ")])}],!1,null,null,null);t.default=component.exports},303:function(e,t,n){"use strict";n.r(t);var o=n(4),component=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{attrs:{id:"title:about-accessibility-with-vuejs"}},[o("h1",{attrs:{id:"heading:about-accessibility-with-vuejs"}},[e._v("\n    "+e._s(e.$t("vueA11yPage.title"))+"\n  ")]),e._v(" "),o("figure",{attrs:{"aria-labelledby":"heading:about-accessibility-with-vuejs"}},[o("picture",[o("source",{attrs:{srcset:n(246),type:"image/webp"}}),e._v(" "),o("img",{attrs:{src:n(247),alt:e.$t("prefixAlt.photo")+e.$t("product.vueA11yPage.title")}})])]),e._v(" "),o("i18n",{attrs:{tag:"p",path:"vueA11yPage.titleSection.desc01"},scopedSlots:e._u([{key:"link01",fn:function(){return[o("a",{attrs:{href:"https://adventar.org/calendars/3994",target:"_blank",rel:"noopener"}},[e._v("\n        "+e._s(e.$t("vueA11yPage.titleSection.link01"))+"\n        "),o("open-new-icon")],1)]},proxy:!0}])}),e._v(" "),o("p",[e._v("\n    "+e._s(e.$t("vueA11yPage.titleSection.desc02"))+"\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports},304:function(e,t,n){"use strict";n.r(t);var o=n(4),component=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"in-conclusion:about-accessibility-with-vuejs"}},[n("h2",[e._v(e._s(e.$t("vueA11yPage.heading.conclusion")))]),e._v(" "),n("p",[e._v("\n    "+e._s(e.$t("vueA11yPage.conclusion.desc01"))+"\n  ")]),e._v(" "),n("figure",[n("img",{staticStyle:{"max-width":"220px"},attrs:{src:"https://live.staticflickr.com/8221/8314288381_ebc4c1b074_c.jpg",width:"220",height:"240",alt:e.$t("vueA11yPage.conclusion.imgAlt01")}}),e._v(" "),n("figcaption",[n("a",{attrs:{href:"https://www.w3.org/History/1989/proposal.html",target:"_blank",rel:"noopener"}},[e._v("The original proposal of the WWW, HTMLized"),n("open-new-icon")],1)])]),e._v(" "),n("blockquote",[n("p",{attrs:{lang:"en"}},[e._v("\n      The power of the Web is in its universality. Access by everyone\n      regardless of disability is an essential aspect.\n    ")]),e._v(" "),n("a",{attrs:{href:"https://www.w3.org/Press/IPO-announce/",target:"_blank",rel:"noopener",lang:"en"}},[e._v("Press Release: W3C Launches International Program Office for\n      WAI"),n("open-new-icon")],1)]),e._v(" "),n("p",[e._v("\n    "+e._s(e.$t("vueA11yPage.conclusion.desc02"))+"\n  ")]),e._v(" "),n("blockquote",[n("p",{attrs:{lang:"en"}},[e._v("\n      Whatever the device you use for getting your information out, it should\n      be the same information.\n    ")]),e._v(" "),n("a",{attrs:{href:"https://www.wired.com/1999/10/interview-with-the-webs-creator/",target:"_blank",rel:"noopener",lang:"en"}},[e._v("Interview with the Web’s Creator | WIRED"),n("open-new-icon")],1)]),e._v(" "),n("p",[e._v("\n    "+e._s(e.$t("vueA11yPage.conclusion.desc03"))+"\n  ")]),e._v(" "),n("p",[e._v("\n    "+e._s(e.$t("vueA11yPage.conclusion.desc04"))+"\n  ")]),e._v(" "),n("i18n",{attrs:{tag:"p",path:"vueA11yPage.conclusion.desc05"},scopedSlots:e._u([{key:"link01",fn:function(){return[n("a",{attrs:{href:"https://www.digima-japan.com/knowhow/world/15167.php",target:"_blank",rel:"noopener"}},[e._v("\n        "+e._s(e.$t("vueA11yPage.conclusion.link01"))+"\n        "),n("open-new-icon")],1)]},proxy:!0}])}),e._v(" "),n("p",[e._v("\n    "+e._s(e.$t("vueA11yPage.conclusion.desc06"))+"\n  ")]),e._v(" "),n("blockquote",[n("p",[e._v("\n      "+e._s(e.$t("vueA11yPage.conclusion.quote01"))+"\n    ")]),e._v(" "),n("p",[e._v("\n      "+e._s(e.$t("vueA11yPage.conclusion.quote02"))+"\n    ")]),e._v(" "),n("p",[e._v("\n      "+e._s(e.$t("vueA11yPage.conclusion.quote03"))+"\n    ")]),e._v(" "),n("a",{attrs:{href:e.$t("vueA11yPage.conclusion.quote04.link"),target:"_blank",rel:"noopener"}},[e._v("\n      "+e._s(e.$t("vueA11yPage.conclusion.quote04.text"))+"\n      "),n("open-new-icon")],1)]),e._v(" "),n("h3",[e._v(e._s(e.$t("vueA11yPage.subHeading.conclusion")))]),e._v(" "),n("p",[e._v("\n    "+e._s(e.$t("vueA11yPage.conclusion.desc07"))+"\n  ")]),e._v(" "),n("p",[e._v("\n    "+e._s(e.$t("vueA11yPage.conclusion.desc08"))+"\n  ")]),e._v(" "),n("blockquote",[n("p",{attrs:{lang:"ja"}},[e._v("\n      “Start Small, Start\n      Now（小さく初めていこう、でも、できることから今やりましょう）”と呼びかけていきたいし、自分自身も肝に銘じておきたい。\n    ")]),e._v(" "),n("a",{attrs:{href:"https://code.kzakza.com/2019/03/start-small-start-now/",target:"_blank",rel:"noopener"}},[e._v('アクセシビリティは "Start Small, Start Now" でいこう |\n      kzakza'),n("open-new-icon")],1)]),e._v(" "),n("p",[e._v("\n    "+e._s(e.$t("vueA11yPage.conclusion.desc09"))+"\n  ")]),e._v(" "),n("p",[e._v("\n    "+e._s(e.$t("vueA11yPage.conclusion.desc10"))+"\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports},318:function(e,t,n){"use strict";n.r(t);var o={mixins:[n(241).a],data:function(){return{meta:{title:this.$t("vueA11yPage.title"),description:this.$t("vueA11yPage.description"),image:"https://yamanoku.net/ogp/ogp-vue-a11y@2x.png"},feedback:{gitHubTitle:this.$t("vueA11yPage.feedback.github.linkTitle"),routePath:this.$route.path}}}},r=(n(265),n(4)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{attrs:{role:"main",id:"main"}},[n("vuejs-accessibility-sections-title"),e._v(" "),n("vuejs-accessibility-sections-bio"),e._v(" "),n("vuejs-accessibility-sections-book"),e._v(" "),n("vuejs-accessibility-sections-web-accessibility"),e._v(" "),n("vuejs-accessibility-sections-vuejs-accessibility"),e._v(" "),n("vuejs-accessibility-sections-accessibility-notes"),e._v(" "),n("vuejs-accessibility-sections-conclusion"),e._v(" "),n("common-feedback-list",{attrs:{feedback:e.feedback}}),e._v(" "),n("nuxt-link",{attrs:{to:e.localePath({name:"index"})}},[e._v(e._s(e.$t("backTop")))]),e._v(" "),n("common-local-switch")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{VuejsAccessibilitySectionsTitle:n(303).default,VuejsAccessibilitySectionsBio:n(294).default,VuejsAccessibilitySectionsBook:n(296).default,VuejsAccessibilitySectionsWebAccessibility:n(301).default,VuejsAccessibilitySectionsVuejsAccessibility:n(302).default,VuejsAccessibilitySectionsAccessibilityNotes:n(290).default,VuejsAccessibilitySectionsConclusion:n(304).default,CommonFeedbackList:n(252).default,CommonLocalSwitch:n(240).default})}}]);