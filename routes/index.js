//arq funciona como um módulo de rota que criamos p reutilizar dps

const express = require('express')

const router = express.Router()

//rota para arq produtos

produtos = require('./produtos')

router.use('/products', produtos)
//////////////////////////////////////////////////////////////////

router.get('/', (req,res) => {
    res.render('index')
})

router.get('/products', (req,res) => {
    //aqui é bom ter geral dos produtos
    res.render('produtos')
})

router.get('/services', (req,res) => {
    res.end('Página de Servicos')
})

router.post('/pasta', (req, res) => {
    let dados = JSON.stringify(req.body) 
    res.render('pasta/result', {'result': dados})
})

router.get('/pasta', (req,res) => {
    res.render('pasta/form')
})

//router.get('/contact', (req,res) => {
//    res.end('Página de Contatos')
//})

////////// posso ter uma com get e post, são rotas diferentes pq methods diferents get/post
//
//router.post('/contact', (req,res) => {
    //como acessar os elementos quem vem dentro de req?
    //let dados = JSON.stringify(req.body)
    //recebe dados do formulário com req
    //o res vai mostrar o dados
    
    //res.end(req.body.email)
//})

router.post('/receber', (req,res) => {

    res.end('Página Receber')
})

module.exports = router