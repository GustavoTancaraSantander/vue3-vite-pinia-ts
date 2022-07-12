
<template>
    <div v-for="(item, index) in storeTodo.todoList" :key="index">
        <li class="item-list" :class="item.completed ? 'success-task ' : 'pending-task'">
            {{ item.taskName }}
            <input type="checkbox" :name="item.taskName" :value="item.completed"
                @change="storeTodo.updateTodoCompleted(item.id)">
            <span @click="storeTodo.deleteTodo(item.id)">&#10060;</span>
        </li>
    </div>
</template>

<script setup lang="ts">
import { useTodoListStore } from '../../stores/todoapp';
const storeTodo = useTodoListStore()

</script>

<style scoped>
.pending-task {
    background-color: #d6dc67;
    transition: all 0.5s ease-in;
    color: black;
}

li {
    cursor: pointer;
}

.success-task {
    text-decoration: line-through;
    background-color: #41b883;
    transition: all 0.3s ease-out;
    color: grey;
}

.item-list:hover {
    opacity: 0.7;
}
</style>