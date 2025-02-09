// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "Exequiel";
if (myName == "Exequiel") {
  console.log(`Tu nombre es ${myName}`);
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "chicho";
let password = 123456;

if (user == "chicho" && password == 123456) {
  console.log("Usuario logueado");
} else {
  console.log("¡Tu usuario o contraseña son incorrectos!");
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let num = 0;

if (num > 0) {
  console.log("Número positivo");
} else if (num < 0) {
  console.log("Número negativo");
} else {
  console.log("El número es un 0");
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 12;

if (age >= 18) {
  console.log("Usted puede votar");
} else if (age < 0) {
  console.log("La edad ingresada es incorrecta");
} else {
  console.log(
    `No puedes votar aún, te faltan ${18 - age} años para cumplir tus 18`
  );
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad

let messageAge = age >= 18 ? "adulto" : "menor";
console.log(`Usted es un ${messageAge}`);

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let actualMonth = "Enero";
let season;
let count;

if (
  actualMonth == "Enero" ||
  actualMonth == "Febrero" ||
  actualMonth == "marzo"
) {
  season = "Verano";
} else if (
  actualMonth == "Abril" ||
  actualMonth == "Mayo" ||
  actualMonth == "Junio"
) {
  season = "Otoño";
} else if (
  actualMonth == "Julio" ||
  actualMonth == "Agosto" ||
  actualMonth == "Septiembre"
) {
  season = "Invierno";
} else if (
  actualMonth == "Octubre" ||
  actualMonth == "Noviembre" ||
  actualMonth == "Diciembre"
) {
  season = "Primavera";
} else {
  season = "El mes ingresado NO es correcto";
}

console.log(`Estación actual: ${season}`);

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if (
  actualMonth == "Enero" ||
  actualMonth == "Marzo" ||
  actualMonth == "Mayo" ||
  actualMonth == "Julio" ||
  actualMonth == "Agosto" ||
  actualMonth == "Octubre" ||
  actualMonth == "Diciembre"
) {
  count = 31;
} else if (
  actualMonth == "Abril" ||
  actualMonth == "junio" ||
  actualMonth == "Septiembre" ||
  actualMonth == "Noviembre"
) {
  count = 30;
} else {
  console.log("El mes ingresado NO es correcto");
}

console.log(`El mes de ${actualMonth} tiene ${count} días`);

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let language = "Spanish";
let translatedMessage;

switch (language) {
  case "English":
    translatedMessage = "Hello world!";
    break;
  case "Spanish":
    translatedMessage = "Hola Mundo!";
    break;
  case "French":
    translatedMessage = "Bonjour le monde";
    break;
  default:
    translatedMessage = "Lenguaje no encontrado";
    break;
}

console.log(`${language}: ${translatedMessage}`);

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (actualMonth) {
  case "Enero":
    season = "Verano";
    break;
  case "Febrero":
    season = "Verano";
    break;
  case "Marzo":
    season = "Verano";
    break;
  case "Abril":
    season = "Otoño";
    break;
  case "Mayo":
    season = "Otoño";
    break;
  case "Junio":
    season = "Otoño";
    break;
  case "Julio":
    season = "Invierno";
    break;
  case "Agosto":
    season = "Invierno";
    break;
  case "Septiembre":
    season = "Invierno";
    break;
  case "Octubre":
    season = "Primavera";
    break;
  case "Noviembre":
    season = "Primavera";
    break;
  case "Diciembre":
    season = "Primavera";
    break;

  default:
    season = "El mes es incorrecto";
    break;
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
if (
  actualMonth == "Enero" ||
  actualMonth == "Marzo" ||
  actualMonth == "Mayo" ||
  actualMonth == "Julio" ||
  actualMonth == "Agosto" ||
  actualMonth == "Octubre" ||
  actualMonth == "Diciembre"
) {
  count = 31;
} else if (
  actualMonth == "Abril" ||
  actualMonth == "junio" ||
  actualMonth == "Septiembre" ||
  actualMonth == "Noviembre"
) {
  count = 30;
} else {
  console.log("El mes ingresado NO es correcto");
}

switch (actualMonth) {
  case "Enero":
    count = 31;
    break;
  case "Febrero":
    count = 28;
    break;
  case "Marzo":
    count = 31;
    break;
  case "Abril":
    count = 30;
    break;
  case "Mayo":
    count = 31;
    break;
  case "Junio":
    count = 30;
    break;
  case "Julio":
    count = 31;
    break;
  case "Agosto":
    count = 31;
    break;
  case "Septiembre":
    count = 30;
    break;
  case "Octubre":
    count = 31;
    break;
  case "Noviembre":
    count = 30;
    break;
  case "Diciembre":
    count = 31;
    break;

  default:
    season = "El mes es incorrecto";
    break;
}
