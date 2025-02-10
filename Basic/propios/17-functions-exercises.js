

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios (hacerlo con function y arrowFunction)

// 1. Crea una función que reciba dos números y devuelva su suma
const sum = (a, b) => {
    return a + b
}

console.log(sum(10, 6));
console.log('---------------------------');

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
const maxNum = (array) => {
    return Math.max(...array)
}

let arrayNumbers = [1,3,23,44,54,52,2,7,8,98,9]

console.log(`${maxNum(arrayNumbers)}`);

console.log('---------------------------');
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function countVocales(string) {
    let vocales = "aeiou"; // String con las vocales en minúscula
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        if (vocales.includes(string[i].toLowerCase())) { // Convertimos a minúscula y verificamos si está en "aeiou"
            count++;
        }
    }

    return count;
}

console.log(countVocales("casa"));  // 2
console.log(countVocales("Escuela"));  // 4
console.log(countVocales("HELLO"));  // 2

console.log('---------------------------');
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
const upperCase = (array) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i].toUpperCase())        
    }
    return newArray;
}

let arrayMin = ["casa", "rojo", "verde"]

console.log(upperCase(arrayMin));

// USANDO METODO MAP:
// const upperCase = (array) => array.map(str => str.toUpperCase());

// let arrayMin = ["casa", "rojo", "verde"];

// console.log(upperCase(arrayMin)); // ["CASA", "ROJO", "VERDE"]

console.log('---------------------------');
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
const esPrimo = (num) => {

    if(num < 2) return false
    
    for (let i = 2; i < num; i++) {
        if (num % i === 0) { // Si encuentra un divisor, NO ES PRIMO
            return false;
        }
    }

    return true; // Si no tuvo divisores, ES PRIMO
}

console.log(esPrimo(2));  // true
console.log(esPrimo(7));  // true
console.log(esPrimo(10)); // false
console.log(esPrimo(1));  // false
console.log(esPrimo(97)); // true

console.log('---------------------------');

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
const mezclarArrays = function(array1, array2) {
    let newArray = [];

    array1.forEach((element) => {
        if (array2.includes(element)) {
            newArray.push(element)
        }
    })

    return newArray;
}

let primerArray = [2,3,4,5,6,7,8,9];
let segundoArray = [9,88,867,5,34,2,33,4]

console.log(mezclarArrays(primerArray, segundoArray));

console.log('---------------------------');

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
const sumPares = (array) => {
    let sumaTotal = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sumaTotal += array[i]
        }
    }

    return sumaTotal;
}

let numbers1 = [2, 6, 7, 9, 13, 10]

console.log(sumPares(numbers1));

console.log('---------------------------');

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function cuadrado(array){
    let newArray = []

    array.forEach((elemento) => newArray.push(elemento *= elemento))

    return newArray;
}

let arrayCuadrado = [2, 5, 9]

console.log(cuadrado(arrayCuadrado));

console.log('---------------------------');

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
const stringInverso = (string) => {
    let newString = "";
    let palabra = "";

    for (let i = 0; i < string.length; i++) {
        if (string[i] === " ") {
            newString = " " + palabra + newString;
            palabra = "";
        } else {
            palabra += string[i]; // Construimos la palabra
        }
    }

    return palabra + newString; // Agregamos la última palabra
};

console.log(stringInverso("La casa es de color verde"));


console.log('---------------------------');

// 10. Crea una función que calcule el factorial de un número dado
const factorial = (num) => {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i; // Multiplicamos el resultado por el número actual
    }

    return result;
};

console.log(factorial(5)); // 120