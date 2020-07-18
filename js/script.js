// window.addEventListener('load', start)

var redRange = document.querySelector('#red');
var greenRange = document.querySelector('#green');
var blueRange = document.querySelector('#blue');
var textRed = document.querySelector('#valorRed');
var textGreen = document.querySelector('#valorGreen');
var textBlue = document.querySelector('#valorBlue');
var blocoDeCor = document.querySelector('#cor');



function start(){
    redRange.addEventListener('input', mudandoValorInputRed);
    greenRange.addEventListener('input', mudandoValorInputGreen);
    blueRange.addEventListener('input', mudandoValorInputBlue);
}

function mudandoValorInputRed(event){
   var valorAtualRed = event.target.value;
    textRed.value = valorAtualRed;
}

function mudandoValorInputGreen(event){
    var valorAtualGreen = event.target.value;
    textGreen.value = valorAtualGreen;
}
function mudandoValorInputBlue(event){
    var valorAtualBlue = event.target.value;
    textBlue.value = valorAtualBlue;
}


start();



