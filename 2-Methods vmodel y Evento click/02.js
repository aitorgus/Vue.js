//1º debemos de instanciar vue.js

const app = new Vue({
    //Aquí dentro trabajaremos con Vue
    el: '#app', //le estamos diciendo dentro del contenedor app será gestionado con vue
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: [

            { nombre: 'Pera', cantidad: 10 },
            { nombre: 'Manzana', cantidad: 0 },
            { nombre: 'Platano', cantidad: 11 }

        ],
        nuevaFruta: '' //Está vacio por defecto, en él insertaremos las distintas frutas que luego se añadirán al array 
    },
    //Usamos la palabra reservada "methods" aquí irán declarado todos los métodos
    methods: {
        agregarFruta() {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0 //En este caso el valor de cantidad será estático
            }) //Accedemos al array Frutas dentro del data y le insertamos valores
        },

    }
})