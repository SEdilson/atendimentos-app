const AtendimentoDao = require('../infraestrutura/AtendimentoDao')
const atendimentoDao = new AtendimentoDao()

class AtendimentoController {

    listaAtendimentos(resp) {
        atendimentoDao.lista(resp)
    }

    adicionaAtendimento(atendimento, resp) {
        atendimentoDao.adiciona(atendimento, resp)
    }

    buscaAtendimentoPorId(id, resp) {
        atendimentoDao.buscaPorId(id, resp)
    }

    alteraAtendimento(id, valores, resp) {
        atendimentoDao.altera(id, valores, resp)
    }

    removeAtendimento(id, resp) {
        atendimentoDao.remove(id, resp)
    }
}

module.exports = AtendimentoController