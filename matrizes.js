// Criando a matriz bidimensional com informações sobre animais
const animals = [
    ["Leão", "Mmífero", 8],
    ["Elefante", "Mamífero", 10],
    ["Cachorro", "Mamífero", 4],
    ["Aranha", "Aracnídeo", 1],
    ["Piranha", "Peixe", 2]
  ];
  
  // Acessando informações individuais
  console.log("Nome do primeiro animal:", animals[0][0]);
  console.log("Espécie do terceiro animal:", animals[2][1]);
  console.log("Idade do quarto animal:", animals[3][2]);
  
  // Adicionando um novo animal
  const novoAnimal = ["Gato", "Mamífero", 2];
  animals.push(novoAnimal);
  
  // Modificando informações de um animal
  animals[1][2] = 12; // Mudando a idade do elefante para 12
  
  // Removendo o último animal da lista
  const animalRemovido = animals.pop();
  console.log("Animal removido:", animalRemovido);
  
  // Imprimindo a matriz completa
  console.log("Matriz completa:", animals);