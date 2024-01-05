importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js"
);

workbox.routing.registerRoute(
  new RegExp("https://jsonplaceholder.typicode.com/users"),
  workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
  new RegExp("https://fonts.(?:googleapis|gstatic).com/(.*)"),
  workbox.strategies.cacheFirst({
    cacheName: "google-fonts",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 30,
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
    ],
  })
);

const data = [
  { revision: "21e2d0e5b2f52aac856dce2a57e35b43", url: "css/main.css" },
  { revision: "f6f535c3adc7818888584a3cd07a1594", url: "index.html" },
  { revision: "39687aa5694f9edc4ff3015cfd7cb446", url: "js/app.js" },
  { revision: "c93c3e27a102ecbc82b03d3997a750ef", url: "workbox-9d70b447.js" },
];

workbox.precaching.precacheAndRoute(data);
