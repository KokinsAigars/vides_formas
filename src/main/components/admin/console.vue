<!--
//  *   vue : fa738d86-9819-49b8-8c6e-f110bc8809ac
//  *
//  *   Project Name: "sacredgeometrysites"
//  *   Organization: VIVENTE
//  *   Built on 2024.08.17
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Administrative Console
//  *
//  *   [console.vue]
//  *
-->

<script setup lang="ts">

  import {useRouter} from 'vue-router';
  const router = useRouter();

  const sign_out = () => {
    try {
      router.push({name: 'out'})
    } catch (e) {
      console.log('error: ', e);
    }
  }



</script>

<template>
  <div class="adm-auth-div">
    <button @click="sign_out">sign_out</button>
  </div>

  Console
</template>

<style scoped lang="scss">

</style>



<!--https://dashboard.emailjs.com/admin/account/general-->
