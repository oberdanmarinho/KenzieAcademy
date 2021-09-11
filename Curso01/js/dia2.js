let gasto01 = 30;
let gasto02 = 30;
let gasto03 = 40;

function calculo(valor1, valor2, valor3){
  let total = valor1 + valor2 + valor3;

  if (total > 100) {
    console.log('Ultrapassou');
  } else {
    console.log('Foi bom');
  }

  console.log(total)
}

calculo(gasto01, gasto02, gasto03)