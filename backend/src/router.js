const { response } = require('express');
const express = require('express');
const authentication = require('./config/auth')

const TraderController = require('./controllers/TraderController')
const UserController = require('./controllers/UserController')

const routes = express.Router();

// Login
routes.post('/Login', UserController.login)
routes.post('/createUser', UserController.create)

// Trader
routes.get('/', (req, res) => {
    res.send("Hello Word!")
})

routes.get('/getTrader', authentication, TraderController.list)

module.exports = routes;