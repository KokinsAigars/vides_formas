

//  *   ts : 83c3b978-1c71-4ff8-b615-177ff062a112
//  *
//  *   Project Name: "sacredgeometrysites"
//  *   Organization: VIVENTE
//  *   Built on 2024.08.19
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Authentication Service
//  *   [auth.service.ts]
//  *
//  *   // Services //=> ts : 83c3b978-1c71-4ff8-b615-177ff062a112
//  *   import { AuthService_EP, AuthService_Google } from '@services/auth.service.ts';


// interface
import type { IAuthUser } from '@models/user';

// RootStore // => ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
import { useRootStore } from '@rootStore/index.html-store';
const RootStore = useRootStore();

import { auth } from '@/firebase.ts';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";


export const AuthService_EP = async (userData: IAuthUser) => {


    const AuthService_EP_ID = 'service : dcb1394c-e106-46af-bfe3-1936771d3f84';

    return new Promise(async (resolve, reject) => {

        try {
            const userCredentials = await signInWithEmailAndPassword(auth, userData.usernameOrEmail, userData.password);

            console.log(userCredentials);
            RootStore.act_isAuthenticated(true);
            RootStore.act_uid(userCredentials.user.uid);

            resolve(true);

        } catch (error) {
            console.log(error, `Error occurred during authorization. [${AuthService_EP_ID}];`);
            reject(false);
        }

    });

}

export const AuthService_Google = async () => {

    const AuthService_Google_ID = 'service : 3a07bef2-8486-4c9c-a424-baad43c3d044';
    const provider = new GoogleAuthProvider();

    return new Promise(async (resolve, reject) => {

        try {
            signInWithPopup(auth, provider)
                .then((result) => {

                    // const _OAuthCredential = GoogleAuthProvider.credentialFromResult(result);
                    // const user = result.user;
                    // console.log('user: ', user);

                    // console.log('email: ', result.user.email);

                    RootStore.act_isAuthenticated(true);
                    RootStore.act_uid(result.user.uid);

                    resolve(true);

                })

        } catch (error) {
            console.log(error.code);
            console.log(error.message);
            console.log(`Error occurred during authorization. [${AuthService_Google_ID}];`);
            reject(false);
        }

    });


}
