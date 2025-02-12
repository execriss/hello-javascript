// Clases
/*
    Nos sirve para crear plantillas de objetos, creamos una plantilla con propiedades
    y metodos, pero NO le damos valores. Los valores se los damos al momento de instanciar
    una clase y crear un nuevo objeto.
*/

let person = {
  name: "Exequiel",
  age: 30,
  alias: "Chicho",
};

console.log("----------------------------");
class Person {
  constructor(name, age, alias) {
    // constructor: es una especie de funcion especial que nos permite definir cual es la
    // estructura de propiedades inicial de la clase (name, age, alias)
    this.name = name;
    this.age = age;
    this.alias = alias;
    // this sirve para hacer referencia a una propiedad que pertenece a la clase (NO al param)
  }
}

// Para instanciar la clase usamos "new" y el nombre de la clase. Nos devolvera un objeto
let personToClass = new Person("Exe", 35, "El mejor");
let personToClass2 = new Person("Franco", 25, "Pibin");

// La plantilla o clase nos sirve para crear multiples objetos distintos
console.log(personToClass);
console.log(personToClass2);

console.log("----------------------------");

// Valores por defecto

class DefaultPerson {
  // Similar a como lo hacemos en un destructuring
  constructor(name = "Vacio1", age = "Vacio2", alias = "Vacio3") {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }
}

let defaultPerson = new DefaultPerson("Cristian");

console.log(defaultPerson);
console.log("----------------------------");

// Acceso a propiedades
/*
    (igual que con los objetos, con un punto y el nombre de la prop)
    (igual que con los objetos, con los ["nombrePropiedad"])
*/

let personToClass3 = new Person("Alexander", 45, "Alex");

console.log(personToClass3.alias);
console.log(personToClass3["age"]);
console.log("----------------------------");

// Modificación de valores

personToClass3.alias = "nuevo alias";

console.log(personToClass3);
console.log("----------------------------");

// Funciones en clases

class PersonWithMethod {
  constructor(name = "Vacio1", age = "Vacio2", alias = "Vacio3") {
    this.name = name;
    this.age = age;
    this.alias = alias;
  }

  // Las funciones, getters y setters van FUERA del constructor
  walk() {
    console.log("Caminando.....");
  }
}

let newPersonWithMethod = new PersonWithMethod("Nico", 56, "Nik");

console.log(newPersonWithMethod);

newPersonWithMethod.walk(); // Asi hacemos uso de la funcion dentro del objeto creado por la clase
console.log("----------------------------");

// Propiedades privadas (podemos crear propiedades que NO se puedan acceder, osea que sean privadas)

class PrivatePerson {
  #bank; // Con esta sintaxis definimos a bank como propiedad privada

  constructor(name = "Vacio1", age = "Vacio2", alias = "Vacio3", bank) {
    this.name = name;
    this.age = age;
    this.alias = alias;
    this.#bank = bank; // Aca tambien se agrega el "#"
  }
  pay() {
    if (this.bank !== null) {
      console.log("Pago exitoso");
    }
  }
}

let privatePersonInstance = new PrivatePerson("Edu", 18, "cuca", 4564564564564);

console.log(privatePersonInstance); // NO se muestra la prop privada
privatePersonInstance.pay();
console.log("----------------------------");

// Getters y Setters

class GetSetPerson {
  #name;
  #age;
  #alias;
  #bank;

  constructor(name, age, alias, bank) {
    this.#name = name; // Podemos leerla si el get la retorna. :)
    this.#age = age; // Sigue siendo privada
    this.#alias = alias; // Sigue siendo privada
    this.#bank = bank; // Sigue siendo privada
  }

  // Con el método get podemos disponibilizar la propiedad que tenemos como privada, pero
  // solo para leerla, no nos permite modificarla.
  get name() {
    return this.#name;
  }

  set bank(newBank) {
    this.#bank = newBank;
  }
}

let getPersonInstance = new GetSetPerson("Andres", 26, "Andy", "12313545454");
let readOnlyGetPerson = getPersonInstance.name;

console.log(getPersonInstance); // Aca lo sigue estando oculto name
console.log(readOnlyGetPerson); // Aca sí lo podemos acceder

// seteamos el valor de bank
getPersonInstance.bank = "New bank 123123132";
console.log("----------------------------");

// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
console.log("-------------HERENCIA---------------");

// HERENCIA -> Sirve para heredar las propiedades y el comportamiento de una clase existente

class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log("Emite un sonido");
  }
}

// Con la palabra extends + la clase que queremos heredar.
class Perro extends Animal {
  run() {
    console.log("Perro corriendo");
  }

  // Sobreescribimos la funcion de la clase padre, pero solo para la clase Perro
  sound() {
    console.log("Perro ladrando");
  }
}

class Fish extends Animal {
  constructor(name, size) {
    // Con super accedemos a propiedades de la clase SUPERIOR, sirve para seguir heredando el
    // comportamiento del padre, y ademas sumar nuevas propiedades.
    super(name);
    this.size = size;
  }
}

let dog = new Perro("Tuqui"); // Nos pide name porque en la clase padre esta definido
dog.run(); // Este metodo es de la clase Perro
dog.sound(); // Este metodo es de la clase Animal

console.log(dog);
console.log("----------------------------");

let fish = new Fish("Nemo", 123);
// Nos pide agregar el name porque usamos super() para traerlo de la clase superior.

console.log(fish);
console.log("----------------------------");

// Métodos estáticos
class MathOperations {
  // static nos sirve para acceder a la funcion SIN necesidad de instanciar la clase
  static sum(a, b) {
    return a + b;
  }

  // Aca debajo podemos crear mas fuinciones estaticas o no...
}

// Sin usar new ni instanciar la clase podemos llamar a estas funciones estaticas.
let operations = MathOperations.sum(10, 5);
console.log(operations);
console.log("----------------------------");
