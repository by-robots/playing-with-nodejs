const router = require('./router')
const server = require('./server')
const requestHandlers = require('./handlers')

const handle = {}
handle['/'] = requestHandlers.start
handle['/show'] = requestHandlers.show
handle['/start'] = requestHandlers.start
handle['/upload'] = requestHandlers.upload

server.start(router.route, handle)
