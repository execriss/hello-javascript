// Los operadores se utilizan para relacionar los datos, operar e interactuar con los datos

// operadores aritmeticos (son las operaciones de aritmetica que YA sabemos hacer)

let valorA = 5;
let valorB = 3;

// comunes
console.log(5 + 10); // suma
console.log(5 - 10); // resta
console.log(5 * 10); // multiplicación
console.log(5 / 10); // división
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// otros
console.log(113 % 100); //módulo o resto de una división
console.log(valorA ** valorB); // exponente (potencia A por el valor de B)

valorA++; //Incremento (es lo mismo que decir valorA +1)
console.log(valorA);

valorB--; //Decremento (es lo mismo que decir valorB -1)
console.log(valorB);

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// Operadores de asignación
let myVariable = 2; //le asignamos a la variable un valor
console.log("myVariable: ", myVariable);

myVariable += 2; // al valor actual de la variable, le sumamos dos. Es lo mismo que decir (myVariable = myVariable + 2)
console.log("myVariable: ", myVariable);

myVariable -= 2; // igual que en ej anterior, son variaciones de las op aritmeticas
myVariable *= 2; // igual que en ej anterior, son variaciones de las op aritmeticas
myVariable /= 2; // igual que en ej anterior, son variaciones de las op aritmeticas
myVariable %= 2; // igual que en ej anterior, son variaciones de las op aritmeticas
myVariable **= 2; // igual que en ej anterior, son variaciones de las op aritmeticas

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// operadores de comparación
/*  
    Nos van a servir para comparar variables o acciones en general, que el resultado de esa comparacion nos va
    a devolver un boolean
 */

let comparacionA = 10;
let comparacionB = 5;

console.log(comparacionA > comparacionB); // mayor que
console.log(comparacionA < comparacionB); // menor que

console.log(10 >= 10); // mayor o igual que
console.log(11 <= 10); // menor o igual que

console.log(comparacionA == comparacionB); // igual que (NO distingue entre types de datos)
console.log(comparacionA === comparacionB); // igual que (SI distingue entre types de datos)
console.log(comparacionA != 10); // es distinto que
console.log(comparacionA !== "10"); // es distinto que X y su tipo tambien es distinto?

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// cosas extrañas del lenguaje
console.log(0 == false); // el 0 en JS equivale a falso
console.log(0 === false); // el 0 en JS equivale a falso pero no es del tipo boolean
console.log(1 == false);
console.log(0 == "");
console.log(0 == "");
console.log(0 == "E");

console.log(undefined == null); // -> true
console.log(undefined === null); // -> false

// TRUTHY VALUES (VALORES VERDADEROS porque sí)
// todos: los numeros positivos y negativos menos el cero
// todos: las cadenas de texto menos las vacias
// todo: el boolean true

// FALSY VALUES (VALORES FALSOS porque sí)
// todos los 0
// todos los 0n
// todos los undefined
// todos los NaN
// todo: el boolean false

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// operadores lógicos
// and (&&) AMBAS TIENEN QUE SER VERDADERA PARA QUE LA COMPARACION SEA TRUE
console.log("AND");
console.log(15 > 10 && 15 > 12);
console.log(15 > 10 && 15 > 22);
console.log(15 > 10 && 15 > 12 && 10 == 10);

// or (||) SOLO BASTA CON QUE UNA DE LAS COMPARACIONES SEA VÁLIDA PARA QUE SEA TRUE
console.log(15 > 10 || 15 > 22);
console.log(15 > 100 || 15 > 22);

// not (!) para dar vuelta el resultado de una comparacion, de true a false y viceversa
console.log(!!(15 > 10 && 15 > 12));
console.log(15 > 10 && !(15 > 22));
console.log(!true);

// -------------------------------------------------------------------------
// -------------------------------------------------------------------------

// operadores ternarios
/*
    Es otra forma de escribir un condicional en una sola linea, si se cumple algo hacemos A cosa, si no se 
    cumple hacemos B cosa.
*/

const isRaining = false;
let message = isRaining ? "Esta lloviendo" : "No esta lloviendo";
console.log("TERNARIO: ", message);
