
const express = require("express");

const userController = require("../controllers/userControllers.js")

const router = express.Router();

router.get('/login', (req,res) => userController.login );

router.post('/login_procesar', (req,res) => userController.login_procesar );

router.get('/register', (req,res) => userController.register );

router.post('/register_procesar', (req,res) => userController.register_procesar );

module.exports = router;