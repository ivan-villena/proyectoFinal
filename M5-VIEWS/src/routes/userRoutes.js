
const express = require("express");

const userController = require("../controllers/userControllers.js")

const router = express.Router();

router.get('/login', userController.login );

router.get('/register', userController.register );

module.exports = router;