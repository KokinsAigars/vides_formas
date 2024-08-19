<!--
//  *   vue : 78d148ca-d8dd-43fb-b769-c567dd5b11f5
//  *
//  *   Project Name: "sacredgeometrysites"
//  *   Organization: VIVENTE
//  *   Built on 2024.08.19
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Log Out
//  *
//  *   [out.vue]
//  *
-->


<script setup lang="ts">

  import {onMounted, ref} from "vue"

  // FIREBASE
  import {signOut, GoogleAuthProvider} from "firebase/auth";
  import {auth} from "@/firebase.ts";

  import {useRouter} from 'vue-router';
  const router = useRouter();

  // RootStore // => ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
  import { useRootStore } from '@/_store/index.html-store.ts';
  const RootStore = useRootStore();

  const isAuthenticated = ref<boolean>(false);
  isAuthenticated.value = RootStore.$state.isAuthenticated;

  onMounted( async() => {
    if(isAuthenticated.value === true) {
      try {
        await signOut(auth);

        RootStore.act_isAuthenticated_false();
        RootStore.act_uid(null);
      }
      catch (e) {
        console.log('error in log out page [/out]: ', e);
      }
    }

    await router.push({name: 'home'});
    console.clear();

  })

</script>
