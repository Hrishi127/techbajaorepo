'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3f339245e7f5e072438343acffb02c1c",
"splash/img/light-2x.png": "96d5b1ec80120c3124b407ee100965bf",
"splash/img/dark-4x.png": "68b1afe995d1e28fe23a44dd515650b0",
"splash/img/light-3x.png": "ac6dcb4c114fbc701dc1c59200d4a8e8",
"splash/img/dark-3x.png": "ac6dcb4c114fbc701dc1c59200d4a8e8",
"splash/img/light-4x.png": "68b1afe995d1e28fe23a44dd515650b0",
"splash/img/dark-2x.png": "96d5b1ec80120c3124b407ee100965bf",
"splash/img/dark-1x.png": "7500e106e030e74b6f7aa4d476f04490",
"splash/img/light-1x.png": "7500e106e030e74b6f7aa4d476f04490",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "8632f66b778ab6afb1cdff5a5d50857a",
"index.html": "087dce5274fab000cfae6a2263b31c57",
"/": "087dce5274fab000cfae6a2263b31c57",
"main.dart.js": "056285d4b9c05c4a20bd3086ea7150a5",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "37e118adc4acb3bad1df16ec4ddfeaab",
"icons/Icon-192.png": "37e118adc4acb3bad1df16ec4ddfeaab",
"icons/Icon-maskable-192.png": "37e118adc4acb3bad1df16ec4ddfeaab",
"icons/Icon-maskable-512.png": "37e118adc4acb3bad1df16ec4ddfeaab",
"icons/Icon-512.png": "37e118adc4acb3bad1df16ec4ddfeaab",
"manifest.json": "ecfdb9bff0ae8da3b5a1bab9d4359013",
"assets/AssetManifest.json": "1fd0bd589d83ba0e9f555a6763620afc",
"assets/NOTICES": "f41ceecab504cf4a3b5b19cfa9c57f1c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "96c3518b8861275d055c92bc203941ff",
"assets/fonts/MaterialIcons-Regular.otf": "bb33f8df88d1406842325815be1fbc03",
"assets/assets/appstore.svg": "2928664fe1fc6aca88583a6f606d60ba",
"assets/assets/googleplay.png": "1f12a6762bc48d9b8718238d2da2c41d",
"assets/assets/yt.png": "d337e86234003f84a90624e9a34727c9",
"assets/assets/as.png": "bb7264c4e22d66bcdbccd4a41dfb1a36",
"assets/assets/error.json": "6a7f04236fa090ccd13eb794401265db",
"assets/assets/loading.json": "87966763d858778f27bcfa542c5e7994",
"assets/assets/cppc.png": "3e6389d349d66ef9743ce3769d9bc62d",
"assets/assets/doneanim.json": "e3cf25acbd6429a7bf4261ec6b1a0ecc",
"assets/assets/jc.png": "d6ddf0d191b8d34f5cbf7bb0ab49ea4c",
"assets/assets/gp.png": "8412cc2c8fb288c9c3cb9063e2e2aa11",
"assets/assets/sg.png": "8b5f07feccb0ffe305ad95339f6a7cd9",
"assets/assets/appstore.png": "77ca8b6daef7f3a2c81f8266a17cd96a",
"assets/assets/IG.png": "4920f506094be260940d10e12214f797",
"assets/assets/hc.png": "b96a000f807fc9ce4ae37205e7488eff",
"assets/assets/e2.png": "7c73b693e080bbbd7a863595cbd8cd63",
"assets/assets/e3.png": "deff68adf99615f207f3149dd4d01ffe",
"assets/assets/favicon.png": "37e118adc4acb3bad1df16ec4ddfeaab",
"assets/assets/e1.png": "ce73973137cb97537aeac5db5f47f813",
"assets/assets/ir.png": "08a79cd5864528397df3a6977bf379e0",
"assets/assets/logo.jpg": "37e118adc4acb3bad1df16ec4ddfeaab",
"assets/assets/qc.png": "128a6c8e1b712f818c46ad30eb73662e",
"assets/assets/pc.png": "f8ba8b1048127212866157f9c253ec39",
"assets/assets/e4.png": "8037ab1dc07e862761cc5c7f0439f6f0",
"assets/assets/bw.png": "a98dc8fc495687487ebb2ec78d321a63",
"assets/assets/chipimage.png": "421fdb0340fe3f6283c5c66606e48bfd",
"assets/assets/bs.png": "59aad62ee0f5d17e84b9f12a92e292a8",
"assets/assets/tk.png": "83170b9a79347d9781b1002538070ce7",
"assets/assets/cc.png": "486609301ef3704e40966c225791fbd3",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
