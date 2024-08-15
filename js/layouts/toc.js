import{initTocToggle}from"../tools/tocToggle.js";import{main}from"../main.js";export function initTOC(){const t={navItems:document.querySelectorAll(".post-toc-wrap .post-toc li"),updateActiveTOCLink(){if(!Array.isArray(t.sections))return;let e=t.sections.findIndex(e=>{return e&&e.getBoundingClientRect().top-100>0});if(e===-1){e=t.sections.length-1}else if(e>0){e--}this.activateTOCLink(e)},registerTOCScroll(){t.sections=[...document.querySelectorAll(".post-toc li a.nav-link")].map(e=>{const t=document.getElementById(decodeURI(e.getAttribute("href")).replace("#",""));return t})},activateTOCLink(e){const t=document.querySelectorAll(".post-toc li a.nav-link")[e];if(!t||t.classList.contains("active-current")){return}document.querySelectorAll(".post-toc .active").forEach(e=>{e.classList.remove("active","active-current")});t.classList.add("active","active-current");const o=document.querySelector(".toc-content-container");const n=o.getBoundingClientRect().top;const i=o.offsetHeight>window.innerHeight?(o.offsetHeight-window.innerHeight)/2:0;const c=t.getBoundingClientRect().top-n;const s=Math.max(document.documentElement.clientHeight,window.innerHeight||0);const r=c-s/2+t.offsetHeight/2-i;const l=o.scrollTop+r;o.scrollTo({top:l,behavior:"smooth"})},showTOCAside(){const e=()=>{const e=main.getStyleStatus();const t="isOpenPageAside";if(e&&e.hasOwnProperty(t)){initTocToggle().pageAsideHandleOfTOC(e[t])}else{initTocToggle().pageAsideHandleOfTOC(true)}};const t="init_open";if(theme.articles.toc.hasOwnProperty(t)){theme.articles.toc[t]?e():initTocToggle().pageAsideHandleOfTOC(false)}else{e()}}};if(t.navItems.length>0){t.showTOCAside();t.registerTOCScroll()}else{document.querySelectorAll(".toc-content-container, .toc-marker").forEach(e=>{e.remove()})}return t}try{swup.hooks.on("page:view",()=>{initTOC()})}catch(e){}document.addEventListener("DOMContentLoaded",initTOC);