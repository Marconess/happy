//Importar depedencia
const express = require('express');
const path = require('path'); /**esta linha criou a barra invertida para o windows[\] */
const pages = require('./pages.js');/**esta linha seria o equivalente link do "href" do html? */



// iniciando o express
const server = express()/* este express é uma biblioteca que esta sendo chamada aqui*/
server
//utilizando os ar arquivos estaticos
.use(express.static('public')) /**com este codigo estou dizendo pro servidor o endrreço dos meus arquivos estaticos da aplicação. com isto ele vai criar sozinho todas as rotas para o public */


//configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')
 
//criar uma rota
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
 
//ligar o servidor
server.listen(5500)
