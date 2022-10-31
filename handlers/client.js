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
fastify.register(require("@fastify/view"), {
    engine: {
        handlebars: require("handlebars"),
    },
    root: path.join(__dirname, "views"), // Points to `./views` relative to the current file
    layout: "./templates/template", // Sets the layout to use to `./views/templates/layout.handlebars` relative to the current file.
    viewExt: "handlebars", // Sets the default extension to `.handlebars`
    propertyName: "render", // The template can now be rendered via `reply.render()` and `fastify.render()`
    defaultContext: {
        dev: process.env.NODE_ENV === "development", // Inside your templates, `dev` will be `true` if the expression evaluates to true
    },
    options: {}, // No options passed to handlebars
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