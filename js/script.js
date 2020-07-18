// window.addEventListener('load', start)

var redRange = document.querySelector('#red');
var greenRange = document.querySelector('#green');
var blueRange = document.querySelector('#blue');
var textRed = document.querySelector('#valorRed');
var textGreen = document.querySelector('#valorGreen');
var textBlue = document.querySelector('#valorBlue');
var blocoDeCor = document.querySelector('#cor');



function start(){
    redRange.addEventListener('input', mudandoValorInputRed)
}

function mudandoValorInputRed(event){
   var valorAtual = event.target.value;
    textRed.value = valorAtual;
}

start();



