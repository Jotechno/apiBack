const express = require('express')
const {dbConnection} = require('../database/config')
const bodyParser = require('body-parser')
const cors = require('cors')




class Server{


    constructor(){
        this.app = express()
        this.port = process.env.PORT //Capturando variable puerto
        this.usuarioPath = '/api/colegio' //Ruta pública
        this.middlewares()
        this.routes()
        this.conectarbs()

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Escuchando por el puerto ${this.port}`)
        })
    }

    middlewares(){
        this.app.use(express.static(__dirname + "/public"));
        this.app.use(bodyParser.json())
        this.app.use(cors())
    }

    routes() {
       this.app.use(this.usuarioPath, require('../routes/colegios'))
    }
    async conectarbs(){
        await dbConnection()
    }
}

module.exports = { Server }
