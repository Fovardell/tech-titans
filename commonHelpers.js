import{a as f,i as y}from"./assets/vendor-1c96f17f.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function c(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=c(i);fetch(i.href,s)}})();f.defaults.baseURL="https://portfolio-js.b.goit.study/api";y.settings({position:"center",transitionIn:"bounceInLeft",transitionOut:"fadeOutLeft",timeout:3e3});const o=document.querySelector(".contacts-email"),L=document.querySelector(".form"),m=document.querySelector(".invalid-email"),g=document.querySelector(".invalid-text"),l=document.querySelector(".contacts-message"),x=document.querySelector(".modal-window"),j=/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,k=document.querySelector(".modal-header"),S=document.querySelector(".modal-text"),$=function(){return j.test(o.value)},E=function(t){t.preventDefault();const a=t.target.user_email.value.trim(),c=t.target.user_message.value.trim();if($()){if(c.length<10){g.classList.add("invalid");return}}else{o.classList.add("invalid"),m.classList.add("invalid");return}o.classList.remove("valid"),l.classList.remove("valid"),o.classList.remove("invalid"),m.classList.remove("invalid"),g.classList.remove("invalid"),f.post("/requests",{email:a,comment:c||"I`m interested in cooperation!"}).then(r=>{x.classList.remove("is-hidden"),k.innerHTML=`${r.data.title}`,S.innerHTML=`${r.data.message}`,L.reset()}).catch(r=>{y.error({title:r.code,message:r.message})})};l.addEventListener("input",t=>{if(t.target.value.trim().length<10){l.classList.remove("valid");return}l.classList.remove("invalid"),g.classList.remove("invalid"),l.classList.add("valid")});o.addEventListener("input",t=>{if(!j.test(t.target.value)){o.classList.remove("valid");return}o.classList.add("valid"),o.classList.remove("invalid"),m.classList.remove("invalid")});L.addEventListener("submit",E);const u=document.querySelector(".modal-window"),q=document.querySelector(".close");q.addEventListener("click",()=>{u.classList.add("is-hidden")});window.addEventListener("click",t=>{t.target===u&&u.classList.add("is-hidden")});window.addEventListener("keydown",t=>{t.key==="Escape"&&u.classList.add("is-hidden")});(()=>{const t=document.querySelector(".js-menu-container"),a=document.querySelector(".js-open-menu"),c=document.querySelectorAll('a[href^="#"]'),r=()=>{const s=a.getAttribute("aria-expanded")==="true"||!1;a.setAttribute("aria-expanded",!s),a.classList.toggle("burger-active"),t.classList.toggle("is-open"),document.body.classList.toggle("modal-open")};a.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",s=>{s.matches&&(t.classList.remove("is-open"),a.setAttribute("aria-expanded",!1))});for(let s of c)s.addEventListener("click",function(n){n.preventDefault();const w=s.getAttribute("href");document.querySelector(w).scrollIntoView({behavior:"smooth",block:"start"})});document.querySelectorAll(".menu-box-link").forEach(s=>{s.addEventListener("click",r)})})();const e="https://github.com/Fovardell/tech-titans/blob/main/src/img/my-projects",v=[{img:{src:`${e}/wallet.jpg`,srcset:`${e}/wallet.jpg 1x, ${e}/wallet-2x.jpg 2x`,alt:"wallet webservice"},stack:"React, JavaScript, Node JS, Git",title:"wallet webservice",link:"https://github.com/Fovardell/tech-titans"},{img:{src:`${e}/green.jpg`,srcset:`${e}/green.jpg 1x, ${e}/green-2x.jpg 2x`,alt:"green harvest webservice"},stack:"React, JavaScript, Node JS, Git",title:"green harvest webservice",link:"https://github.com/Fovardell/tech-titans"},{img:{src:`${e}/english.jpg`,srcset:`${e}/english.jpg 1x, ${e}/english-2x.jpg 2x`,alt:"English excellence webservice"},stack:"React, JavaScript, Node JS, Git",title:"English excellence webservice",link:"https://github.com/Fovardell/tech-titans"},{img:{src:`${e}/power.jpg`,srcset:`${e}/power.jpg 1x, ${e}/power-2x.jpg 2x`,alt:"power pulse webservice"},stack:"React, JavaScript, Node JS, Git",title:"power pulse webservice",link:"https://github.com/Fovardell/tech-titans"},{img:{src:`${e}/mimino.jpg`,srcset:`${e}/mimino.jpg 1x, ${e}/mimino-2x.jpg 2x`,alt:"mimino website"},stack:"React, JavaScript, Node JS, Git",title:"mimino website",link:"https://github.com/Fovardell/tech-titans"},{img:{src:`${e}/vyshyvanka.jpg`,srcset:`${e}/vyshyvanka.jpg 1x, ${e}/vyshyvanka-2x.jpg 2x`,alt:"vyshyvanka vibes Landing Page"},stack:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes Landing Page",link:"https://github.com/Fovardell/tech-titans"},{img:{src:`${e}/chego.jpg`,srcset:`${e}/chego.jpg 1x, ${e}/energy-2x.jpg 2x`,alt:"chego jewelry website"},stack:"React, JavaScript, Node JS, Git",title:"chego jewelry website",link:"https://github.com/Fovardell/tech-titans"},{img:{src:`${e}/energy.jpg`,srcset:`${e}/energy.jpg 1x, ${e}/energy-2x.jpg 2x`,alt:"energy flow webservice"},stack:"React, JavaScript, Node JS, Git",title:"energy flow webservice",link:"https://github.com/Fovardell/tech-titans"},{img:{src:`${e}/fruit.jpg`,srcset:`${e}/fruit.jpg 1x, ${e}/fruit-2x.jpg 2x`,alt:"fruitbox online store"},stack:"React, JavaScript, Node JS, Git",title:"fruitbox online store",link:"https://github.com/Fovardell/tech-titans"},{img:{src:`${e}/starlight.jpg`,srcset:`${e}/starlight.jpg 1x, ${e}/starlight-2x.jpg 2x`,alt:"starlight studio landing page"},stack:"React, JavaScript, Node JS, Git",title:"starlight studio landing page",link:"https://github.com/Fovardell/tech-titans"}],h=3;let d=0;const p={projectsList:document.querySelector(".projects-list"),loadMoreBtn:document.querySelector(".projects-load")};function J(t){return`<li class="my-projects-card">
    <img class="my-projects-card-img" type="jpg" srcset="${t.img.srcset}" src="${t.img.src}" alt="${t.img.alt}" />
    <p class="my-projects-card-stack">${t.stack}</p>
    <div class="projects-card-container">
      <h3 class="projects-card-title">${t.title}</h3>
      <a class="projects-card-link" href="${t.link}" target="_blank">
        <span class="projects-card-link-span">VISIT</span>
        <svg class="projects-card-link-svg" width="24" height="24">
          <use href="/img/svg/spriteForEachOpt.svg#MyProjectVector"></use>
        </svg>
      </a>
    </div>
  </li>`}function b(){const a=v.slice(d,d+h).map(J).join("");p.projectsList.insertAdjacentHTML("beforeend",a);const c=document.querySelectorAll(".my-projects-card:not(.loaded)");setTimeout(function(){c.forEach(function(r){r.classList.add("loaded")})},10),d+=h,d>=v.length&&(p.loadMoreBtn.style.display="none")}p.loadMoreBtn.addEventListener("click",b);b();
//# sourceMappingURL=commonHelpers.js.map
