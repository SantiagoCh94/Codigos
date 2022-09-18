function persona(nombre,apellido,edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}
persona.prototype.toString = function toString() { return this.nombre + " " + this.apellido + ". " + this.edad + " años"; }
var p1 = new persona("Victor","Cuervo",32);
document.write(p1.toString());