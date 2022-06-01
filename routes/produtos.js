//está dentro de index/produtos e depois entra esse aqr aqui falando o resto da rota 
//index/products/camiseta
//index/products/calca
//aqui vai ter específico de produtos


const express = require('express')

const router = express.Router()

router.get('/shirts', (req,res) => {
    res.end('Página camisetas')
})

router.get('/pants', (req,res) => {
    res.end('Página calças')
})

router.get('/skirts', (req,res) => {
    res.end('Página saias')
})

router.get('/hoodies/:id2', (req,res) => {
//td oq  vem dps do / ele atribui o valor pra id2, pode ser acessado com id2. 
//pra acessar esse valor vc usa o req.params.id2
//método get
    res.send(req.params.id2)
    res.end('Página moletons')
})

module.exports = router