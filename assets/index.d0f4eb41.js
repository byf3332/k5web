import{q as W,s as Q,t as Z,L as v,Q as S,Z as $,G as L,z as Y,y as tt,F as et,e as ct,af as it,_ as st}from"./index.abea991e.js";/* empty css              *//* empty css               *//* empty css              */import{d as N,c as w,o as ut,b as lt,f as pt,t as ft,p as dt,r as nt,aI as m,aU as at,i as gt,bH as mt,bN as bt,C as k,D as R,aH as y,aK as yt,aJ as vt,aE as Ot,G as M,u as z,aM as T,bI as _t,bL as jt,b7 as ht,bi as wt,bm as Pt,bn as xt}from"./arco.7dae27b5.js";import{e as Ct,b as Et,g as Dt}from"./serial.c741fbda.js";import{B as St}from"./index.e731b86b.js";import{i as A,P as Ft}from"./index.201867ea.js";import{i as F}from"./index.f3a75336.js";import{C as Nt}from"./index.39ed386b.js";import"./chart.e6650a02.js";import"./vue.9b8cbb5e.js";import"./dep-281dbb92.52d6d363.js";function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,a)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?U(Object(n),!0).forEach(function(a){Z(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var At={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M17.66 7.17l-5.3 5.3-1.42-1.41 5.3-5.3 1.42 1.41zm5.65 0l-10.6 10.6-6.37-6.36L7.76 10l4.95 4.95 9.19-9.2 1.41 1.42zM2.11 10l4.94 4.95.35-.35L8.82 16l-1.77 1.77L.69 11.4 2.1 10z"}}]},It=N({name:"CheckDoubleIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,t){var{attrs:n}=t,a=w(()=>e.size),{className:i,style:f}=W(a),c=w(()=>["t-icon","t-icon-check-double",i.value]),r=w(()=>V(V({},f.value),n.style)),s=w(()=>({class:c.value,style:r.value,onClick:l=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:l})}}));return()=>Q(At,s.value)}});const kt=It;function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,a)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?G(Object(n),!0).forEach(function(a){Z(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}var Bt={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M10.88 1.38l1.28.22a4 4 0 013.34 3.94V8h5.32a2 2 0 011.97 2.33l-1.66 10A2 2 0 0119.15 22H7V10.8l3.88-9.42zm1.23 2.26L9 11.2V20h10.15l1.67-10H13.5V5.54a2 2 0 00-1.39-1.9zM4 10v12H2V10h2z"}}]},$t=N({name:"ThumbUpIcon",props:{size:{type:String},onClick:{type:Function}},setup(e,t){var{attrs:n}=t,a=w(()=>e.size),{className:i,style:f}=W(a),c=w(()=>["t-icon","t-icon-thumb-up",i.value]),r=w(()=>H(H({},f.value),n.style)),s=w(()=>({class:c.value,style:r.value,onClick:l=>{var o;return(o=e.onClick)===null||o===void 0?void 0:o.call(e,{e:l})}}));return()=>Q(Bt,s.value)}});const Mt=$t;/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var Lt={align:{type:String,default:"top",validator:function(t){return t?["start","end","center","stretch","baseline","top","middle","bottom"].includes(t):!0}},gutter:{type:[Number,Object,Array],default:0},justify:{type:String,default:"start",validator:function(t){return t?["start","end","center","space-around","space-between"].includes(t):!0}},tag:{type:String,default:"div"}};/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var K=function(t){var n="xs";return t<768?n="xs":t>=768&&t<992?n="sm":t>=992&&t<1200?n="md":t>=1200&&t<1400?n="lg":t>=1400&&t<1880?n="xl":n="xxl",n};/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */function Rt(e,t){ut(function(){window.addEventListener(e,t)}),lt(function(){window.removeEventListener(e,t)})}/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,a)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?J(Object(n),!0).forEach(function(a){v(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function rt(){var e=pt(K(L?0:window.innerWidth)),t=function(){e.value=K(L?0:window.innerWidth)};return Rt("resize",t),e}function zt(e,t){var n=t.justify,a=t.align;return[e,v(v({},"".concat(e,"--").concat(n),n),"".concat(e,"--align-").concat(a),a)]}function Tt(e,t){var n={},a=function(r){return Object.assign(n,{marginLeft:"".concat(r/-2,"px"),marginRight:"".concat(r/-2,"px")})},i=function(r){return Object.assign(n,{rowGap:"".concat(r,"px")})},f={isNumber:function(r){F(r)&&a(r)},isArray:function(r){$(r)&&r.length&&(f.isNumber(r[0]),F(r[1])&&i(r[1]),S(r[0])&&!A(r[0][t])&&a(r[0][t]),S(r[1])&&!A(r[1][t])&&i(r[1][t]))},isObject:function(r){S(r)&&r[t]&&($(r)&&r.length?(a(r[t][0]),i(r[t][1])):a(r[t]))}};return Object.keys(f).forEach(function(c){f[c](e)}),n}function Ut(e){return F(e)?"".concat(e," ").concat(e," 0"):/^\d+(\.\d+)?(px|r?em|%)$/.test(e)?"0 0 ".concat(e):e}function Vt(e,t){var n={},a=function(c){return Object.assign(n,{paddingLeft:"".concat(c/2,"px"),paddingRight:"".concat(c/2,"px")})},i={isNumber:function(c){F(c)&&a(c)},isArray:function(c){$(c)&&c.length&&(F(c[0])&&a(c[0]),S(c[0])&&c[0][t]&&a(c[0][t]))},isObject:function(c){S(c)&&c[t]&&a(c[t])}};return Object.keys(i).forEach(function(f){i[f](e)}),n}function Gt(e,t){var n=t.span,a=t.order,i=t.offset,f=t.push,c=t.pull,r=["xs","sm","md","lg","xl","xxl"],s=r.reduce(function(l,o){var d=t[o],u={};return F(d)?u.span=d:S(d)&&(u=d||{}),B(B({},l),{},v(v(v(v(v({},"".concat(e,"-").concat(o,"-").concat(u.span),!A(u.span)),"".concat(e,"-").concat(o,"-order-").concat(u.order),parseInt(u.order,10)>=0),"".concat(e,"-").concat(o,"-offset-").concat(u.offset),parseInt(u.offset,10)>=0),"".concat(e,"-").concat(o,"-push-").concat(u.push),parseInt(u.push,10)>=0),"".concat(e,"-").concat(o,"-pull-").concat(u.pull),parseInt(u.pull,10)>=0))},{});return B(v(v(v(v(v(v({},"".concat(e),!0),"".concat(e,"-").concat(n),!A(n)),"".concat(e,"-order-").concat(a),a),"".concat(e,"-offset-").concat(i),i),"".concat(e,"-push-").concat(f),f),"".concat(e,"-pull-").concat(c),c),s)}/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,a)}return n}function Ht(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?q(Object(n),!0).forEach(function(a){v(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Kt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!at(e)}var Jt=N({name:"TRow",props:Ht({},Lt),setup:function(t){var n=ft(t),a=n.gutter,i=Y();dt("rowContext",nt({gutter:a}));var f=rt(),c=tt("row"),r=w(function(){return zt(c.value,t)}),s=w(function(){return Tt(t.gutter,f.value)});return function(){var l,o=t.tag;return m(o,{class:r.value,style:s.value},Kt(l=i("default"))?l:{default:function(){return[l]}})}}});/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var qt={flex:{type:[String,Number]},lg:{type:[Number,Object]},md:{type:[Number,Object]},offset:{type:Number,default:0},order:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},sm:{type:[Number,Object]},span:{type:Number},tag:{type:String,default:"div"},xl:{type:[Number,Object]},xs:{type:[Number,Object]},xxl:{type:[Number,Object]}};/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,a)}return n}function Xt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?X(Object(n),!0).forEach(function(a){v(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Wt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!at(e)}var Qt=N({name:"TCol",inject:["rowContext"],props:Xt({},qt),setup:function(t){var n=tt("col"),a=Y(),i=gt("rowContext",Object.create(null)),f=rt(),c=w(function(){return Gt(n.value,t)}),r=w(function(){var s={},l=t.flex;if(l&&(s.flex=Ut(l)),i){var o=i.gutter;Object.assign(s,Vt(o,f.value))}return s});return function(){var s,l=t.tag;return m(l,{class:c.value,style:r.value},Wt(s=a("default"))?s:{default:function(){return[s]}})}}});/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var Zt=et(Jt),Yt=et(Qt);const ot=e=>(Pt("data-v-c78c7c23"),e=e(),xt(),e),te={class:"container"},ee=["title","src"],ne=ot(()=>M("div",{id:"canvasDiv",style:{zoom:"250%"}},null,-1)),ae=ot(()=>M("br",null,null,-1)),re={name:"Backup"},oe=N({...re,setup(e){const t=ct(),n=nt({binaryFile:void 0,loading:!1}),a=r=>{alert("\u56FE\u7247\u5DE5\u574A\u5373\u5C06\u63A8\u51FA")},i=r=>{const s=document.createElement("canvas");s.width=128,s.height=64;const l=s.cloneNode(),o=document.getElementById("canvasDiv");o.innerHTML="",o==null||o.append(s,l);const d=new Image;d.src=r.url,d.onload=()=>{const u=s.getContext("2d");u==null||u.drawImage(d,0,0,128,64);const h=u==null?void 0:u.getImageData(0,0,s.width,s.height).data;function b(O,_){const p=(_*128+O)*4;return h[p]+h[p+1]+h[p+2]>128*3?0:1}const x=l.getContext("2d"),P=x.getImageData(0,0,l.width,l.height);for(let O=0;O<64;O++)for(let _=0;_<128;_++){const p=(O*128+_)*4,D=!b(_,O);P.data[p]=D*255,P.data[p+1]=D*255,P.data[p+2]=D*255,P.data[p+3]=255}x.putImageData(P,0,0);const E=new Uint8Array(1024);let C=0;for(let O=0;O<64;O+=8)for(let _=0;_<128;_++){let g=0;for(let p=0;p<8;p++)g|=b(_,O+p)<<p;E[C++]=g}n.binaryFile=E}},f=()=>{const r=document.createElement("input");r.type="file",r.onchange=async()=>{const s=new Blob([r.files[0]],{type:"application/octet-stream"}),l=URL.createObjectURL(s),o=document.createElement("canvas");o.width=128,o.height=64;const d=o.cloneNode(),u=document.getElementById("canvasDiv");u.innerHTML="",u==null||u.append(o,d);const h=new Image;h.src=l,h.onload=()=>{const b=o.getContext("2d");b==null||b.drawImage(h,0,0,128,64);const x=b==null?void 0:b.getImageData(0,0,o.width,o.height).data;function P(g,p){const j=(p*128+g)*4;return x[j]+x[j+1]+x[j+2]>128*3?0:1}const E=d.getContext("2d"),C=E.getImageData(0,0,d.width,d.height);for(let g=0;g<64;g++)for(let p=0;p<128;p++){const j=(g*128+p)*4,I=!P(p,g);C.data[j]=I*255,C.data[j+1]=I*255,C.data[j+2]=I*255,C.data[j+3]=255}E.putImageData(C,0,0);const O=new Uint8Array(1024);let _=0;for(let g=0;g<64;g+=8)for(let p=0;p<128;p++){let D=0;for(let j=0;j<8;j++)D|=P(p,g+j)<<j;O[_++]=D}n.binaryFile=O}},r.click()},c=async()=>{var l,o,d,u,h;if(t.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}if(((l=t.configuration)==null?void 0:l.uart)=="official"){alert("\u56FA\u4EF6\u7248\u672C\u4E0D\u5339\u914D");return}if(((o=t.configuration)==null?void 0:o.charset)!="losehu"&&((d=t.configuration)==null?void 0:d.charset)!="gb2312"){alert("\u56FA\u4EF6\u7248\u672C\u4E0D\u5339\u914D");return}n.loading=!0;let r=123728;((u=t.configuration)==null?void 0:u.charset)=="gb2312"&&(r=8320),await Ct(t.connectPort);const s=n.binaryFile;for(let b=r;b<s.length+r;b+=128)await Et(t.connectPort,b,s.slice(b-r,b-r+128),128,(h=t.configuration)==null?void 0:h.uart);await Dt(t.connectPort),n.loading=!1};return(r,s)=>{const l=it,o=St,d=Yt,u=Zt,h=Nt,b=_t,x=jt,P=Ft,E=ht,C=wt,O=mt,_=bt;return k(),R("div",te,[m(l,{items:["\u5C0F\u5DE5\u5177","\u5F00\u673A\u56FE\u7247"]}),m(x,{gutter:20,align:"stretch"},{default:y(()=>[m(b,{span:24},{default:y(()=>[m(_,{loading:n.loading,tip:"\u5199\u5165\u4E2D...",style:{width:"100%"}},{default:y(()=>[m(O,{class:"general-card",title:"\u5F00\u673A\u56FE\u7247\uFF08\u624B\u53F0\u5E94\u5728\u5F00\u673A\u72B6\u6001\u4E0B\uFF09"},{default:y(()=>[m(x,{gutter:20},{default:y(()=>[(k(!0),R(yt,null,vt([{name:"\u7F57\u72EE\u864E",url:"/img1.png"},{name:"\u79BB\u7EBF\u5C0F\u6050\u9F99",url:"/img2.png"},{name:"\u4E0D\u5FD8\u521D\u5FC3\u7262\u8BB0\u4F7F\u547D",url:"/img3.png"},{name:"\u4E3A\u4EBA\u6C11\u670D\u52A1",url:"/img4.png"},{name:"\u4E25\u7981\u6536\u542C\u654C\u53F0\u5E7F\u64AD",url:"/img5.png"},{name:"\u7231\u56E0\u65AF\u5766",url:"/img6.png"}],g=>(k(),Ot(b,{span:4},{default:y(()=>[m(h,{style:{width:"100%"}},{cover:y(()=>[M("img",{title:g.name,src:g.url},null,8,ee)]),footer:y(()=>[m(u,{align:"middle",justify:"center",style:{gap:"24px"}},{default:y(()=>[m(d,{flex:"auto",style:{display:"inline-flex","justify-content":"center"}},{default:y(()=>[m(o,{variant:"text",shape:"square",onClick:p=>a(g)},{default:y(()=>[m(z(Mt))]),_:2},1032,["onClick"])]),_:2},1024),m(d,{flex:"auto",style:{display:"inline-flex","justify-content":"center"}},{default:y(()=>[m(o,{variant:"text",shape:"square",onClick:p=>i(g)},{default:y(()=>[m(z(kt))]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),256))]),_:1}),m(P,{style:{margin:"10px"},total:6,showPageNumber:"",showPageSize:!1}),ne,ae,m(C,null,{default:y(()=>[m(E,{onClick:f},{default:y(()=>[T("\u9009\u62E9\u56FE\u7247")]),_:1}),m(E,{type:"primary",disabled:!n.binaryFile,onClick:c},{default:y(()=>[T("\u5199\u5165")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["loading"])]),_:1})]),_:1})])}}});const Oe=st(oe,[["__scopeId","data-v-c78c7c23"]]);export{Oe as default};
