import{k as $,ak as E,_ as B}from"./index.ecd57bbe.js";/* empty css              *//* empty css              *//* empty css               *//* empty css               */import{d as F,r as C,bH as A,C as S,D,aI as n,aH as o,G as y,aN as p,aM as _,bn as H,bo as R,a$ as I,ba as P,bF as T,bI as M,bK as N,n as U}from"./arco.949c921a.js";import{i as V,e as z,b as K,g as L}from"./serial.c741fbda.js";import{C as G}from"./index.f176e538.js";import"./chart.b6f2f6d9.js";import"./vue.d12e9c08.js";import"./useConfig.a0142764.js";import"./index.fbaa7537.js";import"./helper.7360b6e9.js";const O={class:"container"},j=["innerHTML"],q={name:"Chi"},J=F({...q,setup(Q){const u=$(),d=C({status:"\u70B9\u51FB\u5199\u5165\u6309\u94AE\u5199\u5165\u5B57\u5E93\u5230\u8BBE\u5907<br/><br/>",eepromType:"",showHide:0}),m=async(e=0,t)=>{var w;await z(u.connectPort);for(let r=e;r<t.length+e;r+=128)await K(u.connectPort,r,t.slice(r-e,r-e+128),128,(w=u.configuration)==null?void 0:w.uart),d.status=d.status+"\u5199\u5165\u8FDB\u5EA6\uFF1A"+((r-e)/t.length*100).toFixed(1)+"%<br/>",U(()=>{const s=document==null?void 0:document.getElementById("statusArea");s&&(s.scrollTop=s==null?void 0:s.scrollHeight)});d.status=d.status+"\u5199\u5165\u8FDB\u5EA6\uFF1A100.0%<br/>",await L(u.connectPort)},h=async(e=1)=>{var w,r,s,b,g,k;if(u.connectState!=!0){alert(sessionStorage.getItem("noticeConnectK5"));return}if(((w=u.configuration)==null?void 0:w.uart)=="official"){alert(sessionStorage.getItem("noticeVersionNoSupport"));return}d.status=d.status+"\u6B63\u5728\u4E0B\u8F7D\u5B57\u5E93...<br />";let t;if(e==4){(r=u.configuration)!=null&&r.newpinyin?t=await fetch("/pinyin_plus.bin"):t=await fetch("/pinyin.bin");const c=t.body.getReader(),a=[];for(;;){const{done:l,value:f}=await c.read();if(l)break;a.push(...f)}const i=new Uint8Array(a);await m(131072,i);return}if(e==5){const c=await V(u.connectPort,(s=u.configuration)==null?void 0:s.uart);if(c!=262144&&c!=524288){d.status=d.status+"\u53EA\u652F\u6301 2Mbit \u4EE5\u4E0A EEPROM \u5199\u5165<br/>";return}t=await fetch("/ssb.bin");const a=t.body.getReader(),i=[];for(;;){const{done:f,value:v}=await a.read();if(f)break;i.push(...v)}const l=new Uint8Array(i);await m(246312,l);return}if(e==1){if(((b=u.configuration)==null?void 0:b.charset)=="losehu"){t=await fetch("/old_font.bin");const c=t.body.getReader(),a=[];for(;;){const{done:l,value:f}=await c.read();if(l)break;a.push(...f)}const i=new Uint8Array(a);await m(8192,i);return}if(((g=u.configuration)==null?void 0:g.charset)=="gb2312"){t=await fetch("/new_font_k.bin");const c=t.body.getReader(),a=[];for(;;){const{done:l,value:f}=await c.read();if(l)break;a.push(...f)}const i=new Uint8Array(a);await m(9344,i);return}}if(e==6)if(((k=u.configuration)==null?void 0:k.charset)=="gb2312"){t=await fetch("/new_font_k_f.bin");const c=t.body.getReader(),a=[];for(;;){const{done:l,value:f}=await c.read();if(l)break;a.push(...f)}const i=new Uint8Array(a);await m(9344,i);return}else alert("\u4E0D\u652F\u6301\u7684\u7248\u672C")};return(e,t)=>{const w=E,r=I,s=G,b=P,g=T,k=A,c=M,a=N;return S(),D("div",O,[n(w,{items:[e.$t("menu.list"),e.$t("menu.font")]},null,8,["items"]),n(a,{gutter:20,align:"stretch"},{default:o(()=>[n(c,{span:24},{default:o(()=>[n(k,{class:"general-card"},{title:o(()=>[y("span",{onClick:t[0]||(t[0]=()=>{d.showHide+=1})},p(e.$t("menu.font")+e.$t("global.onStart")),1)]),default:o(()=>[n(b,null,{default:o(()=>[n(s,{bordered:""},{header:o(()=>[_(p(e.$t("tool.fontwrite")),1)]),default:o(()=>[n(r,{onClick:t[1]||(t[1]=i=>h(1))},{default:o(()=>[_(p(e.$t("tool.writefontwrite")),1)]),_:1})]),_:1}),H(n(s,{bordered:""},{header:o(()=>[_(p(e.$t("tool.fontwrite"))+"\uFF08\u7E41\u9AD4\uFF09 ",1)]),default:o(()=>[n(r,{onClick:t[2]||(t[2]=i=>h(6))},{default:o(()=>[_(p(e.$t("tool.writefontwrite")),1)]),_:1})]),_:1},512),[[R,d.showHide>=5]]),n(s,{bordered:""},{header:o(()=>[_(p(e.$t("tool.pinyinwrite")),1)]),default:o(()=>[n(b,null,{default:o(()=>[n(r,{onClick:t[3]||(t[3]=i=>h(4))},{default:o(()=>[_(p(e.$t("tool.writepinyin")),1)]),_:1})]),_:1})]),_:1}),n(s,{bordered:""},{header:o(()=>[_(p(e.$t("tool.ssbpatch")),1)]),default:o(()=>[n(b,null,{default:o(()=>[n(r,{onClick:t[4]||(t[4]=i=>h(5))},{default:o(()=>[_(p(e.$t("tool.writessbpatch")),1)]),_:1})]),_:1})]),_:1})]),_:1}),n(g),y("div",{id:"statusArea",style:{height:"20em","background-color":"azure",color:"silver",overflow:"auto",padding:"20px"},innerHTML:d.status},null,8,j)]),_:1})]),_:1})]),_:1})])}}});const ut=B(J,[["__scopeId","data-v-78572d20"]]);export{ut as default};
