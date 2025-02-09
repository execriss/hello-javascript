// 1. Crea un bucle que imprima los números del 1 al 20
console.log(".............1...............");
for (let i = 1; i <= 10; i++) {
  console.log(`Número - ${i}`);
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
console.log("..............2..............");
let suma = 0;
for (let i = 1; i <= 100; i++) {
  suma += i;
}
console.log("Suma total: ", suma);

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
console.log("..............3..............");
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(`Número PAR: ${i}`);
  }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
console.log("..............4..............");
let names = ["Exequiel", "Cristian", "Alexander"];
for (let value of names) {
  console.log(value);
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
console.log("..............5..............");
let countVocales = 0;
let stringVocales = "Vocales";

for (let i = 0; i < stringVocales.length; i++) {
  let letra = stringVocales[i].toLowerCase();
  if ("aeiou".includes(letra)) {
    // Verificamos si la letra está en el string "aeiou"
    countVocales++;
  }
}
console.log(`Contamos ${countVocales} en el string "${stringVocales}"`);

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
console.log("..............6..............");
let numbers = [1, 2, 3, 4, 5];
let countNumbers = numbers[0];

for (let number of numbers) {
  countNumbers *= number;
}

console.log(countNumbers);

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
console.log("..............7..............");
for (let i = 1; i <= 10; i++) {
  console.log(`TABLA DEL 5: 5 X ${i}= ${i * 5}`);
}

// 8. Usa un bucle para invertir una cadena de texto
console.log("..............8..............");
let stringInvertir = "casa";
let nuevoTexto = "";

// Recorremos desde el último índice hasta el primero.
for (let i = stringInvertir.length - 1; i >= 0; i--) {
  nuevoTexto += stringInvertir[i];
}

console.log("Nuevo Texto: ", nuevoTexto);

// 9. Usa un bucle para generar los primeros 10 números impares y guárdalos en un array. Luego, muestra ese array
console.log("..............9..............");
let numerosImpares = [];

for (let i = 0; numerosImpares.length < 10; i++) {
  if (i % 2 !== 0) {
    numerosImpares.push(i);
  }
}

console.log(`Números impares: ${numerosImpares}`);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
console.log("..............10..............");
let variosNumeros = [11, 2, 5, 6, 33, 654, 9, 45, 22, 36];
let mayores = [];

for (let num of variosNumeros) {
  if (num > 10) {
    mayores.push(num);
  }
}

console.log("MAYORES: ", mayores);
