let numeroRandom = Math.random();

if (numeroRandom >= 0.5) {
  console.log("Mas grande que 0.5");
} else {
  console.log("Mas chico que 0.5");
}

let edad = 35;

if (edad < 2) {
  console.log("Bebé");
} else if (edad <= 12) {
  console.log("Niño");
} else if (edad <= 19) {
  console.log("Adolescente");
} else if (edad <= 30) {
  console.log("Joven");
} else if (edad <= 60) {
  console.log("Adulto");
} else if (edad <= 75) {
  console.log("Adulto mayor");
} else {
  console.log("Anciano");
}