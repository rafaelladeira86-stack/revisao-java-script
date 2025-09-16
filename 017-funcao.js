let entrada = require('prompt-sync')();
// exemplo de função que não retorna valor
function olaUsuario(pNome){
    console.log(`ola ${pNome}, seja bem vindo(a)!`);

}

// exemplo de funçao que retorna valor 
function loginUsuario(pUsuario, pSenha) {
    if(pUsuario == 'admin' && pSenha== '1234') {
        return true;
    } else {
        return false;
    }
}

const usuario = entrada ('Digite seu usuario:');
const senha =  entrada ('Digite sua senha:');

if(loginUsuario(usuario, senha)){
    let nome = entrada ('Digite seu nome:');
    olaUsuario(nome);
}else{
    console.log('Usuario ou senha invalidos!')
}



