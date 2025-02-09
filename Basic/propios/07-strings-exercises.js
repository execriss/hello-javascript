// 1. Concatena dos cadenas de texto
let concat1 = "Hola, " + "Como estas?";

// 2. Muestra la longitud de una cadena de texto
console.log(concat1.length); // -> 17

// 3. Muestra el primer y último carácter de un string
console.log(concat1[0]); // -> H
console.log(concat1[concat1.length - 1]); // -> ?

// 4. Convierte a mayúsculas y minúsculas un string
console.log(concat1.toLocaleLowerCase()); // -> hola, como estas?
console.log(concat1.toUpperCase()); // -> HOLA, COMO ESTAS?

// 5. Crea una cadena de texto en varias líneas
let variasLineas = `
    Una linea,
    Dos lineas,
    Tres lineas
`;
console.log(variasLineas);

// 6. Interpola el valor de una variable en un string
let apodo = "Chicho";
let nombreDelSitio = "CodexIA";

let saludoCompleto = `Hola ${apodo}, bienvenido a ${nombreDelSitio}`;
console.log(saludoCompleto);

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(saludoCompleto.replace(" ", "-"));
console.log(saludoCompleto.replaceAll(" ", "-"));

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(saludoCompleto.toLowerCase().includes("codexia")); // se hace asi para no tener conflicto entre min y may.

// 9. Comprueba si dos strings son iguales
let copiaSaludoCompleto = "Hola Chicho, bienvenido a CodexIA";
console.log(saludoCompleto === copiaSaludoCompleto);

// 10. Comprueba si dos strings tienen la misma longitud
console.log(saludoCompleto.length === copiaSaludoCompleto.length);
