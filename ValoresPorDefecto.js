function mifuncion({tamanio = 'XL', color = 'rojo'} = {}) {
    console.log(tamanio,color);
}

mifuncion({color:'verde'});
mifuncion({tamanio:'L', color:'azul'});
mifuncion();