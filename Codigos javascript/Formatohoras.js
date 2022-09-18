const fecha = new Date('February 15, 2020 20:52:30 GMT+00:00');
// El formato americano lo pondrá en AM/PM
console.log(fecha.toLocaleTimeString('en-US'));

// El formato español lo pondrá en un formato 24h
console.log(fecha.toLocaleTimeString('es-ES'));