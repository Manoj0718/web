(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{649:function(t,e,r){var content=r(665);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("53c80740",content,!0,{sourceMap:!1})},664:function(t,e,r){"use strict";r(649)},665:function(t,e,r){var l=r(29)(!1);l.push([t.i,"@-webkit-keyframes rotation{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes rotation{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@-webkit-keyframes glitch{0%{-webkit-clip-path:var(--clip-one);clip-path:var(--clip-one)}2%,8%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*-1%))}6%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*1%))}9%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(0)}10%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(calc(var(--shimmy-distance)*1%))}13%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(0)}14%,21%{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four);transform:translate(calc(var(--shimmy-distance)*1%))}25%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*1%))}30%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*-1%))}35%,45%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*-1%))}40%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*1%))}50%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(0)}55%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(calc(var(--shimmy-distance)*1%))}60%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(0)}31%,61%,to{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four)}}@keyframes glitch{0%{-webkit-clip-path:var(--clip-one);clip-path:var(--clip-one)}2%,8%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*-1%))}6%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*1%))}9%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(0)}10%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(calc(var(--shimmy-distance)*1%))}13%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(0)}14%,21%{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four);transform:translate(calc(var(--shimmy-distance)*1%))}25%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*1%))}30%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*-1%))}35%,45%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*-1%))}40%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*1%))}50%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(0)}55%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(calc(var(--shimmy-distance)*1%))}60%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(0)}31%,61%,to{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four)}}@-webkit-keyframes anime{1%{transform:rotateX(10deg) skewX(90deg)}2%{transform:rotateY(10deg) skewY(90deg)}}@keyframes anime{1%{transform:rotateX(10deg) skewX(90deg)}2%{transform:rotateY(10deg) skewY(90deg)}}.skill_table{min-width:100%;text-align:center;padding:5px}@media screen and (max-width:768px){.skill_table{margin:0;padding:0;text-align:center}}.skill_table table{margin:0 auto;padding:10px}@media screen and (max-width:768px){.skill_table table{padding:0;font-size:16px}}.skill_table table tr,.skill_table table tr td{border-top:1px solid gold}.skill_table table tr td{padding:10px}@media screen and (max-width:768px){.skill_table table tr td{padding:10px}}",""]),t.exports=l},676:function(t,e,r){"use strict";r.r(e);var l={name:"MySkillComponenet",data:()=>({skills:[{title:"Frontend",set:"HTML5 , CSS/SASS/SCSS , BootStrap , JavaScript , VueJS , Nuxt.js"},{title:"Backend",set:"Node.js , Express , JavaScript , REST API "},{title:"Database",set:"MangoDB , MySQL "},{title:"Additional Skills",set:" Google Ads , Facebook Ads  , Search Engine Optimisation, wordpress elementor "},{title:"Tools",set:"Git , Postman , VS Code "}]})},c=(r(664),r(11)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"skill_table"},[r("h2",[t._v("My tech stack")]),t._v(" "),r("table",{attrs:{align:"center"}},t._l(t.skills,(function(e){return r("tr",{key:e.title},[r("td",[t._v(t._s(e.title))]),t._v(" "),r("td",[t._v(t._s(e.set))])])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);