import{e as g,as as E,_ as B}from"./index.e9286132.js";/* empty css              *//* empty css              *//* empty css               *//* empty css               */import{d as k,r as v,bH as C,C as y,D as A,aI as i,aH as d,G as h,aM as F,b7 as D,bi as x,bF as H,bI as R,bM as M,n as T}from"./arco.93f0afda.js";import{e as P,b as I,g as S}from"./serial.bad97c4e.js";import"./chart.c383733a.js";import"./vue.ded74ca2.js";const U={class:"container"},N=["innerHTML"],V={name:"Chi"},$=k({...V,setup(L){const a=g(),c=v({status:"\u70B9\u51FB\u5199\u5165\u6309\u94AE\u5199\u5165\u5B57\u5E93\u5230\u8BBE\u5907<br/><br/>",eepromType:"",showHide:0}),p=async(e=0,t)=>{var l;await P(a.connectPort);for(let n=e;n<t.length+e;n+=128)await I(a.connectPort,n,t.slice(n-e,n-e+128),128,(l=a.configuration)==null?void 0:l.uart),c.status=c.status+"\u5199\u5165\u8FDB\u5EA6\uFF1A"+((n-e)/t.length*100).toFixed(1)+"%<br/>",T(()=>{const o=document==null?void 0:document.getElementById("statusArea");o&&(o.scrollTop=o==null?void 0:o.scrollHeight)});c.status=c.status+"\u5199\u5165\u8FDB\u5EA6\uFF1A100.0%<br/>",await S(a.connectPort)},m=async(e=1)=>{var l,n,o,b,w;if(a.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}if(((l=a.configuration)==null?void 0:l.uart)=="official"){alert("\u56FA\u4EF6\u7248\u672C\u4E0D\u5339\u914D");return}if(e==1&&((n=a.configuration)==null?void 0:n.charset)!="losehu"||e==1&&((o=a.configuration)==null?void 0:o.K)!=!0){alert("\u56FA\u4EF6\u7248\u672C\u4E0D\u5339\u914D");return}if(e==2&&((b=a.configuration)==null?void 0:b.charset)!="gb2312"){alert("\u56FA\u4EF6\u7248\u672C\u4E0D\u5339\u914D");return}c.status=c.status+"\u6B63\u5728\u4E0B\u8F7D\u5B57\u5E93...<br />";let t;if(e==1){t=await fetch("/old_font.bin");const s=t.body.getReader(),u=[];for(;;){const{done:_,value:f}=await s.read();if(_)break;u.push(...f)}const r=new Uint8Array(u);await p(8192,r);return}if(e==2){t=await fetch("/new_font_k.bin");const s=t.body.getReader(),u=[];for(;;){const{done:_,value:f}=await s.read();if(_)break;u.push(...f)}const r=new Uint8Array(u);await p(9344,r);return}if(e==3){t=await fetch("/new_font_h.bin");const s=t.body.getReader(),u=[];for(;;){const{done:_,value:f}=await s.read();if(_)break;u.push(...f)}const r=new Uint8Array(u);await p(9344,r);return}if(e==4){(w=a.configuration)!=null&&w.newpinyin?t=await fetch("/pinyin_plus.bin"):t=await fetch("/pinyin.bin");const s=t.body.getReader(),u=[];for(;;){const{done:_,value:f}=await s.read();if(_)break;u.push(...f)}const r=new Uint8Array(u);await p(131072,r);return}};return(e,t)=>{const l=E,n=D,o=x,b=H,w=C,s=R,u=M;return y(),A("div",U,[i(l,{items:["\u5C0F\u5DE5\u5177","\u5B57\u5E93\u5199\u5165"]}),i(u,{gutter:20,align:"stretch"},{default:d(()=>[i(s,{span:24},{default:d(()=>[i(w,{class:"general-card"},{title:d(()=>[h("span",{onClick:t[0]||(t[0]=()=>{c.showHide+=1})},"\u5B57\u5E93\u5199\u5165")]),default:d(()=>[i(o,null,{default:d(()=>[i(n,{onClick:t[1]||(t[1]=r=>m(1))},{default:d(()=>[F("\u5199\u5165 117 \u5B57\u5E93")]),_:1}),i(n,{onClick:t[2]||(t[2]=r=>m(2))},{default:d(()=>[F("\u5199\u5165 118+ \u5B57\u5E93")]),_:1}),i(n,{onClick:t[3]||(t[3]=r=>m(4))},{default:d(()=>[F("\u5199\u5165\u62FC\u97F3\u68C0\u7D22\u8868\uFF082Mbit EEPROM\u53EF\u7528\uFF09")]),_:1})]),_:1}),i(b),h("div",{id:"statusArea",style:{height:"20em","background-color":"azure",color:"silver",overflow:"auto",padding:"20px"},innerHTML:c.status},null,8,N)]),_:1})]),_:1})]),_:1})])}}});const X=B($,[["__scopeId","data-v-c9da2ebd"]]);export{X as default};
