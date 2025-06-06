// 1. Captura una excepción utilizando try-catch
console.log("----------------------------------------------");

try {
  let myObject;
  console.log(myObject.name);
} catch (error) {
  console.log("Se ha producido un error: ", error.message);
}

console.log("----------------------------------------------");

// 2. Captura una excepción utilizando try-catch y finally

try {
  let myObject;
  console.log(myObject.name);
} catch (error) {
  console.log("Se ha producido un error: ", error.message);
} finally {
  console.log("Esto siempre se va a mostrar");
}

console.log("----------------------------------------------");

// 3. Lanza una excepción genérica
const getName = (name) => {
  const person = {
    nombre: "Exe",
    age: 30,
  };
  if (person[name] !== undefined) {
    return person[name];
  } else {
    throw new Error("La propiedad no existe");
  }
};

try {
  //   let name = getName("nombre");
  let name = getName("name");
  console.log(name);
} catch (error) {
  console.log("Se ha producido un error: ", error.message);
}

console.log("----------------------------------------------");

// 4. Crea una excepción personalizada
class CustomError extends Error {
  constructor(message, contingency) {
    super(message);
    this.contingency = contingency;
  }

  showContingency() {
    console.log("CONTINGENCIA: ", this.contingency);
  }
}

const getNumber = (number) => {
  const numbers = {
    primero: 15,
    segundo: 30,
  };
  if (numbers[number] !== undefined) {
    return numbers[number];
  } else {
    throw new CustomError(
      "El número no existe",
      "Debés enviar un número correcto!!"
    );
  }
};

try {
  let number = getNumber("Tercero");
  console.log(number);
} catch (error) {
  console.log("Se ha producido un error: ", error.message);
  error.showContingency();
}

console.log("----------------------------------------------");

// 5. Lanza una excepción personalizada
// -> SE HIZO EN EL EJERCICIO DE ARRIBA

// 6. Lanza varias excepciones según una lógica definida
const getValue = (value) => {
  if (value === 0) {
    throw new Error("El valor NO puede ser 0!");
  }
  if (value === null || value === undefined) {
    throw new TypeError("El valor es nulo!");
  }
  return value;
};

try {
  getValue(0);
  //   getValue();
} catch (error) {
  console.log("Se ha producido el siguiente error: ", error.message);
}

console.log("----------------------------------------------");

// 7. Captura varias excepciones en un mismo try-catch

const getValue2 = (value) => {
  if (value === 0) {
    throw new Error("El valor NO puede ser 0!");
  }
  if (value === null || value === undefined) {
    throw new TypeError("El valor es nulo!");
  }
  return value;
};

try {
  try {
    console.log(getValue2(0));
  } catch (error) {
    console.log("Se ha producido el siguiente error: ", error.message);
  }
  try {
    console.log(getValue2(2));
  } catch (error) {
    console.log("Se ha producido el siguiente error: ", error.message);
  }
  try {
    console.log(getValue2(null));
  } catch (error) {
    console.log("Se ha producido el siguiente error: ", error.message);
  }
} catch (error) {
  console.log("Se ha producido el siguiente error: ", error.message);
}

console.log("----------------------------------------------");

// 8. Crea un bucle que intente convertir una lista de valores a float cada valor y capture y muestre los errores

const valores = ["123.45", "abc", "78.9", null, undefined, "56.7px", {}, []];

valores.forEach((valor, index) => {
  try {
    let convertido = parseFloat(valor);
    if (isNaN(convertido)) {
      throw new Error(`No se puede convertir "${valor}" a float.`);
    }
    console.log(`Valor en índice ${index}: ${convertido}`);
  } catch (error) {
    console.error(`Error en índice ${index}: ${error.message}`);
  }
});

console.log("----------------------------------------------");

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción

let myObject2 = {
  name: "Exe",
  surname: "Guiñazu",
  age: 30,
};

const getValueToObject = (value) => {
  let element = myObject2[value];
  if (element) {
    console.log(element);
  } else {
    throw new Error("Elemento NO encontrado");
  }
};

try {
  getValueToObject("casa");
  // getValueToObject("name");
} catch (error) {
  console.log("Se ha producido un error: ", error.message);
}

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10

function ejecutarConReintentos(funcion, maxReintentos = 10, espera = 1000) {
  for (let intento = 1; intento <= maxReintentos; intento++) {
    try {
      return funcion(); // Intenta ejecutar la función
    } catch (error) {
      console.error(`Intento ${intento} fallido: ${error.message}`);
      if (intento < maxReintentos) {
        console.log(`Reintentando en ${espera / 1000} segundos...`);
        const inicio = Date.now();
        while (Date.now() - inicio < espera) {} // Pausa el código por el tiempo especificado
      } else {
        throw new Error(
          `Se ha producido un error tras ${maxReintentos} intentos.`
        );
      }
    }
  }
}

// Función que puede fallar
function tareaArriesgada() {
  if (Math.random() < 0.7) throw new Error("Error lanzado por nosotros mismos"); // Falla el 70% de las veces
  return "¡Éxito!";
}

try {
  const resultado = ejecutarConReintentos(tareaArriesgada);
  console.log("Resultado final:", resultado);
} catch (error) {
  console.error("¡Error crítico!: ", error.message);
}

console.log("--------------------------------------------");
