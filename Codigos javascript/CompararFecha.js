fecha = new Date();
var boton = document.getElementById("calcular");
boton.addEventListener("click",function(ev){
                
  dia = document.getElementById("dia").value;
  mes = document.getElementById("mes").value;
  annio = document.getElementById("annio").value;
        
  fecha_texto = annio+"-"+mes+"-"+dia;

  ms = Date.parse(fecha_texto);
  fecha2 = new Date(ms);
        
},false);
one_day=1000*60*60*24;
diferencia = Math.ceil((fecha.getTime()-fecha2.getTime())/(one_day));
texto = (diferencia>0)?"Hace " + diferencia:"Dentro de " + (diferencia*-1);