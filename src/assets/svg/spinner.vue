
<template>
    <svg class="spinner-svg" 
        aria-hidden="true" focusable="false" role="img"
        width="24" height="24" viewBox="0 0 24 24"
        style="user-select:none; overflow:hidden;">
        <g class="spinner-grp">
            <rect class="sp0" opacity=".1" x="11" y="1" width="2" height="5" />
            <rect class="sp0" opacity=".2" x="11" y="1" width="2" height="5" transform="rotate(30 12 12)"  />
            <rect class="sp0" opacity=".4" x="11" y="1" width="2" height="5" transform="rotate(60 12 12)"  />
            <rect class="sp0" opacity=".5" x="11" y="1" width="2" height="5" transform="rotate(90 12 12)"  />
            <rect class="sp0" opacity=".7" x="11" y="1" width="2" height="5" transform="rotate(120 12 12)" />
            <rect class="sp0" opacity=".8" x="11" y="1" width="2" height="5" transform="rotate(150 12 12)" />
            <rect class="sp0" opacity=".9" x="11" y="1" width="2" height="5" transform="rotate(180 12 12)" />
        </g>
    </svg>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">

.spinner-svg{
    width:60px;
    height:60px;
}

.spinner-grp {
    transform-origin: center;
    animation: sp-keyframes 1s step-end infinite;
}
.sp0{
    fill:var(--C-spinner-fill);
}
@keyframes sp-keyframes {
    8%      {transform: rotate(30deg)   ;}
    16%     {transform: rotate(60deg)   ;}
    25%     {transform: rotate(90deg)   ;}
    33%     {transform: rotate(120deg)  ;}
    41%     {transform: rotate(150deg)  ;}
    50%     {transform: rotate(180deg)  ;}
    58%     {transform: rotate(210deg)  ;}
    66%     {transform: rotate(240deg)  ;}
    75%     {transform: rotate(270deg)  ;}
    83%     {transform: rotate(300deg)  ;}
    91%     {transform: rotate(330deg)  ;}
    100%    {transform: rotate(360deg)  ;}
}

</style>