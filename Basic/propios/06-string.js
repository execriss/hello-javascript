// strings

// CONCATENACIÓN
let myName = "Exequiel";
let greeting = "hola, " + myName; // concatenar cadenas de texto
console.log(greeting);

// LONGITUD
console.log(greeting.length); // -> 14

// ACCESO A CARACTERES
console.log(greeting[3]); // -> a
console.log(greeting[15]); // -> undefined

// MÉTODOS MAS USADOS
console.log(greeting.toUpperCase()); // -> HOLA, EXEQUIEL
console.log(greeting.toLocaleLowerCase()); // -> hola, exequiel
console.log(greeting.indexOf("Exequiel")); // -> 6 devuelve el indice donde comienza X palabra
console.log(greeting.indexOf("Lionel")); // -> -1 cuando no lo encuentra
console.log(greeting.includes("Exe")); // -> true
console.log(greeting.includes("Fran")); // -> false
console.log(greeting.slice(0, 4)); // -> hola (retorna un pedazo, desde el indice 0 al indice 4)
console.log(greeting.replace("Exequiel", "Franco")); // -> Reemplaza el primer fragmento por el segundo
console.log(greeting.replaceAll(" ", "-")); // -> Reemplaza todos los valores, no solo el primero
console.log(greeting.replace("Franco", "Franco")); // -> Si no lo encuentra, devuelve el string sin modificar

// Template literals (plantillas literales)
let message = "Esto es un mensaje";
let message2 = "interpolado";
let interpolacion = `${message} ${message2}`;
let interpolacionError = "${message} ${message2}";

let stringVariasLineas = `Una linea,
Dos Lineas,
Tres Lineas`; // con template literals respeta los saltos de linea, de lo contrario, ("") da error

console.log(stringVariasLineas);
console.log(interpolacion);
console.log(interpolacionError);
