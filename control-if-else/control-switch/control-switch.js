
// Declarar un número entre 1 y 12, y mostrar el nombre del mes correspondiente  usando switch.
let mes = 3;
switch (mes) {
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Mayo");
        break;
    case 6:
        console.log("Junio");
        break;
    case 7:
        console.log("Julio");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Septiembre");
        break;
    case 10:
        console.log("Octubre");
        break;
    case 11:
        console.log("Noviembre");
        break;
    case 12:
        console.log("Diciembre");
        break;
    default:
        console.log("Mes inválido");
}


// Crear un menú de restaurante que reciba un número y muestre una opción (1: pizza, 2: hamburguesa, 3: ensalada, etc.). 
let opcion = 2;
switch (opcion) {
    case 1:
        console.log("Pizza");
        break;
    case 2:
        console.log("Hamburguesa");
        break;
    case 3:
        console.log("Ensalada");
        break;
    default:
        console.log("Opción no válida");
}

// Declarar un número del 1 al 7. Usar switch para identificar si es día laboral o fin de semana. 
let dia = 6;
switch (dia) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Día laboral");
        break;
    case 6:
    case 7:
        console.log("Fin de semana");
        break;
    default:
        console.log("Día inválido");
}

// Declarar una variable que contenga el tipo de usuario (admin, editor, invitado) y mostrar un mensaje personalizado. 
let tipoUsuario = "editor";
switch (tipoUsuario) {
    case "admin":
        console.log("Bienvenido, administrador");
        break;
    case "editor":
        console.log("Bienvenido, editor");
        break;
    case "invitado":
        console.log("Bienvenido, invitado");
        break;
    default:
        console.log("Tipo de usuario no reconocido");
}

// Declarar una variable con un número. Usar switch para verificar si es 10, 20, 30 o diferente. 
let numero = 20;
switch (numero) {
    case 10:
        console.log("Es 10");
        break;
    case 20:
        console.log("Es 20");
        break;
    case 30:
        console.log("Es 30");
        break;
    default:
        console.log("Es un número diferente");
}


// Crear un sistema de categorías donde según el valor (ropa, calzado, electrónica) se imprima un mensaje. 
let categoria = "ropa";
switch (categoria) {
    case "ropa":
        console.log("Categoría: Ropa");
        break;
    case "calzado":
        console.log("Categoría: Calzado");
        break;
    case "electrónica":
        console.log("Categoría: Electrónica");
        break;
    default:
        console.log("Categoría no reconocida");
}

// Declarar una letra y usar switch para verificar si es vocal (a, e, i, o, u) o consonante. 
let letra = "a";
switch (letra) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("Es una vocal");
        break;
    default:
        console.log("Es una consonante");
}

// Declarar un número entre 1 y 5, y mostrar el nombre de un continente. 
let continente = 3;
switch (continente) {
    case 1:
        console.log("África");
        break;
    case 2:
        console.log("América");
        break;
    case 3:
        console.log("Asia");
        break;
    case 4:
        console.log("Europa");
        break;
    case 5:
        console.log("Oceanía");
        break;
    default:
        console.log("Continente no reconocido");
}


// Simular un semáforo. Según el color (rojo, amarillo, verde), mostrar una instrucción correspondiente. 
let colorSemaforo = "verde";
switch (colorSemaforo.toLowerCase()) {
    case "rojo": console.log("Alto.");
        break;
    case "amarillo": console.log("Precaución.");
        break;
    case "verde": console.log("Avanzar.");
        break;
    default: console.log("Color no válido.");
}


// Simular una app de clima. Según el tipo de clima (soleado, lluvioso, nublado), mostrar una recomendación.
let clima = "Soleado"; 

switch (clima.toLowerCase()) {
  case "soleado": 
    console.log("¡Perfecto día! Lleva gafas de sol y protector solar.");
    break;
  case "lluvioso": 
    console.log("Lluvia pronosticada. No olvides llevar un paraguas.");
    break;
  case "nublado": 
    console.log("Cielo nublado. Te recomiendo llevar un abrigo ligero.");
    break;
  default: 
    console.log("No tenemos recomendaciones específicas para este tipo de clima.");
}


