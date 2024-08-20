
[//]: # (https://developer.chrome.com/docs/workbox/modules/workbox-cli)
npm install workbox-cli --global

[//]: # (run)
npx workbox-cli wizard

[//]: # (rename *.js => to *.cjs [workbox-config.cjs])

[//]: # (rename )
*.cjs

[//]: # (run, to generate in dist/sw.js)
[//]: # (To build your service worker, run)

workbox generateSW workbox-config.cjs









<!--        <script defer>-->
<!--            if ('serviceWorker' in navigator) {-->
<!--                navigator.serviceWorker.register('service-worker.js')-->
<!--                    .then(registration => {-->
<!--                        console.log('Service worker has been registered');-->
<!--                    }).catch(console.error);-->
<!--            }-->
<!--        </script>-->
