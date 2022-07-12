import { defineStore } from 'pinia'

interface Task {
    id: number,
    taskName: string,
    completed: boolean
}
export const useTodoListStore = defineStore('todoList', {
    state: () => ({
        todoList: Array<Task>(),
        id: 0,
    }),

    actions: {
        addTodo(task: string) {
            this.todoList.push({ taskName: task, id: this.id++, completed: false })
        },

        updateTodoCompleted(taskId: number) {
            const todo = this.todoList.find((task) => task.id === taskId);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo(taskId: number) {
            const findIndex = this.todoList.findIndex((task) => task.id === taskId)
            // console.log('findIndex', findIndex);
            if (findIndex != -1) {
                this.todoList.splice(findIndex, 1)
            }
        }
    }
})

// export { useTodoListStore }