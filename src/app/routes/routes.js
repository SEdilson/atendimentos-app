const Atendimento = require('../models/Atendimento')
const atendimento = new Atendimento()

const AtendimentoController = require('../controllers/AtendimentoController')
const atendimentoController = new AtendimentoController()

module.exports = (app) => {

    app.route('/atendimentos')
        .get((req, resp) => {
            atendimentoController.listaAtendimentos(resp)
        })
        .post((req, resp) => {
            const atendimentoAdicionado = req.body
    
            atendimentoController.adicionaAtendimento(atendimentoAdicionado, resp)
        })

    app.route('/atendimentos/:id')
        .get((req, resp) => {
            const id = parseInt(req.params.id)
    
            atendimentoController.buscaAtendimentoPorId(id, resp)
        })
        .put((req, resp) => {
            const id = parseInt(req.params.id)
    
            atendimentoController.alteraAtendimento(id, req.body, resp)
        })
        .delete((req, resp) => {
            const id = parseInt(req.params.id)
    
            atendimentoController.removeAtendimento(id, resp)
        })
}