"use strict";(self["webpackChunkoculo"]=self["webpackChunkoculo"]||[]).push([[261],{261:function(t,n,e){e.r(n),e.d(n,{MENU_BACK_BUTTON_PRIORITY:function(){return i},OVERLAY_BACK_BUTTON_PRIORITY:function(){return c},blockHardwareBackButton:function(){return r},startHardwareBackButton:function(){return o}});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const r=()=>{document.addEventListener("backbutton",(()=>{}))},o=()=>{const t=document;let n=!1;t.addEventListener("backbutton",(()=>{if(n)return;let e=0,r=[];const o=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,n){r.push({priority:t,handler:n,id:e++})}}});t.dispatchEvent(o);const c=async t=>{try{if(t&&t.handler){const n=t.handler(i);null!=n&&await n}}catch(n){console.error(n)}},i=()=>{if(r.length>0){let t={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};r.forEach((n=>{n.priority>=t.priority&&(t=n)})),n=!0,r=r.filter((n=>n.id!==t.id)),c(t).then((()=>n=!1))}};i()}))},c=100,i=99}}]);
//# sourceMappingURL=261.7af7eaa3.js.map