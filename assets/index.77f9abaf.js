import{e as X,u as Y,s as _,ak as Z,_ as tt}from"./index.000960f6.js";/* empty css              *//* empty css              *//* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css               */import{d as et,r as A,o as ot,bP as at,bH as nt,C as d,D as f,aI as t,aH as e,G as m,u as p,aK as b,aM as l,aN as r,aJ as x,aE as C,a_ as E,b9 as st,bQ as it,bR as lt,bI as ut,bJ as rt,be as dt,bf as ct}from"./arco.768e32d2.js";import{f as pt}from"./vue.5a5bc6a2.js";import{R as mt,L as _t,a as ft,D as wt,T as gt,U as ht}from"./index.70cb3007.js";import{P as bt,s as yt}from"./dep-6deb4e3a.d2a99bea.js";import{B as kt}from"./index.2d81563d.js";import{L as Ft,F as vt,a as At}from"./index.8ac540c2.js";import{I as xt}from"./form-model.90b72718.js";import"./chart.affe3403.js";import"./dialog.8741329a.js";import"./useConfig.2dd747e3.js";import"./index.78763ad1.js";import"./slot.0b895576.js";import"./index.2e6a0794.js";import"./index.442ff910.js";const Ct=w=>(dt("data-v-210af5f8"),w=w(),ct(),w),Et={class:"container"},It={style:{"margin-right":"20px"}},Lt={style:{display:"flex","align-items":"center","justify-content":"space-between"}},$t={style:{display:"flex",width:"100%"}},Bt={style:{width:"90%"}},Ut=Ct(()=>m("br",null,null,-1)),Dt={style:{width:"10%",margin:"auto","text-align":"center"}},Vt={name:"Backup"},St=et({...Vt,setup(w){X();const u=Y(),I=pt(),n=A({binaryFile:void 0,loading:!1,showPanel:!1,showUpload:!1,refLoading:!1,myList:[],total:0,page:1,nowpage:[]}),i=A({title:"",desc:"",firmware:[]});ot(async()=>{k({current:1})});const k=async s=>{n.page=s.current;const a=await _.get("https://k5.vicicode.com/wsapi/list?type=0&limit=12&page="+s.current+"&t="+Date.now());n.total=a.total,n.nowpage=a.data},g=async()=>{n.refLoading=!0,n.showPanel=!0;const s=await _.post("https://k5.vicicode.com/wsapi/my_list",{type:0,token:u.accountId});n.myList=s.data,n.refLoading=!1},L=()=>{i.title="",i.desc="",i.firmware=[],n.showUpload=!0},$=async()=>{if(i.title==""||i.firmware.length==0){E.error({content:"\u672A\u586B\u5199\u540D\u79F0\u53CA\u4E0A\u4F20\u6587\u4EF6",duration:5*1e3});return}await _.post("https://k5.vicicode.com/wsapi/upload",{type:0,token:u.accountId,title:i.title,desc:i.desc,data:i.firmware[0].url}),n.showUpload=!1,g()},B=async s=>{await _.post("https://k5.vicicode.com/wsapi/delete",{id:s,token:u.accountId}),g()},U=async s=>{await _.post("https://k5.vicicode.com/wsapi/star",{id:s}),E.success({content:"\u70B9\u8D5E\u6210\u529F",duration:5*1e3})},D=()=>{g()},V=s=>{I.push({path:"/tool/flash",query:{url:s}})};return(s,a)=>{const S=Z,c=st,P=it,R=lt,z=at,N=bt,T=nt,M=ut,H=rt,y=kt,J=yt,j=Ft,q=_t,G=ft,F=wt,K=xt,h=vt,Q=gt,O=ht,W=At;return d(),f("div",Et,[t(S,{items:[s.$t("menu.workshop"),s.$t("menu.firmware")]},null,8,["items"]),t(H,{gutter:20,align:"stretch"},{default:e(()=>[t(M,{span:24},{default:e(()=>[t(T,{class:"general-card",title:s.$t("menu.firmware")},{extra:e(()=>[m("div",It,[p(u).name?(d(),f(b,{key:0},[t(c,{onClick:g},{default:e(()=>[l("\xA0\xA0"+r(p(u).name)+"\xA0\xA0",1)]),_:1}),t(c,{onClick:a[0]||(a[0]=o=>p(u).logout())},{default:e(()=>[l("\xA0\xA0"+r(s.$t("global.logout"))+"\xA0\xA0",1)]),_:1})],64)):(d(),f(b,{key:1},[t(c,{onClick:a[1]||(a[1]=o=>p(u).setInfo({showLogin:!0}))},{default:e(()=>[l("\xA0\xA0"+r(s.$t("global.login"))+"\xA0\xA0",1)]),_:1}),t(c,{onClick:a[2]||(a[2]=o=>p(u).setInfo({showRegister:!0}))},{default:e(()=>[l("\xA0\xA0"+r(s.$t("global.register"))+"\xA0\xA0",1)]),_:1})],64))])]),default:e(()=>[t(z,null,{default:e(()=>[(d(!0),f(b,null,x(n.nowpage,o=>(d(),C(R,{style:{width:"100%"}},{actions:e(()=>[t(c,{onClick:v=>U(o.id)},{default:e(()=>[l("\u{1F44D}")]),_:2},1032,["onClick"]),t(c,{onClick:v=>V("https://k5.vicicode.com/wsapi/download?id="+o.id+"&n=/"+o.title)},{default:e(()=>[l(r(s.$t("global.use")),1)]),_:2},1032,["onClick"])]),default:e(()=>[t(P,{title:o.title,description:o.desc},null,8,["title","description"])]),_:2},1024))),256))]),_:1}),t(N,{onChange:k,style:{margin:"10px"},total:n.total,current:n.page,pageSize:12,showPageNumber:"",showPageSize:!1},null,8,["total","current"])]),_:1},8,["title"])]),_:1})]),_:1}),t(F,{visible:n.showPanel,"onUpdate:visible":a[3]||(a[3]=o=>n.showPanel=o),size:"50%",header:"\u6211\u7684\u56FA\u4EF6",footer:!1},{default:e(()=>[m("div",Lt,[t(y,{style:{margin:"10px"},onClick:L},{default:e(()=>[l("\u4E0A\u4F20\u65B0\u56FA\u4EF6")]),_:1}),t(y,{loading:n.refLoading,shape:"circle",theme:"outline",onClick:D},{icon:e(()=>[t(p(mt))]),_:1},8,["loading"])]),t(G,{split:!0},{default:e(()=>[(d(!0),f(b,null,x(n.myList,o=>(d(),C(q,null,{default:e(()=>[m("div",$t,[m("div",Bt,[t(J,{theme:"primary",variant:"outline"},{default:e(()=>[l(r(o.audit?"\u5DF2\u5BA1\u6838":"\u5BA1\u6838\u4E2D"),1)]),_:2},1024),l(" "+r(o.title)+" ",1),Ut,l(" "+r(o.desc),1)]),m("div",Dt,[t(j,{theme:"primary",hover:"color",onClick:v=>B(o.id)},{default:e(()=>[l("\u5220\u9664")]),_:2},1032,["onClick"])])])]),_:2},1024))),256))]),_:1})]),_:1},8,["visible"]),t(F,{visible:n.showUpload,"onUpdate:visible":a[7]||(a[7]=o=>n.showUpload=o),size:"25%",header:"\u4E0A\u4F20\u65B0\u56FA\u4EF6",footer:!1},{default:e(()=>[t(W,{data:i,"reset-type":"initial",colon:"",onSubmit:$},{default:e(()=>[t(h,{label:"\u56FA\u4EF6\u540D\u79F0",name:"title","label-align":"top"},{default:e(()=>[t(K,{modelValue:i.title,"onUpdate:modelValue":a[4]||(a[4]=o=>i.title=o)},null,8,["modelValue"])]),_:1}),t(h,{label:"\u56FA\u4EF6\u63CF\u8FF0",name:"desc","label-align":"top"},{default:e(()=>[t(Q,{autosize:{minRows:5,maxRows:10},modelValue:i.desc,"onUpdate:modelValue":a[5]||(a[5]=o=>i.desc=o),placeholder:"\u8BF7\u8F93\u5165",clearable:""},null,8,["modelValue"])]),_:1}),t(h,{label:"\u56FA\u4EF6\u6587\u4EF6",name:"firmware","label-align":"top"},{default:e(()=>[t(O,{modelValue:i.firmware,"onUpdate:modelValue":a[6]||(a[6]=o=>i.firmware=o),action:"https://k5.vicicode.com/wsapi/base64","abridge-name":[8,6],theme:"file-input",placeholder:"\u672A\u9009\u62E9\u6587\u4EF6"},null,8,["modelValue"])]),_:1}),t(h,{"label-align":"top"},{default:e(()=>[t(y,{theme:"primary",type:"submit",block:""},{default:e(()=>[l("\u63D0\u4EA4\u5BA1\u6838")]),_:1})]),_:1})]),_:1},8,["data"])]),_:1},8,["visible"])])}}});const ne=tt(St,[["__scopeId","data-v-210af5f8"]]);export{ne as default};