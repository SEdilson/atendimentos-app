const chai = require('chai')
const chaiHttp = require('chai-http')
const database = require('./src/config/database')
const expect = require('chai').expect
const server = require('./index')

chai.use(chaiHttp)

describe('Atendimentos', async () =>  {
    describe('GET Atendimentos', () => {
        it('Testando listagem de atendimentos', (done) =>  {
            chai.request(server)
                .get('http://localhost:3000/atendimentos')
                .set('Accept', 'application/json')
                .end((resp)  => {
                    expect(resp.status).to.equal(200)
                    expect(resp.body).to.be.a('array')
                    done()
                })
        })
    })
})