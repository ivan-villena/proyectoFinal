
const express = require("express");

const shopController = require("../controllers/shopControllers.js");

const router = express.Router();

router.get('/', (req,res) => shopController.products );

router.get('/cart', (req,res) => shopController.cart );

router.post('/product/:id', (req,res) => shopController.product );

module.exports = router;