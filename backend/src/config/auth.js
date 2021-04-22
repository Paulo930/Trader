const jwt = require('jsonwebtoken')
const key = require('./secret.json').crypto

module.exports = (request, response, next) => {
  const token = extractToken(request)
  !token ? response.status(401).json({ mensagem: 'Você precisa se autenticar.' })
  : jwt.verify(token, key, (err, decoded) => {
      if (decoded) {
        response.user = decoded
        next()
      } else response.status(403).json({ mensagem: 'Não autorizado' })
    })
}

function extractToken(request) {
  let token = undefined
  if(request.headers && request.headers.authorization){
    const parts = request.headers.authorization.split(' ')
    if(parts.length === 2 && parts[0] === 'Bearer') token = parts[1]
  }
  return token
}
