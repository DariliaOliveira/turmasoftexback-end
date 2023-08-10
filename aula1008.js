// function saudacao(nome, msg="Hello"){
//     console.log(`${msg}, ${nome}`);
// }
// saudacao("Ana");

// function saudacao(nome, msg="Hello"){
//     console.log(`${msg}, ${nome}`);
// }
// saudacao("Pedro","oK");


// function apresentacao(nome,idade,profissao){
//     console.log(`Olá, eu sou ${nome}, tenho ${idade}, e sou ${profissao}`);
// }
// apresentacao("Darília", "36 anos", "programadora.");

// function mensagemPersonalizada(texto,estilo){
//     console.log(document.getElementById(`${texto}`).style.fontSize="40px"`)
// }
// mensagemPersonalizada("Texto no estilo normal.");

// function mensagemPersonalizada(texto,estilo='normal'){
    
//     switch(estilo){
//         case "normal":
//             estilo = "Normal";
//             break;
//         case "itálico":
//             estilo = "itálico";
//             break;
//         case 'negrito':
//             estilo = "negrito";
//             break;
        
//         default:
//             estilo = "Dia inexistente";
//     }
//         console.log(`${texto});
// }
// mensagemPersonalizada("estilo da letra");


//está errada. refazer:
// function mensagemPersonalizada(texto,estilo="normal"){
//     switch(estilo){
//         case "normal":
//             estilo = "normal";
//             break;
//         case "itálico":
//             estilo = "itálico";
//             break;
//         case "negrito":
//             estilo = "negrito";
//             break;
//     }
//     console.log(`${texto}`);
// }
// mensagemPersonalizada("estilo de texto");


// function criarMensagemDeSaudacao(nome){
//     const mensagem = `Hello, ${nome}`;
//     return mensagem;
// }
// console.log(criarMensagemDeSaudacao("Darília"));


// function somar(a,b){
//     return a + b;
// }
// console.log(somar(2,3));


// function ehPar(a){
//     if(a % 2 === 0){
//     return true
// }else {
//     return false
// }
// }
// console.log(ehPar(5));

function maiorNumero(a,b,c){
    const num = Math.maiorNumero(a,b,c);
}
console.log(maiorNumero(1,2,3));

