function rectangulo(base,altura){
    this.base = base;
    this.altura = altura;	
  }

r1 = new rectangulo(2,4);
r2 = new rectangulo(4,8);
rectangulo.prototype.calcularArea = function() { return this.base*this.altura; };
document.write("Un rectangulo de " + r1.base + "x" + r1.altura + " tiene un área de " +  r1.calcularArea() + "");
document.write("Un rectangulo de " + r2.base + "x" + r2.altura + " tiene un área de " +  r2.calcularArea());