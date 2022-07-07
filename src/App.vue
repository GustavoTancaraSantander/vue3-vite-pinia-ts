<script setup lang="ts">
import { ref } from 'vue';
import SizeSelector from './components/SizeSelector.vue';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

console.log("hello script setup");
const welcome = "Bienvenido Vue3 + TS + Vite ";
const selectedSize = ref("")
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ welcome }}</h1>
  <h2>Seleccione la Talla: {{ selectedSize }}</h2>
  <SizeSelector :selected-size="selectedSize" @on-changed-size="selectedSize = $event" />
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
