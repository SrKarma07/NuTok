// Obtener referencia al campo de entrada
var numeroInput = document.getElementById("numeroInput");
// Agregar un evento de escucha al campo de entrada
numeroInput.addEventListener("input", validarNumeroEnTiempoReal);

/**
 * Función para validar el número en tiempo real.
 * No toma parámetros ni returna ningún valor.
 * 
 * @returns {void}
 */
// 
function validarNumeroEnTiempoReal() {
  var numero = numeroInput.value;
  var errorDiv = document.getElementById("error");
  if (!esNumeroValido(numero)) {
    mostrarErrorEnTiempoReal("Debes ingresar un número válido, es decir, un número entero positivo.", errorDiv);
  } else {
    errorDiv.textContent = "";
  }
}

/**
 * Función para mostrar un mensaje de error en tiempo real.
 * 
 * @param {string} mensaje - El mensaje de error.
 * @param {string} errorDiv - El id del <div> tag de error.
 * @returns {void}
 */
function mostrarErrorEnTiempoReal(mensaje, errorDiv) {
  errorDiv.textContent = mensaje;
}

/**
 * Función principal para traducir el número. Muestra los mensaje de error pertinenetes.
 * No toma parámetros ni returna ningún valor.
 * 
 * @returns {void}
*/
function traducirNumero() {
  var numeroInput = document.getElementById("numeroInput").value;
  var resultadoDiv = document.getElementById("resultado");
  var errorDiv = document.getElementById("error");
  
  if (!esNumeroValido(numeroInput)) {
    if (numeroInput.match(/^-\d+$/)) {
      mostrarError("No puedes ingresar un número negativo.", resultadoDiv, errorDiv);
    } else if (numeroInput.match(/^-?\d+(\.\d+)?$/)) {
      mostrarError("No puedes ingresar un número decimal.", resultadoDiv, errorDiv);
    } else if (numeroInput.match(/^.*[^\d].*$/)) {
      mostrarError("No puedes ingresar letras, ni símbolos.", resultadoDiv, errorDiv);
    } else {      
      mostrarError("Debes ingresar un número válido.", resultadoDiv, errorDiv);
    }
  } else {
    var numero = parseInt(numeroInput);

    if (numero >= 0 && numero <= 9999) {
      mostrarResultado(traducir(numero), resultadoDiv, errorDiv);
    } else {
      mostrarError("El número está fuera del rango válido.", resultadoDiv, errorDiv);
    }
  }
}

/**
 * Función para validar si es un número válido.
 * 
 * @param {number} numero - Número ingresado.
 * @returns {number[]} 
 */
function esNumeroValido(numero) {
  return numero.match(/^\d+$/);
}

/**
 * Función para mostrar el resultado.
 * 
 * @param {string} resultado - Número traducido a kichwa.
 * @param {string} resultadoDiv - El id del <div> tag de resultado.
 * @param {string} errorDiv - El id del <div> tag de error.
 * @returns {void}
 */
function mostrarResultado(resultado, resultadoDiv, errorDiv) {
  errorDiv.textContent = "";
  resultadoDiv.textContent = resultado;
}

/**
 * Función para mostrar un mensaje de error.
 * 
 * @param {string} mensaje - Mensaje de error.
 * @param {string} resultadoDiv - El id del <div> tag de resultado.
 * @param {string} errorDiv - El id del <div> tag de error.
 * @returns {void}
 */
function mostrarError(mensaje, resultadoDiv, errorDiv) {
  errorDiv.textContent = mensaje;
  resultadoDiv.textContent = "";
}

/**
 * Función para traducir el número.
 * 
 * @param {number} numero - Número ingresado.
 * @returns {string}
 */
function traducir(numero) {
  var numerosKichwa = {
    0: "illak",
    1: "shuk",
    2: "ishkay",
    3: "kimsa",
    4: "chusku",
    5: "pichka",
    6: "sukta",
    7: "kanchis",
    8: "pusak",
    9: "iskun"
  };

  var stringComprobarUno = numero + "";
  var unidades = numero % 10;
  var decenas = Math.floor((numero / 10) % 10);
  var centenas = Math.floor((numero / 100) % 10);
  var miles = Math.floor((numero / 1000) % 10);

  var traduccion = "";

  if (miles > 0) {
    traduccion += numerosKichwa[miles] + " waranka ";
    traduccion = traduccion.replace(/shuk /, "");
  }

  if (centenas > 0) {
    traduccion += numerosKichwa[centenas] + " patsak ";
    traduccion = traduccion.replace(/shuk /, "");
  }

  if (decenas > 0) {
    traduccion += numerosKichwa[decenas] + " chunka ";
    traduccion = traduccion.replace(/shuk /, "");
    
  }

  if (unidades > 0 || traduccion === "") {
    traduccion += numerosKichwa[unidades];
  }

   if (stringComprobarUno.match(/^1\d*$/)) {
   traduccion = traduccion.replace(/shuk /, "");
   }

  return traduccion;
}