import{a as c,b as s,c as l,d as u,f,m as h}from"./chunk-VNCDEIXY.js";import{B as p,G as n,L as a,M as m,P as d,n as i,p as t}from"./chunk-MXI3KQ3F.js";import"./chunk-B2E3BGWY.js";var C=[{path:"",redirectTo:"bienvenido",pathMatch:"full"},{path:"bienvenido",loadComponent:()=>import("./chunk-TV2P676Z.js").then(o=>o.BienvenidoComponent)},{path:"busqueda",loadComponent:()=>import("./chunk-CAHZ22X4.js").then(o=>o.BusquedaComponent)},{path:"peliculas",loadComponent:()=>import("./chunk-KIVVZXYW.js").then(o=>o.PeliculaComponent),loadChildren:()=>import("./chunk-6X2ONQTR.js")},{path:"actor",loadComponent:()=>import("./chunk-RNWBZZ6E.js").then(o=>o.ActorComponent),loadChildren:()=>import("./chunk-UVD5WJR4.js")},{path:"**",redirectTo:"bienvenido",pathMatch:"full"}];var v={providers:[d(C),t(c(()=>s({apiKey:"AIzaSyC6fV1YQRa0oDkHtcQXHUMC4WrALDg6d80",authDomain:"lab4-ejercicios-9dc29.firebaseapp.com",projectId:"lab4-ejercicios-9dc29",storageBucket:"lab4-ejercicios-9dc29.appspot.com",messagingSenderId:"341745439943",appId:"1:341745439943:web:daa91dac8d0f24d453dae2"}))),t(l(()=>u())),t(f(()=>h()))]};var b=(()=>{let e=class e{constructor(){this.title="simulacroPP"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=i({type:e,selectors:[["app-root"]],standalone:!0,features:[n],decls:1,vars:0,template:function(r,A){r&1&&p(0,"router-outlet")},dependencies:[m]});let o=e;return o})();a(b,v).catch(o=>console.error(o));