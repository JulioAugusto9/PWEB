const ev = require('events')
const ee = new ev.EventEmitter()
ee.on('dados', (data) => {
    console.log(data)
})
setInterval(() => {
    ee.emit('dados', Date.now())
}, 500)
