(this["webpackJsonpcplus_common_library-example"]=this["webpackJsonpcplus_common_library-example"]||[]).push([[0],{62:function(e,a,n){e.exports=n(75)},63:function(e,a,n){},75:function(e,a,n){"use strict";n.r(a);n(63);var t=n(0),l=n.n(t),r=n(58),c=n.n(r),u=function(){return l.a.createElement("div",null,l.a.createElement("h1",{style:{textAlign:"center",fontWeight:"bold"}},"Testing Components"))},o=function(){return l.a.createElement("div",null,l.a.createElement("h1",{style:{textAlign:"center",fontWeight:"bold"}},"Testing Components"))},i=(n(68),n(39)),s=(n(53),n(77)),m=n(78),d={color:"red"},g=function(e){var a=e.children,n=e.render,t=e.name,r=e.className,c=e.component;return l.a.createElement("div",{style:d},l.a.createElement(i.a,{name:t,children:a,render:n,className:r,component:c}))};g.displayName="Error Message";var v=function(e){var a=e.name,n=e.placeholder,r=e.minLength,c=e.maxLength,u=Object(t.useState)({value:"",isValidValue:!0,errorMessage:""}),o=u[0],i=u[1],d=Object(t.useCallback)((function(e){i({value:e.target.value,isValidValue:!1,errorMessage:""}),void 0===e.target.value&&console.log("undefined")}),[]);Object(t.useEffect)((function(){d(event)}),[]);var g=function(e){if(null!==e&&""===e){return{value:"",isValidValue:!1,errorMessage:"field cannot be empty"}}return/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/.exec(e)?e.match(/^[A-Za-z0-9]*$/)?{value:o.value,isValidValue:!1,errorMessage:"Invalid characters"}:{isValidValue:!0,errorMessage:""}:{value:o.value,isValidValue:!1,errorMessage:"space only is invalid"}},v=Object(t.useCallback)((function(){var e=g(o.value),a=e.value,n=e.isValidValue,t=e.errorMessage;i({value:a,isValidValue:n,errorMessage:t})}),[o.value,g]);return console.log(),l.a.createElement("div",null,l.a.createElement(s.a,null,a," \xa0 /",c),l.a.createElement(m.a,{type:"textarea",placeholder:n,value:o.value,onChange:d,onBlur:v,minLength:r,maxLength:c}),l.a.createElement("span",null,o.errorMessage))},p=function(){return l.a.createElement("div",null,l.a.createElement("h1",{style:{textAlign:"center",fontWeight:"bold"}},"Testing Components 3"),l.a.createElement(v,{name:"Description",placeholder:"Input Description",minLength:3,maxLength:10}))},h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(u,null),l.a.createElement(o,null),l.a.createElement(p,null))};c.a.render(l.a.createElement(h,null),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.6d6487a9.chunk.js.map