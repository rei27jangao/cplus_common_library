(this["webpackJsonpcplus_common_library-example"]=this["webpackJsonpcplus_common_library-example"]||[]).push([[0],{149:function(e,t,n){},150:function(e,t,n){"use strict";n.r(t);n(70);var a=n(0),l=n.n(a),r=n(14),i=n.n(r),o={width:"90%",padding:"5px"},c={marginBottom:"20px",padding:"5px"},u=n(157),s=n(158),m=n(164),d=n(159),v=n(160),f=n(161),p=n(162),g=(n(75),n(67)),h=n(12),E=n.n(h),b=(n(78),n(25)),y=n(26),C=function(e){var t=e.error;return l.a.createElement("p",{style:{marginBottom:"5px",paddingLeft:"5px",color:"#dc3545",fontSize:"12px"}},t)},x=function(){return l.a.createElement("span",{className:"text-danger"},"*")},O=function(e){var t=e.value,n=e.innerRef,r=e.onChange,i=e.attrs,o=e.valid,c=e.invalid,m=e.required,d=e.minLength,v=e.maxLength,f=e.texts,p=Object(a.useState)(""),g=p[0],h=p[1],E=Object(a.useState)(t),b=E[0],y=E[1],O=Object(a.useState)(b),S=O[0],N=O[1],D=function(e){e.preventDefault();var t=e.target.value;N(t.replace(/(^\s*)/gi,"")),r(e)},M=function(){var e=S.replace(/(^\s*)|(\s*$)/gi,"").replace(/[ ]{2,}/gi," ").replace(/\n +/,"\n");void 0!==d&&d>e.length?h("Must be minimum of "+d+" characters only"):void 0!==v&&v<e.length?h("Must be maximum of "+v+" characters only"):h("")};return l.a.createElement(l.a.Fragment,null,m&&l.a.createElement(x,null),l.a.createElement(u.a,null,null===i||void 0===i?void 0:i.title,": ",l.a.createElement(l.a.Fragment,null,S.length,"/",v||100)),l.a.createElement(s.a,{type:"text",value:S,required:m,style:null===i||void 0===i?void 0:i.style,className:null===i||void 0===i?void 0:i.className,placeholder:(null===i||void 0===i?void 0:i.placeHolder)||"Enter "+((null===i||void 0===i?void 0:i.title)||""),invalid:c||""!==g,onBlur:function(){!0===m&&""===S?(h((null===f||void 0===f?void 0:f.empty)||"Please enter "+((null===i||void 0===i?void 0:i.title)||"")),y("")):M(),""!==g?(!function(){var e=t.replace(/(^\s*)|(\s*$)/gi,"").replace(/[ ]{2,}/gi," ").replace(/\n +/,"\n"),n=S.replace(/(^\s*)|(\s*$)/gi,"").replace(/[ ]{2,}/gi," ").replace(/\n +/,"\n");N(n),y(e)}(),y(t)):(N(S.replace(/(^\s*)|(\s*$)/gi,"").replace(/[ ]{2,}/gi," ").replace(/\n +/,"\n")),y(S.replace(/(^\s*)|(\s*$)/gi,"").replace(/[ ]{2,}/gi," ").replace(/\n +/,"\n")))},onChange:function(e){return D(e)},minLength:d||0,maxLength:100,innerRef:n,valid:o}),l.a.createElement(C,{error:g}))};var S=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e};var N=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};function D(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var M=function(e,t,n){return t&&D(e.prototype,t),n&&D(e,n),e},w={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},Y=l.a.createContext();function T(){return w}var j=function(){function e(){N(this,e),this.usedNamespaces={}}return M(e,[{key:"addUsedNamespaces",value:function(e){var t=this;e.forEach((function(e){t.usedNamespaces[e]||(t.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function R(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];"string"===typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var F={};function k(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"===typeof t[0]&&F[t[0]]||("string"===typeof t[0]&&(F[t[0]]=new Date),R.apply(void 0,t))}function P(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function I(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return k("i18n.languages were undefined or empty",t.languages),!0;var a=t.languages[0],l=!!t.options&&t.options.fallbackLng,r=t.languages[t.languages.length-1];if("cimode"===a.toLowerCase())return!0;var i=function(e,n){var a=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===a||2===a};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!i(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(a,e)||(!t.services.backendConnector.backend||!(!i(a,e)||l&&!i(r,e))))}var q=function(e){if(Array.isArray(e))return e};var A=function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,l=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(c){l=!0,r=c}finally{try{a||null==o.return||o.return()}finally{if(l)throw r}}return n}};var B=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a};var L=function(e,t){if(e){if("string"===typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?B(e,t):void 0}};var $=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")};var z=function(e,t){return q(e)||A(e,t)||L(e,t)||$()};function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){S(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z=function(e){var t=e.value,n=e.isRequired,r=e.minLength,i=e.maxLength,o=e.className,c=e.texts,m=e.attrs,d=e.onChange,v=e.valid,f=e.invalid,p=e.innerRef,g=e.locale,h=Object(a.useState)(""),E=h[0],b=h[1],y=Object(a.useState)(t),C=y[0],O=y[1],S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,l=Object(a.useContext)(Y)||{},r=l.i18n,i=l.defaultNS,o=n||r||void 0;if(o&&!o.reportNamespaces&&(o.reportNamespaces=new j),!o){k("You will need pass in an i18next instance by using initReactI18next");var c=function(e){return Array.isArray(e)?e[e.length-1]:e},u=[c,{},!1];return u.t=c,u.i18n={},u.ready=!1,u}var s=_({},T(),{},o.options.react,{},t),m=s.useSuspense,d=e||i||o.options&&o.options.defaultNS;d="string"===typeof d?[d]:d||["translation"],o.reportNamespaces.addUsedNamespaces&&o.reportNamespaces.addUsedNamespaces(d);var v=(o.isInitialized||o.initializedStoreOnce)&&d.every((function(e){return I(e,o,s)}));function f(){return{t:o.getFixedT(null,"fallback"===s.nsMode?d:d[0])}}var p=Object(a.useState)(f()),g=z(p,2),h=g[0],E=g[1],b=Object(a.useRef)(!0);Object(a.useEffect)((function(){var e=s.bindI18n,t=s.bindI18nStore;function n(){b.current&&E(f())}return b.current=!0,v||m||P(o,d,(function(){b.current&&E(f())})),e&&o&&o.on(e,n),t&&o&&o.store.on(t,n),function(){b.current=!1,e&&o&&e.split(" ").forEach((function(e){return o.off(e,n)})),t&&o&&t.split(" ").forEach((function(e){return o.store.off(e,n)}))}}),[d.join()]);var y=[h.t,o,v];if(y.t=h.t,y.i18n=o,y.ready=v,v)return y;if(!v&&!m)return y;throw new Promise((function(e){P(o,d,(function(){b.current&&E(f()),e()}))}))}().t,N=function(e){O(e.target.value),d(e)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,null===m||void 0===m?void 0:m.title," \xa0 ",C.length,"/",i," ",l.a.createElement(x,null)),l.a.createElement(s.a,{minLength:r,maxLength:i,type:"textarea",value:C,required:n,name:null===m||void 0===m?void 0:m.name,placeholder:null===m||void 0===m?void 0:m.placeholder,style:null===m||void 0===m?void 0:m.style,invalid:""!==E,onBlur:function(){n?""===C?(b((null===c||void 0===c?void 0:c.empty)||"Please fill out this field"),O(t)):void 0!==r&&r>C.length?b("Must be minimum of "+r+" characters only"):void 0!==i&&i<C.length?b("Must be maximum of "+i+" characters only"):b(""):b("");O(function(e){for(var t="",n=0,a=e.length;n<a;n++){var l=e[n].charCodeAt(0);l>=65280&&l<=65519&&(l=255&l+32),t+=String.fromCharCode(l)}return t}(C.replace(/(^\s*)|(\s*$)/gi,"").replace(/[ ]{2,}/gi," ").replace(/\n +/,"\n")))},onChange:function(e){return N(e)},className:(v?"is-valid ":f?"is-invalid ":"")+o,innerRef:p,locale:g}),l.a.createElement("p",{className:"text-danger"},E),l.a.createElement("p",null,S("error_messages.required")))},V=function(e){var t=e.value,n=e.isRequired,r=e.className,i=e.onChange,o=e.texts,c=e.attrs,m=e.minLength,d=void 0===m?3:m,v=e.maxLength,f=void 0===v?10:v,p=e.innerRef,g=Object(a.useState)(""),h=g[0],E=g[1],b=Object(a.useState)(t),y=b[0],C=b[1],O=function(e){C(e.target.value),i(e)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,null===c||void 0===c?void 0:c.title," ",n&&l.a.createElement(x,null)),l.a.createElement(s.a,{value:y,required:n,style:null===c||void 0===c?void 0:c.style,className:r,placeholder:null===c||void 0===c?void 0:c.placeholder,invalid:""!==h,onBlur:function(){n?""===y?(E((null===o||void 0===o?void 0:o.empty)||"Please fill out this field"),C(t)):y.match(/^(?=.{1,10}$)([a-zA-Z0-9]+\s{0,1}[a-zA-Z0-9]*\-{0,1}[a-zA-Z0-9]+)$/)||y.match(/^[A-Za-z]+$/)||y.match(/^[\uff21-\uff5a]+$/)?void 0!==d&&d>y.length?E("Must be minimum of "+d+" characters only"):E(""):E(null===o||void 0===o?void 0:o.invalid):E("");C(function(e){for(var t="",n=0,a=e.length;n<a;n++){var l=e[n].charCodeAt(0);l>=65280&&l<=65519&&(l=255&l+32),t+=String.fromCharCode(l)}return t}(y))},onChange:function(e){return O(e)},minLength:d,maxLength:f,innerRef:p}),l.a.createElement("p",{className:"text-danger"},h))},U=function(e){var t=e.isRequired,n=e.options,r=e.value,i=e.texts,o=e.isMulti,c=e.onChange,s=e.classNamePrefix,m=e.isClearable,d=e.isDisabled,v=e.onCreateOption,f=e.defaultValue,p=e.getOptionLabel,h=e.getOptionValue,E=e.attrs,b=e.innerRef,y=Object(a.useState)(r),C=y[0],O=y[1],S=Object(a.useState)(""),N=S[0],D=S[1];Object(a.useEffect)((function(){}),[N]);var M=function(e){O(e),c(e)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,null===E||void 0===E?void 0:E.title," ",t&&l.a.createElement(x,null)),l.a.createElement(g.a,{isMulti:o,isRequired:t,options:n,value:r,classNamePrefix:s,onChange:function(e){return M(e)},onBlur:function(){t&&null===C?(D((null===i||void 0===i?void 0:i.empty)||"Please select "+(null===E||void 0===E?void 0:E.title)),O(r)):D("")},invalid:""!==N,onCreateOption:v,defaultValue:f,isClearable:m,name:null===E||void 0===E?void 0:E.name,placeholder:null===E||void 0===E?void 0:E.placeholder,style:null===E||void 0===E?void 0:E.style,isDisabled:d,getOptionLabel:p,getOptionValue:h,innerRef:b}),l.a.createElement("p",{className:"text-danger"},function(e){return""!==e?l.a.createElement("p",{style:{color:"red"}},e):""}(N)))},J=function(e){var t=e.isRequired,n=e.attrs,r=e.texts,i=e.value,o=e.innerRef,c=e.className,m=e.valid,d=e.invalid,v=e.onChange,f=Object(a.useState)(i),p=f[0],g=f[1],h=Object(a.useState)(""),E=h[0],b=h[1],y=function(e){v();var t=e.replace(/[^a-zA-Z0-9\uff10-\uff19\uff21-\uff5a]/g,"");C(t),O(t),g(t.toUpperCase())},C=function(e){1==e.length?b(r.invalid):0===e.length?b(r.empty):b("")},O=function(e){e.match(/^[0-9]*$/)||e.match(/^[A-Za-z]+$/)||e.match(/^[\uff10-\uff19]*$/)||e.match(/^[\uff21-\uff5a]+$/)?b(""):b(r.invalid)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,n.title," ",t&&l.a.createElement(x,null)),l.a.createElement(s.a,{type:"text",value:p,required:t,name:n.name,placeholder:n.placeholder,style:n.style,minLength:2,maxLength:3,onChange:function(e){return y(e.target.value)},onBlur:function(){return function(e){for(var t="",n=0,a=e.length;n<a;n++){var l=e[n].charCodeAt(0);l>=65280&&l<=65519&&(l=255&l+32),t+=String.fromCharCode(l)}t.match(/^[0-9]*$/)||t.match(/^[A-Za-z]+$/)||t.match(/^[\uff10-\uff19]*$/)||t.match(/^[\uff21-\uff5a]+$/)?(b(""),g(t),C(t)):(g(""),b(r.invalid),C(t))}(p)},invalid:""!==E,innerRef:o,className:(m?"is-valid ":d?"is-invalid ":"")+c}),l.a.createElement("p",{className:"text-danger"},E),l.a.createElement("p",{className:"text-muted"},"ex: JP or JPN or 392"))},K=function(e){var t=e.isRequired,n=e.isDecimal,r=e.attrs,i=e.texts,o=e.value,c=e.onChange,m=e.decimalPlace,d=e.valid,v=e.invalid,f=e.className,p=e.innerRef,g=Object(a.useState)(o),h=g[0],E=g[1],b=Object(a.useState)(""),y=b[0],C=b[1],O=m?m+1:m||3,S=function(e){c();var t=e.target.value;if(n){var a=t.replace(/[^0-9\uff10-\uff19\..]/g,"");"."===t.charAt(0)?E(t.slice(1)):E(a);var l=t.indexOf(".")+1;if(l>1){var r=t.indexOf(".")+O,i=t.substr(0,l)+t.slice(l).replace(".","");E(i.substr(0,r)),N(i.substr(0,r))}}else{var o=t.replace(/[^0-9\uff10-\uff19]/g,"");N(o),E(o)}},N=function(e){0!==e.length?(C(""),e>r.max||e<r.min?C(i.invalid):C("")):C(i.empty)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,r.title," ",t&&l.a.createElement(x,null)),l.a.createElement(s.a,{type:"text",value:h,required:t,name:r.name,placeholder:r.placeholder,style:r.style,onChange:function(e){return S(e)},onBlur:function(){return function(e){for(var t="",n=0,a=e.length;n<a;n++){var l=e[n].charCodeAt(0);l>=65280&&l<=65519&&(l=255&l+32),t+=String.fromCharCode(l)}var o=parseInt(t);o>r.max||o<r.min?(E(""),C(i.invalid),N(t)):(E(t),C(""),N(t))}(h)},invalid:""!==y,className:(d?"is-valid ":v?"is-invalid ":"")+f,innerRef:p}),l.a.createElement("p",{className:"text-danger"},y))},W=function(e){var t=e.value,n=e.valid,r=e.invalid,i=e.required,o=e.minLength,c=e.maxLength,m=e.attrs,d=e.texts,v=e.innerRef,f=e.onChange,p=Object(a.useState)(""),g=p[0],h=p[1],E=Object(a.useState)(t),b=E[0],y=E[1],O=Object(a.useState)(b),S=O[0],N=O[1],D=function(){var e=S.replace(/(^\s*)|(\s*$)/gi,"").replace(/[ ]{2,}/gi," ").replace(/\n +/,"\n");void 0!==o&&o>e.length?h("Must be minimum of "+o+" characters only"):void 0!==c&&c<e.length?h("Must be maximum of "+c+" characters only"):M()},M=function(){var e=w(S.replace(/(^\s*)|(\s*$)/gi,"").replace(/[ ]{2,}/gi," ").replace(/\n +/,"\n"));/(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0]|[a-z\d\u00A0][a-z\d\-._~\u00A0]*[a-z\d\u00A0])\.)+([a-z\u00A0]|[a-z\u00A0][a-z\d\-._~\u00A0]*[a-z\u00A0])\.?$/i.test(String(e).toLowerCase())?h(""):(h(""+((null===d||void 0===d?void 0:d.invalid)||"Invalid format")),y(t))},w=function(e){for(var t="",n=0,a=e.length;n<a;n++){var l=e[n].charCodeAt(0);l>=65280&&l<=65519&&(l=255&l+32),t+=String.fromCharCode(l)}return t},Y=function(e){e.preventDefault();var t=e.target.value;N(t.replace(/(^\s*)/gi,"")),f(e)};return l.a.createElement(l.a.Fragment,null,i&&l.a.createElement(x,null),l.a.createElement(u.a,null,null===m||void 0===m?void 0:m.title,": ",l.a.createElement(l.a.Fragment,null,S.length,"/",c||320)),l.a.createElement(s.a,{type:"text",value:S,required:i,style:null===m||void 0===m?void 0:m.style,className:null===m||void 0===m?void 0:m.className,placeholder:(null===m||void 0===m?void 0:m.placeHolder)||"Enter "+((null===m||void 0===m?void 0:m.title)||""),invalid:r||""!==g,onBlur:function(){!0===i&&""===S?(h((null===d||void 0===d?void 0:d.empty)||"Please enter "+(null===m||void 0===m?void 0:m.title)),y("")):D(),""!==g?(!function(){var e=t.replace(/(^\s*)|(\s*$)/gi,"").replace(/[ ]{2,}/gi," ").replace(/\n +/,"\n"),n=S.replace(/(^\s*)|(\s*$)/gi,"").replace(/[ ]{2,}/gi," ").replace(/\n +/,"\n");N(n),y(e)}(),y(w(t.replace(/(^\s*)|(\s*$)/gi,"").replace(/[ ]{2,}/gi," ").replace(/\n +/,"\n"))),N(w(S.replace(/(^\s*)|(\s*$)/gi,"").replace(/[ ]{2,}/gi," ").replace(/\n +/,"\n")))):(N(w(S.replace(/(^\s*)|(\s*$)/gi,"").replace(/[ ]{2,}/gi," ").replace(/\n +/,"\n"))),y(w(b.replace(/(^\s*)|(\s*$)/gi,"").replace(/[ ]{2,}/gi," ").replace(/\n +/,"\n"))))},onChange:function(e){return Y(e)},minLength:o||5,maxLength:320,innerRef:v,valid:n}),l.a.createElement(C,{error:g}))},G=function(e){var t=e.required,n=e.attrs,r=e.timeFormat,i=e.value,o=e.customInput,c=e.texts,s=e.inputType,m=e.onChange,d=e.onSelect,v=e.innerRef,f=Object(a.useState)(i),p=f[0],g=f[1],h=Object(a.useState)(""),b=h[0],y=h[1],O=function(){y(null===p?(null===c||void 0===c?void 0:c.invalid)||"Invalid Format":""===p?(null===c||void 0===c?void 0:c.empty)||"Please enter a valid "+(null===n||void 0===n?void 0:n.title):"")},S=function(e){var t=/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(e);"hh:mm"===r?e.length>5?(y("Must be maximum of 5 characters"),g(null)):e.length<0?(y("Must be minimum of 0 characters"),g(null)):y(t?"":(null===c||void 0===c?void 0:c.empty)||"Please enter a valid "+(null===n||void 0===n?void 0:n.title)):e.length>8?(y("Must be maximum of 8 characters"),g(null)):e.length<0?(y("Must be minimum of 0 characters"),g(null)):y(t?"":(null===c||void 0===c?void 0:c.empty)||"Please enter a valid "+(null===n||void 0===n?void 0:n.title))},N=function(){!0===t&&""===p?y((null===c||void 0===c?void 0:c.empty)||"Please enter a valid "+(null===n||void 0===n?void 0:n.title)):O()},D=function(e){g(e),m(e)},M=function(){N()},w=l.a.forwardRef((function(e,a){var r=e.value,i=e.onClick,o=e.onSelect;return l.a.createElement("input",{ref:a,onClick:i,value:r,onChange:N,onBlur:M,onSelect:N&&o,placeholder:null===n||void 0===n?void 0:n.placeholder,className:""!==b?"border border-danger form-control "+(null===n||void 0===n?void 0:n.className):(null===n||void 0===n?void 0:n.className)+" form-control",required:t})}));return"input"===s?l.a.createElement(l.a.Fragment,null,t&&l.a.createElement(x,null),l.a.createElement(u.a,null,null===n||void 0===n?void 0:n.title),l.a.createElement("br",null),"hh:mm"===r?l.a.createElement(E.a,{selected:p,showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:1,timeCaption:"Time",dateFormat:"HH:mm",className:""!==b?"border border-danger "+(null===n||void 0===n?void 0:n.className):null===n||void 0===n?void 0:n.className,onBlur:M,customInput:o,onSelect:d&&N,onChange:function(e){return D(e)},onChangeRaw:function(e){return S(e.target.value)},placeholderText:(null===n||void 0===n?void 0:n.placeholder)||"Enter "+((null===n||void 0===n?void 0:n.title)||"Time"),ref:v,required:t}):l.a.createElement(E.a,{selected:p,showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:1,timeCaption:"Time",dateFormat:"HH:mm:ss",className:""!==b?"border border-danger "+(null===n||void 0===n?void 0:n.className):null===n||void 0===n?void 0:n.className,customInput:o,onBlur:M,onSelect:d,onChange:function(e){return D(e)},onChangeRaw:function(e){return S(e.target.value)},placeholderText:(null===n||void 0===n?void 0:n.placeholder)||"Enter "+((null===n||void 0===n?void 0:n.title)||"Time"),ref:v,required:t}),l.a.createElement("p",{style:{marginBottom:"2px",fontSize:"11px"}},"hh:mm"===r?"HH:MM":"HH:MM:SS"),l.a.createElement(C,{error:b})):l.a.createElement(l.a.Fragment,null,t&&l.a.createElement(x,null),l.a.createElement(u.a,null,null===n||void 0===n?void 0:n.title),l.a.createElement("br",null),"hh:mm"===r?l.a.createElement(E.a,{selected:p,showTimeSelect:!0,showTimeSelectOnly:!0,timeCaption:"Time",dateFormat:"HH:mm",className:""!==b?"border border-danger "+(null===n||void 0===n?void 0:n.className):null===n||void 0===n?void 0:n.className,onBlur:M,customInput:o||l.a.createElement(w,null),onSelect:d,onChange:function(e){return D(e)},onChangeRaw:function(e){return S(e.target.value)},placeholderText:(null===n||void 0===n?void 0:n.placeholder)||"Enter "+((null===n||void 0===n?void 0:n.title)||"Time"),isClearable:!0,required:t,ref:v}):l.a.createElement(E.a,{selected:p,showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:1,timeCaption:"Time",dateFormat:"HH:mm:ss",className:""!==b?"border border-danger "+(null===n||void 0===n?void 0:n.className):null===n||void 0===n?void 0:n.className,customInput:o||l.a.createElement(w,null),onBlur:M,onSelect:d,onChange:function(e){return D(e)},onChangeRaw:function(e){return S(e.target.value)},placeholderText:(null===n||void 0===n?void 0:n.placeholder)||"Enter "+((null===n||void 0===n?void 0:n.title)||"Time"),isClearable:!0,required:t,ref:v}),l.a.createElement("p",{style:{marginBottom:"1px",fontSize:"11px"}},"hh:mm"===r?"HH:MM":"HH:MM:SS"),l.a.createElement(C,{error:b}))},Q=function(){var e=Object(a.useState)(new Date),t=e[0],n=e[1],r=Object(a.useState)(new Date),i=r[0],o=r[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Work In Process.."),l.a.createElement(E.a,{selected:t,onChange:function(e){return n(e)},showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:1,timeCaption:"Time",dateFormat:"HH:mm"}),l.a.createElement("br",null),l.a.createElement(E.a,{selected:i,onChange:function(e){return o(e)},showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:1,timeCaption:"Time",dateFormat:"HH:mm"}))},X=function(e){var t=e.value,n=e.dateFormat,r=e.onChange,i=e.onSelect,o=e.inputType,c=e.customInput,s=e.required,m=e.attrs,d=e.texts,v=Object(a.useState)(t||new Date),f=v[0],p=v[1],g=Object(a.useState)(""),h=g[0],b=g[1],y=function(e){p(e),r(e)},O=function(){b(null===f?(null===d||void 0===d?void 0:d.invalid)||"Invalid Format":"")},S=function(){!0===s&&""===f?b((null===d||void 0===d?void 0:d.empty)||"Please enter a valid "+(null===m||void 0===m?void 0:m.title)):O()},N=function(){S()},D=function(e){"MM-DD-YYYY"===n||"MM/DD/YYYY"===n?function(e){var t=/^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/.test(e)||/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(e);e.length>10?(b("Must be maximum of 10 characters"),p(null)):e.length<0?(b("Must be minimum of 0 characters"),p(null)):t?b(""):(b((null===d||void 0===d?void 0:d.empty)||"Please enter a valid "+(null===m||void 0===m?void 0:m.title)),p(null))}(e):function(e){var t=/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/.test(e)||/^([0-2][0-9]|(3)[0-1])(\-)(((0)[0-9])|((1)[0-2]))(\-)\d{4}$/.test(e);e.length>10?(b("Must be maximum of 10 characters"),p(null)):e.length<0?(b("Must be minimum of 0 characters"),p(null)):t?b(""):(b((null===d||void 0===d?void 0:d.empty)||"Please enter a valid "+(null===m||void 0===m?void 0:m.title)),p(null))}(e)},M=l.a.forwardRef((function(e,t){var n=e.value,a=e.onClick,r=e.onSelect;return l.a.createElement("input",{required:s,ref:t,onClick:a,value:n,onChange:function(){},onBlur:N,onSelect:r&&S,placeholder:null===m||void 0===m?void 0:m.placeholder,className:""!==h?"border border-danger form-control "+(null===m||void 0===m?void 0:m.className):(null===m||void 0===m?void 0:m.className)+" form-control"})}));return"input"===o?l.a.createElement(l.a.Fragment,null,s&&l.a.createElement(x,null),l.a.createElement(u.a,null,null===m||void 0===m?void 0:m.title),l.a.createElement("br",null),"DD-MM-YYYY"===n||"DD/MM/YYYY"===n?l.a.createElement(E.a,{selected:f,onChange:function(e){return y(e)},onChangeRaw:function(e){return D(e.target.value)},onSelect:i||S,dateFormat:"dd-MM-yyyy",placeholderText:(null===m||void 0===m?void 0:m.placeholder)||"Enter "+((null===m||void 0===m?void 0:m.title)||"Time"),required:s,customInput:c,className:""!==h?"border border-danger "+(null===m||void 0===m?void 0:m.className):null===m||void 0===m?void 0:m.className,onBlur:N,isClearable:!0,adjustDateOnChange:!0}):l.a.createElement(E.a,{selected:f,onChange:function(e){return y(e)},onChangeRaw:function(e){return D(e.target.value)},onSelect:i||S,placeholderText:(null===m||void 0===m?void 0:m.placeholder)||"Enter "+((null===m||void 0===m?void 0:m.title)||"Time"),required:s,customInput:c,className:""!==h?"border border-danger "+(null===m||void 0===m?void 0:m.className):null===m||void 0===m?void 0:m.className,onBlur:N,isClearable:!0,adjustDateOnChange:!0}),l.a.createElement("p",{style:{marginBottom:"1px",fontSize:"11px"}},"DD-MM-YYYY"===n||"DD/MM/YYYY"===n?"DD-MM-YYYY or DD/MM/YYYY":"MM-DD-YYYY or MM/DD/YYYY"),l.a.createElement(C,{error:h})):l.a.createElement(l.a.Fragment,null,s&&l.a.createElement(x,null),l.a.createElement(u.a,null,null===m||void 0===m?void 0:m.title),l.a.createElement("br",null),"DD-MM-YYYY"===n||"DD/MM/YYYY"===n?l.a.createElement(E.a,{selected:f,onChange:function(e){return y(e)},onChangeRaw:function(e){return D(e.target.value)},onSelect:i||S,dateFormat:"dd-MM-yyyy",placeholderText:(null===m||void 0===m?void 0:m.placeholder)||"Enter "+((null===m||void 0===m?void 0:m.title)||"Time"),required:s,customInput:c||l.a.createElement(M,null),className:""!==h?"border border-danger "+(null===m||void 0===m?void 0:m.className):null===m||void 0===m?void 0:m.className,onBlur:N,isClearable:!0,showMonthDropdown:!0,showYearDropdown:!0}):l.a.createElement(E.a,{selected:f,onChange:function(e){return y(e)},onChangeRaw:function(e){return D(e.target.value)},onSelect:i||S,placeholderText:(null===m||void 0===m?void 0:m.placeholder)||"Enter "+((null===m||void 0===m?void 0:m.title)||"Time"),required:s,customInput:c||l.a.createElement(M,null),className:""!==h?"border border-danger "+(null===m||void 0===m?void 0:m.className):null===m||void 0===m?void 0:m.className,onBlur:N,isClearable:!0,showMonthDropdown:!0,showYearDropdown:!0}),l.a.createElement("p",{style:{marginBottom:"1px",fontSize:"11px"}},"DD-MM-YYYY"===n||"DD/MM/YYYY"===n?"DD-MM-YYYY or DD/MM/YYYY":"MM-DD-YYY or MM/DD/YYYY"),l.a.createElement(C,{error:h}))},ee=function(){var e=Object(a.useState)(new Date("2014/02/08")),t=e[0],n=e[1],r=Object(a.useState)(new Date("2014/02/10")),i=r[0],o=r[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Component is still in progress"),l.a.createElement(E.a,{selected:t,onChange:function(e){return n(e)},selectsStart:!0,startDate:t,endDate:i}),l.a.createElement("br",null),l.a.createElement(E.a,{selected:i,onChange:function(e){return o(e)},selectsEnd:!0,startDate:t,endDate:i,minDate:t}))},te=function(){var e=Object(a.useState)(new Date),t=e[0],n=e[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Component is still in progress"),l.a.createElement(E.a,{selected:t,onChange:function(e){return n(e)},showTimeSelect:!0,timeFormat:"HH:mm",timeIntervals:15,timeCaption:"time",dateFormat:"MMMM d, yyyy h:mm aa"}))},ne=function(){var e=Object(a.useState)(new Date),t=e[0],n=e[1],r=Object(a.useState)(new Date),i=r[0],o=r[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Component is still in progress"),l.a.createElement(E.a,{selected:t,onChange:function(e){return n(e)},showTimeSelect:!0,timeFormat:"HH:mm",timeIntervals:15,timeCaption:"time",dateFormat:"MMMM d, yyyy h:mm aa"}),l.a.createElement("br",null),l.a.createElement(E.a,{selected:i,onChange:function(e){return o(e)},showTimeSelect:!0,timeFormat:"HH:mm",timeIntervals:15,timeCaption:"time",dateFormat:"MMMM d, yyyy h:mm aa"}))},ae=function(e){var t=e.type,n=e.timeFormat,a=e.dateFormat,r=e.value,i=e.attrs,o=e.texts,c=e.onChange,u=e.required,s=e.customInput,m=e.inputType,d=e.onSelect,v=e.innerRef;return"timepicker"===t?l.a.createElement(G,{inputType:m,onChange:c,onSelect:d,texts:o,attrs:i,timeFormat:n,value:r,required:u,customInput:s,innerRef:v}):"datepicker"===t?l.a.createElement(X,{onChange:c,onSelect:d,inputType:m,value:r,attrs:i,texts:o,dateFormat:a,required:u,customInput:s,innerRef:v}):"daterangepicker"===t?l.a.createElement(ee,null):"timerangepicker"===t?l.a.createElement(Q,null):"datetimepicker"===t?l.a.createElement(te,null):l.a.createElement(ne,null)},le=function(e){var t=e.type,n=e.headerText,r=e.bodyText,i=e.okText,o=e.closeText,c=e.callback,u=e.toggleDialog,s=e.isOpen,g=e.className,h=e.headerClassName,E=e.bodyClassName,C=e.footerClassName,x=e.closeButtonClassName,O=e.okButtonClassName,S=e.hideCloseButton,N=e.onOpened,D=e.onClosed,M=e.innerRef;Object(a.useEffect)((function(){s&&N()}),[s]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{isOpen:s,toggle:u,className:g,ref:M},l.a.createElement(d.a,{toggle:u,className:h},"success"===t?l.a.createElement(b.a,{icon:y.a,color:"#28C7B1",size:"lg"}):"warning"===t?l.a.createElement(b.a,{icon:y.c,color:"#FECC68",size:"lg"}):"error"===t?l.a.createElement(b.a,{icon:y.b,color:"#E54E66",size:"lg"}):"confirm"===t?l.a.createElement(b.a,{icon:y.e,color:"#6B7376",size:"lg"}):"info"===t?l.a.createElement(b.a,{icon:y.d,color:"#6B7376",size:"lg"}):l.a.createElement(b.a,{icon:y.a,color:"#28C7B1",size:"lg"})," ",n),l.a.createElement(v.a,{className:E},r),l.a.createElement(f.a,{className:C},!S&&l.a.createElement(p.a,{onClick:function(){return u(),void D()},color:x},o),l.a.createElement(p.a,{onClick:function(){return u(),void c()},color:O},i))))},re=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useRef)(null);return l.a.createElement("div",{style:o},l.a.createElement("div",{style:c},l.a.createElement(O,{value:"",innerRef:e,onChange:function(){return console.log("TextField Onchange")},attrs:{title:"TextField Input",placeHolder:"Enter your project name",className:"nothing",style:{width:"300px",margin:"0"}},minLength:3,maxLength:6,required:!0})),l.a.createElement("div",{style:c},l.a.createElement(W,{value:"",onChange:function(){return console.log("Email Input Onchange")},attrs:{placeHolder:"Enter your email",title:"Email Input",style:{width:"300px",margin:"0"}},required:!0,minLength:4,maxLength:64,innerRef:t})),l.a.createElement("div",{style:o},l.a.createElement(ae,{value:"",required:!0,inputType:"input",onChange:function(){return console.log("onChange TimePicker")},onSelect:function(){return console.log("OnSelect TimePicker")},type:"timepicker",timeFormat:"hh:mm:ss",attrs:{title:"TimePicker Input",placeholder:"Time-in",className:"form-control"}})),l.a.createElement("div",{style:o},l.a.createElement(ae,{value:new Date,required:!0,onChange:function(){return console.log("onChange TimePicker")},onSelect:function(){return console.log("OnSelect TimePicker")},type:"timepicker",timeFormat:"hh:mm:ss",attrs:{title:"TimePicker Select",placeholder:"Time-in",className:"form-control"},innerRef:n})),l.a.createElement("div",{style:o},l.a.createElement(ae,{value:new Date,required:!0,onChange:function(){return console.log("onChange DatePicker")},onSelect:function(){return console.log("OnSelect DatePicker")},type:"datepicker",inputType:"input",dateFormat:"DD/MM/YYYY",attrs:{title:"DatePicker Input",placeholder:"Enter Arrival Date",className:"form-control"}})),l.a.createElement("div",{style:o},l.a.createElement(ae,{value:"",required:!0,onChange:function(){return console.log("onChange DatePicker")},onSelect:function(){return console.log("OnSelect DatePicker")},type:"datepicker",inputType:"select",dateFormat:"MM-DD-YYYY",attrs:{title:"DatePicker Select",placeholder:"Please choose Departure Date",className:"form-control"}})))},ie=n(68),oe=n(163),ce=function(){var e=Object(a.useState)(!1),t=Object(ie.a)(e,2),n=t[0],r=t[1],i=Object(a.useRef)(null),c=Object(a.useRef)(null),u=Object(a.useRef)(null);return l.a.createElement("div",{style:o},l.a.createElement(J,{isRequired:!0,value:"",texts:{empty:"Please fill the required field",invalid:"Invalid country code format."},attrs:{name:"inputForm",title:"Country Code",placeholder:"Enter a Country code",style:{width:"50%"}},className:"",innerRef:i,onChange:function(){return console.log("country name change")}}),l.a.createElement(K,{isRequired:!0,value:"",isDecimal:!0,texts:{empty:"Please fill the required field",invalid:"Format incorrect"},attrs:{name:"number",title:"Input Number",placeholder:"Enter a number",min:5,max:10,style:{width:"50%"}},onChange:function(){return console.log("number change")},innerRef:c}),l.a.createElement(le,{type:"confirm",headerText:"Confirmation",bodyText:"Are you sure to proceed?",okText:"OK",closeText:"CANCEL",isOpen:n,headerClassName:"text-danger",okButtonClassName:"primary",closeButtonClassName:"danger",toggleDialog:function(){return r(!n)},callback:function(){return alert("This function will work when user clicks OK")},onOpened:function(){return console.log("Dialog Open")},onClosed:function(){return console.log("Dialog Close")},innerRef:u}),l.a.createElement(oe.a,{onClick:function(){return r(!n)}},"Open Dialog"))},ue=(n(148),function(e){return{label:e,value:e.toLowerCase().replace(/\W/g,"")}}),se=[ue("Chocolate"),ue("Mango")],me=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),n=Object(a.useRef)(null);return l.a.createElement("div",{style:o},l.a.createElement(Z,{value:"",isRequired:!0,maxLength:20,onChange:function(){return console.log("TextArea Onchange")},texts:{empty:"Please fill out this field",invalid:"Format incorrect"},minLength:5,attrs:{title:"Description:",placeholder:"Enter description",style:{width:"100%"}},innerRef:e}),l.a.createElement("br",null),l.a.createElement(V,{value:"",isRequired:!0,onChange:function(){return console.log("InputPostal Onchange")},texts:{empty:"Please fill out this field",invalid:"Format incorrect"},attrs:{title:"Country/Zip Code:",placeholder:"Enter postal/zip code",style:{width:"100%"}},innerRef:t}),l.a.createElement("br",null),l.a.createElement(U,{options:se,isMulti:!0,isRequired:!0,defaultValue:[se[0]],classNamePrefix:"samplePrefix",isClearable:!0,isDisabled:!1,onChange:function(){return console.log("SelectInput Onchange")},getOptionLabel:function(e){return e.label},getOptionValue:function(e){return e.value},innerRef:n,attrs:{title:"Select Flavor",placeholder:"Please select flavor",style:{width:"100%"}}}))},de=(n(149),function(){return l.a.createElement("div",{className:"containerFlex"},l.a.createElement(re,null),l.a.createElement(ce,null),l.a.createElement(me,null))});i.a.render(l.a.createElement(de,null),document.getElementById("root"))},69:function(e,t,n){e.exports=n(150)},70:function(e,t,n){}},[[69,1,2]]]);
//# sourceMappingURL=main.e1873c58.chunk.js.map