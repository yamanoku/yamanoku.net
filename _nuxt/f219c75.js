(window.webpackJsonp=window.webpackJsonp||[]).push([[7,3,4],{208:function(t,e,r){"use strict";r.r(e);r(210);var n={name:"GlobalHeadingComponent",props:{headingLevel:{type:Number,required:!0},headingText:{type:String,required:!0}},computed:{headline:function(){return"h"+this.headingLevel}}},l=r(5),component=Object(l.a)(n,(function(){var t=this;return(0,t._self._c)(t.headline,{tag:"component"},[t._v(t._s(t.headingText))])}),[],!1,null,null,null);e.default=component.exports},209:function(t,e,r){var content=r(215);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("24ac2230",content,!0,{sourceMap:!1})},210:function(t,e,r){"use strict";var n=r(7),l=r(42),o=r(43),c=r(107),d=r(78),f=r(12),h=r(62).f,m=r(63).f,_=r(16).f,v=r(211).trim,I="Number",y=n.Number,N=y,x=y.prototype,E=o(r(79)(x))==I,A="trim"in String.prototype,$=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var r,n,l,o=(e=A?e.trim():v(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,l=49;break;case 79:case 111:n=8,l=55;break;default:return+e}for(var code,c=e.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>l)return NaN;return parseInt(c,n)}}return+e};if(!y(" 0o1")||!y("0b1")||y("+0x1")){y=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof y&&(E?f((function(){x.valueOf.call(r)})):o(r)!=I)?c(new N($(e)),r,y):$(e)};for(var j,k=r(13)?h(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;k.length>w;w++)l(N,j=k[w])&&!l(y,j)&&_(y,j,m(N,j));y.prototype=x,x.constructor=y,r(19)(n,I,y)}},211:function(t,e,r){var n=r(4),l=r(44),o=r(12),c=r(212),d="["+c+"]",f=RegExp("^"+d+d+"*"),h=RegExp(d+d+"*$"),m=function(t,e,r){var l={},d=o((function(){return!!c[t]()||"​"!="​"[t]()})),f=l[t]=d?e(_):c[t];r&&(l[r]=f),n(n.P+n.F*d,"String",l)},_=m.trim=function(t,e){return t=String(l(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(h,"")),t};t.exports=m},212:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},213:function(t,e,r){"use strict";r.r(e);r(50);var n={props:{listArray:{type:Array,required:!0}},data:function(){return{listItem:this.listArray}},methods:{dateStirngReplace:function(t){return t.replace(/T.*$/,"").replace(/(-)/g,"/")}}},l=(r(214),r(5)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("ul",t._l(t.listItem,(function(r){return e("li",{key:r.index},[r.datetime?[e("span",{staticClass:"time"},[t._v(t._s(t.dateStirngReplace(r.datetime)))]),t._v("\n      -\n    ")]:t._e(),t._v(" "),r.isI18n?e("i18n",{attrs:{path:r.title}},[e("global-link-component",{attrs:{"link-object":r}})],1):r.url?[e("global-link-component",{attrs:{"link-object":r}})]:[t._v("\n      "+t._s(r.title)+"\n    ")]],2)})),0)}),[],!1,null,"b68c16c0",null);e.default=component.exports;installComponents(component,{GlobalLinkComponent:r(146).default})},214:function(t,e,r){"use strict";r(209)},215:function(t,e,r){var n=r(21)(!1);n.push([t.i,'.time[data-v-b68c16c0]{font-feature-settings:"tnum";font-variant-numeric:tabular-nums}',""]),t.exports=n},222:function(t,e,r){"use strict";r.r(e);var n={name:"IndexSectionsCareerInfo",data:function(){return{jobListItem:[{title:this.$t("jobs.frontendDesigner")},{title:this.$t("jobs.uiDesigner")}],careerListItem:[{title:this.$t("career.curriculumVitae"),url:"https://github.com/yamanoku/Curriculum-Vitae/blob/main/README.md",isExternal:!0,isGitHubLink:!0},{title:this.$t("career.wantedly"),url:"https://www.wantedly.com/id/okutooyama",isExternal:!0},{title:this.$t("career.lapras"),url:"https://lapras.com/public/ZQJMZYO",isExternal:!0},{title:this.$t("career.youtrust"),url:"https://youtrust.jp/users/57ea573ffca186c3b339f1739915f40b",isExternal:!0}]}}},l=r(5),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("section",{attrs:{id:"career","aria-labelledby":"career-heading"}},[e("global-heading-component",{attrs:{id:"career-heading","heading-level":2,"heading-text":t.$t("heading.career")}}),t._v(" "),e("p",[t._v(t._s(t.$t("career.desc01")))]),t._v(" "),e("p",[t._v(t._s(t.$t("career.desc02")))]),t._v(" "),e("p",[t._v(t._s(t.$t("career.desc03")))]),t._v(" "),e("p",[t._v(t._s(t.$t("career.desc04")))]),t._v(" "),e("h3",{attrs:{id:"job_heading"}},[t._v(t._s(t.$t("heading.job")))]),t._v(" "),e("global-list-component",{attrs:{"aria-labelledby":"job_heading","list-array":t.jobListItem}}),t._v(" "),e("global-heading-component",{attrs:{id:"related:career-heading","heading-level":3,"heading-text":t.$t("heading.relatedList")}}),t._v(" "),e("global-list-component",{attrs:{"aria-labelledby":"related:career-heading","list-array":t.careerListItem}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GlobalHeadingComponent:r(208).default,GlobalListComponent:r(213).default})}}]);