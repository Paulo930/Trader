const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const routes = require('./router');
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(routes);

app.listen(3333, () => console.log(`Backend running on Port 3333`))