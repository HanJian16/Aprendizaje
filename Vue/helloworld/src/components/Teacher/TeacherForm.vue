<template>
    <section>
        <h1>Añadir profesor</h1>

        <div><label>Nombre</label> <input type="text" v-model="teacher.name" /></div>
        <div><label>Apellido</label> <input type="text" v-model="teacher.surname" /></div>
        <div><label>DNI</label> <input type="text" v-model="teacher.dni" /></div>
        <div><label>Materias</label> <input type="text" v-model="subject" />
            <button @click="handleAddSubject()">Agregar</button>
        </div>
        <div v-show="teacher.subjects.length > 0">
            <ul>
                <li v-for="(element, index) in teacher.subjects" :key="index">{{ element }}</li>
            </ul>
        </div>
        <input type="checkbox" v-model="teacher.doc"> Documentación entregada
        <button @click="handleAddTeacher()">Agregar</button>
    </section>

    <section>
        <h1>Tabla de profesores</h1>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Dni</th>
                <th>Materias</th>
                <th>Documentación entregada</th>
            </tr>
            <tr v-for="(elm, idx) in teachers" :key="idx">
                <th>{{ elm.name }}</th>
                <th>{{ elm.surname }}</th>
                <th>{{ elm.dni }}</th>
                <th>
                    <ul>
                        <li v-for="(item, idx) in elm.subjects" :key="idx">{{ item }}</li>
                    </ul>
                </th>
                <th v-if="elm.doc">Entregado</th>
                <th v-else>No Entregado</th>
            </tr>
        </table>
    </section>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue';

interface ITeacher {
    name: string,
    surname: string,
    dni: string,
    subjects: Array<string>,
    doc: boolean,
}

let teacher: Ref<ITeacher> = ref({
    name: '',
    surname: '',
    dni: '',
    subjects: [],
    doc: false,
});

let teachers: Ref<Array<ITeacher>> = ref([]);
let subject: Ref<string> = ref('');

let handleAddSubject = () => {
    teacher.value.subjects.push(subject.value)
    subject.value = '';
}

let handleAddTeacher = () => {
    teachers.value.push({
        name: teacher.value.name,
        surname: teacher.value.surname,
        dni: teacher.value.dni,
        subjects: teacher.value.subjects,
        doc: teacher.value.doc,
    })
    teacher.value.name = '';
    teacher.value.surname = '';
    teacher.value.dni = '';
    teacher.value.subjects = [];
    teacher.value.doc = false;
}
</script>

<style scoped></style>