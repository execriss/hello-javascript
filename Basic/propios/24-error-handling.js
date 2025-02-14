// Manejo de errores (se conoce como excepciones también)
/*
    Siempre pueden ocurrir errores, en estos casos necesitamos manejar estos errores
    para saber que paso, y para que nuestra app NO crashee
*/

// Excepción (algo que no esperabamos que pasara en nuestro flujo)

/*
  CAPTURAMOS ERRORES CON: TRY CATCH
  LANZAMOS ERRORES CON: THROW new Error()
*/

// let myObject;
// Como no existe email, nuestro programa se rompe
// console.log(myObject.email);

// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------

// TRY - CATCH

// try: Intenta ejecutar un código que puede fallar
// catch: Captura el error que ocurrio en el try
console.log("--------------------------------");

try {
  let myObject;
  console.log(myObject.email); // -> Esta linea devuelve un error, porque email NO existe
  console.log("Finaliza la ejecución sin errores");
} catch {
  console.log("Se ha producido un error");
}
console.log("--------------------------------");

// Captura del error

try {
  let myObject;
  console.log(myObject.email); // -> Esta linea devuelve un error, porque email NO existe
  console.log("Finaliza la ejecución sin errores");
} catch (error) {
  // dentro del error tenemos propiedades utiles, como "message"
  console.log("Se ha producido un error", error.message);
}
console.log("--------------------------------");

// Finally -> Para ejecutar algún codigo en concreto se cumpla o no el try.
// Seria una especia de ejecucion por default

try {
  let myObject;
  console.log(myObject.email); // -> Esta linea devuelve un error, porque email NO existe
  console.log("Finaliza la ejecución sin errores");
} catch (error) {
  console.log("Se ha producido un error", error.message);
} finally {
  // Puede servir para hacer una limpieza de datos luego de que termine la ejecución, o similar.
  console.log("Este código se ejecuta SIEMPRE");
}
console.log("--------------------------------");

// NO SOPORTADO -> No tiene catch
// try {
//   let myObject;
//   console.log(myObject.email); // -> Esta linea devuelve un error, porque email NO existe
//   console.log("Finaliza la ejecución sin errores");
// } finally {
//   // Puede servir para hacer una limpieza de datos luego de que termine la ejecución, o similar.
//   console.log("Este código se ejecuta SIEMPRE");
// }

// Lanzamiento de errores (podemos lanzar errores cuando creamos necesario)

// throw
// throw new Error("Se ha producido un error creado por nosotros");

function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Esta operación es solo con numeros");
  }
  return a + b;
}

// Solo se ejecuta el try o el catch, NO ambos.
try {
  console.log(sum(21, 9));
} catch (error) {
  console.log("Se ha producido un error", error.message);
}
console.log("--------------------------------");

// Capturar varios tipos de errores

/*
    Existen varios tipos de errores para diferenciarlos:

    Error()
    TypeError()
    RefererError()
    SintaxError()

    Podemos elegir el mas adecuado para nuestro caso.
*/

function mult(a, b) {
  if (a === undefined || b === undefined) {
    // Lanzamos un Error
    throw new Error("Falta alguno de los argumentos");
  }
  if (typeof a !== "number" || typeof b !== "number") {
    // Lanzamos un TypeError
    throw new TypeError("Esta operación es solo con valores numéricos");
  }
  if (a == 0 || b == 0) {
    throw new MyCustomError("No se soporta la operación con 0", a, b);
  }
  return a * b;
}

try {
  console.log(mult(21, "2"));
} catch (error) {
  if (error instanceof TypeError) {
    console.log("Se ha producido un error de tipo: ", error.message);
  } else if (error instanceof Error) {
    console.log("Se ha producido un error:", error.message);
  }
}
console.log("--------------------------------");

// Crear Excepciones personalizadas

class MyCustomError extends Error {
  constructor(message, a, b) {
    super(message);
    this.a = a;
    this.b = b;
  }

  printNumbers() {
    console.log(this.a, "+", this.b);
  }
}

try {
  console.log(mult(0, 0));
} catch (error) {
  console.log("Se ha producido un error: ", error.message);
  error.printNumbers();
}
console.log("--------------------------------");
