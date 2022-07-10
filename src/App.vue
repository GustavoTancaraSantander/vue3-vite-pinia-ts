<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

console.log("hello script setup");

</script>

<template>
  <!-- <router-view></router-view> -->
  <RouterLink to="/">Home</RouterLink>
  |
  <RouterLink to="/counter">Counter</RouterLink>
  |
  <RouterLink to="/product">Size Selector</RouterLink>
  |
  <RouterLink to="/medical">List Doctors</RouterLink>

  <br>

  <RouterView></RouterView>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  padding: 5px;
  border: none;
  margin-right: 5px;
  width: 75px;
  cursor: pointer;
  border-radius: 5px;
}
</style>
