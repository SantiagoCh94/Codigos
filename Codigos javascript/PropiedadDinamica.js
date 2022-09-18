function persona(nombre,apellido,edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;	
  }
var p1 = new persona("victor","cuervo","32");
persona.prototype.ciudad = "Avila";
var p2 = new persona("isabel","herrero","40");
document.write(persona.ciudad);