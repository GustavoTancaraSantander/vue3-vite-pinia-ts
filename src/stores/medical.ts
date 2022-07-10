import { defineStore } from 'pinia'
interface Doctor {
    id: string, name: string, speciality: string, antiquity: number
}
export const useStoreMedical = defineStore("medical", {
    state: () => ({
        medicalList: Array<Doctor>() // [] as Doctor[] // Array<Doctor>()  // FAILED: Doctor[]() // doctor: Doctor[] = [];
    }),

    actions: {
        addDoctor(doctor: Doctor): void {
            console.log(doctor);
            this.medicalList.push(doctor)
        },

        removeDoctor(id: string): void {
            const findIndex = this.medicalList.findIndex(e => e.id === id)
            this.medicalList.splice(findIndex, 1)
        }
    }
})