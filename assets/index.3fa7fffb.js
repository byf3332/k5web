import{e as A,as as P,_ as K}from"./index.e9286132.js";/* empty css              *//* empty css              *//* empty css               *//* empty css                */import{d as H,r as L,bP as N,bH as U,bN as M,C as v,D as O,aI as r,aH as _,aE as x,aM as D,bQ as R,b7 as T,bi as V,bI as j,bM as z,bm as G,bn as Q,G as C}from"./arco.93f0afda.js";import{e as q,b as J,g as W}from"./serial.bad97c4e.js";import"./chart.c383733a.js";import"./vue.ded74ca2.js";const I=b=>(G("data-v-208cc1d9"),b=b(),Q(),b),X={class:"container"},Y=I(()=>C("div",{id:"canvasDiv",style:{zoom:"250%"}},null,-1)),Z=I(()=>C("br",null,null,-1)),$={name:"Backup"},tt=H({...$,setup(b){const l=A(),a=L({activeKey:1,binaryFile:void 0,loading:!1}),k=()=>{const n=document.createElement("input");n.type="file",n.onchange=async()=>{const p=new Blob([n.files[0]],{type:"application/octet-stream"}),f=URL.createObjectURL(p),t=document.createElement("canvas");t.width=128,t.height=64;const u=t.cloneNode(),c=document.getElementById("canvasDiv");c.innerHTML="",c==null||c.append(t,u);const o=new Image;o.src=f,o.onload=()=>{const d=t.getContext("2d");d==null||d.drawImage(o,0,0,128,64);const g=d==null?void 0:d.getImageData(0,0,t.width,t.height).data;function y(i,s){const e=(s*128+i)*4;return g[e]+g[e+1]+g[e+2]>128*3?0:1}const h=u.getContext("2d"),m=h.getImageData(0,0,u.width,u.height);for(let i=0;i<64;i++)for(let s=0;s<128;s++){const e=(i*128+s)*4,F=!y(s,i);m.data[e]=F*255,m.data[e+1]=F*255,m.data[e+2]=F*255,m.data[e+3]=255}h.putImageData(m,0,0);const w=new Uint8Array(1024);let S=0;for(let i=0;i<64;i+=8)for(let s=0;s<128;s++){let E=0;for(let e=0;e<8;e++)E|=y(s,i+e)<<e;w[S++]=E}a.binaryFile=w}},n.click()},B=async()=>{var f,t,u,c;if(l.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}if(((f=l.configuration)==null?void 0:f.uart)=="official"){alert("\u56FA\u4EF6\u7248\u672C\u4E0D\u5339\u914D");return}if(a.activeKey==2&&((t=l.configuration)==null?void 0:t.charset)!="gb2312"){alert("\u56FA\u4EF6\u7248\u672C\u4E0D\u5339\u914D");return}if(a.activeKey==1&&((u=l.configuration)==null?void 0:u.charset)!="losehu"){alert("\u56FA\u4EF6\u7248\u672C\u4E0D\u5339\u914D");return}a.loading=!0;let n=123728;a.activeKey==2&&(n=8320),await q(l.connectPort);const p=a.binaryFile;for(let o=n;o<p.length+n;o+=128)await J(l.connectPort,o,p.slice(o-n,o-n+128),128,(c=l.configuration)==null?void 0:c.uart);await W(l.connectPort),a.loading=!1};return(n,p)=>{const f=P,t=R,u=N,c=T,o=V,d=U,g=M,y=j,h=z;return v(),O("div",X,[r(f,{items:["\u5C0F\u5DE5\u5177","\u5F00\u673A\u56FE\u7247"]}),r(h,{gutter:20,align:"stretch"},{default:_(()=>[r(y,{span:24},{default:_(()=>[r(g,{loading:a.loading,tip:"\u5199\u5165\u4E2D...",style:{width:"100%"}},{default:_(()=>[r(d,{class:"general-card",title:"\u5F00\u673A\u56FE\u7247"},{default:_(()=>[r(u,{"active-key":a.activeKey,onChange:p[0]||(p[0]=m=>{a.activeKey=m})},{default:_(()=>[(v(),x(t,{key:1,title:"LOSEHU 117"})),(v(),x(t,{key:2,title:"LOSEHU 118+"}))]),_:1},8,["active-key"]),Y,Z,r(o,null,{default:_(()=>[r(c,{onClick:k},{default:_(()=>[D("\u9009\u62E9\u56FE\u7247")]),_:1}),r(c,{type:"primary",disabled:!a.binaryFile,onClick:B},{default:_(()=>[D("\u5199\u5165")]),_:1},8,["disabled"])]),_:1})]),_:1})]),_:1},8,["loading"])]),_:1})]),_:1})])}}});const lt=K(tt,[["__scopeId","data-v-208cc1d9"]]);export{lt as default};
