
// RootStore // => ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
import { useRootStore } from '@/store/index.html-store.ts';

export const AuthGuard_app = async (): Promise<boolean> => {

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
