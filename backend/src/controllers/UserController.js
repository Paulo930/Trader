const connection = require('../database/connection')
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const key = require('../config/secret.json').crypto

module.exports = {
    async login(request, response) {
        const { email, password } = request.body;
        const passwordHash = crypto.createHash('SHA3-512').update(password + key).digest('hex');
        const user = await connection('users').where({ email, password: passwordHash }).select('*').first()
        if(user){
            const token = jwt.sign({ id: user.id, name: user.name, sub: user.email, iss: 'trader-server' }, key);
            response.json(token);
        } else response.status(403).json({ msgErr: 'Dados inválidos.' });
    },
    async create(request, response) {
        try {
            const user = request.body;
            const id = await connection('users').insert(user)
            const token = jwt.sign({ id, name: user.name, sub: user.email, iss: 'trader-server' }, key);
            response.json(token);
        }catch(err) {
            response.status(403).json({ err });
        }
    },
}