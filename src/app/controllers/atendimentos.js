const Atendimento = require('../models/Atendimento')
const atendimento = new Atendimento()

const AtendimentoController = require('../controllers/AtendimentoController')
const atendimentoController = new AtendimentoController()

module.exports = (app) => {
    app.get('/atendimentos', (req, resp) => {
        atendimentoController.listaAtendimentos(resp)
    })
    app.get('/atendimentos/:id', (req, resp) => {
        const id = parseInt(req.params.id)

        atendimentoController.buscaAtendimentoPorId(id, resp)
    })
    app.post('/atendimentos', (req, resp) => {
        const atendimentoAdicionado = req.body

        atendimentoController.adicionaAtendimento(atendimentoAdicionado, resp)
    })
    app.put('/atendimentos/:id', (req, resp) => {
        const id = parseInt(req.params.id)

        atendimentoController.alteraAtendimento(id, req.body, resp)
    })

    app.delete('/atendimentos/:id', (req, resp) => {
        const id = parseInt(req.params.id)

        atendimentoController.removeAtendimento(id, resp)
    })
}