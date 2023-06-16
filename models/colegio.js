const {Schema, model} = require('mongoose')

const ColegioSchema = Schema({
    direccion: {
        unique: [true], //Que sea unico
        type: String,
        required: [true]
    },
    latitud: {
        type: Number,
        required: true,
        min: [6.14, 'minimo 6.14'],
        max: [6.200, 'maximo 6.200'],
    },

    longitud:{
        type: Number,
        required: true,
        min: [-75.50, 'minimo -75.50'],
        max: [-75.43, 'maximo -75.43'],
    },

    descripcion:{
        type: String,
        required: true,
    },
    fechaReporte:{
        type: Date,
        required: true,
    }
})

module.exports = model('colegios', ColegioSchema);