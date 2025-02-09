// Map (o diccionario en otros lenguajes)

// DEclaración
let myMap = new Map();
console.log(myMap);

// Inicialización
myMap = new Map([
  ["name", "Exequiel"],
  ["email", "egc.criss@gmail.com"],
  ["edad", 30],
]);

console.log(myMap);

// Metodos y propiedades

// set (sirve para actualizar o agregar un nuevo elemento)
myMap.set("Alias", "Chicho");
console.log(myMap);

// No pueden haber claves repetidas, en este caso se modifica la existente
myMap.set("name", "Exe");
console.log(myMap);

// get (para recuperar un valor por su clave)
console.log(myMap.get("name"));
console.log(myMap.get("surename"));

// has (comprobar si una clave existe o no) y devuelve un boolean
console.log(myMap.has("name"));
console.log(myMap.has("surename"));

// delete (elimina basado en la clave que le pasemos)
myMap.delete("email");
console.log(myMap);

// clear
myMap.clear();
console.log(myMap);

// propiedades

// keys (retorna un listado de las claves)

myMap = new Map([
  ["name", "Exequiel"],
  ["email", "egc.criss@gmail.com"],
  ["edad", 30],
]);

console.log(myMap.keys());

// values (retorna un listado de los values)
console.log(myMap.values());

// size (devuelve el tamaño del map)
console.log(myMap.size);

// entries (una forma de iterar o recorrer todas las claves y valor del map)
console.log(myMap.entries());
