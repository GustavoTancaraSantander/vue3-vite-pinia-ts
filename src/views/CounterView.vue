<template>
    <div style="padding-top: 100px;">
        <h2>
            CounterView: {{ counterStore.counter }}
        </h2>
        <button @click="counterStore.increment(1)">+1</button>
        <button @click="counterStore.increment(3)">+3</button>
        <button @click="counterStore.increment(5)">+5</button>
        <h3>
            Number of Changes: {{ counterStore.numberOfChanges }}
        </h3>
    </div>
</template>

<script setup lang="ts">
import { useStoreCounter } from "../stores/counter"
const counterStore = useStoreCounter()
</script>

<style scoped>
</style>