// var n = 1
// while (n<=10){
//     console.log(n);
//     n++;
// }

// var soma = 0;
// var soma2 = 0;
// while (soma2<=100){
//     soma+=soma2;
//     soma2++;
// }
// console.log(soma);


// var p = 0;
// for(p = 0; p <= 50; p++){
//     if(p % 2 == 0)
//         console.log(p);
// }

// var n = 1
// var P = 0
// while (n <= 50){
//      n = n + 1;
//     if (n % 2 == 0){
//     P = P + 1
//     }
// }
// console.log(P);

// var n1 = 0;
// var n2 = 0;
// while(n1 < 1000){
//     n2 = n1 * 2;
//     n1++;
//     console.log(n2);
// }


// var primo = 2;
// var fim = 100;
// var verifica = 30;
//     while (primo < fim){
//         if(fim % primo == 0);
//         primo++;
//         console.log(primo);
//     } 

function numeroPrimo(num) {
    for (var i = 2; i < num; i++) {
      if(num % i === 0) {
         return false;
      }
    }
    return num !== 1;  
  }
  console.log( numeroPrimo(5) );


