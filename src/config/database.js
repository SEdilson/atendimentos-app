const conexao = require('../app/infraestrutura/conexao')

const Tabelas = require('../app/infraestrutura/tabelas')
const tabelas = new Tabelas()

module.exports = () => {
    return new Promise((resolve, reject) => {
        conexao.connect(erro => {
            if(erro) {
                return reject(console.log(erro))
            }           
            return resolve(
                // tabelas.init(conexao)
                console.log('conectado com sucesso'))
        })
    })
}