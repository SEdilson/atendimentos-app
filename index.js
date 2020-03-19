const customExpress = require('./src/config/custom-express')
const conexao = require('./src/app/infraestrutura/conexao')

const Tabelas = require('./src/app/infraestrutura/tabelas')
const tabelas = new Tabelas()

conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')
        
        tabelas.init(conexao)
        
        const app = customExpress()

        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    }
})
