let numeros=[];
for (let i = 0; i <= 2; i++) {
  do {
    numeros[i]= parseInt(prompt ("Digite un número"));
    if (isNaN(numeros[i])) {
      console.error("Entrada inválida. Por favor, ingresa un número.");
    }
  } while (isNaN(numeros[i]));
}
let numeroMayor;
let numeroMenor;
let numeroCentro;
if (numeros[0] === numeros[1] && numeros[1] === numeros[2]){
  console.log("Los números son iguales");  
} else {
  if (numeros[0] >= numeros[1]){
    numeroMayor = numeros[0];
    numeroMenor = numeros[1];
  }
  else {
    numeroMayor = numeros[1];
    numeroMenor = numeros[0];
  }
  if (numeroMayor < numeros[2]){
    numeroCentro= numeroMayor;
    numeroMayor = numeros[2];
  }
  if (numeroMenor > numeros[2]){
    numeroCentro = numeroMenor;
    numeroMenor = numeros[2];
  }
  console.log( numeroMayor, numeroCentro, numeroMenor);
  console.log( numeroMenor, numeroCentro, numeroMayor);
}





