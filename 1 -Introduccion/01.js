//1º debemos de instanciar vue.js

const app = new Vue({
    //Aquí dentro trabajaremos con Vue
    el: '#app', //le estamos diciendo dentro del contenedor app será gestionado con vue
    data:  {
        titulo : 'Hola mundo con Vue',
        frutas : [

            {nombre: 'Pera', cantidad:10},
            {nombre: 'Manzana', cantidad:0},
            {nombre: 'Platano', cantidad:11}

        ]
    }
})