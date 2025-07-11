function suma(a, b) {
  return a + b;
}
let resultado = suma(5, 7);
console.log(resultado);

function sumaValidada(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Uno de los parámetros no es un número");
    return NaN;
  }
  return a + b;
}
console.log(sumaValidada(5, "hola"));

function validateInteger(num) {
  return Number.isInteger(num);
}
console.log(validateInteger(4));
console.log(validateInteger(4.5));

function sumaConEnteros(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Uno de los parámetros no es un número");
    return NaN;
  }
  if (!Number.isInteger(a)) {
    console.log("Primer número no es entero, se redondeará");
    a = Math.round(a);
  }
  if (!Number.isInteger(b)) {
    console.log("Segundo número no es entero, se redondeará");
    b = Math.round(b);
  }
  return a + b;
}
console.log(sumaConEnteros(4.7, 5.3));

function validateAndRound(num) {
  if (!Number.isInteger(num)) {
    console.log("El número no es entero, se redondeará");
    return Math.round(num);
  }
  return num;
}
function sumaFinal(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    console.log("Uno de los parámetros no es un número");
    return NaN;
  }
  a = validateAndRound(a);
  b = validateAndRound(b);
  return a + b;
}
console.log(sumaFinal(2.4, 3.6));