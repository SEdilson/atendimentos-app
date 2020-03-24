class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criaTabelaDeAtendimentos()
        this.criaTabelaDeUsuarios()
    }

    criaTabelaDeAtendimentos() {
        const sql = `CREATE TABLE IF NOT EXISTS atendimentos (id int NOT NULL AUTO_INCREMENT, 
            cliente varchar(50) NOT NULL, pet varchar(20),
            servico varchar(20) NOT NULL, status varchar(20) NOT NULL,
            data datetime NOT NULL, dataCriacao datetime NOT NULL,
            observacoes text, PRIMARY KEY(id))`

        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro)
            }
        })
    }

    criaTabelaDeUsuarios() {
        const sql = `CREATE TABLE IF NOT EXISTS usuarios (id int NOT NULL AUTO_INCREMENT,
            usuario varchar(30) NOT NULL, senha varchar(20) NOT NULL, PRIMARY KEY(id));`

        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro)
            }
        })
    }
}

module.exports = Tabelas