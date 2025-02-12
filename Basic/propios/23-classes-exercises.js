// 1. Crea una clase que reciba dos propiedades
console.log("............................");

class Auto {
  constructor(year, model) {
    this.year = year;
    this.model = model;
  }
}

let newAuto = new Auto("2004", "Ford Ka");
console.log(newAuto);

console.log("............................");

// 2. Añade un método a la clase que utilice las propiedades
class Auto2 {
  constructor(year, model) {
    this.year = year;
    this.model = model;
  }

  infoCar() {
    console.log(`El auto ${this.model} es del año ${this.year}`);
  }
}

let newAuto2 = new Auto2(2013, "Chevrolet corsa");
console.log(newAuto2);

console.log("............................");

// 3. Muestra los valores de las propiedades e invoca a la función
class Auto3 {
  constructor(year, model) {
    this.year = year;
    this.model = model;
  }

  infoCar() {
    console.log(`El auto ${this.model} es del año ${this.year}`);
  }
}

let newAuto3 = new Auto3(2010, "Chevrolet Onix");
console.log(newAuto3);

console.log("............................");

// 4. Añade un método estático a la primera clase
class Auto4 {
  constructor(year, model) {
    this.year = year;
    this.model = model;
  }

  static run() {
    console.log("Vehiculo en marcha");
  }
}

console.log("............................");

// 5. Haz uso del método estático

Auto4.run();

// 6. Crea una clase que haga uso de herencia
class Camioneta extends Auto {
  constructor(year, model, marca, origen) {
    super(year, model);

    this.marca = marca;
    this.origen = origen;
  }
}

let newCamioneta = new Camioneta(2015, "S-10", "Chevrolet", "Brasil");

console.log(newCamioneta);

console.log("............................");

// 7. Crea una clase que haga uso de getters y setters

class Person {
  #cvu;
  constructor(name, surename, cvu) {
    this.name = name;
    this.surename = surename;
    this.#cvu = cvu;
  }

  get cvu() {
    return this.#cvu;
  }

  set cvu(newCvu) {
    this.#cvu = newCvu;
  }
}

console.log("............................");

// 8. Modifica la clase con getters y setters para que use propiedades privadas

let newPerson = new Person("Exequiel", "Guiñazú", 123456789);
let cvuPerson = newPerson.cvu; // USO DEL GET

console.log(newPerson);
console.log(cvuPerson);

newPerson.cvu = 99999999999; // USO DEL SET

let cvuPerson2 = newPerson.cvu; // USO DEL GET
console.log(cvuPerson2);

console.log("............................");

// 9. Utiliza los get y set y muestra sus valores
// -> SE HIZO EN EL EJERCICIO DE ARRIBA

// 10. Sobrescribe un método de una clase que utilice herencia

class Auto5 extends Auto4 {
  constructor(year, model, brand) {
    super(year, model);
    this.brand = brand;
  }
  run() {
    console.log("Arrancanding"); // Pisamos el metodo original
  }
}

let ultimoAuto = new Auto5(2012, "Ford Fiesta", "Ford");

ultimoAuto.run();
console.log(ultimoAuto);
