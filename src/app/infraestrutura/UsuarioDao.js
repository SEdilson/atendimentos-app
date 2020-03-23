const conexao = require('./conexao')

class UsuarioDao {
    
    buscaPorUsuario(username) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM usuarios WHERE usuario = ${username}`

            conexao.query(sql, (erro, usuario) => {
                if(erro) {
                    return reject('Usuário não encontrado')
                }
                return resolve(usuario)
            })
        })
    }
}

module.exports = UsuarioDao