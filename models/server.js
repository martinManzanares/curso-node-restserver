const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../db_mongoose/configdb');


class Server {
    constructor(){  
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        this.authPath = '/api/auth';
        
        // Conexion BD.
        this.conectarDB();

        // Middlewares. 
        this.middlewares();
        // Rutas de mi app.
        this.routes();
    }

    async conectarDB() {
        await dbConnection()
    }

    middlewares(){
        // CORS
        this.app.use( cors() );
        // Parseo y lectura del body.
        this.app.use( express.json() );
        // Directorio Publico.
        this.app.use( express.static('public') );
    }

    routes(){
        this.app.use(this.authPath, require('../routes/auth'));
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Server is running on port', this.port);
        });
    }
}


module.exports = Server;