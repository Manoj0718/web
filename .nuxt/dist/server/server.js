module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"components/about-component","2":"components/contact-component","3":"components/contact-form","4":"components/let-connect-anime","5":"components/my-skill-componenet","6":"components/text-side","7":"components/used-tech-component","8":"pages/about","9":"pages/contact","10":"pages/index","11":"pages/protfolio"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URLSearchParams) {

Object.defineProperty(exports, '__esModule', {
  value: true
});
const n = /[^\0-\x7E]/;
const t = /[\x2E\u3002\uFF0E\uFF61]/g;
const o = {
  overflow: "Overflow Error",
  "not-basic": "Illegal Input",
  "invalid-input": "Invalid Input"
};
const e = Math.floor;
const r = String.fromCharCode;

function s(n2) {
  throw new RangeError(o[n2]);
}

const c = function (n2, t2) {
  return n2 + 22 + 75 * (n2 < 26) - ((t2 != 0) << 5);
};

const u = function (n2, t2, o2) {
  let r2 = 0;

  for (n2 = o2 ? e(n2 / 700) : n2 >> 1, n2 += e(n2 / t2); n2 > 455; r2 += 36) {
    n2 = e(n2 / 35);
  }

  return e(r2 + 36 * n2 / (n2 + 38));
};

function toASCII(o2) {
  return function (n2, o3) {
    const e2 = n2.split("@");
    let r2 = "";
    e2.length > 1 && (r2 = e2[0] + "@", n2 = e2[1]);

    const s2 = function (n3, t2) {
      const o4 = [];
      let e3 = n3.length;

      for (; e3--;) {
        o4[e3] = t2(n3[e3]);
      }

      return o4;
    }((n2 = n2.replace(t, ".")).split("."), o3).join(".");

    return r2 + s2;
  }(o2, function (t2) {
    return n.test(t2) ? "xn--" + function (n2) {
      const t3 = [];

      const o3 = (n2 = function (n3) {
        const t4 = [];
        let o4 = 0;
        const e2 = n3.length;

        for (; o4 < e2;) {
          const r2 = n3.charCodeAt(o4++);

          if (r2 >= 55296 && r2 <= 56319 && o4 < e2) {
            const e3 = n3.charCodeAt(o4++);
            (64512 & e3) == 56320 ? t4.push(((1023 & r2) << 10) + (1023 & e3) + 65536) : (t4.push(r2), o4--);
          } else {
            t4.push(r2);
          }
        }

        return t4;
      }(n2)).length;

      let f = 128;
      let i = 0;
      let l = 72;

      for (const o4 of n2) {
        o4 < 128 && t3.push(r(o4));
      }

      const h = t3.length;
      let p = h;

      for (h && t3.push("-"); p < o3;) {
        let o4 = 2147483647;

        for (const t4 of n2) {
          t4 >= f && t4 < o4 && (o4 = t4);
        }

        const a = p + 1;
        o4 - f > e((2147483647 - i) / a) && s("overflow"), i += (o4 - f) * a, f = o4;

        for (const o5 of n2) {
          if (o5 < f && ++i > 2147483647 && s("overflow"), o5 == f) {
            let n3 = i;

            for (let o6 = 36;; o6 += 36) {
              const s2 = o6 <= l ? 1 : o6 >= l + 26 ? 26 : o6 - l;

              if (n3 < s2) {
                break;
              }

              const u2 = n3 - s2;
              const f2 = 36 - s2;
              t3.push(r(c(s2 + u2 % f2, 0))), n3 = e(u2 / f2);
            }

            t3.push(r(c(n3, 0))), l = u(i, a, p == h), i = 0, ++p;
          }
        }

        ++i, ++f;
      }

      return t3.join("");
    }(t2) : t2;
  });
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/gi;
const ENC_BRACKET_CLOSE_RE = /%5D/gi;
const ENC_CARET_RE = /%5E/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_CURLY_OPEN_RE = /%7B/gi;
const ENC_PIPE_RE = /%7C/gi;
const ENC_CURLY_CLOSE_RE = /%7D/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2F/gi;
const ENC_ENC_SLASH_RE = /%252F/gi;

function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}

function encodeHash(text) {
  return encode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}

function encodeQueryValue(text) {
  return encode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}

function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}

function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}

function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}

function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch (_err) {
    return "" + text;
  }
}

function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}

function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}

function encodeHost(name = "") {
  return toASCII(name);
}

function parseQuery(paramsStr = "") {
  const obj = {};

  if (paramsStr[0] === "?") {
    paramsStr = paramsStr.substr(1);
  }

  for (const param of paramsStr.split("&")) {
    const s = param.match(/([^=]+)=?(.*)/) || [];

    if (s.length < 2) {
      continue;
    }

    const key = decode(s[1]);

    if (key === "__proto__" || key === "constructor") {
      continue;
    }

    const value = decodeQueryValue(s[2] || "");

    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }

  return obj;
}

function encodeQueryItem(key, val) {
  if (!val) {
    return encodeQueryKey(key);
  }

  if (Array.isArray(val)) {
    return val.map(_val => `${encodeQueryKey(key)}=${encodeQueryValue(_val)}`).join("&");
  }

  return `${encodeQueryKey(key)}=${encodeQueryValue(val)}`;
}

function stringifyQuery(query) {
  return Object.keys(query).map(k => encodeQueryItem(k, query[k])).join("&");
}

class $URL {
  constructor(input = "") {
    this.query = {};

    if (typeof input !== "string") {
      throw new TypeError(`URL input should be string received ${typeof input} (${input})`);
    }

    const parsed = parseURL(input);
    this.protocol = decode(parsed.protocol);
    this.host = decode(parsed.host);
    this.auth = decode(parsed.auth);
    this.pathname = decodePath(parsed.pathname);
    this.query = parseQuery(parsed.search);
    this.hash = decode(parsed.hash);
  }

  get hostname() {
    return parseHost(this.host).hostname;
  }

  get port() {
    return parseHost(this.host).port || "";
  }

  get username() {
    return parseAuth(this.auth).username;
  }

  get password() {
    return parseAuth(this.auth).password || "";
  }

  get hasProtocol() {
    return this.protocol.length;
  }

  get isAbsolute() {
    return this.hasProtocol || this.pathname[0] === "/";
  }

  get search() {
    const q = stringifyQuery(this.query);
    return q.length ? "?" + q : "";
  }

  get searchParams() {
    const p = new URLSearchParams();

    for (const name in this.query) {
      const value = this.query[name];

      if (Array.isArray(value)) {
        value.forEach(v => p.append(name, v));
      } else {
        p.append(name, value || "");
      }
    }

    return p;
  }

  get origin() {
    return (this.protocol ? this.protocol + "//" : "") + encodeHost(this.host);
  }

  get fullpath() {
    return encodePath(this.pathname) + this.search + encodeHash(this.hash);
  }

  get encodedAuth() {
    if (!this.auth) {
      return "";
    }

    const {
      username,
      password
    } = parseAuth(this.auth);
    return encodeURIComponent(username) + (password ? ":" + encodeURIComponent(password) : "");
  }

  get href() {
    const auth = this.encodedAuth;
    const originWithAuth = (this.protocol ? this.protocol + "//" : "") + (auth ? auth + "@" : "") + encodeHost(this.host);
    return this.hasProtocol && this.isAbsolute ? originWithAuth + this.fullpath : this.fullpath;
  }

  append(url) {
    if (url.hasProtocol) {
      throw new Error("Cannot append a URL with protocol");
    }

    Object.assign(this.query, url.query);

    if (url.pathname) {
      this.pathname = withTrailingSlash(this.pathname) + withoutLeadingSlash(url.pathname);
    }

    if (url.hash) {
      this.hash = url.hash;
    }
  }

  toJSON() {
    return this.href;
  }

  toString() {
    return this.href;
  }

}

function isRelative(inputStr) {
  return ["./", "../"].some(str => inputStr.startsWith(str));
}

function hasProtocol(inputStr, acceptProtocolRelative = false) {
  return /^\w+:\/\/.+/.test(inputStr) || acceptProtocolRelative && /^\/\/[^/]+/.test(inputStr);
}

const TRAILING_SLASH_RE = /\/$|\/\?/;

function hasTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/");
  }

  return TRAILING_SLASH_RE.test(input);
}

function withoutTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }

  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }

  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length ? `?${s.join("?")}` : "");
}

function withTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/") ? input : input + "/";
  }

  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }

  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length ? `?${s.join("?")}` : "");
}

function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}

function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.substr(1) : input) || "/";
}

function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}

function cleanDoubleSlashes(input = "") {
  return input.split("://").map(str => str.replace(/\/{2,}/g, "/")).join("://");
}

function withBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }

  const _base = withoutTrailingSlash(base);

  if (input.startsWith(_base)) {
    return input;
  }

  return joinURL(_base, input);
}

function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }

  const _base = withoutTrailingSlash(base);

  if (input.startsWith(_base)) {
    return input.substr(_base.length) || "/";
  }

  return input;
}

function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search),
    ...query
  };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}

function getQuery(input) {
  return parseQuery(parseURL(input).search);
}

function isEmptyURL(url) {
  return !url || url === "/";
}

function isNonEmptyURL(url) {
  return url && url !== "/";
}

function joinURL(base, ...input) {
  let url = base || "";

  for (const i of input.filter(isNonEmptyURL)) {
    url = url ? withTrailingSlash(url) + withoutLeadingSlash(i) : i;
  }

  return url;
}

function createURL(input) {
  return new $URL(input);
}

function normalizeURL(input) {
  return createURL(input).toString();
}

function resolveURL(base, ...input) {
  const url = createURL(base);

  for (const i of input.filter(isNonEmptyURL)) {
    url.append(createURL(i));
  }

  return url.toString();
}

function isSamePath(p1, p2) {
  return decode(withoutTrailingSlash(p1)) === decode(withoutTrailingSlash(p2));
}

function parseURL(input = "", defaultProto) {
  if (!hasProtocol(input, true)) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }

  const [protocol = "", auth, hostAndPath] = (input.replace(/\\/g, "/").match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
  const [host = "", path = ""] = (hostAndPath.match(/([^/?]*)(.*)?/) || []).splice(1);
  const {
    pathname,
    search,
    hash
  } = parsePath(path);
  return {
    protocol,
    auth: auth ? auth.substr(0, auth.length - 1) : "",
    host,
    pathname,
    search,
    hash
  };
}

function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}

function parseAuth(input = "") {
  const [username, password] = input.split(":");
  return {
    username: decode(username),
    password: decode(password)
  };
}

function parseHost(input = "") {
  const [hostname, port] = (input.match(/([^/]*)(:0-9+)?/) || []).splice(1);
  return {
    hostname: decode(hostname),
    port
  };
}

function stringifyParsedURL(parsed) {
  const fullpath = parsed.pathname + (parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "") + parsed.hash;

  if (!parsed.protocol) {
    return fullpath;
  }

  return parsed.protocol + "//" + (parsed.auth ? parsed.auth + "@" : "") + parsed.host + fullpath;
}

