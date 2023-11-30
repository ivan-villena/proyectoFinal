
/* creamos el servidor web */

const express = require("express");

const path = require ("path");

/* importamos archivos de ruteos */

const mainRoutes = require('./src/routes/mainRoutes.js');
const shopRoutes = require('./src/routes/shopRoutes.js');
const adminRoutes = require('./src/routes/adminRoutes.js');
const userRoutes = require('./src/routes/userRoutes.js');

/* ejecutamos express para comenzar a usar sus metodos */

const app = express();

const PORT = 3000;

/* 1- Carpeta de Arcvhiso Estáticos: css, img, js */

app.use( express.static( path.join( __dirname, "public" ) ) );

/* 2- Configuración del Motor de Vistas */

app.set( "view engine", "ejs" );

app.set( "views", path.join(__dirname,"views") );


/* 3- Definición de Rutas */

app.use( '/', mainRoutes );

app.use( '/shop', shopRoutes );

app.use( '/admin', adminRoutes );

app.use( '/user', userRoutes );

// vista de página no encontrada

app.use( (req, res) => {

  res.status(404).render( "error", { 
    titulo: "Error 404",
    detalle: "No Existe la página solicitada"
   } );

});

// iniciamos el servicio
app.listen( PORT, () => console.log(`App ejecutándose en http://localhost:${PORT}`) )

/*  
  npm run dev
*/

