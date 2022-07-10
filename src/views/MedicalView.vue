<script setup lang="ts">
import { faker } from '@faker-js/faker';
import { useStoreMedical } from "../stores/medical";
const medicalStore = useStoreMedical();

</script>

<template>
    <button style="margin-top: 1rem;" class="btn"
        @click="medicalStore.addDoctor({ id: faker.datatype.uuid(), name: faker.internet.userName(), speciality: faker.random.words(), antiquity: faker.datatype.number({ min: 18, max: 100 }) })">
        Add Doctor
    </button>
    <div v-for="item in medicalStore.medicalList" :key="item.id">
        <ol>
            Doctor: {{ item.name }} | Especialidad: {{ item.speciality }}
            <button class="btn remove" title="Eliminar" @click="medicalStore.removeDoctor(item.id)">X</button>
        </ol>
    </div>

</template>

<style scoped>
.btn {
    color: cornflowerblue;
    width: auto;
    cursor: pointer;
}

.remove {
    position: absolute;
    right: 1rem;
}

.remove:hover {
    color: red;
}

ol {
    align-items: flex-start;
    text-align: left;
    border-radius: 5px;
    background-color: aliceblue;
    padding: 1rem;
}
</style>
