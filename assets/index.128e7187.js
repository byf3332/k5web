import{e as h,q as B,_ as v}from"./index.388c7117.js";/* empty css              *//* empty css              *//* empty css               *//* empty css               */import{d as k,r as C,bB as D,bC as A,C as x,D as y,aI as s,aH as i,aM as E,G as R,aZ as H,b8 as M,bD as T,bM as P,n as K}from"./arco.beabb834.js";import{e as S,f as U,g as $}from"./serial.b70f48dc.js";import"./chart.83b8c11b.js";import"./vue.30c84055.js";const I={class:"container"},N=["innerHTML"],V={name:"Chi"},L=k({...V,setup(q){const n=h(),c=C({status:"\u70B9\u51FB\u5199\u5165\u6309\u94AE\u5199\u5165\u5B57\u5E93\u5230\u8BBE\u5907<br/><br/>",eepromType:""}),F=async(e=0,t)=>{var l;await S(n.connectPort);for(let u=e;u<t.length+e;u+=128)await U(n.connectPort,u,t.slice(u-e,u-e+128),128,(l=n.configuration)==null?void 0:l.uart),c.status=c.status+"\u5199\u5165\u8FDB\u5EA6\uFF1A"+((u-e)/t.length*100).toFixed(1)+"%<br/>",K(()=>{const r=document==null?void 0:document.getElementById("statusArea");r&&(r.scrollTop=r==null?void 0:r.scrollHeight)});c.status=c.status+"\u5199\u5165\u8FDB\u5EA6\uFF1A100.0%<br/>",await $(n.connectPort)},p=async(e=1)=>{var l,u,r,b,m,w,g;if(n.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}if(((l=n.configuration)==null?void 0:l.uart)=="official"){alert("\u56FA\u4EF6\u7248\u672C\u4E0D\u5339\u914D");return}if(e==1&&((u=n.configuration)==null?void 0:u.charset)!="losehu"||e==1&&((r=n.configuration)==null?void 0:r.K)!=!0){alert("\u56FA\u4EF6\u7248\u672C\u4E0D\u5339\u914D");return}if(e==2&&((b=n.configuration)==null?void 0:b.charset)!="gb2312"||e==2&&((m=n.configuration)==null?void 0:m.K)!=!0){alert("\u56FA\u4EF6\u7248\u672C\u4E0D\u5339\u914D");return}if(e==3&&((w=n.configuration)==null?void 0:w.charset)!="gb2312"||e==3&&((g=n.configuration)==null?void 0:g.H)!=!0){alert("\u56FA\u4EF6\u7248\u672C\u4E0D\u5339\u914D");return}c.status=c.status+"\u6B63\u5728\u4E0B\u8F7D\u5B57\u5E93...<br />";let t;if(e==1){t=await fetch("/old_font.bin");const a=t.body.getReader(),o=[];for(;;){const{done:_,value:f}=await a.read();if(_)break;o.push(...f)}const d=new Uint8Array(o);await F(8192,d);return}if(e==2){t=await fetch("/new_font_k.bin");const a=t.body.getReader(),o=[];for(;;){const{done:_,value:f}=await a.read();if(_)break;o.push(...f)}const d=new Uint8Array(o);await F(9344,d);return}if(e==3){t=await fetch("/new_font_h.bin");const a=t.body.getReader(),o=[];for(;;){const{done:_,value:f}=await a.read();if(_)break;o.push(...f)}const d=new Uint8Array(o);await F(9344,d);return}if(e==4){t=await fetch("/pinyin.bin");const a=t.body.getReader(),o=[];for(;;){const{done:_,value:f}=await a.read();if(_)break;o.push(...f)}const d=new Uint8Array(o);await F(131072,d);return}};return(e,t)=>{const l=B,u=H,r=M,b=D,m=A,w=T,g=P;return x(),y("div",I,[s(l,{items:["\u5C0F\u5DE5\u5177","\u5B57\u5E93\u5199\u5165"]}),s(g,{gutter:20,align:"stretch"},{default:i(()=>[s(w,{span:24},{default:i(()=>[s(m,{class:"general-card",title:"\u5B57\u5E93\u5199\u5165"},{default:i(()=>[s(r,null,{default:i(()=>[s(u,{onClick:t[0]||(t[0]=a=>p(1))},{default:i(()=>[E("\u5199\u5165 117 \u5B57\u5E93\uFF08K\uFF09")]),_:1}),s(u,{onClick:t[1]||(t[1]=a=>p(2))},{default:i(()=>[E("\u5199\u5165 118+ \u5B57\u5E93\uFF08K\uFF09")]),_:1}),s(u,{onClick:t[2]||(t[2]=a=>p(3))},{default:i(()=>[E("\u5199\u5165 118+ \u5B57\u5E93\uFF08H\uFF09")]),_:1}),s(u,{onClick:t[3]||(t[3]=a=>p(4))},{default:i(()=>[E("\u5199\u5165\u62FC\u97F3\u68C0\u7D22\u8868\uFF082Mbit EEPROM\u53EF\u7528\uFF09")]),_:1})]),_:1}),s(b),R("div",{id:"statusArea",style:{height:"20em","background-color":"azure",color:"silver",overflow:"auto",padding:"20px"},innerHTML:c.status},null,8,N)]),_:1})]),_:1})]),_:1})])}}});const Y=v(L,[["__scopeId","data-v-aa7ee8c3"]]);export{Y as default};