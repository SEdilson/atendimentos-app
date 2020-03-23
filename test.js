const chai = require('chai')
const chaiHttp = require('chai-http')
const database = require('./src/config/database')
const expect = require('chai').expect
const server = require('./index')
const Atendimento = require('./src/app/models/Atendimento')

chai.use(chaiHttp)

describe('Atendimentos', () =>  {

    beforeEach(() => {
        new Atendimento({cliente: "Edilson",
                            pet: "Royal",
                            servico: "tosa",
                            status: "agendado",
                            data: "04/04/2020",
                            observacoes: ""
        })
    })

    describe('GET Atendimentos', () => {
        it('Testando listagem de atendimentos', (done) =>  {
            chai.request('http://localhost:3000')
                .get('/atendimentos')
                .set('Accept', 'application/json')
                .end((erro, resp)  => {
                    expect(resp.status).to.equal(200)
                    expect(resp.body).to.be.a('array')
                    done()
                })
        })
    })

    describe('POST atendimento', () => {
        it('Testando cadastro de atendimento', (done) => {
            let atendimento_post = {
                cliente: "Maria",
                pet: "Paçoca",
                servico: "banho",
                status: "agendado",
                data: "02/04/2020",
                observacoes: ""
            }

            chai.request('http://localhost:3000')
                .post('/atendimentos')
                .send(atendimento_post)
                .end((erro, resp) => {
                    expect(resp.status).to.equal(201)
                    expect(resp.body).to.be.a('object')
                    expect(resp.body.data).to.equal("2020-04-02 00:00:00")
                    done()
                })
        })

        it('Testando mensagen de erro validação no cadastro', () => {
            let atendimento_invalido = {
                cliente: "Ma",
                pet: "Paçoca",
                servico: "banho",
                status: "agendado",
                data: "19/03/2020",
                observacoes: ""
            }
            chai.request('http://localhost:3000')
                .post('/atendimentos')
                .send(atendimento_invalido)
                .end((erro, resp) => {
                    expect(resp.status).to.equal(400)
                    expect(resp.body[0].mensagem).to.equal('Data deve ser maior ou igual a data atual')
                    expect(resp.body[1].mensagem).to.equal('Usuario deve ter pelo menos cinco caracteres')
                })
        })
    })

    describe('GET atendimento pelo id', () => {
        it('Testando captura de atendimento pelo id', () => {
            let id_ = 1
            chai.request('http://localhost:3000')
                .get(`/atendimentos/${id_}`)
                .end((erro, resp) => {
                    expect(resp.status).to.equal(200)
                    expect(resp.body).property('id').to.equal(id_)
                    expect(resp.body).have.property('cliente')
                    expect(resp.body).have.property('pet')
                    expect(resp.body).have.property('servico')
                    expect(resp.body).have.property('status')
                    expect(resp.body).have.property('data')
                    expect(resp.body).have.property('observacoes')
                    expect(resp.body).have.property('dataCriacao')
                })
        })
    })

    describe('PUT atendimento', () => {
        it('Testando atualização de atendimento', (done) => {
            chai.request('http://localhost:3000')
                .get('/atendimentos')
                .end((erro, resp) => {
                    chai.request('http://localhost:3000')
                        .put(`/atendimentos/${resp.body[0].id}`)
                        .send({cliente: "Cliente Teste", pet: "Royal",
                                servico: "tosa",
                                status: "agendado",
                                data: "02/04/2020",
                                observacoes: ""})
                        .end((erro, resp) => {
                            expect(resp.status).to.equal(200)
                            expect(resp.body.cliente).to.equal('Cliente Teste')
                            expect(resp.body.data).to.equal('2020-04-02 00:00:00')
                            done()
                        })
                })
        })
    })

    describe('DELETE atendimento', () => {
        it('Testando deleção de atendimento', (done) => {
            chai.request('http://localhost:3000')
                .get('/atendimentos')
                .end((erro, resp) => {
                    chai.request('http://localhost:3000')
                        .delete(`/atendimentos/${resp.body[1].id}`)
                        .end((erro, resp) => {
                            expect(resp.status).to.equal(200)
                            expect(resp.body.status).to.equal('Atendimento removido com sucesso')
                            done()
                        })
                })
        })
    })
})