
//  *   ts : 73a8d985-a778-4113-8850-ba1321b9dfcf
//  *
//  *   Project Name: "Sacred Geometry Sites"
//  *   Organization: VIVENTE
//  *   Built on 2024.09.04
//  *   Contributor(s): Aigars Kokins
//  *
//  *   authorization guard
//  *   [auth-guard-service.ts]
//  *
//  *   // authentication guard service //=> ts : 73a8d985-a778-4113-8850-ba1321b9dfcf
//  *   import { ser_authGuard } from '@services/ser_authGuard.ts';


// RootStore // => ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
import { useRootStore } from '@/_store/index.html-store.ts';

// service
export const ser_authGuard = async (): Promise<boolean> => {

  const RootStore = useRootStore();

  const isAuthenticated = RootStore.$state.isAuthenticated;
  const uid = RootStore.$state.uid;

    return new Promise((resolve, reject) => {

      if (isAuthenticated && (uid?.length ?? 0) == 28) {
        resolve(true);
      } else {
        reject(false);
      }
    });

}