exports.$URL = $URL;
exports.cleanDoubleSlashes = cleanDoubleSlashes;
exports.createURL = createURL;
exports.decode = decode;
exports.decodePath = decodePath;
exports.decodeQueryValue = decodeQueryValue;
exports.encode = encode;
exports.encodeHash = encodeHash;
exports.encodeHost = encodeHost;
exports.encodeParam = encodeParam;
exports.encodePath = encodePath;
exports.encodeQueryItem = encodeQueryItem;
exports.encodeQueryKey = encodeQueryKey;
exports.encodeQueryValue = encodeQueryValue;
exports.getQuery = getQuery;
exports.hasLeadingSlash = hasLeadingSlash;
exports.hasProtocol = hasProtocol;
exports.hasTrailingSlash = hasTrailingSlash;
exports.isEmptyURL = isEmptyURL;
exports.isNonEmptyURL = isNonEmptyURL;
exports.isRelative = isRelative;
exports.isSamePath = isSamePath;
exports.joinURL = joinURL;
exports.normalizeURL = normalizeURL;
exports.parseAuth = parseAuth;
exports.parseHost = parseHost;
exports.parsePath = parsePath;
exports.parseQuery = parseQuery;
exports.parseURL = parseURL;
exports.resolveURL = resolveURL;
exports.stringifyParsedURL = stringifyParsedURL;
exports.stringifyQuery = stringifyQuery;
exports.withBase = withBase;
exports.withLeadingSlash = withLeadingSlash;
exports.withQuery = withQuery;
exports.withTrailingSlash = withTrailingSlash;
exports.withoutBase = withoutBase;
exports.withoutLeadingSlash = withoutLeadingSlash;
exports.withoutTrailingSlash = withoutTrailingSlash;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(39)["URLSearchParams"]))

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vue-property-decorator");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function isObject(val) {
  return val !== null && typeof val === "object";
}
function _defu(baseObj, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObj, {}, namespace, merger);
  }
  const obj = Object.assign({}, defaults);
  for (const key in baseObj) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const val = baseObj[key];
    if (val === null || val === void 0) {
      continue;
    }
    if (merger && merger(obj, key, val, namespace)) {
      continue;
    }
    if (Array.isArray(val) && Array.isArray(obj[key])) {
      obj[key] = obj[key].concat(val);
    } else if (isObject(val) && isObject(obj[key])) {
      obj[key] = _defu(val, obj[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      obj[key] = val;
    }
  }
  return obj;
}
function extend(merger) {
  return (...args) => args.reduce((p, c) => _defu(p, c, "", merger), {});
}
const defu = extend();
defu.fn = extend((obj, key, currentValue, _namespace) => {
  if (typeof obj[key] !== "undefined" && typeof currentValue === "function") {
    obj[key] = currentValue(obj[key]);
    return true;
  }
});
defu.arrayFn = extend((obj, key, currentValue, _namespace) => {
  if (Array.isArray(obj[key]) && typeof currentValue === "function") {
    obj[key] = currentValue(obj[key]);
    return true;
  }
});
defu.extend = extend;

