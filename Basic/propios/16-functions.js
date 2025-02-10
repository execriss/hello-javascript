// FUNCIONES (bloque de código diseñado para una tarea específica, para que haga su trabajo tenemos que invocarla)

function myFunction() {
    console.log("Esto es una función");
}

// Se invoca 1 vez
// myFunction()

// Se invoca X veces
for(let i = 0; i < 5; i++){
    myFunction()
}

console.log("............................");
// CON PARAMETROS (Estos parametros se los enviamos a la funcion cuando la invocamos, y nos sirven para usarlos dentro)
function myFunctionWithParams(name) {
    console.log(`Hola ${name}`);
}

myFunctionWithParams("Exequiel")
myFunctionWithParams()
myFunctionWithParams("Franco")

console.log("............................");
// FUNCIONES ANÓNIMAS (Son funciones que no tienen un nombre definido)
// para poder invocarla la tenemos que asignar a una variable o constante
const myFunc2 = function(name){
    console.log(`Hola ${name} anónimo`);
}

myFunc2("Cristian")

console.log("............................");
// ARROW FUNCTION (o funciones flechas, es una manera moderna o concisa de crear una función)
const arrowFunction = (text) => {
    console.log(text);
}

// Si tenemos solo un parametro, no hace falta envolverlo en ()
// Si retornamos solo una cosa, no hace falta envolverlo en {}
const arrowFuntionMini = text => console.log(text)

arrowFunction("Texto parámetro")
arrowFunction("Texto parámetro funcion mini")

console.log("............................");
// PARÁMETROS 
// para ingresar mas de un parámetro, se separan con ","

function sum(a, b) {
    console.log(a + b);
}

sum(18, 2)
sum(6) // Devuelve Nan, porque intenta sumar un 5 con NADA. 

// Para agregar valores por default al parámetro, se hace dentro de los parentesis asi: a = x, b = y
function sumWhitDefault(a = 0, b = 0) {
    console.log(a + b);
}

sumWhitDefault()

console.log("............................");
// RETORNO DE VALORES
// Podemos retornar lo que queramos, por ej, tengo una función que hace cierta operacion y me retorna
// el resultado de esa operación

function mult(a, b) {
    let resultado = a * b;

    return resultado
}

let resOperacion = mult(3, 5);

console.log('RESULTADO FINAL: ', resOperacion);

console.log("............................");
// FUNCIONES ANIDADAS

function extern(){
    console.log("Función externa");
    function intern() {
        console.log("Función interna");
    }
    intern()
}

extern()
// Error: Asi NO la podemos llamar, porque esta solo dentro del scope de extern()
// intern()
// intern().intern() -> Tampoco funciona


console.log("............................");
// FUNCIONES DE ORDEN SUPERIOR
// Son funciones que reciben otras funciones como argumento

function applyFunc (func, param){
    func(param)
}

let funcExample = (text) => {
    console.log(text);   
}

// llamamos a applyFunction y le pasamos como param funcExample.
applyFunc(funcExample, "Parametro de la funcion example")


console.log("............................");
// forEach -> Aplica para los ARRAYS de JavaScript
// Es una funcion que nos sirve para ejecutar bucles asociados a elementos iterables

/*
    DESVENTAJAS DEL FOREACH A COMPARACION DEL FOR OF
    - No podemos usar brack o continue
    - No retornamos un nuevo array como en el otro caso, solo itera.
*/


let myArray = [1,2,3,4]
myArray.forEach((value) => console.log(value)) // Es una función que ejecuta otra función iteradora

// O se puede hacer con function tradicionales
console.log("......");
myArray.forEach(function(value){
    console.log(value)
})
