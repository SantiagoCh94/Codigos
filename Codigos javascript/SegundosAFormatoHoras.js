segundos = 1341;
var d=new Date(segundos*1000);
var hora = (d.getHours()==0)?23:d.getHours()-1;
var hora = (hora<9)?"0"+hora:hora;
var minuto = (d.getMinutes()<9)?"0"+d.getMinutes():d.getMinutes();
var segundo = (d.getSeconds()<9)?"0"+d.getSeconds():d.getSeconds();
document.write(hora+":"+minuto+":"+segundo);