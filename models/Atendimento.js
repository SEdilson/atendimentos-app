const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class Atendimento {
    adiciona(atendimento, resp) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')

        const dataValida = moment(data).isSameOrAfter(dataCriacao)
        const usuarioValido = atendimento.cliente.length >= 5

        const validacoes = [
            {
                nome: 'data',
                valido: dataValida,
                mensagem: 'Data deve ser maior ou igual a data atual'
            },
            {
                nome: 'cliente',
                valido: usuarioValido,
                mensagem: 'Usuario deve ter pelo menos cinco caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if(existemErros) {
            resp.status(400).json(erros)
        } else {
            const atendimentoDatado = {...atendimento, dataCriacao, data}
            const sql = 'INSERT INTO atendimentos SET ?'
    
            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
                if(erro) {
                    resp.status(400).json(erro)
                } else {
                    resp.status(201).json(resultados)
                }
            })
        }
    }

    lista(resp) {
        const sql = 'SELECT * FROM atendimentos'

        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                resp.status(400).json(erro)
            } else {
                resp.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, resp) {
        const sql = `SELECT * FROM atendimentos WHERE id = ${id}`

        conexao.query(sql, (erro, resultados) => {
            const resultado = resultados[0]
            if(erro) {
                resp.status(400).json(erro)
            } else {
                resp.status(200).json(resultado)
            }
        })
    }

    altera(id, valores, resp) {
        valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')

        const sql = `UPDATE atendimentos SET ? WHERE id = ?`

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro) {
                resp.status(400).json(erro)
            } else {
                resp.status(200).json(resultados)
            }
        })
    }

    remove(id, resp) {
        const sql = `DELETE FROM atendimentos WHERE id = ${id}`

        conexao.query(sql, (erro) => {
            if(erro) {
                resp.status(400).json(erro)
            } else {
                resp.status(204).json('Atendimento deletado com sucesso')
            }
        })
    }
}

module.exports = Atendimento