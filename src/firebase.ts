
//  *   ts : db00ccf0-17db-46c1-b98d-f69025da03fd
//  *
//  *   Project Name: "Sacred Geometry Sites"
//  *   Organization: VIVENTE
//  *   Built on 2024.08.16
//  *   Contributor(s): Aigars Kokins
//  *
//  *   [initialize firebase]
//  *

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyCFpd_NThU_eP20R0tKk7uU5m7Stdci3Rg",
    authDomain: "videsformas.firebaseapp.com",
    projectId: "videsformas",
    storageBucket: "videsformas.appspot.com",
    messagingSenderId: "633823330129",
    appId: "1:633823330129:web:f904431414fec5804a9d70"
});

export const auth = getAuth(firebaseApp)

