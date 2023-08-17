// try {
//     noExistingFunction();
// }catch(error){
//     console.log(error.name + ":" + error.message);
// }

// try {
//     criticalCode();
// }catch (erro) {
//     console.log("[Erro]");
//     console.log("Tive um erro");
// }

// try{
//     throw "Será sempre lançada uma exceção";
// }catch(erro){
//     console.log("[Erro]");
//     console.log("Tive um erro");
// }

// let readline = require('readline-sync');
// let num = readline.question('Digite um número: ')
// try{
//     console.log("Iniciando calculadora...");
//     let input = 0;
//     if (input === 0){
//         throw "Valor negado";
//     }
//     let result = num / input;
// }catch (erro){
//     console.log("[Error:] Divisão por zero");
// }

// let readline = require('readline-sync');
// let palavra = readline.question('Digite uma palavra: ');
// try{
//     console.log("Iniciando conversão texto em número...")
//     let string = parseInt(palavra);
//     throw "Conversão negada"
// }catch(erro){
//     console.log("[Error:] Conversão inválida.")
// }


var meuCarro = new Object();
meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;
meuCarro.semPropriedade;

let readline = require('readline-sync');
let carro = readline.question('Digite uma propriedade do carro: ');
try{
    console.log("Iniciando verificação de propriedade...");
    throw "Propriedade inexistente"
}catch(erro){
    console.log("[Error:] Propriedade não encontrada.")
}


