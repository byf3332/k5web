import{e as V,q as z,_ as L}from"./index.0670e48a.js";/* empty css              *//* empty css              *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{d as K,r as N,bO as j,bP as q,bC as G,C as Q,D as Z,aI as e,aH as o,G as D,aM as F,bw as $,bx as J,n as f,aZ as W,b8 as X,bQ as Y,b5 as tt,bR as et,bA as ut,bD as ot,bI as at}from"./arco.06c99ad2.js";import{i as y,b as w,g,e as A,a as nt}from"./serial.c741fbda.js";import{_ as rt}from"./dialog.6b5e96d7.js";import{w as it}from"./tnode.0682d731.js";import"./chart.3b6dbf01.js";import"./vue.3660be0a.js";import"./dep-281dbb92.c73ee933.js";import"./index.c72e94fc.js";import"./index.2f88e0d4.js";import"./useDisabled.658f570a.js";/**
 * tdesign v1.9.4
 * (c) 2024 tdesign
 * @license MIT
 */var st=it(rt);const ct={class:"container"},lt=["innerHTML"],Ft={name:"Backup"},pt=K({...Ft,setup(dt){const a=V(),t=N({status:"\u70B9\u51FB\u5907\u4EFD\u6309\u94AE\u5C06\u751F\u6210 EEPROM \u5907\u4EFD\u6587\u4EF6<br/><br/>",eepromType:"",showHide:0,startInfo:"0x00",showDialog:!1,dialogTitle:1}),C=()=>{if(t.dialogTitle>=3){t.showDialog=!1,T();return}t.dialogTitle+=1},k=()=>{t.dialogTitle=1,t.showDialog=!0},h=async()=>{var u;if(a.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}switch(await y(a.connectPort,(u=a.configuration)==null?void 0:u.uart)){case 8192:t.eepromType="1";break;case 131072:t.eepromType="2";break;case 262144:t.eepromType="3";break;case 524288:t.eepromType="4";break}},T=async()=>{var p,i;if(a.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}const n=await y(a.connectPort,(p=a.configuration)==null?void 0:p.uart);let u=new Uint8Array(128);for(let s=0;s<n;s+=128)await w(a.connectPort,s,u,128,(i=a.configuration)==null?void 0:i.uart),t.status=t.status+"\u6E05\u7A7A\u8FDB\u5EA6\uFF1A"+((s-0)/n*100).toFixed(1)+"%<br/>",f(()=>{const r=document==null?void 0:document.getElementById("statusArea");r&&(r.scrollTop=r==null?void 0:r.scrollHeight)});await g(a.connectPort)},E=async(n,u,p=new Date+"_backup.bin")=>{var d;await A(a.connectPort);let i=new Uint8Array(u-n);for(let l=n;l<u;l+=128){const B=await nt(a.connectPort,l,128,(d=a.configuration)==null?void 0:d.uart);i.set(B,l-n),t.status=t.status+"\u5907\u4EFD\u8FDB\u5EA6\uFF1A"+((l-n)/i.length*100).toFixed(1)+"%<br/>",f(()=>{const _=document==null?void 0:document.getElementById("statusArea");_&&(_.scrollTop=_==null?void 0:_.scrollHeight)})}t.status=t.status+"\u5907\u4EFD\u8FDB\u5EA6\uFF1A100.0%<br/>",f(()=>{const l=document==null?void 0:document.getElementById("statusArea");l&&(l.scrollTop=l==null?void 0:l.scrollHeight)}),console.log(i);const s=new Blob([i],{type:"application/octet-stream"}),r=URL.createObjectURL(s),c=document.createElement("a");c.href=r,c.download=p,document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(r)},b=async(n=0)=>{await A(a.connectPort);const u=document.createElement("input");u.type="file",u.onchange=async()=>{var s;const p=new Blob([u.files[0]],{type:"application/octet-stream"}),i=new Uint8Array(await p.arrayBuffer());for(let r=n;r<u.files[0].size+n;r+=128)await w(a.connectPort,r,i.slice(r-n,r-n+128),128,(s=a.configuration)==null?void 0:s.uart),t.status=t.status+"\u6062\u590D\u8FDB\u5EA6\uFF1A"+((r-n)/u.files[0].size*100).toFixed(1)+"%<br/>",f(()=>{const c=document==null?void 0:document.getElementById("statusArea");c&&(c.scrollTop=c==null?void 0:c.scrollHeight)});t.status=t.status+"\u6062\u590D\u8FDB\u5EA6\uFF1A100.0%<br/>",await g(a.connectPort)},u.click()},v=async()=>{if(a.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}await E(0,7680,"config.bin")},P=async()=>{if(a.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}await E(7680,8192,"calibration.bin")},S=async()=>{if(a.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}await b()},x=async()=>{if(a.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}await b(7680)},R=async()=>{var u;if(a.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}let n=8192;switch(t.eepromType){case"1":n=8192;break;case"2":n=131072;break;case"3":n=262144;break;case"4":n=524288;break;default:n=8192}if(((u=a.configuration)==null?void 0:u.uart)=="official"&&n>=131072){alert("\u8BE5\u56FA\u4EF6\u4E0D\u652F\u6301\u5907\u4EFD\u6269\u5BB9\u7A7A\u95F4");return}await E(0,n)},I=async()=>{if(a.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}await b(parseInt(t.startInfo))};return(n,u)=>{const p=z,i=W,s=X,r=Y,c=tt,d=et,l=j,B=q,_=ut,M=G,O=ot,H=at,U=st;return Q(),Z("div",ct,[e(p,{items:["\u5C0F\u5DE5\u5177","\u5907\u4EFD/\u8FD8\u539F"]}),e(H,{gutter:20,align:"stretch"},{default:o(()=>[e(O,{span:24},{default:o(()=>[e(M,{class:"general-card"},{title:o(()=>[D("span",{onClick:u[0]||(u[0]=()=>{t.showHide+=1})},"\u5907\u4EFD/\u8FD8\u539F\uFF08\u624B\u53F0\u5E94\u5728\u5F00\u673A\u72B6\u6001\u4E0B\uFF09")]),default:o(()=>[e(B,{"default-active-key":"1"},{default:o(()=>[e(r,{key:"1",title:"\u5FEB\u6377\u5907\u4EFD"},{default:o(()=>[e(s,null,{default:o(()=>[e(i,{type:"primary",onClick:v},{default:o(()=>[F("\u5907\u4EFD\u914D\u7F6E")]),_:1}),e(i,{onClick:S},{default:o(()=>[F("\u6062\u590D\u914D\u7F6E")]),_:1}),e(i,{type:"primary",onClick:P},{default:o(()=>[F("\u5907\u4EFD\u6821\u51C6")]),_:1}),e(i,{onClick:x},{default:o(()=>[F("\u6062\u590D\u6821\u51C6")]),_:1})]),_:1})]),_:1}),e(r,{key:"2",title:"\u5B8C\u6574\u5907\u4EFD"},{default:o(()=>[e(s,null,{default:o(()=>[e(i,{type:"primary",onClick:R},{default:o(()=>[F("\u5907\u4EFD")]),_:1}),$(e(c,{modelValue:t.startInfo,"onUpdate:modelValue":u[1]||(u[1]=m=>t.startInfo=m)},null,8,["modelValue"]),[[J,t.showHide>=5]]),e(i,{onClick:I},{default:o(()=>[F("\u6062\u590D")]),_:1}),e(l,{modelValue:t.eepromType,"onUpdate:modelValue":u[2]||(u[2]=m=>t.eepromType=m),style:{width:"320px"},placeholder:"\u9009\u62E9EEPROM\u5927\u5C0F"},{default:o(()=>[e(d,{value:"1"},{default:o(()=>[F("8KB\uFF0864Kbit\uFF09")]),_:1}),e(d,{value:"2"},{default:o(()=>[F("128KB\uFF081Mbit\uFF09")]),_:1}),e(d,{value:"3"},{default:o(()=>[F("256KB\uFF082Mbit\uFF09")]),_:1}),e(d,{value:"4"},{default:o(()=>[F("512KB\uFF084Mbit\uFF09")]),_:1})]),_:1},8,["modelValue"]),e(i,{type:"text",onClick:h},{default:o(()=>[F("\u81EA\u52A8\u68C0\u6D4B")]),_:1})]),_:1})]),_:1}),e(r,{key:"3",title:"\u6E05\u7A7A\u6570\u636E"},{default:o(()=>[e(s,null,{default:o(()=>[e(i,{type:"primary",onClick:k},{default:o(()=>[F("\u6E05\u7A7A\u6570\u636E")]),_:1})]),_:1})]),_:1})]),_:1}),e(_),D("div",{id:"statusArea",style:{height:"20em","background-color":"azure",color:"silver",overflow:"auto",padding:"20px"},innerHTML:t.status},null,8,lt)]),_:1})]),_:1})]),_:1}),e(U,{visible:t.showDialog,"onUpdate:visible":u[3]||(u[3]=m=>t.showDialog=m),theme:"warning",header:t.dialogTitle>=3?"\u7B2C "+t.dialogTitle+" \u6B21\u8B66\u544A\uFF08\u6700\u540E\u8B66\u544A\uFF09":"\u7B2C "+t.dialogTitle+" \u6B21\u8B66\u544A",body:"\u8FD9\u5C06\u4F1A\u6E05\u7A7A EEPROM \u6240\u6709\u5185\u5BB9\uFF0C\u5305\u62EC\u914D\u7F6E\u53CA\u6821\u51C6\u6570\u636E\uFF01\uFF01\uFF01",onConfirm:C},null,8,["visible","header"])])}}});const Rt=L(pt,[["__scopeId","data-v-7b6c49ed"]]);export{Rt as default};
