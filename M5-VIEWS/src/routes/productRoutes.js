
const express = require("express");

const productController = require("../controllers/productControllers.js");

const router = express.Router();

router.get('/', (req,res) => productController.admin );

router.post('/create', (req,res) => productController.create );

router.put('/edit/:id', (req,res) => productController.edit );

router.delete('/delete/:id', (req,res) => productController.delete );

module.exports = router;
