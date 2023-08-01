// const meuArray = [10,20,30,40,50];
// var segundoElemento = meuArray[1];
// console.log(segundoElemento);

// const frutas = ['maçã','banana','laranja','uva','manga'];
// console.log(frutas.length);
// frutas.push('pera');
// console.log(frutas.length);
// console.log(frutas);
// frutas.shift();
// console.log(frutas);

// const numeros =[10,20,30,40,50];
// console.log(numeros.includes(25));

// const numeros1 = [1,2,3,4,5];
// const numeros2 = [1,2,3,4,5];
// const numeros3 = numeros1.concat(numeros2);
// console.log(numeros3);

// const numeros4 = [1,2,3,4,5,6,7,8,9,10];
// function retornaNNumerosPares(n) {
//     let numeros4 = [];
//     for (let i = 0; numeros4.length < n; i += 2) {
//         numeros4.push(i);
//     }
//     return numeros4;
// }
// console.log(retornaNNumerosPares(5));

// const numeros5 = [3,1,4,1,5,9,2,6,5,3,5];
// numeros5.sort((a,b) => a - b);
// console.log(numeros5);

// const frutas1 = ['maçã','banana','laranja','uva','manga'];
// console.log(frutas1.indexOf("laranja"));

// function somar() {
//     var soma = 0;
//     for (var i = 0; i < arguments.length; i++) {
//       soma += arguments[i];
//     }
//     return soma;
//   }
  
//   var arr = [1, 3, 7, 4, 5, 6];
//   console.log(somar.apply(null, arr))

  function contem(array,y){
    for(var i = 0; i < array.length; i++){
      if (array[i] == y){
        return true;
      }
    }
    return false;
  }
  
  var array = [1, 2, 3, 4, 5]
  console.log(contem(array, 2))
  console.log(contem(array, 4))
  console.log(contem(array, 6))