module.exports = defu;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vee-validate");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_nuxt_webpack_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_nuxt_webpack_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nuxt_webpack_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_nuxt_webpack_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_nuxt_webpack_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_nuxt_webpack_node_modules_babel_loader_lib_index_js_ref_2_0_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 11 */
/***/ (function(module, exports) {

//
//
//
//
//
//
//
//
//

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/vue-fontawesome");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("animejs");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("tsparticles");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emailjs_browser__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (_emailjs_browser__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ render; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ staticRenderFns; });

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/SideBar.vue?vue&type=template&id=7867e2a2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"socila_mediaBar"}},[_vm._ssrNode("<div class=\"icons\" data-v-7867e2a2>","</div>",[_c('SocialMedia')],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SideBar.vue?vue&type=template&id=7867e2a2&scoped=true&


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

const contentful = __webpack_require__(60); // use default environment config for convenience
// these will be set via `env` property in nuxt.config.js


const config = {
  space: "amyu0k31k3c9",
  accessToken: "Nch8P57Zt7naFiwzy1PXe2-VaVJGxupqwnBxC_dLRBc"
}; // export `createClient` to use it in page components

module.exports = {
  createClient() {
    return contentful.createClient(config);
  }

};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("266f287e", content, true, context)
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("52f8bc84", content, true, context)
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("3a302ec8", content, true, context)
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4b34102d", content, true, context)
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("d44e9cca", content, true, context)
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("09e90131", content, true, context)
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(58);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("f03e6136", content, true, context)
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("vue-typed-js");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require("@emailjs/browser");

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/SocialMediaContact.vue?vue&type=template&id=13b28ae0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"icon_menu"},[_vm._ssrNode("<li class=\"list\" data-v-13b28ae0>","</li>",[_vm._ssrNode("<a href=\"https://codepen.io/manoj0718\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-13b28ae0>","</a>",[_c('font-awesome-icon',{staticClass:"single_icon",attrs:{"icon":['fab', 'codepen']}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"list\" data-v-13b28ae0>","</li>",[_vm._ssrNode("<a href=\"https://github.com/Manoj0718\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-13b28ae0>","</a>",[_c('font-awesome-icon',{staticClass:"single_icon",attrs:{"icon":['fab', 'github']}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"list\" data-v-13b28ae0>","</li>",[_vm._ssrNode("<a href=\"https://www.linkedin.com/in/manojfernando-web-developer/\" target=\"_blank\" data-v-13b28ae0>","</a>",[_c('font-awesome-icon',{staticClass:"single_icon",attrs:{"icon":['fab', 'linkedin']}})],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SocialMediaContact.vue?vue&type=template&id=13b28ae0&scoped=true&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SocialMediaContact.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(52)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "13b28ae0",
  "6f7ad452"
  
)

/* harmony default export */ var SocialMediaContact = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38);
module.exports = __webpack_require__(61);


/***/ }),
/* 38 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:5px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#00f;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("310e64d6", content, true)

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".svg-inline--fa,svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;transform:translate(-50%,-50%);transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;transform:scale(.25);transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;transform:scale(.25);transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;transform:scale(.25);transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;transform:scale(.25);transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;transform:scale(.25);transform-origin:top left}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}.fa-pulse{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes fa-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";transform:scaleX(-1)}.fa-flip-vertical{transform:scaleY(-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical,.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\"}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{transform:scale(-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:currentColor;fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:currentColor;fill:var(--fa-secondary-color,currentColor)}.svg-inline--fa .fa-secondary,.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fad.fa-inverse{color:#fff}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("1550c3fa", content, true)

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;1,700&family=Open+Sans:ital,wght@1,300&family=Roboto+Serif:wght@200&family=Roboto:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*{margin:0;padding:0;box-sizing:border-box;font-family:\"DM Sans\",sans-serif;font-display:swap;font-family:\"Open Sans\",sans-serif;font-family:\"Roboto\",sans-serif;font-family:\"Roboto Serif\",sans-serif;letter-spacing:2px;line-height:1.6;scroll-behavior:smooth}.page-enter-active,.page-leave-active{transition:opacity .5s}.page-enter,.page-leave-to{opacity:0}.app{display:block;overflow:hidden;width:100%;height:100%}.loading{height:100vh;width:100%;display:flex;justify-content:center;align-items:center}@-webkit-keyframes circle-loading{to{transform:rotate(1turn)}}@keyframes circle-loading{to{transform:rotate(1turn)}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ParticelsComponennt_vue_vue_type_style_index_0_id_d171358a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ParticelsComponennt_vue_vue_type_style_index_0_id_d171358a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ParticelsComponennt_vue_vue_type_style_index_0_id_d171358a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ParticelsComponennt_vue_vue_type_style_index_0_id_d171358a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_ParticelsComponennt_vue_vue_type_style_index_0_id_d171358a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#tsparticles[data-v-d171358a]{position:absolute;width:100%;z-index:-1;opacity:1}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_MainHeader_vue_vue_type_style_index_0_id_3bb4603f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_MainHeader_vue_vue_type_style_index_0_id_3bb4603f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_MainHeader_vue_vue_type_style_index_0_id_3bb4603f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_MainHeader_vue_vue_type_style_index_0_id_3bb4603f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_MainHeader_vue_vue_type_style_index_0_id_3bb4603f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@-webkit-keyframes rotation-data-v-3bb4603f{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes rotation-data-v-3bb4603f{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@-webkit-keyframes glitch-data-v-3bb4603f{0%{-webkit-clip-path:var(--clip-one);clip-path:var(--clip-one)}2%,8%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*-1%))}6%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*1%))}9%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(0)}10%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(calc(var(--shimmy-distance)*1%))}13%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(0)}14%,21%{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four);transform:translate(calc(var(--shimmy-distance)*1%))}25%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*1%))}30%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*-1%))}35%,45%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*-1%))}40%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*1%))}50%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(0)}55%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(calc(var(--shimmy-distance)*1%))}60%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(0)}31%,61%,to{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four)}}@keyframes glitch-data-v-3bb4603f{0%{-webkit-clip-path:var(--clip-one);clip-path:var(--clip-one)}2%,8%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*-1%))}6%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*1%))}9%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(0)}10%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(calc(var(--shimmy-distance)*1%))}13%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(0)}14%,21%{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four);transform:translate(calc(var(--shimmy-distance)*1%))}25%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*1%))}30%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*-1%))}35%,45%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*-1%))}40%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*1%))}50%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(0)}55%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(calc(var(--shimmy-distance)*1%))}60%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(0)}31%,61%,to{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four)}}@-webkit-keyframes anime-data-v-3bb4603f{1%{transform:rotateX(10deg) skewX(90deg)}2%{transform:rotateY(10deg) skewY(90deg)}}@keyframes anime-data-v-3bb4603f{1%{transform:rotateX(10deg) skewX(90deg)}2%{transform:rotateY(10deg) skewY(90deg)}}header[data-v-3bb4603f]{position:fixed;z-index:99;width:100%;transition:all .5s ease;padding:0 80px}@media screen and (max-width:768px){header[data-v-3bb4603f]{width:100%;margin:0}}header .bar[data-v-3bb4603f]{position:relative;width:95%;display:flex;flex-direction:raw;padding:0;justify-content:space-between}@media screen and (max-width:768px){header .bar[data-v-3bb4603f]{display:flex;margin:2px auto;padding:0;width:100%}}header .bar .logo[data-v-3bb4603f]{color:gold;align-self:flex-start}@media screen and (max-width:768px){header .bar .logo[data-v-3bb4603f]{margin-left:-20%}}header .bar .logo img[data-v-3bb4603f]{aspect-ratio:attr(width)/attr(height)}header .menu[data-v-3bb4603f]{padding:10px;align-self:center}header .menu ul[data-v-3bb4603f]{display:flex;flex-direction:row;text-align:center;grid-gap:1em;gap:1em;cursor:pointer}header .menu ul span[data-v-3bb4603f]{visibility:hidden}header .menu ul li[data-v-3bb4603f]{margin:0 .5rem;padding:.25rem;text-decoration:none}header .menu ul li :hover span[data-v-3bb4603f]{visibility:visible;color:gold}header .menu ul li a[data-v-3bb4603f]{text-decoration:none}header .menu ul li a[data-v-3bb4603f]:visited{text-decoration:none;color:#fff}header .menu ul li a.nuxt-link-exact-active[data-v-3bb4603f],header .menu ul li a[data-v-3bb4603f]:hover{color:gold}@media screen and (max-width:768px){header .iconBox[data-v-3bb4603f]{cursor:pointer;font-size:30px;color:gold;margin-right:-10vw;transition:transform .45s}}@media screen and (max-width:768px){header .iconBox .iconBox-active[data-v-3bb4603f]{transform:scale(1.13)}}header .mobile-nav-enter-active[data-v-3bb4603f],header .mobile-nav-leave-active[data-v-3bb4603f]{transition:all 1s ease}header .mobile-nav-enter-from[data-v-3bb4603f],header .mobile-nav-leave-to[data-v-3bb4603f]{transform:translateX(-250px)}header .mobil-nav-enter-to[data-v-3bb4603f]{transform:translateX(-1px)}@media screen and (max-width:768px){header .dropdown_nav-div[data-v-3bb4603f]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%;height:100%;max-width:250px;position:fixed;top:0;left:0;background:rgba(2,2,52,.1);border-radius:16px;box-shadow:0 4px 30px rgba(0,0,0,.9);backdrop-filter:blur(10.9px);-webkit-backdrop-filter:blur(10.9px);border:1.5px solid #00ff37;z-index:1}header .dropdown_nav-div .dropdown_nav[data-v-3bb4603f]{list-style:none;margin-bottom:2.5vh}header .dropdown_nav-div .dropdown_nav .dropdown_nav-li[data-v-3bb4603f]{margin:4vh;padding:.25vh;text-decoration:none}header .dropdown_nav-div .dropdown_nav .dropdown_nav-li a[data-v-3bb4603f]{text-decoration:none;color:#f5eff5;font-weight:900;font-size:18px}}.scrolled-nav[data-v-3bb4603f]{background-color:#020234;box-shadow:5px 5px 5px gold}.scrolled-nav .bar[data-v-3bb4603f]{padding:0}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialMediaContact_vue_vue_type_style_index_0_id_13b28ae0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialMediaContact_vue_vue_type_style_index_0_id_13b28ae0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialMediaContact_vue_vue_type_style_index_0_id_13b28ae0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialMediaContact_vue_vue_type_style_index_0_id_13b28ae0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialMediaContact_vue_vue_type_style_index_0_id_13b28ae0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@-webkit-keyframes rotation-data-v-13b28ae0{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes rotation-data-v-13b28ae0{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@-webkit-keyframes glitch-data-v-13b28ae0{0%{-webkit-clip-path:var(--clip-one);clip-path:var(--clip-one)}2%,8%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*-1%))}6%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*1%))}9%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(0)}10%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(calc(var(--shimmy-distance)*1%))}13%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(0)}14%,21%{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four);transform:translate(calc(var(--shimmy-distance)*1%))}25%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*1%))}30%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*-1%))}35%,45%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*-1%))}40%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*1%))}50%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(0)}55%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(calc(var(--shimmy-distance)*1%))}60%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(0)}31%,61%,to{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four)}}@keyframes glitch-data-v-13b28ae0{0%{-webkit-clip-path:var(--clip-one);clip-path:var(--clip-one)}2%,8%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*-1%))}6%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*1%))}9%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(0)}10%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(calc(var(--shimmy-distance)*1%))}13%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(0)}14%,21%{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four);transform:translate(calc(var(--shimmy-distance)*1%))}25%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*1%))}30%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*-1%))}35%,45%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*-1%))}40%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*1%))}50%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(0)}55%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(calc(var(--shimmy-distance)*1%))}60%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(0)}31%,61%,to{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four)}}@-webkit-keyframes anime-data-v-13b28ae0{1%{transform:rotateX(10deg) skewX(90deg)}2%{transform:rotateY(10deg) skewY(90deg)}}@keyframes anime-data-v-13b28ae0{1%{transform:rotateX(10deg) skewX(90deg)}2%{transform:rotateY(10deg) skewY(90deg)}}.icon_menu[data-v-13b28ae0]{display:flex;list-style-type:none;color:gold;flex-direction:row;justify-content:center}@media screen and (max-width:768px){.icon_menu[data-v-13b28ae0]{width:100%;margin:0;padding:0}}.icon_menu .list[data-v-13b28ae0]{padding:20px;margin:5px}.icon_menu .list a[data-v-13b28ae0]{font-size:24px}.icon_menu .list a[data-v-13b28ae0] :hover{color:#f5eff5}.icon_menu .list .single_icon[data-v-13b28ae0]{color:#2bff00;-webkit-animation:rotation-data-v-13b28ae0 9s linear infinite;animation:rotation-data-v-13b28ae0 9s linear infinite}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SideBar_vue_vue_type_template_id_7867e2a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_nuxt_webpack_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);



function injectStyles (context) {
  
  var style0 = __webpack_require__(55)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_nuxt_webpack_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _SideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SideBar_vue_vue_type_template_id_7867e2a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _SideBar_vue_vue_type_template_id_7867e2a2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "7867e2a2",
  "d235a43a"
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SocialMedia: __webpack_require__(64).default})


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_7867e2a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_7867e2a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_7867e2a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_7867e2a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_SideBar_vue_vue_type_style_index_0_id_7867e2a2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@-webkit-keyframes rotation-data-v-7867e2a2{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes rotation-data-v-7867e2a2{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@-webkit-keyframes glitch-data-v-7867e2a2{0%{-webkit-clip-path:var(--clip-one);clip-path:var(--clip-one)}2%,8%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*-1%))}6%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*1%))}9%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(0)}10%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(calc(var(--shimmy-distance)*1%))}13%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(0)}14%,21%{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four);transform:translate(calc(var(--shimmy-distance)*1%))}25%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*1%))}30%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*-1%))}35%,45%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*-1%))}40%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*1%))}50%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(0)}55%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(calc(var(--shimmy-distance)*1%))}60%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(0)}31%,61%,to{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four)}}@keyframes glitch-data-v-7867e2a2{0%{-webkit-clip-path:var(--clip-one);clip-path:var(--clip-one)}2%,8%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*-1%))}6%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*1%))}9%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(0)}10%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(calc(var(--shimmy-distance)*1%))}13%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(0)}14%,21%{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four);transform:translate(calc(var(--shimmy-distance)*1%))}25%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*1%))}30%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*-1%))}35%,45%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*-1%))}40%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*1%))}50%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(0)}55%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(calc(var(--shimmy-distance)*1%))}60%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(0)}31%,61%,to{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four)}}@-webkit-keyframes anime-data-v-7867e2a2{1%{transform:rotateX(10deg) skewX(90deg)}2%{transform:rotateY(10deg) skewY(90deg)}}@keyframes anime-data-v-7867e2a2{1%{transform:rotateX(10deg) skewX(90deg)}2%{transform:rotateY(10deg) skewY(90deg)}}#socila_mediaBar[data-v-7867e2a2]{background-color:gold;height:100vh;width:2px;margin-left:50px;z-index:1;position:absolute;position:fixed}#socila_mediaBar .icons[data-v-7867e2a2]{position:relative;top:60vh;right:35px}@media screen and (max-width:768px){#socila_mediaBar[data-v-7867e2a2]{display:none}}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialMedia_vue_vue_type_style_index_0_id_3e477952_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialMedia_vue_vue_type_style_index_0_id_3e477952_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialMedia_vue_vue_type_style_index_0_id_3e477952_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialMedia_vue_vue_type_style_index_0_id_3e477952_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_nuxt_webpack_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_nuxt_webpack_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_nuxt_webpack_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialMedia_vue_vue_type_style_index_0_id_3e477952_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@-webkit-keyframes rotation-data-v-3e477952{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes rotation-data-v-3e477952{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@-webkit-keyframes glitch-data-v-3e477952{0%{-webkit-clip-path:var(--clip-one);clip-path:var(--clip-one)}2%,8%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*-1%))}6%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*1%))}9%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(0)}10%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(calc(var(--shimmy-distance)*1%))}13%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(0)}14%,21%{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four);transform:translate(calc(var(--shimmy-distance)*1%))}25%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*1%))}30%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*-1%))}35%,45%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*-1%))}40%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*1%))}50%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(0)}55%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(calc(var(--shimmy-distance)*1%))}60%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(0)}31%,61%,to{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four)}}@keyframes glitch-data-v-3e477952{0%{-webkit-clip-path:var(--clip-one);clip-path:var(--clip-one)}2%,8%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*-1%))}6%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(calc(var(--shimmy-distance)*1%))}9%{-webkit-clip-path:var(--clip-two);clip-path:var(--clip-two);transform:translate(0)}10%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(calc(var(--shimmy-distance)*1%))}13%{-webkit-clip-path:var(--clip-three);clip-path:var(--clip-three);transform:translate(0)}14%,21%{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four);transform:translate(calc(var(--shimmy-distance)*1%))}25%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*1%))}30%{-webkit-clip-path:var(--clip-five);clip-path:var(--clip-five);transform:translate(calc(var(--shimmy-distance)*-1%))}35%,45%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*-1%))}40%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(calc(var(--shimmy-distance)*1%))}50%{-webkit-clip-path:var(--clip-six);clip-path:var(--clip-six);transform:translate(0)}55%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(calc(var(--shimmy-distance)*1%))}60%{-webkit-clip-path:var(--clip-seven);clip-path:var(--clip-seven);transform:translate(0)}31%,61%,to{-webkit-clip-path:var(--clip-four);clip-path:var(--clip-four)}}@-webkit-keyframes anime-data-v-3e477952{1%{transform:rotateX(10deg) skewX(90deg)}2%{transform:rotateY(10deg) skewY(90deg)}}@keyframes anime-data-v-3e477952{1%{transform:rotateX(10deg) skewX(90deg)}2%{transform:rotateY(10deg) skewY(90deg)}}.icon_menu[data-v-3e477952]{display:flex;list-style-type:none;color:gold;flex-direction:column}.icon_menu .list[data-v-3e477952]{padding-top:20px;margin-top:5px}.icon_menu .list a[data-v-3e477952]{font-size:24px}.icon_menu .list a[data-v-3e477952] :hover{color:#f5eff5}.icon_menu .list .single_icon[data-v-3e477952]{color:#2bff00;-webkit-animation:rotation-data-v-3e477952 9s linear infinite;animation:rotation-data-v-3e477952 9s linear infinite}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony import */ var _plugins_Contentful__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _plugins_Contentful__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugins_Contentful__WEBPACK_IMPORTED_MODULE_0__);

const state = () => ({
  posts: []
});
const mutations = {
  setPosts(state, payload) {
    state.posts = payload;
  },

  async getPosts({
    env
  }) {
    return Promise.all([_plugins_Contentful__WEBPACK_IMPORTED_MODULE_0___default.a.getEntries({
      content_type: env.CTF_BLOG_POST_TYPE_ID,
      order: '-sys.createdAt'
    })]).then(([blogs]) => {
      // console.log("here : " , blogs);
      return {
        blogs: blogs.items
      };
    }).catch(console.error);
  } // async  getPosts({commit}){
  //   const responce = await client.getEntries({
  //       content_type: env.CTF_BLOG_POST_TYPE_ID,
  //       order: '-sys.createdAt',
  //   })
  //   if(responce.items.length > 0){
  //       commit('setPosts', response);
  //       console.log("responce" , response.items);
  //   }
  //   }


};
const actions = {}; // export const state = () => ({
//     count: 500
//   });
//   export const getters = {
//     getCount: state => state.count
//   };

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("contentful");

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./.nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "AboutComponent", function() { return AboutComponent; });
__webpack_require__.d(components_namespaceObject, "ContactComponent", function() { return ContactComponent; });
__webpack_require__.d(components_namespaceObject, "ContactForm", function() { return ContactForm; });
__webpack_require__.d(components_namespaceObject, "LetConnectAnime", function() { return LetConnectAnime; });
__webpack_require__.d(components_namespaceObject, "MainHeader", function() { return MainHeader; });
__webpack_require__.d(components_namespaceObject, "MySkillComponenet", function() { return MySkillComponenet; });
__webpack_require__.d(components_namespaceObject, "ParticelsComponennt", function() { return ParticelsComponennt; });
__webpack_require__.d(components_namespaceObject, "SideBar", function() { return SideBar; });
__webpack_require__.d(components_namespaceObject, "SocialMedia", function() { return SocialMedia; });
__webpack_require__.d(components_namespaceObject, "SocialMediaContact", function() { return SocialMediaContact; });
__webpack_require__.d(components_namespaceObject, "TextSide", function() { return TextSide; });
__webpack_require__.d(components_namespaceObject, "UsedTechComponent", function() { return UsedTechComponent; });

// NAMESPACE OBJECT: ./node_modules/@nuxt/image/dist/runtime/providers/static.js
var static_namespaceObject = {};
__webpack_require__.r(static_namespaceObject);
__webpack_require__.d(static_namespaceObject, "getImage", function() { return static_getImage; });
__webpack_require__.d(static_namespaceObject, "supportsAlias", function() { return static_supportsAlias; });

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: ./node_modules/ufo/dist/index.js
var dist = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(30);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {
        "CTF_SPACE_ID": "amyu0k31k3c9",
        "CTF_CDA_ACCESS_TOKEN": "Nch8P57Zt7naFiwzy1PXe2-VaVJGxupqwnBxC_dLRBc",
        "CTF_ENVIRONMENT": "master",
        "CTF_BLOG_POST_TYPE_ID": "projects"
      }
    }; // Only set once

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(dist["withQuery"])(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(dist["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = dist["joinURL"];
const stripTrailingSlash = dist["withoutTrailingSlash"];
const isSamePath = dist["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(6);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(31);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(18);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(12);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(19);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js






const _92a3ab3c = () => interopDefault(__webpack_require__.e(/* import() | pages/about */ 8).then(__webpack_require__.bind(null, 112)));

const _736c2396 = () => interopDefault(__webpack_require__.e(/* import() | pages/contact */ 9).then(__webpack_require__.bind(null, 113)));

const _b5f43012 = () => interopDefault(__webpack_require__.e(/* import() | pages/protfolio */ 11).then(__webpack_require__.bind(null, 114)));

const _5333f5b2 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 10).then(__webpack_require__.bind(null, 115)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/about",
    component: _92a3ab3c,
    name: "about"
  }, {
    path: "/contact",
    component: _736c2396,
    name: "contact"
  }, {
    path: "/protfolio",
    component: _b5f43012,
    name: "protfolio"
  }, {
    path: "/",
    component: _5333f5b2,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(dist["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=5eb69f1c&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
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
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(40)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "69d4599c"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(42)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "87094060"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/styles.css
var styles = __webpack_require__(44);

// EXTERNAL MODULE: ./assests/default.scss
var assests_default = __webpack_require__(46);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=1baaaa08&
var defaultvue_type_template_id_1baaaa08_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app"},[_c('ParticelsComponennt'),_vm._ssrNode(" "),_c('MainHeader'),_vm._ssrNode(" "),_c('SideBar'),_vm._ssrNode(" "),_c('Nuxt')],2)}
var defaultvue_type_template_id_1baaaa08_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=1baaaa08&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var defaultvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  
}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_1baaaa08_render,
  defaultvue_type_template_id_1baaaa08_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "587b3c9e"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {ParticelsComponennt: __webpack_require__(63).default,MainHeader: __webpack_require__(62).default,SideBar: __webpack_require__(54).default})

// CONCATENATED MODULE: ./.nuxt/App.js








const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;

    if (this.isPreview) {
      if (this.$store && this.$store._actions.nuxtServerInit) {
        this.$loading.start();
        await this.$store.dispatch('nuxtServerInit', this.context);
      }

      await this.refresh();
      this.$loading.finish();
    }
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    },

    isPreview() {
      return Boolean(this.$options.previewData);
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    },

    getRouterBase() {
      return Object(dist["withoutTrailingSlash"])(this.$router.options.base);
    },

    getRoutePath(route = '/') {
      const base = this.getRouterBase();
      return Object(dist["withoutTrailingSlash"])(Object(dist["withoutBase"])(Object(dist["parsePath"])(route).pathname, base));
    },

    getStaticAssetsPath(route = '/') {
      const {
        staticAssetsBase
      } = window.__NUXT__;
      return urlJoin(staticAssetsBase, this.getRoutePath(route));
    },

    async fetchStaticManifest() {
      return window.__NUXT_IMPORT__('manifest.js', Object(dist["normalizeURL"])(urlJoin(this.getStaticAssetsPath(), 'manifest.js')));
    },

    setPagePayload(payload) {
      this._pagePayload = payload;
      this._fetchCounters = {};
    },

    async fetchPayload(route, prefetch) {
      const path = Object(dist["decode"])(this.getRoutePath(route));
      const manifest = await this.fetchStaticManifest();

      if (!manifest.routes.includes(path)) {
        if (!prefetch) {
          this.setPagePayload(false);
        }

        throw new Error(`Route ${path} is not pre-rendered`);
      }

      const src = urlJoin(this.getStaticAssetsPath(route), 'payload.js');

      try {
        const payload = await window.__NUXT_IMPORT__(path, Object(dist["normalizeURL"])(src));

        if (!prefetch) {
          this.setPagePayload(payload);
        }

        return payload;
      } catch (err) {
        if (!prefetch) {
          this.setPagePayload(false);
        }

        throw err;
      }
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};

(function updateModules() {
  // If store is an exported method = classic mode (deprecated)
  // Enforce store modules
  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(59), 'posts.js'); // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData; // Remove store src + extension (./foo/index.js -> foo/index)

  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath); // If src is a known Vuex property

  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const propertyStoreModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    }); // Replace state since it's a function

    mergeProperty(propertyStoreModule, moduleData, property);
    return;
  } // If file is foo/index.js, it should be saved as foo


  const isIndexModule = moduleName === 'index';

  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }

  const storeModule = getStoreModule(store_store, namespaces);

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }

  return normalizeModule(moduleData, filePath);
}

function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }

  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// CONCATENATED MODULE: ./.nuxt/components/index.js
const AboutComponent = () => __webpack_require__.e(/* import() | components/about-component */ 1).then(__webpack_require__.bind(null, 97)).then(c => wrapFunctional(c.default || c));
const ContactComponent = () => __webpack_require__.e(/* import() | components/contact-component */ 2).then(__webpack_require__.bind(null, 98)).then(c => wrapFunctional(c.default || c));
const ContactForm = () => __webpack_require__.e(/* import() | components/contact-form */ 3).then(__webpack_require__.bind(null, 74)).then(c => wrapFunctional(c.default || c));
const LetConnectAnime = () => __webpack_require__.e(/* import() | components/let-connect-anime */ 4).then(__webpack_require__.bind(null, 82)).then(c => wrapFunctional(c.default || c));
const MainHeader = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 62)).then(c => wrapFunctional(c.default || c));
const MySkillComponenet = () => __webpack_require__.e(/* import() | components/my-skill-componenet */ 5).then(__webpack_require__.bind(null, 81)).then(c => wrapFunctional(c.default || c));
const ParticelsComponennt = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 63)).then(c => wrapFunctional(c.default || c));
const SideBar = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 54)).then(c => wrapFunctional(c.default || c));
const SocialMedia = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 64)).then(c => wrapFunctional(c.default || c));
const SocialMediaContact = () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 36)).then(c => wrapFunctional(c.default || c));
const TextSide = () => __webpack_require__.e(/* import() | components/text-side */ 6).then(__webpack_require__.bind(null, 116)).then(c => wrapFunctional(c.default || c));
const UsedTechComponent = () => __webpack_require__.e(/* import() | components/used-tech-component */ 7).then(__webpack_require__.bind(null, 117)).then(c => wrapFunctional(c.default || c)); // nuxt/nuxt.js#8607

