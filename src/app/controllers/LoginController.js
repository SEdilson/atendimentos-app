const jwt = require('jsonwebtoken')
require('dotenv').config()
const UsuarioDao = require('../infraestrutura/UsuarioDao')

class LoginController {

    static routes() {
        return {
            index: '/',
            login: '/login'
        }
    }

    login() {
        return (req, resp) => {
            let username = req.body.usuario
            let senha = req.body.senha
    
            const usuarioDao = new UsuarioDao()

            if(username && senha) {
                usuarioDao.buscaPorUsuario(username)
                            .then(usuario => {
                                if(usuario.usuario = username && usuario.senha == senha) {
                                    let token = jwt.sign({usuario: usuario},
                                        process.env.SECRET,
                                        {expiresIn: '24h'})
    
                                    resp.json({
                                        success: true,
                                        message: 'Autenticação feita com sucesso',
                                        token: token
                                    })
                                } else {
                                    resp.send(403).json({
                                        success: false,
                                        message: 'Usuario ou senha incorretas'
                                    })
                                }
                            })
                            .catch(erro => console.log(erro))
            } else  {
                resp.send(400).json({
                    success: false,
                    message: 'Falha na autenticacao! Favor checar as credenciais'
                })
            }
        }
    }
}

module.exports = LoginController