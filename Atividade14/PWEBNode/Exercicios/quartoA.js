const fs = require('fs')
fs.readFile('file.txt', (err, data) => {
    if (err) throw err
    console.log(data.toString())
})

for (let i=0; i<10; i++)
    console.log(i)