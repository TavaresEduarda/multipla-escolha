
function soma(){
   let n1 = Number(prompt("digite o primeiro valor"))
   let n2 = Number(prompt("digite o segundo numero"))
   let calculo = prompt("o que vamos fazer? \n1- Somar\n2- Subtrair\n3- Dividir\n4- Multiplicar")
   let resultado = ""
   

   if (isNaN(n1) || isNaN(n2)) {
    resultado = "Por favor, digite apenas números."
   }else{
      switch (calculo) {
      case "1":
        resultado = "Resultado: " + (n1 + n2)
        break
         case "2":
        resultado = "Resultado: " + (n1 - n2)
        break
      case "3":
        if (n2 === 0) {
          resultado = "Não é possível dividir por zero."
        } else {
          resultado = "Resultado: " + (n1 / n2);
        }
        break
      case "4":
        resultado = "Resultado: " + (n1 * n2);
        break
      default:
        resultado = "Opção inválida."
      
   }
}
 document.getElementById("resultado").innerHTML = resultado
}