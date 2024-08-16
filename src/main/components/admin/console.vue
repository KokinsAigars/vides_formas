<!--
//  *   vue : fa738d86-9819-49b8-8c6e-f110bc8809ac
//  *
//  *   Project Name: "sacredgeometrysites"
//  *   Organization: VIVENTE
//  *   Built on 2024.08.16
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Administrative Console
//  *
//  *   [console.vue]
//  *
-->

<script setup lang="ts">

  import {ref, watchEffect} from "vue";

  import {useRouter} from 'vue-router';
  const router = useRouter();

  // RootStore // => ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
  import { useRootStore } from '@/_store/index.html-store.ts';
  const RootStore = useRootStore();

  import {signOut} from "firebase/auth";
  import {auth} from "@/firebase.ts";

  const isAuthenticated = ref<boolean>(false);
  isAuthenticated.value = RootStore.$state.isAuthenticated;

  const sign_out = async () => {

    try {
      await signOut(auth);
      RootStore.act_isAuthenticated_false();
      RootStore.act_uid(null);
      await router.push({name: 'home'})
    } catch (e) {
      console.log('error: ', e);
    }

  }

  watchEffect(() => { // IF STORE CHANGES,

    if(RootStore.$state.isAuthenticated !== isAuthenticated.value ){
      isAuthenticated.value = RootStore.$state.isAuthenticated;
    }

  })


</script>

<template>
  <div class="adm-auth-div" v-if="isAuthenticated === true">
    <button @click="sign_out">sign_out</button>
  </div>

  Console
</template>

<style scoped lang="scss">

</style>



<!--https://dashboard.emailjs.com/admin/account/general-->
