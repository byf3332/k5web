import{d as j,r as Z,bI as q,bJ as X,C as k,aE as A,aH as o,aI as n,aM as e,aN as d,u as m,a$ as Y,b0 as tt,G as a,bw as ot,bK as et,bG as nt,b8 as at,bi as ut,bL as rt,bM as ct,bN as it,bm as lt,bn as st,D as _t}from"./arco.b087a425.js";import{v as dt,t as pt,_ as G}from"./index.1918ceb0.js";/* empty css              *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css              */import{e as mt,a as l,b as s}from"./serial.c6b76da8.js";import{L as ht}from"./index.6118d3e9.js";import"./chart.836a9fe2.js";import"./vue.23fb8a9a.js";const ft=""+new URL("../jjgg.jpg",import.meta.url).href,wt=""+new URL("../gy.png",import.meta.url).href,gt=""+new URL("../mm_facetoface_collect_qrcode_1714392837792.png",import.meta.url).href,bt=""+new URL("../1722745910257.jpg",import.meta.url).href,u=f=>(lt("data-v-d801e3fe"),f=f(),st(),f),Ft=u(()=>a("br",null,null,-1)),kt=u(()=>a("br",null,null,-1)),yt=u(()=>a("br",null,null,-1)),vt=u(()=>a("br",null,null,-1)),Bt=u(()=>a("br",null,null,-1)),St=u(()=>a("br",null,null,-1)),Et=u(()=>a("br",null,null,-1)),At=u(()=>a("div",{style:{"margin-top":"50px"}},"\xA0",-1)),Ct=u(()=>a("div",null,[a("img",{style:{width:"100%"},alt:"ads",src:ft})],-1)),Pt=u(()=>a("img",{class:"tencent",style:{"margin-bottom":"10px"},width:"200px",src:wt},null,-1)),Dt=u(()=>a("img",{width:"300",src:gt},null,-1)),Mt=u(()=>a("img",{width:"300",src:bt},null,-1)),xt=u(()=>a("br",null,null,-1)),$t=u(()=>a("br",null,null,-1)),It=u(()=>a("br",null,null,-1)),Tt=u(()=>a("br",null,null,-1)),Nt=j({__name:"banner",setup(f){const{t:i}=dt.exports.useI18n(),t=pt(),C=Z({eepromSize:i("workplace.clickCheck")}),U=async()=>{var w,y,v,g,B,p,_,S,h,E,b,F,x,$,I,T,N,V,z,L,R;let r=i("workplace.unk");const M=[Math.round(Math.random()*256),Math.round(Math.random()*256),Math.round(Math.random()*256),Math.round(Math.random()*256),Math.round(Math.random()*256),Math.round(Math.random()*256),Math.round(Math.random()*256),Math.round(Math.random()*256)];await mt(t.connectPort);const c=new Uint8Array(M);if(((w=t.configuration)==null?void 0:w.uart)=="official"){const P=await l(t.connectPort,0,8,(y=t.configuration)==null?void 0:y.uart);await s(t.connectPort,0,c,8,(v=t.configuration)==null?void 0:v.uart);const D=await l(t.connectPort,0,8,(g=t.configuration)==null?void 0:g.uart);c.toString()==D.toString()&&(r=i("global.8kb")),await s(t.connectPort,0,P,8,(B=t.configuration)==null?void 0:B.uart)}else{const P=await l(t.connectPort,0,8,(p=t.configuration)==null?void 0:p.uart);await s(t.connectPort,0,c,8,(_=t.configuration)==null?void 0:_.uart);const D=await l(t.connectPort,0,8,(S=t.configuration)==null?void 0:S.uart);c.toString()==D.toString()&&(r=i("global.8kb")),await s(t.connectPort,0,P,8,(h=t.configuration)==null?void 0:h.uart);const O=await l(t.connectPort,131064,8,(E=t.configuration)==null?void 0:E.uart);await s(t.connectPort,131064,c,8,(b=t.configuration)==null?void 0:b.uart);const J=await l(t.connectPort,131064,8,(F=t.configuration)==null?void 0:F.uart);c.toString()==J.toString()&&(r=i("global.128kb")),await s(t.connectPort,131064,O,8,(x=t.configuration)==null?void 0:x.uart);const K=await l(t.connectPort,262136,8,($=t.configuration)==null?void 0:$.uart);await s(t.connectPort,262136,c,8,(I=t.configuration)==null?void 0:I.uart);const Q=await l(t.connectPort,262136,8,(T=t.configuration)==null?void 0:T.uart);c.toString()==Q.toString()&&(r=i("global.256kb")),await s(t.connectPort,262136,K,8,(N=t.configuration)==null?void 0:N.uart);const W=await l(t.connectPort,524280,8,(V=t.configuration)==null?void 0:V.uart);await s(t.connectPort,524280,c,8,(z=t.configuration)==null?void 0:z.uart);const H=await l(t.connectPort,524280,8,(L=t.configuration)==null?void 0:L.uart);c.toString()==H.toString()&&(r=i("global.512kb")),await s(t.connectPort,524280,W,8,(R=t.configuration)==null?void 0:R.uart)}C.eepromSize=r};return(r,M)=>{const c=ot,w=et,y=nt,v=at,g=q,B=ut,p=ht,_=rt,S=ct,h=it,E=X;return k(),A(w,{class:"banner"},{default:o(()=>[n(w,null,{default:o(()=>[n(c,{heading:5,style:{"margin-top":"0"}},{default:o(()=>[e(d(m(t).connectState?r.$t("workplace.welcomeSuc"):r.$t("workplace.welcome")),1)]),_:1})]),_:1}),n(y,{class:"panel-border"}),n(B,null,{default:o(()=>[Y(n(g,{style:{marginTop:"2em",marginBottom:"2em"},title:r.$t("workplace.info")},{default:o(()=>{var b,F;return[e(d(r.$t("workplace.current"))+d(m(t).firmwareVersion)+" ",1),Ft,e(" "+d(r.$t("workplace.writeconfig"))+d((b=m(t).configuration)==null?void 0:b.name)+" ",1),kt,e(" "+d(r.$t("workplace.eepromSize"))+d(C.eepromSize)+" "+d(C.eepromSize!=m(i)("workplace.clickCheck")&&((F=m(t).configuration)==null?void 0:F.uart)=="official"?m(i)("workplace.clickNotice"):"")+" ",1),n(v,{size:"mini",type:"primary",onClick:U},{default:o(()=>[e(d(r.$t("workplace.checkIt")),1)]),_:1})]}),_:1},8,["title"]),[[tt,m(t).connectState]])]),_:1}),a("div",null,[n(c,{heading:5},{default:o(()=>[e("\u8BF4\u660E\uFF1A")]),_:1}),n(_,null,{default:o(()=>[e("\u25C6 \u4F7F\u7528\u5E94\u7B2C\u4E00\u65F6\u95F4"),n(p,{theme:"primary",href:"/#/tool/backup"},{default:o(()=>[e("\u5907\u4EFD")]),_:1}),e("\u914D\u7F6E\u53CA\u6821\u51C6\u6570\u636E\u3002")]),_:1}),yt,n(_,null,{default:o(()=>[e("\u25C6 \u9664\u201C\u56FA\u4EF6\u5347\u7EA7\u201D\u529F\u80FD\u624B\u53F0\u5E94\u5904\u4E8E\u5237\u673A\u6A21\u5F0F\u70B9\u51FB\u66F4\u65B0\u6309\u94AE\u9009\u62E9\u8BBE\u5907\u66F4\u65B0\uFF0C\u5176\u4F59\u529F\u80FD\u624B\u53F0\u5747\u9700\u8981\u5728\u6B63\u5E38\u6A21\u5F0F\u8FDE\u63A5\u3002")]),_:1}),vt,n(_,null,{default:o(()=>[e("\u25C6 \u841D\u535C\uFF08LOSEHU\uFF09\u56FA\u4EF6\u76F8\u5173\u95EE\u9898\u8BF7\u79FB\u6B65\uFF1A"),n(p,{theme:"primary",href:"https://github.com/losehu/uv-k5-firmware-custom",target:"_blank"},{default:o(()=>[e("https://github.com/losehu/uv-k5-firmware-custom")]),_:1}),e(" \u3002")]),_:1}),Bt,n(_,null,{default:o(()=>[e("\u25C6 K5Web \u5B98\u6269\u5237\u4E2D\u6587\u6559\u7A0B\uFF08BG3ODZ\uFF09\uFF1A"),n(p,{theme:"primary",href:"https://www.bilibili.com/video/BV1Ab421p7rN",target:"_blank"},{default:o(()=>[e("https://www.bilibili.com/video/BV1Ab421p7rN")]),_:1}),e(" \u3002")]),_:1}),St,n(_,null,{default:o(()=>[e("\u25C6 K5Web \u4F7F\u7528\u89C6\u9891\u6559\u7A0B\uFF08BG3ODZ\uFF09\uFF1A"),n(p,{theme:"primary",href:"https://www.bilibili.com/video/BV1Q4421D75x",target:"_blank"},{default:o(()=>[e("https://www.bilibili.com/video/BV1Q4421D75x")]),_:1}),e(" \u3002")]),_:1}),Et,n(_,null,{default:o(()=>[e("\u25C6 K5Web \u4F7F\u7528\u89C6\u9891\u6559\u7A0B\uFF08BG7QJV\uFF09\uFF1A"),n(p,{theme:"primary",href:"https://www.douyin.com/video/7378314511419313458",target:"_blank"},{default:o(()=>[e("https://www.douyin.com/video/7378314511419313458")]),_:1}),e(" \u3002")]),_:1})]),At,a("div",null,[n(E,{"default-active-key":[1],accordion:""},{default:o(()=>[(k(),A(h,{header:"\u5E7F\u544A\u533A",key:1},{default:o(()=>[n(g,{hoverable:"",style:{width:"600px"}},{cover:o(()=>[Ct]),default:o(()=>[n(S,{title:"BG4IWE \u6295\u653E"})]),_:1})]),_:1})),(k(),A(h,{header:"\u817E\u8BAF\u516C\u76CA",key:2},{default:o(()=>[Pt]),_:1})),(k(),A(h,{header:"\u997F\u997F\u996D\u996D",key:3},{default:o(()=>[Dt,Mt,xt,$t,e(" TRON / TRX\uFF1ATPaSnHJ2cRCQjjv7TyAFJDamb3mZSSz1At ")]),_:1}))]),_:1})]),It,Tt]),_:1})}}});const Vt=G(Nt,[["__scopeId","data-v-d801e3fe"]]),zt={class:"container"},Lt={class:"left-side"},Rt={class:"panel"},jt={name:"Dashboard"},Gt=j({...jt,setup(f){return(i,t)=>(k(),_t("div",zt,[a("div",Lt,[a("div",Rt,[n(Vt)])])]))}});const oo=G(Gt,[["__scopeId","data-v-8f743d99"]]);export{oo as default};
