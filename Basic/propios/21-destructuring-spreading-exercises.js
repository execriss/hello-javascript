// 1. Usa desestructuración para extraer los dos primeros elementos de un array 
let myArray = ["Elem1", "Elem2", "Elem3"];
let [primerElemento, segundoElemento] = myArray;

console.log(primerElemento);
console.log(segundoElemento);
console.log("....................................");

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let myArray2 = ["Casa", "Dpto"]
let [home1 = "vacío", home2 = "vacío", home3 = "vacío"] = myArray2

console.log(home1);
console.log(home2);
console.log(home3);

console.log("....................................");

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let person = {
    name: "Exequiel",
    age: 26,
    work: "Programing"
}
let { name, age } = person

console.log(name);
console.log(age);

console.log("....................................");

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let { name: nuevoNombre, age: nuevaEdad } = person

console.log(nuevoNombre);
console.log(nuevaEdad);

console.log("....................................");

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let person2 = {
    name: "Exequiel",
    age: 26,
    work: "Programing",
    games: {
        auto: "F1",
        shooter: "CS2"
    }
}
let { games: {auto, shooter} } = person2;

console.log(auto);
console.log(shooter);

console.log("....................................");

// 6. Usa propagación para combinar dos arrays en uno nuevo
let myArray3 = [1,2,3]
let myArray4 = [4,5,6]
let myArray5 = [...myArray3, ...myArray4]

console.log(myArray5);

console.log("....................................");

// 7. Usa propagación para crear una copia de un array
let myArray6 = [...myArray5]

console.log(myArray6);

console.log("....................................");

// 8. Usa propagación para combinar dos objetos en uno nuevo
let myObject2 = {
    prop1: "Prop-1",
    prop2: "Prop-2"
}

let myObject3 = {
    prop3: "Prop-3",
    prop4: "Prop-4"
}

let myObject4 = {...myObject2, ...myObject3}

console.log(myObject4);

console.log("....................................");

// 9. Usa propagación para crear una copia de un objeto
let myObject5 = {...myObject4}

console.log(myObject5);

console.log("....................................");

// 10. Combina desestructuración y propagación
let nuevoArray = [5,4,3,2,1]
let nuevoArray2 = ["a", "b", "c", "d"]

let [primerLetra, segundaLetra] = nuevoArray2
let nuevoArray3 = [...nuevoArray, primerLetra, segundaLetra]

console.log(nuevoArray3);

console.log("....................................");