function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js



for (const name in components_namespaceObject) {
  external_vue_default.a.component(name, components_namespaceObject[name]);
  external_vue_default.a.component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(8);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./node_modules/defu/dist/defu.cjs
var defu = __webpack_require__(7);
var defu_default = /*#__PURE__*/__webpack_require__.n(defu);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Intercept to apply default headers

  axios.onRequest(config => {
    config.headers = { ...axios.defaults.headers.common,
      ...config.headers
    };
  }); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || '/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// EXTERNAL MODULE: external "@fortawesome/fontawesome-svg-core"
var fontawesome_svg_core_ = __webpack_require__(20);

// EXTERNAL MODULE: external "@fortawesome/vue-fontawesome"
var vue_fontawesome_ = __webpack_require__(13);

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(32);

// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__(33);

// CONCATENATED MODULE: ./.nuxt/fontawesome.js





fontawesome_svg_core_["library"].add(free_solid_svg_icons_["fas"], free_brands_svg_icons_["fab"]);
fontawesome_svg_core_["config"].autoAddCss = false;
external_vue_default.a.component('FontAwesomeIcon', vue_fontawesome_["FontAwesomeIcon"]);
external_vue_default.a.component('FontAwesomeLayers', vue_fontawesome_["FontAwesomeLayers"]);
external_vue_default.a.component('FontAwesomeLayersText', vue_fontawesome_["FontAwesomeLayersText"]);
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/utils/meta.js
async function imageMeta(ctx, url) {
  const cache = getCache(ctx);
  const cacheKey = "image:meta:" + url;

  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  const meta = await _imageMeta(url).catch(err => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  cache.set(cacheKey, meta);
  return meta;
}

async function _imageMeta(url) {
  if (true) {
    const imageMeta2 = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, 68, 7)).then(r => r.default || r);
    const data = await fetch(url).then(res => res.buffer());
    const metadata = imageMeta2(data);

    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }

    const {
      width,
      height
    } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }

  if (typeof Image === "undefined") {
    throw new TypeError("Image not supported");
  }

  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => {
      const meta = {
        width: img.width,
        height: img.height,
        ratio: img.width / img.height
      };
      resolve(meta);
    };

    img.onerror = err => reject(err);

    img.src = url;
  });
}

