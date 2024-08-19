
//  *   ts : 3077efdc-d524-44c3-ad8f-e9106bb97c8a
//  *
//  *   Project Name: "sacredgeometrysites"
//  *   Organization: VIVENTE
//  *   Built on 2024.08.16
//  *   Contributor(s): Aigars Kokins
//  *
//  *   check browser compactability
//  *   [browser.service.ts]
//  *
//  *   // Services //=> ts : 3077efdc-d524-44c3-ad8f-e9106bb97c8a
//  *   import { BrowserService } from '@services/browser.service';



export const browserCompactabilityService = () => {

    const ID = 'ts : 3077efdc-d524-44c3-ad8f-e9106bb97c8a';

    console.log('browser Compactability Service', ID);
}



//     public var nVer = navigator.appVersion;
//     public var nAgt = navigator.userAgent;
//     public var browserName  = navigator.appName;
//     public var fullVersion  = ''+parseFloat(navigator.appVersion);
//     public var majorVersion = parseInt(navigator.appVersion,10);
//     public var nameOffset,verOffset,ix;
//
//     // In Opera, the true version is after "OPR" or after "Version"
//     if ((verOffset=nAgt.indexOf("OPR"))!=-1) {
//         browserName = "Opera";
//         fullVersion = nAgt.substring(verOffset+4);
//         if ((verOffset=nAgt.indexOf("Version"))!=-1)
//             fullVersion = nAgt.substring(verOffset+8);
//     }
// // In MS Edge, the true version is after "Edg" in userAgent
//     else if ((verOffset=nAgt.indexOf("Edg"))!=-1) {
//         browserName = "Microsoft Edge";
//         fullVersion = nAgt.substring(verOffset+4);
//     }
// // In MSIE, the true version is after "MSIE" in userAgent
//     else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
//         browserName = "Microsoft Internet Explorer";
//         fullVersion = nAgt.substring(verOffset+5);
//     }
// // In Chrome, the true version is after "Chrome"
//     else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
//         browserName = "Chrome";
//         fullVersion = nAgt.substring(verOffset+7);
//     }
// // In Safari, the true version is after "Safari" or after "Version"
//     else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
//         browserName = "Safari";
//         fullVersion = nAgt.substring(verOffset+7);
//         if ((verOffset=nAgt.indexOf("Version"))!=-1)
//             fullVersion = nAgt.substring(verOffset+8);
//     }
// // In Firefox, the true version is after "Firefox"
//     else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
//         browserName = "Firefox";
//         fullVersion = nAgt.substring(verOffset+8);
//     }
// // In most other browsers, "name/version" is at the end of userAgent
//     else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ) {
//         browserName = nAgt.substring(nameOffset,verOffset);
//         fullVersion = nAgt.substring(verOffset+1);
//         if (browserName.toLowerCase()==browserName.toUpperCase()) {
//             browserName = navigator.appName;
//         }
//     }
// // trim the fullVersion string at semicolon/space if present
//     if ((ix=fullVersion.indexOf(";"))!=-1)
//         fullVersion=fullVersion.substring(0,ix);
//     if ((ix=fullVersion.indexOf(" "))!=-1)
//         fullVersion=fullVersion.substring(0,ix);
//
//     majorVersion = parseInt(''+fullVersion,10);
//     if (isNaN(majorVersion)) {
//         fullVersion  = ''+parseFloat(navigator.appVersion);
//         majorVersion = parseInt(navigator.appVersion,10);
//     }
// }
// //
// //
// // document.write(''
// //     +'Browser name  = '+browserName+'<br>'
// //     +'Full version  = '+fullVersion+'<br>'
// //     +'Major version = '+majorVersion+'<br>'
// //     +'navigator.appName = '+navigator.appName+'<br>'
// //     +'navigator.userAgent = '+navigator.userAgent+'<br>'
// // )




//
// <!--        <script>-->
// <!--            // if (window.safari !== undefined) console.log("Safari!");-->
// <!--            // if (window.chrome !== undefined) console.log("Chrome!");-->
// <!--        </script>-->
