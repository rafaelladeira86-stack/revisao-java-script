/*crie um programa que receba dados como 
o nome , a idade e se a pessoa é amigo do dono.
retorne uma mensagem de acordo com as validações abaixo:
-se a pessoa ter mais de 18 anos o acesso ao local sera liberado.
-Amigos do dono podem acessar o local independente da idade.
-caso a pessoa tenha mais de 18 anos e seja amigo do dono, ganahara 
uma bebida.
*/

let entrada = require ('prompt-sync')();

let nome = entrada ('digite seu nome: ');
let idade = entrada (' digite sua idade: ');
let amigo = entrada ('diga se é amigo ou não do dono: (sim/não) ');


    if(idade>=18 && amigo === 'sim') {
        console.log('acesso liberado e ganhou cerveja.');

    }
    if (idade<18 && amigo === 'sim') {
        console.log('acesso liberado')
    
    }
    
    else if(idade< 18){
        console.log('voce não tem acesso liberado.');
    
    }

   