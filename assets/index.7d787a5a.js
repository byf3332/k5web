import{e as me,ar as we,_ as ye}from"./index.28b8c38d.js";/* empty css              *//* empty css              *//* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css               */import{d as be,r as Ce,o as _e,bs as Ee,bW as Se,bS as Be,aW as Ae,bO as Te,bH as Ie,C as $,D as q,aI as C,aH as E,aM as D,aN as L,G,u as Pe,bn as jt,bo as qt,aK as nt,aJ as ot,aE as rt,n as Gt,b3 as Ne,bc as Fe,bV as Me,a$ as De,ba as Re,bX as Ue,bF as Le,bI as ve,bL as ke,be as Ve,bf as $e}from"./arco.f43727df.js";import{e as ht,g as Qt,h as P,b as F,s as xe}from"./serial.c741fbda.js";import{u as Oe}from"./loading.a1d05891.js";import{B as He}from"./index.d796ce09.js";import"./chart.3c227ebb.js";import"./vue.cbdb927d.js";import"./index.3c6542a6.js";var Z={},ze=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},te={},v={};let Bt;const Je=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];v.getSymbolSize=function(n){if(!n)throw new Error('"version" cannot be null or undefined');if(n<1||n>40)throw new Error('"version" should be in range from 1 to 40');return n*4+17};v.getSymbolTotalCodewords=function(n){return Je[n]};v.getBCHDigit=function(o){let n=0;for(;o!==0;)n++,o>>>=1;return n};v.setToSJISFunction=function(n){if(typeof n!="function")throw new Error('"toSJISFunc" is not a valid function.');Bt=n};v.isKanjiModeEnabled=function(){return typeof Bt<"u"};v.toSJIS=function(n){return Bt(n)};var ut={};(function(o){o.L={bit:1},o.M={bit:0},o.Q={bit:3},o.H={bit:2};function n(a){if(typeof a!="string")throw new Error("Param is not a string");switch(a.toLowerCase()){case"l":case"low":return o.L;case"m":case"medium":return o.M;case"q":case"quartile":return o.Q;case"h":case"high":return o.H;default:throw new Error("Unknown EC Level: "+a)}}o.isValid=function(e){return e&&typeof e.bit<"u"&&e.bit>=0&&e.bit<4},o.from=function(e,t){if(o.isValid(e))return e;try{return n(e)}catch{return t}}})(ut);function ee(){this.buffer=[],this.length=0}ee.prototype={get:function(o){const n=Math.floor(o/8);return(this.buffer[n]>>>7-o%8&1)===1},put:function(o,n){for(let a=0;a<n;a++)this.putBit((o>>>n-a-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(o){const n=Math.floor(this.length/8);this.buffer.length<=n&&this.buffer.push(0),o&&(this.buffer[n]|=128>>>this.length%8),this.length++}};var Ke=ee;function X(o){if(!o||o<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=o,this.data=new Uint8Array(o*o),this.reservedBit=new Uint8Array(o*o)}X.prototype.set=function(o,n,a,e){const t=o*this.size+n;this.data[t]=a,e&&(this.reservedBit[t]=!0)};X.prototype.get=function(o,n){return this.data[o*this.size+n]};X.prototype.xor=function(o,n,a){this.data[o*this.size+n]^=a};X.prototype.isReserved=function(o,n){return this.reservedBit[o*this.size+n]};var Ye=X,ne={};(function(o){const n=v.getSymbolSize;o.getRowColCoords=function(e){if(e===1)return[];const t=Math.floor(e/7)+2,r=n(e),i=r===145?26:Math.ceil((r-13)/(2*t-2))*2,l=[r-7];for(let s=1;s<t-1;s++)l[s]=l[s-1]-i;return l.push(6),l.reverse()},o.getPositions=function(e){const t=[],r=o.getRowColCoords(e),i=r.length;for(let l=0;l<i;l++)for(let s=0;s<i;s++)l===0&&s===0||l===0&&s===i-1||l===i-1&&s===0||t.push([r[l],r[s]]);return t}})(ne);var oe={};const je=v.getSymbolSize,Wt=7;oe.getPositions=function(n){const a=je(n);return[[0,0],[a-Wt,0],[0,a-Wt]]};var re={};(function(o){o.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const n={N1:3,N2:3,N3:40,N4:10};o.isValid=function(t){return t!=null&&t!==""&&!isNaN(t)&&t>=0&&t<=7},o.from=function(t){return o.isValid(t)?parseInt(t,10):void 0},o.getPenaltyN1=function(t){const r=t.size;let i=0,l=0,s=0,h=null,p=null;for(let A=0;A<r;A++){l=s=0,h=p=null;for(let b=0;b<r;b++){let w=t.get(A,b);w===h?l++:(l>=5&&(i+=n.N1+(l-5)),h=w,l=1),w=t.get(b,A),w===p?s++:(s>=5&&(i+=n.N1+(s-5)),p=w,s=1)}l>=5&&(i+=n.N1+(l-5)),s>=5&&(i+=n.N1+(s-5))}return i},o.getPenaltyN2=function(t){const r=t.size;let i=0;for(let l=0;l<r-1;l++)for(let s=0;s<r-1;s++){const h=t.get(l,s)+t.get(l,s+1)+t.get(l+1,s)+t.get(l+1,s+1);(h===4||h===0)&&i++}return i*n.N2},o.getPenaltyN3=function(t){const r=t.size;let i=0,l=0,s=0;for(let h=0;h<r;h++){l=s=0;for(let p=0;p<r;p++)l=l<<1&2047|t.get(h,p),p>=10&&(l===1488||l===93)&&i++,s=s<<1&2047|t.get(p,h),p>=10&&(s===1488||s===93)&&i++}return i*n.N3},o.getPenaltyN4=function(t){let r=0;const i=t.data.length;for(let s=0;s<i;s++)r+=t.data[s];return Math.abs(Math.ceil(r*100/i/5)-10)*n.N4};function a(e,t,r){switch(e){case o.Patterns.PATTERN000:return(t+r)%2===0;case o.Patterns.PATTERN001:return t%2===0;case o.Patterns.PATTERN010:return r%3===0;case o.Patterns.PATTERN011:return(t+r)%3===0;case o.Patterns.PATTERN100:return(Math.floor(t/2)+Math.floor(r/3))%2===0;case o.Patterns.PATTERN101:return t*r%2+t*r%3===0;case o.Patterns.PATTERN110:return(t*r%2+t*r%3)%2===0;case o.Patterns.PATTERN111:return(t*r%3+(t+r)%2)%2===0;default:throw new Error("bad maskPattern:"+e)}}o.applyMask=function(t,r){const i=r.size;for(let l=0;l<i;l++)for(let s=0;s<i;s++)r.isReserved(s,l)||r.xor(s,l,a(t,s,l))},o.getBestMask=function(t,r){const i=Object.keys(o.Patterns).length;let l=0,s=1/0;for(let h=0;h<i;h++){r(h),o.applyMask(h,t);const p=o.getPenaltyN1(t)+o.getPenaltyN2(t)+o.getPenaltyN3(t)+o.getPenaltyN4(t);o.applyMask(h,t),p<s&&(s=p,l=h)}return l}})(re);var ct={};const x=ut,at=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],it=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];ct.getBlocksCount=function(n,a){switch(a){case x.L:return at[(n-1)*4+0];case x.M:return at[(n-1)*4+1];case x.Q:return at[(n-1)*4+2];case x.H:return at[(n-1)*4+3];default:return}};ct.getTotalCodewordsCount=function(n,a){switch(a){case x.L:return it[(n-1)*4+0];case x.M:return it[(n-1)*4+1];case x.Q:return it[(n-1)*4+2];case x.H:return it[(n-1)*4+3];default:return}};var ae={},dt={};const Q=new Uint8Array(512),st=new Uint8Array(256);(function(){let n=1;for(let a=0;a<255;a++)Q[a]=n,st[n]=a,n<<=1,n&256&&(n^=285);for(let a=255;a<512;a++)Q[a]=Q[a-255]})();dt.log=function(n){if(n<1)throw new Error("log("+n+")");return st[n]};dt.exp=function(n){return Q[n]};dt.mul=function(n,a){return n===0||a===0?0:Q[st[n]+st[a]]};(function(o){const n=dt;o.mul=function(e,t){const r=new Uint8Array(e.length+t.length-1);for(let i=0;i<e.length;i++)for(let l=0;l<t.length;l++)r[i+l]^=n.mul(e[i],t[l]);return r},o.mod=function(e,t){let r=new Uint8Array(e);for(;r.length-t.length>=0;){const i=r[0];for(let s=0;s<t.length;s++)r[s]^=n.mul(t[s],i);let l=0;for(;l<r.length&&r[l]===0;)l++;r=r.slice(l)}return r},o.generateECPolynomial=function(e){let t=new Uint8Array([1]);for(let r=0;r<e;r++)t=o.mul(t,new Uint8Array([1,n.exp(r)]));return t}})(ae);const ie=ae;function At(o){this.genPoly=void 0,this.degree=o,this.degree&&this.initialize(this.degree)}At.prototype.initialize=function(n){this.degree=n,this.genPoly=ie.generateECPolynomial(this.degree)};At.prototype.encode=function(n){if(!this.genPoly)throw new Error("Encoder not initialized");const a=new Uint8Array(n.length+this.degree);a.set(n);const e=ie.mod(a,this.genPoly),t=this.degree-e.length;if(t>0){const r=new Uint8Array(this.degree);return r.set(e,t),r}return e};var qe=At,se={},O={},Tt={};Tt.isValid=function(n){return!isNaN(n)&&n>=1&&n<=40};var k={};const le="[0-9]+",Ge="[A-Z $%*+\\-./:]+";let W="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";W=W.replace(/u/g,"\\u");const Qe="(?:(?![A-Z0-9 $%*+\\-./:]|"+W+`)(?:.|[\r
]))+`;k.KANJI=new RegExp(W,"g");k.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");k.BYTE=new RegExp(Qe,"g");k.NUMERIC=new RegExp(le,"g");k.ALPHANUMERIC=new RegExp(Ge,"g");const We=new RegExp("^"+W+"$"),Ze=new RegExp("^"+le+"$"),Xe=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");k.testKanji=function(n){return We.test(n)};k.testNumeric=function(n){return Ze.test(n)};k.testAlphanumeric=function(n){return Xe.test(n)};(function(o){const n=Tt,a=k;o.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},o.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},o.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},o.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},o.MIXED={bit:-1},o.getCharCountIndicator=function(r,i){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!n.isValid(i))throw new Error("Invalid version: "+i);return i>=1&&i<10?r.ccBits[0]:i<27?r.ccBits[1]:r.ccBits[2]},o.getBestModeForData=function(r){return a.testNumeric(r)?o.NUMERIC:a.testAlphanumeric(r)?o.ALPHANUMERIC:a.testKanji(r)?o.KANJI:o.BYTE},o.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},o.isValid=function(r){return r&&r.bit&&r.ccBits};function e(t){if(typeof t!="string")throw new Error("Param is not a string");switch(t.toLowerCase()){case"numeric":return o.NUMERIC;case"alphanumeric":return o.ALPHANUMERIC;case"kanji":return o.KANJI;case"byte":return o.BYTE;default:throw new Error("Unknown mode: "+t)}}o.from=function(r,i){if(o.isValid(r))return r;try{return e(r)}catch{return i}}})(O);(function(o){const n=v,a=ct,e=ut,t=O,r=Tt,i=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,l=n.getBCHDigit(i);function s(b,w,_){for(let u=1;u<=40;u++)if(w<=o.getCapacity(u,_,b))return u}function h(b,w){return t.getCharCountIndicator(b,w)+4}function p(b,w){let _=0;return b.forEach(function(u){const f=h(u.mode,w);_+=f+u.getBitsLength()}),_}function A(b,w){for(let _=1;_<=40;_++)if(p(b,_)<=o.getCapacity(_,w,t.MIXED))return _}o.from=function(w,_){return r.isValid(w)?parseInt(w,10):_},o.getCapacity=function(w,_,u){if(!r.isValid(w))throw new Error("Invalid QR Code version");typeof u>"u"&&(u=t.BYTE);const f=n.getSymbolTotalCodewords(w),c=a.getTotalCodewordsCount(w,_),g=(f-c)*8;if(u===t.MIXED)return g;const d=g-h(u,w);switch(u){case t.NUMERIC:return Math.floor(d/10*3);case t.ALPHANUMERIC:return Math.floor(d/11*2);case t.KANJI:return Math.floor(d/13);case t.BYTE:default:return Math.floor(d/8)}},o.getBestVersionForData=function(w,_){let u;const f=e.from(_,e.M);if(Array.isArray(w)){if(w.length>1)return A(w,f);if(w.length===0)return 1;u=w[0]}else u=w;return s(u.mode,u.getLength(),f)},o.getEncodedBits=function(w){if(!r.isValid(w)||w<7)throw new Error("Invalid QR Code version");let _=w<<12;for(;n.getBCHDigit(_)-l>=0;)_^=i<<n.getBCHDigit(_)-l;return w<<12|_}})(se);var ue={};const Ct=v,ce=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,tn=1<<14|1<<12|1<<10|1<<4|1<<1,Zt=Ct.getBCHDigit(ce);ue.getEncodedBits=function(n,a){const e=n.bit<<3|a;let t=e<<10;for(;Ct.getBCHDigit(t)-Zt>=0;)t^=ce<<Ct.getBCHDigit(t)-Zt;return(e<<10|t)^tn};var de={};const en=O;function J(o){this.mode=en.NUMERIC,this.data=o.toString()}J.getBitsLength=function(n){return 10*Math.floor(n/3)+(n%3?n%3*3+1:0)};J.prototype.getLength=function(){return this.data.length};J.prototype.getBitsLength=function(){return J.getBitsLength(this.data.length)};J.prototype.write=function(n){let a,e,t;for(a=0;a+3<=this.data.length;a+=3)e=this.data.substr(a,3),t=parseInt(e,10),n.put(t,10);const r=this.data.length-a;r>0&&(e=this.data.substr(a),t=parseInt(e,10),n.put(t,r*3+1))};var nn=J;const on=O,pt=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function K(o){this.mode=on.ALPHANUMERIC,this.data=o}K.getBitsLength=function(n){return 11*Math.floor(n/2)+6*(n%2)};K.prototype.getLength=function(){return this.data.length};K.prototype.getBitsLength=function(){return K.getBitsLength(this.data.length)};K.prototype.write=function(n){let a;for(a=0;a+2<=this.data.length;a+=2){let e=pt.indexOf(this.data[a])*45;e+=pt.indexOf(this.data[a+1]),n.put(e,11)}this.data.length%2&&n.put(pt.indexOf(this.data[a]),6)};var rn=K,an=function(n){for(var a=[],e=n.length,t=0;t<e;t++){var r=n.charCodeAt(t);if(r>=55296&&r<=56319&&e>t+1){var i=n.charCodeAt(t+1);i>=56320&&i<=57343&&(r=(r-55296)*1024+i-56320+65536,t+=1)}if(r<128){a.push(r);continue}if(r<2048){a.push(r>>6|192),a.push(r&63|128);continue}if(r<55296||r>=57344&&r<65536){a.push(r>>12|224),a.push(r>>6&63|128),a.push(r&63|128);continue}if(r>=65536&&r<=1114111){a.push(r>>18|240),a.push(r>>12&63|128),a.push(r>>6&63|128),a.push(r&63|128);continue}a.push(239,191,189)}return new Uint8Array(a).buffer};const sn=an,ln=O;function Y(o){this.mode=ln.BYTE,typeof o=="string"&&(o=sn(o)),this.data=new Uint8Array(o)}Y.getBitsLength=function(n){return n*8};Y.prototype.getLength=function(){return this.data.length};Y.prototype.getBitsLength=function(){return Y.getBitsLength(this.data.length)};Y.prototype.write=function(o){for(let n=0,a=this.data.length;n<a;n++)o.put(this.data[n],8)};var un=Y;const cn=O,dn=v;function j(o){this.mode=cn.KANJI,this.data=o}j.getBitsLength=function(n){return n*13};j.prototype.getLength=function(){return this.data.length};j.prototype.getBitsLength=function(){return j.getBitsLength(this.data.length)};j.prototype.write=function(o){let n;for(n=0;n<this.data.length;n++){let a=dn.toSJIS(this.data[n]);if(a>=33088&&a<=40956)a-=33088;else if(a>=57408&&a<=60351)a-=49472;else throw new Error("Invalid SJIS character: "+this.data[n]+`
Make sure your charset is UTF-8`);a=(a>>>8&255)*192+(a&255),o.put(a,13)}};var fn=j,fe={exports:{}};(function(o){var n={single_source_shortest_paths:function(a,e,t){var r={},i={};i[e]=0;var l=n.PriorityQueue.make();l.push(e,0);for(var s,h,p,A,b,w,_,u,f;!l.empty();){s=l.pop(),h=s.value,A=s.cost,b=a[h]||{};for(p in b)b.hasOwnProperty(p)&&(w=b[p],_=A+w,u=i[p],f=typeof i[p]>"u",(f||u>_)&&(i[p]=_,l.push(p,_),r[p]=h))}if(typeof t<"u"&&typeof i[t]>"u"){var c=["Could not find a path from ",e," to ",t,"."].join("");throw new Error(c)}return r},extract_shortest_path_from_predecessor_list:function(a,e){for(var t=[],r=e;r;)t.push(r),a[r],r=a[r];return t.reverse(),t},find_path:function(a,e,t){var r=n.single_source_shortest_paths(a,e,t);return n.extract_shortest_path_from_predecessor_list(r,t)},PriorityQueue:{make:function(a){var e=n.PriorityQueue,t={},r;a=a||{};for(r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t.queue=[],t.sorter=a.sorter||e.default_sorter,t},default_sorter:function(a,e){return a.cost-e.cost},push:function(a,e){var t={value:a,cost:e};this.queue.push(t),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};o.exports=n})(fe);(function(o){const n=O,a=nn,e=rn,t=un,r=fn,i=k,l=v,s=fe.exports;function h(c){return unescape(encodeURIComponent(c)).length}function p(c,g,d){const m=[];let B;for(;(B=c.exec(d))!==null;)m.push({data:B[0],index:B.index,mode:g,length:B[0].length});return m}function A(c){const g=p(i.NUMERIC,n.NUMERIC,c),d=p(i.ALPHANUMERIC,n.ALPHANUMERIC,c);let m,B;return l.isKanjiModeEnabled()?(m=p(i.BYTE,n.BYTE,c),B=p(i.KANJI,n.KANJI,c)):(m=p(i.BYTE_KANJI,n.BYTE,c),B=[]),g.concat(d,m,B).sort(function(T,I){return T.index-I.index}).map(function(T){return{data:T.data,mode:T.mode,length:T.length}})}function b(c,g){switch(g){case n.NUMERIC:return a.getBitsLength(c);case n.ALPHANUMERIC:return e.getBitsLength(c);case n.KANJI:return r.getBitsLength(c);case n.BYTE:return t.getBitsLength(c)}}function w(c){return c.reduce(function(g,d){const m=g.length-1>=0?g[g.length-1]:null;return m&&m.mode===d.mode?(g[g.length-1].data+=d.data,g):(g.push(d),g)},[])}function _(c){const g=[];for(let d=0;d<c.length;d++){const m=c[d];switch(m.mode){case n.NUMERIC:g.push([m,{data:m.data,mode:n.ALPHANUMERIC,length:m.length},{data:m.data,mode:n.BYTE,length:m.length}]);break;case n.ALPHANUMERIC:g.push([m,{data:m.data,mode:n.BYTE,length:m.length}]);break;case n.KANJI:g.push([m,{data:m.data,mode:n.BYTE,length:h(m.data)}]);break;case n.BYTE:g.push([{data:m.data,mode:n.BYTE,length:h(m.data)}])}}return g}function u(c,g){const d={},m={start:{}};let B=["start"];for(let S=0;S<c.length;S++){const T=c[S],I=[];for(let M=0;M<T.length;M++){const R=T[M],V=""+S+M;I.push(V),d[V]={node:R,lastCount:0},m[V]={};for(let H=0;H<B.length;H++){const U=B[H];d[U]&&d[U].node.mode===R.mode?(m[U][V]=b(d[U].lastCount+R.length,R.mode)-b(d[U].lastCount,R.mode),d[U].lastCount+=R.length):(d[U]&&(d[U].lastCount=R.length),m[U][V]=b(R.length,R.mode)+4+n.getCharCountIndicator(R.mode,g))}}B=I}for(let S=0;S<B.length;S++)m[B[S]].end=0;return{map:m,table:d}}function f(c,g){let d;const m=n.getBestModeForData(c);if(d=n.from(g,m),d!==n.BYTE&&d.bit<m.bit)throw new Error('"'+c+'" cannot be encoded with mode '+n.toString(d)+`.
 Suggested mode is: `+n.toString(m));switch(d===n.KANJI&&!l.isKanjiModeEnabled()&&(d=n.BYTE),d){case n.NUMERIC:return new a(c);case n.ALPHANUMERIC:return new e(c);case n.KANJI:return new r(c);case n.BYTE:return new t(c)}}o.fromArray=function(g){return g.reduce(function(d,m){return typeof m=="string"?d.push(f(m,null)):m.data&&d.push(f(m.data,m.mode)),d},[])},o.fromString=function(g,d){const m=A(g,l.isKanjiModeEnabled()),B=_(m),S=u(B,d),T=s.find_path(S.map,"start","end"),I=[];for(let M=1;M<T.length-1;M++)I.push(S.table[T[M]].node);return o.fromArray(w(I))},o.rawSplit=function(g){return o.fromArray(A(g,l.isKanjiModeEnabled()))}})(de);const ft=v,mt=ut,gn=Ke,hn=Ye,pn=ne,mn=oe,_t=re,Et=ct,wn=qe,lt=se,yn=ue,bn=O,wt=de;function Cn(o,n){const a=o.size,e=mn.getPositions(n);for(let t=0;t<e.length;t++){const r=e[t][0],i=e[t][1];for(let l=-1;l<=7;l++)if(!(r+l<=-1||a<=r+l))for(let s=-1;s<=7;s++)i+s<=-1||a<=i+s||(l>=0&&l<=6&&(s===0||s===6)||s>=0&&s<=6&&(l===0||l===6)||l>=2&&l<=4&&s>=2&&s<=4?o.set(r+l,i+s,!0,!0):o.set(r+l,i+s,!1,!0))}}function _n(o){const n=o.size;for(let a=8;a<n-8;a++){const e=a%2===0;o.set(a,6,e,!0),o.set(6,a,e,!0)}}function En(o,n){const a=pn.getPositions(n);for(let e=0;e<a.length;e++){const t=a[e][0],r=a[e][1];for(let i=-2;i<=2;i++)for(let l=-2;l<=2;l++)i===-2||i===2||l===-2||l===2||i===0&&l===0?o.set(t+i,r+l,!0,!0):o.set(t+i,r+l,!1,!0)}}function Sn(o,n){const a=o.size,e=lt.getEncodedBits(n);let t,r,i;for(let l=0;l<18;l++)t=Math.floor(l/3),r=l%3+a-8-3,i=(e>>l&1)===1,o.set(t,r,i,!0),o.set(r,t,i,!0)}function yt(o,n,a){const e=o.size,t=yn.getEncodedBits(n,a);let r,i;for(r=0;r<15;r++)i=(t>>r&1)===1,r<6?o.set(r,8,i,!0):r<8?o.set(r+1,8,i,!0):o.set(e-15+r,8,i,!0),r<8?o.set(8,e-r-1,i,!0):r<9?o.set(8,15-r-1+1,i,!0):o.set(8,15-r-1,i,!0);o.set(e-8,8,1,!0)}function Bn(o,n){const a=o.size;let e=-1,t=a-1,r=7,i=0;for(let l=a-1;l>0;l-=2)for(l===6&&l--;;){for(let s=0;s<2;s++)if(!o.isReserved(t,l-s)){let h=!1;i<n.length&&(h=(n[i]>>>r&1)===1),o.set(t,l-s,h),r--,r===-1&&(i++,r=7)}if(t+=e,t<0||a<=t){t-=e,e=-e;break}}}function An(o,n,a){const e=new gn;a.forEach(function(s){e.put(s.mode.bit,4),e.put(s.getLength(),bn.getCharCountIndicator(s.mode,o)),s.write(e)});const t=ft.getSymbolTotalCodewords(o),r=Et.getTotalCodewordsCount(o,n),i=(t-r)*8;for(e.getLengthInBits()+4<=i&&e.put(0,4);e.getLengthInBits()%8!==0;)e.putBit(0);const l=(i-e.getLengthInBits())/8;for(let s=0;s<l;s++)e.put(s%2?17:236,8);return Tn(e,o,n)}function Tn(o,n,a){const e=ft.getSymbolTotalCodewords(n),t=Et.getTotalCodewordsCount(n,a),r=e-t,i=Et.getBlocksCount(n,a),l=e%i,s=i-l,h=Math.floor(e/i),p=Math.floor(r/i),A=p+1,b=h-p,w=new wn(b);let _=0;const u=new Array(i),f=new Array(i);let c=0;const g=new Uint8Array(o.buffer);for(let T=0;T<i;T++){const I=T<s?p:A;u[T]=g.slice(_,_+I),f[T]=w.encode(u[T]),_+=I,c=Math.max(c,I)}const d=new Uint8Array(e);let m=0,B,S;for(B=0;B<c;B++)for(S=0;S<i;S++)B<u[S].length&&(d[m++]=u[S][B]);for(B=0;B<b;B++)for(S=0;S<i;S++)d[m++]=f[S][B];return d}function In(o,n,a,e){let t;if(Array.isArray(o))t=wt.fromArray(o);else if(typeof o=="string"){let h=n;if(!h){const p=wt.rawSplit(o);h=lt.getBestVersionForData(p,a)}t=wt.fromString(o,h||40)}else throw new Error("Invalid data");const r=lt.getBestVersionForData(t,a);if(!r)throw new Error("The amount of data is too big to be stored in a QR Code");if(!n)n=r;else if(n<r)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+r+`.
`);const i=An(n,a,t),l=ft.getSymbolSize(n),s=new hn(l);return Cn(s,n),_n(s),En(s,n),yt(s,a,0),n>=7&&Sn(s,n),Bn(s,i),isNaN(e)&&(e=_t.getBestMask(s,yt.bind(null,s,a))),_t.applyMask(e,s),yt(s,a,e),{modules:s,version:n,errorCorrectionLevel:a,maskPattern:e,segments:t}}te.create=function(n,a){if(typeof n>"u"||n==="")throw new Error("No input text");let e=mt.M,t,r;return typeof a<"u"&&(e=mt.from(a.errorCorrectionLevel,mt.M),t=lt.from(a.version),r=_t.from(a.maskPattern),a.toSJISFunc&&ft.setToSJISFunction(a.toSJISFunc)),In(n,t,e,r)};var ge={},It={};(function(o){function n(a){if(typeof a=="number"&&(a=a.toString()),typeof a!="string")throw new Error("Color should be defined as hex string");let e=a.slice().replace("#","").split("");if(e.length<3||e.length===5||e.length>8)throw new Error("Invalid hex color: "+a);(e.length===3||e.length===4)&&(e=Array.prototype.concat.apply([],e.map(function(r){return[r,r]}))),e.length===6&&e.push("F","F");const t=parseInt(e.join(""),16);return{r:t>>24&255,g:t>>16&255,b:t>>8&255,a:t&255,hex:"#"+e.slice(0,6).join("")}}o.getOptions=function(e){e||(e={}),e.color||(e.color={});const t=typeof e.margin>"u"||e.margin===null||e.margin<0?4:e.margin,r=e.width&&e.width>=21?e.width:void 0,i=e.scale||4;return{width:r,scale:r?4:i,margin:t,color:{dark:n(e.color.dark||"#000000ff"),light:n(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},o.getScale=function(e,t){return t.width&&t.width>=e+t.margin*2?t.width/(e+t.margin*2):t.scale},o.getImageWidth=function(e,t){const r=o.getScale(e,t);return Math.floor((e+t.margin*2)*r)},o.qrToImageData=function(e,t,r){const i=t.modules.size,l=t.modules.data,s=o.getScale(i,r),h=Math.floor((i+r.margin*2)*s),p=r.margin*s,A=[r.color.light,r.color.dark];for(let b=0;b<h;b++)for(let w=0;w<h;w++){let _=(b*h+w)*4,u=r.color.light;if(b>=p&&w>=p&&b<h-p&&w<h-p){const f=Math.floor((b-p)/s),c=Math.floor((w-p)/s);u=A[l[f*i+c]?1:0]}e[_++]=u.r,e[_++]=u.g,e[_++]=u.b,e[_]=u.a}}})(It);(function(o){const n=It;function a(t,r,i){t.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=i,r.width=i,r.style.height=i+"px",r.style.width=i+"px"}function e(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}o.render=function(r,i,l){let s=l,h=i;typeof s>"u"&&(!i||!i.getContext)&&(s=i,i=void 0),i||(h=e()),s=n.getOptions(s);const p=n.getImageWidth(r.modules.size,s),A=h.getContext("2d"),b=A.createImageData(p,p);return n.qrToImageData(b.data,r,s),a(A,h,p),A.putImageData(b,0,0),h},o.renderToDataURL=function(r,i,l){let s=l;typeof s>"u"&&(!i||!i.getContext)&&(s=i,i=void 0),s||(s={});const h=o.render(r,i,s),p=s.type||"image/png",A=s.rendererOpts||{};return h.toDataURL(p,A.quality)}})(ge);var he={};const Pn=It;function Xt(o,n){const a=o.a/255,e=n+'="'+o.hex+'"';return a<1?e+" "+n+'-opacity="'+a.toFixed(2).slice(1)+'"':e}function bt(o,n,a){let e=o+n;return typeof a<"u"&&(e+=" "+a),e}function Nn(o,n,a){let e="",t=0,r=!1,i=0;for(let l=0;l<o.length;l++){const s=Math.floor(l%n),h=Math.floor(l/n);!s&&!r&&(r=!0),o[l]?(i++,l>0&&s>0&&o[l-1]||(e+=r?bt("M",s+a,.5+h+a):bt("m",t,0),t=0,r=!1),s+1<n&&o[l+1]||(e+=bt("h",i),i=0)):t++}return e}he.render=function(n,a,e){const t=Pn.getOptions(a),r=n.modules.size,i=n.modules.data,l=r+t.margin*2,s=t.color.light.a?"<path "+Xt(t.color.light,"fill")+' d="M0 0h'+l+"v"+l+'H0z"/>':"",h="<path "+Xt(t.color.dark,"stroke")+' d="'+Nn(i,r,t.margin)+'"/>',p='viewBox="0 0 '+l+" "+l+'"',b='<svg xmlns="http://www.w3.org/2000/svg" '+(t.width?'width="'+t.width+'" height="'+t.width+'" ':"")+p+' shape-rendering="crispEdges">'+s+h+`</svg>
`;return typeof e=="function"&&e(null,b),b};const Fn=ze,St=te,pe=ge,Mn=he;function Pt(o,n,a,e,t){const r=[].slice.call(arguments,1),i=r.length,l=typeof r[i-1]=="function";if(!l&&!Fn())throw new Error("Callback required as last argument");if(l){if(i<2)throw new Error("Too few arguments provided");i===2?(t=a,a=n,n=e=void 0):i===3&&(n.getContext&&typeof t>"u"?(t=e,e=void 0):(t=e,e=a,a=n,n=void 0))}else{if(i<1)throw new Error("Too few arguments provided");return i===1?(a=n,n=e=void 0):i===2&&!n.getContext&&(e=a,a=n,n=void 0),new Promise(function(s,h){try{const p=St.create(a,e);s(o(p,n,e))}catch(p){h(p)}})}try{const s=St.create(a,e);t(null,o(s,n,e))}catch(s){t(s)}}Z.create=St.create;Z.toCanvas=Pt.bind(null,pe.render);Z.toDataURL=Pt.bind(null,pe.renderToDataURL);Z.toString=Pt.bind(null,function(o,n,a){return Mn.render(o,a)});const Dn=o=>(Ve("data-v-64a9251d"),o=o(),$e(),o),Rn={class:"container"},Un={style:{"text-align":"center"}},Ln=["src"],vn=Dn(()=>G("br",null,null,-1)),kn=["innerHTML"],Vn={name:"Sat"},$n=be({...Vn,setup(o){const{loading:n,setLoading:a}=Oe(!0),e=me(),t=Ce({uuid:"",qrcode:"",visible:!1,showHide:0,status:"\u70B9\u51FB\u5199\u5165\u6309\u94AE\u5199\u5165\u536B\u661F\u6570\u636E\u5230\u8BBE\u5907<br/><br/>",sat:"",satData:[],lng:0,lat:0,alt:0,tx:0,rx:0,txTone:0,rxTone:0,CTCSSOption:[67,69.3,71.9,74.4,77,79.7,82.5,85.4,88.5,91.5,94.8,97.4,100,103.5,107.2,110.9,114.8,118.8,123,127.3,131.8,136.5,141.3,146.2,151.4,156.7,159.8,162.2,165.5,167.9,171.3,173.8,177.3,179.9,183.5,186.2,189.9,192.8,196.6,199.5,203.5,206.5,210.7,218.1,225.7,229.1,233.6,241.8,250.3,254.1],pass:void 0,passOption:[],dt:"",timer:void 0,passCustom:void 0,dtCustom:void 0,freqDb:[]});_e(async()=>{const u=await(await fetch("https://mirror.ghproxy.com/https://raw.githubusercontent.com/palewire/ham-satellite-database/main/data/amsat-active-frequencies.json")).text();t.freqDb=JSON.parse(u),t.timer=setInterval(()=>{t.dt=new Date().toLocaleString("zh-CN",{timeZone:"Asia/Shanghai"})},1e3)}),Ee(()=>{try{clearInterval(t.timer)}catch{}});const r=async()=>{if(e.connectState!=!0){alert(sessionStorage.getItem("noticeConnectK5"));return}a(!0),await ht(e.connectPort),await i(),await Qt(e.connectPort),a(!1)},i=async()=>{var c;const u=t.dtCustom?new Date(t.dtCustom):new Date,f=[...P(parseInt(u.getFullYear().toString().substring(2,4)).toString(16)),...P((u.getMonth()+1).toString(16)),...P(u.getDate().toString(16)),...P(u.getHours().toString(16)),...P(u.getMinutes().toString(16)),...P(u.getSeconds().toString(16))];await F(e.connectPort,11200,new Uint8Array(f),6,(c=e.configuration)==null?void 0:c.uart)},l=async u=>{const f=t.satData.find(c=>c.name==u);if(f&&f.path){t.status+="<br/>\u536B\u661F\u53C2\u6570\uFF1A<br/>",f.path.map(g=>{t.status+=g+"<br/>"});let c=!1;t.freqDb.map(g=>{f.path[1].split(" ")[1]==g.norad_id&&g.mode.indexOf("FM")!=-1&&(console.log(g),c=!0,t.tx=g.uplink?parseFloat(g.uplink.split("/")[0]):0,t.rx=g.downlink?parseFloat(g.downlink.split("/")[0]):0,t.txTone=parseFloat([0,...t.CTCSSOption].reduce((d,m)=>g.mode.indexOf(m)!=-1?m:d)))}),c||(t.tx=0,t.rx=0,t.txTone=0,t.rxTone=0)}Gt(()=>{const c=document==null?void 0:document.getElementById("statusArea");c&&(c.scrollTop=c==null?void 0:c.scrollHeight)})};(async()=>{a(!0);const f=(await(await fetch("https://celestrak.org/NORAD/elements/amateur.txt")).text()).split(/\r?\n/),c=[];let g={};for(let d=0;d<f.length;d++)Number.isNaN(parseInt(f[d].substring(0,1)))?(g.name&&g.name!=""&&(c.push(g),g={}),g.name=f[d]):(g.path||(g.path=[]),g.path.push(f[d]));t.satData=c,a(!1)})();const h=async()=>{a(!0),navigator.geolocation.getCurrentPosition(u=>{u.coords&&(t.lat=u.coords.latitude,t.lng=u.coords.longitude,u.coords.altitude&&(t.alt=u.coords.altitude))}),a(!1)};h();const p=async()=>{t.visible=!0,t.uuid=crypto.randomUUID(),t.qrcode=await Z.toDataURL(location.origin+"/#/satloc?uuid="+t.uuid,{width:250}),console.log(t.uuid)},A=async()=>{const u=await(await fetch("https://k5.vicicode.com/api/lol",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({func:1,uuid:t.uuid})})).json(),f=JSON.parse(u.cache);f.length>=3&&(t.lng=f[0],t.lat=f[1],t.alt=f[2])},b=async(u=0,f)=>{var c;await ht(e.connectPort);for(let g=u;g<f.length+u;g+=128)await F(e.connectPort,g,f.slice(g-u,g-u+128),128,(c=e.configuration)==null?void 0:c.uart),t.status=t.status+"\u5199\u5165\u8FDB\u5EA6\uFF1A"+((g-u)/f.length*100).toFixed(1)+"%<br/>",Gt(()=>{const d=document==null?void 0:document.getElementById("statusArea");d&&(d.scrollTop=d==null?void 0:d.scrollHeight)});t.status=t.status+"\u5199\u5165\u8FDB\u5EA6\uFF1A100.0%<br/>"},w=async()=>{if(!t.sat){alert("\u8BF7\u9009\u62E9\u536B\u661F\uFF01");return}a(!0);const u=await(await fetch("https://k5.vicicode.com/api/pass",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({sat:t.sat,sat_line_1:t.satData.find(c=>c.name==t.sat).path[0],sat_line_2:t.satData.find(c=>c.name==t.sat).path[1],lat:t.lat,lng:t.lng,alt:t.alt})})).json(),f=[];for(let c=0;c<u.pass_times.length;c++)try{let g;Date.parse(u.departure_times[c])-Date.parse(u.pass_times[c])>0?g=[u.pass_times[c],u.departure_times[c]]:g=[u.pass_times[c],u.departure_times[c+1]],f.push(g)}catch{}f.length>0?t.pass=f[0][0]+"|"+f[0][1]:t.pass=void 0,t.passOption=f,a(!1)},_=async()=>{var y,Nt,Ft,Mt,Dt,Rt,Ut,Lt,vt,kt,Vt,$t,xt,Ot,Ht,zt,Jt,Kt;if(e.connectState!=!0){alert(sessionStorage.getItem("noticeConnectK5"));return}if(((y=e.configuration)==null?void 0:y.sat)!=!0){alert(sessionStorage.getItem("noticeVersionNoSupport"));return}if(!t.sat){alert("\u8BF7\u9009\u62E9\u536B\u661F\uFF01");return}if(t.passCustom&&(t.pass=t.passCustom[0]+"|"+t.passCustom[1]),!t.pass){alert("\u8BF7\u9009\u62E9\u8FC7\u5883\u65F6\u95F4\uFF01");return}a(!0);const u=await(await fetch("https://k5.vicicode.com/api/doppler",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({sat:t.sat,sat_line_1:t.satData.find(z=>z.name==t.sat).path[0],sat_line_2:t.satData.find(z=>z.name==t.sat).path[1],lat:t.lat,lng:t.lng,alt:t.alt,tx:t.tx,rx:t.rx,pass_time:t.pass.split("|")[0],departure_time:t.pass.split("|")[1]})})).json(),f=t.sat,c=t.pass.split("|")[0],g=c.split("-")[0].substring(2,4),d=c.split("-")[1],m=c.split("-")[2].split(" ")[0],B=c.split(" ")[1].split(":")[0],S=c.split(" ")[1].split(":")[1],T=c.split(" ")[1].split(":")[2],I=t.pass.split("|")[1],M=I.split("-")[0].substring(2,4),R=I.split("-")[1],V=I.split("-")[2].split(" ")[0],H=I.split(" ")[1].split(":")[0],U=I.split(" ")[1].split(":")[1],gt=I.split(" ")[1].split(":")[2];await ht(e.connectPort);let N=new Uint8Array(10);N.set(xe(f.trim()).subarray(0,9)),await F(e.connectPort,11168,N,10,(Nt=e.configuration)==null?void 0:Nt.uart),await F(e.connectPort,11178,P(parseInt(g).toString(16)).subarray(0,1),1,(Ft=e.configuration)==null?void 0:Ft.uart),await F(e.connectPort,11179,P(parseInt(d).toString(16)).subarray(0,1),1,(Mt=e.configuration)==null?void 0:Mt.uart),await F(e.connectPort,11180,P(parseInt(m).toString(16)).subarray(0,1),1,(Dt=e.configuration)==null?void 0:Dt.uart),await F(e.connectPort,11181,P(parseInt(B).toString(16)).subarray(0,1),1,(Rt=e.configuration)==null?void 0:Rt.uart),await F(e.connectPort,11182,P(parseInt(S).toString(16)).subarray(0,1),1,(Ut=e.configuration)==null?void 0:Ut.uart),await F(e.connectPort,11183,P(parseInt(T).toString(16)).subarray(0,1),1,(Lt=e.configuration)==null?void 0:Lt.uart),await F(e.connectPort,11184,P(parseInt(M).toString(16)).subarray(0,1),1,(vt=e.configuration)==null?void 0:vt.uart),await F(e.connectPort,11185,P(parseInt(R).toString(16)).subarray(0,1),1,(kt=e.configuration)==null?void 0:kt.uart),await F(e.connectPort,11186,P(parseInt(V).toString(16)).subarray(0,1),1,(Vt=e.configuration)==null?void 0:Vt.uart),await F(e.connectPort,11187,P(parseInt(H).toString(16)).subarray(0,1),1,($t=e.configuration)==null?void 0:$t.uart),await F(e.connectPort,11188,P(parseInt(U).toString(16)).subarray(0,1),1,(xt=e.configuration)==null?void 0:xt.uart),await F(e.connectPort,11189,P(parseInt(gt).toString(16)).subarray(0,1),1,(Ot=e.configuration)==null?void 0:Ot.uart),N=new Uint8Array(2),N.set(P(((Date.parse(I)-Date.parse(c))/1e3).toString(16)).subarray(0,2)),await F(e.connectPort,11190,N,2,(Ht=e.configuration)==null?void 0:Ht.uart),N=new Uint8Array(2),t.txTone&&t.txTone>0&&N.set(P(parseInt((t.txTone*10).toFixed(0)).toString(16)).subarray(0,2)),await F(e.connectPort,11192,N,2,(zt=e.configuration)==null?void 0:zt.uart),N=new Uint8Array(2),t.rxTone&&t.rxTone>0&&N.set(P(parseInt((t.rxTone*10).toFixed(0)).toString(16)).subarray(0,2)),await F(e.connectPort,11194,N,2,(Jt=e.configuration)==null?void 0:Jt.uart),N=new Uint8Array(4),N.set(P(((Date.parse(c)-Date.parse("2000-01-01 00:00:00"))/1e3).toString(16)).subarray(0,4)),await F(e.connectPort,11196,N,4,(Kt=e.configuration)==null?void 0:Kt.uart);const tt=[];u.shift_array.filter((z,et)=>et%2===0).map(z=>{const et=new Uint8Array(4),Yt=new Uint8Array(4);et.set(P(parseInt(((t.tx*1e6+z[0])/10).toFixed(0)).toString(16))),Yt.set(P(parseInt(((t.rx*1e6+z[1])/10).toFixed(0)).toString(16))),tt.push(...et,...Yt)}),N=new Uint8Array(7680),N.set(new Uint8Array(tt).subarray(0,7680)),await b(123392,N),await i(),await Qt(e.connectPort),a(!1)};return(u,f)=>{const c=Ne,g=we,d=Fe,m=Se,B=He,S=Me,T=Be,I=Ae,M=De,R=Re,V=Ue,H=Le,U=Te,gt=Ie,N=ve,tt=ke;return $(),q("div",Rn,[C(c,{visible:t.visible,"onUpdate:visible":f[0]||(f[0]=y=>t.visible=y),onOk:A,"ok-text":"Scanned and uploaded"},{title:E(()=>[D(L(u.$t("tool.scanqr")),1)]),default:E(()=>[G("div",Un,[G("img",{src:t.qrcode},null,8,Ln),vn,D(" "+L(u.$t("tool.scannotice")),1)])]),_:1},8,["visible"]),C(g,{items:[u.$t("menu.list"),u.$t("menu.satellite")]},null,8,["items"]),C(tt,{gutter:20,align:"stretch"},{default:E(()=>[C(N,{span:24},{default:E(()=>[C(gt,{class:"general-card",title:u.$t("menu.satellite")+u.$t("global.onStart")},{default:E(()=>[C(U,{loading:Pe(n),style:{width:"100%"},tip:"\u6B63\u5728\u5904\u7406 ..."},{default:E(()=>[C(d,{"label-col-style":{width:"25%"},field:"dt",label:u.$t("tool.brtime"),onClick:f[1]||(f[1]=()=>{t.showHide+=1})},{default:E(()=>[D(L(t.dt),1)]),_:1},8,["label"]),jt(C(d,{"label-col-style":{width:"25%"},field:"dtCustom",label:"\u81EA\u5B9A\u4E49\u65F6\u95F4"},{default:E(()=>[G("div",null,[C(m,{style:{width:"220px",margin:"0 24px 24px 0"},"show-time":"","time-picker-props":{defaultValue:"00:00:00"},format:"YYYY-MM-DD HH:mm:ss",modelValue:t.dtCustom,"onUpdate:modelValue":f[2]||(f[2]=y=>t.dtCustom=y)},null,8,["modelValue"]),D(" \xA0\xA0"),C(B,{size:"small",theme:"success",onClick:r},{default:E(()=>[D("\u5199\u5165\u65F6\u95F4\u5230\u53F0\u7AD9")]),_:1})])]),_:1},512),[[qt,t.showHide>=5]]),C(d,{"label-col-style":{width:"25%"},field:"sat",label:u.$t("tool.selectSatellite")},{default:E(()=>[C(T,{modelValue:t.sat,"onUpdate:modelValue":f[3]||(f[3]=y=>t.sat=y),onChange:l,placeholder:u.$t("tool.selectSatellite")+"...","allow-search":"","allow-clear":""},{default:E(()=>[($(!0),q(nt,null,ot(t.satData,y=>($(),rt(S,{key:y.name,value:y.name},{default:E(()=>[D(L(y.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),C(d,{"label-col-style":{width:"25%"},field:"lng",label:u.$t("tool.longitude")},{default:E(()=>[C(I,{precision:6,modelValue:t.lng,"onUpdate:modelValue":f[4]||(f[4]=y=>t.lng=y)},null,8,["modelValue"])]),_:1},8,["label"]),C(d,{"label-col-style":{width:"25%"},field:"lat",label:u.$t("tool.latitude")},{default:E(()=>[C(I,{precision:6,modelValue:t.lat,"onUpdate:modelValue":f[5]||(f[5]=y=>t.lat=y)},null,8,["modelValue"])]),_:1},8,["label"]),C(d,{"label-col-style":{width:"25%"},field:"alt",label:u.$t("tool.altitude")},{default:E(()=>[C(I,{precision:0,modelValue:t.alt,"onUpdate:modelValue":f[6]||(f[6]=y=>t.alt=y)},null,8,["modelValue"])]),_:1},8,["label"]),C(d,{"label-col-style":{width:"25%"},label:""},{default:E(()=>[C(R,null,{default:E(()=>[C(M,{onClick:h},{default:E(()=>[D(L(u.$t("tool.brlonlat")),1)]),_:1}),C(M,{onClick:p},{default:E(()=>[D(L(u.$t("tool.phonelonlat")),1)]),_:1}),C(M,{onClick:w},{default:E(()=>[D(L(u.$t("tool.satpasstime")),1)]),_:1})]),_:1})]),_:1}),C(d,{"label-col-style":{width:"25%"},field:"pass",label:u.$t("tool.selectPassTime")},{default:E(()=>[C(T,{modelValue:t.pass,"onUpdate:modelValue":f[7]||(f[7]=y=>t.pass=y),"allow-search":"","allow-clear":""},{default:E(()=>[($(!0),q(nt,null,ot(t.passOption,y=>($(),rt(S,{key:y[0]+"|"+y[1],value:y[0]+"|"+y[1]},{default:E(()=>[D(L(y[0]+" - "+y[1]),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),jt(C(d,{"label-col-style":{width:"25%"},field:"passCustom",label:"\u81EA\u5B9A\u4E49\u8FC7\u5883\u65F6\u95F4"},{default:E(()=>[C(V,{style:{width:"360px",margin:"0 24px 24px 0"},"show-time":"","time-picker-props":{defaultValue:["00:00:00","00:00:00"]},format:"YYYY-MM-DD HH:mm:ss",modelValue:t.passCustom,"onUpdate:modelValue":f[8]||(f[8]=y=>t.passCustom=y)},null,8,["modelValue"])]),_:1},512),[[qt,t.showHide>=5]]),C(d,{"label-col-style":{width:"25%"},field:"tx",label:u.$t("tool.txFreq")},{default:E(()=>[C(I,{precision:5,modelValue:t.tx,"onUpdate:modelValue":f[9]||(f[9]=y=>t.tx=y)},null,8,["modelValue"])]),_:1},8,["label"]),C(d,{"label-col-style":{width:"25%"},field:"txTone",label:u.$t("tool.txTone")},{default:E(()=>[C(T,{modelValue:t.txTone,"onUpdate:modelValue":f[10]||(f[10]=y=>t.txTone=y),"allow-search":"","allow-clear":""},{default:E(()=>[C(S,{value:0},{default:E(()=>[D(L(u.$t("tool.off")),1)]),_:1}),($(!0),q(nt,null,ot(t.CTCSSOption,y=>($(),rt(S,{key:y,value:y},{default:E(()=>[D(L(y.toFixed(1)),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),C(d,{"label-col-style":{width:"25%"},field:"rx",label:u.$t("tool.rxFreq")},{default:E(()=>[C(I,{precision:5,modelValue:t.rx,"onUpdate:modelValue":f[11]||(f[11]=y=>t.rx=y)},null,8,["modelValue"])]),_:1},8,["label"]),C(d,{"label-col-style":{width:"25%"},field:"rxTone",label:u.$t("tool.rxTone")},{default:E(()=>[C(T,{modelValue:t.rxTone,"onUpdate:modelValue":f[12]||(f[12]=y=>t.rxTone=y),"allow-search":"","allow-clear":""},{default:E(()=>[C(S,{value:0},{default:E(()=>[D(L(u.$t("tool.off")),1)]),_:1}),($(!0),q(nt,null,ot(t.CTCSSOption,y=>($(),rt(S,{key:y,value:y},{default:E(()=>[D(L(y.toFixed(1)),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["label"]),C(d,{"label-col-style":{width:"25%"},label:""},{default:E(()=>[C(M,{onClick:_},{default:E(()=>[D(L(u.$t("tool.writeData")),1)]),_:1})]),_:1}),C(H),G("div",{id:"statusArea",style:{height:"20em","background-color":"azure",color:"silver",overflow:"auto",padding:"20px"},innerHTML:t.status},null,8,kn)]),_:1},8,["loading"])]),_:1},8,["title"])]),_:1})]),_:1})])}}});const ro=ye($n,[["__scopeId","data-v-64a9251d"]]);export{ro as default};