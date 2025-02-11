// COMO LO HACEMOS NORMALMENTE:

let myArray = [1, 2, 3, 4];
let myObject = {
    name: "Exequiel",
    age: 30,
    alias: "Chicho"
}

let myValueOfArray = [1]
console.log(myValueOfArray);

let myValueOfObject = myObject.name
console.log(myValueOfObject);
console.log("------------------------");


// Destructuring (Desestructuración)

/*
    - Destructuring: Nos permite extraer valores de arrays u objetos, y asignarlos a variables.
*/


// Sintaxis en Array: Para desestructurar se hace con [] en los array
let [firstValue, secondValue] = myArray; // No importa el nombre que le pongamos, respeta el orden.
// [llamaAlPimerValor, segundoValor, etc] = array
console.log(firstValue, secondValue);
console.log("------------------------");
 
// Sintaxis en Array con valores predeterminados
let [primerValor, segundoValor, tercerValor, cuartoValor, quintoValor = "default"] = myArray
console.log(primerValor);
console.log(segundoValor);
console.log(tercerValor);
console.log(cuartoValor);
console.log(quintoValor); // Si NO asignamos valor por default, esto seria undefined.
console.log("------------------------");

// Ignorar elementos del array (supongamos que queremos solo el indice 0 y 3)
let [primerValue, , , cuartoValue] = myArray
console.log(primerValue);
console.log(cuartoValue);
console.log("------------------------");

// ----------------------------------------------------------------------------------

// Sintaxis en Objects: Para desestructurar se hace con {} en los Objects
let { nombre, age, alias } = myObject;
// aca SI hay que respetar el nombre de la PROP, ya que los objetos manejan claves específicas
// para cada valor..
console.log(nombre);
console.log(age);
console.log(alias);
console.log("------------------------");

// Sintaxis en Objects con valores predeterminados
let { nombre2, email = "Email@gmail.com"} = myObject;
console.log(nombre2); // Aca vemos el porque SI hay que respetar el nombre, sino es undefined.!
console.log(email); // Se muestra el valor por default.
console.log("------------------------");

// Sintaxis objects con nuevos nombres de variables
let { name: newName, age: newAge, alias: newAlias } = myObject;
// let {nombreOriginal: nombreInventado, edadOriginal: edadInventada}
console.log(newName);
console.log(newAge);
console.log(newAlias);
console.log("------------------------");

// Objetos anidados
let person = {
    name: "Exequiel",
    edad: 30,
    alias: "Chicho",
    job: {
        name: "Programador",
        exp: "4"
    }
}

let { name: nombrePersona, job: {exp, name: nombreJob} } = person
// hacemos destructuring de una prop, igual que lo hacemos con el objeto entero
// Tambien podemos ponerle el nombre que querramos {job: {original: nuevoNombre}}
console.log(nombrePersona);
console.log(nombreJob);
console.log(exp);
console.log("------------------------");

// Spreading (Propagación) (...)

/*
    - Spreading: Nos sirve para expandir elementos de un array o un objeto a otro nuevo.
*/

// Sintaxis Array
let myArray2 = [...myArray] // Nos traemos los elementos del array anterior al actual.
let myArray3 = [...myArray, 8, 9] // ahora le sumamos tambien nuestros propios valores

console.log(myArray2);
console.log(myArray3);
console.log("------------------------");

// Combinación de Arrays
let myArray4 = [...myArray2, ...myArray3]

console.log(myArray4);
console.log("------------------------");

// Sintaxis Objects
let person4 = {...myObject, provincia: "Mendoza", departamento: "Lujan"}
// Traemos los valores de myObject, y ademas sumamos los que querramos, respetando clave -> valor
console.log(person4);

console.log("------------------------");


// Tanto destructuring como spreading se usa mucho en el día a día, sobre todo para 
// trabajar de una manera mas eficiente. 