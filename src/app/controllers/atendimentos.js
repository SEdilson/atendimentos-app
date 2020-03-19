const Atendimento = require('../models/Atendimento')
const atendimento = new Atendimento()

module.exports = (app) => {
    app.get('/atendimentos', (req, resp) => {
        atendimento.lista(resp)
    })
    app.get('/atendimentos/:id', (req, resp) => {
        const id = parseInt(req.params.id)
        atendimento.buscaPorId(id, resp)
    })
    app.post('/atendimentos', (req, resp) => {
        const atendimentoAdicionado = req.body

        atendimento.adiciona(atendimentoAdicionado, resp)
    })
    app.put('/atendimentos/:id', (req, resp) => {
        const id = parseInt(req.params.id)

        atendimento.altera(id, req.body, resp)
    })

    app.delete('/atendimentos/:id', (req, resp) => {
        const id = parseInt(req.params.id)

        atendimento.remove(id, resp)
    })
}