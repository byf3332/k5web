import{q as H,s as V,t as X,aW as Ve,z as ge,x as ae,V as A,Q as z,L as w,y as oe,M as Xe,a7 as Ke}from"./index.abea991e.js";import{d as D,c as m,f as k,p as Ue,aY as Ge,aI as g,b0 as j,g as Ye,w as pe,o as he,b as ye,z as Ze,n as Je,b1 as Re,a_ as re,a$ as qe,aW as Qe,bM as en}from"./arco.7dae27b5.js";import{o as nn,u as tn,C as an}from"./dep-281dbb92.52d6d363.js";import{B as $}from"./index.e731b86b.js";import{b as on,u as rn}from"./index.f3a75336.js";function le(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,a)}return n}function ie(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?le(Object(n),!0).forEach(function(a){X(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):le(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}var ln={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 23a11 11 0 100-22 11 11 0 000 22zM7.5 10.59l3 3 6-6L17.91 9l-7.41 7.41L6.09 12l1.41-1.41z"}}]},cn=D({name:"CheckCircleFilledIcon",props:{size:{type:String},onClick:{type:Function}},setup(t,e){var{attrs:n}=e,a=m(()=>t.size),{className:o,style:v}=H(a),p=m(()=>["t-icon","t-icon-check-circle-filled",o.value]),d=m(()=>ie(ie({},v.value),n.style)),s=m(()=>({class:p.value,style:d.value,onClick:i=>{var l;return(l=t.onClick)===null||l===void 0?void 0:l.call(t,{e:i})}}));return()=>V(ln,s.value)}});const un=cn;function ce(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,a)}return n}function ue(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ce(Object(n),!0).forEach(function(a){X(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}var sn={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 1a11 11 0 110 22 11 11 0 010-22zm-1 13h2V6.5h-2V14zm2 1.5h-2v2h2v-2z"}}]},dn=D({name:"ErrorCircleFilledIcon",props:{size:{type:String},onClick:{type:Function}},setup(t,e){var{attrs:n}=e,a=m(()=>t.size),{className:o,style:v}=H(a),p=m(()=>["t-icon","t-icon-error-circle-filled",o.value]),d=m(()=>ue(ue({},v.value),n.style)),s=m(()=>({class:p.value,style:d.value,onClick:i=>{var l;return(l=t.onClick)===null||l===void 0?void 0:l.call(t,{e:i})}}));return()=>V(sn,s.value)}});const vn=dn;function se(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,a)}return n}function de(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?se(Object(n),!0).forEach(function(a){X(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):se(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}var fn={tag:"svg",attrs:{fill:"none",viewBox:"0 0 24 24",width:"1em",height:"1em"},children:[{tag:"path",attrs:{fill:"currentColor",d:"M12 23a11 11 0 100-22 11 11 0 000 22zM11 8.5v-2h2v2h-2zm2 1.5v7.5h-2V10h2z"}}]},mn=D({name:"InfoCircleFilledIcon",props:{size:{type:String},onClick:{type:Function}},setup(t,e){var{attrs:n}=e,a=m(()=>t.size),{className:o,style:v}=H(a),p=m(()=>["t-icon","t-icon-info-circle-filled",o.value]),d=m(()=>de(de({},v.value),n.style)),s=m(()=>({class:p.value,style:d.value,onClick:i=>{var l;return(l=t.onClick)===null||l===void 0?void 0:l.call(t,{e:i})}}));return()=>V(fn,s.value)}});const gn=mn;/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var pn="t-display-none-element-refresh";function hn(){var t=k(0);Ue(pn,t),Ge(function(){t.value+=1})}/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */function yn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ve(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,Ve(a.key),a)}}function Cn(t,e,n){return e&&ve(t.prototype,e),n&&ve(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var bn={attach:{type:[String,Function]},body:{type:[String,Function]},cancelBtn:{type:[String,Object,Function]},closeBtn:{type:[String,Boolean,Function],default:!0},closeOnEscKeydown:{type:Boolean,default:void 0},closeOnOverlayClick:{type:Boolean,default:void 0},confirmBtn:{type:[String,Object,Function]},confirmLoading:{type:Boolean,default:void 0},confirmOnEnter:Boolean,default:{type:[String,Function]},destroyOnClose:Boolean,draggable:Boolean,footer:{type:[Boolean,Function],default:!0},header:{type:[String,Boolean,Function],default:!0},mode:{type:String,default:"modal",validator:function(e){return e?["modal","modeless","normal","full-screen"].includes(e):!0}},placement:{type:String,default:"top",validator:function(e){return e?["top","center"].includes(e):!0}},preventScrollThrough:{type:Boolean,default:!0},showInAttachedElement:Boolean,showOverlay:{type:Boolean,default:!0},theme:{type:String,default:"default",validator:function(e){return e?["default","info","warning","danger","success"].includes(e):!0}},top:{type:[String,Number]},visible:Boolean,width:{type:[String,Number]},zIndex:{type:Number},onCancel:Function,onClose:Function,onCloseBtnClick:Function,onClosed:Function,onConfirm:Function,onEscKeydown:Function,onOpened:Function,onOverlayClick:Function};/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */function fe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),n.push.apply(n,a)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?fe(Object(n),!0).forEach(function(a){w(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function On(t){var e=Ye(),n=ge(),a=function(i){var l,f=i.globalConfirm,h=i.theme,y=i.globalConfirmBtnTheme,O=((l=nn(y,["info"]))===null||l===void 0?void 0:l[h])||"primary",_={theme:O,size:i.size,onClick:function(I){t.confirmBtnAction(I)}};return A(f)?_.content=f:z(f)&&(_=E(E({},_),f)),_},o=function(i){var l=i.globalCancel,f={theme:"default",size:i.size,onClick:function(y){t.cancelBtnAction(y)}};return A(l)?f.content=l:z(l)&&(f=E(E({},f),l)),f},v=function(i,l){var f=l.defaultButtonProps,h=l.className,y=l.confirmLoading,O=f;return A(i)?O.content=i:z(i)&&(O=E(E({},O),i)),y!==void 0&&(O.loading=y),g($,j({class:h},O),null)},p=function(i){var l=i.confirmBtn,f=i.className,h=i.confirmLoading;if(l===null)return null;l&&e.slots.confirmBtn&&console.warn("Both $props.confirmBtn and $scopedSlots.confirmBtn exist, $props.confirmBtn is preferred.");var y=a(i);return!l&&!e.slots.confirmBtn?g($,j({class:f,loading:h},y),null):l&&["string","object"].includes(ae(l))?v(l,{defaultButtonProps:y,className:f,confirmLoading:h}):n("confirmBtn")},d=function(i){var l=i.cancelBtn,f=i.className;if(l===null)return null;l&&e.slots.cancelBtn&&console.warn("Both $props.cancelBtn and $scopedSlots.cancelBtn exist, $props.cancelBtn is preferred.");var h=o(i);return!l&&!e.slots.cancelBtn?g($,j({class:f},h),null):l&&["string","object"].includes(ae(l))?v(l,{defaultButtonProps:h}):n("cancelBtn")};return{getConfirmBtn:p,getCancelBtn:d}}function wn(t){var e=!1,n=!1,a=function(d){e&&n&&t(d),e=!1,n=!1},o=function(d){e=d.target===d.currentTarget},v=function(d){n=d.target===d.currentTarget};return{onClick:a,onMousedown:o,onMouseup:v}}/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */function An(){var t=6;if(typeof navigator>"u"||!navigator||/(Chrome|Safari)/i.test(navigator.userAgent))return t;var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e);var n=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),/Firefox/.test(navigator.userAgent)&&(n-=4),on()<=11&&(n=12),n}function _n(){var t=document.createElement("div");t.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e}/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var Bn=1e3,En=5e3,Sn=1,Pn=Cn(function t(){var e=this;yn(this,t),w(this,"popupStack",{popup:new Set,dialog:new Set,message:new Set}),w(this,"getNextZIndex",function(n){var a=n==="message"?Array.from(e.popupStack.message).pop()||En:Array.from(e.popupStack.popup).pop()||Bn;return a+Sn}),w(this,"add",function(n){var a=e.getNextZIndex(n);return e.popupStack[n].add(a),n==="dialog"&&e.popupStack.popup.add(a),a}),w(this,"delete",function(n,a){e.popupStack[a].delete(n),a==="dialog"&&e.popupStack.popup.delete(n)}),w(this,"isLastDialog",function(n){return e.popupStack.dialog.size>1?n===Array.from(e.popupStack.dialog).pop():!0})}),W=new Pn;function kn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.visible,a=e.runOnMounted,o=k(0),v=function(){o.value=W.add(t)},p=function(){W.delete(o.value,t)},d=function(){return t==="dialog"?W.isLastDialog(o.value):!1};return pe(function(){return n==null?void 0:n.value},function(s){s?v():p()},{immediate:!0}),a&&(he(function(){v()}),ye(function(){p()})),{zIndex:Ze(o),open:v,close:p,isLastDialog:d}}/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */function me(t){return Number.isNaN(Number(t))?t:"".concat(Number(t),"px")}var M,Mn=function(e){M={x:e.clientX,y:e.clientY},setTimeout(function(){M=null},100)};typeof window<"u"&&window.document&&window.document.documentElement&&document.documentElement.addEventListener("click",Mn,!0);function Nn(t){var e=t,n=window.innerWidth||document.documentElement.clientWidth,a=window.innerHeight||document.documentElement.clientHeight;e.addEventListener("mousedown",function(o){var v=o.clientX-e.offsetLeft,p=o.clientY-e.offsetTop,d=e.offsetWidth,s=e.offsetHeight;if(d>n||s>a)return;function i(f){var h=f.clientX-v,y=f.clientY-p;h<0&&(h=0),y<0&&(y=0),n-e.offsetWidth-h<0&&(h=n-e.offsetWidth),a-e.offsetHeight-y<0&&(y=a-e.offsetHeight),e.style.position="absolute",e.style.left="".concat(h,"px"),e.style.top="".concat(y,"px")}function l(){document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",l)}document.addEventListener("mousemove",i),document.addEventListener("mouseup",l),document.addEventListener("dragend",l)})}var jn=1,zn=D({name:"TDialog",directives:{draggable:function(e,n){e&&n&&n.value&&Nn(e)}},inheritAttrs:!1,props:bn,emits:["update:visible"],setup:function(e,n){var a=this,o=oe("dialog"),v=oe(),p=Xe(),d=ge(),s=k(null),i=Ke("dialog"),l=i.globalConfig,f=tn({CloseIcon:an,InfoCircleFilledIcon:gn,CheckCircleFilledIcon:un,ErrorCircleFilledIcon:vn}),h=f.CloseIcon,y=f.InfoCircleFilledIcon,O=f.CheckCircleFilledIcon,_=f.ErrorCircleFilledIcon,K=function(r){var c;(c=e.onConfirm)===null||c===void 0||c.call(e,{e:r})},I=function(r){var c;(c=e.onCancel)===null||c===void 0||c.call(e,{e:r}),N({e:r,trigger:"cancel"})},U=On({confirmBtnAction:K,cancelBtnAction:I}),Ce=U.getConfirmBtn,be=U.getCancelBtn,Oe=rn(function(){return e.attach});hn();var G=k(),B=k(),Y=m(function(){return e.mode==="modal"}),S=m(function(){return e.mode==="modeless"}),Z=m(function(){return e.mode==="normal"}),b=m(function(){return e.mode==="full-screen"}),we=m(function(){return e.visible}),_e=m(function(){return["".concat(o.value,"__mask"),!e.showOverlay&&"".concat(v.value,"-is-hidden")]}),Be=m(function(){return Z.value?[]:b.value?["".concat(o.value,"__position_fullscreen")]:["".concat(o.value,"__position"),!!e.top&&"".concat(o.value,"--top"),"".concat(e.placement&&!e.top?"".concat(o.value,"--").concat(e.placement):"")]}),Ee=m(function(){return[!Z.value&&"".concat(o.value,"__wrap")]}),Se=m(function(){if(b.value)return{};var u=e.top,r={};if(u!==void 0){var c=me(u);r={paddingTop:c}}return r}),J=m(function(){var u=["".concat(o.value),"".concat(o.value,"__modal-").concat(e.theme),S.value&&e.draggable&&"".concat(o.value,"--draggable")];return b.value?u.push("".concat(o.value,"__fullscreen")):u.push.apply(u,["".concat(o.value,"--default"),"".concat(o.value,"--").concat(e.placement)]),u}),R=m(function(){return b.value?{}:{width:me(e.width)}}),Pe=kn("dialog",{visible:we}),q=Pe.isLastDialog;pe(function(){return e.visible},function(u){if(u){var r;(Y.value&&!e.showInAttachedElement||b.value)&&(e.preventScrollThrough&&document.body.appendChild(B.value),Je(function(){M&&s.value&&(s.value.style.transformOrigin="".concat(M.x-s.value.offsetLeft,"px ").concat(M.y-s.value.offsetTop,"px"))})),(r=document.activeElement)===null||r===void 0||r.blur()}else ke();ee(u)});function Q(){var u,r;(u=B.value.parentNode)===null||u===void 0||(r=u.removeChild)===null||r===void 0||r.call(u,B.value)}function ke(){clearTimeout(G.value),G.value=setTimeout(function(){Q()},150)}var ee=function(r){r?(document.addEventListener("keydown",te),e.confirmOnEnter&&document.addEventListener("keydown",ne)):(document.removeEventListener("keydown",te),e.confirmOnEnter&&document.removeEventListener("keydown",ne))},ne=function(r){var c=r.target;if(c.tagName.toLowerCase()!=="input"){var C=r.code;if((C==="Enter"||C==="NumpadEnter")&&q()){var P;(P=e.onConfirm)===null||P===void 0||P.call(e,{e:r})}}},te=function(r){if(r.code==="Escape"&&q()){var c,C;(c=e.onEscKeydown)===null||c===void 0||c.call(e,{e:r}),((C=e.closeOnEscKeydown)!==null&&C!==void 0?C:l.value.closeOnEscKeydown)&&N({e:r,trigger:"esc"})}},Me=function(r){var c;if(e.showOverlay&&((c=e.closeOnOverlayClick)!==null&&c!==void 0?c:l.value.closeOnOverlayClick)){var C;(C=e.onOverlayClick)===null||C===void 0||C.call(e,{e:r}),N({e:r,trigger:"overlay"})}},F=wn(Me),Ne=F.onClick,je=F.onMousedown,De=F.onMouseup,Ie=function(r){var c;(c=e.onCloseBtnClick)===null||c===void 0||c.call(e,{e:r}),N({trigger:"close-btn",e:r})},Fe=function(){var r;(r=e.onOpened)===null||r===void 0||r.call(e)},xe=function(){var r;S.value&&e.draggable&&s.value&&(s.value.style.position="relative",s.value.style.left="unset",s.value.style.top="unset"),(r=e.onClosed)===null||r===void 0||r.call(e)},N=function(r){var c;(c=e.onClose)===null||c===void 0||c.call(e,r),n.emit("update:visible",!1)},Le=function(r){var c,C=(c=a._events)===null||c===void 0?void 0:c[r];return!!(C!=null&&C.length)},Te=function(){var r={info:g(y,{class:"".concat(v.value,"-is-info")},null),warning:g(_,{class:"".concat(v.value,"-is-warning")},null),danger:g(_,{class:"".concat(v.value,"-is-error")},null),success:g(O,{class:"".concat(v.value,"-is-success")},null)};return r[e.theme]},Ae=function(){var r=g("h5",{class:"title"},null),c=g(h,null,null),C=p("default","body"),P=g("div",null,[be({cancelBtn:e.cancelBtn,globalCancel:l.value.cancel,className:"".concat(o.value,"__cancel")}),Ce({theme:e.theme,confirmBtn:e.confirmBtn,globalConfirm:l.value.confirm,globalConfirmBtnTheme:l.value.confirmBtnTheme,className:"".concat(o.value,"__confirm"),confirmLoading:e.confirmLoading})]),ze=b.value?["".concat(o.value,"__header"),"".concat(o.value,"__header--fullscreen")]:"".concat(o.value,"__header"),$e=b.value?["".concat(o.value,"__close"),"".concat(o.value,"__close--fullscreen")]:"".concat(o.value,"__close"),x=e.theme==="default"?["".concat(o.value,"__body")]:["".concat(o.value,"__body__icon")],L=d("footer",P);b.value&&L?x.push("".concat(o.value,"__body--fullscreen")):b.value&&x.push("".concat(o.value,"__body--fullscreen--without-footer"));var We=b.value?["".concat(o.value,"__footer"),"".concat(o.value,"__footer--fullscreen")]:"".concat(o.value,"__footer"),T=function(He){S.value&&e.draggable&&He.stopPropagation()};return g("div",{class:Ee.value},[g("div",{class:Be.value,style:Se.value,onClick:Ne,onMousedown:je,onMouseup:De},[re(g("div",{key:"dialog",class:J.value,style:R.value,ref:s},[g("div",{class:ze,onMousedown:T},[g("div",{class:"".concat(o.value,"__header-content")},[Te(),d("header",r)]),e.closeBtn?g("span",{class:$e,onClick:Ie},[d("closeBtn",c)]):null]),g("div",{class:x,onMousedown:T},[C]),L&&g("div",{class:We,onMousedown:T},[L])]),[[en("draggable"),S.value&&e.draggable]])])])};return he(function(){var u=document.documentElement.scrollHeight>document.documentElement.clientHeight,r=u?_n():0;B.value=document.createElement("style"),B.value.dataset.id="td_dialog_".concat(+new Date,"_").concat(jn+=1),B.value.innerHTML=`
        html body {
          overflow-y: hidden;
          width: calc(100% - `.concat(r,`px);
        }
      `)}),ye(function(){ee(!1),Q()}),{COMPONENT_NAME:o,isModal:Y,isModeLess:S,isFullScreen:b,maskClass:_e,dialogClass:J,dialogStyle:R,dialogEle:s,afterEnter:Fe,afterLeave:xe,hasEventOn:Le,renderDialog:Ae,teleportElement:Oe}},render:function(){var e=this,n=this.COMPONENT_NAME,a=(this.isModal||this.isFullScreen)&&g("div",{key:"mask",class:this.maskClass},null),o=this.renderDialog(),v=[a,o],p={zIndex:this.zIndex},d=["".concat(n,"__ctx"),w(w(w({},"".concat(n,"__ctx--fixed"),this.isModal||this.isFullScreen),"".concat(n,"__ctx--absolute"),this.isModal&&this.showInAttachedElement),"".concat(n,"__ctx--modeless"),this.isModeLess)];return g(Qe,{disabled:!this.attach||!this.teleportElement,to:this.teleportElement},{default:function(){return[g(Re,{duration:300,name:"".concat(n,"-zoom__vue"),onAfterEnter:e.afterEnter,onAfterLeave:e.afterLeave},{default:function(){return[(!e.destroyOnClose||e.visible)&&re(g("div",j({class:d,style:p},e.$attrs),[v]),[[qe,e.visible]])]}})]}})}});export{zn as _,Cn as a,yn as b,An as g};
