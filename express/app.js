const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const fs = require('fs')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Server Express')
})

var list_artigos = ['dados/artigo-1.json', 'dados/artigo-2.json', 'dados/artigo-3.json', 'dados/artigo-4.json']

app.get('/api/artigos/artigo-1', (req, res) => {

    const artigos = JSON.parse(fs.readFileSync(list_artigos[0]))
    res.json(artigos)

})

app.get('/api/artigos/artigo-2', (req, res) => {

    const artigos = JSON.parse(fs.readFileSync(list_artigos[1]))
    res.json(artigos)

})

app.get('/api/artigos/artigo-3', (req, res) => {

    const artigos = JSON.parse(fs.readFileSync(list_artigos[2]))
    res.json(artigos)

})

app.get('/api/artigos/artigo-4', (req, res) => {

    const artigos = JSON.parse(fs.readFileSync(list_artigos[3]))
    res.json(artigos)

})

app.listen(port, () => {
    console.log('express rodando...')
})

app.use(express.static('public'))