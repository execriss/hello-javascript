// 1. Crea una función que retorne a otra función
const functionA = () => {
  return () => {
    console.log("Segunda función");
  };
};

const callFunctionA = functionA();
callFunctionA();

// 2. Implementa una función currificada que multiplique 3 números
const functionCurrying = (a) => {
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
};

const currying1 = functionCurrying(5)(10); // Al llamarla recibe a, pero al ejecutarla también recibe b (segundo parentesis)
const currying2 = currying1(2); // Esta sería la instancia del segundo return
console.log(currying2);

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  console.log("N", n);

  return n * factorial(n - 1);
}

console.log(factorial(4));

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado

// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier

// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

// 7. Desarrolla una función parcial

// 8. Implementa un ejemplo que haga uso de Spread

// 9. Implementa un retorno implícito

// 10. Haz uso del this léxico
