let readline = require('readline-sync');

let matricula = 1;

const aluno1 ={
    matricula : matricula++,
    nome : "Waldeck",
    notas : [8, 7, 6],
}

const aluno2 = {
    matricula: matricula++,
    nome : "Paulo",
    notas : [10, 5, 6],
}

const alunos = [aluno1, aluno2];

console.log("=== CADASTRO DE ALUNOS ===");
console.log("========= MENU =========");
console.log("0 - Sair do sistema");
console.log("1- Listar todos os alunos");
console.log("2 - Cadastrar um novo aluno");
console.log("3 - Buscar um aluno");
console.log("4 - Alterar um aluno");
console.log("5 - Remover um aluno");
console.log("=========================");

let loop = true;
while (loop) {
    let opcao = readline.questionInt("Escolha sua opção: ");

switch (opcao) {
    case 0:
        console.log("Saindo do sistema...");
        loop = false;
        break;
    case 1:
        console.log("Listando todos os alunos:");
        console.log("-----------------------");
        //console.log(alunos);
        let soma = 0;
        let medias = 0;
        for (const a of alunos) {
            console.log(`Matrícula: ${a.matricula}`);
            console.log(`Nome: ${a.nome}`);
            for (let i = 0; i < a.notas.length; i++) {
                console.log(`\t - Nota ${i + 1}: ${a.notas[i]}`);
                soma += a.notas[i];               
            }
            medias = soma / 3;
                console.log(`Sua média é ${medias}`);
        };  
        break;  
    case 2:
        let nomeAluno = readline.question("Digite o nome do aluno: ");
        let notasAluno = [];
        for (let i = 0; i <3; i++) {
            notasAluno[i] = readline.question(`Digite a nota ${i + 1}: `)
        }
        const alunoNovo = {
            matricula : matricula++, //tá dando NaN
            nome : nomeAluno,
            notas : notasAluno,
        };
    alunos.push(alunoNovo);
        break;
        case 3:
        console.log("Buscando o aluno...");

    break;
    case 4:
        console.log("Alterando um aluno...");

    break;
    case 5:
        console.log("Removendo um aluno...");

    break;
    default:
    console.log("Opção inválida.");
    break;
};
};






