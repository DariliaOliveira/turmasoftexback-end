// var ano_atual = new Date().getFullYear();
// var ano_nascimento = 1987;
// var idade_atual = ano_atual - ano_nascimento;
// console.log(idade_atual);

var ano_atual;
var ano_nascimento;
var nomecompleto;
var idade_atual;
ano_atual = new Date().getFullYear();
idade_atual = ano_atual - ano_nascimento;
ano_atual = false;

while(ano_atual==false){
    // if(nomecompleto=String) {
    //     nomecompleto = (window.prompt("Insira seu nome completo:"));
    //     console.log(nomecompleto);
    // } else {
    //     throw new error("Digite um nome válido.")
    // };
        try{        
        ano_nascimento = parseInt(window.prompt("Insira seu ano de nascimento:"));
        if(isNaN(ano_nascimento)==false){
            if(ano_nascimento>=1922 || ano_nascimento<=2021){
                ano_nascimento=true;
                console.log("Sua idade é " + idade_atual);
            } else {
                throw new Error("O ano digitado não está entre 1922 e 2021.")
            }
        }
    }catch(error){
        window.alert(error)
        window.alert("Ano inválido. Digite novamente.");
    }
}

//teste 