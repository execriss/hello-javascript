// Exportación de módulos

/*
    Exportar modulos nos permite mantener de mejor manera nuestro codigo, dividirlo, reutilizarlo.
    Podemos usar el codigo que creamos en este fichero, desde otro contexto de nuestra app.
*/

// Funciones
export function sum(a, b) {
  return a + b;
}
// console.log(add(10, 15));

// Propiedades
export const PI = 3.1416;
export let name = "EXEQUIEL";

/*
      En la exportación que NO es por defecto, exportamos por separado la funcion,
      la variable y la constante. Y al importarlo en el otro archivo tiene que estar
      dentro de {llaves} y con el nombre correcto.
  */

// -----------------------------------------------------------

// Exportación por defecto
export default function substract(a, b) {
  return a - b;
}

/*
      En la exportación por default, estamos exportando la lógica, pero a la hora de
      importarlo en otro archivo, podemos usar cualquier nombre. y fuera de las 
      llaves {}
      IMPORTANTE!!:: No puede hacer mas de una exportación por default en un archivo
      IMPORTANTE!!:: Solo podemos exportar por default funciones, clases, pero NO variables
  */

// Clases
export class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
