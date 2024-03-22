<template>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/discount">购物</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/collection">消息</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/account">我</van-tabbar-item>
    </van-tabbar>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue"
  const active = ref(0)
  </script>
  
  <style scoped></style>