<!-- 
//  *   ts : 17f285cf-aff2-4726-bbb6-70d379fcbe23
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.06.29
//  *   Contributor(s): Aigars Kokins
//  *	 
//  *   Landing page - body
//  *   abbreviation: LPb
//  *   version: 1.0.0
//  *
-->

<template>
    <div class="LPb">

<!--      <div class="LPb-c">-->
<!--        <div class="title-center">-->
<!--          <h2 class="LPb-h2 T-LP-h2">{{ RootStore.$state.Title }}</h2>-->
<!--        </div>-->
<!--      </div>-->

<!--      <div class="aa T-LPb-p">-->
<!--        Google Fonts makes it easy to bring personality and performance to your websites and products. Our robust catalog of open-source fonts and icons makes it easy to integrate expressive type and icons seamlessly — no matter where you are in the world. -->
<!--      </div>-->

<!--      <div class="aa T-LPb-p">-->
<!--        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,-->
<!--        from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise-->
<!--        on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.-->
<!--        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.-->
<!--      </div>-->

<!--      <div class="aa T-LPb-p" style="font-size: 1em;">-->
<!--        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,-->
<!--        from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise-->
<!--        on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.-->
<!--        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.-->
<!--        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.-->
<!--        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.-->
<!--        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.-->
<!--      </div>-->

  </div>
</template>

<script setup lang="ts">
    // RootStore // => ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
    import { useRootStore } from '@rootStore/index.html-store';
    const RootStore = useRootStore();
</script>

<style scoped lang="scss">

.title-center{
  text-align: center;
  margin-bottom: 20px;
  margin-top: 50px;
  box-sizing: content-box;
  background-color: transparent;}
 // lang
 .LPfc2-lang{
    margin-left: 50px;
    margin-top: 5px;
      text-decoration: none; 
      background-color: transparent; 
      border: 0;
      overflow: hidden !important;
      cursor: pointer;}
  .LPfc2-lang-select {
      background-color: var(--C-ui-f-bg);
      border: 0;
      border-radius: 3px;}
      .LPfc2-lang-select-o{
      background-color: var(--C-ui-f-bg);
      padding: 5px;}
  .LPfc2-lang-select:focus, .LPfc2-lang-select-o:focus {
      outline: none;}




.LPb-h2{
  padding-top: 50px;
    margin-bottom: 20px;
    margin-top: 50px;
    box-sizing: content-box;
    background-color: transparent;
}
.LPb-p {
  background-color: transparent;
}


$b-height: calc(var(--V-screen-height) - var(--V-h-height));

// BODY CONTAINER
.LPb{
    overflow:visible;
    left: 0;
    top: var(--V-h-height);
    min-height: $b-height;
    width: var(--V-screen-width); min-width: var(--V-screen-width); max-width: var(--V-screen-width);
    background-color: var(--C-background-color);
    border: 1px solid transparent;
}

.LPb-c{
    margin-left: 80px;
    margin-right: 80px;
    margin-top: 50px;
    margin-bottom: 50px;
}
.aa{
  padding-left: 100px;
  margin-right: 100px;
  margin-bottom: 50px;
  background-color: transparent;
}
</style>