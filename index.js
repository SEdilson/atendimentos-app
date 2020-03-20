const app = require('./src/config/custom-express')
const database = require('./src/config/database')

let server;

database()
    .then(server = app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000')
    }))
    .catch(erro => console.log(erro))

module.exports = server