function getCache(ctx) {
  if (!ctx.nuxtContext.cache) {
    if (ctx.nuxtContext.ssrContext && ctx.nuxtContext.ssrContext.cache) {
      ctx.nuxtContext.cache = ctx.nuxtContext.ssrContext.cache;
    } else {
      const _cache = {};
      ctx.nuxtContext.cache = {
        get: id => _cache[id],
        set: (id, value) => {
          _cache[id] = value;
        },
        has: id => typeof _cache[id] !== "undefined"
      };
    }
  }

  return ctx.nuxtContext.cache;
}
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/utils/index.js
function imageFetch(url) {
  return fetch(cleanDoubleSlashes(url));
}
function getInt(x) {
  if (typeof x === "number") {
    return x;
  }

  if (typeof x === "string") {
    return parseInt(x, 10);
  }

  return void 0;
}
function getFileExtension(url = "") {
  const extension = url.split(/[?#]/).shift().split("/").pop().split(".").pop();
  return extension;
}
function cleanDoubleSlashes(path = "") {
  return path.replace(/(https?:\/\/)|(\/)+/g, "$1$2");
}
function createMapper(map) {
  return key => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({
  formatter,
  keyMap,
  joinWith = "/",
  valueMap
} = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }

  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }

  const map = valueMap || {};
  Object.keys(map).forEach(valueKey => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];

      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }

      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function renderAttributesToString(attributes = {}) {
  return Object.entries(attributes).map(([key, value]) => value ? `${key}="${value}"` : "").filter(Boolean).join(" ");
}
function renderTag(tag, attrs, contents) {
  const html = `<${tag} ${renderAttributesToString(attrs)}>`;

  if (!contents) {
    return html;
  }

  return html + contents + `</${tag}>`;
}
function generateAlt(src = "") {
  return src.split(/[?#]/).shift().split("/").pop().split(".").shift();
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }

  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return parseInt(input, 10);
    }
  }
}
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/image.js





function createImage(globalOptions, nuxtContext) {
  const staticImageManifest =  false ? undefined : {};
  const ctx = {
    options: globalOptions,
    nuxtContext
  };

  const getImage = function (input, options = {}) {
    const image = resolveImage(ctx, input, options);

    if (image.isStatic) {
      handleStaticImage(image, input);
    }

    return image;
  };

  const $img = function $img2(input, modifiers = {}, options = {}) {
    return getImage(input, { ...options,
      modifiers: defu_default()(modifiers, options.modifiers || {})
    }).url;
  };

  function handleStaticImage(image, input) {
    if (true) {
      if (false) {}

      if (true) {
        const {
          ssrContext
        } = ctx.nuxtContext;

        if (ssrContext) {
          var _ssrState$data, _ssrContext$image;

          const ssrState = ssrContext.nuxt || {};
          const staticImages = ssrState._img = ssrState._img || {};
          const ssrData = (_ssrState$data = ssrState.data) === null || _ssrState$data === void 0 ? void 0 : _ssrState$data[0];

          if (ssrData) {
            ssrData._img = staticImages;
          }

          const mapToStatic = (_ssrContext$image = ssrContext.image) === null || _ssrContext$image === void 0 ? void 0 : _ssrContext$image.mapToStatic;

          if (typeof mapToStatic === "function") {
            const mappedURL = mapToStatic(image, input);

            if (mappedURL) {
              staticImages[image.url] = mappedURL;
              image.url = mappedURL;
            }
          }
        }
      }
    } else {}
  }

  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName],
      ...options
    });
  }

  $img.options = globalOptions;
  $img.getImage = getImage;

  $img.getMeta = (input, options) => getMeta(ctx, input, options);

  $img.getSizes = (input, options) => getSizes(ctx, input, options);

  ctx.$img = $img;
  return $img;
}

async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options
  });

  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}

function resolveImage(ctx, input, options) {
  var _options$modifiers, _options$modifiers2;

  if (typeof input !== "string" || input === "") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }

  if (input.startsWith("data:")) {
    return {
      url: input
    };
  }

  const {
    provider,
    defaults
  } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = Object(dist["hasProtocol"])(input) ? input : Object(dist["withLeadingSlash"])(input);

  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = Object(dist["joinURL"])(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }

  if (provider.validateDomains && Object(dist["hasProtocol"])(input)) {
    const inputHost = Object(dist["parseURL"])(input).host;

    if (!ctx.options.domains.find(d => d === inputHost)) {
      return {
        url: input
      };
    }
  }

  const _options = defu_default()(options, preset, defaults);

  _options.modifiers = { ..._options.modifiers
  };
  const expectedFormat = _options.modifiers.format;

  if ((_options$modifiers = _options.modifiers) !== null && _options$modifiers !== void 0 && _options$modifiers.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }

  if ((_options$modifiers2 = _options.modifiers) !== null && _options$modifiers2 !== void 0 && _options$modifiers2.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }

  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}

function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];

  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }

  return provider;
}

function getPreset(ctx, name) {
  if (!name) {
    return {};
  }

  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }

  return ctx.options.presets[name];
}

function getSizes(ctx, input, opts) {
  var _opts$modifiers, _opts$modifiers2;

  const width = parseSize((_opts$modifiers = opts.modifiers) === null || _opts$modifiers === void 0 ? void 0 : _opts$modifiers.width);
  const height = parseSize((_opts$modifiers2 = opts.modifiers) === null || _opts$modifiers2 === void 0 ? void 0 : _opts$modifiers2.height);
  const hwRatio = width && height ? height / width : 0;
  const variants = [];
  const sizes = {};

  if (typeof opts.sizes === "string") {
    for (const entry of opts.sizes.split(/[\s,]+/).filter(e => e)) {
      const s = entry.split(":");

      if (s.length !== 2) {
        continue;
      }

      sizes[s[0].trim()] = s[1].trim();
    }
  } else {
    Object.assign(sizes, opts.sizes);
  }

  for (const key in sizes) {
    const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || parseInt(key);
    let size = String(sizes[key]);
    const isFluid = size.endsWith("vw");

    if (!isFluid && /^\d+$/.test(size)) {
      size = size + "px";
    }

    if (!isFluid && !size.endsWith("px")) {
      continue;
    }

    let _cWidth = parseInt(size);

    if (!screenMaxWidth || !_cWidth) {
      continue;
    }

    if (isFluid) {
      _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
    }

    const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;

    variants.push({
      width: _cWidth,
      size,
      screenMaxWidth,
      media: `(max-width: ${screenMaxWidth}px)`,
      src: ctx.$img(input, { ...opts.modifiers,
        width: _cWidth,
        height: _cHeight
      }, opts)
    });
  }

  variants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  const defaultVar = variants[variants.length - 1];

  if (defaultVar) {
    defaultVar.media = "";
  }

  return {
    sizes: variants.map(v => `${v.media ? v.media + " " : ""}${v.size}`).join(", "),
    srcset: variants.map(v => `${v.src} ${v.width}w`).join(", "),
    src: defaultVar === null || defaultVar === void 0 ? void 0 : defaultVar.src
  };
}
// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue?vue&type=template&id=356cdf12&
var nuxt_imgvue_type_template_id_356cdf12_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('img',_vm._g(_vm._b({key:_vm.nSrc,attrs:{"src":_vm.nSrc}},'img',_vm.nAttrs,false),_vm.$listeners),[])}
var nuxt_imgvue_type_template_id_356cdf12_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/image.mixin.js


const defineMixin = opts => opts;

const imageMixin = defineMixin({
  props: {
    src: {
      type: String,
      required: true
    },
    format: {
      type: String,
      default: void 0
    },
    quality: {
      type: [Number, String],
      default: void 0
    },
    background: {
      type: String,
      default: void 0
    },
    fit: {
      type: String,
      default: void 0
    },
    modifiers: {
      type: Object,
      default: void 0
    },
    preset: {
      type: String,
      default: void 0
    },
    provider: {
      type: String,
      default: void 0
    },
    sizes: {
      type: [Object, String],
      default: void 0
    },
    preload: {
      type: Boolean,
      default: void 0
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    },
    alt: {
      type: String,
      default: void 0
    },
    referrerpolicy: {
      type: String,
      default: void 0
    },
    usemap: {
      type: String,
      default: void 0
    },
    longdesc: {
      type: String,
      default: void 0
    },
    ismap: {
      type: Boolean,
      default: void 0
    },
    crossorigin: {
      type: [Boolean, String],
      default: void 0,
      validator: val => ["anonymous", "use-credentials", "", true, false].includes(val)
    },
    loading: {
      type: String,
      default: void 0
    },
    decoding: {
      type: String,
      default: void 0,
      validator: val => ["async", "auto", "sync"].includes(val)
    }
  },
  computed: {
    nImgAttrs() {
      return {
        width: parseSize(this.width),
        height: parseSize(this.height),
        alt: this.alt,
        referrerpolicy: this.referrerpolicy,
        usemap: this.usemap,
        longdesc: this.longdesc,
        ismap: this.ismap,
        crossorigin: this.crossorigin === true ? "anonymous" : this.crossorigin || void 0,
        loading: this.loading,
        decoding: this.decoding
      };
    },

    nModifiers() {
      return { ...this.modifiers,
        width: parseSize(this.width),
        height: parseSize(this.height),
        format: this.format,
        quality: this.quality,
        background: this.background,
        fit: this.fit
      };
    },

    nOptions() {
      return {
        provider: this.provider,
        preset: this.preset
      };
    }

  }
});
// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue?vue&type=script&lang=js&
//
//
//
//



const defineComponent = opts => opts;

/* harmony default export */ var nuxt_imgvue_type_script_lang_js_ = (defineComponent({
  name: "NuxtImg",
  mixins: [imageMixin],

  head() {
    if (this.preload === true) {
      return {
        link: [{
          rel: "preload",
          as: "image",
          href: this.nSrc
        }]
      };
    }
  },

  computed: {
    nAttrs() {
      const attrs = this.nImgAttrs;

      if (this.sizes) {
        const {
          sizes,
          srcset
        } = this.nSizes;
        attrs.sizes = sizes;
        attrs.srcset = srcset;
      }

      return attrs;
    },

    nSrc() {
      return this.sizes ? this.nSizes.src : this.$img(this.src, this.nModifiers, this.nOptions);
    },

    nSizes() {
      return this.$img.getSizes(this.src, { ...this.nOptions,
        sizes: this.sizes,
        modifiers: { ...this.nModifiers,
          width: parseSize(this.width),
          height: parseSize(this.height)
        }
      });
    }

  },

  created() {
    if (true) {
      if (this.sizes) {
        this.nSizes;
      }
    }
  }

}));
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_imgvue_type_script_lang_js_ = (nuxt_imgvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue





/* normalize component */

var nuxt_img_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_imgvue_type_script_lang_js_,
  nuxt_imgvue_type_template_id_356cdf12_render,
  nuxt_imgvue_type_template_id_356cdf12_staticRenderFns,
  false,
  null,
  null,
  "32e5a4b4"
  
)

/* harmony default export */ var nuxt_img = (nuxt_img_component.exports);
// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue?vue&type=template&id=88bec26c&
var nuxt_picturevue_type_template_id_88bec26c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('picture',{key:_vm.nSources[0].src},[_vm._ssrNode(((_vm.nSources[1])?("<source"+(_vm._ssrAttr("type",_vm.nSources[1].type))+(_vm._ssrAttr("srcset",_vm.nSources[1].srcset))+(_vm._ssrAttr("sizes",_vm.nSources[1].sizes))+">"):"<!---->")+" <img"+(_vm._ssrAttr("src",_vm.nSources[0].src))+(_vm._ssrAttr("srcset",_vm.nSources[0].srcset))+(_vm._ssrAttr("sizes",_vm.nSources[0].sizes))+(_vm._ssrAttrs(Object.assign({}, _vm.nImgAttrs, _vm.imgAttrs)))+">")])}
var nuxt_picturevue_type_template_id_88bec26c_staticRenderFns = []


// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue?vue&type=script&lang=js&
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



const nuxt_picturevue_type_script_lang_js_defineComponent = opts => opts;

/* harmony default export */ var nuxt_picturevue_type_script_lang_js_ = (nuxt_picturevue_type_script_lang_js_defineComponent({
  name: "NuxtPicture",
  mixins: [imageMixin],
  props: {
    legacyFormat: {
      type: String,
      default: null
    },
    imgAttrs: {
      type: Object,
      default: null
    }
  },

  head() {
    if (this.preload === true) {
      const srcKey = typeof this.nSources[1] !== "undefined" ? 1 : 0;
      const link = {
        rel: "preload",
        as: "image",
        imagesrcset: this.nSources[srcKey].srcset
      };

      if (typeof this.nSources[srcKey].sizes !== "undefined") {
        link.imagesizes = this.nSources[srcKey].sizes;
      }

      return {
        link: [link]
      };
    }
  },

  computed: {
    isTransparent() {
      return ["png", "webp", "gif"].includes(this.originalFormat);
    },

    originalFormat() {
      return getFileExtension(this.src);
    },

    nFormat() {
      if (this.format) {
        return this.format;
      }

      if (this.originalFormat === "svg") {
        return "svg";
      }

      return "webp";
    },

    nLegacyFormat() {
      if (this.legacyFormat) {
        return this.legacyFormat;
      }

      const formats = {
        webp: this.isTransparent ? "png" : "jpeg",
        svg: "png"
      };
      return formats[this.nFormat] || this.originalFormat;
    },

    nSources() {
      if (this.nFormat === "svg") {
        return [{
          srcset: this.src
        }];
      }

      const formats = this.nLegacyFormat !== this.nFormat ? [this.nLegacyFormat, this.nFormat] : [this.nFormat];
      const sources = formats.map(format => {
        const {
          srcset,
          sizes,
          src
        } = this.$img.getSizes(this.src, { ...this.nOptions,
          sizes: this.sizes || this.$img.options.screens,
          modifiers: { ...this.nModifiers,
            format
          }
        });
        return {
          src,
          type: `image/${format}`,
          sizes,
          srcset
        };
      });
      return sources;
    }

  },

  created() {
    if (true) {
      this.nSources;
    }
  }

}));
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_picturevue_type_script_lang_js_ = (nuxt_picturevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue





/* normalize component */

var nuxt_picture_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_picturevue_type_script_lang_js_,
  nuxt_picturevue_type_template_id_88bec26c_render,
  nuxt_picturevue_type_template_id_88bec26c_staticRenderFns,
  false,
  null,
  null,
  "6709bfef"
  
)

/* harmony default export */ var nuxt_picture = (nuxt_picture_component.exports);
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/providers/ipx.js


const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: ",",
  formatter: (key, val) => Object(dist["encodeParam"])(key) + "_" + Object(dist["encodeParam"])(val)
});
const ipx_getImage = (src, {
  modifiers = {},
  baseURL = "/_ipx"
} = {}, {
  nuxtContext: {
    base: nuxtBase = "/"
  } = {}
}) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }

  const params = operationsGenerator(modifiers) || "_";
  return {
    url: Object(dist["joinURL"])(nuxtBase, baseURL, params, Object(dist["encodePath"])(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
// CONCATENATED MODULE: ./node_modules/@nuxt/image/dist/runtime/providers/static.js

const static_getImage = (src, options, ctx) => ({ ...ipx_getImage(src, options, ctx),
  isStatic: true
});
const static_supportsAlias = true;
// CONCATENATED MODULE: ./.nuxt/image.js





const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "static",
  "domains": [],
  "alias": {}
};
imageOptions.providers = {
  ['static']: {
    provider: static_namespaceObject,
    defaults: {}
  }
};
external_vue_default.a.component(nuxt_img.name, nuxt_img);
external_vue_default.a.component(nuxt_picture.name, nuxt_picture);
external_vue_default.a.component('NImg', nuxt_img);
external_vue_default.a.component('NPicture', nuxt_picture);
/* harmony default export */ var _nuxt_image = (function (nuxtContext, inject) {
  const $img = createImage(imageOptions, nuxtContext);

  if (true) {
    nuxtContext.beforeNuxtRender(({
      nuxtState
    }) => {
      const ssrData = nuxtState.data[0] || {};
      ssrData._img = nuxtState._img || {};
    });
  }

  inject('img', $img);
});
// EXTERNAL MODULE: external "animejs"
var external_animejs_ = __webpack_require__(14);
var external_animejs_default = /*#__PURE__*/__webpack_require__.n(external_animejs_);

// CONCATENATED MODULE: ./.nuxt/animejsModule.js


external_vue_default.a.directive('anime', (el, binding) => {
  external_animejs_default()({
    targets: el,
    ...binding.value
  });

  if (binding.modifiers.set) {
    external_animejs_default.a.set(el, { ...binding.value
    });
  }
});
/* harmony default export */ var animejsModule = (({
  app
}, inject) => {
  inject('anime', external_animejs_default.a);
});
// EXTERNAL MODULE: external "vue-typed-js"
var external_vue_typed_js_ = __webpack_require__(34);
var external_vue_typed_js_default = /*#__PURE__*/__webpack_require__.n(external_vue_typed_js_);

// CONCATENATED MODULE: ./plugins/vue_Typical.js
// https://nuxtjs.org/docs/directory-structure/plugins/


external_vue_default.a.use(external_vue_typed_js_default.a);
// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(5);

// EXTERNAL MODULE: external "tsparticles"
var external_tsparticles_ = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/particles.vue/dist/particles.vue.js



/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

let particles_vue_Particles = class Particles extends external_vue_default.a {
  mounted() {
    this.$nextTick(() => {
      var _a;

      if (!this.id) {
        throw new Error("Prop 'id' is required!");
      }

      if (this.particlesInit) {
        this.particlesInit(external_tsparticles_["tsParticles"]);
      }

      const cb = container => {
        this.container = container;

        if (this.container && this.particlesLoaded) {
          this.particlesLoaded(this.container);
        }
      };

      if (this.url) {
        external_tsparticles_["tsParticles"].loadJSON(this.id, this.url).then(cb);
      } else {
        external_tsparticles_["tsParticles"].load(this.id, (_a = this.options) !== null && _a !== void 0 ? _a : {}).then(cb);
      }
    });
  }

  beforeDestroy() {
    var _a;

    (_a = this.container) === null || _a === void 0 ? void 0 : _a.destroy();
  }

};

__decorate([Object(external_vue_property_decorator_["Prop"])({
  required: true
})], particles_vue_Particles.prototype, "id", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])()], particles_vue_Particles.prototype, "options", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])()], particles_vue_Particles.prototype, "url", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])()], particles_vue_Particles.prototype, "particlesLoaded", void 0);

__decorate([Object(external_vue_property_decorator_["Prop"])()], particles_vue_Particles.prototype, "particlesInit", void 0);

particles_vue_Particles = __decorate([external_vue_property_decorator_["Component"]], particles_vue_Particles);
var script = particles_vue_Particles;

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  const options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  let hook;

  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function (context) {
      style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      const originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      const existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}
/* script */


const __vue_script__ = script;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c("div", {
    attrs: {
      id: _vm.id
    }
  });
};

var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

const VueParticles = {
  install: (vue, options) => {
    vue.component('Particles', __vue_component__);
  }
};

// CONCATENATED MODULE: ./plugins/vue_particles.js


external_vue_default.a.use(VueParticles);
// EXTERNAL MODULE: external "vee-validate"
var external_vee_validate_ = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/vee-validate/dist/rules.js
/**
  * vee-validate v3.4.14
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */

/**
 * Some Alpha Regex helpers.
 * https://github.com/chriso/validator.js/blob/master/src/lib/alpha.js
 */

/* eslint-disable no-misleading-character-class */
var alpha$1 = {
  en: /^[A-Z]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[A-ZÆØÅ]*$/i,
  de: /^[A-ZÄÖÜß]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
  fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  it: /^[A-Z\xC0-\xFF]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ro: /^[A-ZĂÂÎŞŢ]*$/i,
  ru: /^[А-ЯЁ]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[A-ZČĆŽŠĐ]*$/i,
  sv: /^[A-ZÅÄÖ]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
  az: /^[A-ZÇƏĞİıÖŞÜ]*$/i,
  el: /^[Α-ώ]*$/i,
  ja: /^[A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF]*$/i,
  he: /^[A-Z\u05D0-\u05EA']*$/i
};
var alphaSpaces = {
  en: /^[A-Z\s]*$/i,
  cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
  da: /^[A-ZÆØÅ\s]*$/i,
  de: /^[A-ZÄÖÜß\s]*$/i,
  es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
  fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
  fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
  it: /^[A-Z\xC0-\xFF\s]*$/i,
  lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
  nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
  hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
  pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
  pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
  ro: /^[A-ZĂÂÎŞŢ\s]*$/i,
  ru: /^[А-ЯЁ\s]*$/i,
  sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
  sr: /^[A-ZČĆŽŠĐ\s]*$/i,
  sv: /^[A-ZÅÄÖ\s]*$/i,
  tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
  uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,
  az: /^[A-ZÇƏĞİıÖŞÜ\s]*$/i,
  el: /^[Α-ώ\s]*$/i,
  ja: /^[A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF\s]*$/i,
  he: /^[A-Z\u05D0-\u05EA'\s]*$/i
};
var alphanumeric = {
  en: /^[0-9A-Z]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
  da: /^[0-9A-ZÆØÅ]$/i,
  de: /^[0-9A-ZÄÖÜß]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
  fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
  it: /^[0-9A-Z\xC0-\xFF]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
  ro: /^[0-9A-ZĂÂÎŞŢ]*$/i,
  ru: /^[0-9А-ЯЁ]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
  sv: /^[0-9A-ZÅÄÖ]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
  az: /^[0-9A-ZÇƏĞİıÖŞÜ]*$/i,
  el: /^[0-9Α-ώ]*$/i,
  ja: /^[0-9A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF]*$/i,
  he: /^[0-9A-Z\u05D0-\u05EA']*$/i
};
var alphaDash = {
  en: /^[0-9A-Z_-]*$/i,
  cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
  da: /^[0-9A-ZÆØÅ_-]*$/i,
  de: /^[0-9A-ZÄÖÜß_-]*$/i,
  es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
  fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
  fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
  it: /^[0-9A-Z\xC0-\xFF_-]*$/i,
  lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
  nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
  hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
  pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
  pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
  ro: /^[0-9A-ZĂÂÎŞŢ_-]*$/i,
  ru: /^[0-9А-ЯЁ_-]*$/i,
  sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
  sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
  sv: /^[0-9A-ZÅÄÖ_-]*$/i,
  tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
  uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,
  az: /^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i,
  el: /^[0-9Α-ώ_-]*$/i,
  ja: /^[0-9A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF_-]*$/i,
  he: /^[0-9A-Z\u05D0-\u05EA'_-]*$/i
};

var validate$r = function (value, _a) {
  var _b = (_a === void 0 ? {} : _a).locale,
      locale = _b === void 0 ? '' : _b;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$r(val, {
        locale: locale
      });
    });
  } // Match at least one locale.


  if (!locale) {
    return Object.keys(alpha$1).some(function (loc) {
      return alpha$1[loc].test(value);
    });
  }

  return (alpha$1[locale] || alpha$1.en).test(value);
};

var params$k = [{
  name: 'locale'
}];
var alpha = {
  validate: validate$r,
  params: params$k
};

var validate$q = function (value, _a) {
  var _b = (_a === void 0 ? {} : _a).locale,
      locale = _b === void 0 ? '' : _b;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$q(val, {
        locale: locale
      });
    });
  } // Match at least one locale.


  if (!locale) {
    return Object.keys(alphaDash).some(function (loc) {
      return alphaDash[loc].test(value);
    });
  }

  return (alphaDash[locale] || alphaDash.en).test(value);
};

