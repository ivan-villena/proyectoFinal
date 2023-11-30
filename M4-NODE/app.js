
/* creamos el servidor web */

const express = require("express");

// importamos archivos de ruteos
const mainRoutes = require('./src/routes/mainRoutes.js');
const shopRoutes = require('./src/routes/shopRoutes.js');
const adminRoutes = require('./src/routes/adminRoutes.js');
const userRoutes = require('./src/routes/userRoutes.js');

// ejecutamos express para comenzar a usar sus metodos

const app = express();

const PORT = 3000;

/* 1- Carpeta de Arcvhiso Estáticos */

app.use( express.static('public') );

/* 2- Rutas */

app.use( '/', mainRoutes );

app.use( '/shop', shopRoutes );

app.use( '/admin', adminRoutes );

app.use( '/user', userRoutes );

// vista de error

// iniciamos el servidor
app.listen( PORT, () => console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`) )

/*  
  npm run dev
*/

