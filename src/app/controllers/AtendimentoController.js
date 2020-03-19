const AtendimentoDao = require('../infraestrutura/AtendimentoDao')
const atendimentoDao = new AtendimentoDao()

class AtendimentoController {

    listaAtendimentos() {
        return (req, resp) => {
            atendimentoDao.lista(resp)
        }
    }

    adicionaAtendimento() {
        return (req, resp) => {
            const atendimentoAdicionado = req.body
    
            atendimentoDao.adiciona(atendimentoAdicionado, resp)
        }
    }

    buscaAtendimentoPorId() {
        return (req, resp) => {
            const id = parseInt(req.params.id)
    
            atendimentoDao.buscaPorId(id, resp)
        }
    }

    alteraAtendimento() {
        return (req, resp) => {
            const id = parseInt(req.params.id)
    
            atendimentoDao.altera(id, req.body, resp)
        }
    }

    removeAtendimento() {
        return (req, resp) => {
            const id = parseInt(req.params.id)
    
            atendimentoDao.remove(id, resp)
        }
    }
}

module.exports = AtendimentoController