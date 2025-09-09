/*

crie um programa que peça ao usuario um valor
inicial e um valor final para gerar tabuadas
do valor inicial até o final

*/


let entrada = require('prompt-sync')();

let primeiro = parseInt(entrada("Digite o primeiro número da tabuada: "));
let segundo = parseInt(entrada("Digite o segundo número da tabuada: "));

for (let tabuada = primeiro; tabuada <= segundo; tabuada++) {
    console.log ( `\nTabuada  ${tabuada}`);
    for (let contador = 1; contador <= 10; contador++) {
        console.log (`${tabuada} x ${contador} = ${tabuada * contador}`);
    }
}