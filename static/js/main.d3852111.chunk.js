(this["webpackJsonpsearch-playgrounds-take3"]=this["webpackJsonpsearch-playgrounds-take3"]||[]).push([[0],{64:function(e){e.exports=JSON.parse('{"Mainform":{"links":["jsfiddle.net","codesandbox.io","jsbin.com","stackblitz.com","snack.expo.io","playcode.io","codepen.io"]}}')},83:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n(23),a=n.n(c),i=(n(83),n(139)),o=n(141),l=n(132),d=n(144),r=n(65),j=n(143),b=n(3);const h=e=>{const t=e.data?e.data.links:"loading",[n,c]=s.useState(),[a,h]=s.useState("None"),u=e=>{e.preventDefault();let t="";n.forEach(((e,s)=>{t=t+"site:"+e,s!==n.length-1&&(t+=" OR ")}));const s=a+" "+t;window.open("https://www.google.com/search?q="+s).focus()};return"loading"===t?"loading sandbox list...":(n||c(t),Object(b.jsxs)("div",{className:"mainform",children:[Object(b.jsx)("div",{className:"topStack",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(b.jsx)(l.a,{sx:{width:500},children:Object(b.jsx)(o.a,{multiple:!0,id:"tags-outlined",options:t,onChange:(e,t)=>{c(t)},getOptionLabel:e=>e,defaultValue:t,filterSelectedOptions:!0,renderInput:e=>Object(b.jsx)("div",{id:"renderinput",children:Object(b.jsx)(i.a,{...e,label:"Choose Playground",placeholder:"Add..."})})})})}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"submitForm",style:{},children:Object(b.jsx)(j.a,{children:Object(b.jsxs)(r.a,{onSubmit:u,children:[Object(b.jsx)("div",{children:Object(b.jsx)(i.a,{style:{width:"100%",maxWidth:"500px"},id:"searchbox",label:"Search...",variant:"outlined",onChange:e=>{h(e.target.value)}})}),Object(b.jsx)("br",{}),Object(b.jsx)(d.a,{variant:"contained",onClick:u,children:"Google"})]})})})]}))};var u=n(64);function x(){const[e,t]=Object(s.useState)({});return Object(s.useEffect)((()=>{t(u)}),[]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Playground Sreach"}),Object(b.jsx)("h2",{}),Object(b.jsx)(h,{data:e.Mainform})]})}const p=document.getElementById("root");a.a.render(Object(b.jsx)(s.StrictMode,{children:Object(b.jsx)(x,{})}),p)}},[[92,1,2]]]);
//# sourceMappingURL=main.d3852111.chunk.js.map