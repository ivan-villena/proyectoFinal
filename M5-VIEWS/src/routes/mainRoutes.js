
const express = require("express");

const mainControllers = require("../controllers/mainControllers.js")

const router = express.Router();

router.get('/', (req,res) => mainControllers.home );

router.get('/contacto', (req,res) => mainControllers.contacto );

router.get('/nosotros', (req,res) => mainControllers.nosotros );

router.get('/faqs', (req,res) => mainControllers.faqs );

module.exports = router;