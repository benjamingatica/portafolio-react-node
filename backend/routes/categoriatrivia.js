'use strict';

const express = require('express');
const CategoriaTrivia = require('../controllers/categoriatrivia');

const router = express.Router();

router.get('/categorias-trivia', CategoriaTrivia.getCategorias);
router.get('/get-image-categorias-trivia/:image', CategoriaTrivia.getImageFile);

module.exports = router;