// TIPOS DE DATOS PRIMITIVOS

// string
let name = "Exequiel";
let apellido = "Guiñazu";
let saludo = `Hola!!! bienvenido ${name} ${apellido}`;

// number
let age = 30; // entero
let height = 1.77; // decimal

// boolean
let isStudent = false;
let isDeveloper = true;

// undefined
let undefinedValue;
// console.log(undefinedValue);

// null
let nullValue = null;
// console.log(nullValue);

// symbol
let mySymbol = Symbol("mysymbol"); // no se puede comparar, son valores unicos
// console.log(mySymbol);

// bigInt
let myBigInt = BigInt(12309871209837219783612873621362387);
let myBigInt2 = 12309871209837219783612873621362387n;

let type = typeof 15.5;
// console.log(myBigInt);
// console.log(myBigInt2);

// Mostrar los tipos de datos
console.log(typeof name);
console.log(typeof age);
console.log(typeof height);
console.log(typeof isStudent);
console.log(typeof isDeveloper);
console.log(typeof undefinedValue);
console.log(typeof nullValue);
console.log(typeof mySymbol);
console.log(typeof myBigInt);
console.log(typeof myBigInt2);
