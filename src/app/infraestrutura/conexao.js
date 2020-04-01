const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'mysql',
    database: 'agenda-petshop'
})

module.exports = conexao