import{a as f,S as m,i as a}from"./assets/vendor-BjRz3xa9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const g="49502034-df263a01178fc9ef1a0cdcc0b",p="https://pixabay.com/api/";async function d(i){try{const t=await f.get(p,{params:{key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}});return console.log(t.data),t.data.hits}catch(t){throw console.error("Error fetching images:",t),t}}const h=document.querySelector(".gallery");function y(i){h.innerHTML=i.map(({webformatURL:s,largeImageURL:o,tags:e,likes:r,views:l,comments:c,downloads:u})=>`<li class="gallery-item">
            <a class="gallery-link" href="${o}">
                <img class="gallery-image" src="${s}" alt="${e}" width="360" height="200"/>
                <ul class="gallery-text-list">
                    <li class="gallery-text-item"><h3>Likes</h3><p>${r}</p></li>
                    <li class="gallery-text-item"><h3>Views</h3><p>${l}</p></li>
                    <li class="gallery-text-item"><h3>Comments</h3><p>${c}</p></li>
                    <li class="gallery-text-item"><h3>Downloads</h3><p>${u}</p></li>
                </ul>
            </a>
        </li>`).join(""),new m(".gallery a",{captionsData:"alt"}).refresh()}const x=document.querySelector(".form"),n=document.querySelector(".loader");x.addEventListener("submit",b);function b(i){i.preventDefault();const t=i.currentTarget,s=t.elements.query.value.trim();n.style.display="flex",s===""?a.error({title:"Error",message:"Please enter a search term!",position:"topRight"}):d(s).then(o=>{o.length===0&&a.warning({message:"No images found. Try again!!",backgroundColor:"#EF4040",messageColor:"#FFF",iconText:"⚠︎",iconColor:"#FFF",close:!0,balloon:!0,position:"topRight"}),y(o)}).catch(o=>{a.error({title:"Error",message:"Failed to fetch images. Try again later!",position:"topRight"})}).finally(()=>{t.reset(),n.style.display="none"})}
//# sourceMappingURL=index.js.map
