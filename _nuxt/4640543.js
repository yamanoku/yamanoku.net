(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4],{400:function(e,t,n){"use strict";n.r(t);n(401);var r={name:"GlobalHeadingComponent",props:{headingLevel:{type:Number,required:!0},headingText:{type:String,required:!0}},computed:{headline:function(){return"h"+this.headingLevel}}},l=n(8),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.headline,{tag:"component"},[e._v(e._s(e.headingText))])}),[],!1,null,null,null);t.default=component.exports},401:function(e,t,n){"use strict";var r=n(7),l=n(39),o=n(40),c=n(107),f=n(77),d=n(13),h=n(61).f,v=n(62).f,N=n(16).f,m=n(402).trim,I="Number",_=r.Number,E=_,x=_.prototype,A=o(n(78)(x))==I,w="trim"in String.prototype,S=function(e){var t=f(e,!1);if("string"==typeof t&&t.length>2){var n,r,l,o=(t=w?t.trim():m(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+t}for(var code,c=t.slice(2),i=0,d=c.length;i<d;i++)if((code=c.charCodeAt(i))<48||code>l)return NaN;return parseInt(c,r)}}return+t};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof _&&(A?d((function(){x.valueOf.call(n)})):o(n)!=I)?c(new E(S(t)),n,_):S(t)};for(var T,y=n(11)?h(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;y.length>C;C++)l(E,T=y[C])&&!l(_,T)&&N(_,T,v(E,T));_.prototype=x,x.constructor=_,n(19)(r,I,_)}},402:function(e,t,n){var r=n(5),l=n(45),o=n(13),c=n(403),f="["+c+"]",d=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),v=function(e,t,n){var l={},f=o((function(){return!!c[e]()||"​"!="​"[e]()})),d=l[e]=f?t(N):c[e];n&&(l[n]=d),r(r.P+r.F*f,"String",l)},N=v.trim=function(e,t){return e=String(l(e)),1&t&&(e=e.replace(d,"")),2&t&&(e=e.replace(h,"")),e};e.exports=v},403:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},410:function(e,t,n){"use strict";n.r(t);var r=n(8),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{attrs:{"aria-label":e.$t("multilingual")}},[n("global-heading-component",{attrs:{id:"local-switching","heading-level":2,"heading-text":e.$t("multilingual")}}),e._v(" "),n("ul",e._l(e.$i18n.locales,(function(t){return n("li",{key:t.code},[n("nuxt-link",{attrs:{lang:t.code,to:e.switchLocalePath(t.code)}},[e._v(e._s(t.name))])],1)})),0)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{GlobalHeadingComponent:n(400).default})}}]);