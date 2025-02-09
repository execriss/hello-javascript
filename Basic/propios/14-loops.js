// Loops o Bucles (Se entiende como una estructura de control, repite un
// bloque de codigo mientras una condicion sea verdadera)

// for (Se evalua una condición cada vez que se realiza una iteración)

for (let i = 0; i < 10; i++) {
  // aca va el código que vamos a repetir
  console.log(`Hello World! ${i + 1}`);
}

const numbers = [1, 2, 3, 4, 5];
for (let index = 0; index < numbers.length; index++) {
  const singleNumber = numbers[index];
  console.log(`Elemento - FOR: ${singleNumber}`);
}

// while (Lo que hace es evaluarse antes de cada iteración.)

let i = 0;

while (i < 5) {
  console.log(`Elemento - WHILE: ${numbers[i]}`);
  i++;
}

// CUIDADO!!! BUCLE INFINITO
// while (true) {
//     // si la condición siempre es TRUE, el bucle sera infinito
// }

// do while (Muy parecido al while, pero este ejecuta al menos 1 vez el código antes de evaluar la condición)

let contador = 0;
do {
  console.log(`Elemento - DO WHILE: ${numbers[contador]}`);
  contador++;
} while (contador < numbers.length);

// for of (Sirve para recorrer los VALORES de algo que sea iterable)
// Algo iterable: es una estructura de datos con mas de un dato

let myArray = ["a", "b", "c", "d", "e", "f"];
let mySet = new Set(["Exequiel", "Cristian", "Alexander"]);
let myMap = new Map([
  ["Ocupación", "Programador"],
  ["Altura", "174-cm"],
]);

// Podemos revisar uno a uno los valores que tenemos dentro de la estructura de datos
console.log("----ARRAY----");
for (let valor of myArray) {
  console.log(valor);
}
console.log("----SET----");

for (let valor of mySet) {
  console.log(valor);
}
console.log("----MAP----");

for (let valor of myMap) {
  console.log(valor);
}
console.log("--------");

// Un string tambien es iterable

let string = "Javascript";
for (let valor of string) {
  console.log(valor);
}
console.log("--------");

// BUENAS PRÁCTICAS:
/*
    1- Asegurarse que la condición del bucle en algun momento sea falsel, sino sera un bucle infinito!
    2- Utilizar breack y continue
*/

for (let i = 1; i <= 10; i++) {
  // podemos usar condiciones dentro de bucles, en este ejemplo ignoraremos el num 5
  if (i === 5) {
    // Saltar la presente iteración (salta directamente a la inspección de la condición)
    continue;
  }

  if (i === 7) {
    // Con esta sentencia detenemos por completo el bucle
    break;
  }
  console.log(`Ronda: ${i}`);
}
