const LoginController = require('../controllers/LoginController')
const loginController = new LoginController()

const jwtAuthentication = require('../../config/jwt-authentication')

module.exports = (app) => {
    app.use(jwtAuthentication())

    app.post(LoginController.routes().login, loginController.login())
}