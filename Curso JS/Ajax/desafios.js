//desafio 1

function checaidade(idade) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (idade > 18) {
                resolve('Maior de 18')
            }else{
                reject('Menor de 18')
            }
        },2000)
    })
    
}

checaidade(17)
    .then(function () {console.log('Maior de 18');})
    .catch(function () {console.log('Menor de 18');});

//desafios 2 e  3

var buttonElement = document.querySelector('#button')
var inputElement = document.querySelector('#user')
var listElement = document.querySelector('#list')
var appElement = document.querySelector('#app')


buttonElement.addEventListener('click', function github() {
        
        var user = inputElement.value
        listElement.innerHTML ='<li>Carregando...</li>'

        setTimeout(() => {
            axios.get(`https://api.github.com/users/${user}/repos`)
                .then(function(response){
                    
                    listElement.innerHTML = ''

                    for(repo of response.data ){
            
                        var repoElement = document.createElement('li')
                        repoElement.textContent = repo.name
                        listElement.appendChild(repoElement)
                        appElement.appendChild(listElement)
                    }
                })
                .catch(function(error) {
                    listElement.innerHTML = '<p>Este usuário não existe</p>'
                })
        }, 2000); 
        console.log(user)  
    }
)

//desafio 3
