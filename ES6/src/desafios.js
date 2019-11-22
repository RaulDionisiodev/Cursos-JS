/****************Resoluções dos desafios***********************/


//Desafios Módulo 1

/*Exercício 1*/

class Usuario{
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }

    isAdmin(){
        return this.admin === true;
    }

}

class Admin extends Usuario{

    constructor(email, senha){
        super(email, senha)

        this.admin = true
    }
    

}

const user1 = new Usuario('email@teste.com', 'senha123')
const adm1 = new Admin('email@teste,com', '12345');


console.log(user1.isAdmin())
console.log(adm1.isAdmin())

/*Exercício 2*/
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
    ];

    //map
    const idades = usuarios.map(item => item.idade)

    console.log(idades)

    //filter
    const devs = usuarios.filter( item => item.empresa === 'Rocketseat' && item.idade > 18)

    console.log(devs)

    //find
    const google = usuarios.find( item => item.empresa === 'Google')

    console.log(google)

    //Unindo operações

    const multIdades = usuarios.map(item => ({ ...item, idade: item.idade *2})).filter(item => item.idade < 50)

    console.log(multIdades)

/*Exercício 3*/

// 3.1

const arr = [1, 2, 3, 4, 5];

const n =  arr.map(item => item + 10);

console.log(n)

// 3.2
// Dica: Utilize uma constante pra function

const usuario = { nome: 'Diego', idade: 23 };

const mostraIdade = usuario => usuario.idade;


console.log(mostraIdade(usuario));


// 3.3
// Dica: Utilize uma constante pra function

const nome = "Diego";
const idade = 23;

const mostraUsuario = ({nome = 'Raul', idade = 18}) => ({nome, idade})


console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4

const promise = () => new Promise(({resolve, reject}) =>  resolve());

/*Exercício 4*/

//4.1
const empresa = {
    nome: 'Rocketseat',
    endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
    }
};

const {nome, endereco:{cidade, estado} } = empresa;

console.log(nome)
console.log(cidade)
console.log(estado)

//4.2

function mostraInfo(usuario) {
    const {nome, idade} = usuario
    return `${nome} tem ${idade} anos.`;
}
   
   console.log(mostraInfo({ nome: 'Diego', idade: 23 }))


/*Exercício 5*/

//5.1

const arr = [1,2,3,4,5,6]

const [x, ...y] = arr

console.log(x)
console.log(y)

function soma (...params) {
  return  params.reduce((next, total) => total + next)
}

console.log(soma(1,2,3))

//5.2

const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome: 'gabriel'}
const usuario3 = {...usuario, endereco:{ ...usuario.endereco, cidade: 'Lontras'}}

/*Exercício 6*/

const usuario = 'Diego';
const idade = 23;
console.log(`O ususário ${usuario} possui ${idade} anos`);

/*Exercício 7*/

const nome = 'Diego';
const idade = 23;

const usuario = {
    nome,
    idade,
    cidade: 'Rio do Sul',
    };


// Desafios Modulo 2

//import  ClasseUsuario from './functions'
//import {idade} from './functions'
import Usuario, {idade as IdadeUsuario} from './functions'

Usuario.info()

 console.log(IdadeUsuario)



 //Desafios Módulo 3

 const delay = () => new Promise (resolve => setTimeout(resolve,1000))
 delay().then(() => {console.log("1s");

    delay().then(() =>{console.log("2s");
    
    delay().then(() =>{console.log("3s");
        });
    
    });
 
})

async function porUmSegundo() {
    const response =  await delay()
    
}

porUmSegundo()


async function getUserFromGithub(user) {

    try {
        const response = await Axios.get(`https://api.github.com/users/${user}`)
        console.log(response.data)
    } catch (error) {
        console.log('Usuário não existe')
        
    }
}

getUserFromGithub('diego3g1')


class github {
    static async getRepositories(repos){
        try {
           const response = await Axios.get(`https://api.github.com/repos/${repos}`)
            console.log(response.data)
        } catch (error) {
            console.log('Repositório Não existe')
            
        }
    }
}

github.getRepositories('Rocketseat/ambiente-react-native')


async function buscaUsuario (usuario) {
    try {
        const response = await Axios.get(`https://api.github.com/users/${usuario}`)
        console.log(response.data)
    } catch (error) {
        console.log('Esse usuário não existe')
    }
    
}

buscaUsuario('rauldionisiodev')



