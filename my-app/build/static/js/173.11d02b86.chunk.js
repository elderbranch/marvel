"use strict";(self.webpackChunkmarvel=self.webpackChunkmarvel||[]).push([[173],{569:(e,a,s)=>{s.d(a,{A:()=>i});var t=s(43),c=s(425),n=s(579);class r extends t.Component{constructor(){super(...arguments),this.state={error:!1}}componentDidCatch(e,a){console.log(e,a),this.setState({error:!0})}render(){return this.state.error?(0,n.jsx)(c.A,{}):this.props.children}}const i=r},425:(e,a,s)=>{s.d(a,{A:()=>n});const t=s.p+"static/media/error.42292aa12b6bc303ce99.gif";var c=s(579);const n=()=>(0,c.jsx)("img",{style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},src:t,alt:"Error"})},273:(e,a,s)=>{s.r(a),s.d(a,{default:()=>p});var t=s(43),c=s(897),n=s(502),r=s(425);const i=s.p+"static/media/mjolnir.61f31e1809f12183a524.png";var l=s(579);const o=e=>{let{char:a}=e;const{name:s,description:t,thumbnail:c,homepage:n,wiki:r}=a;let i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===c&&(i={objectFit:"contain"}),(0,l.jsxs)("div",{className:"randomchar__block",children:[(0,l.jsx)("img",{src:c,alt:"Random character",className:"randomchar__img",style:i}),(0,l.jsxs)("div",{className:"randomchar__info",children:[(0,l.jsx)("p",{className:"randomchar__name",children:s}),(0,l.jsx)("p",{className:"randomchar__descr",children:t?"".concat(t.slice(0,199)+" ..."):"There is no information on the website about this character"}),(0,l.jsxs)("div",{className:"randomchar__btns",children:[(0,l.jsx)("a",{href:n,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:r,className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},h=()=>{const[e,a]=(0,t.useState)({}),{loading:s,error:h,getCharacter:d,clearError:m}=(0,c.A)();(0,t.useEffect)((()=>{_();const e=setInterval(_,6e4);return()=>{clearInterval(e)}}),[]);const u=e=>{a(e)},_=()=>{m();const e=Math.floor(400*Math.random())+1011e3;d(e).then(u)},j=h?(0,l.jsx)(r.A,{}):null,x=s?(0,l.jsx)(n.A,{}):null,p=s||h||!e?null:(0,l.jsx)(o,{char:e});return(0,l.jsxs)("div",{className:"randomchar",children:[j,x,p,(0,l.jsxs)("div",{className:"randomchar__static",children:[(0,l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,l.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,l.jsx)("button",{className:"button button__main",onClick:_,children:(0,l.jsx)("div",{className:"inner",children:"try it"})}),(0,l.jsx)("img",{src:i,alt:"mjolnir",className:"randomchar__decoration"})]})]})},d=e=>{const[a,s]=(0,t.useState)([]),[i,o]=(0,t.useState)(!1),[h,d]=(0,t.useState)(250),[m,u]=(0,t.useState)(!1),{loading:_,error:j,getAllCharacters:x}=(0,c.A)();(0,t.useEffect)((()=>{p(h,!0)}),[]);const p=(e,a)=>{o(!a),x(e).then(b)},b=e=>{let a=!1;e.length<9&&(a=!0),s((a=>[...a,...e])),o((e=>!1)),d((e=>e+9)),u((e=>a))},g=(0,t.useRef)([]),v=e=>{g.current.forEach((e=>e.classList.remove("char__item_selected"))),g.current[e].classList.add("char__item_selected"),g.current[e].focus()};const N=function(a){const s=a.map(((a,s)=>{let t={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a.thumbnail&&(t={objectFit:"unset"}),(0,l.jsxs)("li",{className:"char__item",tabIndex:0,ref:e=>g.current[s]=e,onClick:()=>{e.onCharSelected(a.id),v(s)},onKeyPress:t=>{" "!==t.key&&"Enter"!==t.key||(e.onCharSelected(a.id),v(s))},children:[(0,l.jsx)("img",{src:a.thumbnail,alt:a.name,style:t}),(0,l.jsx)("div",{className:"char__name",children:a.name})]},a.id)}));return(0,l.jsx)("ul",{className:"char__grid",children:s})}(a),f=j?(0,l.jsx)(r.A,{}):null,k=_&&!i?(0,l.jsx)(n.A,{}):null;return(0,l.jsxs)("div",{className:"char__list",children:[f,k,N,(0,l.jsx)("button",{className:"button button__main button__long",disabled:i,style:{display:m?"none":"block"},onClick:()=>p(h),children:(0,l.jsx)("div",{className:"inner",children:"load more"})})]})};var m=s(196);const u=e=>{let{char:a}=e;const{name:s,description:t,thumbnail:c,homepage:n,wiki:r,comics:i}=a;let o={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===c&&(o={objectFit:"contain"}),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"char__basics",children:[(0,l.jsx)("img",{src:c,alt:s,style:o}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"char__info-name",children:s}),(0,l.jsxs)("div",{className:"char__btns",children:[(0,l.jsx)("a",{href:n,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:r,className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,l.jsx)("div",{className:"char__descr",children:t||"There is no information on the website about this character"}),(0,l.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this character",i.map(((e,a)=>{if(!(a>9))return(0,l.jsx)("li",{className:"char__comics-item",children:e.name},a)}))]})]})},_=e=>{const[a,s]=(0,t.useState)(null),{loading:i,error:o,getCharacter:h,clearError:d}=(0,c.A)();(0,t.useEffect)((()=>{_()}),[e.charId]);const _=()=>{const{charId:a}=e;a&&(d(),h(a).then(j))},j=e=>{s(e)},x=a||i||o?null:(0,l.jsx)(m.A,{}),p=o?(0,l.jsx)(r.A,{}):null,b=i?(0,l.jsx)(n.A,{}):null,g=i||o||!a?null:(0,l.jsx)(u,{char:a});return(0,l.jsxs)("div",{className:"char__info",children:[x,p,b,g]})};var j=s(569);const x=s.p+"static/media/vision.067d4ae1936d64a577ce.png",p=()=>{const[e,a]=(0,t.useState)(null);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(j.A,{children:(0,l.jsx)(h,{})}),(0,l.jsxs)("div",{className:"char__content",children:[(0,l.jsx)(j.A,{children:(0,l.jsx)(d,{onCharSelected:e=>{a(e)}})}),(0,l.jsx)(j.A,{children:(0,l.jsx)(_,{charId:e})})]}),(0,l.jsx)("img",{className:"bg-decoration",src:x,alt:"vision"})]})}},196:(e,a,s)=>{s.d(a,{A:()=>c});var t=s(579);const c=()=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,t.jsxs)("div",{className:"skeleton",children:[(0,t.jsxs)("div",{className:"pulse skeleton__header",children:[(0,t.jsx)("div",{className:"pulse skeleton__circle"}),(0,t.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,t.jsx)("div",{className:"pulse skeleton__block"}),(0,t.jsx)("div",{className:"pulse skeleton__block"}),(0,t.jsx)("div",{className:"pulse skeleton__block"})]})]})},897:(e,a,s)=>{s.d(a,{A:()=>c});var t=s(43);const c=()=>{const{loading:e,request:a,error:s,clearError:c}=(()=>{const[e,a]=(0,t.useState)(!1),[s,c]=(0,t.useState)(null);return{loading:e,request:(0,t.useCallback)((async function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};a(!0);try{const c=await fetch(e,{method:s,body:t,headers:n});if(!c.ok)throw new Error("Could not fetch ".concat(e,", status ").concat(c.status));const r=await c.json();return a(!1),r}catch(r){throw a(!1),c(r.message),r}}),[]),error:s,clearError:(0,t.useCallback)((()=>{c(null)}),[])}})(),n="https://gateway.marvel.com:443/v1/public/",r="apikey=3490c7c250fcd530402c1a42a9667fdb",i=e=>({id:e.id,name:e.name,description:e.description,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}),l=e=>({id:e.id,title:e.title,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,resourceURI:e.resourceURI,language:e.textObjects.language||"en-us",price:e.prices[0].price});return{loading:e,error:s,getAllCharacters:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:250;return(await a("".concat(n,"characters?limit=9&offset=").concat(e,"&").concat(r))).data.results.map(i)},getCharacter:async e=>{const s=await a("".concat(n,"characters/").concat(e,"?&").concat(r));return i(s.data.results[0])},clearError:c,getAllComicses:async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:250;return(await a("".concat(n,"comics?limit=8&offset=").concat(e,"&").concat(r))).data.results.map(l)},getComic:async e=>{const s=await a("".concat(n,"comics/").concat(e,"?&").concat(r));return l(s.data.results[0])}}}}}]);
//# sourceMappingURL=173.11d02b86.chunk.js.map