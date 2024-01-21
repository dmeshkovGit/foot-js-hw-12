import{S,i as g,a as F}from"./assets/vendor-89feecc5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const $="/foot-js-hw-13/assets/error-icon-d9b820e6.svg",q="/foot-js-hw-13/assets/info-icon-0536b3ac.svg";function w(e=[]){return y.insertAdjacentHTML("beforeend",e.reduce((r,{webformatURL:a,largeImageURL:n,tags:t,likes:o,views:s,comments:I,downloads:v})=>r+`
      <li class = "gallery-item">
        <a class="gallery-link" href="${n}">
        <img class="gallery-image"
        src="${a}" 
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
            <p>${v}</p>
          </li>
        </ul>
       </li>
        `,""))}function d(e){g.error({message:e,messageColor:"#FFF",messageSize:"16px",messageLineHeight:"24px",position:"topRight",transitionIn:"fadeInLeft",backgroundColor:"#EF4040",title:"Error",titleColor:"#FFF",titleSize:"16px",titleLineHeight:"24px",timeout:3e3,iconUrl:`${$}`,theme:"dark"})}function x(e){g.info({message:e,messageColor:"#FFF",messageSize:"16px",messageLineHeight:"24px",position:"topRight",transitionIn:"fadeInLeft",backgroundColor:"#09F",title:"",timeout:3e3,iconUrl:`${q}`,theme:"dark"})}function H(e){const r="<span data-type='loading' class='loader'></span>";e.insertAdjacentHTML("beforeend",r)}function i(){document.querySelector(".loader").remove()}function E(e){e.innerHTML=""}async function k(){const e="41789210-2260d99c0029effaf849d1b98",r=F.create({baseURL:"https://pixabay.com/api/"});try{return(await r.get("",{params:{key:`${e}`,q:`${b}`,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:`${L}`,page:`${c}`}})).data}catch(a){console.log(a.message)}}async function h(){H(p),l.hidden=!0;try{if(c<=f){const e=await k();e.totalHits===0?(i(),d("Sorry, there are no images matchinyour search query. Please try again!")):(i(),w(e.hits),m.refresh(),f=Math.ceil(e.totalHits/L),c++,l.hidden=!1)}else i(),l.hidden=!0,m.refresh(),x("We're sorry, but you've reached the end of search results.")}catch(e){i(),d("URL Error"),console.log(e.message)}u.value=""}const p=document.querySelector(".search-form"),u=document.querySelector(".search-form input"),y=document.querySelector(".gallery"),l=document.querySelector(".search-form [data-type = 'load-more']"),m=new S(".gallery a",{captionsData:"alt",captionDelay:250}),L=39;let f=1,b="",c=1;p.addEventListener("submit",async e=>{e.preventDefault(),u.value.trim()!==""?(E(y),c=1,b=u.value.trim(),await h()):d("Please fill the query")});l.addEventListener("click",async()=>{await h();const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:(r+24)*3,behavior:"smooth"})});
//# sourceMappingURL=commonHelpers.js.map
