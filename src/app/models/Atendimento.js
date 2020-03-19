const moment = require('moment')

class Atendimento {

    static validacoes(atendimento, data, dataCriacao) {
        const dataValida = moment(data).isSameOrAfter(dataCriacao)
        const usuarioValido = atendimento.cliente.length >= 5

        return [
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
    }
}

module.exports = Atendimento