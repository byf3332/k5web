import{h as y,Y as B,_ as v}from"./index.aa4cef55.js";/* empty css              *//* empty css              *//* empty css               *//* empty css               */import{d as k,r as C,bD as $,C as E,D as A,aI as r,aH as n,G as h,aN as m,aM as w,a$ as F,ba as S,bB as D,bE as H,bJ as T,n as I}from"./arco.76776ef0.js";import{e as N,b as R,g as P}from"./serial.c741fbda.js";import{C as V}from"./index.5e61a6e4.js";import"./chart.ce50b7a1.js";import"./vue.5cc47a17.js";import"./useConfig.93c19403.js";import"./index.ee7dcbab.js";const M={class:"container"},U=["innerHTML"],x={name:"Chi"},L=k({...x,setup(z){const i=y(),u=C({status:"\u70B9\u51FB\u5199\u5165\u6309\u94AE\u5199\u5165\u5B57\u5E93\u5230\u8BBE\u5907<br/><br/>",eepromType:"",showHide:0}),b=async(e=0,t)=>{var c;await N(i.connectPort);for(let o=e;o<t.length+e;o+=128)await R(i.connectPort,o,t.slice(o-e,o-e+128),128,(c=i.configuration)==null?void 0:c.uart),u.status=u.status+"\u5199\u5165\u8FDB\u5EA6\uFF1A"+((o-e)/t.length*100).toFixed(1)+"%<br/>",I(()=>{const a=document==null?void 0:document.getElementById("statusArea");a&&(a.scrollTop=a==null?void 0:a.scrollHeight)});u.status=u.status+"\u5199\u5165\u8FDB\u5EA6\uFF1A100.0%<br/>",await P(i.connectPort)},g=async(e=1)=>{var c,o,a,f;if(i.connectState!=!0){alert(sessionStorage.getItem("noticeConnectK5"));return}if(((c=i.configuration)==null?void 0:c.uart)=="official"){alert(sessionStorage.getItem("noticeVersionNoSupport"));return}u.status=u.status+"\u6B63\u5728\u4E0B\u8F7D\u5B57\u5E93...<br />";let t;if(e==4){(o=i.configuration)!=null&&o.newpinyin?t=await fetch("/pinyin_plus.bin"):t=await fetch("/pinyin.bin");const l=t.body.getReader(),s=[];for(;;){const{done:p,value:_}=await l.read();if(p)break;s.push(..._)}const d=new Uint8Array(s);await b(131072,d);return}if(e==1){if(((a=i.configuration)==null?void 0:a.charset)=="losehu"){t=await fetch("/old_font.bin");const l=t.body.getReader(),s=[];for(;;){const{done:p,value:_}=await l.read();if(p)break;s.push(..._)}const d=new Uint8Array(s);await b(8192,d);return}if(((f=i.configuration)==null?void 0:f.charset)=="gb2312"){t=await fetch("/new_font_k.bin");const l=t.body.getReader(),s=[];for(;;){const{done:p,value:_}=await l.read();if(p)break;s.push(..._)}const d=new Uint8Array(s);await b(9344,d);return}}};return(e,t)=>{const c=B,o=F,a=V,f=S,l=D,s=$,d=H,p=T;return E(),A("div",M,[r(c,{items:[e.$t("menu.list"),e.$t("menu.font")]},null,8,["items"]),r(p,{gutter:20,align:"stretch"},{default:n(()=>[r(d,{span:24},{default:n(()=>[r(s,{class:"general-card"},{title:n(()=>[h("span",{onClick:t[0]||(t[0]=()=>{u.showHide+=1})},m(e.$t("menu.font")+e.$t("global.onStart")),1)]),default:n(()=>[r(f,null,{default:n(()=>[r(a,{bordered:""},{header:n(()=>[w(m(e.$t("tool.fontwrite")),1)]),default:n(()=>[r(o,{onClick:t[1]||(t[1]=_=>g(1))},{default:n(()=>[w(m(e.$t("tool.writefontwrite")),1)]),_:1})]),_:1}),r(a,{bordered:""},{header:n(()=>[w(m(e.$t("tool.pinyinwrite")),1)]),default:n(()=>[r(f,null,{default:n(()=>[r(o,{onClick:t[2]||(t[2]=_=>g(4))},{default:n(()=>[w(m(e.$t("tool.writepinyin")),1)]),_:1})]),_:1})]),_:1})]),_:1}),r(l),h("div",{id:"statusArea",style:{height:"20em","background-color":"azure",color:"silver",overflow:"auto",padding:"20px"},innerHTML:u.status},null,8,U)]),_:1})]),_:1})]),_:1})])}}});const et=v(L,[["__scopeId","data-v-ac553c64"]]);export{et as default};
