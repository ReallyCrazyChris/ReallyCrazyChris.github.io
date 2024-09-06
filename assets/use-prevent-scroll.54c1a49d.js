import{c as L,m as a,h as p,r as E,L as M,Q as H,g as Y,a as j,W as S,S as d,l as s,X as z}from"./index.42812f5f.js";import{a as I,h as F}from"./render.8e3a34e1.js";import{u as D,a as N}from"./use-dark.de2bf996.js";import{u as O,b as U}from"./QBtn.ca994b32.js";import{f as G,e as J,j as Z}from"./format.28d27562.js";var se=L({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const o=a(()=>parseInt(e.lines,10)),l=a(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),n=a(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>p("div",{style:n.value,class:l.value},I(t.default))}}),ue=L({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const o=a(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>p("div",{class:o.value},I(t.default))}}),ce=L({name:"QItem",props:{...D,...O,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:o}){const{proxy:{$q:l}}=Y(),n=N(e,l),{hasLink:c,linkAttrs:r,linkClass:Q,linkTag:W,navigateOnClick:V}=U(),b=E(null),w=E(null),k=a(()=>e.clickable===!0||c.value===!0||e.tag==="label"),v=a(()=>e.disable!==!0&&k.value===!0),$=a(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(n.value===!0?" q-item--dark":"")+(c.value===!0&&e.active===null?Q.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(v.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),A=a(()=>{if(e.insetLevel===void 0)return null;const i=l.lang.rtl===!0?"Right":"Left";return{["padding"+i]:16+e.insetLevel*56+"px"}});function K(i){v.value===!0&&(w.value!==null&&(i.qKeyEvent!==!0&&document.activeElement===b.value?w.value.focus():document.activeElement===w.value&&b.value.focus()),V(i))}function R(i){if(v.value===!0&&M(i,[13,32])===!0){H(i),i.qKeyEvent=!0;const _=new MouseEvent("click",i);_.qKeyEvent=!0,b.value.dispatchEvent(_)}o("keyup",i)}function X(){const i=F(t.default,[]);return v.value===!0&&i.unshift(p("div",{class:"q-focus-helper",tabindex:-1,ref:w})),i}return()=>{const i={ref:b,class:$.value,style:A.value,role:"listitem",onClick:K,onKeyup:R};return v.value===!0?(i.tabindex=e.tabindex||"0",Object.assign(i,r.value)):k.value===!0&&(i["aria-disabled"]="true"),p(W.value,i,X())}}});function de(e,t,o){let l;function n(){l!==void 0&&(S.remove(l),l=void 0)}return j(()=>{e.value===!0&&n()}),{removeFromHistory:n,addToHistory(){l={condition:()=>o.value===!0,handler:t},S.add(l)}}}let f=0,y,g,m,q=!1,T,x,C,u=null;function ee(e){te(e)&&H(e)}function te(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=z(e),o=e.shiftKey&&!e.deltaX,l=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),n=o||l?e.deltaY:e.deltaX;for(let c=0;c<t.length;c++){const r=t[c];if(Z(r,l))return l?n<0&&r.scrollTop===0?!0:n>0&&r.scrollTop+r.clientHeight===r.scrollHeight:n<0&&r.scrollLeft===0?!0:n>0&&r.scrollLeft+r.clientWidth===r.scrollWidth}return!0}function B(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function h(e){q!==!0&&(q=!0,requestAnimationFrame(()=>{q=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:l}=document.scrollingElement;(m===void 0||t!==window.innerHeight)&&(m=o-t,document.scrollingElement.scrollTop=l),l>m&&(document.scrollingElement.scrollTop-=Math.ceil((l-m)/8))}))}function P(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:l,overflowX:n}=window.getComputedStyle(t);y=G(window),g=J(window),T=t.style.left,x=t.style.top,C=window.location.href,t.style.left=`-${y}px`,t.style.top=`-${g}px`,n!=="hidden"&&(n==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),l!=="hidden"&&(l==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,d.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",h,s.passiveCapture),window.visualViewport.addEventListener("scroll",h,s.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",B,s.passiveCapture))}d.is.desktop===!0&&d.is.mac===!0&&window[`${e}EventListener`]("wheel",ee,s.notPassive),e==="remove"&&(d.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",h,s.passiveCapture),window.visualViewport.removeEventListener("scroll",h,s.passiveCapture)):window.removeEventListener("scroll",B,s.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=T,t.style.top=x,window.location.href===C&&window.scrollTo(y,g),m=void 0)}function le(e){let t="add";if(e===!0){if(f++,u!==null){clearTimeout(u),u=null;return}if(f>1)return}else{if(f===0||(f--,f>0))return;if(t="remove",d.is.ios===!0&&d.is.nativeMobile===!0){u!==null&&clearTimeout(u),u=setTimeout(()=>{P(t),u=null},100);return}}P(t)}function ve(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,le(t))}}}export{se as Q,ve as a,ce as b,ue as c,de as u};
