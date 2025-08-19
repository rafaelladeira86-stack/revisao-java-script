/*
crie um programa que receba dois numeros e devolva 
como resultado a soma, subtração, a multiplicação e a 
divisão do primeiro pelo segundo número.
*/

let entrada = require ('prompt-sync')();

let n1 = entrada ('Digite o 1ºnúmero');
let n2 = entrada ('Digite o 2ºnúmero');

// let soma  = parseInt(n1) + parseInt(n2);
// let sub = parseInt(n1) - parseInt(n2);
// let mult = parseInt(n1) * parseInt(n2);
// let div = parseInt(n1) / parseInt(n2);
// let resto = parseInt(n1) % parseInt(n2);

let soma  = parseFloat(n1) + parseFloat(n2);
let sub = parseFloat(n1) - parseFloat(n2);
let mult = parseFloat(n1) * parseFloat(n2);
let div = parseFloat(n1) / parseFloat(n2);
let resto = parseFloat(n1) % parseFloat(n2);




console.log(`Resultado da soma. ${n1} + ${n2} = ${soma}`);

console.log(`Resultado da subtração. ${n1} - ${n2} = ${sub}`);

console.log(`Resultado da multiplicação.${n1} * ${n2} = ${mult}`);

console.log(`Resultado da divisão. ${n1} / ${n2} = ${div.toFixed(2)}`);
console.log(`inteiro da divisão  ${n1} / ${n2} = ${parseInt(div)}`);
console.log(`resto da divisão ${n1} % ${n2} = ${resto}`);

entrada ('pressione "ENTER" para encerrar o programa!');


console.log('progrma encerrado com sucesso!!!')

