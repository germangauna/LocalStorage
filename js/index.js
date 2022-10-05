// espacio para guardar informacion en el navegador
// localStorage
//localSession

//console.log(localStorage);

// si tengo algo guardado en la consola,de algun trabajo anterior, habra una palabra LENGTH: 1; esta palabra nos dira que cantidad de datos tenemos guardados en este momento.  tengo que poner la palabra reservada CLEAR=> localStorage.clear() =>
// esto va a poner undefine, automaticamente se borrara todo lo guardado.

//como hago para guardar informacion aqui?

// localStotore.setItem(key, value); dentro de los parentesis pondremos la clave y el valor entre comillas.

/*localStorage.setItem("nombre", "german"); // en este caso, la clave es el nombre y el valor german
// si recatgo la pagina, automaticamente ya estaran guardados esos datos
// si cierro la pagina, apago el equipo, estos datos van a seguir guardados, una buena forma de tener persistencia de datos
// en la consola podemos ir en APLICATION => localStorage => desplegamos y estaran los datos  y ten dremos todos los datos guardados

localStorage.setItem("numero", 5); // asi tambien lo recibe, aunque se pone con comillas
localStorage.setItem("valor", "true");// tambien un booleanos, lo recibe tambien lo ideal como string
//console.log(localStorage);// si hacemos un console.log nos traera tods los valores guardados
localStorage.setItem("arreglo", [1, 2, 3, 4, 5]);//arrays
localStorage.setItem("objeto", { nombre: "fabian", edad: 50 })//objeto;


// como hacemos para tomar esos datos a futuro
// forma de guardar en el localStorage

let numero = localStorage.getItem("numero");// poner la clave, key, retorna al 5, le pongo al numero una variable con el GETITEM
//console.log(numero);

// esto en la consola me traera el valor de esta clave, pero de que tipo es?, con el typeof
//console.log(typeof (numero)); // me saldra de tipo string

// se pueden guardar objetos y arrays

console.log(localStorage);
//arrays, lo va a traer como a un string
//objeto, me saldra la palabra objeto*/

// para recorrer el storage

/*for (let i = 0; i < localStorage.length; i++){
    let clave = localStorage.key(i);// este for que me traera la i que esta en la posicion 0

    //console.log(clave);// esto me va a traer todas mis key que tengo guardadas, en este caso, numero, valor, arreglo, objeto y nombre.
// como hacemos para traer el valor y la clave de nuestro localStorage?
    console.log("clave", clave);
    console.log("valor", localStorage.getItem(clave));
// esto me traera cada key con su value
}

// el localStorage no sale en orden porque no es un objeto*/

// si quiero borrar algun elemento se utiliza el remuveItem
/*localStorage.removeItem("numero");
 localStorage.clear(); //para borrar todo*/

//sessionStorage.setItem("probando", "probando");
// actua de la misma manera que el localStorage, soporta la recarga de pagina, pero si cierro la pagina se borra todo.
// se puede usa cuando usas una computadora que no es tuya, para hacer pruebas, guardar cosas sensibles etc

// JSON
/* para poder guardar estos elementos de mejor manera, como los conbierto?
localStorage.setItem("arreglo", [1, 2, 3, 4, 5]);//arrays
localStorage.setItem("objeto", { nombre: "fabian", edad: 50 })//objeto*/

// con un arreglo, aplicando en la variable arreglo, le ponemos JSON.stringify entre parentesis el arreglo, tranformara en formato JSON el array, entre comillas para sea menos pesado, trabaja de esa manera
/*let arreglo = [1, 2, 3, 4, 5];
localStorage.setItem("arreglo", JSON.stringify(arreglo));

// en el objeto pasa lo mismo que en el array, pero me lo trae como un string y no es un objeto, como podemos hacer eso?
let objeto = { nombre: "fabian", edad: 50 };
localStorage.setItem("objeto", JSON.stringify(objeto));*/

// tendre   que pasar el objero anterior a JSON.parse con otra variable, con el getItem, llamando a la variable madre, dicha variable madre agregarle JSON.parse, seguido de un console.log para convertirlo en su formato real "de esta manera deja de ser un string"

