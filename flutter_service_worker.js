'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ce321a66feab9ed4e311ccb675edd0e2",
"version.json": "c10c2a16e0afb74ab454834282f5ad2b",
"favicon.ico": "f9e0bf6537f4c8bd41d4e868d50918d1",
"index.html": "867a1b0dcc3edfb9bdab980d55869629",
"/": "867a1b0dcc3edfb9bdab980d55869629",
"main.dart.js": "6e4f4ca70d30584150868ac53d34e3c2",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"README.md": "d41d8cd98f00b204e9800998ecf8427e",
"icons/Icon-192.png": "942c75dbd48fa18011d2ea1a5afb381d",
"icons/Icon-maskable-192.png": "f3e852c13d0ab2ce94baeb92a153167e",
"icons/Icon-maskable-512.png": "7e3751ac6fcf32dad4bd7b189c53d4f8",
"icons/Icon-512.png": "c519466ab95d77231d61acfb87409fe5",
"manifest.json": "355d39234e9ff954bf27d34f4fcceae5",
".git/ORIG_HEAD": "ad9c47295018b051cdf43c404820403d",
".git/config": "bd255a1931a22adf520552a41b73a7e0",
".git/objects/0d/6903acb6288d9f6892a912a88a874652b0456f": "9e130f88d7423211493f71efdd8d7857",
".git/objects/92/126df46e48b36d8dde441ca198bba5b5d986dc": "2e50a8da306299c7762f0796d9780637",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/5a/5a060a993858f5995c2117f5b693aa3b8a2c7a": "8b0b5def7fcc579d38511e938bd85384",
".git/objects/a4/c71c7f7a92ec100a449cfc1b9213ab0b2d876e": "77f12d7316a773f71656156fd0c48429",
".git/objects/d7/e320e149716db6eb189e27f4b29faa432a3e12": "b44d41523b07b05854b78c0aa6c15d7a",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/b4/f987b76a8d82115fd63baa2acb3125f5f7a4a7": "f9007bf84614b04de20af970cc5dd308",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/e3dc9d12085a8e0415da3ee48d78a11f3c1208": "67b0d89fa97dbf191460c971cb93602d",
".git/objects/d6/3d17e1ec6d1abea7018eb2d31f8cd7c8d57c70": "9b17d944a582f666929a56661fc9150e",
".git/objects/c0/41c190c7b46b35a0fb304b3870b843a44a67ed": "7ced0bf98b57928ea1ccbf5b29782e07",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/f7e77fe37670c46f241d37d13e04f44e7dd935": "ebcf0095260eb267cd86171ecf860d74",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7c/e513d927fddfb86edf27fa0db0ab93ae569665": "4d26c394d80197e2598f86975d50bb8f",
".git/objects/1f/283e0430412922e16476cbdfc85590765952fc": "199d63c25eb8d581f3bfac560d508490",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/7b/363c0097f212ab4adfb71e24668e3718fcc003": "b30712b7dc5b8fb2eb74767d17f66b81",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/7e/606430da7d4c7c3c3784f1b938d5a6262156b3": "32159431f55e347a00e6285957a99e30",
".git/objects/19/5d29bfa7adce3f55320d95e8fa8262b2cc87cc": "238956218203ab39f4c3ba42ce094e98",
".git/objects/43/1a355af78d2dd7cf9f1208f38f9fc6e29e729a": "7f2da50ccd0cb25a0cca84ea67cd3186",
".git/objects/36/6d05f79ee2bda543e6189d4b1373661e38e6d0": "33902595f38c4ad77298c6b69fdc64af",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/97/4982601ea0f727e84acd6df28b47ccee94eae8": "bfe724b760ab699cbfe203749e35967c",
".git/objects/63/add08d5b2468b53b98a1f29a11eb3cf6ecf32d": "99a1fee9e878b3409b221260128ee540",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/dc/a3399e186cd2e385b5b114797db10e6dcc2248": "ddb2ef3db9f95e1c502d9bbb1c324366",
".git/objects/af/0ed31a915b8c99583184f5b12c357f275c3e79": "fdeaa6e9a124be821874c2133560c3b8",
".git/objects/db/2eb1c6364663019a1f1f68194f15e162d2db57": "6b1e7976b4afcb85002a9d743e47b265",
".git/objects/a1/6dc661dd3a2d8e2cb360ad8f39c3e48f3aff95": "dbd55dbfe1d1cfda95b7a1f7edf84ae7",
".git/objects/ef/48d57ee4caf42fd0c22a33abffc5e37256eee3": "f21c05951cacbf5ce7efdc30ae55efce",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f9/3e3a1a1525fb5b91020da86e44810c87a2d7bc": "3bfabf2b9b9d1a341e4263f23c96a46b",
".git/objects/f1/146a259e2906bc4d7b1f6ee674dfacbc0c90f1": "78b2ef2e5286b796d75fb3d1acfdf686",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/1b/3a7ed582d97f1537b129484cdbc6d07c989977": "d88883fbb30523a8c2f5e875bf1e9dca",
".git/objects/23/1fae17372a217183126ea534dfa9ec4534fed3": "39046c6dcb56ed03e096543bbcb123f3",
".git/objects/15/95635698abae578912db3636f2954109d3ce26": "728c109fe1d9965093167d8e4799c6cc",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/82/b9a26c49057fc7de191d5a83feed3c34972801": "5d4504da4bfba5a5b62d0140686ff080",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/2e/6fcb7b461d8e790da2f4785d66a6d2d23daef6": "40e24c04503c51d54d592a9d1c52bd94",
".git/objects/8b/41ad0d01a996dd2745be8af663250e5db8a53f": "d7473884b11faea47a29262461b5cc6f",
".git/objects/13/b1431c034a8a91d7db3099ff5b3f089f921fef": "2d8b760d37569739334d1083215fcc33",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a90fb742f88fb72f5a6984801ebd6739",
".git/logs/refs/heads/main": "1b162a1e236f58f4d9dfd959c66de2e8",
".git/logs/refs/remotes/origin/main": "26de69d9e1d66e3a19fb0ec67a066f98",
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
".git/refs/heads/main": "ad9c47295018b051cdf43c404820403d",
".git/refs/remotes/origin/main": "ad9c47295018b051cdf43c404820403d",
".git/index": "d4ebb0105d43090d43f8d805502d0ea5",
".git/COMMIT_EDITMSG": "3cb3bd390b133d79b3f2e07fd32b1d51",
".git/FETCH_HEAD": "7fdcaf8c3d2e2e44497ad2c864562845",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "99ee506142f16f3abffd95adf0922ca9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/fonts/MaterialIcons-Regular.otf": "df650ca99066f5ef865fe7edaf4e1c8e",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
