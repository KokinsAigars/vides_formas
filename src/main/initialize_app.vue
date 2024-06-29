<!--
//  *   ts : 507bc6bc-b152-4adc-a92f-6b96d8987c6f
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.06.29
//  *   Contributor(s): Aigars Kokins
//  *   
//  *   <RouterView/>
//  * 
//  *   [Initialize App Vue]
//  *
//  *   description: This component is render, "mounted", first
//  *
-->

<template>
    <RouterView/>
</template>

<script setup lang="ts">

    import { onMounted} from 'vue';
    import { RouterView } from 'vue-router'

    // Services
    // import { RefreshService } from '@auth/services/refresh.service';

    // import { v4 as uuid4 } from 'uuid';
    // console.log("ts : " + uuid4());
    
    // console.log("//  Function ID: " + Math.floor(Math.random() * 1000000) + 1);

    onMounted(() => {
        // on Page Refresh
        // RefreshService(); //=> ts : 4310cc2b-d5c5-4c9a-bce9-adbe55ae8e64
    });

</script>
