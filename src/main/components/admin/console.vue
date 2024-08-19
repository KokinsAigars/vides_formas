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
  <div class="c-cnn">

    <div class="c-title T-administrative-Console-title">Administrative Console</div>

    <button @click="sign_out" class="c-btn T-h-Title">sign_out</button>

  </div>
</template>

<style scoped lang="scss">

.c-cnn{
  width: 100vw;
  height: 100vh;
  background: var(--c-home-bg);
  overflow:hidden;
}

.c-btn{
  margin-top: 30px;
  margin-left: 50px;
  padding: 0 10px 0 10px;
  margin-bottom: 20px;
  border-radius: 15px;
}
.c-title{
  margin-top: 60px;
  margin-left: 50px;
}

</style>



<!--https://dashboard.emailjs.com/admin/account/general-->
