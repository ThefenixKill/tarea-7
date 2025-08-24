
// Declarar un número y verificar si es positivo, negativo o cero usando if/else. 
//let numero = -5;
if (numero > 0) {
    console.log("Es positivo");
} else if (numero < 0) {
    console.log("Es negativo");
} else {
    console.log("Es cero");
}



// Declarar una variable y verificar si su valor está entre 1 y 100. 
let valor = 50;
if (valor >= 1 && valor <= 100) {
    console.log("Está entre 1 y 100");
} else {
    console.log("No está en el rango");
}


// Declarar una variable que represente una edad. Evaluar si corresponde a: niño (0-12), adolescente (13-17), adulto (18-64) o adulto mayor (65+). 
//let edad = 20;
if (edad >= 0 && edad <= 12) {
    console.log("Niño");
} else if (edad >= 13 && edad <= 17) {
    console.log("Adolescente");
} else if (edad >= 18 && edad <= 64) {
    console.log("Adulto");
} else {
    console.log("Adulto mayor");
}


// Declarar un número y verificar si es divisible entre 3. 
let numero = 9;
if (numero % 3 === 0) {
    console.log("Es divisible entre 3");
} else {
    console.log("No es divisible entre 3");
}

// Declarar tres variables a, b y c, y mostrar cuál tiene el valor más alto.
let a = 5, b = 10, c = 3;
if (a > b && a > c) {
    console.log("a es el más alto");
} else if (b > a && b > c) {
    console.log("b es el más alto");
} else {
    console.log("c es el más alto");
}

// Declarar una variable contrasena y verificar si tiene al menos 8 caracteres. 
let contrasena = "pepeveras";
if (contrasena.length >= 8) {
    console.log("La contraseña es válida");
} else {
    console.log("La contraseña es demasiado corta");
}

// Declarar una nota del 1 al 100 y determinar si es una A (90+), B (80+), C (70+), D (60+), F (<60). 
let nota = 85;
if (nota >= 90) {
    console.log("A");
} else if (nota >= 80) {
    console.log("B");
} else if (nota >= 70) {
    console.log("C");
} else if (nota >= 60) {
    console.log("D");
} else {
    console.log("F");
}


// Declarar una edad y verificar si la persona puede ingresar a una página (mayor o igual a 18).
//let edad = 17;
if (edad >= 18) {
    console.log("Puede ingresar a la página");
} else {
    console.log("No puede ingresar a la página");
}

// Declarar dos variables: tieneLicencia y edad. Verificar si la persona puede conducir. 
let tieneLicencia = true;
let edad = 20;
if (tieneLicencia && edad >= 18) {
    console.log("Puede conducir");
} else {
    console.log("No puede conducir");
}

//  Declarar dos variables “x” y “y”, y mostrar si son estrictamente iguales (===) o solamente iguales en valor (==). 
let x = 5;
let y = "5";
console.log(x === y); // false
console.log(x == y); // true


