var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var paciente = document.querySelector(".paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura")
var altura = tdAltura.textContent;


var tdIMC = paciente.querySelector(".info-imc")

var pesoValido = true;
var alturaValido = true;


if(peso < 0 || peso > 1000){
    tdIMC.textContent= "peso invalido"
    pesoValido = false;
}

if (altura < 0 || altura > 3){
    tdIMC.textContent= "altura invalida"
    alturaValido = false

}


if(alturaValido && pesoValido){
    var imc = peso / (altura * altura);
    tdIMC.textContent= imc ;    
}
