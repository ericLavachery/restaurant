/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["carte.html","70967feaaed88a23192918a56dbe00d5"],["contact.html","685353210d659337974c6f6c7d0bb14b"],["icons/README.md","15e1b27094bf102a483d8779bcb137ed"],["icons/android-chrome-192x192.png","b426b5edff3ded34cd1bf4c60380ff58"],["icons/android-chrome-256x256.png","b4f719fc8d3eb36f11a2f2a68cbf5c45"],["icons/apple-touch-icon-114x114.png","9cf18f78439103bd9ed01065510f8b1a"],["icons/apple-touch-icon-120x120.png","78ad423ff26e1a8aba878b60800dc855"],["icons/apple-touch-icon-144x144.png","773f8fd8cf615a66eed8abebb85f051e"],["icons/apple-touch-icon-152x152.png","8032d1a8c98d50f994eba545957ebeaa"],["icons/apple-touch-icon-180x180.png","ef15e8bb715454345a1c2e23ba7bdf43"],["icons/apple-touch-icon-57x57.png","12c5be70c20b0e5ac8de8d4746d7d3ba"],["icons/apple-touch-icon-60x60.png","3e29a8a42f2aafbce72784d53787f4df"],["icons/apple-touch-icon-72x72.png","e60584da98677daa2f84b4b984c238bd"],["icons/apple-touch-icon-76x76.png","769f133936679e082ee464dd48cefc9c"],["icons/apple-touch-icon.png","ef15e8bb715454345a1c2e23ba7bdf43"],["icons/browserconfig.xml","25b9e2aa2584904d01a0bf88841ae826"],["icons/favicon-16x16.png","9084000af94cd605aee1ecda5cca379f"],["icons/favicon-194x194.png","8aa73986bc1fda02150e49010046d209"],["icons/favicon-32x32.png","26da0ad75de163ba6d9f16743e36ba18"],["icons/favicon.ico","99c8af21642db37778fc52fe9a7fc76c"],["icons/html_code.html","aad922f11bd6e116663110f890c61e89"],["icons/mstile-144x144.png","3aefa49977fa0a4f09d733c535754095"],["icons/mstile-150x150.png","6e5c3c7091b57f926cc9163bb194f575"],["icons/safari-pinned-tab.svg","008780a4b375bfe728e8a08ff9396d0c"],["icons/site.webmanifest","19a09318a44956257726102cac4239dd"],["img/abba.jpg","1085b62cbaff8f02a472d9c04e244505"],["img/abort.jpg","7bced27d607bada1617d5a3305ca05b3"],["img/bar.jpg","f13bdd747d293fc94d13a8b032e41348"],["img/burger.jpg","cb9707690e10392e33b4bef675a90961"],["img/butter.jpg","5c72843ac95dd425d8e56b2918145356"],["img/cafe.jpg","803c3cb1e7dfced44ac3d9cbbf71eecd"],["img/disc.jpg","0717586cff51fd00e5003a90530753fa"],["img/dumptower.jpg","ad5b14010ecb14696493379a19571fce"],["img/dune.jpg","50ceaf8e0d416a7fbef66e1f8b5287be"],["img/erps.jpg","440ddb28dfcf42895997d8f87342117a"],["img/freshbrain.jpg","0906163ff55df78249f5542070ae73e4"],["img/gb.jpg","e497fb86502ef30374a164bc14475b3d"],["img/gocar.jpg","94fa030e0439f584dfbf637f13865255"],["img/greenthing.jpg","571ff7acb273d2774dc76396a088a7af"],["img/ice.jpg","353f4f5976a8797c11694325da8c8fd3"],["img/icebg.jpg","24684180b800dbf666db1da50ae32519"],["img/lavomat.jpg","301d533755b29a6cbfd6d3392271e7ff"],["img/mickey.jpg","cd4bc37542ee04432c153b488cff063b"],["img/moss.jpg","37f85058200472000b879f42f26d6400"],["img/shit.jpg","442b94bbe1824abab200ec328e3ef521"],["img/stocks.jpg","19e4d173a612bb034bcc6ad268eb1a49"],["img/test.jpg","576f24661eb0fb9b552be1c4894a7a94"],["img/vacances.jpg","8fcd2f522590b713748c89db12fbce9b"],["index.html","50d041ba89bd4857ded34c02301f1cae"],["pics.html","9a627e306258c1936e4f2e37400d699f"],["pics_2.html","bbf38513dd2cf0ca56708cd53d8c954a"],["pics_3.html","5e2d86d23dd994c615bc5036ae23625f"],["restos.html","1e0f380e11a201137e0d705f4ac121e4"],["style.css","5e898bfc252226fe0126506e2220bc4b"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







