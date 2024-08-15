
<script setup lang="ts">

  import { ref } from 'vue';

  import {useRouter} from 'vue-router';
  const router = useRouter();

  // RootStore // => ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
  import { useRootStore } from '@/store/index.html-store.ts';
  const RootStore = useRootStore();

  import { auth } from '@/firebase';
  import { signInWithEmailAndPassword, signOut } from "firebase/auth";

  const textEmail = ref<string>('');
  const textPassword = ref<string>('');
  const state = ref<string>(null);
  const uid = ref<string>('');
  const ref_errorMsg = ref<boolean>(false);

  // TESTING
  textEmail.value = 'testAuth@www.test';
  textPassword.value = 'nticationtechniquesandprovide';

  const loginEmailPassword = async () => {

    try {
      const userCredentials = await signInWithEmailAndPassword(auth, textEmail.value, textPassword.value);
      // console.log(userCredentials.user);

      state.value = userCredentials.operationType.valueOf();
      // console.log('state', state.value);

      uid.value = userCredentials.user.uid;
      // console.log('uid', uid.value);

      RootStore.act_isAuthenticated(true);
      RootStore.act_uid(uid.value);

      // await router.push({path: '/adm/' + 1});

    } catch (e) {
      ref_errorMsg.value = true;
      fn_show_errorMsg();
      console.log('error: ', e);
    }

  }

  const sign_out = async () => {

    try {
      await auth.signOut();
      state.value = null;
      uid.value = null;
      RootStore.act_isAuthenticated_false();
      RootStore.act_uid(uid.value);
    } catch (e) {
      console.log('error: ', e);
    }

  }

  const fn_show_errorMsg = () => {
    setTimeout(() => {
      ref_errorMsg.value = false;
      textEmail.value = 'testAuth@www.test';
      textPassword.value = 'nticationtechniquesandprovide';
    }, 3000);
  }

</script>

<template>

  <div class="authError" v-if="ref_errorMsg">
    <p class="authError-text">Authentication Error</p>

  </div>

    <div class="adm-auth-title T-hb-c-select">Administrator console</div>

    <div class="adm-auth-div" v-if="state === null && ref_errorMsg === false">
      <input v-model="textEmail">
      <input type="password" v-model="textPassword">
      <button @click="loginEmailPassword">authenticate</button>
    </div>

    <div class="adm-auth-div" v-if="state === 'signIn' && ref_errorMsg === false">
      <button @click="sign_out">sign_out</button>
    </div>



</template>

<style scoped lang="scss">
.authError{
  position: absolute;
  width: 200px;
  height: 50px;
  margin-top: 50px;
  margin-left: 100px;
  margin-right: auto;
  background: white;
  border-radius: 5px;
  border: 1px solid #0c0c37;
}
.authError-text{
  position: relative;
  margin-left: 20px;
  margin-top: 15px;
}

</style>