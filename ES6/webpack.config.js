module.exports = {
    entry:['@babel/polyfill', './src/main.js', ],//nome do arquivo principal onde vamos escrever o código es6 (carrega o babel polifill antes do main)
    output:{
        path:__dirname + '/public', //caminho do arquivo de saída que se refere ao ebdereço do local onde está o arquivo webpack.config
        filename: './bundle.js' //nome do arquivo de saída que vai para a produção
    },
    devServer:{
        contentBase: __dirname + '/public',//caminho do servidor da nossa aplicação, onde fica o arquivo index.html
    },
    module:{
        rules:[ //regras para o webpack seguir
            {
                test: /\.js$/, //Procura arquivos com a extensão .js
                exclude: /node_modules/, //exclui os arquivos da pasta node modules
                use:{
                    loader: 'babel-loader' // usa o package babel loader para transpilar os arquivos
                }

            }
        ]
    }

}