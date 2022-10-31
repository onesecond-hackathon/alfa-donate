const fastify = require('fastify')
var app = fastify()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

module.exports = {
    ServeHTTP: () => {
        app.listen({
            port: 3000
        })
    }
}

module.exports.ServeHTTP()