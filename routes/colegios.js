const {Router} = require('express')

const route = Router() 

const {colegioGet, colegioPost, colegioPut, colegioDelete} = require('../controllers/colegio')

route.get('/', colegioGet)  
route.get('/:id', colegioGet)  

route.post('/', colegioPost)

route.put('/', colegioPut)

route.delete('/', colegioDelete)

module.exports = route