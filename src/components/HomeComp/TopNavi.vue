<template>
    <div class="h-10"></div>
    <div class="flex bg-white fixed top-0 left-0 right-0 z-50">
        <div class="w-20">
            <van-icon name="wap-nav" size="30" />
        </div>
        <div class="flex-1 flex">
            <router-link to="/home/follow" class="flex-1 flex justify-center items-center text-lg text-slate-400" active-class="underline decoration-red-500 decoration-2">关注</router-link>
            <router-link to="/home/discover" class="flex-1 flex justify-center items-center text-lg text-slate-400" active-class="underline decoration-red-500 decoration-2">发现</router-link>
            <router-link to="/home/near" class="flex-1 flex justify-center items-center text-lg text-slate-400" active-class="underline decoration-red-500 decoration-2">附近</router-link>
        </div>
        <div class="w-20">
            <van-icon name="search" size="30" class="float-right" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped></style>
