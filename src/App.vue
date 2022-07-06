<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
// import * as HelloWorld from "./components/HelloWorld.vue";

console.log("hello script setup");
const welcome = "Bienvenido";
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ welcome }}</h1>
  <h2>Seleccione la Talla: {{ "SETUP" }}</h2>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
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
</style>
