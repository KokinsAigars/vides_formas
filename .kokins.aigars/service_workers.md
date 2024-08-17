
[//]: # (https://developer.chrome.com/docs/workbox/modules/workbox-cli)
npm install workbox-cli --global

[//]: # (run)
npx workbox-cli wizard

[//]: # (rename )
*.cjs

[//]: # (run, to generate in dist/)
workbox generateSW workbox-config.cjs









<!--        <script defer>-->
<!--            if ('serviceWorker' in navigator) {-->
<!--                navigator.serviceWorker.register('service-worker.js')-->
<!--                    .then(registration => {-->
<!--                        console.log('Service worker has been registered');-->
<!--                    }).catch(console.error);-->
<!--            }-->
<!--        </script>-->