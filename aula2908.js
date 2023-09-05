//nome e média

// let nome = "José";
// let nota1 = 10;
// let nota2 = 8;
// let nota3 = 7;

// let media = (nota1 + nota2 + nota3)/3

// console.log(nome, media.toFixed(2));


//ano bissexto

// let readline = require('readline-sync');
// let ano = readline.question('Digite um ano: ');

// if ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0))){
// console.log("O ano é bissexto.")
// } else{
//     console.log("O ano não é bissexto.")
// }


// 3. Uma determinada empresa vende seus produtos em quatro diferentes estados. Cada
// estado possui uma taxação de imposto diferente sobre o produto (MG: 7%; SP: 12%; RJ:
// 15%; MS: 8%). Faça um programa em Javascript, que o usuário entre com o valor e o
// estado destino do produto e o programa retorne o preço final do produto acrescido do
// imposto correspondente ao estado onde será vendido. O programa deve mostrar uma
// mensagem de erro caso o estado fornecido não esteja na lista de estados válidos.


// let readline = require('readline-sync');
// let valor = readline.question("Qual o valor do produto? ");
// let mercadoria = readline.question("Qual o estado de destino da mercadoria? ");

// switch(mercadoria){
//     case "MG" || "mg":
//         mercadoria = "O preço final do produto é " + (valor * 1.07);
//         break;
//     case "SP" || "sp":
//         mercadoria = "O preço final do produto é " + (valor * 1.12);
//         break;
//     case "RJ" || "rj":
//         mercadoria = "O preço final do produto é " + (valor * 1.15);
//         break;
//     case "MS" || "ms":
//         mercadoria = "O preço final do produto é " + (valor * 1.08);
//         break;
//     default:
//         mercadoria = "Estado sem informação de imposto."
// }
// console.log(mercadoria);


// 4. Faça um programa que calcule e mostre a soma dos 50 primeiros números pares.
// Faça três versões desse programa, cada uma usando uma estrutura de repetição
// diferente (for, while, do-while). Qual das três estruturas é a mais adequada para este
// programa? Por que?


// function somaDosPares(x) {
//     let soma = 0;
//     for (let i = 0; i <= x; i += 2) soma += i
//     return soma;
// }

// console.log("A soma dos 50 primeiros números pares é " + somaDosPares(100));

// let readline = require('readline-sync');

// var soma1 = 0;
// var i = 2;
// while ( i <= 100){
//     soma1 += i;
//     i += 2;
// }
// console.log("A soma dos 50 primeiros números pares é " + soma1);


// let readline2 = require('readline-sync');

// var soma2 = 0;
// var j = 2;
// do{
//     soma2 += j;
//     j += 2;
// } while ( j <= 100);

// console.log("A soma dos 50 primeiros números pares é " + soma2);


// 5. Faça um programa em Javascript que receba do usuário um número N e depois
// imprima os N primeiros números naturais ímpares.

// let readline = require('readline-sync');
// let numero = readline.question("Digite um número: ");

// function retornaNNumerosImpares(n) {
//     let numerosImpares = [];
//     for (let i = 0; numerosImpares.length < n; i++) {
//         if (i % 2 != 0) {
//             numerosImpares.push(i);
//         }
//     }
//     return numerosImpares;
// }

// console.log(retornaNNumerosImpares(5));

// 6. Uma empresa contrata um encanador a R$ 30,00 por dia. Crie um programa que
// solicite o número de dias trabalhados pelo encanador e imprima a quantia líquida que
// deverá ser paga, sabendo-se que são descontados 8% para pagamento de impostos e
// taxas devidas.

// let readline = require("readline-sync");
// let dias = readline.question("Digite quantos dias trabalhados: ");
// let valorDia = 30.00;

// let quantiaLiquida = (dias * valorDia) * 0.92;

// console.log("A quantia líquida a ser recebida pelo encanador é " + quantiaLiquida);

// const readline = require('readline-sync');

// 7. Faça um programa para ler um horário (hora:minuto:segundo) de início e a duração,
// em segundos, de uma experiência biológica. O programa deve informar o horário
// (hora:minuto:segundo) de término da mesma. ****

// corrigir:

let readline = require("readline-sync");
// let time = new Date('August 31, 2023 12:00:00');
// let horarioInicio = readline.question("Digite o horário de início do procedimento: ");
// time.setHours();
// let duracao = readline.question("Digite a duração do procedimento em segundos: ");
// time.setMinutes();

// // let horarioFinal = (horarioInicio.getTime() + duracao.getTime())/ 1000;

// console.log(`O horário final do procedimento é ${time}`);


//questao 8

// let horas = readline.questionInt('Informe as horas trabalhadas:');
// let horaExtra = readline.questionInt('Informe a quantidade de horas extras:');

// let valorHora = horas*10
// let valorHoraExtra = horaExtra*15
// let total = valorHora + valorHoraExtra

// console.log(`Seu salário anual é R$ ${total}`)

//questão 9

// let num = []

// let num1 = readline.questionInt('Informe o primeiro número:')
// num[0] = num1

// let num2 = readline.questionInt('Informe o segundo número:')
// num[1] = num2

// let num3 = readline.questionInt('Informe o terceiro número:')
// num[2] = num3

// function ordem (a, b){
//     return (a-b)
// }
// num.sort(ordem)
// console.log(num)

//questão 10

// console.log(`Informe a opção de conversão:
// 1.	de Celsius para Fahrenheit.
// 2.	de Celsius para Kelvin.
// 3.	de Fahrenheit para Celsius.
// 4.	de Fahrenheit para Kelvin.
// 5.	de Kelvin para Celsius.
// 6.	de Kelvin para Fahrenheit
// `)

// let op = readline.questionInt('')
// let valor = 0
// switch(op){
//     case 1:
//         valor = readline.questionInt(`Digite o valor para conversão:`)
//         valor = (valor * (9/5)) + 32 
//         console.log(`Conversão : ${valor}`)
//         break;
//     case 2:
//         valor = readline.questionInt(`Digite o valor para conversão:`)
//         valor = valor + 273.15
//         console.log(`Conversão : ${valor}`)
//         break;
//     case 3:
//         valor = readline.questionInt(`Digite o valor para conversão:`)
//         valor =(valor-32)/1.8
//         console.log(`Conversão : ${valor}`)
//         break;
//     case 4:
//         valor = readline.questionInt(`Digite o valor para conversão:`)
//         valor =(valor - 32) * 5/9 + 273,15
//         console.log(`Conversão : ${valor}`)
//         break;
//     case 5:
//         valor = readline.questionInt(`Digite o valor para conversão:`)
//         valor = valor - 273.15 
//         console.log(`Conversão : ${valor}`)
//         break;
//     case 6:
//         valor = readline.questionInt(`Digite o valor para conversão:`)
//         valor = (valor - 273.15) * 9/5 + 32 
//         console.log(`Conversão : ${valor}`)
//         break;
//     default:
//         console.log('Erro')
// }

//questão 11

let mes = readline.question('Digite um mês:');
let ano = readline.questionInt('Digite um ano:');
let meses = {
    janeiro: 31,
    fevereiro: 28,
    marco: 31,
    abril: 30,
    maio: 31,
    junho: 30,
    julho: 31,
    agosto: 31,
    setembro: 30,
    outubro: 31,
    novembro: 30,
    dezembro: 31
};
function insiraMes (mes, ano){
    if(ano % 4 === 0 && ano % 100 !== 0){
        meses.fevereiro = 29
    }
    for (let index in meses){
        if(mes == index){
            return meses[index]
        }
    }
};
let dias = insiraMes(mes, ano);
console.log(dias);

