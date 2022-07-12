<template>
    <h2>To Do List</h2>
    {{ now }}
    <TodoForm></TodoForm>
    <TodoList></TodoList>
</template>

<script lang="ts">
import TodoForm from "../components/todoapp/TodoForm.vue"
import TodoList from "../components/todoapp/TodoList.vue";
export default {
    components: { TodoForm, TodoList },
    computed: {
        now() {
            return new Date()
        }
    }
}
</script>

<style lang="scss" scoped>
</style>