const http = require('http')
const server = http.createServer((req, res) => {
    const op = req.url
    console.log(op)
    switch(op) {
        case "/historia":
            res.end("<html><body>História da Fatec</body><html>")
            break;
        case "/cursos":
            res.end("<html><body>Cursos</body><html>")
            break;
        case "/professores":
            res.end("<html><body>Professores</body><html>")
            break;
        default:
            res.end("<html><body>Site da Fatec Sorocaba</body><html>")
    }
})
server.listen(3000)
