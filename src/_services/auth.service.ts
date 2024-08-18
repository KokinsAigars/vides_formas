

// interface
import type { IAuthUser } from '@models/user';

// RootStore // => ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
import { useRootStore } from '@rootStore/index.html-store';
const RootStore = useRootStore();

import { auth } from '@/firebase.ts';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";


export const AuthService_EP = async (userData: IAuthUser) => {


    const AuthService_EP_ID = 'service : AuthService_EP_ID';

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

    const AuthService_Google_ID = 'service : AuthService_Google_ID';
    const provider = new GoogleAuthProvider();

    return new Promise(async (resolve, reject) => {

        try {
            signInWithPopup(auth, provider)
                .then((result) => {

                    // const _OAuthCredential = GoogleAuthProvider.credentialFromResult(result);
                    const user = result.user;

                    // console.log('email: ', result.user.email);
                    // console.log('uid: ', result.user.uid);
                    // console.log('displayName: ', result.user.displayName);
                    // console.log('operationType: ', result.operationType);
                    // console.log('_OAuthCredential.idToken: ', _OAuthCredential.idToken);
                    console.log('user: ', user);

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
