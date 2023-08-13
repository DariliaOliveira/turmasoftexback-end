let nomes = ["Ana", "Beatriz", "Caio", "Diego", "Eliana", "Fábio", "Gisele", "Heitor", "Igor", "José"];
let idades = [10, 35, 42, 67, 89];
let cores = ["azul", "branco", "vermelho", "preto"];

console.log(nomes);
console.log(idades);
console.log(cores);

let novascores = cores.splice(2,2, "verde", "laranja");
let novasidades = idades.splice(3,1, 50);

console.log(novascores);
console.log(cores);
console.log(novasidades);
console.log(idades);



