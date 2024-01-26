exports.ids = [2,3,4];
exports.modules = {

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactComponent.vue?vue&type=template&id=5de9dde0&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "contact_page"
  }, [_vm._ssrNode("<div class=\"fixed_pic\" data-v-5de9dde0>", "</div>", [_c('LetConnectAnime')], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"scroll_site\" data-v-5de9dde0>", "</div>", [_vm._ssrNode("<div class=\"loaction\" data-v-5de9dde0><p data-v-5de9dde0>Location : Hasselt , Belgium</p></div> "), _vm._ssrNode("<div class=\"row_display\" data-v-5de9dde0>", "</div>", [_vm._ssrNode("<div class=\"email_drop_down\" data-v-5de9dde0><p class=\"show_text\" data-v-5de9dde0>mazoethub@gmail.com</p> <ul data-v-5de9dde0><li class=\"li\" data-v-5de9dde0><a href=\"mailto:mazoethub@gmail.com\" data-v-5de9dde0>Open In email Client</a></li> <li class=\"li\" data-v-5de9dde0>Copy Email Address</li></ul></div> "), _vm._ssrNode("<div class=\"social_media\" data-v-5de9dde0>", "</div>", [_vm._ssrNode("<p data-v-5de9dde0>Social Media</p> "), _c('SocialMediaContact')], 2)], 2)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ContactComponent.vue?vue&type=template&id=5de9dde0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactComponent.vue?vue&type=script&lang=js&
/* harmony default export */ var ContactComponentvue_type_script_lang_js_ = ({
  methods: {
    copyText() {
      navigator.clipboard.writeText(this.$refs.text.innerHTML).then(result => {
        console.log(this.$refs.text.innerHTML);
      }).catch(error => {
        console.log(error);
      });
    }
  }
});
// CONCATENATED MODULE: ./components/ContactComponent.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ContactComponentvue_type_script_lang_js_ = (ContactComponentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ContactComponent.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(91)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ContactComponentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5de9dde0",
  "627cb713"
  
)

/* harmony default export */ var ContactComponent = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {LetConnectAnime: __webpack_require__(86).default,SocialMediaContact: __webpack_require__(38).default})


/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("048a159e", content, true, context)
};

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(85);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("01e7990d", content, true, context)
};

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_style_index_0_id_7ca09e8b_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_style_index_0_id_7ca09e8b_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_style_index_0_id_7ca09e8b_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_style_index_0_id_7ca09e8b_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactForm_vue_vue_type_style_index_0_id_7ca09e8b_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@keyframes rotation-7ca09e8b{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes glitch-7ca09e8b{0%{-webkit-clip-path:var(--clip-one);clip-path:var(--clip-one)}2%,8%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*-1%))}6%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*1%))}9%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(0)}10%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(calc(var(--shimmy-distance)*1%))}13%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(0)}14%,21%{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four);transform:translate(calc(var(--shimmy-distance)*1%))}25%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*1%))}30%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*-1%))}35%,45%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*-1%))}40%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*1%))}50%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(0)}55%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(calc(var(--shimmy-distance)*1%))}60%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(0)}31%,61%,to{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four)}}@keyframes anime-7ca09e8b{1%{transform:rotateX(10deg) skewX(90deg)}2%{transform:rotateY(10deg) skewY(90deg)}}section[data-v-7ca09e8b]{display:flex;flex-direction:column;margin:4vh 2vh;padding:10px}@media screen and (max-width:){section[data-v-7ca09e8b]{font-size:16px;margin:0;padding:0;width:100%}}section form[data-v-7ca09e8b]{display:flex;flex-direction:column;justify-content:center;margin:2vh;padding:10px}@media screen and (max-width:){section form[data-v-7ca09e8b]{margin:4vh 0 0;padding:0}}section form .single_line[data-v-7ca09e8b]{margin:2vh 1vh;padding:10px 5px}@media screen and (max-width:768px){section form .single_line[data-v-7ca09e8b]{font-size:16px;margin:2vh 0;padding:10px 0;width:100%}}section form .single_line input[data-v-7ca09e8b]{height:100%;padding:10px;width:90%}@media screen and (max-width:768px){section form .single_line input[data-v-7ca09e8b]{height:5vh;padding:1vh}}section form .single_line textarea[data-v-7ca09e8b]{padding:10px;width:90%}@media screen and (max-width:768px){section form .single_line textarea[data-v-7ca09e8b]{padding:1vh;width:100%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactForm.vue?vue&type=template&id=7ca09e8b&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', [_c('ValidationObserver', {
    scopedSlots: _vm._u([{
      key: "default",
      fn: function ({
        invalid
      }) {
        return [_c('form', {
          ref: "form",
          on: {
            "submit": function ($event) {
              $event.preventDefault();
              return _vm.onSubmit.apply(null, arguments);
            }
          }
        }, [_c('ValidationProvider', {
          staticClass: "single_line",
          attrs: {
            "name": "user_name",
            "rules": "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              errors
            }) {
              return [_c('span', {
                staticClass: "icon"
              }, [_c('font-awesome-icon', {
                staticClass: "single_icon",
                attrs: {
                  "icon": ['fas', 'user-tie']
                }
              }), _vm._v(" "), _c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.user_name,
                  expression: "user_name"
                }],
                attrs: {
                  "type": "text",
                  "placeholder": "Your Name"
                },
                domProps: {
                  "value": _vm.user_name
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.user_name = $event.target.value;
                  }
                }
              })], 1), _vm._v(" "), _c('span', {
                staticClass: "error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        }), _vm._v(" "), _c('ValidationProvider', {
          staticClass: "single_line",
          attrs: {
            "name": "user_email",
            "rules": "required|email"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              errors
            }) {
              return [_c('span', {
                staticClass: "icon"
              }, [_c('font-awesome-icon', {
                staticClass: "single_icon",
                attrs: {
                  "icon": ['fas', 'envelope']
                }
              }), _vm._v(" "), _c('input', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.user_email,
                  expression: "user_email"
                }],
                attrs: {
                  "type": "email",
                  "placeholder": "ex@email.com"
                },
                domProps: {
                  "value": _vm.user_email
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.user_email = $event.target.value;
                  }
                }
              })], 1), _vm._v(" "), _c('span', {
                staticClass: "error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        }), _vm._v(" "), _c('ValidationProvider', {
          staticClass: "single_line",
          attrs: {
            "name": "content",
            "rules": "required"
          },
          scopedSlots: _vm._u([{
            key: "default",
            fn: function ({
              errors
            }) {
              return [_c('textarea', {
                directives: [{
                  name: "model",
                  rawName: "v-model",
                  value: _vm.message,
                  expression: "message"
                }],
                attrs: {
                  "cols": "30",
                  "rows": "5",
                  "type": "text",
                  "placeholder": "I want to discuss"
                },
                domProps: {
                  "value": _vm.message
                },
                on: {
                  "input": function ($event) {
                    if ($event.target.composing) return;
                    _vm.message = $event.target.value;
                  }
                }
              }), _vm._v(" "), _c('span', {
                staticClass: "error"
              }, [_vm._v(_vm._s(errors[0]))])];
            }
          }], null, true)
        }), _vm._v(" "), _c('button', {
          staticStyle: {
            "width": "100%",
            "padding": "5px 5px",
            "text-align": "center"
          },
          attrs: {
            "type": "submit",
            "disabled": invalid
          }
        }, [_vm._v("Submit")]), _vm._v(" "), _c('p', {
          staticStyle: {
            "margin-top": "10px",
            "color": "#F5EFF5"
          }
        }, [_vm._v(_vm._s(_vm.msg))])], 1)];
      }
    }])
  })], 1);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/ContactForm.vue?vue&type=template&id=7ca09e8b&scoped=true&

// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(9);

// EXTERNAL MODULE: ./plugins/email.js
var email = __webpack_require__(16);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContactForm.vue?vue&type=script&lang=js&


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
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ContactForm.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(79)
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
  "30bc6ec4"
  
)

/* harmony default export */ var ContactForm = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(92);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("53bee979", content, true, context)
};

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LetConnectAnime_vue_vue_type_style_index_0_id_746c9cd4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LetConnectAnime_vue_vue_type_style_index_0_id_746c9cd4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LetConnectAnime_vue_vue_type_style_index_0_id_746c9cd4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LetConnectAnime_vue_vue_type_style_index_0_id_746c9cd4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LetConnectAnime_vue_vue_type_style_index_0_id_746c9cd4_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@keyframes rotation-746c9cd4{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes glitch-746c9cd4{0%{-webkit-clip-path:var(--clip-one);clip-path:var(--clip-one)}2%,8%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*-1%))}6%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*1%))}9%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(0)}10%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(calc(var(--shimmy-distance)*1%))}13%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(0)}14%,21%{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four);transform:translate(calc(var(--shimmy-distance)*1%))}25%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*1%))}30%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*-1%))}35%,45%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*-1%))}40%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*1%))}50%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(0)}55%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(calc(var(--shimmy-distance)*1%))}60%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(0)}31%,61%,to{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four)}}@keyframes anime-746c9cd4{1%{transform:rotateX(10deg) skewX(90deg)}2%{transform:rotateY(10deg) skewY(90deg)}}.conatct_Form[data-v-746c9cd4]{margin:4vh 2vh;padding:10px}@media screen and (max-width:768px){.conatct_Form[data-v-746c9cd4]{margin:4vh 0}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LetConnectAnime.vue?vue&type=template&id=746c9cd4&scoped=true&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "conatct_Form"
  }, [_vm._ssrNode("<h2 data-v-746c9cd4>Let's get in touch!</h2> "), _c('ContactForm')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/LetConnectAnime.vue?vue&type=template&id=746c9cd4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/LetConnectAnime.vue?vue&type=script&lang=js&
/* harmony default export */ var LetConnectAnimevue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./components/LetConnectAnime.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_LetConnectAnimevue_type_script_lang_js_ = (LetConnectAnimevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/LetConnectAnime.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(84)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_LetConnectAnimevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "746c9cd4",
  "21a4897f"
  
)

/* harmony default export */ var LetConnectAnime = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {ContactForm: __webpack_require__(81).default})


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactComponent_vue_vue_type_style_index_0_id_5de9dde0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactComponent_vue_vue_type_style_index_0_id_5de9dde0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactComponent_vue_vue_type_style_index_0_id_5de9dde0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactComponent_vue_vue_type_style_index_0_id_5de9dde0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactComponent_vue_vue_type_style_index_0_id_5de9dde0_prod_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@keyframes rotation-5de9dde0{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes glitch-5de9dde0{0%{-webkit-clip-path:var(--clip-one);clip-path:var(--clip-one)}2%,8%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*-1%))}6%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*1%))}9%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(0)}10%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(calc(var(--shimmy-distance)*1%))}13%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(0)}14%,21%{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four);transform:translate(calc(var(--shimmy-distance)*1%))}25%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*1%))}30%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*-1%))}35%,45%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*-1%))}40%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*1%))}50%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(0)}55%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(calc(var(--shimmy-distance)*1%))}60%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(0)}31%,61%,to{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four)}}@keyframes anime-5de9dde0{1%{transform:rotateX(10deg) skewX(90deg)}2%{transform:rotateY(10deg) skewY(90deg)}}.contact_page[data-v-5de9dde0]{display:flex;flex-direction:row;height:100%}@media screen and (max-width:768px){.contact_page[data-v-5de9dde0]{display:flex;flex-direction:column;height:100%;justify-content:center;margin:0;padding:0;width:100%}}@media screen and (max-width:992px){.contact_page[data-v-5de9dde0]{display:flex;flex-direction:column;height:100%;justify-content:center;margin:0;padding:0;width:100%}}.contact_page .fixed_pic[data-v-5de9dde0]{backdrop-filter:blur(1.4px);-webkit-backdrop-filter:blur(1.4px);background:hsla(0,0%,100%,.15);border:1px solid #2bff00;border-radius:16px;box-shadow:0 4px 30px rgba(0,0,0,.1);height:100%;margin:10px;padding:20px;width:50%}@media screen and (max-width:768px){.contact_page .fixed_pic[data-v-5de9dde0]{height:100%;margin:4vh 0;padding:0;width:100%}}@media screen and (max-width:992px){.contact_page .fixed_pic[data-v-5de9dde0]{height:100%;margin:4vh 0;padding:0;width:100%}}.contact_page .scroll_site[data-v-5de9dde0]{backdrop-filter:blur(1.4px);-webkit-backdrop-filter:blur(1.4px);background:hsla(0,0%,100%,.15);border:1px solid #2bff00;border-radius:16px;box-shadow:0 4px 30px rgba(0,0,0,.1);margin:10px;padding:20px;width:50%}@media screen and (max-width:768px){.contact_page .scroll_site[data-v-5de9dde0]{display:flex;flex-direction:column;height:100%;justify-content:center;margin:4vh 0;padding:2.5vh 0;width:100%}}@media screen and (max-width:992px){.contact_page .scroll_site[data-v-5de9dde0]{display:flex;flex-direction:column;height:100%;justify-content:center;margin:4vh 0;padding:2.5vh 0;width:100%}}.contact_page .scroll_site .loaction[data-v-5de9dde0]{color:#f5eff5;margin:4vh 2vh;padding:10px}@media screen and (max-width:768px){.contact_page .scroll_site .loaction[data-v-5de9dde0]{margin:0;padding:10px}}.contact_page .scroll_site .loaction p[data-v-5de9dde0]{padding:10px}@media screen and (max-width:768px){.contact_page .scroll_site .loaction p[data-v-5de9dde0]{margin:0}}.contact_page .scroll_site .row_display[data-v-5de9dde0]{display:flex;flex-direction:row;justify-content:space-between}@media screen and (max-width:768px){.contact_page .scroll_site .row_display[data-v-5de9dde0]{display:flex;flex-direction:column;font-size:16px;justify-content:center;margin:0}}.contact_page .scroll_site .row_display .email_drop_down[data-v-5de9dde0]{color:#f5eff5;cursor:pointer;margin:2vh;padding:10px}@media screen and (max-width:768px){.contact_page .scroll_site .row_display .email_drop_down[data-v-5de9dde0]{margin:0;padding:10px}}.contact_page .scroll_site .row_display .email_drop_down:hover .li[data-v-5de9dde0]{backdrop-filter:blur(1.4px);-webkit-backdrop-filter:blur(1.4px);background:hsla(0,0%,100%,.123);border:1px solid #2bff00;border-radius:16px;box-shadow:0 4px 30px rgba(43,255,0,.1);visibility:visible}.contact_page .scroll_site .row_display .email_drop_down .show_text[data-v-5de9dde0]{padding:10px}.contact_page .scroll_site .row_display .email_drop_down ul[data-v-5de9dde0]{list-style-type:none}@media screen and (max-width:768px){.contact_page .scroll_site .row_display .email_drop_down ul[data-v-5de9dde0]{display:none}}.contact_page .scroll_site .row_display .email_drop_down ul .li[data-v-5de9dde0]{color:#f5eff5;margin:2vh;padding:10px;visibility:hidden}.contact_page .scroll_site .row_display .email_drop_down ul .li a[data-v-5de9dde0]{color:#f5eff5;-webkit-text-decoration:none;text-decoration:none}.contact_page .scroll_site .row_display .social_media[data-v-5de9dde0]{margin:2vh;padding:10px}@media screen and (max-width:768px){.contact_page .scroll_site .row_display .social_media[data-v-5de9dde0]{align-items:center;border-radius:10px;margin:0;padding:0}}.contact_page .scroll_site .row_display .social_media p[data-v-5de9dde0]{padding:10px}@media screen and (max-width:768px){.contact_page .scroll_site .row_display .social_media p[data-v-5de9dde0]{padding:10px}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=contact-component.js.map