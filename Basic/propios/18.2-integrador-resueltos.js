// 1. Contar cuántos números pares hay en un array
// Input: [1, 2, 3, 4, 5, 6]
// Output: 3
function contarPares(arr) {
  let contador = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      contador++;
    }
  }
  return contador;
}

console.log(contarPares([1, 2, 3, 4, 5, 6])); // 3

///////////////////////////////////////////////////////
// 2. Crear una función que reciba un nombre y edad, y retorne un mensaje
// Input: "Juan", 15
// Output: "Hola Juan, tenés 15 años."
function saludar(nombre, edad) {
  return `Hola ${nombre}, tenés ${edad} años.`;
}

console.log(saludar("Juan", 15));

///////////////////////////////////////////////////////
// 3. Recorrer un array de nombres y saludar a cada uno
// Input: ["Ana", "Luis", "Pepe"]
// Output: "Hola Ana" "Hola Luis" "Hola Pepe"
const nombres = ["Ana", "Luis", "Pepe"];

for (let nombre of nombres) {
  console.log(`Hola ${nombre}`);
}

///////////////////////////////////////////////////////
// 4. Buscar si un número existe en un array y en qué posición está
// Input: ([3, 7, 1, 9], 1)
// Output: "El número 1 está en la posición 2"
function buscarNumero(arr, numero) {
  const index = arr.indexOf(numero);
  if (index !== -1) {
    return `El número ${numero} está en la posición ${index}`;
  } else {
    return "No se encontró el número.";
  }
}

console.log(buscarNumero([3, 7, 1, 9], 1)); // Posición 2

///////////////////////////////////////////////////////
// 5. Dado un objeto de usuario, mostrar su información
const user = {
  nombre: "Lucía",
  edad: 23,
  esAdmin: false,
};
// Output: "Lucía tiene 23 años y no es admin"
const adminTexto = user.esAdmin ? "es admin" : "no es admin";
console.log(`${user.nombre} tiene ${user.edad} años y ${adminTexto}`);

///////////////////////////////////////////////////////
// 6. Contar cuántos elementos mayores a 10 hay en un array
// Input: [5, 12, 8, 20, 30]
// Output: "Hay 3 números mayores a 10"
function contarMayores(arr) {
  let contador = 0;
  for (let num of arr) {
    if (num > 10) {
      contador++;
    }
  }
  return `Hay ${contador} números mayores a 10`;
}

console.log(contarMayores([5, 12, 8, 20, 30]));

///////////////////////////////////////////////////////
// 7. Crear una función que reciba un array de strings y devuelva uno nuevo con los strings en mayúsculas
// Input: ["perro", "gato"]
// Output: ["PERRO", "GATO"]
function aMayusculas(arr) {
  const nuevoArray = [];
  for (let palabra of arr) {
    nuevoArray.push(palabra.toUpperCase());
  }
  return nuevoArray;
}

console.log(aMayusculas(["perro", "gato"]));

///////////////////////////////////////////////////////
// 8. Crear una función que reciba un string y lo devuelva al revés
// Input: "hola"
// Output: "aloh"
function invertirTexto(texto) {
  return texto.split("").reverse().join("");
}

console.log(invertirTexto("hola")); // "aloh"

///////////////////////////////////////////////////////
// 9. Simular una pequeña agenda de contactos con un array de objetos
const contactos = [
  { nombre: "Juan", telefono: "1234" },
  { nombre: "Ana", telefono: "5678" },
];
// Función que busque un contacto por nombre y retorne el teléfono

function buscarContacto(nombre) {
  for (let contacto of contactos) {
    if (contacto.nombre === nombre) {
      return `Teléfono de ${nombre}: ${contacto.telefono}`;
    }
  }
  return "Contacto no encontrado.";
}

console.log(buscarContacto("Ana"));

///////////////////////////////////////////////////////
// 10. Crear una función que reciba un array de objetos con productos y calcule el total
const productos = [
  { nombre: "Pan", precio: 100 },
  { nombre: "Leche", precio: 200 },
];
// Output: 300

function calcularTotal(arr) {
  let total = 0;
  for (let item of arr) {
    total += item.precio;
  }
  return total;
}

console.log(calcularTotal(productos)); // 300

///////////////////////////////////////////////////////
// 11. Filtrar solo los objetos de una lista que cumplan cierta condición
// Por ejemplo, productos cuyo precio sea mayor a 150
const productos2 = [
  { nombre: "Pan", precio: 100 },
  { nombre: "Leche", precio: 200 },
  { nombre: "Queso", precio: 180 },
];

function filtrarCaros(arr) {
  const resultado = [];
  for (let prod of arr) {
    if (prod.precio > 150) {
      resultado.push(prod);
    }
  }
  return resultado;
}

console.log(filtrarCaros(productos2));

///////////////////////////////////////////////////////
// 12. Contador de vocales en un string
// Input: "Hola mundo"
// Output: 4
function contarVocales(texto) {
  let contador = 0;
  const vocales = "aeiouAEIOU";

  for (let letra of texto) {
    if (vocales.includes(letra)) {
      contador++;
    }
  }
  return contador;
}

console.log(contarVocales("Hola mundo")); // 4

///////////////////////////////////////////////////////
// 13. Simular una mini base de datos de usuarios con login
const usuarios = [
  { username: "pepe", password: "123" },
  { username: "lola", password: "abc" },
];
// Función que reciba username y password, y diga si puede loguearse o no
function login(user, pass) {
  for (let u of usuarios) {
    if (u.username === user && u.password === pass) {
      return "Login exitoso";
    }
  }
  return "Usuario o contraseña incorrectos";
}

console.log(login("pepe", "123")); // Login exitoso
console.log(login("lola", "000")); // Incorrecto

///////////////////////////////////////////////////////
