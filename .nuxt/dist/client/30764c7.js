(window.webpackJsonp=window.webpackJsonp||[]).push([[11,3,4,5],{427:function(t,e,r){var content=r(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("048a159e",content,!0,{sourceMap:!1})},428:function(t,e,r){var content=r(435);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("01e7990d",content,!0,{sourceMap:!1})},429:function(t,e,r){"use strict";r(427)},430:function(t,e,r){var c=r(36)((function(i){return i[1]}));c.push([t.i,"@keyframes rotation-7ca09e8b{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes glitch-7ca09e8b{0%{-webkit-clip-path:var(--clip-one);clip-path:var(--clip-one)}2%,8%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*-1%))}6%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*1%))}9%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(0)}10%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(calc(var(--shimmy-distance)*1%))}13%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(0)}14%,21%{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four);transform:translate(calc(var(--shimmy-distance)*1%))}25%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*1%))}30%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*-1%))}35%,45%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*-1%))}40%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*1%))}50%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(0)}55%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(calc(var(--shimmy-distance)*1%))}60%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(0)}31%,61%,to{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four)}}@keyframes anime-7ca09e8b{1%{transform:rotateX(10deg) skewX(90deg)}2%{transform:rotateY(10deg) skewY(90deg)}}section[data-v-7ca09e8b]{display:flex;flex-direction:column;margin:4vh 2vh;padding:10px}@media screen and (max-width:){section[data-v-7ca09e8b]{font-size:16px;margin:0;padding:0;width:100%}}section form[data-v-7ca09e8b]{display:flex;flex-direction:column;justify-content:center;margin:2vh;padding:10px}@media screen and (max-width:){section form[data-v-7ca09e8b]{margin:4vh 0 0;padding:0}}section form .single_line[data-v-7ca09e8b]{margin:2vh 1vh;padding:10px 5px}@media screen and (max-width:768px){section form .single_line[data-v-7ca09e8b]{font-size:16px;margin:2vh 0;padding:10px 0;width:100%}}section form .single_line input[data-v-7ca09e8b]{height:100%;padding:10px;width:90%}@media screen and (max-width:768px){section form .single_line input[data-v-7ca09e8b]{height:5vh;padding:1vh}}section form .single_line textarea[data-v-7ca09e8b]{padding:10px;width:90%}@media screen and (max-width:768px){section form .single_line textarea[data-v-7ca09e8b]{padding:1vh;width:100%}}",""]),c.locals={},t.exports=c},431:function(t,e,r){"use strict";r.r(e);var c=r(104),l=r(140),n={components:{ValidationObserver:c.a,ValidationProvider:c.b},data:function(){return{user_name:null,user_email:null,message:null,msg:null}},methods:{onSubmit:function(){var t=this;l.a.init("user_zKqCAxkGHfhfzedVsIGUx"),l.a.send("contact_service","contact_form",{name:this.user_name,message:this.message,user_name:this.user_name,user_email:this.user_email}).then((function(e){console.log(e),console.log("SUCCESS!",e.text,e.status),t.msg=" I got your mail. I'll catch you soon."}),(function(t){console.log("FAILED...",t.text)}))}}},o=(r(429),r(13)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("section",[e("ValidationObserver",{scopedSlots:t._u([{key:"default",fn:function(r){var c=r.invalid;return[e("form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("ValidationProvider",{staticClass:"single_line",attrs:{name:"user_name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var c=r.errors;return[e("span",{staticClass:"icon"},[e("font-awesome-icon",{staticClass:"single_icon",attrs:{icon:["fas","user-tie"]}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user_name,expression:"user_name"}],attrs:{type:"text",placeholder:"Your Name"},domProps:{value:t.user_name},on:{input:function(e){e.target.composing||(t.user_name=e.target.value)}}})],1),t._v(" "),e("span",{staticClass:"error"},[t._v(t._s(c[0]))])]}}],null,!0)}),t._v(" "),e("ValidationProvider",{staticClass:"single_line",attrs:{name:"user_email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(r){var c=r.errors;return[e("span",{staticClass:"icon"},[e("font-awesome-icon",{staticClass:"single_icon",attrs:{icon:["fas","envelope"]}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user_email,expression:"user_email"}],attrs:{type:"email",placeholder:"ex@email.com"},domProps:{value:t.user_email},on:{input:function(e){e.target.composing||(t.user_email=e.target.value)}}})],1),t._v(" "),e("span",{staticClass:"error"},[t._v(t._s(c[0]))])]}}],null,!0)}),t._v(" "),e("ValidationProvider",{staticClass:"single_line",attrs:{name:"content",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var c=r.errors;return[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{cols:"30",rows:"5",type:"text",placeholder:"I want to discuss"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),t._v(" "),e("span",{staticClass:"error"},[t._v(t._s(c[0]))])]}}],null,!0)}),t._v(" "),e("button",{staticStyle:{width:"100%",padding:"5px 5px","text-align":"center"},attrs:{type:"submit",disabled:c}},[t._v("Submit")]),t._v(" "),e("p",{staticStyle:{"margin-top":"10px",color:"#F5EFF5"}},[t._v(t._s(t.msg))])],1)]}}])})],1)}),[],!1,null,"7ca09e8b",null);e.default=component.exports},433:function(t,e,r){var content=r(442);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("cccbde6c",content,!0,{sourceMap:!1})},434:function(t,e,r){"use strict";r(428)},435:function(t,e,r){var c=r(36)((function(i){return i[1]}));c.push([t.i,"@keyframes rotation-746c9cd4{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes glitch-746c9cd4{0%{-webkit-clip-path:var(--clip-one);clip-path:var(--clip-one)}2%,8%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*-1%))}6%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*1%))}9%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(0)}10%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(calc(var(--shimmy-distance)*1%))}13%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(0)}14%,21%{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four);transform:translate(calc(var(--shimmy-distance)*1%))}25%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*1%))}30%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*-1%))}35%,45%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*-1%))}40%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*1%))}50%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(0)}55%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(calc(var(--shimmy-distance)*1%))}60%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(0)}31%,61%,to{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four)}}@keyframes anime-746c9cd4{1%{transform:rotateX(10deg) skewX(90deg)}2%{transform:rotateY(10deg) skewY(90deg)}}.conatct_Form[data-v-746c9cd4]{margin:4vh 2vh;padding:10px}@media screen and (max-width:768px){.conatct_Form[data-v-746c9cd4]{margin:4vh 0}}",""]),c.locals={},t.exports=c},436:function(t,e,r){"use strict";r.r(e);var c={},l=(r(434),r(13)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"conatct_Form"},[e("h2",[t._v("Let's get in touch!")]),t._v(" "),e("ContactForm")],1)}),[],!1,null,"746c9cd4",null);e.default=component.exports;installComponents(component,{ContactForm:r(431).default})},441:function(t,e,r){"use strict";r(433)},442:function(t,e,r){var c=r(36)((function(i){return i[1]}));c.push([t.i,"@keyframes rotation-1defb580{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes glitch-1defb580{0%{-webkit-clip-path:var(--clip-one);clip-path:var(--clip-one)}2%,8%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*-1%))}6%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*1%))}9%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(0)}10%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(calc(var(--shimmy-distance)*1%))}13%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(0)}14%,21%{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four);transform:translate(calc(var(--shimmy-distance)*1%))}25%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*1%))}30%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*-1%))}35%,45%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*-1%))}40%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*1%))}50%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(0)}55%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(calc(var(--shimmy-distance)*1%))}60%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(0)}31%,61%,to{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four)}}@keyframes anime-1defb580{1%{transform:rotateX(10deg) skewX(90deg)}2%{transform:rotateY(10deg) skewY(90deg)}}.contact_page[data-v-1defb580]{display:flex;flex-direction:row;height:100%}@media screen and (max-width:768px){.contact_page[data-v-1defb580]{display:flex;flex-direction:column;height:100%;justify-content:center;margin:0;padding:0;width:100%}}@media screen and (max-width:992px){.contact_page[data-v-1defb580]{display:flex;flex-direction:column;height:100%;justify-content:center;margin:0;padding:0;width:100%}}.contact_page .fixed_pic[data-v-1defb580]{backdrop-filter:blur(1.4px);-webkit-backdrop-filter:blur(1.4px);background:hsla(0,0%,100%,.15);border:1px solid #2bff00;border-radius:16px;box-shadow:0 4px 30px rgba(0,0,0,.1);height:100%;margin:10px;padding:20px;width:50%}@media screen and (max-width:768px){.contact_page .fixed_pic[data-v-1defb580]{height:100%;margin:4vh 0;padding:0;width:100%}}@media screen and (max-width:992px){.contact_page .fixed_pic[data-v-1defb580]{height:100%;margin:4vh 0;padding:0;width:100%}}.contact_page .scroll_site[data-v-1defb580]{backdrop-filter:blur(1.4px);-webkit-backdrop-filter:blur(1.4px);background:hsla(0,0%,100%,.15);border:1px solid #2bff00;border-radius:16px;box-shadow:0 4px 30px rgba(0,0,0,.1);margin:10px;padding:20px;width:50%}@media screen and (max-width:768px){.contact_page .scroll_site[data-v-1defb580]{display:flex;flex-direction:column;height:100%;justify-content:center;margin:4vh 0;padding:2.5vh 0;width:100%}}@media screen and (max-width:992px){.contact_page .scroll_site[data-v-1defb580]{display:flex;flex-direction:column;height:100%;justify-content:center;margin:4vh 0;padding:2.5vh 0;width:100%}}.contact_page .scroll_site .loaction[data-v-1defb580]{color:#f5eff5;margin:4vh 2vh;padding:10px}@media screen and (max-width:768px){.contact_page .scroll_site .loaction[data-v-1defb580]{margin:0;padding:10px}}.contact_page .scroll_site .loaction p[data-v-1defb580]{padding:10px}@media screen and (max-width:768px){.contact_page .scroll_site .loaction p[data-v-1defb580]{margin:0}}.contact_page .scroll_site .row_display[data-v-1defb580]{display:flex;flex-direction:row;justify-content:space-between}@media screen and (max-width:768px){.contact_page .scroll_site .row_display[data-v-1defb580]{display:flex;flex-direction:column;font-size:16px;justify-content:center;margin:0}}.contact_page .scroll_site .row_display .email_drop_down[data-v-1defb580]{color:#f5eff5;cursor:pointer;margin:2vh;padding:10px}@media screen and (max-width:768px){.contact_page .scroll_site .row_display .email_drop_down[data-v-1defb580]{margin:0;padding:10px}}.contact_page .scroll_site .row_display .email_drop_down:hover .li[data-v-1defb580]{backdrop-filter:blur(1.4px);-webkit-backdrop-filter:blur(1.4px);background:hsla(0,0%,100%,.123);border:1px solid #2bff00;border-radius:16px;box-shadow:0 4px 30px rgba(43,255,0,.1);visibility:visible}.contact_page .scroll_site .row_display .email_drop_down .show_text[data-v-1defb580]{padding:10px}.contact_page .scroll_site .row_display .email_drop_down ul[data-v-1defb580]{list-style-type:none}@media screen and (max-width:768px){.contact_page .scroll_site .row_display .email_drop_down ul[data-v-1defb580]{display:none}}.contact_page .scroll_site .row_display .email_drop_down ul .li[data-v-1defb580]{color:#f5eff5;margin:2vh;padding:10px;visibility:hidden}.contact_page .scroll_site .row_display .email_drop_down ul .li a[data-v-1defb580]{color:#f5eff5;-webkit-text-decoration:none;text-decoration:none}.contact_page .scroll_site .row_display .social_media[data-v-1defb580]{margin:2vh;padding:10px}@media screen and (max-width:768px){.contact_page .scroll_site .row_display .social_media[data-v-1defb580]{align-items:center;border-radius:10px;margin:0;padding:0}}.contact_page .scroll_site .row_display .social_media p[data-v-1defb580]{padding:10px}@media screen and (max-width:768px){.contact_page .scroll_site .row_display .social_media p[data-v-1defb580]{padding:10px}}",""]),c.locals={},t.exports=c},444:function(t,e,r){var content=r(456);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(37).default)("24542090",content,!0,{sourceMap:!1})},452:function(t,e,r){"use strict";r.r(e);var c={methods:{copyText:function(){var t=this;navigator.clipboard.writeText(this.$refs.text.innerHTML).then((function(e){console.log(t.$refs.text.innerHTML)})).catch((function(t){console.log(t)}))}}},l=(r(441),r(13)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact_page"},[e("div",{staticClass:"fixed_pic"},[e("LetConnectAnime")],1),t._v(" "),e("div",{staticClass:"scroll_site"},[t._m(0),t._v(" "),e("div",{staticClass:"row_display"},[e("div",{staticClass:"email_drop_down"},[e("p",{ref:"text",staticClass:"show_text"},[t._v("flyindessert@gmail.com")]),t._v(" "),e("ul",[t._m(1),t._v(" "),e("li",{staticClass:"li",on:{click:function(e){return t.copyText()}}},[t._v("Copy Email Address")])])]),t._v(" "),e("div",{staticClass:"social_media"},[e("p",[t._v("Social Medial")]),t._v(" "),e("SocialMediaContact")],1)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"loaction"},[t("p",[this._v("Location : Hasselt , Belgium")])])},function(){var t=this._self._c;return t("li",{staticClass:"li"},[t("a",{attrs:{href:"mailto:flyindessert@gmail.com"}},[this._v("Open In email Client")])])}],!1,null,"1defb580",null);e.default=component.exports;installComponents(component,{LetConnectAnime:r(436).default,SocialMediaContact:r(277).default})},455:function(t,e,r){"use strict";r(444)},456:function(t,e,r){var c=r(36)((function(i){return i[1]}));c.push([t.i,"@keyframes rotation-f298849e{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes glitch-f298849e{0%{-webkit-clip-path:var(--clip-one);clip-path:var(--clip-one)}2%,8%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*-1%))}6%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*1%))}9%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(0)}10%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(calc(var(--shimmy-distance)*1%))}13%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(0)}14%,21%{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four);transform:translate(calc(var(--shimmy-distance)*1%))}25%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*1%))}30%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*-1%))}35%,45%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*-1%))}40%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*1%))}50%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(0)}55%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(calc(var(--shimmy-distance)*1%))}60%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(0)}31%,61%,to{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four)}}@keyframes anime-f298849e{1%{transform:rotateX(10deg) skewX(90deg)}2%{transform:rotateY(10deg) skewY(90deg)}}#conatct_page[data-v-f298849e]{color:#f5eff5;margin:20vh 50px 10px;padding:10px;text-align:center}@media screen and (max-width:768px){#conatct_page[data-v-f298849e]{height:100%;margin:12vh 1rem}}",""]),c.locals={},t.exports=c},473:function(t,e,r){"use strict";r.r(e);var c={},l=(r(455),r(13)),component=Object(l.a)(c,(function(){var t=this._self._c;return t("div",{attrs:{id:"conatct_page"}},[t("ContactComponent")],1)}),[],!1,null,"f298849e",null);e.default=component.exports;installComponents(component,{ContactComponent:r(452).default})}}]);