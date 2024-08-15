
<script setup lang="ts">

  import { ref } from 'vue';

  import { auth } from '@/firebase';
  import {connectAuthEmulator, signInWithEmailAndPassword } from "firebase/auth";
  // connectAuthEmulator(auth, "http://localhost:9099");

  const textEmail = ref<string>('');
  const textPassword = ref<string>('');
  const uid = ref<string>('');

  textEmail.value = 'testAuth@www.test';
  textPassword.value = 'nticationtechniquesandprovide';
  uid.value = 'Y0EeKIXWIle38c4HobnJHJXLfJ62';

  // textEmail.value = 'aigars@buvprojekti.lv';
  // textPassword.value = '';
  // uid.value = '';

  const loginEmailPassword = async () => {
    const userCredentials = await signInWithEmailAndPassword(auth, textEmail.value, textPassword.value);
    console.log(userCredentials.user);

  }

</script>

<template>

    <div class="adm-auth-title T-hb-c-select"></div>

    <div class="adm-auth-div">
      <input v-model="textEmail">
      <input v-model="textPassword">
      <button @click="loginEmailPassword">authenticate</button>
    </div>


</template>

<style scoped lang="scss">
</style>