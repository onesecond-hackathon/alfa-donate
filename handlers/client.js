const fastify = require('fastify')
var app = fastify()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen({
    port: 3000
})