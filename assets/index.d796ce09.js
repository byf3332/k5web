import{u as P,b as R,c as d,L as I,f as N}from"./index.3c6542a6.js";import{f as A,o as z,bs as F,c as O,i as M,g as $,d as K,aI as E,h as X}from"./arco.f43727df.js";import{J as w,w as J,K as U,M as V,x as W,B as G,y as Z}from"./index.28b8c38d.js";/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var q={block:Boolean,content:{type:[String,Function]},default:{type:[String,Function]},disabled:{type:Boolean,default:void 0},ghost:Boolean,href:{type:String,default:""},icon:{type:Function},loading:Boolean,shape:{type:String,default:"rectangle",validator:function(e){return e?["rectangle","square","round","circle"].includes(e):!0}},size:{type:String,default:"medium",validator:function(e){return e?["extra-small","small","medium","large"].includes(e):!0}},suffix:{type:Function},tag:{type:String,validator:function(e){return e?["button","a","div"].includes(e):!0}},theme:{type:String,validator:function(e){return e?["default","primary","danger","warning","success"].includes(e):!0}},type:{type:String,default:"button",validator:function(e){return e?["submit","reset","button"].includes(e):!0}},variant:{type:String,default:"base",validator:function(e){return e?["base","outline","dashed","text"].includes(e):!0}},onClick:Function};/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var H=w.expand,Q=w.ripple,Y=w.fade;function ee(){var t=J("animation"),e=t.globalConfig,n=function(o){var l,c,r=e.value;return r&&!((l=r.exclude)!==null&&l!==void 0&&l.includes(o))&&((c=r.include)===null||c===void 0?void 0:c.includes(o))};return{keepExpand:n(H),keepRipple:n(Q),keepFade:n(Y)}}/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */function L(t,e){var n=Object.keys(e);n.forEach(function(a){t.style[a]=e[a]})}/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var T=200,te="rgba(0, 0, 0, 0)",ne="rgba(0, 0, 0, 0.35)",ae=function(e,n){var a;if(n)return n;if(e!=null&&(a=e.dataset)!==null&&a!==void 0&&a.ripple){var o=e.dataset.ripple;return o}var l=getComputedStyle(e).getPropertyValue("--ripple-color");return l||ne};function re(t,e){var n=A(null),a=P(),o=ee(),l=o.keepRipple,c=function(m){var i=t.value,y=ae(i,e==null?void 0:e.value);if(!(m.button!==0||!t||!l)&&!(i.classList.contains("".concat(a.value,"-is-active"))||i.classList.contains("".concat(a.value,"-is-disabled"))||i.classList.contains("".concat(a.value,"-is-checked"))||i.classList.contains("".concat(a.value,"-is-loading")))){var b=getComputedStyle(i),v=parseInt(b.borderWidth,10),h=v>0?v:0,f=i.offsetWidth,u=i.offsetHeight;n.value.parentNode===null&&(L(n.value,{position:"absolute",left:"".concat(0-h,"px"),top:"".concat(0-h,"px"),width:"".concat(f,"px"),height:"".concat(u,"px"),borderRadius:b.borderRadius,pointerEvents:"none",overflow:"hidden"}),i.appendChild(n.value));var s=document.createElement("div");L(s,{marginTop:"0",marginLeft:"0",right:"".concat(f,"px"),width:"".concat(f+20,"px"),height:"100%",transition:"transform ".concat(T,"ms cubic-bezier(.38, 0, .24, 1), background ").concat(T*2,"ms linear"),transform:"skewX(-8deg)",pointerEvents:"none",position:"absolute",zIndex:0,backgroundColor:y,opacity:"0.9"});for(var k=new WeakMap,C=i.children.length,g=0;g<C;++g){var p=i.children[g];p.style.zIndex===""&&p!==n.value&&(p.style.zIndex="1",k.set(p,!0))}var x=i.style.position?i.style.position:getComputedStyle(i).position;(x===""||x==="static")&&(i.style.position="relative"),n.value.insertBefore(s,n.value.firstChild),setTimeout(function(){s.style.transform="translateX(".concat(f,"px)")},0);var _=function B(){s.style.backgroundColor=te,t.value&&(t.value.removeEventListener("pointerup",B,!1),t.value.removeEventListener("pointerleave",B,!1),setTimeout(function(){s.remove(),n.value.children.length===0&&n.value.remove()},T*2+100))};t.value.addEventListener("pointerup",_,!1),t.value.addEventListener("pointerleave",_,!1)}};z(function(){var r=t==null?void 0:t.value;!r||(n.value=document.createElement("div"),r.addEventListener("pointerdown",c,!1))}),F(function(){var r;t==null||(r=t.value)===null||r===void 0||r.removeEventListener("pointerdown",c,!1)})}/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var ie=U,oe=V,ue="[object Boolean]";function le(t){return t===!0||t===!1||oe(t)&&ie(t)==ue}var S=le;/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */function se(t){var e=$(),n=O(function(){return e.props.disabled}),a=M("formDisabled",Object.create(null));return O(function(){var o;return S(t==null?void 0:t.beforeDisabled.value)?t.beforeDisabled.value:S(n.value)?n.value:S(t==null?void 0:t.afterDisabled.value)?t.afterDisabled.value:S((o=a.disabled)===null||o===void 0?void 0:o.value)?a.disabled.value:!1})}/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */function D(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,a)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?D(Object(n),!0).forEach(function(a){d(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}var ce=K({name:"TButton",props:q,setup:function(e,n){var a=n.attrs,o=n.slots,l=W(),c=G(),r=P("button"),m=R(),i=m.STATUS,y=m.SIZE,b=A();re(b);var v=se(),h=O(function(){var u=e.theme,s=e.variant;return u||(s==="base"?"primary":"default")}),f=O(function(){return["".concat(r.value),"".concat(r.value,"--variant-").concat(e.variant),"".concat(r.value,"--theme-").concat(h.value),d(d(d(d(d(d({},y.value[e.size],e.size!=="medium"),i.value.disabled,v.value),i.value.loading,e.loading),"".concat(r.value,"--shape-").concat(e.shape),e.shape!=="rectangle"),"".concat(r.value,"--ghost"),e.ghost),y.value.block,e.block)]});return function(){var u=c("default","content"),s=e.loading?E(I,{inheritColor:!0},null):l("icon"),k=s&&!u,C=e.suffix||o.suffix?E("span",{className:"".concat(r.value,"__suffix")},[l("suffix")]):null;u=u?E("span",{class:"".concat(r.value,"__text")},[u]):"",s&&(u=[s,u]),C&&(u=[u].concat(C));var g=function(){return!e.tag&&e.href?"a":e.tag||"button"},p={class:[].concat(N(f.value),[d({},"".concat(r.value,"--icon-only"),k)]),type:e.type,disabled:v.value||e.loading,href:e.href,tabindex:v.value?void 0:"0"};return X(g(),j(j(j({ref:b},a),p),{},{onClick:e.onClick}),[u])}}});/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var pe=Z(ce);export{pe as B,re as a,S as i,se as u};
