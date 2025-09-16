let entrada = require('prompt-sync')();

let usuarios = [
    {usuario:'admin', senha: '1234', nome:'Adiministrador'},
    {usuario:'jose', senha: 'abcd', nome:'jose da silva'},
    {usuario: 'maria',senha:'xyz', nome: 'maria de souza'}
];

function olaUsuario(pNome){
    console.log(`ola ${pNome}, SEJA BEM VINDO(A)!`);
}

// exemplo de funçao que retorna valor 
function loginUsuario(pUsuario, pSenha) {
    let logado = false
    let i = 0
    for ( i ; i <usuarios.length; i++) {
      if(pUsuario == usuarios[i].usuario && pSenha == usuarios [i].senha){
        logado = true;
        break;
      } 
    
}
if (logado){
    return{sucesso: true, txtRetorno: usuarios[i].nome};
} else{
    return{sucesso: false, txtRetorno: 'Usuario ou senha invalidos!'};
}
}

const usuario = entrada ('Digite seu usuario:');
const senha =  entrada ('Digite sua senha:');

const retorno = loginUsuario(usuario, senha);



if(retorno.sucesso){
    let nome = retorno.txtRetorno; 
    olaUsuario(nome);
}else{
    console.log(retorno.txtRetorno);
}



