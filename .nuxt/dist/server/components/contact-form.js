exports.ids = [3];
exports.modules = {

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7c0851bc", content, true, context)
};

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_style_index_0_id_7ca09e8b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_style_index_0_id_7ca09e8b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_style_index_0_id_7ca09e8b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_style_index_0_id_7ca09e8b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_style_index_0_id_7ca09e8b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@-webkit-keyframes rotation-data-v-7ca09e8b{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes rotation-data-v-7ca09e8b{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@-webkit-keyframes glitch-data-v-7ca09e8b{0%{-webkit-clip-path:var(--clip-one);clip-path:var(--clip-one)}2%,8%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*-1%))}6%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*1%))}9%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(0)}10%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(calc(var(--shimmy-distance)*1%))}13%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(0)}14%,21%{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four);transform:translate(calc(var(--shimmy-distance)*1%))}25%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*1%))}30%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*-1%))}35%,45%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*-1%))}40%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*1%))}50%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(0)}55%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(calc(var(--shimmy-distance)*1%))}60%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(0)}31%,61%,to{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four)}}@keyframes glitch-data-v-7ca09e8b{0%{-webkit-clip-path:var(--clip-one);clip-path:var(--clip-one)}2%,8%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*-1%))}6%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*1%))}9%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(0)}10%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(calc(var(--shimmy-distance)*1%))}13%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(0)}14%,21%{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four);transform:translate(calc(var(--shimmy-distance)*1%))}25%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*1%))}30%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*-1%))}35%,45%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*-1%))}40%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*1%))}50%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(0)}55%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(calc(var(--shimmy-distance)*1%))}60%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(0)}31%,61%,to{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four)}}@-webkit-keyframes anime-data-v-7ca09e8b{1%{transform:rotateX(10deg) skewX(90deg)}2%{transform:rotateY(10deg) skewY(90deg)}}@keyframes anime-data-v-7ca09e8b{1%{transform:rotateX(10deg) skewX(90deg)}2%{transform:rotateY(10deg) skewY(90deg)}}section[data-v-7ca09e8b]{display:flex;margin:4vh 2vh;padding:10px;flex-direction:column}@media screen and (max-width:){section[data-v-7ca09e8b]{margin:0;padding:0;width:100%;font-size:16px}}section form[data-v-7ca09e8b]{display:flex;flex-direction:column;margin:2vh;padding:10px;justify-content:center}@media screen and (max-width:){section form[data-v-7ca09e8b]{margin:4vh 0 0;padding:0}}section form .single_line[data-v-7ca09e8b]{padding:10px 5px;margin:2vh 1vh}@media screen and (max-width:768px){section form .single_line[data-v-7ca09e8b]{font-size:16px;padding:10px 0;width:100%;margin:2vh 0}}section form .single_line input[data-v-7ca09e8b]{width:90%;height:100%;padding:10px}@media screen and (max-width:768px){section form .single_line input[data-v-7ca09e8b]{height:5vh;padding:1vh}}section form .single_line textarea[data-v-7ca09e8b]{width:90%;padding:10px}@media screen and (max-width:768px){section form .single_line textarea[data-v-7ca09e8b]{width:100%;padding:1vh}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/ContactForm.vue?vue&type=template&id=7ca09e8b&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('ValidationObserver',{scopedSlots:_vm._u([{key:"default",fn:function(ref){
var invalid = ref.invalid;
return [_c('form',{ref:"form",on:{"submit":function($event){$event.preventDefault();return _vm.onSubmit.apply(null, arguments)}}},[_c('ValidationProvider',{staticClass:"single_line",attrs:{"name":"user_name","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('span',{staticClass:"icon"},[_c('font-awesome-icon',{staticClass:"single_icon",attrs:{"icon":['fas', 'user-tie']}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.user_name),expression:"user_name"}],attrs:{"type":"text","placeholder":"Your Name"},domProps:{"value":(_vm.user_name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.user_name=$event.target.value}}})],1),_vm._v(" "),_c('span',{staticClass:"error"},[_vm._v(_vm._s(errors[0]))])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{staticClass:"single_line",attrs:{"name":"user_email","rules":"required|email"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('span',{staticClass:"icon"},[_c('font-awesome-icon',{staticClass:"single_icon",attrs:{"icon":['fas', 'envelope']}}),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.user_email),expression:"user_email"}],attrs:{"type":"email","placeholder":"ex@email.com"},domProps:{"value":(_vm.user_email)},on:{"input":function($event){if($event.target.composing){ return; }_vm.user_email=$event.target.value}}})],1),_vm._v(" "),_c('span',{staticClass:"error"},[_vm._v(_vm._s(errors[0]))])]}}],null,true)}),_vm._v(" "),_c('ValidationProvider',{staticClass:"single_line",attrs:{"name":"content","rules":"required"},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var errors = ref.errors;
return [_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.message),expression:"message"}],attrs:{"cols":"30","rows":"5","type":"text","placeholder":"I want to discuss"},domProps:{"value":(_vm.message)},on:{"input":function($event){if($event.target.composing){ return; }_vm.message=$event.target.value}}}),_vm._v(" "),_c('span',{staticClass:"error"},[_vm._v(_vm._s(errors[0]))])]}}],null,true)}),_vm._v(" "),_c('button',{staticStyle:{"width":"100%","padding":"5px 5px","text-align":"center"},attrs:{"type":"submit","disabled":invalid}},[_vm._v("Submit")]),_vm._v(" "),_c('p',{staticStyle:{"margin-top":"10px","color":"#F5EFF5"}},[_vm._v(_vm._s(_vm.msg))])],1)]}}])})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ContactForm.vue?vue&type=template&id=7ca09e8b&scoped=true&

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(9);

// EXTERNAL MODULE: ./plugins/email.js
var email = __webpack_require__(16);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/ContactForm.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ContactFormvue_type_script_lang_js_ = ({
  components: {
    ValidationObserver: external_vee_validate_["ValidationObserver"],
    ValidationProvider: external_vee_validate_["ValidationProvider"]
  },

  data() {
    return {
      user_name: null,
      user_email: null,
      message: null,
      msg: null
    };
  },

  methods: {
    onSubmit() {
      email["a" /* default */].init('user_zKqCAxkGHfhfzedVsIGUx');
      email["a" /* default */].send('contact_service', 'contact_form', {
        name: this.user_name,
        message: this.message,
        user_name: this.user_name,
        user_email: this.user_email
      }).then(result => {
        console.log(result), console.log('SUCCESS!', result.text, result.status);
        this.msg = " I got your mail. I'll catch you soon.";
      }, error => {
        console.log('FAILED...', error.text);
      });
    }

  }
});
// CONCATENATED MODULE: ./components/ContactForm.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ContactFormvue_type_script_lang_js_ = (ContactFormvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ContactForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(71)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ContactFormvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "7ca09e8b",
  "17e127aa"
  
)

/* harmony default export */ var ContactForm = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contact-form.js.map