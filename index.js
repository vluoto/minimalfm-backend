require('dotenv').config()

const Koa = require('koa')
const bodyParser = require('koa-bodyparser')

const router = require('./src/router')
const routes = require('./src/routes')

routes(router)

const app = new Koa()

app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

const { HTTP_PORT } = process.env

app.listen(HTTP_PORT, () => console.log(`server listening on port ${HTTP_PORT}`))
