import{e as x,q as M,_ as R}from"./index.ecebec16.js";/* empty css              *//* empty css              *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{d as S,r as P,bU as U,bV as O,bB as V,bC as H,C as L,D as I,aI as t,aH as e,aM as l,G as K,aZ as z,b8 as N,bW as j,bX as q,bD as G,bM as W,n as E}from"./arco.beabb834.js";import{m as X,e as B,a as Z,f as J,g as Q}from"./serial.b70f48dc.js";import"./chart.83b8c11b.js";import"./vue.30c84055.js";const Y={class:"container"},$=["innerHTML"],tt={name:"Backup"},et=S({...tt,setup(ut){const o=x(),s=P({status:"\u70B9\u51FB\u5907\u4EFD\u6309\u94AE\u5C06\u751F\u6210 EEPROM \u5907\u4EFD\u6587\u4EF6<br/><br/>",eepromType:""}),y=async()=>{if(o.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}await X()},m=async(u,n,_=new Date+"_backup.bin")=>{var d;await B(o.connectPort);let c=new Uint8Array(n-u);for(let r=u;r<n;r+=128){const b=await Z(o.connectPort,r,128,(d=o.configuration)==null?void 0:d.uart);c.set(b,r-u),s.status=s.status+"\u5907\u4EFD\u8FDB\u5EA6\uFF1A"+((r-u)/c.length*100).toFixed(1)+"%<br/>",E(()=>{const F=document==null?void 0:document.getElementById("statusArea");F&&(F.scrollTop=F==null?void 0:F.scrollHeight)})}s.status=s.status+"\u5907\u4EFD\u8FDB\u5EA6\uFF1A100.0%<br/>",E(()=>{const r=document==null?void 0:document.getElementById("statusArea");r&&(r.scrollTop=r==null?void 0:r.scrollHeight)}),console.log(c);const p=new Blob([c],{type:"application/octet-stream"}),i=URL.createObjectURL(p),a=document.createElement("a");a.href=i,a.download=_,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(i)},f=async(u=0)=>{await B(o.connectPort);const n=document.createElement("input");n.type="file",n.onchange=async()=>{var p;const _=new Blob([n.files[0]],{type:"application/octet-stream"}),c=new Uint8Array(await _.arrayBuffer());for(let i=u;i<n.files[0].size+u;i+=128)await J(o.connectPort,i,c.slice(i-u,i-u+128),128,(p=o.configuration)==null?void 0:p.uart),s.status=s.status+"\u6062\u590D\u8FDB\u5EA6\uFF1A"+((i-u)/n.files[0].size*100).toFixed(1)+"%<br/>",E(()=>{const a=document==null?void 0:document.getElementById("statusArea");a&&(a.scrollTop=a==null?void 0:a.scrollHeight)});s.status=s.status+"\u6062\u590D\u8FDB\u5EA6\uFF1A100.0%<br/>",await Q(o.connectPort)},n.click()},D=async()=>{if(o.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}await m(0,7680,"config.bin")},k=async()=>{if(o.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}await m(7680,8192,"calibration.bin")},w=async()=>{if(o.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}await f()},A=async()=>{if(o.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}await f(7680)},g=async()=>{var n;if(o.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}let u=8192;switch(s.eepromType){case"1":u=8192;break;case"2":u=131072;break;case"3":u=262144;break;case"4":u=524288;break;default:u=8192}if(((n=o.configuration)==null?void 0:n.uart)=="official"&&u>=131072){alert("\u8BE5\u56FA\u4EF6\u4E0D\u652F\u6301\u5907\u4EFD\u6269\u5BB9\u7A7A\u95F4");return}await m(0,u)},C=async()=>{if(o.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}await f()};return(u,n)=>{const _=M,c=z,p=N,i=j,a=q,d=U,r=O,b=V,F=H,h=G,v=W;return L(),I("div",Y,[t(_,{items:["\u5C0F\u5DE5\u5177","\u5907\u4EFD/\u8FD8\u539F"]}),t(v,{gutter:20,align:"stretch"},{default:e(()=>[t(h,{span:24},{default:e(()=>[t(F,{class:"general-card",title:"\u5907\u4EFD/\u8FD8\u539F"},{default:e(()=>[t(r,{"default-active-key":"1"},{default:e(()=>[t(i,{key:"1",title:"\u5FEB\u6377\u5907\u4EFD"},{default:e(()=>[t(p,null,{default:e(()=>[t(c,{type:"primary",onClick:D},{default:e(()=>[l("\u5907\u4EFD\u914D\u7F6E")]),_:1}),t(c,{onClick:w},{default:e(()=>[l("\u6062\u590D\u914D\u7F6E")]),_:1}),t(c,{type:"primary",onClick:k},{default:e(()=>[l("\u5907\u4EFD\u6821\u51C6")]),_:1}),t(c,{onClick:A},{default:e(()=>[l("\u6062\u590D\u6821\u51C6")]),_:1})]),_:1})]),_:1}),t(i,{key:"2",title:"\u5B8C\u6574\u5907\u4EFD"},{default:e(()=>[t(p,null,{default:e(()=>[t(c,{type:"primary",onClick:g},{default:e(()=>[l("\u5907\u4EFD")]),_:1}),t(c,{onClick:C},{default:e(()=>[l("\u6062\u590D")]),_:1}),t(d,{modelValue:s.eepromType,"onUpdate:modelValue":n[0]||(n[0]=T=>s.eepromType=T),style:{width:"320px"},placeholder:"\u9009\u62E9EEPROM\u5927\u5C0F"},{default:e(()=>[t(a,{value:"1"},{default:e(()=>[l("8KB\uFF0864Kbit\uFF09")]),_:1}),t(a,{value:"2"},{default:e(()=>[l("128KB\uFF081Mbit\uFF09")]),_:1}),t(a,{value:"3"},{default:e(()=>[l("256KB\uFF082Mbit\uFF09")]),_:1}),t(a,{value:"4"},{default:e(()=>[l("512KB\uFF084Mbit\uFF09")]),_:1})]),_:1},8,["modelValue"]),t(c,{type:"text",onClick:y},{default:e(()=>[l("\u81EA\u52A8\u68C0\u6D4B")]),_:1})]),_:1})]),_:1})]),_:1}),t(b),K("div",{id:"statusArea",style:{height:"20em","background-color":"azure",color:"silver",overflow:"auto",padding:"20px"},innerHTML:s.status},null,8,$)]),_:1})]),_:1})]),_:1})])}}});const bt=R(et,[["__scopeId","data-v-bac7f4ab"]]);export{bt as default};
