const threads = require("node:worker_threads")

const ClientProcess = new threads.Worker("./handlers/client.js")
const ServerProcess = new threads.Worker("./handlers/server.js")