function formulas() {
  
    /* Área de un círculo */
    this.areaCirculo = function (radio) {
      return Math.PI * Math.pow(radio,2);
    }
  
  }
  var f = new formulas();
console.log ("El área de un círculo de radio 2 es " + f.areaCirculo(2));