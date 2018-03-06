# Ionic PWA Toolkit Beta

The Ionic PWA Toolkit is the recommended way to build production ready Progressive Web Apps (PWAs) with Ionic. This toolkit gets you started with [Stencil](https://stenciljs.com/) and an early release of Ionic (4.x+). This combination of tools gives you the ability to build a fast, efficient PWA with zero config needed and best practices out of the box.

***Note: This project is a beta and uses an early release of Ionic 4.***

## Features Included in the Ionic PWA Toolkit

- Stencil for easily building and loading standardized Web Components
- Ionic Framework
- Routing
- Push Notifications setup
- Showing a toast when a new version of the PWA is available
- Unit Tests
- Pre-rendering
- zero config lazy loading
- zero config code splitting
- Polyfills selectively loaded depending on the browser support
- ES6 by default for new browsers, ES5 for older browsers
- Everything needed for an add to homescreen PWA (service worker, web manifest and iOS meta tags)
- lazy-img component for lazy loading below the fold images

## Getting Started

To start building a PWA with the Ionic PWA Toolkit, clone this repo to a new directory:

```bash
git clone https://github.com/ionic-team/ionic-pwa-toolkit.git my-pwa
cd my-pwa
git remote rm origin
```

and run:

```bash
npm install
npm start
```

## Production

To build your PWA for production, run:

```bash
npm run build
```

A production build includes everything needed for your project to be a PWA right out of the box. This includes both a Web Manifest (src/manifest.json) and a Service Worker (www/sw.js).

## Hosting

For top PWA performance, your app should be hosted with a hosting provider that supports HTTPS and HTTP2 out of the box.

We currently recommend [Firebase Hosting](https://firebase.google.com/docs/hosting/), though we are working on Ionic PWA Hosting with even more features.

### H2 Push

To ensure the fastest possible load time for your PWA, we recommend setting up H2 push on Firebase. [Here is an example](https://github.com/ionic-team/ionic-stencil-hn-app/blob/master/firebase.json#L19-L25) of what this looks like in your `firebase.json` file. Lets go over the steps of how to setup H2 push properly for your Ionic PWA:

- Do a production build of your PWA with `npm run build`
- Serve your WWW folder locally using a local http server and open it in Chrome. https://www.npmjs.com/package/http-server works pretty well for this. If using the http-server package you can serve your www folder by running `http-server www`.
- Open Chrome Dev Tools on your PWA and open the [network tab of your chrome dev tools](https://developers.google.com/web/tools/chrome-devtools/network-performance/reference). Reload the page and you should see all of your JS files show up in the network tab. Besides the `sw.js` file, these are the files you want to H2 push.
- You can then put these files in your push header setup by following this syntax https://github.com/ionic-team/ionic-stencil-hn-app/blob/master/firebase.json#L23.

** Note: In an upcoming release we will be automatically generating this H2 push config for you meaning you will not have to do any of the above anymore **

## Service Workers

For info on how Service Workers work in Stencil check out our [Service Worker docs](https://stenciljs.com/docs/service-workers).

## Developing with a Service Worker

In some cases, for instance when you are working on adding [web push notifications](https://developers.google.com/web/fundamentals/push-notifications/) or [background sync](https://developers.google.com/web/updates/2015/12/background-sync), both which require a Service Worker, it can be handy to be able to dev builds with a service worker.

To do this with the Ionic PWA toolkit simply run `npm run devWithSW`. This will start a dev build, but with the Service Worker also getting livereloaded.

## Lazy Loading Images

Check out the `lazy-img` component in `src/components/lazy-img/lazy-img.tsx`.

## Unit Tests

To run the unit tests once, run:

```bash
npm test
```

To run the unit tests and watch for file changes during development, run:

```bash
npm run test.watch
```

## Testing your PWA's performance

We recommend using https://www.webpagetest.org/easy with the `Run Lighthouse Audit` option turned on. This will give you an in depth look into your PWAs load performance on the average device connected to the average network. For more info on how to use webpagetest check out https://zoompf.com/blog/2015/07/the-seo-experts-guide-to-web-performance-using-webpagetest-2.

## Why Stencil

Stencil is a tool we developed at Ionic to make it easy to build Web Components and load them in an efficient manner. Generally, using a classic framework like Angular or React will make building a fast PWA challenging. Stencil provides a similar API to Angular and React but is focused on meeting the performance demands of modern Progressive Web Apps.
