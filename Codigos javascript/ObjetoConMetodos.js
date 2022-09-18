function rectangulo(base,altura){
    this.base = base;
    this.altura = altura;
    this.calcularArea = getArea;
};
function getArea(){
    return this.base*this.altura;
};
var r1 = new rectangulo(2,4);
alert(r1.calcularArea());
