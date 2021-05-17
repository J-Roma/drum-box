(this["webpackJsonpdrum-box"]=this["webpackJsonpdrum-box"]||[]).push([[0],{20:function(e,n,a){"use strict";a.r(n);var t,r,d,c,s,m=a(0),i=a.n(m),o=a(8),p=a.n(o),l=a(12),u=a(2),f=a(3),h=a(1),x=f.a.div(t||(t=Object(u.a)(["\n    background: skyblue;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 250px;\n    max-width: 550px;\n    margin: 13% auto;\n    border-radius: 15px;\n    border: 2px solid #334443;\n\n"]))),b=f.a.div(r||(r=Object(u.a)(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 1fr 1fr 1f;\n    grid-gap: 5%;\n"]))),j=f.a.div(d||(d=Object(u.a)(["\n    text-align: center;\n    background: #c6ffc1;\n    margin-left: 100px;\n    border-radius: 15px;\n    border: 2px solid #334443;\n    @media (max-width: 524px) {\n        margin-left: 30px;\n\n    }\n"]))),g=f.a.h1(c||(c=Object(u.a)(["\n    color: #34656d;\n    padding-left: 20px;\n    padding-right: 20px;\n    @media (max-width: 524px) {\n        padding-left: 10px;\n        padding-right: 10px;\n        font-size: 28px;\n\n    }\n"]))),O=f.a.button(s||(s=Object(u.a)(["\n    color: #fffbdf;\n    background:  #34656d;\n    height: 50px;\n    width: 50px;\n    border: 2px solid #334443;\n    :hover {\n        background: yellow;\n    }\n"]))),w=function(){var e=Object(m.useState)("Sonido"),n=Object(l.a)(e,2),a=n[0],t=n[1],r=function(e){e.target.firstElementChild.play(),t(e.target.name)};return document.addEventListener("keypress",(function(e){var n=e.key,a=document.getElementById("".concat(n.toUpperCase()));null!=a&&a.firstElementChild.play(),null!=a&&t(a.name)})),Object(h.jsxs)(x,{id:"drum-machine",children:[Object(h.jsx)(b,{name:"hello",children:[{id:"Q",name:"Heater 1",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{id:"W",name:"Heater 2",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{id:"E",name:"Heater 3",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{id:"A",name:"Heater 4",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{id:"S",name:"Clap",src:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{id:"D",name:"Open HH",src:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{id:"Z",name:"Kick n' Hat",src:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{id:"X",name:"Kick",src:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{id:"C",name:"Closed HH",src:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}].map((function(e){return Object(h.jsxs)(O,{id:e.id,name:e.name,onClick:r,className:"drum-pad",children:[e.id,Object(h.jsx)("audio",{id:e.id,className:"clip",src:e.src})]},e.id)}))}),Object(h.jsx)(j,{children:Object(h.jsx)(g,{id:"display",children:a})})]})};var H=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(w,{})})};p.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(H,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.33b0430a.chunk.js.map