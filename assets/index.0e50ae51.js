import{t as L,ad as R,_ as E}from"./index.be5b55c5.js";/* empty css              *//* empty css              *//* empty css               *//* empty css               */import{d as F,r as H,b4 as M,bS as O,bI as W,C as j,D as q,aI as a,aH as r,aM as I,aN as v,u as x,a6 as G,b8 as J,bi as Q,bK as X,bO as Y,bf as Z,bk as z}from"./arco.b087a425.js";import{u as tt}from"./loading.9d534c38.js";import{e as k,a as V,f as p,s as P,b as A,g as ot}from"./serial.c6b76da8.js";import"./chart.836a9fe2.js";import"./vue.23fb8a9a.js";const et={class:"container"},at={name:"Chi"},nt=F({...at,setup(lt){const t=L(),{loading:B,setLoading:C}=tt(!1),o=H({logo_line1:"",logo_line2:"",mdc_audio_local:!0,dtmfid:"",dtmf_up_code:"",dtmf_down_code:""});function K(e,l){if(e.length>l)return!1;for(let c=0;c<e.length;c++){let n=e.charAt(c);if((n<"0"||n>"9")&&(n<"A"||n>"D")&&n!="*"&&n!="#")return!1}return!0}const S=async(e,l,c)=>{var _;e=e.trim();let n;if(e==""){let u=[];for(let f=0;f<c;f++)u.push(0);n=new Uint8Array(u)}else if(K(e,c)){if(n=P(e),n.length<c){let u=new Uint8Array(c);u.set(n),n=u}}else return;await A(t.connectPort,l,n,n.length,(_=t.configuration)==null?void 0:_.uart)},N=async()=>{var n,_,u,f,w,m,d,b,y,h,i,U,s,$,D;if(t.connectState!=!0){alert(sessionStorage.getItem("noticeConnectK5"));return}if(await k(t.connectPort),C(!0),((n=t.configuration)==null?void 0:n.charset)=="losehu"){let g=new Uint8Array(38);g.set(await V(t.connectPort,123680,38,(_=t.configuration)==null?void 0:_.uart),0),o.logo_line1=p(g.subarray(0,19),(u=t.configuration)==null?void 0:u.charset),o.logo_line2=p(g.subarray(19,38),(f=t.configuration)==null?void 0:f.charset)}else if(((w=t.configuration)==null?void 0:w.charset)=="gb2312"){let g=new Uint8Array(36);g.set(await V(t.connectPort,8192,36,(m=t.configuration)==null?void 0:m.uart),0),o.logo_line1=p(g.subarray(0,18),(d=t.configuration)==null?void 0:d.charset),o.logo_line2=p(g.subarray(18,36),(b=t.configuration)==null?void 0:b.charset)}else{let g=new Uint8Array(32);g.set(await V(t.connectPort,3760,32,(y=t.configuration)==null?void 0:y.uart),0),o.logo_line1=p(g.subarray(0,16),(h=t.configuration)==null?void 0:h.charset),o.logo_line2=p(g.subarray(16,32),(i=t.configuration)==null?void 0:i.charset)}const e=await V(t.connectPort,3808,8,(U=t.configuration)==null?void 0:U.uart);o.dtmfid=p(e);const l=await V(t.connectPort,3832,16,(s=t.configuration)==null?void 0:s.uart);o.dtmf_up_code=p(l);const c=await V(t.connectPort,3848,16,($=t.configuration)==null?void 0:$.uart);o.dtmf_down_code=p(c),parseInt(await V(t.connectPort,8189,1,(D=t.configuration)==null?void 0:D.uart))==0?o.mdc_audio_local=!1:o.mdc_audio_local=!0,C(!1)},T=async()=>{var e,l,c,n,_,u,f,w,m,d,b,y,h,i,U;if(t.connectState!=!0){alert(sessionStorage.getItem("noticeConnectK5"));return}if(C(!0),await k(t.connectPort),((e=t.configuration)==null?void 0:e.charset)=="losehu"){let s=new Uint8Array(38);s.set(P(o.logo_line1,(l=t.configuration)==null?void 0:l.charset).subarray(0,19),0),s.set(P(o.logo_line2,(c=t.configuration)==null?void 0:c.charset).subarray(0,19),19),await A(t.connectPort,123678,[18,18],2,(n=t.configuration)==null?void 0:n.uart),await A(t.connectPort,123680,s,38,(_=t.configuration)==null?void 0:_.uart)}else if(((u=t.configuration)==null?void 0:u.charset)=="gb2312"){let s=new Uint8Array(36);s.set(P(o.logo_line1,(f=t.configuration)==null?void 0:f.charset).subarray(0,18),0),s.set(P(o.logo_line2,(w=t.configuration)==null?void 0:w.charset).subarray(0,18),18),await A(t.connectPort,8228,[18,18],2,(m=t.configuration)==null?void 0:m.uart),await A(t.connectPort,8192,s,36,(d=t.configuration)==null?void 0:d.uart)}else{let s=new Uint8Array(32);s.set(P(o.logo_line1,(b=t.configuration)==null?void 0:b.charset).subarray(0,16),0),s.set(P(o.logo_line2,(y=t.configuration)==null?void 0:y.charset).subarray(0,16),16),await A(t.connectPort,3760,s,32,(h=t.configuration)==null?void 0:h.uart)}await S(o.dtmfid,3808,8),await S(o.dtmf_up_code,3832,16),await S(o.dtmf_down_code,3848,16),(i=t.configuration)!=null&&i.localmdc&&await A(t.connectPort,8189,new Uint8Array([o.mdc_audio_local?1:0]),1,(U=t.configuration)==null?void 0:U.uart),await ot(t.connectPort),C(!1)};return(e,l)=>{const c=R,n=G,_=J,u=Q,f=X,w=Y,m=Z,d=z,b=M,y=O,h=W;return j(),q("div",et,[a(c,{items:[e.$t("menu.dashboard"),e.$t("menu.cps.settings")]},null,8,["items"]),a(w,{gutter:20,align:"stretch"},{default:r(()=>[a(f,{span:24},{default:r(()=>[a(h,{class:"general-card",title:e.$t("menu.cps.settings")+e.$t("global.onStart")},{default:r(()=>[a(w,{style:{"margin-bottom":"16px"}},{default:r(()=>[a(f,{span:12},{default:r(()=>[a(u,null,{default:r(()=>[a(_,{type:"primary",onClick:N},{icon:r(()=>[a(n)]),default:r(()=>[I(" "+v(e.$t("cps.onDeviceRead")),1)]),_:1}),a(_,{onClick:T},{icon:r(()=>[a(n)]),default:r(()=>[I(" "+v(e.$t("cps.onDeviceWrite")),1)]),_:1})]),_:1})]),_:1})]),_:1}),a(y,{loading:x(B),style:{width:"100%"}},{default:r(()=>[a(d,{"label-col-style":{width:"25%"},field:"logo_line1",label:e.$t("cps.line1")},{default:r(()=>[a(m,{modelValue:o.logo_line1,"onUpdate:modelValue":l[0]||(l[0]=i=>o.logo_line1=i)},null,8,["modelValue"])]),_:1},8,["label"]),a(d,{"label-col-style":{width:"25%"},field:"logo_line2",label:e.$t("cps.line2")},{default:r(()=>[a(m,{modelValue:o.logo_line2,"onUpdate:modelValue":l[1]||(l[1]=i=>o.logo_line2=i)},null,8,["modelValue"])]),_:1},8,["label"]),a(d,{"label-col-style":{width:"25%"},field:"dtmfid",label:e.$t("cps.dtmfid")},{default:r(()=>[a(m,{modelValue:o.dtmfid,"onUpdate:modelValue":l[2]||(l[2]=i=>o.dtmfid=i),"max-length":"8",placeholder:"0-9,A-D,*,#"},null,8,["modelValue"])]),_:1},8,["label"]),a(d,{"label-col-style":{width:"25%"},field:"dtmf_up_code",label:e.$t("cps.dtmf.up")},{default:r(()=>[a(m,{modelValue:o.dtmf_up_code,"onUpdate:modelValue":l[3]||(l[3]=i=>o.dtmf_up_code=i),"max-length":"16",placeholder:"0-9,A-D,*,#"},null,8,["modelValue"])]),_:1},8,["label"]),a(d,{"label-col-style":{width:"25%"},field:"dtmf_down_code",label:e.$t("cps.dtmf.down")},{default:r(()=>[a(m,{modelValue:o.dtmf_down_code,"onUpdate:modelValue":l[4]||(l[4]=i=>o.dtmf_down_code=i),"max-length":"16",placeholder:"0-9,A-D,*,#"},null,8,["modelValue"])]),_:1},8,["label"]),a(d,{"label-col-style":{width:"25%"},field:"mdclocplay",label:e.$t("cps.mdclocplay")},{default:r(()=>[a(b,{modelValue:o.mdc_audio_local,"onUpdate:modelValue":l[5]||(l[5]=i=>o.mdc_audio_local=i),type:"round"},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["loading"])]),_:1},8,["title"])]),_:1})]),_:1})])}}});const pt=E(nt,[["__scopeId","data-v-8a82f3e6"]]);export{pt as default};
