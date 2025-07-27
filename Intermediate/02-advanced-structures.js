// Estructuras avanzadas

// Arrays avanzados

// - Métodos //

// forEach (accede a cada uno de los elementos, pero no devuelve un array como MAP)
let numbers = [1, 2, 3, 4, 5, 6];
let numbers2 = numbers.forEach((element) => console.log(element * 2));
console.log(numbers2); // undefined

// map (accede a cada uno de los elementos y retorna un nuevo array transformando cada elemento)
let newNumbers = numbers.map((element) => element * 2);
console.log(newNumbers);

// filter (siguiendo el mandato de MAP, filter nos va a devolver un nuevo array con el filtro que apliquemos)
let evens = numbers.filter((element) => element % 2 === 0);
console.log(evens);

// reduce (es una función reductora sobre cada elemento del array, devolviendo la suma del "valorPrevio" + "valorActual")
let sum = numbers.reduce(
  (valorPrevio, valorActual) => valorPrevio + valorActual, // En el "valorPrevio" se va acumulando el total
  0
);
console.log(sum);

////////////////////////////////////////////////////////////////////////////////////////////////////
// - Manipulación //

// flat (aplana un array que tenga una profundidad específica)
let nestedArray = [1, [2, [3, [4]]]];
let flatArray = nestedArray.flat(3); // nivel de profundidad
console.log(flatArray); // [ 1, 2, 3, 4 ]

// flatMap (combina flat y map)
let phrases = ["Hola mundo", "Adios mundo"];
let words = phrases.flatMap((phrase) => phrase.split(" "));
console.log(words);

////////////////////////////////////////////////////////////////////////////////////////////////////
// - Ordenación //

// sort (devuelve un nuevo array ordenado siguiendo un criterio que le pasemos, por defecto lo hace alfabéticamente)
// let unsorted = [3, 4, 1, 6, 10];
let unsorted = ["b", "j", "a", "c"];
let sorted = unsorted.sort();
console.log(sorted);

let unsorted2 = [3, 4, 1, 6, 10];
let sorted2 = unsorted2.sort((a, b) => a - b); // Criterio de comparación para números
console.log(sorted2);

// reverse (NO devuelve un nuevo array, muta el array original y lo da vuelta)
unsorted2.reverse(); // No necesitamos guardarlo en una variable, ya que muta al original, NO devuelve nada
console.log(unsorted2);

////////////////////////////////////////////////////////////////////////////////////////////////////
// - Búsqueda //

// includes (Recibe un elemento como parámetro, y verifica si ese elemento existe en el array.)
console.log(sorted2.includes(5)); // Devuelve un boolean

// find (Devuelve el primer elemento que cumpla cierta condición mas compleja que includes())
sorted2 = [5, 8, 2, 6, 9, 8, 5, 1];
let firstEven = sorted2.find((element) => element % 2 === 0); // si no encuentra ninguno devuelve undefined
console.log(firstEven);

// findIndex (misma lógica que el find, pero devuelve el índice del elemento, no su valor.)
let firstIndex = sorted2.findIndex((element) => element % 2 === 0); // si no encuentra ninguno devuelve -1
console.log(firstIndex);

////////////////////////////////////////////////////////////////////////////////////////////////////
// - Sets avanzados //

//
