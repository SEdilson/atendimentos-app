const jwt = require('jsonwebtoken')
require('dotenv').config()
const UsuarioDao = require('../infraestrutura/UsuarioDao')

class LoginController {

    static routes() {
        return {
            login: '/login'
        }
    }

    login() {
        return (req, resp) => {
            let username = req.body.username
            let senha = req.body.senha

            const usuarioDao = new UsuarioDao()

            if(username && senha) {
                usuarioDao.buscaPorUsuario(username)
                            .then(usuario => {
                                if(username === usuario.username && senha === usuario.senha) {
                                    let token = jwt.sign({usuario: usuario.username},
                                        process.env.SECRET,
                                        {expiresIn: '24h'})
    
                                    resp.json({
                                        success: true,
                                        message: 'Autenticação feita com sucesso',
                                        token: token
                                    })
                                } else {
                                    resp.status(401).send({
                                        success: false,
                                        message: 'Usuário ou senha incorretas'
                                    })
                                }
                            })
                            .catch(erro => console.log(erro))
            } else  {
                resp.send(500).json({
                    success: false,
                    message: 'Falha na autenticacao! Favor checar as credenciais'
                })
            }
        }
    }
}

module.exports = LoginController