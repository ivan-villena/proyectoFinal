const express = require("express");

const router = express.Router();

router.get('/', (req,res) => res.send(`Vista para Shop`) );

router.get('/item/:id', (req,res) => res.send(`Vista para Mostrar un Item`) );

router.post('/item/:id/add', (req,res) => res.send(`Ruta para crear un item`) );

router.get('/cart', (req,res) => res.send(`Ruta para la Vista de Cart`) );

router.post('/cart', (req,res) => res.send(`Ruta para ir a la pagina del carrito`) );

module.exports = router;