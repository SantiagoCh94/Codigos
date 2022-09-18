function rectangulo(base,altura){
	this.base = base;
	var altura = altura;
	this.calcularArea = function() { return this.base*this.altura; };
	this.getBase = function() {return base;}
	this.getAltura = function() {return altura;}	
}

var r1 = new rectangulo(2,3);
if (r1.hasOwnProperty("base"))
  document.write("El objeto tiene la propiedad BASE");
else
  document.write("El objeto NO tiene la propiedad BASE");

document.write("");

if (r1.hasOwnProperty("altura"))
  document.write("El objeto tiene la propiedad ALTURA");
else
  document.write("El objeto NO tiene la propiedad ALTURA");

document.write("");


if (r1.hasOwnProperty("area"))
  document.write("El objeto tiene la propiedad AREA");
else
  document.write("El objeto NO tiene la propiedad AREA");
;