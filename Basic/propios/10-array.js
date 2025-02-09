// array (estructuras de datos) en otros lenguajes se interpreta como lista tambien

// Declaración
let myArray = []; // SE RECOMIENDA ESTA SINTAXIS
let myArray2 = new Array();

console.log(myArray);
console.log(myArray2);

// Inicialización

myArray = [1];

// Definición de array mas puro, donde nosotros reservamos las casillas o espacios
// que necesitemos, en cambio de la otra manera "[]" va tomando los espacios que el
// propio array necesita
myArray2 = new Array(1); // Reserva 1 espacio, NO asigna valor

console.log(myArray);
console.log(myArray2);

myArray = [1, 2, 3, 4];
myArray2 = new Array(1, 2, 3, 4);

console.log(myArray);
console.log(myArray2);

myArray = ["Exequiel", "Cristian", 30, false, undefined];
myArray2 = new Array("Exequiel", "Cristian", 30, false, undefined);

console.log(myArray);
console.log(myArray2);

myArray2 = new Array(3);
myArray2[0] = "Exequiel";
myArray2[1] = "Cristian";
myArray2[2] = "Alexander";
myArray2[3] = "Alexander";

console.log(myArray2);

myArray = [];
myArray[2] = "Alexander";
// myArray[0] = "Exequiel";
myArray[1] = "Cristian";

console.log(myArray);

// MÉTODOS COMUNES
myArray = [];

// push y pop
myArray.push("Push-1"); // -> agrega uno o varios elementos al final del array
myArray.push("Push-2");
myArray.push("Push-3");
console.log(myArray);

// myArray.pop(); // -> Elimina el ÚLTIMO elemento del array
console.log("ELIMINADO: ", myArray.pop()); // -> Devuelve el elemento que elimina
console.log(myArray);

// shift y unshift
myArray.shift(); // -> Elimina el primer elemento del array y lo devuelve
console.log(myArray);

myArray.unshift("UNSHIFT-1", "UNSHIFT-1"); // -> Agrega en el principio del array uno o mas elementos
console.log(myArray);

// length
console.log("Cantidad: ", myArray.length); // -> propiedad que devuelve la cantidad de elementos

// clear
myArray = []; // -> De esta manera borramos todo del array, lo inicializamos nuevamente VACIO

myArray.unshift("Elemento1", "Elemento2", "Elemento3");

myArray.length = 0; // -> Otra manera de borrar todo un array (NO SE USA)

// slice
myArray.unshift("Primero", "Segundo", "Tercero");
let newMyArray = myArray.slice(1, 2); // -> Los elementos que empiezan en el primer indice
// y terminan en el segundo indice (en este caso no se cuenta el 2)
console.log(newMyArray);

// splice
myArray = [];
myArray.unshift("Primero", "Segundo", "Tercero", 22, 11, true);

// -> Elimina los elementos que le pasemos por argumento
// 0 = desde donde quieres empezar a eliminar?
// 2 = cuantos elementos quieres eliminar?
let myNewArray2 = myArray.splice(0, 3); // -> Devuelve los elementos borrados
// let myNewArray3 = myArray.splice(0, 3, "Nuevo elemento"); // -> El tercer parametro sirve para
// agregar un nuevo elemento en el lugar de los elementos borrados.
console.log("BORRADOS splice:", myNewArray2);
console.log(myArray); // -> Array modificado