var params$j = [{
  name: 'locale'
}];
var alpha_dash = {
  validate: validate$q,
  params: params$j
};

var validate$p = function (value, _a) {
  var _b = (_a === void 0 ? {} : _a).locale,
      locale = _b === void 0 ? '' : _b;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$p(val, {
        locale: locale
      });
    });
  } // Match at least one locale.


  if (!locale) {
    return Object.keys(alphanumeric).some(function (loc) {
      return alphanumeric[loc].test(value);
    });
  }

  return (alphanumeric[locale] || alphanumeric.en).test(value);
};

var params$i = [{
  name: 'locale'
}];
var alpha_num = {
  validate: validate$p,
  params: params$i
};

var validate$o = function (value, _a) {
  var _b = (_a === void 0 ? {} : _a).locale,
      locale = _b === void 0 ? '' : _b;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$o(val, {
        locale: locale
      });
    });
  } // Match at least one locale.


  if (!locale) {
    return Object.keys(alphaSpaces).some(function (loc) {
      return alphaSpaces[loc].test(value);
    });
  }

  return (alphaSpaces[locale] || alphaSpaces.en).test(value);
};

var params$h = [{
  name: 'locale'
}];
var alpha_spaces = {
  validate: validate$o,
  params: params$h
};

var validate$n = function (value, _a) {
  var _b = _a === void 0 ? {} : _a,
      min = _b.min,
      max = _b.max;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return !!validate$n(val, {
        min: min,
        max: max
      });
    });
  }

  return Number(min) <= value && Number(max) >= value;
};

var params$g = [{
  name: 'min'
}, {
  name: 'max'
}];
var between = {
  validate: validate$n,
  params: params$g
};

var validate$m = function (value, _a) {
  var target = _a.target;
  return String(value) === String(target);
};

var params$f = [{
  name: 'target',
  isTarget: true
}];
var confirmed = {
  validate: validate$m,
  params: params$f
};

var validate$l = function (value, _a) {
  var length = _a.length;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$l(val, {
        length: length
      });
    });
  }

  var strVal = String(value);
  return /^[0-9]*$/.test(strVal) && strVal.length === length;
};

var params$e = [{
  name: 'length',
  cast: function (value) {
    return Number(value);
  }
}];
var digits = {
  validate: validate$l,
  params: params$e
};

var validateImage = function (file, width, height) {
  var URL = window.URL || window.webkitURL;
  return new Promise(function (resolve) {
    var image = new Image();

    image.onerror = function () {
      return resolve(false);
    };

    image.onload = function () {
      return resolve(image.width === width && image.height === height);
    };

    image.src = URL.createObjectURL(file);
  });
};

var validate$k = function (files, _a) {
  var width = _a.width,
      height = _a.height;
  var list = [];
  files = Array.isArray(files) ? files : [files];

  for (var i = 0; i < files.length; i++) {
    // if file is not an image, reject.
    if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
      return Promise.resolve(false);
    }

    list.push(files[i]);
  }

  return Promise.all(list.map(function (file) {
    return validateImage(file, width, height);
  })).then(function (values) {
    return values.every(function (v) {
      return v;
    });
  });
};

var params$d = [{
  name: 'width',
  cast: function (value) {
    return Number(value);
  }
}, {
  name: 'height',
  cast: function (value) {
    return Number(value);
  }
}];
var dimensions = {
  validate: validate$k,
  params: params$d
};

var validate$j = function (value, _a) {
  var multiple = (_a === void 0 ? {} : _a).multiple; // eslint-disable-next-line

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (multiple && !Array.isArray(value)) {
    value = String(value).split(',').map(function (emailStr) {
      return emailStr.trim();
    });
  }

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return re.test(String(val));
    });
  }

  return re.test(String(value));
};

var params$c = [{
  name: 'multiple',
  default: false
}];
var email = {
  validate: validate$j,
  params: params$c
};

function isNullOrUndefined(value) {
  return value === null || value === undefined;
}

function isEmptyArray(arr) {
  return Array.isArray(arr) && arr.length === 0;
} // eslint-disable-next-line @typescript-eslint/ban-types


function isCallable(fn) {
  return typeof fn === 'function';
}

function includes(collection, item) {
  return collection.indexOf(item) !== -1;
}
/**
 * Converts an array-like object to array, provides a simple polyfill for Array.from
 */


function toArray(arrayLike) {
  if (isCallable(Array.from)) {
    return Array.from(arrayLike);
  }
  /* istanbul ignore next */


  return _copyArray(arrayLike);
}
/* istanbul ignore next */


function _copyArray(arrayLike) {
  var array = [];
  var length = arrayLike.length;

  for (var i = 0; i < length; i++) {
    array.push(arrayLike[i]);
  }

  return array;
}

var validate$i = function (value, options) {
  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$i(val, options);
    });
  }

  return toArray(options).some(function (item) {
    // eslint-disable-next-line
    return item == value;
  });
};

var oneOf = {
  validate: validate$i
};

var validate$h = function (value, args) {
  return !validate$i(value, args);
};

var excluded = {
  validate: validate$h
};

var validate$g = function (files, extensions) {
  var regex = new RegExp(".(" + extensions.join('|') + ")$", 'i');

  if (Array.isArray(files)) {
    return files.every(function (file) {
      return regex.test(file.name);
    });
  }

  return regex.test(files.name);
};

var ext = {
  validate: validate$g
};

var validate$f = function (files) {
  var regex = /\.(jpg|svg|jpeg|png|bmp|gif|webp)$/i;

  if (Array.isArray(files)) {
    return files.every(function (file) {
      return regex.test(file.name);
    });
  }

  return regex.test(files.name);
};

var rules_image = {
  validate: validate$f
};

var validate$e = function (value) {
  if (Array.isArray(value)) {
    return value.every(function (val) {
      return /^-?[0-9]+$/.test(String(val));
    });
  }

  return /^-?[0-9]+$/.test(String(value));
};

var integer = {
  validate: validate$e
};

var validate$d = function (value, _a) {
  var other = _a.other;
  return value === other;
};

var params$b = [{
  name: 'other'
}];
var is = {
  validate: validate$d,
  params: params$b
};

var validate$c = function (value, _a) {
  var other = _a.other;
  return value !== other;
};

var params$a = [{
  name: 'other'
}];
var is_not = {
  validate: validate$c,
  params: params$a
};

var validate$b = function (value, _a) {
  var length = _a.length;

  if (isNullOrUndefined(value)) {
    return false;
  }

  if (typeof value === 'string') {
    value = toArray(value);
  }

  if (typeof value === 'number') {
    value = String(value);
  }

  if (!value.length) {
    value = toArray(value);
  }

  return value.length === length;
};

var params$9 = [{
  name: 'length',
  cast: function (value) {
    return Number(value);
  }
}];
var rules_length = {
  validate: validate$b,
  params: params$9
};

var validate$a = function (value, _a) {
  var length = _a.length;

  if (isNullOrUndefined(value)) {
    return length >= 0;
  }

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$a(val, {
        length: length
      });
    });
  }

  return String(value).length <= length;
};

var params$8 = [{
  name: 'length',
  cast: function (value) {
    return Number(value);
  }
}];
var max = {
  validate: validate$a,
  params: params$8
};

var validate$9 = function (value, _a) {
  var max = _a.max;

  if (isNullOrUndefined(value) || value === '') {
    return false;
  }

  if (Array.isArray(value)) {
    return value.length > 0 && value.every(function (val) {
      return validate$9(val, {
        max: max
      });
    });
  }

  return Number(value) <= max;
};

var params$7 = [{
  name: 'max',
  cast: function (value) {
    return Number(value);
  }
}];
var max_value = {
  validate: validate$9,
  params: params$7
};

var validate$8 = function (files, mimes) {
  var regex = new RegExp(mimes.join('|').replace('*', '.+') + "$", 'i');

  if (Array.isArray(files)) {
    return files.every(function (file) {
      return regex.test(file.type);
    });
  }

  return regex.test(files.type);
};

var mimes = {
  validate: validate$8
};

var validate$7 = function (value, _a) {
  var length = _a.length;

  if (isNullOrUndefined(value)) {
    return false;
  }

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$7(val, {
        length: length
      });
    });
  }

  return String(value).length >= length;
};

var params$6 = [{
  name: 'length',
  cast: function (value) {
    return Number(value);
  }
}];
var min = {
  validate: validate$7,
  params: params$6
};

var validate$6 = function (value, _a) {
  var min = _a.min;

  if (isNullOrUndefined(value) || value === '') {
    return false;
  }

  if (Array.isArray(value)) {
    return value.length > 0 && value.every(function (val) {
      return validate$6(val, {
        min: min
      });
    });
  }

  return Number(value) >= min;
};

var params$5 = [{
  name: 'min',
  cast: function (value) {
    return Number(value);
  }
}];
var min_value = {
  validate: validate$6,
  params: params$5
};
var ar = /^[٠١٢٣٤٥٦٧٨٩]+$/;
var en = /^[0-9]+$/;

var validate$5 = function (value) {
  var testValue = function (val) {
    var strValue = String(val);
    return en.test(strValue) || ar.test(strValue);
  };

  if (Array.isArray(value)) {
    return value.every(testValue);
  }

  return testValue(value);
};

var numeric = {
  validate: validate$5
};

var validate$4 = function (value, _a) {
  var regex = _a.regex;

  if (Array.isArray(value)) {
    return value.every(function (val) {
      return validate$4(val, {
        regex: regex
      });
    });
  }

  return regex.test(String(value));
};

var params$4 = [{
  name: 'regex',
  cast: function (value) {
    if (typeof value === 'string') {
      return new RegExp(value);
    }

    return value;
  }
}];
var regex = {
  validate: validate$4,
  params: params$4
};

var validate$3 = function (value, _a) {
  var allowFalse = (_a === void 0 ? {
    allowFalse: true
  } : _a).allowFalse;
  var result = {
    valid: false,
    required: true
  };

  if (isNullOrUndefined(value) || isEmptyArray(value)) {
    return result;
  } // incase a field considers `false` as an empty value like checkboxes.


  if (value === false && !allowFalse) {
    return result;
  }

  result.valid = !!String(value).trim().length;
  return result;
};

var computesRequired$1 = true;
var params$3 = [{
  name: 'allowFalse',
  default: true
}];
var required = {
  validate: validate$3,
  params: params$3,
  computesRequired: computesRequired$1
};

var testEmpty = function (value) {
  return isEmptyArray(value) || includes([false, null, undefined], value) || !String(value).trim().length;
};

