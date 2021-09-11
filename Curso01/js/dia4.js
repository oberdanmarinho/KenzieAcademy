let botaoCalcular = document.getElementById(btnCalcular);

function calculandoIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value / 100;
    let resultado = documento.getElementById("resultado");

    let IMC = peso / (altura * altura).toFixed(2);

    resultado.textContent = `Seu IMC é ${IMC}`;
}

botaoCalcular.addEventListener("click", calculandoIMC);
