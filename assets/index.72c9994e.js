import{e as B,ar as E,_ as k}from"./index.28b8c38d.js";/* empty css              *//* empty css              *//* empty css               *//* empty css               */import{d as v,r as A,o as C,bH as N,C as $,D as I,aI as i,aH as c,aM as p,aN as f,G as H,n as y,a$ as P,ba as S,bF as T,bI as D,bL as M}from"./arco.f43727df.js";import{h as V}from"./vue.cbdb927d.js";import{d as b,c as q,r as _,j as x,k as h,l as L,m as R}from"./serial.c741fbda.js";import"./chart.3c227ebb.js";const j={class:"container"},U=["innerHTML"],O={name:"Flash"},z=v({...O,setup(G){const m=B(),e=A({status:"\u70B9\u51FB\u66F4\u65B0\u6309\u94AE\u66F4\u65B0\u56FA\u4EF6\u5230\u8BBE\u5907<br/><br/>",binaryFile:void 0,binaryName:""}),d=V();C(async()=>{var t;if(d.query.url){const o=await fetch(d.query.url),r=(t=o==null?void 0:o.body)==null?void 0:t.getReader();if(r){const n=[];for(;;){const{done:u,value:l}=await r.read();if(u)break;n.push(...l)}const a=new Uint8Array(n);e.binaryFile=a,e.binaryName=d.query.url.substring(d.query.url.lastIndexOf("/")+1)}}});const F=()=>{const t=document.createElement("input");t.type="file",t.onchange=async()=>{const o=new Blob([t.files[0]],{type:"application/octet-stream"}),r=new Uint8Array(await o.arrayBuffer());e.binaryFile=r,e.binaryName=t.files[0].name},t.click()},g=async()=>{if(!e.binaryFile){alert("\u8BF7\u9009\u62E9\u6587\u4EF6");return}m.connectPort&&await b(m.connectPort);let t=await q();await _(t,24,1e3);const o=x(e.binaryFile),r=new Uint8Array([48,5,o.length,0,...o]);await h(t,r),await _(t,24);const n=L(e.binaryFile);if(n.length>61439)throw new Error("Last resort boundary check failed. Whoever touched the code is an idiot.");for(let a=0;a<n.length;a+=256){const u=n.slice(a,a+256),l=R(u,a,n.length);try{await h(t,l),await _(t,26)}catch(s){return console.log("Flash command rejected. Aborting."),Promise.reject(s)}e.status=e.status+`\u66F4\u65B0\u8FDB\u5EA6 ${(a/n.length*100).toFixed(1)}%<br/>`,y(()=>{const s=document==null?void 0:document.getElementById("statusArea");s&&(s.scrollTop=s==null?void 0:s.scrollHeight)})}e.status=e.status+"\u66F4\u65B0\u8FDB\u5EA6 100.0%<br/>",e.status=e.status+"\u56FA\u4EF6\u66F4\u65B0\u6210\u529F",y(()=>{const a=document==null?void 0:document.getElementById("statusArea");a&&(a.scrollTop=a==null?void 0:a.scrollHeight)}),b(t),m.updateSettings({connectState:!1})};return(t,o)=>{const r=E,n=P,a=S,u=T,l=N,s=D,w=M;return $(),I("div",j,[i(r,{items:[t.$t("menu.list"),t.$t("menu.flash")]},null,8,["items"]),i(w,{gutter:20,align:"stretch"},{default:c(()=>[i(s,{span:24},{default:c(()=>[i(l,{class:"general-card",title:t.$t("menu.flash")+t.$t("global.onBoot")},{default:c(()=>[i(a,null,{default:c(()=>[i(n,{onClick:F},{default:c(()=>[p(f(e.binaryFile?e.binaryName:t.$t("tool.selectFirmware")),1)]),_:1}),i(n,{type:"primary",disabled:!e.binaryFile,onClick:g},{default:c(()=>[p(f(t.$t("tool.flash")),1)]),_:1},8,["disabled"])]),_:1}),i(u),H("div",{id:"statusArea",style:{height:"20em","background-color":"azure",color:"silver",overflow:"auto",padding:"20px"},innerHTML:e.status},null,8,U)]),_:1},8,["title"])]),_:1})]),_:1})])}}});const at=k(z,[["__scopeId","data-v-20389da6"]]);export{at as default};
