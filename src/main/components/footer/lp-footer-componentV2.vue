<!--
//  *   ts : 5b2b11cc-f727-408d-973a-993916120dc4
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.06.29
//  *   Contributor(s): Aigars Kokins
//  *
//  *   Landing page - footer  [.ts]
//  *   abbreviation: LPf
//  *   version: 2
//  *
-->

<template>
    <footer class="LPf-footer">
        <div class="LPf-container">
            <p class="LPf-el T-LPf-el">{{RootStore.Copyright()}}</p>
<!--            <p class="LPf-el T-LPf-el">{{RootStore.ReleaseId()}}</p>-->
        </div>
    </footer>
</template>


<script setup lang="ts">
    // RootStore => ts : f775bba3-a998-46cc-a4ea-8ed081068bc9
    import { useRootStore } from '@rootStore/index.html-store';
    const RootStore = useRootStore();
</script>


<style scoped lang="scss">

    .LPf-footer{
        height: var(--LP-V-h-footer); min-height: var(--LP-V-h-footer); max-height: var(--LP-V-h-footer);
        width: var(--V-screen-width); min-width: var(--V-screen-width); max-width: var(--V-screen-width);
        background-color: var(--C-background-color);
        border-top:1px solid var(--C-background-line);
        padding: 33px;
    }
    .LPf-container{
        margin: auto;
        max-width: var(--V-screen-width);
        // border:1px dashed purple;
    }
    .LPf-el{
        margin: 0;
        text-align: center;
        // border:1px dashed red;
    }

</style>
