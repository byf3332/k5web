import{_ as r}from"./index.e6020230.js";/* empty css               */import{d as p,r as _,o as f,bB as h,a_ as m,D as g,bo as i,bp as c,G as a,aI as e,aN as n,aH as F,bd as y,be as v,C as A,aM as D}from"./arco.02de294f.js";import"./chart.61cd37ef.js";import"./vue.4e4c1473.js";const b=s=>(y("data-v-14f2aa44"),s=s(),v(),s),B={class:"container"},S={style:{"background-color":"#fff",padding:"10%"}},C={style:{"background-color":"#fff",padding:"10%"}},E=b(()=>a("p",{style:{"font-size":"1.5rem","font-weight":"bold"}}," \u83B7\u53D6\u4FE1\u606F ",-1)),x={name:"SatLoc"},w=p({...x,setup(s){const t=_({lat:0,lng:0,alt:0,type:0,uuid:""});f(()=>{t.uuid=new URLSearchParams(location.hash.replace("#/satloc?","")).get("uuid"),navigator.geolocation.getCurrentPosition(o=>{o.coords&&(t.lat=o.coords.latitude,t.lng=o.coords.longitude,o.coords.altitude&&(t.alt=o.coords.altitude))})});const d=async()=>{await fetch("https://k5.vicicode.com/api/lol",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({func:0,uuid:t.uuid,cache:JSON.stringify([t.lng,t.lat,t.alt])})}),t.type=1};return(o,k)=>{const u=h,l=m;return A(),g("div",B,[i(a("div",S," \u8BF7\u70B9\u51FB\u7F51\u9875\u201C\u5DF2\u626B\u7801\u4E0A\u4F20\u201D\u6309\u94AE ",512),[[c,t.type!=0]]),i(a("div",C,[E,e(u),a("p",null," \u53F0\u7AD9\u7ECF\u5EA6\uFF1A"+n(t.lng),1),e(u),a("p",null," \u53F0\u7AD9\u7EAC\u5EA6\uFF1A"+n(t.lat),1),e(u),a("p",null," \u53F0\u7AD9\u6D77\u62D4\uFF1A"+n(t.alt),1),e(u),e(l,{type:"primary",onClick:d},{default:F(()=>[D("\u4E0A\u4F20")]),_:1})],512),[[c,t.type==0]])])}}});const V=r(w,[["__scopeId","data-v-14f2aa44"]]);export{V as default};
