module.exports = {

    index(req, res)  { /* o request e o response são argumentos dentro da função*/
    const city = req.query.city
    return res.render('index') /** todo objeto tem chave e tem valor, ou seja, propriedade e valor. contudo, quando eu tenho o valor com o mesmo nome da propriedade eu posso no javascript deixar somente o nome da propriedade e o js entendera que o valor ja esta embutido  */
    
    
},

orphanage(req, res) {
    return res.render('orphanage')

},

orphanages(req, res) {
    return res.render('orphanages')

},

createOrphanage(req, res) {
    return res.render('create-orphanage')

}
}