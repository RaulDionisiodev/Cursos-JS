/*
    Ajax com JS puro

var xhr = new XMLHttpRequest();

xhr.open('GET','https://api.github.com/users/rauldionisiodev')
xhr.send(null)

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.responseText));
        
    }
}
*/

/* Ajax com Promisses

var minhaPromisse = function () {
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();

        xhr.open('GET','https://api.github.com/users/rauldionisiodev')
        xhr.send(null)

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                }else{
                    reject('Erro na Requisição')
                }
                
            }
        }
    });
}

minhaPromisse()
    .then(function(response){
        console.log(response)
    }) // o .then executado se o código chegar até o resolve
    .catch(function(error){ 
        console.warn(error);
        // o .catch é executado se a requisição der erro
    })

*/

//Ajax com Axios 

axios.get('https://api.github.com/users/rauldionisiodev')
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.warn(error)
    })