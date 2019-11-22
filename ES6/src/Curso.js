/*
Aula 3
alert('teste')

class Teste{
    metodo(){

    }

    outro(){
        
    }
}*/

//----- AULA 4 - CLASSES ------//

/*
class List{
    constructor(){
        this.data = []
    }

    add(data){
        this.data.push(data)
        console.log(this.data) 
    }

}

class TodoList extends List {
    constructor(){
        super(); //Chama o construtor da classe pai, no caso, a classe List
        this.usuario = 'Raul'
    }

    mostraUsuario(){
        console.log(this.usuario)
    }

}

 const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
     MinhaLista.add('Novo Todo');
}

MinhaLista.mostraUsuario() 
*/

// CLASSES ESTÁTICAS //

class TodoList{
    constructor(){
        this.todos = []
    }

    static addTodos(){
        this.todos.push('Novo todo');
        console.log(this.todos)
    }
}

//TodoList. addTodos() // NÃO FUNCIONA POIS O MÉTODO ESTÁTICO NÃO OLHA PARA O RESTANTE DA CLASSE

class matematica{
    static soma(a, b){
        return a + b ;
    }

}

//console.log(matematica.soma(1,2)) // FUNCIONA POIS A CLASSE ESTÁTICA NÃO PRECISA SER INSTANCIADA


//*********CONST E LET *****/

/*
CONST -> Não pode ter o seu valor re-atrubuído mas pode ser MUTADO

EX.:

const a = 1;

a = 2  - dá erro

const ususario = {nome: 'diego'}

usuario.nome = 'Raul' - Pode


LET - Variável de escopo uma variável atribuída com let pode ser reatribuida com o mesmo nome em escopos diferentes

*/


//***************** Operações em Array *****************//

//map - percorre o vetor e retorna uma nova informação

const arr = [1,2,3,4,5,6]

const newArr = arr.map(function(item) {
    return item *2
})

const arr2 = arr.map(item=> item * 3 )

//console.log(newArr)
//console.log(arr2)

// map recebe uma função e, como parâmetro dessa função pode ser passado cada ítem do vetor e cada index (posição) dos ítens do Vetor


// Reduce -  Passa por todos os elementos do vetor e retorna uma única informação

const sum = arr.reduce(function(total, next) {

    return total + next
    
}) 

const sum2 = arr.reduce((total, next)=> total + next)

//console.log(sum2)

//Total é o acumulado e next é próximo ítem do vetor


// Filter - Filtra os ítens do array de acordo com alguma regra. Essa regra precisa sempre ter uma resposta boolenana (TRUE OU FALSE)

const pares = arr.filter(function(item) {
    return item % 2 === 0
    
})

const pares2 = arr.filter(item => item %2 === 0 )

//console.log(pares2)

//FIND - Verifica se existe e encontra alguma informação no array. O retorno também precisa ter resposta true ou false

const encontra = arr.find(function (item) {
    return item === 4
})

const encontra2 = arr.find(item => item === 4)

//console.log(encontra2)



//************ARROW FUNCTIONS****************/

// As funções com array serão reconstruídas com arrow functions


/******** Valores Padrão*****/

// Podem ser declarados valores para as variáveis de parâmetros de função. Esses valores serão sobrescritos caso sejam enviados novos valores 
// na chamada da função

const soma = (a = 2, b = 2 ) => a + b;

//console.log(soma());
//console.log(soma(10,10))

/********* Desestruturação **********/

//Forma mais fácil de pegar dados de um objeto

const usuario = {
    nome: 'Raul',
    idade: 34,
    endereco:{
        cidade: 'Rio de Janeiro',
        estado: 'RJ'
    }
}

//const {nome, idade, endereco:{cidade}} = usuario

//console.log(nome, idade, cidade)

// Usando desestruturação em funções

const mostraNome = ({nome, idade}) => console.log(nome, idade);

//mostraNome(usuario)

/******************* Operadores Rest Spread ***************************/

// Para usar o Rest Spread é necessário instalar um plugin pois o rest spread ainda não faz parte do babbel (pesquisar se isso está atualizado)
//yarn add @babel/plugin-proposal-object-rest-spread 

// REST - pega o 'resto' das propriedades

const pessoa = {
    nome: 'Raul',
    idade:34,
    profissao: 'desenvolvedor'
}

/*const {nome, ...resto} = pessoa

console.log(nome)
console.log(resto)*/

const vetor = [1,2,3,4,5]

/*const [a, b, ...c] = vetor

console.log(a)
console.log(b)
console.log(c)*/

function sm(...params) {
    return params.reduce((total, next) => total + next) //retorna a soma de todos os números dados como parâmetro    
}

//console.log(sm(2,4,6,8))

//Spread - Repassa a informação de um objeto ou array para outra estrutura de dados

const A1 = [1,2,3]
const A2 = [4,5,6]

const A3 = [...A1, ...A2]

//console.log(A3)

const pessoa2 = {
    nome: 'Raul',
    idade: 34,
    empresa: 'voopter'
}

