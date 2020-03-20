const conexao = require('../app/infraestrutura/conexao')

const Tabelas = require('../app/infraestrutura/tabelas')
const tabelas = new Tabelas()

module.exports = () => {
    conexao.connect(erro => {
        if(erro) {
            console.log(erro)
        } else {
            tabelas.init(conexao)
            console.log('conectado com sucesso')
        }
    })
}