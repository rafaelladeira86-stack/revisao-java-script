let entrada = require ('prompt-sync')();

let nome = entrada ('digite seu nome: ');
let idade = entrada ('digite sua idade:');
let validaidade = isNaN(idade);



if(validaidade) {
    console.log(`${nome} insira um valor numerico na idade !`);


}else{
    if(idade> 18) {
        console.log('bem-vindo ao site.');

    }
    else if(idade< 18){
        console.log('voce nao tem idade para acessar o site.');
    
    } else {
        console.log('ok voce tem 18 anos.');
    }

    x //ternário
    console.log(`${nome} descobri que voce é ${maioridade} de idade.`);
}