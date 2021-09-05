const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        //Conectar base de datos
        this.conectarDB();
        //Middleware
        this.middleware();
        //Rutas
        this.routes();
        
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Corriendo en el puerto 3000')
        });
    }
    middleware(){
        //cors
        this.app.use(cors());
        //lectura y parseo del body
        this.app.use(express.json());
    }

    async conectarDB(){
        await dbConnection();
    }

    routes(){
        this.app.use('/api/usuarios', require('../routes/usuarios'))
    }
}

module.exports = Server;