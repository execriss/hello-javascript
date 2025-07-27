// Importación de modulos

/*
  Usamos la palabra reservada IMPORT, nombre de lo que queremos importar,
  y el from "ruta..." de donde queremos importarlo
*/

// Podemos usar la funcion add que definimos en el otro archivo.

import cualquierNombre, { sum, name, PI } from "./27-modules-export";

// Funciones:
console.log(sum(10, 5));
console.log(PI);
console.log(name);

// Importación por defecto
console.log(cualquierNombre(5, 2));

// Clases
let circle = new Circle(10);

console.log(circle);
console.log(circle.area().toFixed(2));

// Módulos externos (como importar modulos externos?)
// let os = require("os");
// console.log(os);
