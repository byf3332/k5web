import{v as L,ak as B,_ as E}from"./index.d4000d74.js";/* empty css              *//* empty css              *//* empty css                */import{d as V,r as j,w as F,o as O,bT as U,bH as H,C as d,D as h,aI as r,aH as i,u as I,G as T,aM as f,aK as x,aJ as b,aE as y,aN as k,bU as $,a$ as R,bI as J,bK as A}from"./arco.949c921a.js";import{f as G}from"./vue.d12e9c08.js";import{u as K}from"./loading.68e8c78e.js";import{L as Y}from"./index.1d536ab5.js";import{S as q}from"./index.fbe1d01c.js";import"./chart.b6f2f6d9.js";import"./useConfig.e95fe182.js";import"./useDisabled.2989597b.js";import"./helper.f1ff4a0e.js";import"./slot.b263f39f.js";const z={class:"container"},P={name:"DIY"},Q=V({...P,setup(W){const M=G(),{t:S}=L.exports.useI18n(),N=()=>{M.push({path:"/tool/flash",query:{url:"https://k5.vicicode.com/diyapi/LOSEHU"+t.flag.join("")+".bin?v="+new Date().getTime()}})},t=j({versions:[],flag:[],disMatrix:[],disName:[],showSort:[]});F(()=>[...t.flag],()=>{v()});const v=()=>{t.flag.map((a,o)=>{t.disMatrix[o].forEach((l,n)=>{t.versions.indexOf("LOSEHU"+t.flag.join("").substring(0,o)+n+t.flag.join("").substring(o+1)+".bin")==-1?t.disMatrix[o].set(n,!0):t.disMatrix[o].set(n,!1)})})},{loading:C,setLoading:w}=K(!0);return O(async()=>{w(!0);let a=await(await fetch("https://k5.vicicode.com/diyapi/function.json?v="+new Date().getTime())).text();a=JSON.parse(a);let o=[],l=[];a.map(e=>{o[e[e.length-1]-1]=e,l.push(e[e.length-1]-1)}),a=o;let n=[],p=[];a.map(e=>{let _=new Map,c=new Map;for(let s=e[0]*2+1;s<e[0]*3+1;s++)_.set(e[s],!1),S("idea.diy")!=="LOSEHU DIY"?c.set(e[s],e[s-e[0]-e[0]]):c.set(e[s],e[s-e[0]]);n.push(_),p.push(c)}),t.flag=new Array(a.length).fill("0"),t.disName=p,t.disMatrix=n,t.showSort=l;const g=await(await fetch("https://k5.vicicode.com/diyapi/version.json?v="+new Date().getTime())).text();t.versions=JSON.parse(g),v(),w(!1)}),(a,o)=>{const l=B,n=Y,p=U,g=$,e=R,_=q,c=H,s=J,D=A;return d(),h("div",z,[r(l,{items:[a.$t("menu.workshop"),a.$t("idea.diy")]},null,8,["items"]),r(D,{gutter:20,align:"stretch"},{default:i(()=>[r(s,{span:24},{default:i(()=>[r(c,{class:"general-card",title:a.$t("idea.diy"),loading:I(C)},{default:i(()=>[r(_,{direction:"vertical"},{default:i(()=>[T("div",null,[f("\u64CD\u4F5C\u8BF4\u660E\uFF1A"),r(n,{theme:"primary",href:"https://github.com/losehu/uv-k5-firmware-custom",target:"_blank"},{default:i(()=>[f("https://github.com/losehu/uv-k5-firmware-custom")]),_:1})]),(d(!0),h(x,null,b(t.showSort,m=>(d(),y(g,{modelValue:t.flag[m],"onUpdate:modelValue":u=>t.flag[m]=u,type:"button"},{default:i(()=>[(d(!0),h(x,null,b(t.disMatrix[m],u=>(d(),y(p,{value:u[0],disabled:u[1]},{default:i(()=>[f(k(t.disName[m].get(u[0])),1)]),_:2},1032,["value","disabled"]))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"]))),256)),r(e,{type:"primary",onClick:N},{default:i(()=>[f(k(a.$t("diy.generate")),1)]),_:1})]),_:1})]),_:1},8,["title","loading"])]),_:1})]),_:1})])}}});const pt=E(Q,[["__scopeId","data-v-f761c86a"]]);export{pt as default};
