const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'db',
    user: 'root',
    password: 'mysql',
    database: 'agenda-petshop'
})

module.exports = conexao