if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')

const app = express()

const expressLayouts = require('express-ejs-layouts')

// view engines
//integra express e ejs
app.set('view engine', 'ejs')
//onde tá minha pasta view
app.set('views', __dirname+'/views')
//onde tão os layouts
app.set('layout', 'layouts/layout')
//fala q ele vai usar 
app.use(expressLayouts)


//trabalhar com os dados que vem de outra pág req
//parse html data
app.use(express.json())
app.use(express.urlencoded({extended: true}))



//config arquivos estáticos
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

//importar router

const indexRouter = require('./routes/index')

//config rota

app.use('/', indexRouter)


//inicializar serviço

app.listen(process.env.PORT, console.log('servidor ativo'))