/*let objetostrins = localStorage.getItem("objeto");
let objeto = JSON.parse(objetostrins);
console.log(objeto);

//array lo mismo
let arregloString = localStorage.getItem("arreglo");
let arreglo = JSON.parse(arregloString);
console.log(arreglo);*/

/*// en una funcion
function suma(x, y) {
    return x + y;
}

localStorage.setItem("resultado", suma(4, 5));*/

/* // como guardar un array en el localStorage, se puede guardar de un producto o todo el arreglo junto, primero hacemos un forof o foreach, crear una funcion, esa funcion va a traer a la clave y al valor de este arreglo, dentro un loscalStorage.setItem con la clave y el valor nuevamente, hacvemos un forof de la funcion que creamos recorriendo cada producto.id y pasarlo a JSON.stringuify al producto, por ultimo hacer el localStore de productos y JSON de productos.

const guardarStorage = (clave, valor) => { localStorage.setItem(clave, valor) };

const productos = [
    { id: 1, producto: "arroz", precio: 125 },
    { id: 2, producto: "fideos", precio: 70 },
    { id: 3, producto: "pan", precio: 50 },
    { id: 4, producto: "flan", precio: 100},
]
for (const producto of productos) {
    guardarStorage(producto.id, JSON.stringify(producto));
}

localStorage.setItem("productos", JSON.stringify(productos)) */

//cuando creo una variable y esta la paso por el localstorage sin nungun valor va a salir NULL,que no hay ningun valor, NULL tiene la propiedad de FALSE
/* let usuario;

let usuarioStorage = sessionStorage.getItem("usuario");

if (usuarioStorage) {
    let mensaje = `Bienvenido ${usuarioStorage}`;

} else {
    usuario = prompt("ingrese su nombre");
    sessionStorage.setItem("usuario", usuario);
    alert("bienvenido, es tu primera vez?")
}; */
// si usamos localStorage en este ejercicio de alerta, quedara guardado el nombre andres, para esto vamos a usar el sessionStorage.

//getItem: es parta traer los valores
//setIem : para guardar la informacion

// carrito de compras

const productos = [
    { id: 1, producto: "arroz", precio: 125 },
    { id: 2, producto: "fideos", precio: 70 },
    { id: 3, producto: "pan", precio: 50 },
    { id: 4, producto: "flan", precio: 100 },
];
// del carrito de compras traeremos con el getItem 

let carritoStorage = localStorage.getItem("productos");
// creo la variable carrito que es lo que va a recorrer los prioductos
let carrito = [];
//hacemos un if donde el JSON.parse, parsea al arreglo
if (carritoStorage) {
    carrito = JSON.parse(carritoStorage);
}
//ahora hacemos un if donde el carrito sea mayor a 0 aparecera un mensaje dodne estamos interactuando con el index.html, donde agreguemos algo al carrito aparecera en lña pantalla. foreach, seguido de la variable item, donde ahi creamos el mensaje qwue aprecera en la pantalla cuando agreguemos algo, con un "div"; 
if (carrito.length > 0) {
    carrito.forEach(element => {
        let item = document.createElement("div");
        item.innerHTML = `
                          <h2>id: ${elemet.id}</h2>
                          <p>nombre: ${element.nombre}</p>
                          <b>precio: ${element.precio}</b>  
        `;
 // ahora hay que poner asl padre de  donde queremos que paresca nuestro mensaje cuando agreguemos algo a nuestro carrito       
        document.body.append(item);
    });
 // ahora tenemos que hacer la respuesta sio no agrego nada al carrito   
} else {
    let item = document.createElement("div");
    item.innerHTML = "No hay productos";
    document.body.append(item);
}
//hacemos un boton para eliminar con un a alert
let boton = document.getElementById("boton");
// una vez que agrego el boton, creo un a funcion con lo que tiene que hacer el boton una vez apretado
boton.addEventListener("click", () => {
    localStorage.clear();
    alert("carrito eliminado");
})

// este es el que tengo que usar para el projecto

