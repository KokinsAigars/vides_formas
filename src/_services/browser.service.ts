
//  *   ts : 3077efdc-d524-44c3-ad8f-e9106bb97c8a
//  *
//  *   Project Name: "Sacred Geometry Sites"
//  *   Organization: VIVENTE
//  *   Built on 2024.08.20
//  *   Contributor(s): Aigars Kokins, ChatGPT
//  *
//  *   check browser compactability
//  *   [browser.service.ts]
//  *
//  *   // Services //=> ts : 3077efdc-d524-44c3-ad8f-e9106bb97c8a
//  *   import { browserCompactabilityService } from '@services/browser.service';

import Bowser from 'bowser';
import UAParser from 'ua-parser-js';

// RootStore // => ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
import { useRootStore } from '@rootStore/index.html-store';
const RootStore = useRootStore();


export const browserCompactabilityService = async () => {
    // console.clear();

    const ID = 'ts : 3077efdc-d524-44c3-ad8f-e9106bb97c8a';

    //  function to detect browser using `navigator.userAgent`
    //  https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgent
    const fn_by_navigator = async ():Promise<string> => {

        const user_agent = navigator.userAgent.toLowerCase();

        if (user_agent.includes('chrome') && !user_agent.includes('edge') && !user_agent.includes('opr')) {return 'chrome';}
        else if (user_agent.includes('firefox')){return 'firefox';}
        else if (user_agent.includes('safari') && !user_agent.includes('chrome')){return 'safari';}
        else if (user_agent.includes('edg')){return 'edg';}
        else if (user_agent.includes('opr')){return 'opr';}
        else if (user_agent.includes('msie') ||user_agent.includes('trident')){return 'msie';}

    }

    //  function to detect browser using library `bowser`
    //  https://github.com/bowser-js/bowser
    const fn_by_lib_bowser = async ():Promise<string> => {

        const browser = Bowser.getParser(window.navigator.userAgent);

        // const browserName = browser.getBrowserName();
        // const browserVersion = browser.getBrowserVersion();
        // const isChrome = browser.satisfies({ chrome: '>0' });
        // console.log({ browserName, browserVersion, isChrome });

        return browser.getBrowserName();
    }

    //  function to detect browser using library `UAParser.js`
    //  https://github.com/faisalman/ua-parser-js
    const fn_by_lib_UAParser = async ():Promise<string> => {

        const parser = new UAParser();
        const result = parser.getResult();

        // console.log(result.browser.name); // Browser name
        // console.log(result.browser.version); // Browser version
        // console.log(result.os.name); // Operating system name
        // console.log(result.os.version); // Operating system version

        return result.browser.name;
    }


    // console.log('Browser Compactability Service:', await fn_by_navigator());
    // console.log('Browser Compactability Service:', await fn_by_lib_bowser());
    // console.log('Browser Compactability Service:', await fn_by_lib_UAParser());

    // const BROWSER: string = await fn_by_navigator();
    // const BROWSER: string = await fn_by_lib_bowser();
    const BROWSER: string = await fn_by_lib_UAParser();

    // store user browser name ir Pinia 'RootStore'
    RootStore.act_browser(BROWSER);

}
