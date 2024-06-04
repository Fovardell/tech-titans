import{S as F,a as g,i as q,A as P}from"./assets/vendor-9ebebf38.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerPolicy&&(t.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?t.credentials="include":i.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(i){if(i.ep)return;i.ep=!0;const t=n(i);fetch(i.href,t)}})();const J=async function(){try{const e=await g.get("https://portfolio-js.b.goit.study/api/reviews/");if(e.status!==200)throw new Error(e.status);return e.data}catch(e){throw new Error(`Fetching reviews failed: ${e.message}`)}},h=document.querySelector(".swiper-wrapper");J().then(e=>{const s=e.map(({review:n,avatar_url:a,author:i})=>`
            <li class="swiper-slide">
                <p class="swiper-text">${n}</p>
                <div class="swiper-img-title">
                    <img
                        class="swiper-img"
                        src="${a}"
                        alt="author photo"/>
                    <h3 class="swiper-title">${i}</h3>
                </div>
                </li>`).join("");h.insertAdjacentHTML("beforeend",s)}).catch(e=>{h.insertAdjacentHTML("beforeend",'<p class="slider-error-text">Not found</p>'),R("Error fetching reviews")});function R(e){const s=document.getElementById("notification");s.textContent=e,setTimeout(()=>{s.style.display="none",s.style.margin="0 auto"},1e4)}J();new F(".swiper",{breakpoints:{320:{slidesPerView:1,spaceBetween:10},1279:{slidesPerView:2,spaceBetween:32}},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoHeight:!0});g.defaults.baseURL="https://portfolio-js.b.goit.study/api";q.settings({position:"center",transitionIn:"bounceInLeft",transitionOut:"fadeOutLeft",timeout:3e3});const c=document.querySelector(".contacts-email"),M=document.querySelector(".form"),u=document.querySelector(".invalid-email"),m=document.querySelector(".invalid-text"),o=document.querySelector(".contacts-message"),B=document.querySelector(".modal-window"),A=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,G=document.querySelector(".modal-header"),O=document.querySelector(".modal-text"),I=function(){return A.test(c.value)},H=function(e){e.preventDefault();const s=e.target.user_email.value.trim(),n=e.target.user_message.value.trim();if(I()){if(n.length<10){m.classList.add("invalid");return}}else{c.classList.add("invalid"),u.classList.add("invalid");return}c.classList.remove("valid"),o.classList.remove("valid"),c.classList.remove("invalid"),u.classList.remove("invalid"),m.classList.remove("invalid"),g.post("/requests",{email:s,comment:n||"I`m interested in cooperation!"}).then(a=>{B.classList.remove("is-hidden"),G.innerHTML=`${a.data.title}`,O.innerHTML=`${a.data.message}`,M.reset()}).catch(a=>{q.error({title:a.code,message:a.message})})};o.addEventListener("input",e=>{if(e.target.value.trim().length<10){o.classList.remove("valid");return}o.classList.remove("invalid"),m.classList.remove("invalid"),o.classList.add("valid")});c.addEventListener("input",e=>{if(!A.test(e.target.value)){c.classList.remove("valid");return}c.classList.add("valid"),c.classList.remove("invalid"),u.classList.remove("invalid")});M.addEventListener("submit",H);const d=document.querySelector(".modal-window"),V=document.querySelector(".close");V.addEventListener("click",()=>{d.classList.add("is-hidden")});window.addEventListener("click",e=>{e.target===d&&d.classList.add("is-hidden")});window.addEventListener("keydown",e=>{e.key==="Escape"&&d.classList.add("is-hidden")});new P(".accordion-container",{beforeOpen:function(e){e.previousElementSibling&&(e.previousElementSibling.style.borderBottom="none")},beforeClose:function(e){e.previousElementSibling&&(e.previousElementSibling.style.borderBottom="1px solid #ccc")}});(()=>{const e=document.querySelector(".js-menu-container"),s=document.querySelector(".js-open-menu"),n=document.querySelectorAll('a[href^="#"]'),a=()=>{const t=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!t),s.classList.toggle("burger-active"),e.classList.toggle("is-open"),document.body.classList.toggle("modal-open")};s.addEventListener("click",a),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(e.classList.remove("is-open"),s.setAttribute("aria-expanded",!1))});for(let t of n)t.addEventListener("click",function(r){r.preventDefault();const T=t.getAttribute("href");document.querySelector(T).scrollIntoView({behavior:"smooth",block:"start"})});document.querySelectorAll(".menu-box-link").forEach(t=>{t.addEventListener("click",a)})})();const v="/tech-titans/assets/wallet-5810cc52.jpg",C="/tech-titans/assets/wallet-2x-379d8de8.jpg",f="/tech-titans/assets/green-6eaa8875.jpg",_="/tech-titans/assets/green-2x-bec27449.jpg",w="/tech-titans/assets/english-e0576bd7.jpg",z="/tech-titans/assets/english-2x-fb79b545.jpg",b="/tech-titans/assets/power-676ecb00.jpg",D="/tech-titans/assets/power-2x-c9d1ecc4.jpg",y="/tech-titans/assets/mimino-b8ef22f2.jpg",Z="/tech-titans/assets/mimino-2x-b7c901f2.jpg",L="/tech-titans/assets/vyshyvanka-cadf2c0c.jpg",K="/tech-titans/assets/vyshyvanka-2x-aff37560.jpg",x="/tech-titans/assets/chego-21d18a69.jpg",U="/tech-titans/assets/chego-2x-72392c33.jpg",S="/tech-titans/assets/energy-37e7b7ff.jpg",Q="/tech-titans/assets/energy-2x-2485cf3c.jpg",j="/tech-titans/assets/fruit-3c99fabe.jpg",W="/tech-titans/assets/fruit-2x-4ae4ee3e.jpg",k="/tech-titans/assets/starlight-1e5fb8ac.jpg",X="/tech-titans/assets/starlight-2x-73d6d9f4.jpg",Y="/tech-titans/assets/sprite-ade9423b.svg",$=[{img:{src:v,srcset:`${v} 1x, ${C} 2x`,alt:"wallet webservice"},stack:"React, JavaScript, Node JS, Git",title:"wallet webservice",link:"https://github.com/Fovardell/tech-titans"},{img:{src:`${f}`,srcset:`${f} 1x, ${_} 2x`,alt:"green harvest webservice"},stack:"React, JavaScript, Node JS, Git",title:"green harvest webservice",link:"https://github.com/Fovardell/tech-titans"},{img:{src:`${w}`,srcset:`${w} 1x, ${z} 2x`,alt:"English excellence webservice"},stack:"React, JavaScript, Node JS, Git",title:"English excellence website",link:"https://github.com/Fovardell/tech-titans"},{img:{src:`${b}`,srcset:`${b} 1x, ${D} 2x`,alt:"power pulse webservice"},stack:"React, JavaScript, Node JS, Git",title:"power pulse webservice",link:"https://github.com/Fovardell/tech-titans"},{img:{src:`${y}`,srcset:`${y} 1x, ${Z} 2x`,alt:"mimino website"},stack:"React, JavaScript, Node JS, Git",title:"mimino website",link:"https://github.com/Fovardell/tech-titans"},{img:{src:`${L}`,srcset:`${L} 1x, ${K} 2x`,alt:"vyshyvanka vibes Landing Page"},stack:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes Landing Page",link:"https://github.com/Fovardell/tech-titans"},{img:{src:`${x}`,srcset:`${x} 1x, ${U} 2x`,alt:"chego jewelry website"},stack:"React, JavaScript, Node JS, Git",title:"chego jewelry website",link:"https://github.com/Fovardell/tech-titans"},{img:{src:`${S}`,srcset:`${S} 1x, ${Q} 2x`,alt:"energy flow webservice"},stack:"React, JavaScript, Node JS, Git",title:"energy flow webservice",link:"https://github.com/Fovardell/tech-titans"},{img:{src:`${j}`,srcset:`${j} 1x, ${W} 2x`,alt:"fruitbox online store"},stack:"React, JavaScript, Node JS, Git",title:"fruitbox online store",link:"https://github.com/Fovardell/tech-titans"},{img:{src:`${k}`,srcset:`${k} 1x, ${X} 2x`,alt:"starlight studio landing page"},stack:"React, JavaScript, Node JS, Git",title:"starlight studio landing page",link:"https://github.com/Fovardell/tech-titans"}];function ee(e){return`<li class="my-projects-card">
	<div class="projects-card-img-container">
        <img class="my-projects-card-img" srcset="${e.img.srcset}" src="${e.img.src}" alt="${e.img.alt}" />
    </div>
    <p class="my-projects-card-stack">${e.stack}</p>
    <div class="projects-card-container">
      <h3 class="projects-card-title">${e.title}</h3>
      <a class="projects-card-link" href="${e.link}" target="_blank">
        <span class="projects-card-link-span">VISIT</span>
        <svg class="projects-card-link-svg" width="24" height="24">
          <use href="${Y}#MyProjectVector"></use>
        </svg>
      </a>
    </div>
  </li>`}const E=3;let l=0;const p={projectsList:document.querySelector(".projects-list"),loadMoreBtn:document.querySelector(".projects-load")},N=function(){const s=$.slice(l,l+E).map(ee).join("");p.projectsList.insertAdjacentHTML("beforeend",s);const n=document.querySelectorAll(".my-projects-card:not(.loaded)");setTimeout(function(){n.forEach(function(a){a.classList.add("loaded")})},10),l+=E,l>=$.length&&(p.loadMoreBtn.style.display="none")};p.loadMoreBtn.addEventListener("click",N);N();
//# sourceMappingURL=commonHelpers.js.map
