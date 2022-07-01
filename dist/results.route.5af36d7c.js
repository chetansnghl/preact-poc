// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"gxc7p":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = true;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b00f64485af36d7c";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"aub9U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _preactRouter = require("preact-router");
var _hooks = require("preact/hooks");
var _searchComponent = require("../components/search.component");
var _searchComponentDefault = parcelHelpers.interopDefault(_searchComponent);
var _searchResultComponent = require("../components/searchResult.component");
var _searchResultComponentDefault = parcelHelpers.interopDefault(_searchResultComponent);
var _httpService = require("../services/http.service");
var _luxon = require("luxon");
var __read = undefined && undefined.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var logo = require("../assets/images/loading.gif");
function ResultsRoute() {
    var _a1 = __read((0, _preactRouter.useRouter)(), 1), searchParams = _a1[0];
    var _b1 = __read((0, _hooks.useState)(true), 2), isLoading = _b1[0], setLoading = _b1[1];
    var _c1 = __read((0, _hooks.useState)([]), 2), holidays = _c1[0], setHolidays = _c1[1];
    (0, _hooks.useEffect)(function() {
        var _a, _b, _c, _d;
        setLoading(true);
        var departureDate = (0, _luxon.DateTime).fromFormat((_a = searchParams === null || searchParams === void 0 ? void 0 : searchParams.matches) === null || _a === void 0 ? void 0 : _a.departureDate, "yyyy-MM-dd").toFormat("dd-MM-yyyy");
        var requestBody = {
            "bookingType": "holiday",
            "location": (_b = searchParams === null || searchParams === void 0 ? void 0 : searchParams.matches) === null || _b === void 0 ? void 0 : _b.location,
            "departureDate": departureDate,
            "duration": (_c = searchParams === null || searchParams === void 0 ? void 0 : searchParams.matches) === null || _c === void 0 ? void 0 : _c.duration,
            "gateway": "LHR",
            "partyCompositions": [
                {
                    "adults": (_d = searchParams === null || searchParams === void 0 ? void 0 : searchParams.matches) === null || _d === void 0 ? void 0 : _d.adults,
                    "childAges": [],
                    "infants": 0
                }
            ]
        };
        (0, _httpService.doRequest)("POST", "/cjs-search-api/search", requestBody).then(function(response) {
            setHolidays(response["holidays"]);
            setLoading(false);
        });
    }, [
        searchParams
    ]);
    return (0, _preact.h)("section", null, (0, _preact.h)("div", {
        className: "container"
    }, (0, _preact.h)((0, _searchComponentDefault.default), null)), (0, _preact.h)("div", {
        className: "row"
    }, isLoading ? (0, _preact.h)("div", {
        className: "text-center py-5"
    }, (0, _preact.h)("img", {
        src: logo,
        width: "200"
    })) : (0, _preact.h)((0, _searchResultComponentDefault.default), {
        holidays: holidays,
        setLoading: setLoading
    })));
}
exports.default = ResultsRoute;

},{"preact":"26zcy","preact-router":"e4tGw","preact/hooks":"eZN76","../components/search.component":"dTUIm","../components/searchResult.component":"jLump","../services/http.service":"afHpL","luxon":"dpK6X","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../assets/images/loading.gif":"lWutI"}],"jLump":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _preact = require("preact");
var _hooks = require("preact/hooks");
var _hotelComponent = require("./hotel.component");
var _hotelComponentDefault = parcelHelpers.interopDefault(_hotelComponent);
var _filterComponent = require("./filter.component");
var _filterComponentDefault = parcelHelpers.interopDefault(_filterComponent);
var _searchResultModuleLess = require("../less/searchResult.module.less");
var __read = undefined && undefined.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spread = undefined && undefined.__spread || function() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
};
function SearchResultComponent(props) {
    var holidays = props === null || props === void 0 ? void 0 : props.holidays;
    var _a = __read((0, _hooks.useState)(holidays), 2), filteredHolidays = _a[0], setFilteredHolidays = _a[1];
    var _b = __read((0, _hooks.useState)([]), 2), selectedPrice = _b[0], setSelectedPrice = _b[1];
    var _c = __read((0, _hooks.useState)([]), 2), selectedRating = _c[0], setSelectedRating = _c[1];
    var _d = __read((0, _hooks.useState)([]), 2), selectedFacilities = _d[0], setSelectedFacilities = _d[1];
    var _e = __read((0, _hooks.useState)(false), 2), render = _e[0], setRender = _e[1];
    var handlePriceFilter = function(e) {
        var currentTarget = e.target;
        var stringRangeArr = currentTarget.value.split(",");
        var numberRangeArr = stringRangeArr.map(function(item) {
            return parseInt(item);
        });
        var check = currentTarget.checked;
        if (check) setSelectedPrice(function(prevState) {
            return __spread(prevState, [
                numberRangeArr
            ]);
        });
        if (!check) setSelectedPrice(function(prevState) {
            return prevState.filter(function(item) {
                return item[0] !== numberRangeArr[0] && item[1] !== numberRangeArr[1];
            });
        });
    };
    var handleRatingFilter = function(e) {
        var currentTarget = e.target;
        var check = currentTarget.checked;
        var value = parseInt(currentTarget.value);
        if (check) setSelectedRating(function(prevState) {
            return __spread(prevState, [
                value
            ]);
        });
        if (!check) setSelectedRating(function(prevState) {
            return prevState.filter(function(item) {
                return item != value;
            });
        });
    };
    var handleFacilityFilter = function(e) {
        var currentTarget = e.target;
        var check = currentTarget.checked;
        if (check) setSelectedFacilities(function(prevState) {
            return __spread(prevState, [
                currentTarget.value
            ]);
        });
        if (!check) setSelectedFacilities(function(prevState) {
            return prevState.filter(function(item) {
                return item != currentTarget.value;
            });
        });
    };
    var handleRemoveFilter = function(e) {
        setSelectedFacilities([]);
        setSelectedPrice([]);
        setSelectedRating([]);
        setRender(true);
        setTimeout(function() {
            setRender(false);
        }, 50);
    };
    (0, _hooks.useEffect)(function() {
        setFilteredHolidays(holidays);
    }, [
        holidays
    ]);
    (0, _hooks.useEffect)(function() {
        return selectedFilter();
    }, [
        selectedPrice,
        selectedRating,
        selectedFacilities
    ]);
    var selectedFilter = function() {
        var filteredResult = holidays;
        if (selectedRating.length > 0) filteredResult = filteredResult.filter(function(holiday) {
            return selectedRating.indexOf(parseInt(holiday["hotel"]["content"]["vRating"])) > -1;
        });
        if (selectedPrice.length > 0) {
            var filterHoliday_1 = [];
            selectedPrice.forEach(function(range) {
                filterHoliday_1.push(filteredResult.filter(function(holiday) {
                    return holiday["pricePerPerson"] >= range[0] && holiday["pricePerPerson"] <= range[1];
                }));
            });
            filteredResult = [].concat.apply([], __spread(filterHoliday_1));
        }
        if (selectedFacilities) filteredResult = filteredResult.filter(function(holiday) {
            return selectedFacilities.every(function(requiredFacilities) {
                return holiday["hotel"]["content"]["hotelFacilities"].includes(requiredFacilities);
            });
        });
        setFilteredHolidays(filteredResult);
    };
    return (0, _preact.h)("section", {
        className: "full-bleed mt-4 " + _searchResultModuleLess["holiday-box"]
    }, (0, _preact.h)("div", {
        className: "wrapper " + _searchResultModuleLess["holiday-list-box"]
    }, (0, _preact.h)("div", {
        className: "row"
    }, (0, _preact.h)("div", {
        className: "col-md-3"
    }, !render && (0, _preact.h)("div", {
        className: "" + _searchResultModuleLess["filters"]
    }, (0, _preact.h)((0, _filterComponentDefault.default), {
        handlePriceFilter: handlePriceFilter,
        handleRatingFilter: handleRatingFilter,
        handleFacilityFilter: handleFacilityFilter,
        handleRemoveFilter: handleRemoveFilter
    }))), (0, _preact.h)("div", {
        className: "col-md-9"
    }, (0, _preact.h)("div", {
        className: "row"
    }, filteredHolidays.length > 0 && (0, _preact.h)("div", {
        className: "" + _searchResultModuleLess["hotels-grid"]
    }, filteredHolidays.map(function(holiday) {
        return (0, _preact.h)((0, _hotelComponentDefault.default), {
            hotel: holiday["hotel"],
            pricePP: holiday["pricePerPerson"]
        });
    })), filteredHolidays.length === 0 && (0, _preact.h)("h1", null, "No Hotels Found!!"))))));
}
exports.default = SearchResultComponent;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","preact/hooks":"eZN76","./filter.component":"dMRcV","./hotel.component":"bVyqp","preact":"26zcy","../less/searchResult.module.less":"gY5uZ"}],"dMRcV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _search = require("../consts/search");
var _filterModuleLess = require("../less/filter.module.less");
/* istanbul ignore next */ var starIcon = require("../assets/images/star.png");
function Filter(_a) {
    var handlePriceFilter = _a.handlePriceFilter, handleRatingFilter = _a.handleRatingFilter, handleFacilityFilter = _a.handleFacilityFilter, handleRemoveFilter = _a.handleRemoveFilter;
    var priceFilter = function(arr) {
        return (0, _preact.h)("div", {
            className: _filterModuleLess["filter-input"]
        }, (0, _preact.h)("input", {
            type: "checkbox",
            id: arr[0].toString(),
            onClick: handlePriceFilter,
            value: arr
        }), (0, _preact.h)("label", {
            className: "form-check-label",
            htmlFor: arr[0].toString()
        }, "From " + arr[0] + " to " + arr[1]));
    };
    var ratingFilter = function(stars) {
        return (0, _preact.h)("div", {
            className: _filterModuleLess["filter-input"]
        }, (0, _preact.h)("input", {
            type: "checkbox",
            id: stars.toString(),
            onClick: handleRatingFilter,
            value: stars
        }), (0, _preact.h)("label", {
            className: "form-check-label",
            htmlFor: stars.toString()
        }, stars, (0, _preact.h)("img", {
            src: starIcon,
            width: "15"
        }), "+"));
    };
    return (0, _preact.h)("div", null, (0, _preact.h)("div", null, (0, _preact.h)("h2", null, "Filters"), (0, _preact.h)("div", {
        className: "d-flex flex-row-reverse"
    }, (0, _preact.h)("a", {
        className: "btn btn-xs btn-danger",
        onClick: handleRemoveFilter
    }, "Reset All"))), (0, _preact.h)("hr", null), (0, _preact.h)("div", {
        className: "rating-filter"
    }, (0, _preact.h)("h4", null, "Ratings"), ratingFilter(1), ratingFilter(2), ratingFilter(3), ratingFilter(4), ratingFilter(5)), (0, _preact.h)("hr", null), (0, _preact.h)("div", {
        className: "price-filter"
    }, (0, _preact.h)("h4", null, "Price PP"), priceFilter([
        0,
        500
    ]), priceFilter([
        500,
        1500
    ]), priceFilter([
        1500,
        3000
    ]), priceFilter([
        3000,
        5000
    ])), (0, _preact.h)("div", {
        className: "facility-filter"
    }, (0, _preact.h)("hr", null), (0, _preact.h)("div", {
        className: "rating-filter"
    }, (0, _preact.h)("h4", null, "Facilities"), (0, _search.FACILITIES).map(function(facility) {
        return (0, _preact.h)("div", {
            className: _filterModuleLess["filter-input"],
            key: facility
        }, (0, _preact.h)("input", {
            type: "checkbox",
            value: facility,
            id: facility,
            onClick: handleFacilityFilter
        }), (0, _preact.h)("label", {
            className: "form-check-label",
            htmlFor: facility
        }, facility));
    }))));
}
exports.default = Filter;

},{"preact":"26zcy","../consts/search":"41r2A","../less/filter.module.less":"1jpoz","../assets/images/star.png":"b8TaY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1jpoz":[function(require,module,exports) {
module.exports["active"] = `f6zjeq_active`;
module.exports["filter-input"] = `f6zjeq_filter-input`;
module.exports["rating-anchor"] = `f6zjeq_rating-anchor`;

},{}],"b8TaY":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("f7aa3") + "star.bbab4e80.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"bVyqp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _hotelModuleLess = require("../less/hotel.module.less");
var starIcon = require("../assets/images/star.png");
function Hotel(_a) {
    var hotel = _a.hotel, pricePP = _a.pricePP;
    var name = hotel["content"]["name"];
    var description = hotel["content"]["hotelDescription"];
    var facilities = hotel["content"]["hotelFacilities"];
    var rating = hotel.content.vRating;
    var getImageSlider = function(images) {
        var timestamp = Math.floor(Math.random() * 100);
        return (0, _preact.h)("div", {
            id: "carouselExampleControls" + timestamp,
            className: "carousel slide",
            "data-ride": "carousel"
        }, (0, _preact.h)("div", {
            className: "carousel-inner"
        }, images === null || images === void 0 ? void 0 : images.map(function(img, i) {
            return (0, _preact.h)("div", {
                className: "carousel-item " + (i == 0 ? "active" : "")
            }, (0, _preact.h)("img", {
                className: "d-block w-100 card-img-top",
                src: img.RESULTS_CAROUSEL.url
            }));
        })));
    };
    return (0, _preact.h)("div", {
        className: '"card" ' + _hotelModuleLess["card-box"]
    }, getImageSlider(hotel["content"]["images"]), (0, _preact.h)("div", {
        className: "card-body"
    }, (0, _preact.h)("h4", {
        className: '"card-title" ' + _hotelModuleLess["header"]
    }, name), (0, _preact.h)("hr", null), (0, _preact.h)("div", {
        className: _hotelModuleLess["cardText"]
    }, rating, (0, _preact.h)("img", {
        src: starIcon,
        width: "15"
    })), (0, _preact.h)("div", {
        className: "card-text " + _hotelModuleLess["cardText"]
    }, (0, _preact.h)("b", null, " ", (0, _preact.h)("span", null, "\u20AC"), " ", pricePP, " ", (0, _preact.h)("sub", null, "PP"), " ")), (0, _preact.h)("div", {
        className: "" + _hotelModuleLess["hotel-desc"]
    }, description)));
}
exports.default = Hotel;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","preact":"26zcy","../assets/images/star.png":"b8TaY","../less/hotel.module.less":"5mz7Q"}],"5mz7Q":[function(require,module,exports) {
module.exports["hotel-desc"] = `_7wYLFa_hotel-desc`;
module.exports["header"] = `_7wYLFa_header`;
module.exports["hotel-facilities"] = `_7wYLFa_hotel-facilities`;
module.exports["card-box"] = `_7wYLFa_card-box`;
module.exports["cardText"] = `_7wYLFa_cardText`;

},{}],"gY5uZ":[function(require,module,exports) {
module.exports["holiday-list-box"] = `xCeWDW_holiday-list-box`;
module.exports["card-text"] = `xCeWDW_card-text`;
module.exports["hotels-grid"] = `xCeWDW_hotels-grid`;
module.exports["filters"] = `xCeWDW_filters`;
module.exports["holiday-box"] = `xCeWDW_holiday-box`;

},{}],"afHpL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "doRequest", ()=>doRequest);
var doRequest = function(method, url, body) {
    if (body === void 0) body = undefined;
    return new Promise(function(resolve, reject) {
        run(method, url, body, function(request) {
            if (request.readyState !== 4) return;
            switch(request.status){
                case 200:
                    resolve(JSON.parse(request.responseText));
                    break;
                case 204:
                    resolve(undefined);
                    break;
                case 500:
                    var isJson = request.getResponseHeader("content-type") === "application/json";
                    reject(isJson ? JSON.parse(request.responseText) : undefined);
                default:
                    reject(undefined);
                    break;
            }
        });
    });
};
var run = function(method, url, body, stateChange) {
    if (body === void 0) body = undefined;
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function() {
        return stateChange(xmlHttpRequest);
    };
    xmlHttpRequest.open(method, url);
    xmlHttpRequest.setRequestHeader("Content-Type", "application/json");
    xmlHttpRequest.send(body != null ? JSON.stringify(body) : undefined);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lWutI":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("f7aa3") + "loading.5a9166ce.gif" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}]},["gxc7p"], null, "parcelRequired508")

//# sourceMappingURL=results.route.5af36d7c.js.map
