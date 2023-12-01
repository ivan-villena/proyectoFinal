
const express = require("express");

const productController = require("../controllers/productControllers.js");

const router = express.Router();

router.get('/', productController.admin );

router.get('/create', productController.create );

router.get('/:id', productController.edit );

module.exports = router;
