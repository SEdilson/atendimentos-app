const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = () => {
    return (req, resp, next) => {
        let token = req.headers['x-access-token'] || req.headers['authorization']
    
        if(token) {
            if(token.startsWith('Bearer ')) {
                token = token.slice(7, token.length)
            }
            jwt.verify(token, process.env.SECRET, (erro, decoded) => {
                if(erro) {
                    return resp.json({
                        success: false,
                        message: 'Token inválido'
                    })
                } else {
                    req.decoded = decoded
                    next()
                }
            })
        } else {
            return resp.status(403).send({
                success: false,
                message: 'Nenhum token foi encontrado'
            })
        }
    }
}