

// Declarar una constante que contenga tu color favorito e imprímelo. 
const colorFavorito = "Azul";
console.log(colorFavorito);

// Declarar una variable que contenga un número decimal, representar el promedio de notas de un estudiante. 
let promedioNotas = 9;
console.log(promedioNotas);

// Crear una variable que contenga un booleano indicando si el estudiante aprobó o no (ej: true). 
let aprobado = true;
console.log(aprobado)

// Declarar una constante con el año actual y otra con tu año de nacimiento. Calcule su edad.
const anioActual = 2025;
const anioNacimiento = 2000;
//const edad = anioActual - anioNacimiento;
console.log(edad);

// Declarar una variable que contenga un array con los nombres de sus 3 comidas favoritas. Imprimirlo.
let comidasFavoritas = ["Pizza", "Hamburguesa", "Sushi"];
console.log(comidasFavoritas);

// Usar typeof para mostrar el tipo de una variable que tenga el valor null. 
let variableNula = null;
console.log(typeof variableNula);

// Declarar una variable con tu lugar de nacimiento y usa console.log() para escribir un mensaje tipo: Nací en [lugar]. 
let lugarNacimiento = "San José";
console.log(`Nací en ${lugarNacimiento}.`);

// Crear una cadena de texto usando backticks que muestre un resumen con nombre, edad y país.
let nombre = "Killian";
let edad = 24;
let pais = "Costa Rica";
console.log(`Mi nombre es ${nombre}, tengo ${edad} años y soy de ${pais}.`);

// Usar parseFloat para convertir un string "3.1416" a número decimal y mostrar el resultado.
let numeroComoString = "3.1416";
let numeroDecimal = parseFloat(numeroComoString);
console.log(numeroDecimal);

// Declarar dos variables a = 4, b = "6". Suma ambos valores sin parsear b y luego con parseo.
let a = 4;
let b = "6";
let sumaSinParseo = a + b; // "46"
let sumaConParseo = a + parseInt(b); // 10
console.log(sumaSinParseo, sumaConParseo);

