import{v as D,ak as j,_ as C}from"./index.a2be7997.js";/* empty css              *//* empty css              */import{d as E,r as L,w as O,o as V,bS as B,bH as H,C as u,D as g,aI as r,aH as i,u as I,aK as w,aJ as x,aE as b,aM as y,aN as T,bT as U,a$ as $,bI as J,bJ as R}from"./arco.768e32d2.js";import{f as F}from"./vue.5a5bc6a2.js";import{u as Y}from"./loading.c097827a.js";import{S as q}from"./index.0bf11e93.js";import"./chart.affe3403.js";import"./useConfig.7f5f14a9.js";import"./slot.bfeb4c94.js";const A={class:"container"},G={name:"DIY"},K=E({...G,setup(z){const S=F(),{t:M}=D.exports.useI18n(),N=()=>{S.push({path:"/tool/flash",query:{url:"https://k5.vicicode.com/diyapi/LOSEHU"+t.flag.join("")+".bin?v="+new Date().getTime()}})},t=L({versions:[],flag:[],disMatrix:[],disName:[],showSort:[]});O(()=>[...t.flag],()=>{h()});const h=()=>{t.flag.map((e,o)=>{t.disMatrix[o].forEach((l,n)=>{t.versions.indexOf("LOSEHU"+t.flag.join("").substring(0,o)+n+t.flag.join("").substring(o+1)+".bin")==-1?t.disMatrix[o].set(n,!0):t.disMatrix[o].set(n,!1)})})},{loading:k,setLoading:v}=Y(!0);return V(async()=>{v(!0);let e=await(await fetch("https://k5.vicicode.com/diyapi/function.json?v="+new Date().getTime())).text();e=JSON.parse(e);let o=[],l=[];e.map(a=>{o[a[a.length-1]-1]=a,l.push(a[a.length-1]-1)}),e=o;let n=[],_=[];e.map(a=>{let p=new Map,c=new Map;for(let s=a[0]*2+1;s<a[0]*3+1;s++)p.set(a[s],!1),M("idea.diy")!=="LOSEHU DIY"?c.set(a[s],a[s-a[0]-a[0]]):c.set(a[s],a[s-a[0]]);n.push(p),_.push(c)}),t.flag=new Array(e.length).fill("0"),t.disName=_,t.disMatrix=n,t.showSort=l;const f=await(await fetch("https://k5.vicicode.com/diyapi/version.json?v="+new Date().getTime())).text();t.versions=JSON.parse(f),h(),v(!1)}),(e,o)=>{const l=j,n=B,_=U,f=$,a=q,p=H,c=J,s=R;return u(),g("div",A,[r(l,{items:[e.$t("menu.workshop"),e.$t("idea.diy")]},null,8,["items"]),r(s,{gutter:20,align:"stretch"},{default:i(()=>[r(c,{span:24},{default:i(()=>[r(p,{class:"general-card",title:e.$t("idea.diy"),loading:I(k)},{default:i(()=>[r(a,{direction:"vertical"},{default:i(()=>[(u(!0),g(w,null,x(t.showSort,m=>(u(),b(_,{modelValue:t.flag[m],"onUpdate:modelValue":d=>t.flag[m]=d,type:"button"},{default:i(()=>[(u(!0),g(w,null,x(t.disMatrix[m],d=>(u(),b(n,{value:d[0],disabled:d[1]},{default:i(()=>[y(T(t.disName[m].get(d[0])),1)]),_:2},1032,["value","disabled"]))),256))]),_:2},1032,["modelValue","onUpdate:modelValue"]))),256)),r(f,{type:"primary",onClick:N},{default:i(()=>[y("\u751F\u6210")]),_:1})]),_:1})]),_:1},8,["title","loading"])]),_:1})]),_:1})])}}});const nt=C(K,[["__scopeId","data-v-938bc881"]]);export{nt as default};