const pessoa3 = {...pessoa2, idade: 18}

//console.log(pessoa2)
//console.log(pessoa3)


/****************Template Literals******************/

//Forma de incluir variáveis dentro de strings

const n = 'Raul'
//const i = '35'

//Sem template literals
//console.log("Meu nome é "+ n + " e eu tenho "+ i + " anos.")

//com template Literals
//console.log(`Meu nome é ${n} e eu tenho ${i} anos.`)


/***************Object Short Sintax*****************/

/* Sintaxe curta de objetos */

const nome = 'Raul';
const idade = 34

//Passando o valor dessas variáveis para dentro de um objeto

const pessoa4 = {
    nome,
    idade,
    empresa:'Voopter'
}

//console.log(pessoa4)
//console.log(pessoa4.nome)

/********* CONFIGURANDO O WEBPACK **************/

// O webpack serve para nos dar uma forma de trabalahar com vaŕios arquivos js na aplicação.
// Os arquivos serão transpilados em un único arquivo bundle

// yarn add webpack webpack-cli -D -> comando que instala o webpack

// As dependencies no package.json só são usados no ambiente de desenvolvimento pois, em produção, o Babel não precisa transpilar os arquivos
// o único js que sobe para produção é o bundle.js
//Por isso vamos mudar no package.json o dependecies para devDependencies (O '-D' no comado é para instalar o webpack só em abiente local)


// O arquivo principal de configuração do webpack é o webpack.config.js


//yarn add babel-loader -D -> instala o package de dependências babel loader

//export {soma} from './funções.js';

//console.log(soma(10,2))


/****************** Import / Export ************************/

// A palavra chave 'export' na frente de uma função ou variável me permite importar essa função/variável em outro arquivo usando a palavra chave
//'exports'

// Exportando duas funçoes do mesmo arquivo

//import {adicao, sub} from './funções.js';

//importando todas as funções de um arquivo

/*import * as funcoes from './funções.js';

console.log(funcoes.adicao(10,10));
console.log(funcoes.sub(10,5));*/
 
//Import mudando o nome da função

/*import {adicao as p} from './funções.js'

console.log(p(2,2))*/

// Export default -> com essa keyword podemos exportar funções sem usar chaves na função e mudando os nomes das funções
// é usado quando temos uma única função por arquivo

/*import m from './mult'

console.log(m(3,3))*/

//Export e expor default no mesmo arquivo

//import adicao, {sub} from '../funções';
//console.log(adicao(10,10));
//console.log(sub(10,5))



/***************** Webpack dev server *********************/

/*Organização das pastas:

 -src - Todo o código js que vamos escrever
 -public - Todo o código que o webpack não precisa monitorar

 yarn add webpack-dev-server -D  -> comando que instala o webpack dev server como depencência do nosso projeto

 Usando o webpack dev server temos a nossa aplicação rodando em um servidor local (localhost:8080)

 Com o webpack dev server o arquivo bundle.js não fica visível na nossa máquina mas ele existe virtualmente

 Para colocar a aplicação em produção precisamos configurar o webpack com o script build no aquivo package.json e executar o comando yarn build
 Esse comando vai gerar o arquivo bundle.js
 
 */

 //alert('Rodando com webpack dev server')


 /* O webpack dev server atualiza a página automáticamente em cada mudança no arquivo main.js */




 /****************** Async/await ****************************/

 //Forma tradicional de fazer requisições assíncronas

 const minhaPromisse = () => new Promise((resolve, reject) => {
     setTimeout(()  => {resolve('ok')},2000)
 });

 minhaPromisse().then(response => {
  //   console.log(response);
 })

 //Requisição com async/await

 async function executaPromisse() { // O async deve sempre estar dentro de uma função
     const response = await minhaPromisse() //posso colocar vários 'await' dentro de função. Ele funciona como se fosse o .then
     //cada await vai acontecer depois de finalizar o await acima
 }

 executaPromisse()


 // yarn add @babel/plugin-transform-async-to-generator -D => Instala a o plugin do babel para usar async/await

 //yarn add @babel/plugin-transform-async-to-generator -D => mais um plugin do babel

 // só posso usar o await caso sa função seja decalrada com async

 // Agora a mesma promisse com async e arrow function

 const executaPromisse2 = async () => {
    console.log(await minhaPromisse())
    console.log(await minhaPromisse())
    console.log(await minhaPromisse())
 }

 executaPromisse2()


 /**********************Configurando Axios************************/

 /* yarn add axios => instala a biblioteca necessária para trabalhar com requisições assíncornas com axios */

 // Retornar dados do meu usuário no github

 import axios from 'axios';

 class Api {
     static async getUserInfo(username){
         try {
            const response = await axios.get(`https://api.github.com/users/${username}`)

            console.log(response)
             
         } catch (error) {
             console.log('Erro na Api')
         }
         
     }
 }

 Api.getUserInfo('rauldionisiodev')

 // Com promisses usamos o .them e .catch para pegar os erros. Já com async/await temos que usar o try/catch 