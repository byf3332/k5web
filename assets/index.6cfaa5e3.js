import{e as E,q as h,_ as v}from"./index.ecebec16.js";/* empty css              *//* empty css              *//* empty css               *//* empty css               */import{d as D,r as k,bB as C,bC as A,C as x,D as y,aI as a,aH as _,aM as B,G as H,aZ as T,b8 as R,bD as K,bM as M,n as P}from"./arco.beabb834.js";import{e as S,f as I,g as N}from"./serial.b70f48dc.js";import"./chart.83b8c11b.js";import"./vue.30c84055.js";const U={class:"container"},V=["innerHTML"],$={name:"Chi"},L=D({...$,setup(q){const n=E(),i=k({status:"\u70B9\u51FB\u5199\u5165\u6309\u94AE\u5199\u5165\u5B57\u5E93\u5230\u8BBE\u5907<br/><br/>",eepromType:""}),g=async(e=0,t)=>{var c;await S(n.connectPort);for(let u=e;u<t.length+e;u+=128)await I(n.connectPort,u,t.slice(u-e,u-e+128),128,(c=n.configuration)==null?void 0:c.uart),i.status=i.status+"\u5199\u5165\u8FDB\u5EA6\uFF1A"+((u-e)/t.length*100).toFixed(1)+"%<br/>",P(()=>{const o=document==null?void 0:document.getElementById("statusArea");o&&(o.scrollTop=o==null?void 0:o.scrollHeight)});i.status=i.status+"\u5199\u5165\u8FDB\u5EA6\uFF1A100.0%<br/>",await N(n.connectPort)},w=async(e=1)=>{var c,u,o,p,F,m,b;if(n.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}if(((c=n.configuration)==null?void 0:c.uart)=="official"){alert("\u56FA\u4EF6\u7248\u672C\u4E0D\u5339\u914D");return}if(e==1&&((u=n.configuration)==null?void 0:u.charset)!="losehu"||e==1&&((o=n.configuration)==null?void 0:o.K)!=!0){alert("\u56FA\u4EF6\u7248\u672C\u4E0D\u5339\u914D");return}if(e==2&&((p=n.configuration)==null?void 0:p.charset)!="gb2312"||e==2&&((F=n.configuration)==null?void 0:F.K)!=!0){alert("\u56FA\u4EF6\u7248\u672C\u4E0D\u5339\u914D");return}if(e==3&&((m=n.configuration)==null?void 0:m.charset)!="gb2312"||e==3&&((b=n.configuration)==null?void 0:b.H)!=!0){alert("\u56FA\u4EF6\u7248\u672C\u4E0D\u5339\u914D");return}i.status=i.status+"\u6B63\u5728\u4E0B\u8F7D\u5B57\u5E93...<br />";let t;if(e==1){t=await fetch("/old_font.bin");const r=t.body.getReader(),s=[];for(;;){const{done:d,value:f}=await r.read();if(d)break;s.push(...f)}const l=new Uint8Array(s);await g(8192,l);return}if(e==2){t=await fetch("/new_font_k.bin");const r=t.body.getReader(),s=[];for(;;){const{done:d,value:f}=await r.read();if(d)break;s.push(...f)}const l=new Uint8Array(s);await g(9344,l);return}if(e==3){t=await fetch("/new_font_h.bin");const r=t.body.getReader(),s=[];for(;;){const{done:d,value:f}=await r.read();if(d)break;s.push(...f)}const l=new Uint8Array(s);await g(9344,l);return}};return(e,t)=>{const c=h,u=T,o=R,p=C,F=A,m=K,b=M;return x(),y("div",U,[a(c,{items:["\u5C0F\u5DE5\u5177","\u5B57\u5E93\u5199\u5165"]}),a(b,{gutter:20,align:"stretch"},{default:_(()=>[a(m,{span:24},{default:_(()=>[a(F,{class:"general-card",title:"\u5B57\u5E93\u5199\u5165"},{default:_(()=>[a(o,null,{default:_(()=>[a(u,{onClick:t[0]||(t[0]=r=>w(1))},{default:_(()=>[B("\u5199\u5165 117 \u5B57\u5E93\uFF08K\uFF09")]),_:1}),a(u,{onClick:t[1]||(t[1]=r=>w(2))},{default:_(()=>[B("\u5199\u5165 118+ \u5B57\u5E93\uFF08K\uFF09")]),_:1}),a(u,{onClick:t[2]||(t[2]=r=>w(3))},{default:_(()=>[B("\u5199\u5165 118+ \u5B57\u5E93\uFF08H\uFF09")]),_:1})]),_:1}),a(p),H("div",{id:"statusArea",style:{height:"20em","background-color":"azure",color:"silver",overflow:"auto",padding:"20px"},innerHTML:i.status},null,8,V)]),_:1})]),_:1})]),_:1})])}}});const Y=v(L,[["__scopeId","data-v-c103becb"]]);export{Y as default};
