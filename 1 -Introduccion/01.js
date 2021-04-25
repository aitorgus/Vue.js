//1º debemos de instanciar vue.js

const app = new Vue({
    //Aquí dentro trabajaremos con Vue
    el: '#app', //le estamos diciendo dentro del contenedor app será gestionado con vue
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: [

            { nombre: 'Pera', cantidad: 12 }, //Objetos encerrados en corchetes
            { nombre: 'Manzana', cantidad: 24 },
            { nombre: 'Platano', cantidad: 0 }

        ]
    }
})