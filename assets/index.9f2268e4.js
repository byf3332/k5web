import{_}from"./index.d4000d74.js";/* empty css               */import{d as F,r as f,o as h,bF as g,a$ as m,D as y,bn as i,bo as c,G as o,aM as s,aI as a,aN as d,aH as v,be as A,bf as b,C as D}from"./arco.949c921a.js";import"./chart.b6f2f6d9.js";import"./vue.d12e9c08.js";const l=u=>(A("data-v-9a7d1078"),u=u(),b(),u),S={class:"container"},C={style:{"background-color":"#fff",padding:"10%"}},B=l(()=>o("br",null,null,-1)),E={style:{"background-color":"#fff",padding:"10%"}},x=l(()=>o("p",{style:{"font-size":"1.5rem","font-weight":"bold"}}," \u83B7\u53D6\u4FE1\u606F\uFF08Information\uFF09 ",-1)),k={name:"SatLoc"},w=F({...k,setup(u){const t=f({lat:0,lng:0,alt:0,type:0,uuid:""});h(()=>{t.uuid=new URLSearchParams(location.hash.replace("#/satloc?","")).get("uuid"),navigator.geolocation.getCurrentPosition(e=>{e.coords&&(t.lat=e.coords.latitude,t.lng=e.coords.longitude,e.coords.altitude&&(t.alt=e.coords.altitude))})});const r=async()=>{await fetch("https://k5.vicicode.com/api/lol",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({func:0,uuid:t.uuid,cache:JSON.stringify([t.lng,t.lat,t.alt])})}),t.type=1};return(e,I)=>{const n=g,p=m;return D(),y("div",S,[i(o("div",C,[s(" \u8BF7\u70B9\u51FB\u7F51\u9875\u201C\u5DF2\u626B\u7801\u4E0A\u4F20\u201D\u6309\u94AE "),B,s(' Please click on the "Scanned and Uploaded" button on PC page. ')],512),[[c,t.type!=0]]),i(o("div",E,[x,a(n),o("p",null," \u53F0\u7AD9\u7ECF\u5EA6\uFF08Longitude\uFF09\uFF1A"+d(t.lng),1),a(n),o("p",null," \u53F0\u7AD9\u7EAC\u5EA6\uFF08Latitude\uFF09\uFF1A"+d(t.lat),1),a(n),o("p",null," \u53F0\u7AD9\u6D77\u62D4\uFF08Altitude\uFF09\uFF1A"+d(t.alt),1),a(n),a(p,{type:"primary",onClick:r},{default:v(()=>[s("\u4E0A\u4F20\uFF08Upload\uFF09")]),_:1})],512),[[c,t.type==0]])])}}});const U=_(w,[["__scopeId","data-v-9a7d1078"]]);export{U as default};
