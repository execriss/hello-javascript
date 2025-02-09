// Condicionales o estructuras de control
// Los condicionales sirven para tomar algun camino u otro, en función a la condición que le demos.

// if, else if, else

// if (si..)
// else (sino..)
let age = 20;

if (age == 37) {
  console.log(`Tienes ${age} edad`); // Se ejecuta esto si la condición es verdadera
} else {
  console.log("No tienes 37 años"); // Se ejecuta esto si la condición es falsa
}

// else if (sino, si..)
if (age == 37) {
  console.log(`Tienes ${age} edad`); // Se ejecuta esto si la condición es verdadera
} else if (age < 18) {
  console.log("Es menor de edad"); // Se ejecuta esto si la segunda condición es verdadera
} else {
  console.log("No tienes 37 años"); // Se ejecuta esto si NINGUNA condición es verdadera
}

// Operador ternario (forma mas compacta de escribir un condicional simple)
let message = age == 37 ? "Tienes 37 años" : "No tienes 37 años"; // Se guarda el resultado del ternario en una variable
console.log(message);

// switch (Es una alternativa de anidar if else..) compara una UNICA variable que puede tener varios valores posibles.

let day = 0;
let dayName;

// SIEMPRE EVALUAMOS LA MISMA VARIABLE
// if (day == 0) {
//   dayName = "Lunes";
// } else if (day == 1) {
//   dayName = "Martes";
// } else if (day == 2) {
//   dayName = "Miercoles";
// } else if (day == 3) {
//   dayName = "Jueves";
// } else if (day == 4) {
//   dayName = "Viernes";
// } else if (day == 5) {
//   dayName = "Sábado";
// } else {
//   dayName = "Domingo";
// }

// ALTERNATIVA A LO ANTERIOR:

// el valor que vamos a evaluar
switch (day) {
  case 0:
    dayName = "Lunes";
    break; // Para finalizar o romper la ejecución del switch
  case 1:
    dayName = "Martes";
    break;
  case 2:
    dayName = "Miercoles";
    break;
  case 3:
    dayName = "Jueves";
    break;
  case 4:
    dayName = "Viernes";
    break;
  case 5:
    dayName = "Sábado";
    break;
  case 6:
    dayName = "Domingo";
    break;
  default: // seria similar al else
    dayName = "El día no existe";
}

console.log(dayName);
