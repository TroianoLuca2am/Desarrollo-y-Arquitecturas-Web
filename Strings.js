let texto = "texto";
let textoMayuscula = texto.toUpperCase();
console.log(textoMayuscula);

let texto2 = "SesSasSos";
let primeros5 = texto2.substring(0, 5);
console.log(primeros5);

let texto3 = "texto";
let ultimos3 = texto3.substring(texto3.length - 3);
console.log(ultimos3);

let texto4 = "texto";
let primeraMayus = texto4.substring(0, 1).toUpperCase() + texto4.substring(1).toLowerCase();
console.log(primeraMayus);

let texto5 = "Ses sas sos";
let espacio = texto5.indexOf(" ");
console.log(espacio);

let texto6 = "texto1 texto2";
let espacio6 = texto6.indexOf(" ");
let palabra1 = texto6.substring(0, espacio6);
let palabra2 = texto6.substring(espacio6 + 1);
let nuevaFrase =
  palabra1.substring(0, 1).toUpperCase() + palabra1.substring(1).toLowerCase() + " " +
  palabra2.substring(0, 1).toUpperCase() + palabra2.substring(1).toLowerCase();
console.log(nuevaFrase);