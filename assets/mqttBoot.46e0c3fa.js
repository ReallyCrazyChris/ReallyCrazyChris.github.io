import{b as l}from"./index.42812f5f.js";import{u as f}from"./regattaInfo.0044cc70.js";import{u as d}from"./raceTimer.bd15cf4f.js";import{u as v}from"./raceCourse.0adf4898.js";import{u as S}from"./vmc.b2b5a0bf.js";import{u as h}from"./mqtt-vue-hook.es.c8aea688.js";import"./sounds.0e4a8f74.js";import"./extent.d7cb0bc8.js";function b(){let r=localStorage.getItem("clientId");return r||(r=`${Math.random().toString(16).substring(2,10)}`,localStorage.setItem("clientId",r)),r}var k=l(({app:r})=>{const n=b();console.log("Booting mqtt client:",n);const s=f(),i=v(),a=d(),m=S(),o=h(),p="wss",g="25ab1276ffc346f69df024afb2fb0f05.s1.eu.hivemq.cloud",u=8884;o.registerEvent("regattainfo",(c,t)=>{const e=JSON.parse(t.toString());s.$patch(e)}),o.registerEvent("racecourse",(c,t)=>{const e=JSON.parse(t.toString());i.$patch(e)}),o.registerEvent("racetimer",(c,t)=>{const e=JSON.parse(t.toString());a.$patch(e)}),o.registerEvent("racetransition",(c,t)=>{const e=t.toString();a.racetransitionHandler(e)}),o.registerEvent("vmc",(c,t)=>{const e=JSON.parse(t.toString());m.$patch(e)}),o.registerEvent("on-connect",(c,t)=>{console.log("mqtt connected"),o.subscribe(["regattainfo","racecourse","racetimer","racetransition","vmc"],1,{nl:!0},(e,I)=>{})},"string_key"),o.connect(`${p}://${g}:${u}/mqtt`,{clean:!1,keepalive:60,clientId:n,connectTimeout:4e3,username:"SummerTime",password:"RoboRegatta1!"})});export{k as default};
