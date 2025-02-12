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

// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada

// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
