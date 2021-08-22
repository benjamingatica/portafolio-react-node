'use strict';

const express = require('express');
const UsuarioController = require('../controllers/usuario');

const router = express.Router();

router.get('/usuarios', UsuarioController.getUsuarios);
router.get('/usuario/:id', UsuarioController.getUsuario);
router.post('/usuario', UsuarioController.addUsuario);

module.exports = router;