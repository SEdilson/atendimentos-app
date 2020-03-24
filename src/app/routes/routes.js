const AtendimentoController = require('../controllers/AtendimentoController')
const atendimentoController = new AtendimentoController()

module.exports = (app) => {
    app.route('/atendimentos')
        .get(atendimentoController.listaAtendimentos())
        .post(atendimentoController.adicionaAtendimento())

    app.route('/atendimentos/:id')
        .get(atendimentoController.buscaAtendimentoPorId())
        .put(atendimentoController.alteraAtendimento())
        .delete(atendimentoController.removeAtendimento())
}