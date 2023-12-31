(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.6.0"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.6.0"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.6.0"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.6.0"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class v extends _{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==v.copyRedirectedCacheableResponsesPlugin&&(a===v.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"11c12bad5b531c1dc642980b479de30f","url":"404.html"},{"revision":"b9979776ce9a9aa2c20e495bea804102","url":"about.html"},{"revision":"598060f32ac381bfc43d1a929852f36a","url":"assets/css/styles.31fee46b.css"},{"revision":"a976126df0ec7c51fb597589ca5e4795","url":"assets/js/00ab3e02.50132f63.js"},{"revision":"bde2b108d05270e468ae1914b39c3b34","url":"assets/js/01a85c17.532fb9ae.js"},{"revision":"02367e98fd2663971d6a9e50def7d771","url":"assets/js/0643c96a.9186fa3c.js"},{"revision":"aa0db5b580cc87116282e550992542a4","url":"assets/js/0acf3d61.7248294d.js"},{"revision":"42355ba6bab4fa5537b965e5aacae2a1","url":"assets/js/0f0feb1b.0c7ca629.js"},{"revision":"fb8387ddc3ce34955617b5b2ab1aa60e","url":"assets/js/131.f03f9fcb.js"},{"revision":"88fc062531eda0e8e005240959c22bee","url":"assets/js/15ad2644.bc626adc.js"},{"revision":"336c58b6b9bf22e331112b9bebc12086","url":"assets/js/16e2b93d.657721e8.js"},{"revision":"5f41f0295f2878c567369ea462b42445","url":"assets/js/17896441.83b2c2e5.js"},{"revision":"552464b69403bddec6b6e148507e645d","url":"assets/js/196.a4d916cc.js"},{"revision":"5146c186bce1855073a4a67a1a97918e","url":"assets/js/1c0d80c2.2c17d407.js"},{"revision":"3dac34db89a1e2389efb2ee3f09804ee","url":"assets/js/1df93b7f.278230fd.js"},{"revision":"6a61767e6719b10c00edcba22b609b6a","url":"assets/js/1f391b9e.fc6b4735.js"},{"revision":"2244889c2c6effa6cf18b9b90d1f8027","url":"assets/js/283.591e6664.js"},{"revision":"2de9badfc3505e2da42610038af4a2df","url":"assets/js/290.531a7702.js"},{"revision":"fee734158420c944f9b2bca7ab3723b2","url":"assets/js/2fc79637.a03e9f38.js"},{"revision":"24d3adee4eeed617972a3ff5dec138be","url":"assets/js/339a4b99.08454731.js"},{"revision":"e5b9b1b2c1ac30e021d68d6c123aff6d","url":"assets/js/4e5ac5e7.a2f86655.js"},{"revision":"6caa196ca784325cb03b69af69d785aa","url":"assets/js/50bc71d4.9a511197.js"},{"revision":"87b81153b95ddef1d19874c5ec3881f1","url":"assets/js/5e95c892.bcce3e63.js"},{"revision":"bb393dbaf7321bde6bf672547f33be20","url":"assets/js/618e7bab.9cdc2167.js"},{"revision":"0c36e4f2dd1dd7d00efacb56a721be4e","url":"assets/js/64381b0d.c7de2573.js"},{"revision":"58b319ef429153ddbfb13d250d0fefb2","url":"assets/js/677.f5b379e4.js"},{"revision":"23ad350731cc355791a12bbbeb5d2a95","url":"assets/js/6875c492.4e2661a2.js"},{"revision":"a00ee9184d489d8ba1c5b92bf1b79eb7","url":"assets/js/772.ef38804a.js"},{"revision":"2688b34850a0e7d93c4ceb36377ecdb7","url":"assets/js/814f3328.59f57679.js"},{"revision":"fcd1bf8e02d0cd8c0c1e9647e548b3ad","url":"assets/js/8c60a3c8.28ca800f.js"},{"revision":"47878a0b5381e221631736bead9fe418","url":"assets/js/8d998be3.4cc0502f.js"},{"revision":"2061e5d776c1fde14cdc0651768a634d","url":"assets/js/935f2afb.79a5a7ac.js"},{"revision":"3ec3a38993290b9e1f945a215c6e6089","url":"assets/js/9e4087bc.17ea877c.js"},{"revision":"7b67f76f82cbf6c6731342a2013dd6ca","url":"assets/js/a6aa9e1f.d572cde4.js"},{"revision":"0cf3e63d271c1dd9c56b51ae50bcc365","url":"assets/js/a7bd4aaa.f71f413b.js"},{"revision":"1bb2a265aa47fd691f586cbc85540b66","url":"assets/js/a94703ab.6dc4054f.js"},{"revision":"dea829287de4f7f92487bc237d04082e","url":"assets/js/c485c5b5.10527f8e.js"},{"revision":"2319b6f4362c9e4c25a704606953ff4b","url":"assets/js/ccc49370.79d8d529.js"},{"revision":"b2316dbffe39efd626b14b884ae33e94","url":"assets/js/e66d1694.eb58cfcd.js"},{"revision":"04b01071484cc6c5707205beeaec9be2","url":"assets/js/eb437ce2.c81e70f1.js"},{"revision":"ae639f9eedba2edfb267aa38406b84b1","url":"assets/js/f95a777f.c6302feb.js"},{"revision":"fbb37cdc5c8284f22946080272fe5d8a","url":"assets/js/main.7b2556f5.js"},{"revision":"c52bb6bff27b3c9b3c6d1dad2c15820a","url":"assets/js/runtime~main.07565353.js"},{"revision":"c17e45e31c7b0963c63248598445e299","url":"blog.html"},{"revision":"5daae3123df58a02a0a5b34ef5c7ae45","url":"blog/archive.html"},{"revision":"f2dfae5e46c55a6ed79b473ea0291920","url":"blog/convert-emoji-character-to-unicode-number-in-javascript.html"},{"revision":"b761129f21eea708fda9bed17dc21877","url":"blog/tags.html"},{"revision":"718fb851e47bf5efb33edca02dc359ed","url":"blog/tags/emoji.html"},{"revision":"c754d04f916d0fbce75b5554f1766e24","url":"docs.html"},{"revision":"b2e67664abd5682bffed8a6c6eb36ea0","url":"docs/FontMagic.html"},{"revision":"0bd7169a2ada76e10a33f22772d80030","url":"docs/Helm.html"},{"revision":"64f0f32297ba0250aa9f1bba2e8a43e6","url":"docs/RCalculator.html"},{"revision":"3ef332dd1a981a555cdd73d3be1d8634","url":"docs/RGB.html"},{"revision":"3bd523f728491914c0e7d1b59a28e9ca","url":"Helm-privacy.html"},{"revision":"d3e1b218618d8d8d667b957ced0f1dec","url":"index.html"},{"revision":"c5a0ee2ee0a1c35ef42bedc01b95542e","url":"manifest.json"},{"revision":"176ff8290d77d500c2095970ce4440a2","url":"RCalculator-privacy.html"},{"revision":"92268583855c85f6aee59f1f3126122f","url":"RGB-privacy.html"},{"revision":"8e4e6ac2afd6411395f037e6aef894ea","url":"assets/images/FontMagic-db238b803db15391bf63dfdd5dc23847.png"},{"revision":"cfa882a62787074bc3ecfc85d4172cae","url":"assets/images/helm-6ef7cc39ef6e0477919aedd43e63efb8.png"},{"revision":"c4d6b36005d688b5c58a031db7e980fb","url":"assets/images/RCalculator-b0bfe430f8adcccb5f8d56d535b2e4c5.png"},{"revision":"c59f624f2a131710a8e7a41a74334aef","url":"assets/images/rgb-007fca188a570d4c00f2775c99905385.png"},{"revision":"85f2a29427ae11429c0052ea6b0a9c96","url":"img/android-chrome-192x192.png"},{"revision":"45abfadae89044f7bac7f04763b99ffe","url":"img/android-chrome-512x512.png"},{"revision":"e3efa76a65af0a92038592f31efa6f46","url":"img/apple-touch-icon.png"},{"revision":"e239a9c5d3a7596e809b7778b04d0bf6","url":"img/banner.svg"},{"revision":"239431865b266821c42a5d281138b6d5","url":"img/favicon-16x16.png"},{"revision":"eb5210b5d6276784fc0b7510991a346b","url":"img/favicon-32x32.png"},{"revision":"83c77e49766946f5d3c32c428c943f45","url":"img/favicon.ico"},{"revision":"ae5fe2d25285396195c04f04957f889a","url":"img/FontMagic.svg"},{"revision":"3ac7bb909b134f50f83ab566aff8218a","url":"img/Helm.svg"},{"revision":"c6d0e71719098b7ab425427408852fcd","url":"img/logo.svg"},{"revision":"7054df9aad4f0936af315bc5b2b529f8","url":"img/mstile-150x150.png"},{"revision":"4116f8ea70da76973bd19c0b4ad0c8e7","url":"img/PCalculator.svg"},{"revision":"e93cc271f5a175b0d7cfe96858885d15","url":"img/RGB.svg"},{"revision":"888c211224665dab85ffd19bb529726d","url":"img/safari-pinned-tab.svg"},{"revision":"b9d9189ed8f8dd58e70d9f8b3f693b3e","url":"img/tutorial/docsVersionDropdown.png"},{"revision":"c14bff79aafafca0957ccc34ee026e2c","url":"img/tutorial/localeDropdown.png"}],s=new m({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();