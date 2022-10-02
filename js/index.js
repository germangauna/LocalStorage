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

