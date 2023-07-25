let num1 = 2, num2 = 1;
operacao = "divisao";

switch(operacao) {
    case "adicao":
        operacao = "A soma é " + (num1 + num2);
        break;
    case "subtracao":
        operacao = "A subtracao é " + (num1 - num2);
        break;
    case "multiplicacao":
        operacao = "A multiplicacao é " + (num1 * num2);
        break;
    case "divisao":
        operacao = "A divisao é " + (num1 / num2);
        break;
    default:
        operacao = "Não há operação";
}
console.log(operacao);