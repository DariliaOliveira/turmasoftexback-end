// function exibirSaudacao(){
//     console.log("Hello, world!");
// }

// exibirSaudacao()


// function exibirSaudacao(nome){
//     console.log("Hello, " + nome)
// }

// exibirSaudacao("Darília")

// function exibirSaudacao(nome, dia, mes){
//     console.log("Hello, " + nome + ", hoje é dia " + dia + " do mês de " + mes + ".")
// }

// exibirSaudacao("Darília", 8, "agosto")


// function exibirSaudacao(nome){
//     const mensagem = `Hello, ${nome}!`;
// console.log(mensagem);
// }

// exibirSaudacao("Darília")


// function saudacao(){
//     console.log("Olá, mundo!")
// }

// saudacao()


// function dobro(num){
//     console.log(2 * num);
// }

// dobro(2)


// function mostrarNumeros (inicio, fim){
//     for (let num = inicio; num <= fim ; num++)
//         console.log(num)
// }

// mostrarNumeros(1,8)

// function verificarPares (n){
//     let numerosPares = [];
//     for (let i = 0; numerosPares.length < n; i++) {
//         if (i % 2 == 0) {
//             numerosPares.push(i);
//         }
//     }
//     console.log (numerosPares);
// }

// verificarPares(8)


function imprimirLista (n){
    for (let num = 0; num < n.length; num++){
        console.log(n[num])
    }
}

let lista = [2,3,5,6,8]

imprimirLista(lista)