var validate$2 = function (value, _a) {
  var target = _a.target,
      values = _a.values;
  var required;

  if (values && values.length) {
    if (!Array.isArray(values) && typeof values === 'string') {
      values = [values];
    } // eslint-disable-next-line


    required = values.some(function (val) {
      return val == String(target).trim();
    });
  } else {
    required = !testEmpty(target);
  }

  if (!required) {
    return {
      valid: true,
      required: required
    };
  }

  return {
    valid: !testEmpty(value),
    required: required
  };
};

var params$2 = [{
  name: 'target',
  isTarget: true
}, {
  name: 'values'
}];
var computesRequired = true;
var required_if = {
  validate: validate$2,
  params: params$2,
  computesRequired: computesRequired
};

var validate$1 = function (files, _a) {
  var size = _a.size;

  if (isNaN(size)) {
    return false;
  }

  var nSize = size * 1024;

  if (!Array.isArray(files)) {
    return files.size <= nSize;
  }

  for (var i = 0; i < files.length; i++) {
    if (files[i].size > nSize) {
      return false;
    }
  }

  return true;
};

var params$1 = [{
  name: 'size',
  cast: function (value) {
    return Number(value);
  }
}];
var size = {
  validate: validate$1,
  params: params$1
};

var validate = function (value, params) {
  var _a = params || {},
      _b = _a.decimals,
      decimals = _b === void 0 ? 0 : _b,
      _c = _a.separator,
      separator = _c === void 0 ? 'dot' : _c;

  var delimiterRegexPart = separator === 'comma' ? ',?' : '\\.?';
  var decimalRegexPart = decimals === 0 ? '\\d*' : "(\\d{" + decimals + "})?";
  var regex = new RegExp("^-?\\d+" + delimiterRegexPart + decimalRegexPart + "$");
  return Array.isArray(value) ? value.every(function (val) {
    return regex.test(String(val));
  }) : regex.test(String(value));
};

var rules_params = [{
  name: 'decimals',
  default: 0
}, {
  name: 'separator',
  default: 'dot'
}];
var rules_double = {
  validate: validate,
  params: rules_params
};

// CONCATENATED MODULE: ./plugins/vee-validate.js


Object(external_vee_validate_["extend"])('required', { ...required,
  message: 'You Forget To Fill this.'
});
Object(external_vee_validate_["extend"])('email', { ...email,
  message: 'Email adress not correct.'
});
Object(external_vee_validate_["extend"])('alpha', { ...alpha,
  message: 'This field must only contain alphabetic characters'
});
// EXTERNAL MODULE: ./plugins/email.js
var plugins_email = __webpack_require__(16);

// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')

 // Source: .\\axios.js (mode: 'all')

 // Source: .\\fontawesome.js (mode: 'all')

 // Source: .\\image.js (mode: 'all')

 // Source: .\\animejsModule.js (mode: 'all')

 // Source: ..\\plugins\\vue_Typical.js (mode: 'all')

 // Source: ..\\plugins\\vue_particles.js (mode: 'all')

 // Source: ..\\plugins\\vee-validate.js (mode: 'all')

 // Source: ..\\plugins\\email.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;

function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "Freelance Web Developer || freelance frontend Javascript Developer || create your website  ",
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }, {
        "name": "format-detection",
        "content": "telephone=no"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "style": [],
      "script": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/fontawesome.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/fontawesome.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof _nuxt_image === 'function') {
    await _nuxt_image(app.context, inject);
  }

  if (typeof animejsModule === 'function') {
    await animejsModule(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/vue_Typical.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue_Typical.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/vue_particles.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vue_particles.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./plugins/vee-validate.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./plugins/vee-validate.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof plugins_email["a" /* default */] === 'function') {
    await Object(plugins_email["a" /* default */])(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (false) {}

    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(dist["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(dist["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(dist["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target

  if (ssrContext.url) {
    ssrContext.url = ssrContext.url.split('?')[0];
  } // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(dist["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state; // Stop recording store mutations

      ssrContext.unsetMutationObserver();
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Record store mutations for full-static after nuxtServerInit and Middleware


  ssrContext.nuxt.mutations = [];
  ssrContext.unsetMutationObserver = store.subscribe(m => {
    ssrContext.nuxt.mutations.push([m.type, m.payload]);
  });
  /*
  ** Set layout
  */

  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/MainHeader.vue?vue&type=template&id=3bb4603f&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{class:{ 'scrolled-nav': _vm.scrollNav }},[_vm._ssrNode("<nav class=\"bar\" data-v-3bb4603f>","</nav>",[_vm._ssrNode("<div class=\"logo\" data-v-3bb4603f>","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('nuxt-img',{attrs:{"src":"/For-Website_logo_110-JPG.jpg","alt":"freelancer_vue_devloper_Bilzen_wed_development"}})],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"menu\" data-v-3bb4603f>","</div>",[_vm._ssrNode("<ul"+(_vm._ssrStyle({"list-style-type":"none"},null, { display: (!_vm.mobile) ? '' : 'none' }))+" data-v-3bb4603f>","</ul>",[_vm._ssrNode("<li data-v-3bb4603f>","</li>",[_c('NuxtLink',{attrs:{"to":"/"}},[_c('span',[_vm._v("{")]),_vm._v("Home\n            "),_c('span',[_vm._v("}")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-3bb4603f>","</li>",[_c('NuxtLink',{attrs:{"to":"/about"}},[_c('span',[_vm._v("{")]),_vm._v("About\n            "),_c('span',[_vm._v("}")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-3bb4603f>","</li>",[_c('NuxtLink',{attrs:{"to":"/Protfolio"}},[_c('span',[_vm._v("{")]),_vm._v("Portfolio\n            "),_c('span',[_vm._v("}")])])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-3bb4603f>","</li>",[_c('NuxtLink',{attrs:{"to":"/contact"}},[_c('span',[_vm._v("{")]),_vm._v("Contact\n            "),_c('span',[_vm._v("}")])])],1)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"iconBox\" data-v-3bb4603f>","</div>",[_c('font-awesome-icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.mobile),expression:"mobile"}],class:{
        'iconBox-active': _vm.mobileNav
      },attrs:{"icon":_vm.sortIcon},on:{"click":function($event){_vm.toggle(), _vm.toggleSortDirection()}}})],1),_vm._ssrNode(" "),_c('transition',{attrs:{"name":"mobile-nav"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.mobileNav),expression:"mobileNav"}],staticClass:"dropdown_nav-div",class:{ 'mobile-nav-leave-to': _vm.isClicked },on:{"click":function($event){$event.preventDefault();return _vm.hideMenu.apply(null, arguments)}}},[_c('ul',{staticClass:"dropdown_nav"},[_c('li',{staticClass:"dropdown_nav-li"},[_c('NuxtLink',{attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._v(" "),_c('li',{staticClass:"dropdown_nav-li"},[_c('NuxtLink',{attrs:{"to":"/about"}},[_vm._v("About")])],1),_vm._v(" "),_c('li',{staticClass:"dropdown_nav-li"},[_c('NuxtLink',{attrs:{"to":"/Protfolio"}},[_vm._v("Portfolio")])],1),_vm._v(" "),_c('li',{staticClass:"dropdown_nav-li"},[_c('NuxtLink',{attrs:{"to":"/contact"}},[_vm._v("Contact")])],1)]),_vm._v(" "),_c('SocialMediaContact')],1)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/MainHeader.vue?vue&type=template&id=3bb4603f&scoped=true&

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/MainHeader.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
//
//
/* harmony default export */ var MainHeadervue_type_script_lang_js_ = ({
  data() {
    return {
      scrollNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      isClicked: false,
      sortDirection: 'asc'
    };
  },

  created() {
    if (false) {}
  },

  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },

  computed: {
    sortIcon() {
      return this.sortDirection === 'asc' ? ['fas', 'bars'] : ['fas', 'window-close'];
    }

  },
  methods: {
    toggle() {
      this.mobileNav = !this.mobileNav;
    },

    toggleSortDirection() {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'; // console.log(this.sortDirection);
    },

    hideMenu() {
      // console.log("clicked");
      this.isClicked = !this.isClicked;
    },

    updateScroll() {
      //*  cross browser support -> https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY //
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > 250) {
        this.scrollNav = true;
        return;
      }

      this.scrollNav = false;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;

      if (this.windowWidth <= 768) {
        this.mobile = true;
        return;
      }

      this.mobile = false;
      this.mobileNav = false;
      return;
    }

  }
});
// CONCATENATED MODULE: ./components/MainHeader.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_MainHeadervue_type_script_lang_js_ = (MainHeadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/MainHeader.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(50)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_MainHeadervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3bb4603f",
  "a99cfe62"
  
)

/* harmony default export */ var MainHeader = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SocialMediaContact: __webpack_require__(36).default})


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/ParticelsComponennt.vue?vue&type=template&id=d171358a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"Particlescomponent"}},[_c('Particles',{attrs:{"id":"tsparticles","height":"{window.outerHeight}","options":{
      background: {
        color: {
          value: '#020234',
        },
      },
      fpsLimit: 60,
      interactivity: {
        detectsOn: 'canvas',
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 101,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#BD9ECE',
        },
        links: {
          color: '#FFD700',
          distance: 200,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: 'bottom',
          enable: true,
          outMode: 'out',
          random: true,
          speed: 1,
          straight: false,
          vibrate : true,
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 30,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: 'circle',
        },
        size: {
          random: true,
          value: 5,
        },
      },
      detectRetina: true,
    }}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ParticelsComponennt.vue?vue&type=template&id=d171358a&scoped=true&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/ParticelsComponennt.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(48)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "d171358a",
  "2fb98123"
  
)

/* harmony default export */ var ParticelsComponennt = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/@nuxt/webpack/node_modules/vue-loader/lib??vue-loader-options!./components/SocialMedia.vue?vue&type=template&id=3e477952&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"icon_menu"},[_vm._ssrNode("<li class=\"list\" data-v-3e477952>","</li>",[_vm._ssrNode("<a href=\"https://codepen.io/manoj0718\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-3e477952>","</a>",[_c('font-awesome-icon',{staticClass:"single_icon",attrs:{"icon":['fab', 'codepen']}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"list\" data-v-3e477952>","</li>",[_vm._ssrNode("<a href=\"https://github.com/Manoj0718\" target=\"_blank\" rel=\"noreferrer noopener\" data-v-3e477952>","</a>",[_c('font-awesome-icon',{staticClass:"single_icon",attrs:{"icon":['fab', 'github']}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"list\" data-v-3e477952>","</li>",[_vm._ssrNode("<a href=\"https://www.linkedin.com/in/manojfernando-web-developer/\" target=\"_blank\" data-v-3e477952>","</a>",[_c('font-awesome-icon',{staticClass:"single_icon",attrs:{"icon":['fab', 'linkedin']}})],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SocialMedia.vue?vue&type=template&id=3e477952&scoped=true&

// EXTERNAL MODULE: ./node_modules/@nuxt/webpack/node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SocialMedia.vue

var script = {}
function injectStyles (context) {
  
  var style0 = __webpack_require__(57)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "3e477952",
  "3c05ea1e"
  
)

/* harmony default export */ var SocialMedia = __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */
/***/ (function(module, exports) {

module.exports = require("image-meta");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map