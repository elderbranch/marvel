"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[529],{425:(e,c,s)=>{s.d(c,{A:()=>n});const a=s.p+"static/media/error.42292aa12b6bc303ce99.gif";var t=s(579);const n=()=>(0,t.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:a,alt:"Error"})},150:(e,c,s)=>{s.r(c),s.d(c,{default:()=>m});var a=s(216),t=s(475),n=s(43),i=s(502),l=s(425),r=(s(196),s(897)),o=s(579);const u=e=>{let{comic:c}=e;const{title:s,description:a,pageCount:n,thumbnail:i,language:l,price:r}=c;return(0,o.jsxs)("div",{className:"single-comic",children:[(0,o.jsx)("img",{src:i,alt:s,className:"single-comic__img"}),(0,o.jsxs)("div",{className:"single-comic__info",children:[(0,o.jsx)("h2",{className:"single-comic__name",children:s}),(0,o.jsx)("p",{className:"single-comic__descr",children:a}),(0,o.jsxs)("p",{className:"single-comic__descr",children:["pages: ",n]}),(0,o.jsxs)("p",{className:"single-comic__descr",children:["Language: ",l]}),(0,o.jsxs)("div",{className:"single-comic__price",children:[r,"$"]})]}),(0,o.jsx)(t.N_,{to:"/comics",className:"single-comic__back",children:"Back to all"})]})},m=()=>{const{comicId:e}=(0,a.g)(),[c,s]=(0,n.useState)(null),{loading:t,error:m,getComic:d,clearError:h}=(0,r.A)();(0,n.useEffect)((()=>{g()}),[e]);const g=()=>{h(),d(e).then(p)},p=e=>{s(e)},_=m?(0,o.jsx)(l.A,{}):null,x=t?(0,o.jsx)(i.A,{}):null,j=t||m||!c?null:(0,o.jsx)(u,{comic:c});return(0,o.jsxs)(o.Fragment,{children:[_,x,j]})}},196:(e,c,s)=>{s.d(c,{A:()=>t});var a=s(579);const t=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,a.jsxs)("div",{className:"skeleton",children:[(0,a.jsxs)("div",{className:"pulse skeleton__header",children:[(0,a.jsx)("div",{className:"pulse skeleton__circle"}),(0,a.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,a.jsx)("div",{className:"pulse skeleton__block"}),(0,a.jsx)("div",{className:"pulse skeleton__block"}),(0,a.jsx)("div",{className:"pulse skeleton__block"})]})]})},897:(e,c,s)=>{s.d(c,{A:()=>t});var a=s(43);const t=()=>{const{loading:e,request:c,error:s,clearError:t}=(()=>{const[e,c]=(0,a.useState)(!1),[s,t]=(0,a.useState)(null);return{loading:e,request:(0,a.useCallback)((async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};c(!0);try{const t=await fetch(e,{method:s,body:a,headers:n});if(!t.ok)throw new Error("Could not fetch ".concat(e,", status ").concat(t.status));const i=await t.json();return c(!1),i}catch(i){throw c(!1),t(i.message),i}}),[]),error:s,clearError:(0,a.useCallback)((()=>{t(null)}),[])}})(),n="https://gateway.marvel.com:443/v1/public/",i="apikey=3490c7c250fcd530402c1a42a9667fdb",l=e=>({id:e.id,name:e.name,description:e.description,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),r=e=>({id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,resourceURI:e.resourceURI,language:e.textObjects.language||"en-us",price:e.prices[0].price});return{loading:e,error:s,getAllCharacters:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:250;return(await c("".concat(n,"characters?limit=9&offset=").concat(e,"&").concat(i))).data.results.map(l)},getCharacter:async e=>{const s=await c("".concat(n,"characters/").concat(e,"?&").concat(i));return l(s.data.results[0])},clearError:t,getAllComicses:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:250;return(await c("".concat(n,"comics?limit=8&offset=").concat(e,"&").concat(i))).data.results.map(r)},getComic:async e=>{const s=await c("".concat(n,"comics/").concat(e,"?&").concat(i));return r(s.data.results[0])}}}}}]);
//# sourceMappingURL=529.acc5e812.chunk.js.map