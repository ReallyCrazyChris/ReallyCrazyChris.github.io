import{Q as m}from"./QTooltip.1f8b247f.js";import{Q as p}from"./QBtn.ca994b32.js";import{Q as c}from"./QPageSticky.d61513c2.js";import{Q as u}from"./QPage.26c4a1e1.js";import{u as d}from"./bluetooth.98a73b45.js";import{R as l}from"./RobobuoyStatus.53437555.js";import{_ as f,v as b,x as _,y as r,z as i,A as o,E as v,F as y,G as Q,B as s,C as S}from"./index.42812f5f.js";import"./format.28d27562.js";import"./render.8e3a34e1.js";import"./proj.c54c2c2d.js";import"./extent.d7cb0bc8.js";import"./TouchPan.27e91361.js";import"./QCard.e7148a45.js";import"./use-dark.de2bf996.js";const R=b({name:"RobotBuoys",components:{RobobuoyStatus:l},setup(){return{devicesStore:d()}}});function k(e,a,B,$,g,x){const n=_("RobobuoyStatus");return r(),i(u,null,{default:o(()=>[(r(!0),v(Q,null,y(e.devicesStore.connecteddevices,t=>(r(),i(n,{key:t.id,deviceid:t.id,class:"q-pa-xs"},null,8,["deviceid"]))),128)),s(c,{position:"bottom"},{default:o(()=>[s(p,{fab:"",icon:"add",color:"primary",onClick:a[0]||(a[0]=t=>e.$bluetooth.pair())},{default:o(()=>[s(m,{class:"bg-brimary"},{default:o(()=>[S("Pair Robobuoy")]),_:1})]),_:1})]),_:1})]),_:1})}var L=f(R,[["render",k]]);export{L as default};
