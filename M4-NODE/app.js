
/* creamos el servidor web */


const express = require("express");

// ejecutamos express para comenzar a usar sus metodos

const app = express();

const PORT = 3000;

app.use( express.static('public') );

// iniciamos el servidor
app.listen( PORT, () => console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`) )

/*  
  npm ren dev
*/

