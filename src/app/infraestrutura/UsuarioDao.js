const conexao = require('./conexao')

class UsuarioDao {
    
    buscaPorUsuario(username) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM usuarios WHERE username = '${username}'`

            conexao.query(sql, (erro, usuarios) => {
                let usuario = usuarios[0]
                if(erro) {
                    return reject('Usuário não encontrado')
                }
                return resolve(usuario)
            })
        })
    }
}

module.exports = UsuarioDao