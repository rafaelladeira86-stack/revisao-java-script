/*crie um programa que receba dois numeros e apresente a contagem de
primeiro numero até o segundo. caso o segundo numero seja maior 
a contagem deve ser decrescente. trate tambem possiveis erros nos valores 
digitados.
*/
let entrada = require ('prompt-sync')();

let n1 = entrada ('digite um numero ') ;
let n2 = entrada ('digite outro numero ');
let repeticoes = 1;

if (isNaN(n1) || isNaN(n2))  {
    console.log('digite apenas numero ')
}

while (n1< n2){
    console.log(n1);
    n1++;
    repeticoes++;
}

while (n1> n2){
    console.log(n1);
    n1--;
    repeticoes++;
}


console.log(`o codigo foi repetido ${repeticoes} vezes!`);