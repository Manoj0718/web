/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{643:function(e,t,o){var content=o(658);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(31).default)("180c05d9",content,!0,{sourceMap:!1})},657:function(e,t,o){"use strict";o(643)},658:function(e,t,o){var r=o(30)(!1);r.push([e.i,"#page_layout[data-v-fb3afade]{flex-grow:1;height:100vh}",""]),e.exports=r},672:function(e,t,o){"use strict";o.r(t);o(16),o(20),o(23);var r=o(140),n=Object(r.createClient)(),l={head:()=>({title:"freelance web developer || Vue.js Developer",meta:[{hid:"discription",name:"discription",content:"cetail"},{hid:"keyword",name:"keyword",content:"freelancer , webdveloper "}]}),name:"ProtfolioComponent",asyncData(e){var{env:t}=e;return Promise.all([n.getEntries({content_type:t.CTF_BLOG_POST_TYPE_ID,order:"-sys.createdAt"})]).then((e=>{var[t]=e;return console.log("here : ",t),console.log("here item : ",t.items),{blogs:t.items}})).catch(console.error)}},c=(o(657),o(13)),component=Object(c.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"page_layout"}},[t("textSide")],1)}),[],!1,null,"fb3afade",null);t.default=component.exports}}]);