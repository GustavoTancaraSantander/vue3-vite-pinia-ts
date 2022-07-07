<template>
    <!-- {{ props.selectedSize }} -->
    <button v-for="size in possibleSizes" :class="{ 'active': props.selectedSize === size }"
        @click="emits('onChangedSize', size)">
        {{ size }}
    </button>

</template>

<script setup lang="ts">
const possibleSizes = ["S", "M", "L", "XL", "XXL"];

// TODO: JS DONE
/* const props = defineProps({
    selectedSize: { type: String, required: true }
})

const emits = defineEmits({
    onChangedSize: String
}) */

// TODO: TS DONE
const props = defineProps<{ selectedSize: String }>()
const emits = defineEmits<{ (event: 'onChangedSize', value: string): void }>()
</script>

<style scoped>
.active {
    background-color: #41b883;
    color: white;
    transition: all .3s ease-out;
}
</style>
