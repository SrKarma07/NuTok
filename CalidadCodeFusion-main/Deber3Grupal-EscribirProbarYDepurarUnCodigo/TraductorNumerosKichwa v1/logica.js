function traducirNumero() {
    var numeroInput = document.getElementById("numeroInput").value;
    var resultadoDiv = document.getElementById("resultado");
    var errorDiv = document.getElementById("error");
  
    if (!numeroInput.match(/^\d+$/)) {
      errorDiv.textContent = "Debes ingresar un número válido.";
      resultadoDiv.textContent = "";
    } else {
      var numero = parseInt(numeroInput);
  
      if (numero >= 0 && numero <= 9999) {
        errorDiv.textContent = "";
        resultadoDiv.textContent = traducir(numero);
      } else {
        errorDiv.textContent = "El número está fuera del rango válido.";
        resultadoDiv.textContent = "";
      }
    }
  }
  
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
  
    var unidades = numero % 10;
    var decenas = Math.floor((numero / 10) % 10);
    var centenas = Math.floor((numero / 100) % 10);
    var miles = Math.floor((numero / 1000) % 10);
  
    var traduccion = "";
  
    if (miles > 0) {
      traduccion += numerosKichwa[miles] + " waranka ";
    }
  
    if (centenas > 0) {
      traduccion += numerosKichwa[centenas] + " patsak ";
    }
  
    if (decenas > 0) {
      traduccion += numerosKichwa[decenas] + " chunka ";
    }
  
    if (unidades > 0 || traduccion === "") {
      traduccion += numerosKichwa[unidades];
    }
  
    return traduccion;
  }