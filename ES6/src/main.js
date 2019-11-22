import api from './api';
import Axios from 'axios';


class App{
    constructor(){
        this.repositories = []

        this.formEl = document.getElementById('repo-form');
        this.inputEl = document.querySelector('input[name=repository]')
        this.listEl = document.getElementById('repo-list');

        this.registerHandlers()
    }

    registerHandlers(){
        this.formEl.onsubmit = event => this.addRepository(event)

    };

    setLoading(loading = true){
        if (loading === true) {
            let loadingEl = document.createElement('span')
            loadingEl.appendChild(document.createTextNode('Carregando'))
            loadingEl.setAttribute('id', 'loading')

            this.formEl.appendChild(loadingEl)
        }else{
            document.getElementById('loading').remove()
        }
    }

    async addRepository(event){
        event.preventDefault();

        const repoInput = this.inputEl.value;
        
        if (repoInput.length === 0) {
            return;   // O return faz a função parar de executar
        }

        this.setLoading()
       
        try {
        
            const response = await api.get(`/repos/${repoInput}`);

            //Usando desestruturação para pegar os dados que preciso
            const {name, description, html_url,owner:{ avatar_url}} = response.data;

            this.repositories.push({ //object short sintax
                name,
                description,
                avatar_url,
                html_url,
            });

            this.inputEl.value = ''

            this.render()

        } catch (error) {

            alert('O repositório não existe')
            
        }

        this.setLoading(false)

    }

    render(){

        this.listEl.innerHTML = '';

        this.repositories.forEach( repo => {   //forEach percorre o array sem fazer alterações no mesmo
            let imgEl = document.createElement('img')
            imgEl.setAttribute('src', repo.avatar_url)

            let titleEl = document.createElement('strong')
            titleEl.appendChild(document.createTextNode(repo.name))

            let descriptionEl = document.createElement('p')
            descriptionEl.appendChild(document.createTextNode(repo.description))

            let linkEl = document.createElement('a')
            linkEl.setAttribute('target', '_blank')
            linkEl.setAttribute('href', repo.html_url)
            linkEl.appendChild(document.createTextNode('Acessar'))

            let listItemEl = document.createElement('li')
            listItemEl.appendChild(imgEl)
            listItemEl.appendChild(titleEl)
            listItemEl.appendChild(descriptionEl)
            listItemEl.appendChild(linkEl)

            this.listEl.appendChild(listItemEl)

        }) 

    }
}

 new App()
 