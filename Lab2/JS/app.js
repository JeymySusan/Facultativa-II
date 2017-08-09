


var dato1=document.getElementById("dato1");
var dato2=document.getElementById("dato2");
var suma=document.getElementById("suma");//boton de suma- evento click
var Resul=document.getElementById("Resul");
var Resultado;

suma.addEventListener("click",sumar);


function sumar(){

Resultado=Number (dato1.value) + Number (dato2.value);
Resul.innerHTML=Resultado;
dato1.value="";
dato2.value="";
dato1.focus;
}