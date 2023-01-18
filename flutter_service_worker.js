'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3f339245e7f5e072438343acffb02c1c",
"index.html": "ae2bbf52d69e03f5bb60e8484d1840a5",
"/": "ae2bbf52d69e03f5bb60e8484d1840a5",
"CNAME": "fc3117b64daa7862a70bb329261c48db",
"main.dart.js": "f60f3c325d6c9973273c8e48e1a01b50",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "37e118adc4acb3bad1df16ec4ddfeaab",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5204285464b031c66a64c35c536bf2ab",
".git/ORIG_HEAD": "336c678a5cb6553a39c42324cc28c6ec",
".git/config": "488b01a40cb4cd91cdd0edfee75a2343",
".git/objects/61/78e87d4bbdef0633d9d4e062ce0a5997250f77": "c8d08919e8f1a477c6745dc5d2f7acb2",
".git/objects/57/865e98f0f9d4fd7574731c9e788adc884111eb": "03293248c93a526ab06abf4642b4e069",
".git/objects/6a/6996b95200d617570e54a8c3b2a4bdabf4f9dd": "fc1f2af4a2ceb400f5effbd634b0aead",
".git/objects/35/10b1c90a7e756c33abcca1c1e01e08da207901": "d2ec8a64c72dce90acceb159fd9b32eb",
".git/objects/69/9b4839ec771e5c3c5e87e53cab9f639185f004": "e31c8733da3b9b1ee8d38fbb759ca707",
".git/objects/58/c11bb803e2ac12e12a67f801ab83a3614f35ab": "1d72840b1e52bc52e31a982cad06593b",
".git/objects/60/371cb0c69a8a38d89cfe3c430df3c820c26e93": "a25d8a819fdd98103e0fd3a96ebcfbef",
".git/objects/a3/7389d4f4261ad8da0805ccdb50f9ec4b7eede8": "1c671fe524d591cefa12c6c9bd8d04d8",
".git/objects/b2/38e2f3e4651bea24f8a2f106971e2894b0bf44": "8086e852b36198c94a9b4e0c88bddc37",
".git/objects/ac/b421cb4635f5963f197222644ac233ac91ef02": "5d061b439928c964c8a15c7f197cc251",
".git/objects/d0/6034ea9550cd4438fccc186df40f05dd60e278": "dedb6373fd892dcf97b081324efbc875",
".git/objects/df/643141670ad4f48ceb564470ace4fa3527a328": "56e5eff2808158c44be980fd4efcf87e",
".git/objects/da/7c98af8d15b5dcbafd70373017a0a744f00275": "e170d5d70a42d5f295f9082bacd665ba",
".git/objects/d1/28ac0333d1e6b526aac2f6c0e298bf90733273": "18465fdfce8dda4d5a28ff4b3e08f0cb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/0efc3a0723b60459f38c7a099ab7803718bd48": "8717780514e53b78da67cdf0f568e40c",
".git/objects/f4/5d04e896b9f7eddd6c4c82d5f523163caa534d": "5cd2d1b2bfd1f075c5eed0592d4f1a90",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/e4/b5ba89811cbaa09988f458860f9b6372edf95c": "4d59f2407f3de23238b51fd40a330272",
".git/objects/c6/d8f89aa337bf32e0a3b2c6fb8e23da56c135f7": "af5d7ce32138828d0de816aae2b33e37",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/5277fb21f58fe09aab59175d3e4a04f276f649": "cd43430781bccb8d0e33edc91ec8e889",
".git/objects/7d/37e404c9838ee41db031448bb5c924c29dd597": "425bf2140d9d3ed3aa2b52d357fd533c",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/7b/4d5e260251b1cb1a485c9f263babe1ad763efa": "7d010d1758ac85ba2909b2c0b0a0c597",
".git/objects/7b/edbe2214e6024ed96f418d2eadeb2e80ffcf72": "72809760fd116564a2ec77bfb5303e6f",
".git/objects/19/3d1155129f9d7adbe01efba32e234a5d65f078": "4951a49e52c36a0fad0a750a311de13e",
".git/objects/21/bb14cbcd58e7e8416acdfcbfd3a89104e2aae6": "e700fe28412413e903651701b2a838dc",
".git/objects/21/3e1c9fa9780c61e095fb7dab068b82b2c62689": "1e63d2a0d23dd9398f4fc6e46572eefb",
".git/objects/75/80643eaf8b6aa05d0b9cbf96b9c7587ff0b787": "874fc599530a3a4fc19ad476da1b6515",
".git/objects/86/de9142705e3543324da05c99b869a3ff0ae655": "adf35167b001121f274143a74fe886b0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/2db2b7700c1e45ee2db36ac8445229c2baba68": "f9e5e3c301329576d70efbc9efd7ed65",
".git/objects/5c/ac4ef7989d3e5245a1148bd5b27185e13e8043": "f406159706430a2a819e3b2b06097c1b",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/6d/1415d26d57120c04b7162772c563f02c9dd0f1": "3cf27b13f3d32adace4d1e2a982f3789",
".git/objects/39/5b41775cefc4d1c5775f74688c271411b4f62b": "6c1456fa734feeb8468594e32f6f813b",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/64/59bbe435d00d69de6ab2b773d3b743586f6d04": "202c889b6353ca1175fce57f5c0cef76",
".git/objects/90/5ca0f24908fef881bb9a9570f0e34986ef2344": "5066cc01880347dd94a6840543d85c59",
".git/objects/d3/37e5f41c25ae19565dc67916f9f8596808ea65": "5340fc1acb45b6b6c7e47dfb3c84615f",
".git/objects/b8/2ce9e0fb048ef7bffd13e4fed95089bcca09b3": "f95f384c74d454f55c8b6bda19eb0cc0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/56d813c8a397d7ed06840bdb78b0814c5195cf": "0962b9188afe4ba188daff8ea5dca344",
".git/objects/a1/c895fc9b76029a286a1db8f3383c6d0312edae": "b46cb5150cad4c77c61cc0710b1175ce",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/6a8d1f67ffe9d518097395929a2b8ad0c56f94": "f75f558b07748c347a989b7e62dce110",
".git/objects/ef/7f47dfbadc9efcfc8497e0cac1a7bc56114422": "2021255b64a0db1e3020423ae3abe7e6",
".git/objects/cd/aa5d6086902df780d45ada735537a2fc0ce9d7": "d3f6aa6747d669e815260440ee601441",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f7/bc9231c62a4f6aa69a8f91c7e41939cf9153b3": "f78f7990a67ba869ee17ed80e88ee62e",
".git/objects/f7/45353916b3a39a20dc576de41c2088f042a710": "4820e58ab6e738a64b170b46ec764c15",
".git/objects/fa/6dd8adb017d36b2167b7dbf61b23ce4506131d": "15f6b808cec0c8ca0452cd34ad92bfd4",
".git/objects/ff/c63315598cbfbd64d66750e8c1feb403687d65": "f91f495f63c458d3c673fce139f2a222",
".git/objects/ff/495bc15365e3374e322125096106fcb11a42e6": "8f030cc7b429d074ebb3ddf0c95f4702",
".git/objects/c2/16da714f019e399ded3c44c8b26f50bc326017": "1544bd6e5650c6c19690055d6f6d00b5",
".git/objects/f8/5b2e45013bebdd52183bab4309259daa4f63c2": "13b010760fdd26219e15276cbcee6997",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/dc9d75b2d3327a2fc37b413a7de562f5c6be31": "00ae8bf435dc64ffef9b624dfbc6d9af",
".git/objects/1b/fc75915303c1d7ae8de0bb9d9f6b9b7142fc45": "9808c83f801a86c5d3e98445cf88b612",
".git/objects/70/86ad95435048f5855d8c39fc11d0a2403ebcb7": "db0efaf885cbb60e7be2368d919298da",
".git/objects/23/13a6b1b52dfa8f47f0b16235faeead222aeac3": "2f737da59520eb6b7585a1dc1b681255",
".git/objects/71/4c5a3266839bc5cd50e5b1eccc9f96ac67fccd": "7fa034e94649e5f287fb3ddb11efdd5f",
".git/objects/49/709c4bf60ecd7aaf59648a9e689b7df954016f": "6420867ded4df7649ce3f75bacedf49d",
".git/objects/40/4b18d7c3333ad42aac79ae5638e0644507c721": "c1794f0eb7072e87b8bb273d991fe55d",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/7a/ea6839e6578ba5be325a12623fa845c0f65302": "2721cb8a383babdf01864c8d3008b637",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "33cfcfcde0e035b58340934a3be745cc",
".git/logs/refs/heads/main": "3b5acefd54f53e81debac3c4254c6558",
".git/logs/refs/remotes/origin/main": "3bca4925ed7ca77673c43efaab703dc6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "24a153c0ad97ff46685deed818cb8138",
".git/refs/remotes/origin/main": "24a153c0ad97ff46685deed818cb8138",
".git/index": "afb1dca140766e4a9f1800b675c342e8",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "9ab97eaa80716a33a807ca4e766f4066",
"assets/AssetManifest.json": "3e6bc96afe741d78d067cf1f1f1df608",
"assets/NOTICES": "30011e9dc013636c14870393ad0598f9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "fb4d37274c45e459972e6d29d6d7a840",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/yt.png": "d337e86234003f84a90624e9a34727c9",
"assets/assets/as.png": "bb7264c4e22d66bcdbccd4a41dfb1a36",
"assets/assets/gp.png": "8412cc2c8fb288c9c3cb9063e2e2aa11",
"assets/assets/IG.png": "4920f506094be260940d10e12214f797",
"assets/assets/logo.jpg": "37e118adc4acb3bad1df16ec4ddfeaab",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
