const path = require('path')

const fastify = require('fastify')
const fastifyView = require('@fastify/view')
const fastifyStatic = require('@fastify/static')
var app = fastify()

app.register(fastifyView, {
    engine: {
        eta: require('eta'),
    },
    root: 'views'
})

app.register(fastifyStatic, {
    root: path.join(__dirname, 'public'),
    prefix: '/'
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen({
    port: 3000
})