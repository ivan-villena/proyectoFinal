
/* creamos el servidor web */
const path = require("node:path");

const express = require("express");

/* importamos archivos de ruteos */

const mainRoutes = require('./src/routes/mainRoutes.js');
const shopRoutes = require('./src/routes/shopRoutes.js');
const productRoutes = require('./src/routes/productRoutes.js');
const userRoutes = require('./src/routes/userRoutes.js');

/* ejecutamos express para comenzar a usar sus metodos */

const app = express();

/*  para que tome el valor, ejecutar en consola pasando las variables de entorno:

  PORT=1234 node app.js
  PORT=1234 nodemon app.js
*/
const PORT = process.env.PORT ?? 0;

/* 1- Carpeta de Arcvhiso Estáticos: css, img, js */

app.use( express.static( "public" ) );

/* 2- Configuración del Motor de Vistas */

app.set( "view engine", "ejs" );

app.set( "views", path.join( __dirname, "src/views" ) );


/* 3- Definición de Rutas */

app.use( '/', mainRoutes );

app.use( '/shop', shopRoutes );

app.use( '/product', productRoutes );

app.use( '/user', userRoutes );

// vista de página no encontrada

app.use( (req, res) => {

  res.status(404).render( "error", { 
    
    head:{
            
      title: "Error 404",      
    },

    data: {
      
      titulo: "Error 404",
      detalle: "No Existe la página solicitada..."
    }
   } );

});

// iniciamos el servicio
app.listen( PORT, () => console.log(`App ejecutándose en http://localhost:${PORT}`) )

/*  
  npm run dev
*/

