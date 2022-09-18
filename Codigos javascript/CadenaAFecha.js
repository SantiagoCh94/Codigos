

var boton = document.getElementById("calcular");
boton.addEventListener("click",function(ev){
		
	dia = document.getElementById("dia").value;
	mes = document.getElementById("mes").value;
	annio = document.getElementById("annio").value;
	
	fecha_texto = annio+"-"+mes+"-"+dia;
	
	ms = Date.parse(fecha_texto);
	fecha = new Date(ms);
	
	document.getElementById("fecha").innerHTML = fecha;
	ev.preventDefault();
	
},false);