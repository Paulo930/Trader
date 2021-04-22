const connection = require('../database/connection')

module.exports = {
    async list(request, response) {
        const trader = await connection('trader').where('user_id', response.user.id)
        response.json({status: 200,  trader })
    },
}