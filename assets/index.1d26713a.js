import{at as Ne,au as Oa,av as Ke,K as Ge,a7 as Ue,aw as ne,ax as Sa,ay as q,az as wa,a0 as re,O as E,aA as te,aB as j,Q as z,aC as qe,aD as Ea,a4 as Pa,aE as Ia,aF as xa,aG as La,aH as ja,aI as ze,aJ as Ma,aK as Da,aL as Ra,aM as Fa,ag as He,x as Xe,N as Ba,a5 as Na,aN as Ka,aO as We,a9 as G,aP as ce,J as O,y as C,A as fe,aQ as Ga,ah as Ze,a2 as ke,X as Ua,aR as Q,aS as V,aa as ve,ai as qa,aT as za,aU as Ha,af as Xa,aV as Wa,F as Je,aW as ie,G as Za,z as ka,Z as Ja}from"./index.e9286132.js";import{d as H,o as X,g as Ye,n as Ya,aI as m,c as _,f as x,w as Qe,t as Qa,b0 as R,aW as de,r as Va,h as Ve,bc as en,aZ as an,i as nn}from"./arco.93f0afda.js";/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */function rn(e,a){for(var n=-1,r=a.length,i=e.length;++n<r;)e[i+n]=a[n];return e}var ea=rn;function tn(e,a){for(var n=-1,r=e==null?0:e.length,i=0,t=[];++n<r;){var s=e[n];a(s,n,e)&&(t[i++]=s)}return t}var sn=tn;/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var on=Ia,ln=xa,un=La;function cn(e){return un(e)?on(e):ln(e)}var M=cn,fn=ea,vn=E;function dn(e,a,n){var r=a(e);return vn(e)?r:fn(r,n(e))}var aa=dn;function gn(){return[]}var na=gn,yn=sn,pn=na,bn=Object.prototype,hn=bn.propertyIsEnumerable,ge=Object.getOwnPropertySymbols,mn=ge?function(e){return e==null?[]:(e=Object(e),yn(ge(e),function(a){return hn.call(e,a)}))}:pn,se=mn,_n=aa,$n=se,Cn=M;function An(e){return _n(e,Cn,$n)}var ra=An;function Tn(e,a){for(var n=-1,r=e==null?0:e.length;++n<r&&a(e[n],n,e)!==!1;);return e}var On=Tn,Sn=z,wn=M;function En(e,a){return e&&Sn(a,wn(a),e)}var Pn=En,In=z,xn=te;function Ln(e,a){return e&&In(a,xn(a),e)}var jn=Ln,Mn=z,Dn=se;function Rn(e,a){return Mn(e,Dn(e),a)}var Fn=Rn,Bn=ea,Nn=ja,Kn=se,Gn=na,Un=Object.getOwnPropertySymbols,qn=Un?function(e){for(var a=[];e;)Bn(a,Kn(e)),e=Nn(e);return a}:Gn,ta=qn,zn=z,Hn=ta;function Xn(e,a){return zn(e,Hn(e),a)}var Wn=Xn,Zn=aa,kn=ta,Jn=te;function Yn(e){return Zn(e,Jn,kn)}var Qn=Yn,Vn=Object.prototype,er=Vn.hasOwnProperty;function ar(e){var a=e.length,n=new e.constructor(a);return a&&typeof e[0]=="string"&&er.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var nr=ar,rr=qe;function tr(e,a){var n=a?rr(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var ir=tr,sr=/\w*$/;function or(e){var a=new e.constructor(e.source,sr.exec(e));return a.lastIndex=e.lastIndex,a}var lr=or,ye=Ge,pe=ye?ye.prototype:void 0,be=pe?pe.valueOf:void 0;function ur(e){return be?Object(be.call(e)):{}}var cr=ur,fr=qe,vr=ir,dr=lr,gr=cr,yr=Ea,pr="[object Boolean]",br="[object Date]",hr="[object Map]",mr="[object Number]",_r="[object RegExp]",$r="[object Set]",Cr="[object String]",Ar="[object Symbol]",Tr="[object ArrayBuffer]",Or="[object DataView]",Sr="[object Float32Array]",wr="[object Float64Array]",Er="[object Int8Array]",Pr="[object Int16Array]",Ir="[object Int32Array]",xr="[object Uint8Array]",Lr="[object Uint8ClampedArray]",jr="[object Uint16Array]",Mr="[object Uint32Array]";function Dr(e,a,n){var r=e.constructor;switch(a){case Tr:return fr(e);case pr:case br:return new r(+e);case Or:return vr(e,n);case Sr:case wr:case Er:case Pr:case Ir:case xr:case Lr:case jr:case Mr:return yr(e,n);case hr:return new r;case mr:case Cr:return new r(e);case _r:return dr(e);case $r:return new r;case Ar:return gr(e)}}var Rr=Dr,Fr=q,Br=j,Nr="[object Map]";function Kr(e){return Br(e)&&Fr(e)==Nr}var Gr=Kr,Ur=Gr,qr=Ue,he=Ne.exports,me=he&&he.isMap,zr=me?qr(me):Ur,Hr=zr,Xr=q,Wr=j,Zr="[object Set]";function kr(e){return Wr(e)&&Xr(e)==Zr}var Jr=kr,Yr=Jr,Qr=Ue,_e=Ne.exports,$e=_e&&_e.isSet,Vr=$e?Qr($e):Yr,et=Vr,at=ne,nt=On,rt=Pa,tt=Pn,it=jn,st=Oa.exports,ot=Sa,lt=Fn,ut=Wn,ct=ra,ft=Qn,vt=q,dt=nr,gt=Rr,yt=wa,pt=E,bt=Ke.exports,ht=Hr,mt=re,_t=et,$t=M,Ct=te,At=1,Tt=2,Ot=4,ia="[object Arguments]",St="[object Array]",wt="[object Boolean]",Et="[object Date]",Pt="[object Error]",sa="[object Function]",It="[object GeneratorFunction]",xt="[object Map]",Lt="[object Number]",oa="[object Object]",jt="[object RegExp]",Mt="[object Set]",Dt="[object String]",Rt="[object Symbol]",Ft="[object WeakMap]",Bt="[object ArrayBuffer]",Nt="[object DataView]",Kt="[object Float32Array]",Gt="[object Float64Array]",Ut="[object Int8Array]",qt="[object Int16Array]",zt="[object Int32Array]",Ht="[object Uint8Array]",Xt="[object Uint8ClampedArray]",Wt="[object Uint16Array]",Zt="[object Uint32Array]",y={};y[ia]=y[St]=y[Bt]=y[Nt]=y[wt]=y[Et]=y[Kt]=y[Gt]=y[Ut]=y[qt]=y[zt]=y[xt]=y[Lt]=y[oa]=y[jt]=y[Mt]=y[Dt]=y[Rt]=y[Ht]=y[Xt]=y[Wt]=y[Zt]=!0;y[Pt]=y[sa]=y[Ft]=!1;function K(e,a,n,r,i,t){var s,o=a&At,u=a&Tt,l=a&Ot;if(n&&(s=i?n(e,r,i,t):n(e)),s!==void 0)return s;if(!mt(e))return e;var f=pt(e);if(f){if(s=dt(e),!o)return ot(e,s)}else{var c=vt(e),v=c==sa||c==It;if(bt(e))return st(e,o);if(c==oa||c==ia||v&&!i){if(s=u||v?{}:yt(e),!o)return u?ut(e,it(s,e)):lt(e,tt(s,e))}else{if(!y[c])return i?e:{};s=gt(e,c,o)}}t||(t=new at);var h=t.get(e);if(h)return h;t.set(e,s),_t(e)?e.forEach(function(g){s.add(K(g,a,n,g,e,t))}):ht(e)&&e.forEach(function(g,b){s.set(b,K(g,a,n,b,e,t))});var p=l?u?ft:ct:u?Ct:$t,d=f?void 0:p(e);return nt(d||e,function(g,b){d&&(b=g,g=e[b]),rt(s,b,K(g,a,n,b,e,t))}),s}var Ol=K;/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var kt="__lodash_hash_undefined__";function Jt(e){return this.__data__.set(e,kt),this}var Yt=Jt;function Qt(e){return this.__data__.has(e)}var Vt=Qt,ei=ze,ai=Yt,ni=Vt;function U(e){var a=-1,n=e==null?0:e.length;for(this.__data__=new ei;++a<n;)this.add(e[a])}U.prototype.add=U.prototype.push=ai;U.prototype.has=ni;var ri=U;function ti(e,a){return e.has(a)}var ii=ti;/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */function si(e){var a=-1,n=Array(e.size);return e.forEach(function(r){n[++a]=r}),n}var oi=si;/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */function li(e,a){for(var n=-1,r=e==null?0:e.length;++n<r;)if(a(e[n],n,e))return!0;return!1}var ui=li,ci=ri,fi=ui,vi=ii,di=1,gi=2;function yi(e,a,n,r,i,t){var s=n&di,o=e.length,u=a.length;if(o!=u&&!(s&&u>o))return!1;var l=t.get(e),f=t.get(a);if(l&&f)return l==a&&f==e;var c=-1,v=!0,h=n&gi?new ci:void 0;for(t.set(e,a),t.set(a,e);++c<o;){var p=e[c],d=a[c];if(r)var g=s?r(d,p,c,a,e,t):r(p,d,c,e,a,t);if(g!==void 0){if(g)continue;v=!1;break}if(h){if(!fi(a,function(b,$){if(!vi(h,$)&&(p===b||i(p,b,n,r,t)))return h.push($)})){v=!1;break}}else if(!(p===d||i(p,d,n,r,t))){v=!1;break}}return t.delete(e),t.delete(a),v}var la=yi;function pi(e){var a=-1,n=Array(e.size);return e.forEach(function(r,i){n[++a]=[i,r]}),n}var bi=pi,Ce=Ge,Ae=Da,hi=Ra,mi=la,_i=bi,$i=oi,Ci=1,Ai=2,Ti="[object Boolean]",Oi="[object Date]",Si="[object Error]",wi="[object Map]",Ei="[object Number]",Pi="[object RegExp]",Ii="[object Set]",xi="[object String]",Li="[object Symbol]",ji="[object ArrayBuffer]",Mi="[object DataView]",Te=Ce?Ce.prototype:void 0,Z=Te?Te.valueOf:void 0;function Di(e,a,n,r,i,t,s){switch(n){case Mi:if(e.byteLength!=a.byteLength||e.byteOffset!=a.byteOffset)return!1;e=e.buffer,a=a.buffer;case ji:return!(e.byteLength!=a.byteLength||!t(new Ae(e),new Ae(a)));case Ti:case Oi:case Ei:return hi(+e,+a);case Si:return e.name==a.name&&e.message==a.message;case Pi:case xi:return e==a+"";case wi:var o=_i;case Ii:var u=r&Ci;if(o||(o=$i),e.size!=a.size&&!u)return!1;var l=s.get(e);if(l)return l==a;r|=Ai,s.set(e,a);var f=mi(o(e),o(a),r,i,t,s);return s.delete(e),f;case Li:if(Z)return Z.call(e)==Z.call(a)}return!1}var Ri=Di,Oe=ra,Fi=1,Bi=Object.prototype,Ni=Bi.hasOwnProperty;function Ki(e,a,n,r,i,t){var s=n&Fi,o=Oe(e),u=o.length,l=Oe(a),f=l.length;if(u!=f&&!s)return!1;for(var c=u;c--;){var v=o[c];if(!(s?v in a:Ni.call(a,v)))return!1}var h=t.get(e),p=t.get(a);if(h&&p)return h==a&&p==e;var d=!0;t.set(e,a),t.set(a,e);for(var g=s;++c<u;){v=o[c];var b=e[v],$=a[v];if(r)var A=s?r($,b,v,a,e,t):r(b,$,v,e,a,t);if(!(A===void 0?b===$||i(b,$,n,r,t):A)){d=!1;break}g||(g=v=="constructor")}if(d&&!g){var T=e.constructor,S=a.constructor;T!=S&&"constructor"in e&&"constructor"in a&&!(typeof T=="function"&&T instanceof T&&typeof S=="function"&&S instanceof S)&&(d=!1)}return t.delete(e),t.delete(a),d}var Gi=Ki,k=ne,Ui=la,qi=Ri,zi=Gi,Se=q,we=E,Ee=Ke.exports,Hi=Ma,Xi=1,Pe="[object Arguments]",Ie="[object Array]",F="[object Object]",Wi=Object.prototype,xe=Wi.hasOwnProperty;function Zi(e,a,n,r,i,t){var s=we(e),o=we(a),u=s?Ie:Se(e),l=o?Ie:Se(a);u=u==Pe?F:u,l=l==Pe?F:l;var f=u==F,c=l==F,v=u==l;if(v&&Ee(e)){if(!Ee(a))return!1;s=!0,f=!1}if(v&&!f)return t||(t=new k),s||Hi(e)?Ui(e,a,n,r,i,t):qi(e,a,u,n,r,i,t);if(!(n&Xi)){var h=f&&xe.call(e,"__wrapped__"),p=c&&xe.call(a,"__wrapped__");if(h||p){var d=h?e.value():e,g=p?a.value():a;return t||(t=new k),i(d,g,n,r,t)}}return v?(t||(t=new k),zi(e,a,n,r,i,t)):!1}var ki=Zi,Ji=ki,Le=j;function ua(e,a,n,r,i){return e===a?!0:e==null||a==null||!Le(e)&&!Le(a)?e!==e&&a!==a:Ji(e,a,n,r,ua,i)}var oe=ua,Yi=oe;function Qi(e,a){return Yi(e,a)}var Vi=Qi;/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var es=E,as=He,ns=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,rs=/^\w*$/;function ts(e,a){if(es(e))return!1;var n=Xe(e);return n=="number"||n=="symbol"||n=="boolean"||e==null||as(e)?!0:rs.test(e)||!ns.test(e)||a!=null&&e in Object(a)}var le=ts,ca=ze,is="Expected a function";function ue(e,a){if(typeof e!="function"||a!=null&&typeof a!="function")throw new TypeError(is);var n=function r(){var i=arguments,t=a?a.apply(this,i):i[0],s=r.cache;if(s.has(t))return s.get(t);var o=e.apply(this,i);return r.cache=s.set(t,o)||s,o};return n.cache=new(ue.Cache||ca),n}ue.Cache=ca;var ss=ue,os=ss,ls=500;function us(e){var a=os(e,function(r){return n.size===ls&&n.clear(),r}),n=a.cache;return a}var cs=us,fs=cs,vs=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ds=/\\(\\)?/g,gs=fs(function(e){var a=[];return e.charCodeAt(0)===46&&a.push(""),e.replace(vs,function(n,r,i,t){a.push(i?t.replace(ds,"$1"):r||n)}),a}),ys=gs,ps=E,bs=le,hs=ys,ms=Fa;function _s(e,a){return ps(e)?e:bs(e,a)?[e]:hs(ms(e))}var fa=_s,$s=He,Cs=1/0;function As(e){if(typeof e=="string"||$s(e))return e;var a=e+"";return a=="0"&&1/e==-Cs?"-0":a}var W=As,Ts=fa,Os=W;function Ss(e,a){a=Ts(a,e);for(var n=0,r=a.length;e!=null&&n<r;)e=e[Os(a[n++])];return n&&n==r?e:void 0}var va=Ss;/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var ws=va;function Es(e,a,n){var r=e==null?void 0:ws(e,a);return r===void 0?n:r}var Ps=Es;/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */function Is(e,a){return e!=null&&a in Object(e)}var xs=Is,Ls=fa,js=Ba,Ms=E,Ds=Na,Rs=Ka,Fs=W;function Bs(e,a,n){a=Ls(a,e);for(var r=-1,i=a.length,t=!1;++r<i;){var s=Fs(a[r]);if(!(t=e!=null&&n(e,s)))break;e=e[s]}return t||++r!=i?t:(i=e==null?0:e.length,!!i&&Rs(i)&&Ds(s,i)&&(Ms(e)||js(e)))}var Ns=Bs,Ks=xs,Gs=Ns;function Us(e,a){return e!=null&&Gs(e,a,Ks)}var qs=Us;/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */function zs(e){return function(a){return a==null?void 0:a[e]}}var Hs=zs;/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var Xs=We,Ws=j,Zs="[object Number]";function ks(e){return typeof e=="number"||Ws(e)&&Xs(e)==Zs}var Js=ks;/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */function Ys(){if(typeof navigator>"u"||!navigator)return Number.MAX_SAFE_INTEGER;var e=navigator,a=e.userAgent,n=a.indexOf("compatible")>-1&&a.indexOf("MSIE")>-1,r=a.indexOf("Trident")>-1&&a.indexOf("rv:11.0")>-1;if(n){var i=new RegExp("MSIE (\\d+\\.\\d+);"),t=a.match(i);if(!t)return-1;var s=parseFloat(t[1]);return s<7?6:s}return r?11:Number.MAX_SAFE_INTEGER}function Sl(e,a){var n=Js(a);if(!e||e.length===0)return n?{length:0,characters:e}:0;for(var r=0,i=0;i<e.length;i++){var t=0;if(e.charCodeAt(i)>127?t=2:t=1,n&&r+t>a)return{length:r,characters:e.slice(0,i)};r+=t}return n?{length:r,characters:e}:r}function wl(e){return G(e!=null?e:"").length}function El(e,a,n){return G(n!=null?n:"").slice().length===a?n||"":G(e!=null?e:"").slice(0,a).join("")}/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */function je(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function B(e){for(var a=1;a<arguments.length;a++){var n=arguments[a]!=null?arguments[a]:{};a%2?je(Object(n),!0).forEach(function(r){O(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):je(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Qs(e){var a,n,r,i={};if(!(!e||typeof window>"u")){var t=(a=window)===null||a===void 0||(n=a.getComputedStyle)===null||n===void 0?void 0:n.call(a,e),s=t.color,o=t.fontSize,u=(r=window)===null||r===void 0||(r=r.navigator)===null||r===void 0?void 0:r.userAgent,l=/Safari/.test(u)&&!/Chrome/.test(u),f=/(?=.*iPhone)[?=.*MicroMessenger]/.test(u)&&!/Chrome/.test(u);if((l||f)&&(i={transformOrigin:"0px 0px",transform:"scale(".concat(parseInt(o,10)/12,")")}),s&&Ys()>11){var c=s.match(/[\d.]+/g),v=c?"rgba(".concat(c[0],", ").concat(c[1],", ").concat(c[2],", 0)"):"";ce(e,B(B({},i),{},{background:"conic-gradient(from 90deg at 50% 50%,".concat(v," 0deg, ").concat(s," 360deg)")}))}else ce(e,B(B({},i),{},{background:""}))}}/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var Vs=H({name:"TLoadingGradient",setup:function(){var a=C();return X(function(){var n=Ye().refs.circle;Ya(function(){Qs(n)})}),{classPrefix:a}},render:function(){var a=this.classPrefix,n="".concat(a,"-loading__gradient"),r=[n,"".concat(a,"-icon-loading")];return m("svg",{class:r,viewBox:"0 0 12 12",version:"1.1",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg"},[m("foreignObject",{x:"0",y:"0",width:"12",height:"12"},[m("div",{class:"".concat(n,"-conic"),ref:"circle"},null)])])}});/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var eo={attach:{type:[String,Function],default:""},content:{type:[String,Function]},default:{type:[String,Function]},delay:{type:Number,default:0},fullscreen:Boolean,indicator:{type:[Boolean,Function],default:!0},inheritColor:Boolean,loading:{type:Boolean,default:!0},preventScrollThrough:{type:Boolean,default:!0},showOverlay:{type:Boolean,default:!0},size:{type:String,default:"medium"},text:{type:[String,Function]},zIndex:{type:Number}};/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var ao=function(a,n){var r=fe(a)?_(a):x(a),i=fe(n)?_(n):x(n),t=x(),s=function(){t.value=Ga()||Ze(r.value,i.value)};return X(function(){return s()}),Qe([r,i],function(){return s()}),t};/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var no=function(){return{name:C("loading"),centerClass:C("loading--center"),fullscreenClass:C("loading__fullscreen"),lockClass:C("loading--lock"),overlayClass:C("loading__overlay"),relativeClass:C("loading__parent"),fullClass:C("loading--full"),inheritColorClass:C("loading--inherit-color")}},ee=H({name:"TLoading",inheritAttrs:!1,props:eo,setup:function(a,n){var r=n.slots,i=x(!1),t=no(),s=t.name,o=t.centerClass,u=t.fullscreenClass,l=t.lockClass,f=t.overlayClass,c=t.relativeClass,v=t.fullClass,h=t.inheritColorClass,p=C(),d=ke(),g=d.SIZE,b=function(){i.value=!1;var L=setTimeout(function(){i.value=!0,clearTimeout(L)},a.delay)},$=ao(function(){return a.attach}),A=_(function(){return Boolean(!a.delay||a.delay&&i.value)}),T=_(function(){var w={};return a.zIndex!==void 0&&(w.zIndex=a.zIndex),["small","medium","large"].includes(a.size)||(w["font-size"]=a.size),w}),S=_(function(){return Boolean(a.default||r.default||a.content||r.content)}),P=_(function(){return a.preventScrollThrough&&a.fullscreen}),D=_(function(){return Boolean(a.text||r.text)}),ba=_(function(){return S.value&&a.loading&&A.value}),ha=_(function(){return a.fullscreen&&a.loading&&A.value}),ma=_(function(){return a.attach&&a.loading&&A.value}),_a=_(function(){return a.attach&&a.loading&&A.value}),$a=_(function(){var w=[o.value,g.value[a.size],O({},h.value,a.inheritColor)],L=[s.value,u.value,o.value,f.value];return{baseClasses:w,attachClasses:w.concat([s.value,v.value,O({},f.value,a.showOverlay)]),withContentClasses:w.concat([s.value,v.value,O({},f.value,a.showOverlay)]),fullScreenClasses:L,normalClasses:w.concat([s.value])}}),Ca=Qa(a),Aa=Ca.loading;return Qe([Aa],function(w){var L=Ua(w,1),Ta=L[0];Ta?(b(),P.value&&Q(document.body,l.value)):P.value&&V(document.body,l.value)}),X(function(){a.delay&&b()}),{classPrefix:p,relativeClass:c,delayShowLoading:i,styles:T,showText:D,hasContent:S,classes:$a,lockFullscreen:P,showWrapLoading:ba,showNormalLoading:ma,showFullScreenLoading:ha,showAttachedLoading:_a,teleportElement:$}},render:function(){var a=this,n=this.classes,r=n.fullScreenClasses,i=n.baseClasses,t=n.withContentClasses,s=n.attachClasses,o=n.normalClasses,u=m(Vs,{size:this.size},null),l=this.loading&&ve(this,"indicator",u),f=this.showText&&m("div",{class:"".concat(this.classPrefix,"-loading__text")},[ve(this,"text")]);return this.fullscreen?!this.showFullScreenLoading||!this.loading?null:m(de,{disabled:!this.attach||!this.teleportElement,to:this.teleportElement},{default:function(){return[m("div",R({class:r,style:a.styles},a.$attrs),[m("div",{class:i},[l,f])])]}}):this.hasContent?m("div",R({class:this.relativeClass},this.$attrs),[qa(this,"default","content"),this.showWrapLoading&&m("div",{class:t,style:this.styles},[l,f])]):this.attach?!this.showAttachedLoading||!this.loading?null:m(de,{disabled:!this.attach||!this.teleportElement,to:this.teleportElement},{default:function(){return[m("div",R({class:s,style:a.styles},a.$attrs),[l,f])]}}):this.loading?m("div",R({class:o,style:this.styles},this.$attrs),[l,f]):null}});/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */function Me(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ro(e){for(var a=1;a<arguments.length;a++){var n=arguments[a]!=null?arguments[a]:{};a%2?Me(Object(n),!0).forEach(function(r){O(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Me(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var I=null;function to(e){var a=za({fullscreen:!1,attach:"body",loading:!0,preventScrollThrough:!0},e);return a}function De(e){var a=to(e);if(a.fullscreen&&I)return I;var n=H({setup:function(){var c=Va(a);return{loadingOptions:c}},render:function(){return Ve(ee,ro({},this.loadingOptions))}}),r=Ze(a.fullscreen?"body":a.attach),i=en(n),t=i.mount(document.createElement("div")),s=C("loading__parent--relative").value,o=C("loading--lock"),u=a.preventScrollThrough&&a.fullscreen;u&&Q(document.body,o.value),r?Q(r,s):console.error("attach is not exist");var l={hide:function(){t.loading=!1,V(r,s),V(document.body,o.value),i.unmount()}};return l}function da(e){if(e===!0)return I=De({fullscreen:!0,loading:!0,attach:"body",preventScrollThrough:!0}),I;if(e===!1){var a;(a=I)===null||a===void 0||a.hide(),I=null;return}return De(e)}var ga=da;ga.install=function(e){e.config.globalProperties.$loading=da};/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var io=Ha,so=M;function oo(e,a){return e&&io(e,a,so)}var lo=oo,uo=ne,co=oe,fo=1,vo=2;function go(e,a,n,r){var i=n.length,t=i,s=!r;if(e==null)return!t;for(e=Object(e);i--;){var o=n[i];if(s&&o[2]?o[1]!==e[o[0]]:!(o[0]in e))return!1}for(;++i<t;){o=n[i];var u=o[0],l=e[u],f=o[1];if(s&&o[2]){if(l===void 0&&!(u in e))return!1}else{var c=new uo;if(r)var v=r(l,f,u,e,a,c);if(!(v===void 0?co(f,l,fo|vo,r,c):v))return!1}}return!0}var yo=go,po=re;function bo(e){return e===e&&!po(e)}var ya=bo,ho=ya,mo=M;function _o(e){for(var a=mo(e),n=a.length;n--;){var r=a[n],i=e[r];a[n]=[r,i,ho(i)]}return a}var $o=_o;function Co(e,a){return function(n){return n==null?!1:n[e]===a&&(a!==void 0||e in Object(n))}}var pa=Co,Ao=yo,To=$o,Oo=pa;function So(e){var a=To(e);return a.length==1&&a[0][2]?Oo(a[0][0],a[0][1]):function(n){return n===e||Ao(n,e,a)}}var wo=So,Eo=oe,Po=Ps,Io=qs,xo=le,Lo=ya,jo=pa,Mo=W,Do=1,Ro=2;function Fo(e,a){return xo(e)&&Lo(a)?jo(Mo(e),a):function(n){var r=Po(n,e);return r===void 0&&r===a?Io(n,e):Eo(a,r,Do|Ro)}}var Bo=Fo,No=va;function Ko(e){return function(a){return No(a,e)}}var Go=Ko,Uo=Hs,qo=Go,zo=le,Ho=W;function Xo(e){return zo(e)?Uo(Ho(e)):qo(e)}var Wo=Xo,Zo=wo,ko=Bo,Jo=Xa,Yo=E,Qo=Wo;function Vo(e){return typeof e=="function"?e:e==null?Jo:Xe(e)=="object"?Yo(e)?ko(e[0],e[1]):Zo(e):Qo(e)}var el=Vo,al=Wa,nl=lo,rl=el;function tl(e,a){var n={};return a=rl(a),nl(e,function(r,i,t){al(n,a(r,i,t),r)}),n}var il=tl,ae=Symbol("TdLoading"),Re=function(a,n){var r=n.modifiers,i=r.fullscreen,t=r.inheritColor,s={attach:function(){return a},fullscreen:i!=null?i:!1,inheritColor:t!=null?t:!1,loading:n.value};re(n.value)&&il(n.value,function(o,u){s[u]=o}),a[ae]={options:s,instance:ga(s)}},sl={mounted:function(a,n){n.value&&Re(a,n)},updated:function(a,n){var r=a[ae],i=n.value,t=n.oldValue;if(!Vi(i,t)){var s,o=(s=i==null?void 0:i.loading)!==null&&s!==void 0?s:i;o?Re(a,n):r==null||r.instance.hide()}},unmounted:function(a){var n;(n=a[ae])===null||n===void 0||n.instance.hide()}};/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var ol=Je(ee,ee.name,{name:"loading",comp:sl});/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var ll={block:Boolean,content:{type:[String,Function]},default:{type:[String,Function]},disabled:{type:Boolean,default:void 0},ghost:Boolean,href:{type:String,default:""},icon:{type:Function},loading:Boolean,shape:{type:String,default:"rectangle",validator:function(a){return a?["rectangle","square","round","circle"].includes(a):!0}},size:{type:String,default:"medium",validator:function(a){return a?["extra-small","small","medium","large"].includes(a):!0}},suffix:{type:Function},tag:{type:String,validator:function(a){return a?["button","a","div"].includes(a):!0}},theme:{type:String,validator:function(a){return a?["default","primary","danger","warning","success"].includes(a):!0}},type:{type:String,default:"button",validator:function(a){return a?["submit","reset","button"].includes(a):!0}},variant:{type:String,default:"base",validator:function(a){return a?["base","outline","dashed","text"].includes(a):!0}},onClick:Function};/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var ul=ie.expand,cl=ie.ripple,fl=ie.fade;function vl(){var e=Za("animation"),a=e.globalConfig,n=function(i){var t,s,o=a.value;return o&&!((t=o.exclude)!==null&&t!==void 0&&t.includes(i))&&((s=o.include)===null||s===void 0?void 0:s.includes(i))};return{keepExpand:n(ul),keepRipple:n(cl),keepFade:n(fl)}}/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */function Fe(e,a){var n=Object.keys(a);n.forEach(function(r){e.style[r]=a[r]})}/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var J=200,dl="rgba(0, 0, 0, 0)",gl="rgba(0, 0, 0, 0.35)",yl=function(a,n){var r;if(n)return n;if(a!=null&&(r=a.dataset)!==null&&r!==void 0&&r.ripple){var i=a.dataset.ripple;return i}var t=getComputedStyle(a).getPropertyValue("--ripple-color");return t||gl};function pl(e,a){var n=x(null),r=C(),i=vl(),t=i.keepRipple,s=function(u){var l=e.value,f=yl(l,a==null?void 0:a.value);if(!(u.button!==0||!e||!t)&&!(l.classList.contains("".concat(r.value,"-is-active"))||l.classList.contains("".concat(r.value,"-is-disabled"))||l.classList.contains("".concat(r.value,"-is-checked"))||l.classList.contains("".concat(r.value,"-is-loading")))){var c=getComputedStyle(l),v=parseInt(c.borderWidth,10),h=v>0?v:0,p=l.offsetWidth,d=l.offsetHeight;n.value.parentNode===null&&(Fe(n.value,{position:"absolute",left:"".concat(0-h,"px"),top:"".concat(0-h,"px"),width:"".concat(p,"px"),height:"".concat(d,"px"),borderRadius:c.borderRadius,pointerEvents:"none",overflow:"hidden"}),l.appendChild(n.value));var g=document.createElement("div");Fe(g,{marginTop:"0",marginLeft:"0",right:"".concat(p,"px"),width:"".concat(p+20,"px"),height:"100%",transition:"transform ".concat(J,"ms cubic-bezier(.38, 0, .24, 1), background ").concat(J*2,"ms linear"),transform:"skewX(-8deg)",pointerEvents:"none",position:"absolute",zIndex:0,backgroundColor:f,opacity:"0.9"});for(var b=new WeakMap,$=l.children.length,A=0;A<$;++A){var T=l.children[A];T.style.zIndex===""&&T!==n.value&&(T.style.zIndex="1",b.set(T,!0))}var S=l.style.position?l.style.position:getComputedStyle(l).position;(S===""||S==="static")&&(l.style.position="relative"),n.value.insertBefore(g,n.value.firstChild),setTimeout(function(){g.style.transform="translateX(".concat(p,"px)")},0);var P=function D(){g.style.backgroundColor=dl,e.value&&(e.value.removeEventListener("pointerup",D,!1),e.value.removeEventListener("pointerleave",D,!1),setTimeout(function(){g.remove(),n.value.children.length===0&&n.value.remove()},J*2+100))};e.value.addEventListener("pointerup",P,!1),e.value.addEventListener("pointerleave",P,!1)}};X(function(){var o=e==null?void 0:e.value;!o||(n.value=document.createElement("div"),o.addEventListener("pointerdown",s,!1))}),an(function(){var o;e==null||(o=e.value)===null||o===void 0||o.removeEventListener("pointerdown",s,!1)})}/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var bl=We,hl=j,ml="[object Boolean]";function _l(e){return e===!0||e===!1||hl(e)&&bl(e)==ml}var N=_l;/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */function $l(e){var a=Ye(),n=_(function(){return a.props.disabled}),r=nn("formDisabled",Object.create(null));return _(function(){var i;return N(e==null?void 0:e.beforeDisabled.value)?e.beforeDisabled.value:N(n.value)?n.value:N(e==null?void 0:e.afterDisabled.value)?e.afterDisabled.value:N((i=r.disabled)===null||i===void 0?void 0:i.value)?r.disabled.value:!1})}/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */function Be(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Y(e){for(var a=1;a<arguments.length;a++){var n=arguments[a]!=null?arguments[a]:{};a%2?Be(Object(n),!0).forEach(function(r){O(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Be(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Cl=H({name:"TButton",props:ll,setup:function(a,n){var r=n.attrs,i=n.slots,t=ka(),s=Ja(),o=C("button"),u=ke(),l=u.STATUS,f=u.SIZE,c=x();pl(c);var v=$l(),h=_(function(){var d=a.theme,g=a.variant;return d||(g==="base"?"primary":"default")}),p=_(function(){return["".concat(o.value),"".concat(o.value,"--variant-").concat(a.variant),"".concat(o.value,"--theme-").concat(h.value),O(O(O(O(O(O({},f.value[a.size],a.size!=="medium"),l.value.disabled,v.value),l.value.loading,a.loading),"".concat(o.value,"--shape-").concat(a.shape),a.shape!=="rectangle"),"".concat(o.value,"--ghost"),a.ghost),f.value.block,a.block)]});return function(){var d=s("default","content"),g=a.loading?m(ol,{inheritColor:!0},null):t("icon"),b=g&&!d,$=a.suffix||i.suffix?m("span",{className:"".concat(o.value,"__suffix")},[t("suffix")]):null;d=d?m("span",{class:"".concat(o.value,"__text")},[d]):"",g&&(d=[g,d]),$&&(d=[d].concat($));var A=function(){return!a.tag&&a.href?"a":a.tag||"button"},T={class:[].concat(G(p.value),[O({},"".concat(o.value,"--icon-only"),b)]),type:a.type,disabled:v.value||a.loading,href:a.href,tabindex:v.value?void 0:"0"};return Ve(A(),Y(Y(Y({ref:c},r),T),{},{onClick:a.onClick}),[d])}}});/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var Pl=Je(Cl);export{Pl as B,ol as L,Ol as _,ea as a,Qn as b,fa as c,W as d,va as e,Sl as f,wl as g,qs as h,Js as i,ri as j,ii as k,El as l,$l as m,Ps as n,Ys as o,N as p,ao as q,oi as r,sn as s,pl as u};
