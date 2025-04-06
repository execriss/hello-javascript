// 1. Dado un array de números, mostrar solo los impares
function obtenerImpares(arr) {
  return arr.filter((num) => num % 2 !== 0);
}
// obtenerImpares([1, 2, 3, 4, 5]) -> [1, 3, 5]

// 2. Función que devuelve el mayor de dos números
function mayorDeDos(a, b) {
  return a > b ? `${a} es mayor` : `${b} es mayor`;
}
// mayorDeDos(10, 5) -> "10 es mayor"

// 3. Devolver longitud de cada palabra en un array
function longitudes(arr) {
  return arr.map((palabra) => palabra.length);
}
// longitudes(["hola", "perro", "sol"]) -> [4, 5, 3]

// 4. Identificar si un número es positivo, negativo o cero
function tipoNumero(n) {
  if (n > 0) return "Es positivo";
  if (n < 0) return "Es negativo";
  return "Es cero";
}
// tipoNumero(-5) -> "Es negativo"

// 5. Contar nombres que empiezan con una letra
function contarPorLetra(arr, letra) {
  return arr.filter((nombre) => nombre.startsWith(letra)).length;
}
// contarPorLetra(["Pedro", "Pablo", "Ana"], "P") -> 2

// 6. Reemplazar espacios por guiones en un string
function reemplazarEspacios(texto) {
  return texto.replace(/ /g, "-");
}
// reemplazarEspacios("Hola mundo js") -> "Hola-mundo-js"

// 7. Verificar si un string es un palíndromo
function esPalindromo(str) {
  const limpio = str.toLowerCase().replace(/ /g, "");
  return limpio === [...limpio].reverse().join("");
}
// esPalindromo("oso") -> true

// 8. Devolver el número mayor de un array
function maximo(arr) {
  return Math.max(...arr);
}
// maximo([3, 8, 2, 10, 5]) -> 10

// 9. Mostrar los primeros N números pares
function pares(n) {
  const resultado = [];
  for (let i = 0; resultado.length < n; i++) {
    if (i % 2 === 0) resultado.push(i);
  }
  return resultado;
}
// pares(5) -> [0, 2, 4, 6, 8]

// 10. Calcular promedio de edades
function promedio(arr) {
  const suma = arr.reduce((acc, n) => acc + n, 0);
  return suma / arr.length;
}
// promedio([20, 30, 40]) -> 30

// 11. Devolver solo las vocales de un string
function soloVocales(str) {
  return [...str].filter((l) => "aeiouAEIOU".includes(l)).join("");
}
// soloVocales("Hola mundo") -> "Oaouo"

// 12. Calcular total y cantidad de productos
function resumenCarrito(carrito) {
  const total = carrito.reduce((acc, p) => acc + p.precio, 0);
  return `Total: $${total}, Productos: ${carrito.length}`;
}
// resumenCarrito([{ nombre: "Silla", precio: 500 }, { nombre: "Mesa", precio: 1000 }]) -> "Total: $1500, Productos: 2"

// 13. Tabla de multiplicar de un número
function tablaMultiplicar(n) {
  const resultado = [];
  for (let i = 1; i <= 10; i++) {
    resultado.push(`${n} x ${i} = ${n * i}`);
  }
  return resultado;
}
// tablaMultiplicar(3)

// 14. Eliminar valores nulos o undefined de un array
function limpiarArray(arr) {
  return arr.filter((e) => e !== null && e !== undefined);
}
// limpiarArray([1, null, 3, undefined, 5]) -> [1, 3, 5]

// 15. Producto más caro
function productoMasCaro(productos) {
  return productos.reduce((max, p) => (p.precio > max.precio ? p : max)).nombre;
}
// productoMasCaro([{nombre:"a", precio:10}, {nombre:"b", precio:30}]) -> "b"

// 16. Contar letras sin espacios
function contarLetras(str) {
  return str.replace(/ /g, "").length;
}
// contarLetras("Hola mundo") -> 9

// 17. Repetir palabra N veces
function repetirPalabra(palabra, n) {
  return palabra.repeat(n);
}
// repetirPalabra("Hola", 3) -> "HolaHolaHola"

// 18. Verificar si usuario existe
function usuarioExiste(nombre, usuarios) {
  return usuarios.includes(nombre)
    ? "El usuario ya existe"
    : "Usuario disponible";
}
// usuarioExiste("pepe", ["juan", "pepe"]) -> "El usuario ya existe"

// 19. Mostrar quién aprobó
function quienesAprobaron(alumnos) {
  return alumnos.filter((a) => a.nota >= 6).map((a) => `${a.nombre} aprobó`);
}
// quienesAprobaron([{nombre:"Luis", nota:7}, {nombre:"Ana", nota:4}]) -> ["Luis aprobó"]

// 20. Cambiar nombre a mayúsculas en array de objetos
function nombresAMayusculas(usuarios) {
  return usuarios.map((u) => ({ nombre: u.nombre.toUpperCase() }));
}
// nombresAMayusculas([{nombre:"juan"}, {nombre:"pepe"}]) -> [{nombre:"JUAN"}, {nombre:"PEPE"}]
