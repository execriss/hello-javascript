// Funciones avanzadas

// CIUDADANOS DE PRIMERA CLASE //

// 1- Podemos asignar una función a una variable o constante
const greet = function (name) {
  console.log(`Hola ${name}`);
};

greet("Juan");

// 2- Una función puede ser pasada como argumento de otra función
function processGreeting(greetFunction, name) {
  greetFunction(name);
}

processGreeting(greet, "Exequiel");

// 3- Una función puede retornar otra función
function returnGreeting() {
  return greet;
}
const greet2 = returnGreeting();

greet2("Cristian");

// ARROW FUNCTIONS //

// 1- Retorno Implicito
const sum = (a, b) => a + b; // Retorna una expresión
console.log(sum(10, 6));

// 2- This léxico para el contexto de un objeto.
const handler = {
  name: "Alexander",
  greeting: function () {
    console.log(`Hola ${this.name}`); // Hereda el this de su contexto.
  },
  greeting2: () => console.log(`Hola ${this.name}`), // Es undefined porque NO hace referencia al contexto del objeto.
};

handler.greeting();
handler.greeting2();

// IIFE - Immediately Invoked Function Expression (Expresión de función invocada inmediatamente) //

// IIFE clásico
(function () {
  console.log("IIFE clásico");
})();

// IIFE arrow function
(() => {
  console.log("IIFE arrow function");
})();

// Parámetros REST (....) //

function sumTotal(...numbers) {
  // Pueden ser N parámetros
  let result = 0;
  for (const number of numbers) {
    result += number;
  }

  return result;
}

sumTotal(1, 2, 3, 4, 5);
sumTotal(10, 15);

// Operador SPREAD (...) //

const numbers = [6, 7, 8];

function sumWithSpread(a, b, c) {
  return a + b + c;
}

console.log("SUMA: ", sumWithSpread(3, 6, 9));
console.log("SUMA: ", sumWithSpread(...numbers)); // Expandimos el array de numbers

// CLOSURES (Clausuras) //

function createCounter() {
  let counter = 0;

  return function () {
    // Se puede ejecutar N veces pero conservando el estado de counter, osea el scope de la function padre.
    counter++;
    console.log("Contador: ", counter);
  };
}

const counter = createCounter(); // Aca instanciamos la función padre y crea el context de counter
counter();
// Aca solamente llamamos a la función hija de createCounter(),
// NO volvemos a instanciar la función padre, y asi NO se inicializa desde 0 counter.
counter();

// RECURSIVIDAD (Es una función que se llama a si misma) //
// Siempre debemos delimitar un contexto en donde en algún momento se deje de llamar a si misma

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(3));

// FUNCIONES PARCIALES //

// (Es la idea de dividir una función con varios parámetros
// en funciones más pequeñas que reciben parte de los parametros, y retornan una nueva
// función que espera los siguientes parametros.)

function partialSum(a) {
  return function (b, c) {
    return sumTotal(a, b, c);
  };
}

const sumWith = partialSum(4);
sumWith(6, 6);
sumWith(1, 2);

// Currying // (Transformar una función con múltiples parámetros en una secuencia de funciones de un parámetro)

function curryingSum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const sumAB = curryingSum(4)(6);
console.log("Suma AB:", sumAB(3));
console.log("Suma AB:", sumAB(5));
console.log("Suma AB:", sumAB(10));

// CALLBACKS // (A una función, le pasamos otra función como argumento para personalizar su comportamiento)
// (Es como inyectar una lógica personalizada)

function processData(data, callbak) {
  const suma = sumTotal(...data);
  callbak(suma);
}

function processResult(result) {
  console.log("RESULTADO FINAL", result);
}

processData([2, 4, 6], processResult);
processData([2, 4, 6], (result) =>
  console.log("Resultado con arrow function", result)
);
