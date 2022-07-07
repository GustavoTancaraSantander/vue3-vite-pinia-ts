<template>
    <div>
        <img alt="Vue logo" src="../assets/logo.png" />
        <h1>{{ welcome }}</h1>

        <h2>{{ counterStore.counter }}</h2>
        <h3>Number of changes: {{ counterStore.numberOfChanges }}</h3>
    </div>
</template>

<script setup lang="ts">
import { useStoreCounter } from '../stores/counter'
const welcome = "Bienvenido Vue3 + TS + Vite + Pinia";

const counterStore = useStoreCounter()
</script>

<style scoped>
</style>