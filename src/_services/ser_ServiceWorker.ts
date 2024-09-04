
//  *   ts : 6b1379b4-7118-4761-b9b6-c35e7198fd9c
//  *
//  *   Project Name: "Sacred Geometry Sites"
//  *   Organization: VIVENTE
//  *   Built on 2024.09.04
//  *   Contributor(s): Aigars Kokins
//  *
//  *   service worker, caching images, *.obj files etc.
//  *   abbreviation: sw
//  *
//  *   [ser_worker.ts]
//  *
//  *   // Service - Service Worker //=> ts : 6b1379b4-7118-4761-b9b6-c35e7198fd9c
//  *   import { ser_sw_register, ser_sw_unregister } from '@services/ser_ServiceWorker';

export const ser_sw_register = () => {

    const ID: string = '6b1379b4-7118-4761-b9b6-c35e7198fd9c';

    if('serviceWorker' in navigator) {
        console.log("Service worker!");
        navigator.serviceWorker
            .register('sw.js')
            .then(registration => {
                console.log('Service worker successfully registered! ID: ', ID);
            })
    }

}

export const ser_sw_unregister = () => {
    navigator.serviceWorker.getRegistrations()
        .then(function(registrations) {
            for(let registration of registrations) {
                registration.unregister()
            }
        })
}