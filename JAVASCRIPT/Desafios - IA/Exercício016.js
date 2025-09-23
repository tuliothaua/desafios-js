/* TÚLIO THAUÃ DUTRA */

//Calculo de IMC
let altura = 1.70 ///
let peso = 67 ///

//Process
function calcularImc(altura, peso){
    altura = altura / 100;
    imc = peso / (altura * altura);
    imc = imc.toFixed(2)
    //////////
    return imc
}

//Creating the Exit
console.log(calcularImc(altura, peso))
