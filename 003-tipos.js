// texto / string
let cidade = 'Tupã';

// inteiro / number
let populacao = 62000;

// Decimal / number
let temperaturaMedia = 34.5;

// sim/não / Booleano
let temMCdonalds = true;

//undefined 
let totalanimaisrua;

// null
let mortesporterremoto = null;

// date
const fundacaocidade = new Date ('1929/10/12')
const datacorreta = new Date (1929, 10, 12);
//console.log(fundacaocidade); saida: 1929/10/12

// objeto
let enderecoprefeitura = {
    logradouro : 'praça da bandeira',
    numero: 1, 
    complemento: null,
    cep: '17600000',
    fundacaocidade: `${fundacaocidade.getDate()+1}/${fundacaocidade.getMonth()+1}/ ${fundacaocidade.getFullYear()}`,
    fundacaoformatocorreto:`${datacorreta.getDate()}/${datacorreta.getMonth()}/ ${datacorreta.getFullYear()}`
};

//array

let principaisavenidas = [ 'tamoios' , 'aimores' , 'lelio pizza']; 

// função
function exibedados() {
    console.log(`a cidade de ${cidade} tem ${populacao} habitantes.
        a prefeitura fica localizada na ${enderecoprefeitura.logradouro} nº ${enderecoprefeitura.numero} - ${enderecoprefeitura.cep} .
        as principais avenidas são: ${principaisavenidas[0]},${principaisavenidas[1]} e ${principaisavenidas[2]}.
        data de fundação : ${enderecoprefeitura.fundacaoformatocorreto}`);
        

}

exibedados();


