

// 1. Crea un objeto con 3 propiedades
console.log("------------------------");

let object1 = {
    name: "Exequiel",
    age: 30,
    work: "Programador"
}
console.log(object1);

console.log("------------------------");


// 2. Accede y muestra su valor
console.log(`Nombre: `, object1.name);
console.log(`Edad: `, object1.age);
console.log(`Ocupación: `, object1.work);

console.log("------------------------");

// 3. Agrega una nueva propiedad
object1.hoby = "Mecánica"
console.log(object1);

console.log("------------------------");

// 4. Elimina una de las 3 primeras propiedades
delete object1.age
console.log(object1);

console.log("------------------------");

// 5. Agrega una función e invócala
object1.greet = function(moment){
    console.log(`Hola! ${moment}`);
}
object1.greet("buenos dias")

console.log("------------------------");
// 6. Itera las propiedades del objeto
for (let item in object1){
    console.log(object1[item]);
}

console.log("------------------------");
// 7. Crea un objeto anidado
let object2 = {
    name: "Exequiel",
    age: 30,
    exp: {
        first: "1 año en DR comex",
        second: "3 año en Nubceo",
        third: "6 meses en Mercado Libre"
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas
console.log("Exp 1 - ", object2.exp.first);
console.log("Exp 2 - ", object2.exp.second);
console.log("Exp 3 - ", object2.exp.third);


console.log("------------------------");

// 9. Comprueba si los dos objetos creados son iguales
if (object1 == object2) {
    console.log("Los objetos son iguales");
} else {
    console.log("Los objetos NO son iguales");
}

console.log("------------------------");

// 10. Comprueba si dos propiedades diferentes son iguales
if (object1.age == object2.exp) {
    console.log("Las propiedades son iguales");
} else {
    console.log("Las propiedades NO son iguales");
}

console.log("------------------------");
