let palabras = ["gato", "perro", "conejo", "elefante", "jirafa"];
for (let i = 0; i < palabras.length; i++) {
  console.log(palabras[i]);
}

for (let i = 0; i < palabras.length; i++) {
  let palabra = palabras[i];
  let palabraModificada = palabra[0].toUpperCase() + palabra.substring(1).toLowerCase();
  console.log(palabraModificada);
}

let sentence = "";
for (let i = 0; i < palabras.length; i++) {
  sentence += palabras[i] + " ";
}
console.log(sentence.trim());

let numeros = [];
for (let i = 0; i < 10; i++) {
  numeros.push(i);
}
console.log(numeros);
