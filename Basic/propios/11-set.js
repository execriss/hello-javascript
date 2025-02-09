// console.error("^");

// set

// Declaracion
let mySet = new Set();

// Inicislización
// mySet = new Set("Exe", "Cristian", "Alex", 33, false); //-> Forma incorrecta
mySet = new Set(["Exe", "Cristian", 33, false]);

console.log(mySet);

// Métodos comúnes

// add y delete
mySet.add("Nuevo dato");

console.log(mySet);

// DELETE: debemos indicar que elemento queremos borrar (Indicar el valor exacto)
// Esto es porque SET no indexa sus valores como una lista (array), sino que los indexa
// con un hash unico para cada valor.

// el metodo delete ademas nos va a retornar un boolean
mySet.delete("33"); // no funciona, respetar el tipo de datos

if (mySet.delete("33")) {
  // se borro
} else {
  // no se borro
}

mySet.delete(33);
console.log(mySet);

// has (comprobar si existe un elemento) devuelve un boolean
console.log(mySet.has("Exe"));
console.log(mySet.has("exe"));

// size (tamaño)
console.log(mySet.size);

// Convertir un SET a ARRAY
// Usamos la operacion "from" de ARRAY para decirle desde donde queremos crear el array
let myArray = Array.from(mySet);
console.log(myArray);

// Convertir un ARRAY a SET
let arrayPrueba = [1, 2, 3, 4];
let myArray2 = new Set(arrayPrueba);

console.log(myArray2);

// El Array permite duplicados, pero los set NO admiten duplicados
// Es por eso que no accedemos por indice, sino que accedemos por el valor (que sera unico)

mySet.add("egc.criss@gmail.com");
mySet.add("egc.criss@gmail.com");
mySet.add("egc.criss@gmail.com");
mySet.add("egc.criss@gmail.com");

console.log(mySet);
