"use strict";(self["webpackChunkoculo"]=self["webpackChunkoculo"]||[]).push([[980],{980:function(e,t,n){n.d(t,{c:function(){return y}});var o=n(587);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */let i;const a=e=>(e.forEach((e=>{for(const t in e)if(e.hasOwnProperty(t)){const n=e[t];if("easing"===t){const o="animation-timing-function";e[o]=n,delete e[t]}else{const o=r(t);o!==t&&(e[o]=n,delete e[t])}}})),e),r=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=e=>{if(void 0===i){const t=void 0!==e.style.animationName,n=void 0!==e.style.webkitAnimationName;i=!t&&n?"-webkit-":""}return i},f=(e,t,n)=>{const o=t.startsWith("animation")?s(e):"";e.style.setProperty(o+t,n)},l=(e,t)=>{const n=t.startsWith("animation")?s(e):"";e.style.removeProperty(n+t)},c=(e,t)=>{let n;const o={passive:!0},i=()=>{n&&n()},a=n=>{e===n.target&&(i(),t(n))};return e&&(e.addEventListener("webkitAnimationEnd",a,o),e.addEventListener("animationend",a,o),n=()=>{e.removeEventListener("webkitAnimationEnd",a,o),e.removeEventListener("animationend",a,o)}),i},d=(e=[])=>e.map((e=>{const t=e.offset,n=[];for(const o in e)e.hasOwnProperty(o)&&"offset"!==o&&n.push(`${o}: ${e[o]};`);return`${100*t}% { ${n.join(" ")} }`})).join(" "),m=[],h=e=>{let t=m.indexOf(e);return t<0&&(t=m.push(e)-1),`ion-animation-${t}`},u=e=>{const t=e.getRootNode();return t.head||t},p=(e,t,n)=>{const o=u(n),i=s(n),a=o.querySelector("#"+e);if(a)return a;const r=(n.ownerDocument||document).createElement("style");return r.id=e,r.textContent=`@${i}keyframes ${e} { ${t} } @${i}keyframes ${e}-alt { ${t} }`,o.appendChild(r),r},g=(e=[],t)=>{if(void 0!==t){const n=Array.isArray(t)?t:[t];return[...e,...n]}return e},y=e=>{let t,n,i,r,s,m,u,y,E,v,$,A,b,C=[],w=[],k=[],T=!1,S={},D=[],L=[],P={},F=0,N=!1,O=!1,R=!0,W=!1,K=!0;const x=e,I=[],j=[],M=[],q=[],z=[],Z=[],B=[],G=[],H=[],J=[],Q="function"===typeof AnimationEffect||"function"===typeof window.AnimationEffect,U="function"===typeof Element&&"function"===typeof Element.prototype.animate&&Q,V=100,X=()=>J,Y=e=>(q.forEach((t=>{t.destroy(e)})),_(e),M.length=0,q.length=0,C.length=0,ne(),T=!1,K=!0,b),_=e=>{oe(),e&&ie()},ee=()=>{N=!1,O=!1,K=!0,E=void 0,v=void 0,$=void 0,F=0,W=!1,R=!0},te=(e,t)=>{const n=t&&t.oneTimeCallback?j:I;return n.push({c:e,o:t}),b},ne=()=>(I.length=0,j.length=0,b),oe=()=>{if(U)J.forEach((e=>{e.cancel()})),J.length=0;else{const e=M.slice();(0,o.r)((()=>{e.forEach((e=>{l(e,"animation-name"),l(e,"animation-duration"),l(e,"animation-timing-function"),l(e,"animation-iteration-count"),l(e,"animation-delay"),l(e,"animation-play-state"),l(e,"animation-fill-mode"),l(e,"animation-direction")}))}))}},ie=()=>{z.forEach((e=>{e&&e.parentNode&&e.parentNode.removeChild(e)})),z.length=0},ae=e=>(Z.push(e),b),re=e=>(B.push(e),b),se=e=>(G.push(e),b),fe=e=>(H.push(e),b),le=e=>(w=g(w,e),b),ce=e=>(k=g(k,e),b),de=(e={})=>(S=e,b),me=(e=[])=>{for(const t of e)S[t]="";return b},he=e=>(D=g(D,e),b),ue=e=>(L=g(L,e),b),pe=(e={})=>(P=e,b),ge=(e=[])=>{for(const t of e)P[t]="";return b},ye=()=>void 0!==s?s:u?u.getFill():"both",Ee=()=>void 0!==E?E:void 0!==m?m:u?u.getDirection():"normal",ve=()=>N?"linear":void 0!==i?i:u?u.getEasing():"linear",$e=()=>O?0:void 0!==v?v:void 0!==n?n:u?u.getDuration():0,Ae=()=>void 0!==r?r:u?u.getIterations():1,be=()=>void 0!==$?$:void 0!==t?t:u?u.getDelay():0,Ce=()=>C,we=e=>(m=e,Be(!0),b),ke=e=>(s=e,Be(!0),b),Te=e=>(t=e,Be(!0),b),Se=e=>(i=e,Be(!0),b),De=e=>(U||0!==e||(e=1),n=e,Be(!0),b),Le=e=>(r=e,Be(!0),b),Pe=e=>(u=e,b),Fe=e=>{if(null!=e)if(1===e.nodeType)M.push(e);else if(e.length>=0)for(let t=0;t<e.length;t++)M.push(e[t]);else console.error("Invalid addElement value");return b},Ne=e=>{if(null!=e)if(Array.isArray(e))for(const t of e)t.parent(b),q.push(t);else e.parent(b),q.push(e);return b},Oe=e=>{const t=C!==e;return C=e,t&&Re(C),b},Re=e=>{U?X().forEach((t=>{if(t.effect.setKeyframes)t.effect.setKeyframes(e);else{const n=new KeyframeEffect(t.effect.target,e,t.effect.getTiming());t.effect=n}})):Ie()},We=()=>{Z.forEach((e=>e())),B.forEach((e=>e()));const e=w,t=k,n=S;M.forEach((o=>{const i=o.classList;e.forEach((e=>i.add(e))),t.forEach((e=>i.remove(e)));for(const e in n)n.hasOwnProperty(e)&&f(o,e,n[e])}))},Ke=()=>{Xe(),G.forEach((e=>e())),H.forEach((e=>e()));const e=R?1:0,t=D,n=L,o=P;M.forEach((e=>{const i=e.classList;t.forEach((e=>i.add(e))),n.forEach((e=>i.remove(e)));for(const t in o)o.hasOwnProperty(t)&&f(e,t,o[t])})),I.forEach((t=>t.c(e,b))),j.forEach((t=>t.c(e,b))),j.length=0,K=!0,R&&(W=!0),R=!0},xe=()=>{0!==F&&(F--,0===F&&(Ke(),u&&u.animationFinish()))},Ie=(t=!0)=>{ie();const n=a(C);M.forEach((i=>{if(n.length>0){const a=d(n);A=void 0!==e?e:h(a);const r=p(A,a,i);z.push(r),f(i,"animation-duration",`${$e()}ms`),f(i,"animation-timing-function",ve()),f(i,"animation-delay",`${be()}ms`),f(i,"animation-fill-mode",ye()),f(i,"animation-direction",Ee());const s=Ae()===1/0?"infinite":Ae().toString();f(i,"animation-iteration-count",s),f(i,"animation-play-state","paused"),t&&f(i,"animation-name",`${r.id}-alt`),(0,o.r)((()=>{f(i,"animation-name",r.id||null)}))}}))},je=()=>{M.forEach((e=>{const t=e.animate(C,{id:x,delay:be(),duration:$e(),easing:ve(),iterations:Ae(),fill:ye(),direction:Ee()});t.pause(),J.push(t)})),J.length>0&&(J[0].onfinish=()=>{xe()})},Me=(e=!0)=>{We(),C.length>0&&(U?je():Ie(e)),T=!0},qe=e=>{if(e=Math.min(Math.max(e,0),.9999),U)J.forEach((t=>{t.currentTime=t.effect.getComputedTiming().delay+$e()*e,t.pause()}));else{const t=`-${$e()*e}ms`;M.forEach((e=>{C.length>0&&(f(e,"animation-delay",t),f(e,"animation-play-state","paused"))}))}},ze=e=>{J.forEach((e=>{e.effect.updateTiming({delay:be(),duration:$e(),easing:ve(),iterations:Ae(),fill:ye(),direction:Ee()})})),void 0!==e&&qe(e)},Ze=(e=!0,t)=>{(0,o.r)((()=>{M.forEach((n=>{f(n,"animation-name",A||null),f(n,"animation-duration",`${$e()}ms`),f(n,"animation-timing-function",ve()),f(n,"animation-delay",void 0!==t?`-${t*$e()}ms`:`${be()}ms`),f(n,"animation-fill-mode",ye()||null),f(n,"animation-direction",Ee()||null);const i=Ae()===1/0?"infinite":Ae().toString();f(n,"animation-iteration-count",i),e&&f(n,"animation-name",`${A}-alt`),(0,o.r)((()=>{f(n,"animation-name",A||null)}))}))}))},Be=(e=!1,t=!0,n)=>(e&&q.forEach((o=>{o.update(e,t,n)})),U?ze(n):Ze(t,n),b),Ge=(e=!1,t)=>(q.forEach((n=>{n.progressStart(e,t)})),Qe(),N=e,T||Me(),Be(!1,!0,t),b),He=e=>(q.forEach((t=>{t.progressStep(e)})),qe(e),b),Je=(e,t,n)=>(N=!1,q.forEach((o=>{o.progressEnd(e,t,n)})),void 0!==n&&(v=n),W=!1,R=!0,0===e?(E="reverse"===Ee()?"normal":"reverse","reverse"===E&&(R=!1),U?(Be(),qe(1-t)):($=(1-t)*$e()*-1,Be(!1,!1))):1===e&&(U?(Be(),qe(t)):($=t*$e()*-1,Be(!1,!1))),void 0!==e&&(te((()=>{v=void 0,E=void 0,$=void 0}),{oneTimeCallback:!0}),u||nt()),b),Qe=()=>{T&&(U?J.forEach((e=>{e.pause()})):M.forEach((e=>{f(e,"animation-play-state","paused")})))},Ue=()=>(q.forEach((e=>{e.pause()})),Qe(),b),Ve=()=>{y=void 0,xe()},Xe=()=>{y&&clearTimeout(y)},Ye=()=>{if(Xe(),(0,o.r)((()=>{M.forEach((e=>{C.length>0&&f(e,"animation-play-state","running")}))})),0===C.length||0===M.length)xe();else{const e=be()||0,t=$e()||0,n=Ae()||1;isFinite(n)&&(y=setTimeout(Ve,e+t*n+V)),c(M[0],(()=>{Xe(),(0,o.r)((()=>{_e(),(0,o.r)(xe)}))}))}},_e=()=>{M.forEach((e=>{l(e,"animation-duration"),l(e,"animation-delay"),l(e,"animation-play-state")}))},et=()=>{J.forEach((e=>{e.play()})),0!==C.length&&0!==M.length||xe()},tt=()=>{U?(qe(0),ze()):Ze()},nt=e=>new Promise((t=>{e&&e.sync&&(O=!0,te((()=>O=!1),{oneTimeCallback:!0})),T||Me(),W&&(tt(),W=!1),K&&(F=q.length+1,K=!1),te((()=>t()),{oneTimeCallback:!0}),q.forEach((e=>{e.play()})),U?et():Ye()})),ot=()=>{q.forEach((e=>{e.stop()})),T&&(oe(),T=!1),ee()},it=(e,t)=>{const n=C[0];return void 0===n||void 0!==n.offset&&0!==n.offset?C=[{offset:0,[e]:t},...C]:n[e]=t,b},at=(e,t)=>{const n=C[C.length-1];return void 0===n||void 0!==n.offset&&1!==n.offset?C=[...C,{offset:1,[e]:t}]:n[e]=t,b},rt=(e,t,n)=>it(e,t).to(e,n);return b={parentAnimation:u,elements:M,childAnimations:q,id:x,animationFinish:xe,from:it,to:at,fromTo:rt,parent:Pe,play:nt,pause:Ue,stop:ot,destroy:Y,keyframes:Oe,addAnimation:Ne,addElement:Fe,update:Be,fill:ke,direction:we,iterations:Le,duration:De,easing:Se,delay:Te,getWebAnimations:X,getKeyframes:Ce,getFill:ye,getDirection:Ee,getDelay:be,getIterations:Ae,getEasing:ve,getDuration:$e,afterAddRead:se,afterAddWrite:fe,afterClearStyles:ge,afterStyles:pe,afterRemoveClass:ue,afterAddClass:he,beforeAddRead:ae,beforeAddWrite:re,beforeClearStyles:me,beforeStyles:de,beforeRemoveClass:ce,beforeAddClass:le,onFinish:te,progressStart:Ge,progressStep:He,progressEnd:Je}}}}]);
//# sourceMappingURL=980.6a567266.js.map