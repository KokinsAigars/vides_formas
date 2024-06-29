<!-- 
//  *   ts : d25f0af1-2337-43d1-98b7-f339fc7bca3a
//  *
//  *   Project Name: "Vides Formas"
//  *   Organization: VIVENTE
//  *   Vue + Typescript + SCSS + Vite
//  *   Built on 2024.06.29
//  *   Contributor(s): Aigars Kokins
//  *	 
//  *   PAGE NOT FOUND HTTP 404 error page
//  *   abbreviation: 404
//  *   version: 1.0.0
//  *
-->

<template>
    <div class="not-authenticated">
        <div class="t T-default">The requested URL was not found on this server. (404 error)</div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.not-authenticated {
    overflow: hidden;
    height: var(--V-screen-height);
    width: var(--V-screen-width);
    background-color: var(--C-background-color);
    display: flex;
    flex-direction: column;
}
.t{
    margin-top: 30px;
    padding-left: 20px;
}
</style>