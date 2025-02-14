// Console

// log
console.log("Este metodo es muy común");

// error (se muestra en rojo)
console.error("Esto es un error");
console.error("Error al conectarse a la DB: ", new Error("CONEXIÓN FALLIDA"));

// warn (para mostrar advertencias)
console.warn("Esto es una advertencia");

// info (muestra info)
console.info("Este es un mensaje de información");

// table (muestra una estructura con formato tabla)
let data = [
  ["Exe", 37],
  ["Fran", 22],
];
console.table(data);

// Le ponemos nombre a la columna
data = [
  { name: "Exe", age: 30 },
  { name: "Fran", age: 23 },
];
console.table(data);

// group y group end
console.group("Usuario"); // Inicia el grupo

console.log("Cosa 1");
console.log("Cosa 2");
console.log("Cosa 3");
console.log("Cosa 4");

console.groupEnd(); // Finaliza el grupo

// time (para evaluar el tiempo que demora en ejecutarse un bloque de codigo)
console.time("Tiempo de ejecución"); // Le ponemos nombre a esta medición
for (let i = 0; i < 10000; i++) {}
console.timeEnd("Tiempo de ejecución"); // Aca va el mismo nombre que pusimo arriba
// console.timeEnd("Finalizar"); esto es un error, porque no coincide con el primer console.time

// assert (Muestra un mensaje de error si lo que evalua es falso)
let age = 17;
console.assert(age >= 18, "El usuario debe ser mayor de edad");

// count (cuenta la cantidad de veces que se ha llamado con una etiqueta específica)
console.count("Click");
console.count("Click");
console.count("Click");

console.countReset("Click"); // Para resetear el contador

// trace (muestra el seguimiento de la pila de ejecución)
function a() {
  b();
}

function b() {
  console.trace("Seguimiento de la ejecución");
}
a();

//clear (para limpiar toda la consola)
// console.clear();
