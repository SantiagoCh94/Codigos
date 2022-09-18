var autor = {
    nombre: 'Santiago Posteguillo',
    libros: [
      {
        titulo: 'Africanus, el hijo del cónsul',
        trilogia:'Escipion'
      },
      {
        titulo: 'Las Legiones Malditas',
        trilogia:'Escipion'
      }
    ]
  }
  var {libros: [{titulo}]} = autor;
console.log(titulo);
