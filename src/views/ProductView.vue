<template>
    <div>
        <h2>Seleccione la Talla: {{ selectedSize }}</h2>
        <SizeSelector :selected-size="selectedSize" @on-changed-size="selectedSize = $event" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SizeSelector from '../components/SizeSelector.vue';

const selectedSize = ref("")
</script>

<style scoped>
</style>