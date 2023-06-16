const { response } = require('express')

//Importar modelos
const Colegio = require('../models/colegio')


const colegioGet = async (req, res = response) => {

    const colegios = await Colegio.find()

    res.json({
        colegios
    })
}

const colegioPost = async (req, res = response) => {
    
    const body = req.body //CAptura dde atributos
    let mensaje = ''
    console.log(body)
    try {
        const colegio = new Colegio(body)
        await colegio.save()
        mensaje = "Exito en la insersion"
    } catch (error) {
        console.log(error)
        if (error.name === 'ValidationError') {
            console.error(Object.values(error.errors).map(val => val.message))
            mensaje = Object.values(error.errors).map(val => val.message)
        }
    }
    
    console.log(mensaje)
    res.json({
        msg: mensaje
    })
}

const colegioPut = async (req, res = response) => {
    const { direccionVieja, direccion, latitud, longitud, descripcion } = req.body//modificar

    let mensaje = ""


    try {
        const colegio = await Colegio.findOneAndUpdate({ direccion: direccionVieja }, {direccion:direccion, latitud: latitud, longitud: longitud, descripcion:descripcion })//Primera llave es el nombre del atributo, el segundo es el nuevo atributo
        mensaje = "Modificado"
    } catch (error) {
        mensaje = "No modificado"
    }
    res.json({
        msg: mensaje
    })
}

const colegioDelete = async (req, res = response) => {
    const { _id } = req.body//modificar
    let mensaje = ""
    try {
        const colegio = await Colegio.deleteOne({ _id: _id })//Primera llave es el nombre del atributo, el segundo es el nuevo atributo
        mensaje = "Borrado"
    } catch (error) {
        mensaje = "No borrado"
    }
    res.json({
        msg: mensaje
    })
}

module.exports = {
    colegioGet,
    colegioPost,
    colegioPut,
    colegioDelete
}