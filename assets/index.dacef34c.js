import{e as ut,q as lt,_ as it}from"./index.c1a8a69c.js";/* empty css              *//* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css               */import{d as pt,r as ct,o as dt,bp as mt,bU as _t,aU as ft,bB as gt,bN as bt,bC as yt,C as f,D as h,aI as r,aH as l,u as wt,aM as m,aN as x,aK as C,aJ as D,aE as A,G as Ft,n as W,ba as ht,bX as xt,aZ as St,b8 as Ct,bY as Dt,bD as At,bM as Bt}from"./arco.7ae79712.js";import{e as tt,s as Et,f as c,h as i,g as Vt}from"./serial.b70f48dc.js";import{u as vt}from"./loading.86a32d9d.js";import"./chart.ccb65525.js";import"./vue.4cd98a80.js";const Tt={class:"container"},Pt=["innerHTML"],It={name:"Sat"},Ut=pt({...It,setup(kt){const{loading:at,setLoading:g}=vt(!0),e=ut(),t=ct({status:"\u70B9\u51FB\u5199\u5165\u6309\u94AE\u5199\u5165\u536B\u661F\u6570\u636E\u5230\u8BBE\u5907<br/><br/>",sat:"",satData:[],lng:0,lat:0,alt:0,tx:0,rx:0,txTone:0,rxTone:0,CTCSSOption:[67,69.3,71.9,74.4,77,79.7,82.5,85.4,88.5,91.5,94.8,97.4,100,103.5,107.2,110.9,114.8,118.8,123,127.3,131.8,136.5,141.3,146.2,151.4,156.7,159.8,162.2,165.5,167.9,171.3,173.8,177.3,179.9,183.5,186.2,189.9,192.8,196.6,199.5,203.5,206.5,210.7,218.1,225.7,229.1,233.6,241.8,250.3,254.1],pass:void 0,passOption:[],dt:"",timer:void 0,passCustom:void 0});dt(()=>{t.timer=setInterval(()=>{t.dt=new Date().toLocaleString("zh-CN",{timeZone:"Asia/Shanghai"})},1e3)}),mt(()=>{try{clearInterval(t.timer)}catch{}});const et=async()=>{var o;const u=new Date,a=[...i(parseInt(u.getFullYear().toString().substring(2,4)).toString(16)),...i((u.getMonth()+1).toString(16)),...i(u.getDate().toString(16)),...i(u.getHours().toString(16)),...i(u.getMinutes().toString(16)),...i(u.getSeconds().toString(16))];await c(e.connectPort,11200,new Uint8Array(a),6,(o=e.configuration)==null?void 0:o.uart)},ot=async u=>{const a=t.satData.find(o=>o.name==u);a&&a.path&&(t.status+="<br/>\u536B\u661F\u53C2\u6570\uFF1A<br/>",a.path.map(o=>{t.status+=o+"<br/>"})),W(()=>{const o=document==null?void 0:document.getElementById("statusArea");o&&(o.scrollTop=o==null?void 0:o.scrollHeight)})};(async()=>{g(!0);const a=(await(await fetch("https://celestrak.org/NORAD/elements/amateur.txt")).text()).split(/\r?\n/),o=[];let s={};for(let p=0;p<a.length;p++)Number.isNaN(parseInt(a[p].substring(0,1)))?(s.name&&s.name!=""&&(o.push(s),s={}),s.name=a[p]):(s.path||(s.path=[]),s.path.push(a[p]));t.satData=o,g(!1)})();const I=async()=>{g(!0),navigator.geolocation.getCurrentPosition(u=>{u.coords&&(t.lat=u.coords.latitude,t.lng=u.coords.longitude,u.coords.altitude&&(t.alt=u.coords.altitude))}),g(!1)};I();const nt=async(u=0,a)=>{var o;await tt(e.connectPort);for(let s=u;s<a.length+u;s+=128)await c(e.connectPort,s,a.slice(s-u,s-u+128),128,(o=e.configuration)==null?void 0:o.uart),t.status=t.status+"\u5199\u5165\u8FDB\u5EA6\uFF1A"+((s-u)/a.length*100).toFixed(1)+"%<br/>",W(()=>{const p=document==null?void 0:document.getElementById("statusArea");p&&(p.scrollTop=p==null?void 0:p.scrollHeight)});t.status=t.status+"\u5199\u5165\u8FDB\u5EA6\uFF1A100.0%<br/>"},st=async()=>{if(!t.sat){alert("\u8BF7\u9009\u62E9\u536B\u661F\uFF01");return}g(!0);const u=await(await fetch("https://k5.vicicode.com/api/pass",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({sat:t.sat,sat_line_1:t.satData.find(o=>o.name==t.sat).path[0],sat_line_2:t.satData.find(o=>o.name==t.sat).path[1],lat:t.lat,lng:t.lng,alt:t.alt})})).json(),a=[];for(let o=0;o<u.pass_times.length;o++)try{let s;Date.parse(u.departure_times[o])-Date.parse(u.pass_times[o])>0?s=[u.pass_times[o],u.departure_times[o]]:s=[u.pass_times[o],u.departure_times[o+1]],a.push(s)}catch{}a.length>0?t.pass=a[0][0]+"|"+a[0][1]:t.pass=void 0,t.passOption=a,g(!1)},rt=async()=>{var k,O,N,M,H,L,Y,R,j,J,$,z,Z,q,G,K,X;if(e.connectState!=!0){alert("\u8BF7\u5148\u8FDE\u63A5\u624B\u53F0\uFF01");return}if(!t.sat){alert("\u8BF7\u9009\u62E9\u536B\u661F\uFF01");return}if(t.passCustom&&(t.pass=t.passCustom[0]+"|"+t.passCustom[1]),!t.pass){alert("\u8BF7\u9009\u62E9\u8FC7\u5883\u65F6\u95F4\uFF01");return}g(!0);const u=await(await fetch("https://k5.vicicode.com/api/doppler",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({sat:t.sat,sat_line_1:t.satData.find(y=>y.name==t.sat).path[0],sat_line_2:t.satData.find(y=>y.name==t.sat).path[1],lat:t.lat,lng:t.lng,alt:t.alt,tx:t.tx,rx:t.rx,pass_time:t.pass.split("|")[0],departure_time:t.pass.split("|")[1]})})).json(),a=t.sat,o=t.pass.split("|")[0],s=o.split("-")[0].substring(2,4),p=o.split("-")[1],w=o.split("-")[2].split(" ")[0],b=o.split(" ")[1].split(":")[0],F=o.split(" ")[1].split(":")[1],B=o.split(" ")[1].split(":")[2],_=t.pass.split("|")[1],E=_.split("-")[0].substring(2,4),V=_.split("-")[1],v=_.split("-")[2].split(" ")[0],T=_.split(" ")[1].split(":")[0],P=_.split(" ")[1].split(":")[1],n=_.split(" ")[1].split(":")[2];await tt(e.connectPort);let d=new Uint8Array(10);d.set(Et(a.trim()).subarray(0,9)),await c(e.connectPort,11168,d,10,(k=e.configuration)==null?void 0:k.uart),await c(e.connectPort,11178,i(parseInt(s).toString(16)).subarray(0,1),1,(O=e.configuration)==null?void 0:O.uart),await c(e.connectPort,11179,i(parseInt(p).toString(16)).subarray(0,1),1,(N=e.configuration)==null?void 0:N.uart),await c(e.connectPort,11180,i(parseInt(w).toString(16)).subarray(0,1),1,(M=e.configuration)==null?void 0:M.uart),await c(e.connectPort,11181,i(parseInt(b).toString(16)).subarray(0,1),1,(H=e.configuration)==null?void 0:H.uart),await c(e.connectPort,11182,i(parseInt(F).toString(16)).subarray(0,1),1,(L=e.configuration)==null?void 0:L.uart),await c(e.connectPort,11183,i(parseInt(B).toString(16)).subarray(0,1),1,(Y=e.configuration)==null?void 0:Y.uart),await c(e.connectPort,11184,i(parseInt(E).toString(16)).subarray(0,1),1,(R=e.configuration)==null?void 0:R.uart),await c(e.connectPort,11185,i(parseInt(V).toString(16)).subarray(0,1),1,(j=e.configuration)==null?void 0:j.uart),await c(e.connectPort,11186,i(parseInt(v).toString(16)).subarray(0,1),1,(J=e.configuration)==null?void 0:J.uart),await c(e.connectPort,11187,i(parseInt(T).toString(16)).subarray(0,1),1,($=e.configuration)==null?void 0:$.uart),await c(e.connectPort,11188,i(parseInt(P).toString(16)).subarray(0,1),1,(z=e.configuration)==null?void 0:z.uart),await c(e.connectPort,11189,i(parseInt(n).toString(16)).subarray(0,1),1,(Z=e.configuration)==null?void 0:Z.uart),d=new Uint8Array(2),d.set(i(((Date.parse(_)-Date.parse(o))/1e3).toString(16)).subarray(0,2)),await c(e.connectPort,11190,d,2,(q=e.configuration)==null?void 0:q.uart),d=new Uint8Array(2),t.txTone&&t.txTone>0&&d.set(i(t.txTone.toString(16)).subarray(0,2)),await c(e.connectPort,11192,d,2,(G=e.configuration)==null?void 0:G.uart),d=new Uint8Array(2),t.rxTone&&t.rxTone>0&&d.set(i(t.rxTone.toString(16)).subarray(0,2)),await c(e.connectPort,11194,d,2,(K=e.configuration)==null?void 0:K.uart),d=new Uint8Array(4),d.set(i(((Date.parse(o)-Date.parse("2000-01-01 00:00:00"))/1e3).toString(16)).subarray(0,4)),await c(e.connectPort,11196,d,4,(X=e.configuration)==null?void 0:X.uart);const U=[];u.shift_array.filter((y,S)=>S%2===0).map(y=>{const S=new Uint8Array(4),Q=new Uint8Array(4);S.set(i(parseInt(((t.tx*1e6+y[0])/10).toFixed(0)).toString(16))),Q.set(i(parseInt(((t.rx*1e6+y[1])/10).toFixed(0)).toString(16))),U.push(...S,...Q)}),d=new Uint8Array(7680),d.set(new Uint8Array(U).subarray(0,7680)),await nt(123392,d),await et(),await Vt(e.connectPort),g(!1)};return(u,a)=>{const o=lt,s=ht,p=xt,w=_t,b=ft,F=St,B=Ct,_=Dt,E=gt,V=bt,v=yt,T=At,P=Bt;return f(),h("div",Tt,[r(o,{items:["\u5C0F\u5DE5\u5177","\u536B\u661F\u5199\u5165"]}),r(P,{gutter:20,align:"stretch"},{default:l(()=>[r(T,{span:24},{default:l(()=>[r(v,{class:"general-card",title:"\u536B\u661F\u5199\u5165"},{default:l(()=>[r(V,{loading:wt(at),style:{width:"100%"},tip:"\u6B63\u5728\u5904\u7406 ..."},{default:l(()=>[r(s,{"label-col-style":{width:"25%"},field:"dt",label:"\u6D4F\u89C8\u5668\u65F6\u95F4"},{default:l(()=>[m(x(t.dt),1)]),_:1}),r(s,{"label-col-style":{width:"25%"},field:"sat",label:"\u9009\u62E9\u536B\u661F"},{default:l(()=>[r(w,{modelValue:t.sat,"onUpdate:modelValue":a[0]||(a[0]=n=>t.sat=n),onChange:ot,placeholder:"\u9009\u62E9\u536B\u661F ...","allow-search":"","allow-clear":""},{default:l(()=>[(f(!0),h(C,null,D(t.satData,n=>(f(),A(p,{key:n.name,value:n.name},{default:l(()=>[m(x(n.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(s,{"label-col-style":{width:"25%"},field:"lng",label:"\u53F0\u7AD9\u7ECF\u5EA6"},{default:l(()=>[r(b,{precision:6,modelValue:t.lng,"onUpdate:modelValue":a[1]||(a[1]=n=>t.lng=n)},null,8,["modelValue"])]),_:1}),r(s,{"label-col-style":{width:"25%"},field:"lat",label:"\u53F0\u7AD9\u7EAC\u5EA6"},{default:l(()=>[r(b,{precision:6,modelValue:t.lat,"onUpdate:modelValue":a[2]||(a[2]=n=>t.lat=n)},null,8,["modelValue"])]),_:1}),r(s,{"label-col-style":{width:"25%"},field:"alt",label:"\u53F0\u7AD9\u6D77\u62D4"},{default:l(()=>[r(b,{precision:0,modelValue:t.alt,"onUpdate:modelValue":a[3]||(a[3]=n=>t.alt=n)},null,8,["modelValue"])]),_:1}),r(s,{"label-col-style":{width:"25%"},label:""},{default:l(()=>[r(B,null,{default:l(()=>[r(F,{onClick:I},{default:l(()=>[m("\u6D4F\u89C8\u5668\u83B7\u53D6\u7ECF\u7EAC\u5EA6")]),_:1}),r(F,{onClick:st},{default:l(()=>[m("\u83B7\u53D6\u536B\u661F\u8FC7\u5883\u65F6\u95F4")]),_:1})]),_:1})]),_:1}),r(s,{"label-col-style":{width:"25%"},field:"pass",label:"\u9009\u62E9\u8FC7\u5883\u65F6\u95F4"},{default:l(()=>[r(w,{modelValue:t.pass,"onUpdate:modelValue":a[4]||(a[4]=n=>t.pass=n),"allow-search":"","allow-clear":""},{default:l(()=>[(f(!0),h(C,null,D(t.passOption,n=>(f(),A(p,{key:n[0]+"|"+n[1],value:n[0]+"|"+n[1]},{default:l(()=>[m(x(n[0]+" - "+n[1]),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(s,{"label-col-style":{width:"25%"},field:"passCustom",label:"\u81EA\u5B9A\u4E49\u8FC7\u5883\u65F6\u95F4"},{default:l(()=>[r(_,{style:{width:"360px",margin:"0 24px 24px 0"},"show-time":"","time-picker-props":{defaultValue:["00:00:00","00:00:00"]},format:"YYYY-MM-DD HH:mm:ss",modelValue:t.passCustom,"onUpdate:modelValue":a[5]||(a[5]=n=>t.passCustom=n)},null,8,["modelValue"])]),_:1}),r(s,{"label-col-style":{width:"25%"},field:"tx",label:"\u4E0A\u884C\u9891\u7387"},{default:l(()=>[r(b,{precision:5,modelValue:t.tx,"onUpdate:modelValue":a[6]||(a[6]=n=>t.tx=n)},null,8,["modelValue"])]),_:1}),r(s,{"label-col-style":{width:"25%"},field:"txTone",label:"\u4E0A\u884C\u4E9A\u97F3"},{default:l(()=>[r(w,{modelValue:t.txTone,"onUpdate:modelValue":a[7]||(a[7]=n=>t.txTone=n),"allow-search":"","allow-clear":""},{default:l(()=>[r(p,{value:0},{default:l(()=>[m("\u5173\u95ED")]),_:1}),(f(!0),h(C,null,D(t.CTCSSOption,n=>(f(),A(p,{key:n,value:n},{default:l(()=>[m(x(n.toFixed(1)),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(s,{"label-col-style":{width:"25%"},field:"rx",label:"\u4E0B\u884C\u9891\u7387"},{default:l(()=>[r(b,{precision:5,modelValue:t.rx,"onUpdate:modelValue":a[8]||(a[8]=n=>t.rx=n)},null,8,["modelValue"])]),_:1}),r(s,{"label-col-style":{width:"25%"},field:"rxTone",label:"\u4E0B\u884C\u4E9A\u97F3"},{default:l(()=>[r(w,{modelValue:t.rxTone,"onUpdate:modelValue":a[9]||(a[9]=n=>t.rxTone=n),"allow-search":"","allow-clear":""},{default:l(()=>[r(p,{value:0},{default:l(()=>[m("\u5173\u95ED")]),_:1}),(f(!0),h(C,null,D(t.CTCSSOption,n=>(f(),A(p,{key:n,value:n},{default:l(()=>[m(x(n.toFixed(1)),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(s,{"label-col-style":{width:"25%"},label:""},{default:l(()=>[r(F,{onClick:rt},{default:l(()=>[m("\u5199\u5165\u6570\u636E")]),_:1})]),_:1}),r(E),Ft("div",{id:"statusArea",style:{height:"20em","background-color":"azure",color:"silver",overflow:"auto",padding:"20px"},innerHTML:t.status},null,8,Pt)]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})])}}});const Wt=it(Ut,[["__scopeId","data-v-b3b18f47"]]);export{Wt as default};
