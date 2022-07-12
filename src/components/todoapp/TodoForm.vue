<template>
    <form class="form-submit" @submit.prevent="addNewTask(todo)">
        <input v-model="todo" type="text" />
        <button>Add</button>
    </form>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useTodoListStore } from '../../stores/todoapp';

export default ({
    // https://vuejs.org/guide/essentials/reactivity-fundamentals.html#declaring-reactive-state
    setup() {
        const todo = ref('');
        // use Pinia store:
        const storeTodo = useTodoListStore()
        function addNewTask(task: string) {
            if (task.length <= 0) {
                return
            }
            storeTodo.addTodo(task)
            // clean value
            todo.value = ''
        }

        return { todo, addNewTask };
    }
})

</script>

<style scoped>
.form-submit {
    padding: 2rem;
    background-color: cornflowerblue;
}
</style>