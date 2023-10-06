// Função tradicional sem parâmetros
function bomDia() {
    console.log("Bom dia!");
  }
  
  // Função tradicional com parâmetros e retorno de valor
  function divisao(a, b) {
    return a / b;
  }
  
  // Arrow function com parâmetros e retorno de valor
  const soma = (a, b) => a + b;
  
  // Chamando as funções
  bomDia(); // Chamada da função sem parâmetros
  const resultadoDivisao = divisao(5, 3); // Chamada da função com parâmetros
  const resultadoSoma = soma(4, 2); // Chamada da arrow function
  
  // Exibindo os resultados
  console.log("Resultado da divisão: " + resultadoDivisao);
  console.log("Resultado da soma: " + resultadoSoma);