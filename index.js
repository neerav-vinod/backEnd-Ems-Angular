const jsonserver = require('json-server')

const empServer = jsonserver.create()

const middleware = jsonserver.defaults()

const router = jsonserver.router('db.json')

const port = 4000 || process.env.PORT

empServer.use(middleware)
empServer.use(router)

empServer.listen(port,()=>{
    console.log('listening on port '+port);
})