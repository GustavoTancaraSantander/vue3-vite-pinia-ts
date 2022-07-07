import { defineStore } from "pinia";

export const useStoreCounter = defineStore("counter", {
    state: () => ({
        counter: 0,
        numberOfChanges: 0,
    }),
    actions: {
        increment(value: number) {
            this.counter += value;
            this.numberOfChanges += 1;
        },
    },
});
