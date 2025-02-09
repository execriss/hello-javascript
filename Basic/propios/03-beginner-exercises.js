// 1. Escribe un comentario en una línea
// comentario en una sola linea

// 2. Escribe un comentario en varias líneas
/*
    En varias lineas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let name = "Exe";
let age = 30;
let height = 1.77;
let isDeveloper = true;
let undefinedValue;
let nullValue = null;
let mySymbol = Symbol("nuevoSymbol");
let myBigInt = BigInt(12309871209837219783612873621362387);

// 4. Imprime por consola el valor de todas las variables
console.log("name: ", name);
console.log("age: ", age);
console.log("height: ", height);
console.log("isDeveloper: ", isDeveloper);
console.log("undefinedValue: ", undefinedValue);
console.log("nullValue: ", nullValue);
console.log("mySymbol: ", mySymbol);
console.log("myBigInt: ", myBigInt);

// 5. Imprime por consola el tipo de todas las variables
console.log("name: ", typeof name);
console.log("age: ", typeof age);
console.log("height: ", typeof height);
console.log("isDeveloper: ", typeof isDeveloper);
console.log("undefinedValue: ", typeof undefinedValue);
console.log("nullValue: ", typeof nullValue);
console.log("mySymbol: ", typeof mySymbol);
console.log("myBigInt: ", typeof myBigInt);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
name = "Cristian";
age = 25;
height = 1.7;
isDeveloper = false;
undefinedValue = undefined;
nullValue = null;
mySymbol = Symbol("nuevoSymbol");
myBigInt = BigInt(12309871209837219783612873621362387);

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
name = 5;
age = "Cristian";
height = true;
isDeveloper = 1.7;
undefinedValue = null;
nullValue = undefined;
mySymbol = 123;
myBigInt = "Numero";

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const NAME = "Exequiel";
const AGE = 30;
const HEIGHT = 1.77;
const IS_DEVELOPER = true;
// const UNDEFINED_VALUE
const NULL_VALUE = null;
const MY_SYMBOL = Symbol("nuevoSymbol");
const MY_BIG_INT = BigInt(12309871209837219783612873621362387);

// 9. A continuación, modifica los valores de las constantes
// NAME = "Cristian"
// AGE = 25
// HEIGHT = 1.70
// IS_DEVELOPER = false
// UNDEFINED_VALUE = undefined
// NULL_VALUE = null
// MY_SYMBOL = Symbol("nuevoSymbol")
// MY_BIG_INT = BigInt(12309871209837219783612873621362387)

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
