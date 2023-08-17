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

try{
    console.log("Iniciando calculadora...");
    let input = 0;
    if (input === 0){
        throw "Valor negado";
    }
    let result = 7 / input;
}catch (erro){
    console.log("[Error:] Divisão por zero");
}


