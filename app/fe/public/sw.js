if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let c={};const t=e=>i(e,r),o={module:{uri:r},exports:c,require:t};s[r]=Promise.all(a.map((e=>o[e]||t(e)))).then((e=>(n(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"cc3685ee4694ba28d15c4bf5615e6c47"},{url:"/_next/static/0V5riFeCr_55LWqrOvUhp/_buildManifest.js",revision:"a0ae24e7f29dd3809ab75b5dd91a79dc"},{url:"/_next/static/0V5riFeCr_55LWqrOvUhp/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/162-a80a292986c42f80.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/chunks/220-64724e7e6be367fb.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/chunks/225-77c15355ef0ae2d5.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/chunks/23-d948dca427bf5b62.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/chunks/284-a557208116dacd8a.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/chunks/336-10cb44c1ef763b95.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/chunks/536-d4de84f19fbbf8c6.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/chunks/730-2a00f35b1915a063.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/chunks/899-6256a18c267aa291.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/chunks/973-80b005f3d6bca0cf.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/chunks/979-c15c7aa5d86a187f.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/chunks/ad2866b8-abe348347acfde4a.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/chunks/app/_not-found/page-f2cdf6e6812074a1.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/chunks/app/do/page-5ff9ced570b693de.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/chunks/app/layout-1ea343358e1e8d4d.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/chunks/app/loading-cd8f2f32d25c4cb6.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/chunks/app/main/layout-547f48a019d4bd6c.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/chunks/app/main/page-9c0d9534d133b934.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/chunks/app/page-c464a5eb3e538e4a.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/chunks/dc112a36-9245e58b51327391.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/chunks/f8e4659f-1ad203d1369d711c.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/chunks/fd9d1056-eb270184d5a28414.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/chunks/framework-00a8ba1a63cfdc9e.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/chunks/main-app-f41f9644bb0d43d3.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/chunks/main-d31d4756ad62cd41.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/chunks/pages/_app-037b5d058bd9a820.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/chunks/pages/_error-6ae619510b1539d6.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-303448d2eda08828.js",revision:"0V5riFeCr_55LWqrOvUhp"},{url:"/_next/static/css/1f36fd0c87ad35bb.css",revision:"1f36fd0c87ad35bb"},{url:"/_next/static/css/56fd00fa5812ebda.css",revision:"56fd00fa5812ebda"},{url:"/_next/static/css/65aa3619a1925c9d.css",revision:"65aa3619a1925c9d"},{url:"/_next/static/media/3f1f2f64c2832a4b-s.p.woff2",revision:"3b75b9b01d962687d3040069d5c6e98e"},{url:"/_next/static/media/ac7855f878f4c410-s.p.woff2",revision:"ced0f2bf940abc855b264b71caeb78ef"},{url:"/fonts/ChosunCentennial_ttf.ttf",revision:"305c34752205c6c211dd41cf02b72599"},{url:"/fonts/NanumSquareNeo-Variable.woff2",revision:"38d4e6227ef6552a946926dc89f09f0a"},{url:"/fonts/NanumSquareNeoTTF-aLt.woff2",revision:"4b118dc08311bec97fb9c09348c4e7dd"},{url:"/fonts/NanumSquareNeoTTF-bRg.woff2",revision:"3b75b9b01d962687d3040069d5c6e98e"},{url:"/fonts/NanumSquareNeoTTF-cBd.woff2",revision:"ced0f2bf940abc855b264b71caeb78ef"},{url:"/fonts/NanumSquareNeoTTF-dEb.woff2",revision:"c1e6fc8655d6053ef822b17a6edb1272"},{url:"/fonts/NanumSquareNeoTTF-eHv.woff2",revision:"b50f260994038237723a57b70ef496a5"},{url:"/google104d4cbd859dffd5.html",revision:"0b8e0424790dbb09ea180f415367d05a"},{url:"/icon/android-chrome-192x192.png",revision:"608caeca509dfc2f697066f0a2f365cd"},{url:"/icon/android-chrome-512x512.png",revision:"ceae4912b2252b4a25fc17c63a409ba0"},{url:"/icon/apple-touch-icon.png",revision:"18f0c2ac9322f0cb897f1932b67f4397"},{url:"/icon/favicon-16x16.png",revision:"49d8a5e8e1fe27c37b1b2700b956fcd8"},{url:"/icon/favicon-32x32.png",revision:"97aed649e7bbe79df0305133a4f5b653"},{url:"/icon/favicon.ico",revision:"59bf4dc00c283de2618132a1ef405f4a"},{url:"/icon/site.webmanifest",revision:"053100cb84a50d2ae7f5492f7dd7f25e"},{url:"/images/award-sample.png",revision:"599afdbb3ab14bb2314f92003d8cc86f"},{url:"/images/award-template-1.png",revision:"84ba0b60269bed86b200ca3ecfc5eb30"},{url:"/images/award-template-2.png",revision:"efdd8629c5fc576b3f04b3629b556ef0"},{url:"/images/award-template-3.png",revision:"170bff02f7f5cb2123ce7c51dd72706e"},{url:"/images/background-award.png",revision:"548b5ed23cd6c33eb3a40ee98d03bafc"},{url:"/images/background-development.jpg",revision:"8d6902d529544acceb32d2301e130a60"},{url:"/images/background-pattern.jpg",revision:"c12c614d731ae0ce82e015da4349a76b"},{url:"/images/thumbnail.png",revision:"4eae41f329a1de0f642475496961fa96"},{url:"/logo/logo-gemma.png",revision:"4d9ef0e73865f626fb153a298ed924d4"},{url:"/logo/logo-icon.png",revision:"d087856353df6ccb0113ac2e750925f9"},{url:"/lottie/arrow.json",revision:"0927eefe4246ca543183cf6a20f1ba12"},{url:"/lottie/complete.json",revision:"450ac3b01bb8e3b69d657d2fa28b8840"},{url:"/lottie/congratulations.json",revision:"d08016af4e2ac18e387b3efdd39f0047"},{url:"/lottie/dot-circling.json",revision:"642f537d0bb91bf6783fc6e9b88cb281"},{url:"/lottie/lottie-search.json",revision:"06bacfa3eba5e9b630fc061ada3f8514"},{url:"/lottie/security-check-blue.json",revision:"d68af658b2fb7cb87c2026dfccf592a0"},{url:"/lottie/security-check-red.json",revision:"90a71201684ed380b6fcdaf3b4479621"},{url:"/manifest.json",revision:"ef3104fd56c68eea191af3d6955d7de6"},{url:"/naver95fe1372dfd35b94631cc4d1e7b109b1.html",revision:"8773c7876775a42b3e009186be02ea0b"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/robots.txt",revision:"ebd588b5334a0dd873b112adf997940d"},{url:"/sitemap-0.xml",revision:"debaf637ef288e088c59fce4d5ee6de9"},{url:"/sitemap.xml",revision:"d1e3ac74c72cd5225e6664180af48b28"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
