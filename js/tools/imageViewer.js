export default function imageViewer(){let n=false;let r=1;let a=false;let l=false;let o=0;let i=0;let c=0;let d=0;let f=0;const t=document.querySelector(".image-viewer-container");const u=t.querySelector("img");const s=e=>{document.body.style.overflow=e?"hidden":"auto";e?t.classList.add("active"):t.classList.remove("active")};const e=e=>{e.preventDefault();const t=u.getBoundingClientRect();const s=e.clientX-t.left;const n=e.clientY-t.top;const a=s-t.width/2;const l=n-t.height/2;const o=r;r+=e.deltaY*-.001;r=Math.min(Math.max(.8,r),4);if(o<r){d-=a*(r-o);f-=l*(r-o)}else{d=0;f=0}u.style.transform=`translate(${d}px, ${f}px) scale(${r})`};const m=e=>{e.preventDefault();a=true;i=e.clientX;c=e.clientY;u.style.cursor="grabbing"};let v=0;const p=100;const y=e=>{if(a){const t=(new Date).getTime();if(t-v<p){return}v=t;const s=e.clientX-i;const n=e.clientY-c;d+=s;f+=n;i=e.clientX;c=e.clientY;u.style.transform=`translate(${d}px, ${f}px) scale(${r})`;l=true}};const g=e=>{if(a){e.stopPropagation()}a=false;u.style.cursor="grab"};u.addEventListener("wheel",e,{passive:false});u.addEventListener("mousedown",m,{passive:false});u.addEventListener("mousemove",y,{passive:false});u.addEventListener("mouseup",g,{passive:false});u.addEventListener("mouseleave",g,{passive:false});t.addEventListener("click",e=>{if(!l){n=false;s(n);r=1;d=0;f=0;u.style.transform=`translate(${d}px, ${f}px) scale(${r})`}l=false});const h=document.querySelectorAll(".markdown-body img, .masonry-item img, #shuoshuo-content img");const w=e=>{if(e.key==="Escape"&&n){n=false;s(n);r=1;d=0;f=0;u.style.transform=`translate(${d}px, ${f}px) scale(${r})`;document.removeEventListener("keydown",w)}};h.forEach((e,t)=>{e.addEventListener("click",()=>{o=t;n=true;s(n);u.src=e.src;document.addEventListener("keydown",w)})});const L=e=>{if(!n)return;if(e.key==="ArrowUp"||e.key==="ArrowLeft"){o=(o-1+h.length)%h.length}else if(e.key==="ArrowDown"||e.key==="ArrowRight"){o=(o+1)%h.length}else{return}const t=h[o];let s=t.src;if(t.hasAttribute("lazyload")){s=t.getAttribute("data-src");t.src=s;t.removeAttribute("lazyload")}u.src=s};document.addEventListener("keydown",L);if(!h.length&&t){t.parentNode.removeChild(t)}}