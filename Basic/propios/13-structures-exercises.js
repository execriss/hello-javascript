// 1. Crea un array que almacene cinco animales
let animales = ["Perro", "Gato", "Jirafa", "Oso", "León"];

// 2. Añade dos más. Uno al principio y otro al final
animales.unshift("Paloma"); // principio
animales.push("Pez"); // final
console.log(animales);

// 3. Elimina el que se encuentra en tercera posición
animales.splice(2, 1); // desde el indice 2 borra 1 elemento a la derecha
console.log(animales);

// 4. Crea un set que almacene cinco libros
let mySet = new Set([
  "Código sostenible",
  "Clean code",
  "Eloquent",
  "Git-Flows",
  "Test DDD",
]);

// 5. Añade dos más. Uno de ellos repetido
mySet.add("Lógica programática");
mySet.add("CleanCode 2");
mySet.add("CleanCode 2");
console.log(mySet);

// 6. Elimina uno concreto a tu elección
mySet.delete("Clean code");
console.log(mySet);

// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map([
  [0, "Enero"],
  [1, "Febrero"],
  [2, "Marzo"],
  [3, "Abril"],
  [4, "Mayo"],
  [5, "Junio"],
  [6, "Julio"],
  [7, "Agosto"],
  [8, "Septiembre"],
  [9, "Octubre"],
  [10, "Noviembre"],
  [11, "Diciembre"],
]);

console.log(meses);

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (meses.has(5)) {
  console.log(meses.get(5));
} else {
  console.log("Elemento NO encontrado");
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set("Verano", ["Diciembre", "Enero", "Febrero"]);
console.log(meses);

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let arrayTest = [1, 2, 3, 4];
let arrayToSet = new Set(arrayTest);
let setToMap = new Map([["set", arrayToSet]]);

console.log(arrayTest);
console.log(arrayToSet);
console.log(setToMap);
