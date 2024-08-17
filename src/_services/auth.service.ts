

// interface
import type { IAuthUser } from '@models/user';

// RootStore // => ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
import { useRootStore } from '@rootStore/index.html-store';

import { auth } from '@/firebase.ts';
import { signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";


export const AuthService_EP = async (userData: IAuthUser) => {

    const RootStore = useRootStore();
    const serviceID = 'service : ';

    return new Promise(async (resolve, reject) => {

        try {
            const userCredentials = await signInWithEmailAndPassword(auth, userData.usernameOrEmail, userData.password);

            RootStore.act_isAuthenticated(true);
            RootStore.act_uid(userCredentials.user.uid);

            resolve(true);

        } catch (error) {
            console.log(error, `Error occurred during authorization. [${serviceID}];`);
            reject(false);
        }

    });

}