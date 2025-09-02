/*

continuando com implementação do exemplo 11, faça com que 
o programa só aceite uma senha errada tres vezes,
após a terceira tentativa errada o sistema deve apresentar a mensagem
informando que o usuario está bloqueado.
quando a senha for digitada corretamnete, a mensagem 
"bem vindo ao sistema de login" deve ser apresentada.

*/

let entrada = require ('prompt-sync')();

const senha= '1234';

let senhaDigitada = '';

let = tentativas = 0


do {
 senhaDigitada = entrada('Digite a senha para acessar o sistema:');

 tentativas++

if(senhaDigitada === senha)
    {
        console.log('acesso permitido!');
    break;
} else{
    console.log('senha incorreta')
}

} while(senhaDigitada <3);

if(tentativas===3 && senhaDigitada !== senha)
    {
    console.log('voce errou a senha 3 vezes. Acesso bloqueado!');
}


