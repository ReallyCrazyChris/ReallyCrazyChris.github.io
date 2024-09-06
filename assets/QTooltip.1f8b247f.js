import{r as M,L as Se,R as te,e as ce,M as z,w as W,o as He,a as q,g as Y,N as _,l as V,ab as ne,c as de,u as Ee,a3 as Pe,h as A,ac as Ce,m as w,Y as We,S as Me,T as $e,Q as ke}from"./index.42812f5f.js";import{i as G,h as Le,u as qe,s as Ae,a as Fe,b as De,c as ze,g as Qe}from"./format.28d27562.js";import{l as O,d as je}from"./QBtn.ca994b32.js";import{a as Ne}from"./render.8e3a34e1.js";let E=[],F=[];function fe(e){F=F.filter(t=>t!==e)}function Ie(e){fe(e),F.push(e)}function le(e){fe(e),F.length===0&&E.length!==0&&(E[E.length-1](),E=[])}function st(e){F.length===0?e():E.push(e)}function ut(e){E=E.filter(t=>t!==e)}const he={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},ct={...he,contextMenu:Boolean};function Oe({showing:e,avoidEmit:t,configureAnchorEl:l}){const{props:n,proxy:o,emit:s}=Y(),i=M(null);let r=null;function d(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const u={};l===void 0&&(Object.assign(u,{hide(a){o.hide(a)},toggle(a){o.toggle(a),a.qAnchorHandled=!0},toggleKey(a){Se(a,13)===!0&&u.toggle(a)},contextClick(a){o.hide(a),te(a),ce(()=>{o.show(a),a.qAnchorHandled=!0})},prevent:te,mobileTouch(a){if(u.mobileCleanup(a),d(a)!==!0)return;o.hide(a),i.value.classList.add("non-selectable");const c=a.target;z(u,"anchor",[[c,"touchmove","mobileCleanup","passive"],[c,"touchend","mobileCleanup","passive"],[c,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),r=setTimeout(()=>{r=null,o.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),r!==null&&(clearTimeout(r),r=null),e.value===!0&&a!==void 0&&G()}}),l=function(a=n.contextMenu){if(n.noParentEvent===!0||i.value===null)return;let c;a===!0?o.$q.platform.is.mobile===!0?c=[[i.value,"touchstart","mobileTouch","passive"]]:c=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:c=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],z(u,"anchor",c)});function h(){_(u,"anchor")}function p(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;l()}function b(){if(n.target===!1||n.target===""||o.$el.parentNode===null)i.value=null;else if(n.target===!0)p(o.$el.parentNode);else{let a=n.target;if(typeof n.target=="string")try{a=document.querySelector(n.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,l()):(i.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return W(()=>n.contextMenu,a=>{i.value!==null&&(h(),l(a))}),W(()=>n.target,()=>{i.value!==null&&h(),b()}),W(()=>n.noParentEvent,a=>{i.value!==null&&(a===!0?h():l())}),He(()=>{b(),t!==!0&&n.modelValue===!0&&i.value===null&&s("update:modelValue",!1)}),q(()=>{r!==null&&clearTimeout(r),h()}),{anchorEl:i,canShow:d,anchorEvents:u}}function Be(e,t){const l=M(null);let n;function o(r,d){const u=`${d!==void 0?"add":"remove"}EventListener`,h=d!==void 0?d:n;r!==window&&r[u]("scroll",h,V.passive),window[u]("scroll",h,V.passive),n=d}function s(){l.value!==null&&(o(l.value),l.value=null)}const i=W(()=>e.noParentEvent,()=>{l.value!==null&&(s(),t())});return q(i),{localScrollTarget:l,unconfigureScrollTarget:s,changeScrollEvent:o}}let Re=1,_e=document.body;function Ve(e,t){const l=document.createElement("div");if(l.id=t!==void 0?`q-portal--${t}--${Re++}`:e,ne.globalNodes!==void 0){const n=ne.globalNodes.class;n!==void 0&&(l.className=n)}return _e.appendChild(l),l}function Ge(e){e.remove()}const L=[];function dt(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return O(e)}else if(e.__qPortal===!0){const l=O(e);return l!==void 0&&l.$options.name==="QPopupProxy"?(e.hide(t),l):e}e=O(e)}while(e!=null)}const Ke=de({name:"QPortal",setup(e,{slots:t}){return()=>t.default()}});function Ye(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function Ue(e,t,l,n){const o=M(!1),s=M(!1);let i=null;const r={},d=n==="dialog"&&Ye(e);function u(p){if(p===!0){le(r),s.value=!0;return}s.value=!1,o.value===!1&&(d===!1&&i===null&&(i=Ve(!1,n)),o.value=!0,L.push(e.proxy),Ie(r))}function h(p){if(s.value=!1,p!==!0)return;le(r),o.value=!1;const b=L.indexOf(e.proxy);b!==-1&&L.splice(b,1),i!==null&&(Ge(i),i=null)}return Ee(()=>{h(!0)}),e.proxy.__qPortal=!0,Pe(e.proxy,"contentEl",()=>t.value),{showPortal:u,hidePortal:h,portalIsActive:o,portalIsAccessible:s,renderPortal:()=>d===!0?l():o.value===!0?[A(Ce,{to:i},A(Ke,l))]:void 0}}const B={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Xe(e,t=()=>{},l=()=>{}){return{transitionProps:w(()=>{const n=`q-transition--${e.transitionShow||t()}`,o=`q-transition--${e.transitionHide||l()}`;return{appear:!0,enterFromClass:`${n}-enter-from`,enterActiveClass:`${n}-enter-active`,enterToClass:`${n}-enter-to`,leaveFromClass:`${o}-leave-from`,leaveActiveClass:`${o}-leave-active`,leaveToClass:`${o}-leave-to`}}),transitionStyle:w(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Je(){let e;const t=Y();function l(){e=void 0}return We(l),q(l),{removeTick:l,registerTick(n){e=n,ce(()=>{e===n&&(je(t)===!1&&e(),e=void 0)})}}}const{notPassiveCapture:Q}=V,P=[];function j(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let l=L.length-1;for(;l>=0;){const n=L[l].$;if(n.type.name==="QTooltip"){l--;continue}if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;l--}for(let n=P.length-1;n>=0;n--){const o=P[n];if((o.anchorEl.value===null||o.anchorEl.value.contains(t)===!1)&&(t===document.body||o.innerRef.value!==null&&o.innerRef.value.contains(t)===!1))e.qClickOutside=!0,o.onClickOutside(e);else return}}function Ze(e){P.push(e),P.length===1&&(document.addEventListener("mousedown",j,Q),document.addEventListener("touchstart",j,Q))}function oe(e){const t=P.findIndex(l=>l===e);t!==-1&&(P.splice(t,1),P.length===0&&(document.removeEventListener("mousedown",j,Q),document.removeEventListener("touchstart",j,Q)))}let ie,ae;function re(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function et(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const K={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{K[`${e}#ltr`]=e,K[`${e}#rtl`]=e});function se(e,t){const l=e.split(" ");return{vertical:l[0],horizontal:K[`${l[1]}#${t===!0?"rtl":"ltr"}`]}}function tt(e,t){let{top:l,left:n,right:o,bottom:s,width:i,height:r}=e.getBoundingClientRect();return t!==void 0&&(l-=t[1],n-=t[0],s+=t[1],o+=t[0],i+=t[0],r+=t[1]),{top:l,bottom:s,height:r,left:n,right:o,width:i,middle:n+(o-n)/2,center:l+(s-l)/2}}function nt(e,t,l){let{top:n,left:o}=e.getBoundingClientRect();return n+=t.top,o+=t.left,l!==void 0&&(n+=l[1],o+=l[0]),{top:n,bottom:n+1,height:1,left:o,right:o+1,width:1,middle:o,center:n}}function lt(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function ue(e,t,l,n){return{top:e[l.vertical]-t[n.vertical],left:e[l.horizontal]-t[n.horizontal]}}function me(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{me(e,t+1)},10);return}const{targetEl:l,offset:n,anchorEl:o,anchorOrigin:s,selfOrigin:i,absoluteOffset:r,fit:d,cover:u,maxHeight:h,maxWidth:p}=e;if(Me.is.ios===!0&&window.visualViewport!==void 0){const C=document.body.style,{offsetLeft:g,offsetTop:x}=window.visualViewport;g!==ie&&(C.setProperty("--q-pe-left",g+"px"),ie=g),x!==ae&&(C.setProperty("--q-pe-top",x+"px"),ae=x)}const{scrollLeft:b,scrollTop:a}=l,c=r===void 0?tt(o,u===!0?[0,0]:n):nt(o,r,n);Object.assign(l.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:p||"100vw",maxHeight:h||"100vh",visibility:"visible"});const{offsetWidth:T,offsetHeight:$}=l,{elWidth:N,elHeight:D}=d===!0||u===!0?{elWidth:Math.max(c.width,T),elHeight:u===!0?Math.max(c.height,$):$}:{elWidth:T,elHeight:$};let v={maxWidth:p,maxHeight:h};(d===!0||u===!0)&&(v.minWidth=c.width+"px",u===!0&&(v.minHeight=c.height+"px")),Object.assign(l.style,v);const S=lt(N,D);let f=ue(c,S,s,i);if(r===void 0||n===void 0)R(f,c,S,s,i);else{const{top:C,left:g}=f;R(f,c,S,s,i);let x=!1;if(f.top!==C){x=!0;const y=2*n[1];c.center=c.top-=y,c.bottom-=y+2}if(f.left!==g){x=!0;const y=2*n[0];c.middle=c.left-=y,c.right-=y+2}x===!0&&(f=ue(c,S,s,i),R(f,c,S,s,i))}v={top:f.top+"px",left:f.left+"px"},f.maxHeight!==void 0&&(v.maxHeight=f.maxHeight+"px",c.height>f.maxHeight&&(v.minHeight=v.maxHeight)),f.maxWidth!==void 0&&(v.maxWidth=f.maxWidth+"px",c.width>f.maxWidth&&(v.minWidth=v.maxWidth)),Object.assign(l.style,v),l.scrollTop!==a&&(l.scrollTop=a),l.scrollLeft!==b&&(l.scrollLeft=b)}function R(e,t,l,n,o){const s=l.bottom,i=l.right,r=Le(),d=window.innerHeight-r,u=document.body.clientWidth;if(e.top<0||e.top+s>d)if(o.vertical==="center")e.top=t[n.vertical]>d/2?Math.max(0,d-s):0,e.maxHeight=Math.min(s,d);else if(t[n.vertical]>d/2){const h=Math.min(d,n.vertical==="center"?t.center:n.vertical===o.vertical?t.bottom:t.top);e.maxHeight=Math.min(s,h),e.top=Math.max(0,h-s)}else e.top=Math.max(0,n.vertical==="center"?t.center:n.vertical===o.vertical?t.top:t.bottom),e.maxHeight=Math.min(s,d-e.top);if(e.left<0||e.left+i>u)if(e.maxWidth=Math.min(i,u),o.horizontal==="middle")e.left=t[n.horizontal]>u/2?Math.max(0,u-i):0;else if(t[n.horizontal]>u/2){const h=Math.min(u,n.horizontal==="middle"?t.middle:n.horizontal===o.horizontal?t.right:t.left);e.maxWidth=Math.min(i,h),e.left=Math.max(0,h-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?t.middle:n.horizontal===o.horizontal?t.left:t.right),e.maxWidth=Math.min(i,u-e.left)}const ft={name:String};function ht(e){return w(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function mt(e={}){return(t,l,n)=>{t[l](A("input",{class:"hidden"+(n||""),...e.value}))}}function vt(e){return w(()=>e.name||e.for)}var gt=de({name:"QTooltip",inheritAttrs:!1,props:{...he,...qe,...B,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null},transitionShow:{...B.transitionShow,default:"jump-down"},transitionHide:{...B.transitionHide,default:"jump-up"},anchor:{type:String,default:"bottom middle",validator:re},self:{type:String,default:"top middle",validator:re},offset:{type:Array,default:()=>[14,14],validator:et},scrollTarget:Ae,delay:{type:Number,default:0},hideDelay:{type:Number,default:0},persistent:Boolean},emits:[...Fe],setup(e,{slots:t,emit:l,attrs:n}){let o,s;const i=Y(),{proxy:{$q:r}}=i,d=M(null),u=M(!1),h=w(()=>se(e.anchor,r.lang.rtl)),p=w(()=>se(e.self,r.lang.rtl)),b=w(()=>e.persistent!==!0),{registerTick:a,removeTick:c}=Je(),{registerTimeout:T}=De(),{transitionProps:$,transitionStyle:N}=Xe(e),{localScrollTarget:D,changeScrollEvent:v,unconfigureScrollTarget:S}=Be(e,Z),{anchorEl:f,canShow:C,anchorEvents:g}=Oe({showing:u,configureAnchorEl:ye}),{show:x,hide:y}=ze({showing:u,canShow:C,handleShow:ge,handleHide:pe,hideOnRouteChange:b,processOnMount:!0});Object.assign(g,{delayShow:be,delayHide:xe});const{showPortal:U,hidePortal:X,renderPortal:ve}=Ue(i,d,Te,"tooltip");if(r.platform.is.mobile===!0){const m={anchorEl:f,innerRef:d,onClickOutside(H){return y(H),H.target.classList.contains("q-dialog__backdrop")&&ke(H),!0}},I=w(()=>e.modelValue===null&&e.persistent!==!0&&u.value===!0);W(I,H=>{(H===!0?Ze:oe)(m)}),q(()=>{oe(m)})}function ge(m){U(),a(()=>{s=new MutationObserver(()=>k()),s.observe(d.value,{attributes:!1,childList:!0,characterData:!0,subtree:!0}),k(),Z()}),o===void 0&&(o=W(()=>r.screen.width+"|"+r.screen.height+"|"+e.self+"|"+e.anchor+"|"+r.lang.rtl,k)),T(()=>{U(!0),l("show",m)},e.transitionDuration)}function pe(m){c(),X(),J(),T(()=>{X(!0),l("hide",m)},e.transitionDuration)}function J(){s!==void 0&&(s.disconnect(),s=void 0),o!==void 0&&(o(),o=void 0),S(),_(g,"tooltipTemp")}function k(){me({targetEl:d.value,offset:e.offset,anchorEl:f.value,anchorOrigin:h.value,selfOrigin:p.value,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function be(m){if(r.platform.is.mobile===!0){G(),document.body.classList.add("non-selectable");const I=f.value,H=["touchmove","touchcancel","touchend","click"].map(ee=>[I,ee,"delayHide","passiveCapture"]);z(g,"tooltipTemp",H)}T(()=>{x(m)},e.delay)}function xe(m){r.platform.is.mobile===!0&&(_(g,"tooltipTemp"),G(),setTimeout(()=>{document.body.classList.remove("non-selectable")},10)),T(()=>{y(m)},e.hideDelay)}function ye(){if(e.noParentEvent===!0||f.value===null)return;const m=r.platform.is.mobile===!0?[[f.value,"touchstart","delayShow","passive"]]:[[f.value,"mouseenter","delayShow","passive"],[f.value,"mouseleave","delayHide","passive"]];z(g,"anchor",m)}function Z(){if(f.value!==null||e.scrollTarget!==void 0){D.value=Qe(f.value,e.scrollTarget);const m=e.noParentEvent===!0?k:y;v(D.value,m)}}function we(){return u.value===!0?A("div",{...n,ref:d,class:["q-tooltip q-tooltip--style q-position-engine no-pointer-events",n.class],style:[n.style,N.value],role:"tooltip"},Ne(t.default)):null}function Te(){return A($e,$.value,we)}return q(J),Object.assign(i.proxy,{updatePosition:k}),ve}});export{gt as Q,st as a,B as b,et as c,Je as d,Xe as e,Be as f,Oe as g,Ue as h,oe as i,Ze as j,dt as k,ft as l,vt as m,ht as n,mt as o,se as p,ut as r,me as s,ct as u,re as v};
