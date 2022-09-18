function Persona(nombre,edad){
    this.nombre = nombre;
    this.edad = edad;
}
p1 = new Persona('Santiago',24);
p2 = new Persona("Luis",12);
p3 = new Persona("Javier",43);
console.table([p1,p2,p3]);
console.table([p1,p2,p3],['edad']);