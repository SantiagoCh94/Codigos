function datosbasicos(nombre,apellido,edad,direccion,cp,ciudad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;	
  }
  
  function domicilio(nombre,apellido,edad,direccion,cp,ciudad){
    this.direccion = direccion;
    this.cp = cp;
    this.ciudad = ciudad;	
  }
  function persona(nombre,apellido,edad,direccion,cp,ciudad){
	datosbasicos.apply(this,arguments);
	domicilio.apply(this,arguments);
}