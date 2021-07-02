const Koa = require('koa')
const Router = require('@koa/router')
const cors = require('@koa/cors')
const app = new Koa()
const router = new Router()

const PORT = 3000

router.prefix('/api')
router.get('/home', (ctx) => {
  ctx.body = {
    name: 'hello'
  }
})
router.get('/index', (ctx) => {
  ctx.body = {
    index: 'index',
    name: 'zhangsan'
  }
})

app.use(cors())
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(PORT, () => {
  console.log(`服务启动在${3000}`)
})
