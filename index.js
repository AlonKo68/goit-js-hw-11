import{i as a,S as m}from"./assets/vendor-5ObWk2rO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l=document.querySelector(".loader");function f(){l.style.display="flex"}function p(){l.style.display="none"}function g(o){const r="49502034-df263a01178fc9ef1a0cdcc0b";return f(),fetch(`https://pixabay.com/api/?key=${r}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(i=>{if(!i.ok)throw new Error("Failed to fetch images");return i.json()})}function d(o){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}const y=document.querySelector(".card-container");function b(o){const r=o.map(({webformatURL:n,largeImageURL:e,tags:t,likes:s,views:c,comments:u,downloads:h})=>`<li class="gallery-item">
            <a class="gallery-link" href="${e}">
                <img class="gallery-image" src="${n}" alt="${t}" width="360" height="200"/>
                <ul class="gallery-text-list">
                    <li class="gallery-text-item"><h3>Likes</h3><p>${s}</p></li>
                    <li class="gallery-text-item"><h3>Views</h3><p>${c}</p></li>
                    <li class="gallery-text-item"><h3>Comments</h3><p>${u}</p></li>
                    <li class="gallery-text-item"><h3>Downloads</h3><p>${h}</p></li>
                </ul>
            </a>
        </li>`).join("");y.innerHTML=r,new m(".card-container a",{captionsData:"alt",captionPosition:"bottom"}).refresh()}const x=document.querySelector(".form");x.addEventListener("submit",S);function S(o){o.preventDefault();const r=o.currentTarget,i=r.elements.query.value.trim();i===""?a.error({title:"Error",message:"Please enter a search term!",position:"topRight"}):g(i).then(n=>{n.hits.length===0&&a.warning({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#FFF",iconText:"⚠︎",iconColor:"#FFF",close:!0,balloon:!0,position:"topRight"}),b(n.hits)}).catch(d).finally(()=>{r.reset(),p()})}
//# sourceMappingURL=index.js.map
