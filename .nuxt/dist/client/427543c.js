/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{446:function(e,t,n){var content=n(460);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(37).default)("b6b7ffcc",content,!0,{sourceMap:!1})},459:function(e,t,n){"use strict";n(446)},460:function(e,t,n){var o=n(36)((function(i){return i[1]}));o.push([e.i,"#page_layout[data-v-4ee5d734]{flex-grow:1}",""]),o.locals={},e.exports=o},475:function(e,t,n){"use strict";n.r(t);var o=n(21),r=(n(8),n(32),n(38),n(177)),c=Object(r.createClient)(),l={head:function(){return{title:"Freelance web developer || Vue.js Developer",meta:[{hid:"discription",name:"discription",content:"cetail"},{hid:"keyword",name:"keyword",content:"Freelancer , webdveloper "}]}},name:"ProtfolioComponent",asyncData:function(e){var t=e.env;return Promise.all([c.getEntries({content_type:t.CTF_BLOG_POST_TYPE_ID,order:"-sys.createdAt"})]).then((function(e){return{blogs:Object(o.a)(e,1)[0].items}})).catch(console.error)}},d=(n(459),n(13)),component=Object(d.a)(l,(function(){var e=this._self._c;return e("div",{attrs:{id:"page_layout"}},[e("text-Side")],1)}),[],!1,null,"4ee5d734",null);t.default=component.exports}}]);