// 1. Crea una variable para cada operación aritmética
let suma = 5 + 5;
let resta = 5 - 5;
let multi = 5 * 5;
let div = 5 / 5;
let residuo = 16 % 5;

let potencia = 5 ** 3;
let masUno = suma++;
let menosUno = resta--;

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
suma = 10;
suma += 2;
suma -= 2;
suma /= 2;
suma *= 2;
suma %= 2;
suma **= 2;

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(5 === 5); // true
console.log(5 == "5"); // true
console.log(10 !== 9); // true
console.log(7 <= 10); // true
console.log("hello" >= "hi"); // true (comparación lexicográfica)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(6 === "6"); // false
console.log(6 == 10); // false
console.log(6 >= 10); // false
console.log(6 > 7); // false
console.log(6 !== 6); // false

// 5. Utiliza el operador lógico and
console.log(100 === 10 * 10 && 15 > 14);

// 6. Utiliza el operador lógico or
console.log(100 === 10 * 10 || 10 === 9);

// 7. Combina ambos operadores lógicos
console.log((5 == 5 && 10 > 8) || 20 < 5);

// 8. Añade alguna negación
console.log((5 == 5 && 10 > 10) || !(20 < 5));

// 9. Utiliza el operador ternario
let isSaturday = true;
let message = isSaturday ? "Vamo pal baile" : "A la chamba";

// 10. Combina operadores aritméticos, de comparáción y lógicas

let num1 = 5 + 5;
let num2 = 8 + 5;

console.log(num1 > num2 || (num2 === 13 && !false));
