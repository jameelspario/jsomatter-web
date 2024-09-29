'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ade31a28b1c7b052f5592a7e5b5ea4d5",
".git/config": "43e1d35ded32f43a1c6507f661aa6b8d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4921f27085d55a6fd4f1a35588eef8e9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d08d790bf94372aa6be6b59962090252",
".git/logs/refs/heads/master": "d08d790bf94372aa6be6b59962090252",
".git/logs/refs/remotes/origin/master": "825cebae345c4b7f9151aeedb83dfcb3",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/11/4c6c97956b3525c3868f4a6c3cf9d52608a1ca": "6841e81c93411378135db16fe17e9cae",
".git/objects/11/8fc7c20179c07e7c8316e56b78d143b7c3d63d": "996ab120d141c5cea177d125353e0b43",
".git/objects/15/a9107c4a1dea4082bbde9a2f75387a5a8315f5": "c88a096b3f8800a2cbfd1ba82277a2ab",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1c/be2eb5c3f0f0b5fdc720047b24ce45cafde2e3": "f9f1cb42572346916b26d9a14f7e55ee",
".git/objects/1d/5678b001adedd74accd6f900bd348284481786": "d4109af3f71c32cd5f19ecf72dab353e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/10f60cd519891f57a247df738f9dd95bbec367": "b914f3f83edd53f2afe2a1e19ac862d1",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/f3597156042ae583010263e1b95e4f266da017": "0e450a3bd98d6303ee3975c13ca2f9da",
".git/objects/24/6786bf2f99b6ef0e51c868bf8e68b4416151f2": "da85883650e6e9ed222006874879b7bd",
".git/objects/25/87645bb536d249604a4d110660884259f36d0f": "c7e70425896030262c2e35784da5bc84",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/28/65c0b5f25831d2aef8ccdb752e9e3bd48be043": "9101f72ef25abf5850f99568d4131ad2",
".git/objects/29/202b84902a3a7c87ee94161531a025db3836f4": "85c3e8c71800fb839645d9be76d3cde3",
".git/objects/2c/c3acdaa61dd7050790b208f92aff87308ae562": "1197622a47f46538dac9e8604ebafd0a",
".git/objects/2e/a3c730244661bf66a87583d2f7b3c9d03cb24c": "bcd0dcc999c0aa245c9b1e029cb41fb3",
".git/objects/2f/a7d4029ee62464021b58fa3aad11c8d804cec3": "bcf6bb11508aece4c8d7d44cba4cc260",
".git/objects/30/d1ef590a2ef4c1601cd277ce959b3f92a960de": "48fa5455e47b4298071045207c3ad155",
".git/objects/35/8602daed198d9d9d0d5f585de456ff493d1b95": "34f8070ee29079fd373aeb972f5f7162",
".git/objects/36/816e04a45b1daab9c83bb2b9a16fa44f8ddb91": "aacbbe42845157897f1fced8bd4f4d6a",
".git/objects/3a/791c5a85e057918412e67630cd5e784066d6f5": "58ed84b3f2b0672f3b1674fb3f7aad2f",
".git/objects/42/8dd916dc1dfa712a620f4e193fba1bffc0f774": "852c70adf172c35c73cc81361464b0a6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/02f23694a88a03199fb84f9fa9a5ce947bef9e": "d38ff2478b55f61b8ab1ac6991dfdc69",
".git/objects/48/3b22e2b828c53671d433b5bcc5906aed675b0c": "e1d2b1bd12e658479c039af913d28146",
".git/objects/49/73c353c39d49e50068657625c771f2b2be4998": "793291ff8268a319be3d1c537db1024f",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/2210acddf324e814952d15f303f1c31e95d307": "5bb7f5ea6c686b3fbcf7f9defc7e4c61",
".git/objects/51/2f8d860831373e94fde4c632c1ff6378fe45f5": "b818b756648c64b395c95d98891333a2",
".git/objects/51/7403446fa259fb34beba8e39b3ad8071142593": "2c7e5394dbc39bb01025ceeeed4b2a79",
".git/objects/56/c93515ca9b931c24eeaac5a97b13d83f45d249": "7fee0194432a82242780c51df3d918ac",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5c/a51f1f44ad5523192f8a7b09e81694092b4f3c": "d41428d08439f2dd34eedbb47a4e6ecd",
".git/objects/62/551aae503108aca873e175efa24a8b2435697e": "f38ec5e85d5b2f6e170444bde32766fa",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/6b/252edb171388c6c022b9e9e854f14d44d122e9": "166fcbcf15b8f9b077b430851df150c2",
".git/objects/6c/1ca7f1b95039af8f0e692eee0827c031a034dc": "a36e80e8132233c5a4425b1d173ab4a0",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/7c/50b60fb1db93bdf5a30858f4a72acb1f6856a6": "f41375fbb395d96258e2eb19ecf28bb3",
".git/objects/7c/9c7140bd6dc12c18588d8213e3a1f10730bbdb": "0d8b0877c4e77de685b6bab894ab936c",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/b091c2f8d45140e91f5c1035e6e20c5d35298d": "5f5a95ceaee909e67e1eea9423d2357f",
".git/objects/8c/dd858041d961bf816cf5acabd5c8a9e443bbc6": "a3f3bc24d3725d280e5b3507cca7528d",
".git/objects/8d/ab12b29158f77c44a0d1adbe12ff61d2a8782d": "44af9df3f91e2d9f97aa20d43f3b7b78",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/97/5e3666dceb7573e6cd0d56b1125cfbae8f2028": "cca6abd39242f3ce4f856f4fc2bacacb",
".git/objects/9d/5fc3bdee325ed8174b91a6850f0ea2e440621b": "95f474ee43a08f5cc9d4f0791c3b1f94",
".git/objects/a6/0f88ad998cf7177be97e627ca1d02f5737b17f": "8d4c53d0737bd732db42456d5b38f70a",
".git/objects/ad/807e60ed6c4bc86e8d170580d41bfd775083ed": "bc4283a6a19944da001337cee37eac99",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c8/9b38595921f3677530251e9a6055e5dc0f660e": "30e8c3fa036918984a5c6e16fffb7235",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ca/f2b4751eb517474175d24ea42d906972e74f8e": "67a11c5822ec7e553141bd16e8f9bc7b",
".git/objects/cb/9561fe87cbe660805998376776ef6dae04ccc8": "c94ee4d279e62387137c0c0c63e0b0d0",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d2/3c989a4367ee37c11585eeedeced1f78dde80c": "93afaa42fe14c9e9e5c788f6947eaf9e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/8bcac31c4ba209a795b248c9c7f7392d9307b9": "6a3a02073447e9638b787fab3e4c205a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/a4a6fd3f460ec36f5185b2b80256635b7ad408": "e1fab96279a20ff84f25272bbc0c0696",
".git/objects/da/eec05b508246310ca567f739397c9014901aed": "b217cf82474ce4274f5ab00239d23fab",
".git/objects/dc/e4376a715757391e69e6c0b5a2a99887618cc0": "68cc633b446b09ff43025efba4392348",
".git/objects/e1/859cb0ffe27b63223d8c6034a89e6974b9fe57": "4a44ef5320450a44a6fa6d052f08b78c",
".git/objects/e3/31428d1bc1ca0a51fa8be68fb39ff216a1e7d0": "a1a307a11b0754854542dc034de38a4c",
".git/objects/e3/a494058995d08598f6bd206094eac9d8e10347": "12f3c470ff8a4e5a2f68933f69c9e36d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/38ddd1a5f65eb45a36d2103abd3aec81ef15f3": "a641dd2dec7e2f00e4dfe87b7acc47d8",
".git/objects/f5/d42fbd3df37fd787ba682164c67e5b19c5f505": "9be67606b8cc49749c57b2684846b2ee",
".git/refs/heads/master": "9595fd5f71207f612df139196a791d7b",
".git/refs/remotes/origin/master": "9595fd5f71207f612df139196a791d7b",
"assets/AssetManifest.bin": "4cc66454d038f3438819feb2bc4eebfa",
"assets/AssetManifest.bin.json": "ed6e36c049d07d3555a8a2045645948d",
"assets/AssetManifest.json": "a4f43d26ecfbcce0b058b087cabb5a57",
"assets/assets/svg/bold.svg": "0f642113b1782988c629e01b9bb5e3f3",
"assets/assets/svg/italic.svg": "e38b5836715d46844316e458378a42f3",
"assets/assets/svg/json.svg": "3112d176b084334924add4ee05f7656c",
"assets/assets/svg/text_decrease.svg": "ece05b00ca21f55da296520169275463",
"assets/assets/svg/text_increase.svg": "3abd42ccbe5959c48ccd8e4a64f2bb52",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8f6a120034123fed515714ac4cbbad8a",
"assets/NOTICES": "b9b73476817fa6ace28650aa28771c32",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "16b61a47eaafcec8bd761ff3255cf8df",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b148713ddff0b61989f1042ee49c8e6b",
"/": "b148713ddff0b61989f1042ee49c8e6b",
"main.dart.js": "d8e73c2f740799def88b55e127903c02",
"manifest.json": "748d160778d29704be9e811df169471f",
"version.json": "65d54485abcfbaa306e50c4900fe26d6"};
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
