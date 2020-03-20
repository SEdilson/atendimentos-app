const app = require('./src/config/custom-express')
const database = require('./src/config/database')

const server = app.listen(3000, () => {
    database()
    console.log('Servidor rodando na porta 3000')
})

module.exports = server