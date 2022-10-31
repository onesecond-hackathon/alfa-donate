const client = require("./handlers/client")
const thread = new Worker("handlers/client.js")

console.log(thread)
