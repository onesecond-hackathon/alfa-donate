const path = require('path')

const fastify = require('fastify')
const fastifyView = require('@fastify/view')
const fastifyStatic = require('@fastify/static')
var app = fastify()

app.register(fastifyView, {
    engine: {
        eta: require('eta'),
    },
    root: path.join(__dirname, '../views'),
    layout: './templates/default.html',
    viewExt: 'html',
    propertyName: 'render'
})

app.register(fastifyStatic, {
    root: path.join(__dirname, 'public'),
    prefix: '/'
})

app.get('/', (req, res) => {
    res.render('index', 'default')
})

app.listen({
    port: 3000
})