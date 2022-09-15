const fecha = new Date(Date.UTC(2020, 02, 15, 12, 0, 0));

const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric' 
   };
   // Castellano
// domingo, 15 de marzo de 2020
console.log(fecha.toLocaleDateString('es-ES', options));

// Alemán
// Sonntag, 15. März 2020
console.log(fecha.toLocaleDateString('de-DE', options));

// Árabe
// الأحد، ١٥ مارس ٢٠٢٠
console.log(fecha.toLocaleDateString('ar-EG', options));

// Por defecto del sistema
// domingo, 15 de marzo de 2020
console.log(fecha.toLocaleDateString(undefined, options));