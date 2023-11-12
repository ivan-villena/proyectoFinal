
const express = require("express");

const mainControllers = require("../controllers/mainControllers.js")

const router = express.Router();

router.get('/home', (req,res) => mainControllers.home );

router.get('/contact', (req,res) => mainControllers.contact );

router.get('/about', (req,res) => mainControllers.about );

router.get('/faqs', (req,res) => mainControllers.faqs );

module.exports = router;