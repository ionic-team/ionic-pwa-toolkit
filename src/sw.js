importScripts('workbox-sw.prod.v2.1.2.js');

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});

/*
  This is our code to handle push events.
*/
self.addEventListener('push', (event) => {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Push Notification';
  const options = {
    body: `${event.data.text()}`,
    icon: 'images/icon.png',
    badge: 'images/badge.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});

workboxSW.precache([]);