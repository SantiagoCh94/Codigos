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
  var {libros} = autor;

for (var {titulo} of libros)
 console.log(titulo);