// EVENT EMITTER
// const EventEmitter = require('events')
// const customEmitter = new EventEmitter()

// customEmitter.on('response', (name, id) => {
//     console.log(`data recieved user ${name} with id: ${id}`)
// })

// customEmitter.on('response', () => {
//     console.log(`other logic`)
// })

// customEmitter.emit('response', 'john', 34)

const http = require ('http')

// const server = http.createServer((req, res) => {
//     res.end('Welcome!')
// })
// using event emitter api
const server = http.createServer()

server.on('request', (req, res) => {
    res.end('Welcome')
})
server.listen(5000)