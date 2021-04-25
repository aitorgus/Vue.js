//1º debemos de instanciar vue.js

const app = new Vue({
    //Aquí dentro trabajaremos con Vue
    el: '#app', //le estamos diciendo dentro del contenedor app será gestionado con vue
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: [

            { nombre: 'Pera', cantidad: 10 },
            { nombre: 'Manzana', cantidad: 50 },
            { nombre: 'Platano', cantidad: 2 }

        ],

        nuevaFruta: '',//Está vacio por defecto, en él insertaremos las distintas frutas que luego se añadirán al array
        total: 0
    },

    //Usamos la palabra reservada "methods" aquí irán declarado todos los métodos
    methods: {
        agregarFruta() {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0 //En este caso el valor de cantidad será estático
            }) //Accedemos al array Frutas dentro del data y le insertamos valores

            //Si queremos que reiniciar el valor del imput de nuevaFruta (Se limpia la barrita)
            this.nuevaFruta = '';
        },

    },
    computed: {
        sumarFrutas() {
            this.total = 0;
            for (fruta of this.frutas) {
                this.total = this.total + fruta.cantidad; //La suma se ejecuta cada vez que se detecte un cambio en los valores
            }
            return this.total; //Devuelve el nuevo valor
        }


    }


})