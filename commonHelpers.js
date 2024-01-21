import{S,i as g,a as F}from"./assets/vendor-89feecc5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const $="/foot-js-hw-12/assets/error-icon-d9b820e6.svg",q="/foot-js-hw-12/assets/info-icon-0536b3ac.svg";function w(e=[]){return c.insertAdjacentHTML("beforeend",e.reduce((r,{webformatURL:i,largeImageURL:l,tags:t,likes:o,views:s,comments:I,downloads:b})=>r+`
      <li class = "gallery-item">
        <a class="gallery-link" href="${l}">
        <img class="gallery-image"
        src="${i}" 
        alt="${t}"/>
        </a>
         <ul class="info-list">
          <li class="info-item">
            <h2>Likes</h2>
            <p>${o}</p>
          </li>
          <li class="info-item">
            <h2>Vievs</h2>
            <p>${s}</p>
          </li>
          <li class="info-item">
            <h2>Comments</h2>
            <p>${I}</p>
          </li>
          <li class="info-item">
            <h2>Downloads</h2>
            <p>${b}</p>
          </li>
        </ul>
       </li>
        `,""))}function m(e){g.error({message:e,messageColor:"#FFF",messageSize:"16px",messageLineHeight:"24px",position:"topRight",transitionIn:"fadeInLeft",backgroundColor:"#EF4040",title:"Error",titleColor:"#FFF",titleSize:"16px",titleLineHeight:"24px",timeout:3e3,iconUrl:`${$}`,theme:"dark"})}function x(e){g.info({message:e,messageColor:"#FFF",messageSize:"16px",messageLineHeight:"24px",position:"topRight",transitionIn:"fadeInLeft",backgroundColor:"#09F",title:"",timeout:3e3,iconUrl:`${q}`,theme:"dark"})}function E(){y.classList.remove("is-hidden")}function d(){y.classList.add("is-hidden")}function k(e){e.innerHTML=""}async function H(){const e="41789210-2260d99c0029effaf849d1b98",r=F.create({baseURL:"https://pixabay.com/api/"});try{return(await r.get("",{params:{key:`${e}`,q:`${v}`,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:`${L}`,page:`${a}`}})).data}catch(i){console.log(i.message)}}async function h(){E(),n.hidden=!0;try{if(a<=u){const e=await H();if(e.totalHits===0){d(),m("Sorry, there are no images match in your search query. Please try again!");return}d(),w(e.hits),P.refresh(),u=Math.ceil(e.totalHits/L),a++,n.hidden=!1,a>u&&(n.hidden=!0,x("We're sorry, but you've reached the end of search results."),n.removeEventListener("click",p))}}catch(e){d(),m("URL Error"),console.log(e)}f.value=""}async function p(){await h();const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:(r+24)*3,behavior:"smooth"})}const C=document.querySelector(".search-form"),f=document.querySelector(".search-form input"),c=document.querySelector(".gallery"),y=document.querySelector(".loader"),n=document.querySelector(".search-form [data-type = 'load-more']"),P=new S(".gallery a",{captionsData:"alt",captionDelay:250}),L=39;let u=2,v="",a=1;C.addEventListener("submit",async e=>{e.preventDefault(),f.value.trim()!==""?(k(c),c.classList.add("is-hidden"),a=1,v=f.value.trim(),await h(),c.classList.remove("is-hidden")):m("Please fill the query"),n.addEventListener("click",p)});
//# sourceMappingURL=commonHelpers.js.map
