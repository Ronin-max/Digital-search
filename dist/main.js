(()=>{"use strict";const t=["#f1952c","#45f72e","#2ed9f7","#2e64f7","#f72ee6","#f72e49"];function e(t,e){return parseInt(Math.random()*(e-t)+t)}const n=document.getElementById("container");function i(){document.body.removeChild(this)}const s=new class{constructor(t=500){this.speed=t,this.n=1,this.timer=null}start(){this.timer||(this.timer=setInterval((()=>{!function(t,s){const r=document.createElement("span");if(r.innerText=t,num.innerText=t,function(t){if(t<2)return!1;for(let e=2;e<t;e++)if(t%e==0)return!1;return!0}(t)){const o=document.createElement("div");r.style.color=s,n.appendChild(r),o.style.color=s,o.className="item",o.innerText=t,document.body.appendChild(o),getComputedStyle(o).left,o.style.transform=`translate(${e(-200,200)}px,${e(-200,200)}px)`,o.style.opacity="0",o.ontransitionend=i}else n.appendChild(r)}(this.n++,t[e(0,t.length)])}),this.speed))}stop(){clearInterval(this.timer),this.timer=null}}(100);document.body.onclick=function(){s.timer?s.stop():s.start()}})();