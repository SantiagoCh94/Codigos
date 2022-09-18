const cantidades = [1235467.64,24535467.12,3456783.2,15653231,8976562,3122122];
cantidades.forEach(element => {
    console.log(new Intl.NumberFormat('es-ES', { maximumSignificantDigits: 2 }).format(element));
});