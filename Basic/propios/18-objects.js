// Objects
// Todo aquello que no sea un dato primitivo, es un OBJECT en JS
// Un Objeto tiene dos elementos, una CLAVE y un VALOR que pertenece a dicha clave.

// SINTAXIS
// Estamos modelando una entidad con una personalidad. Con esto empezamos a relacionar la programación 
// con la realidad.

let person = {
    name: "Exequiel",
    "name person": "Cristian",
    edad: 30,
    alias: "Chicho"
}
console.log(person);
console.log("--------------------");


// ACCESO A LAS PROPS

// Notación por punto -> Ponemos el nombre del objeto, y seguido un punto para ver las props internas.
console.log(person.name);
console.log("--------------------");

// Notación de corchetes -> accedemos con el nombre de la clave que estamos buscando, esto es ÚTIL 
// los casos en donde la clave tenga espacios.
console.log(person["name person"]);
console.log("--------------------");

// MODIFICACIÓN DE PROPIEDADES
/*
    Se llama a la prop que queremos modificar, y le pasamos el nuevo valor, si existe la modifica y si NO
    existe la va a crear.
*/

person.edad = 31;
person["name person"] = "Alexander"
console.log(person);
console.log(typeof person); // Object

console.log("--------------------");

// ELIMINACIÓN DE PROPIEDADES

delete person.alias // Elimina por completo la propiedad del object
console.log(person);
console.log("--------------------");

// NUEVA PROPIEDAD

person.email = "egc.criss@gmail.com"
person["cel"] = 271778899

console.log(person);
console.log("--------------------");

// MÉTODOS O TAMBIÉN CONOCIDOS COMO FUNCIONES EN EL OBJECT

let person2 = {
    name: "Exequiel",
    edad: 30,
    alias: "Chicho",
    walk: function(){
        console.log("Caminando...")
    }
}
// Para invocar un metodo//funcion lo llamamos asi: 
person2.walk()

console.log("--------------------");

// Anidación de objetos -> Podemos anidar un objeto dentro de otro

let person3 = {
    name: "Exequiel",
    edad: 30,
    alias: "Chicho",
    walk: function(){
        console.log("Caminando...")
    },
    job: {
        name: "Programador",
        exp: "4"
    }
}

console.log(person3);

// Acceso anidado
console.log(person3.job.name);
console.log("--------------------");

// IGUALDAD DE OBJECTS

let person4 = {
    name: 'Exequiel',
    'name person': 'Alexander',
    edad: 31,
    email: 'egc.criss@gmail.com',
    cel: 271778899
}

console.log(person);
console.log(person4);

// Cuando compara no lo hace a los valores, lo hace a la referencia. Y son dos direcciones distintas.
console.log(person == person4); // false
console.log(person === person4); // false

console.log(person.name === person4.name); // false

/*
    CONCEPTO IMPORTANTE: Representación de variables por valor o por referencia
    Objetos: La forma en la que estos objetos se guardan en memoria ya NO es con un valor asociado. Es con 
    una REFERENCIA. Osea una dirección a memoria.
*/
console.log("--------------------");

// Iteración 

// for (let item of person4) {
//     console.log("ITEM: ", item); // NO funciona como en los arrays
// }

for (let key in person4) { // accedemos a la CLAVE o KEY del objeto.
    console.log("ITEM: ", key);
    console.log("ITEM: ", person4[key]); // si lo hacemos person4.key daria error, porque no existe la prop key como tal.
}
console.log("--------------------");

let person5 = {
    name: "Exequiel",
    edad: 30,
    alias: "Chicho",
    walk: function(){
        console.log(`Caminando hacen ${this.edad} años...`) // Con this hacemos referencia a una prop dentro de este bloque
    },
    job: {
        name: "Programador",
        exp: "4"
    }
}

console.log(person5.walk());
console.log("--------------------");
