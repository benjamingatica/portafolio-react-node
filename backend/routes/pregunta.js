'use strict';

const express = require('express');
const PreguntaContoller = require('../controllers/pregunta');

const router = express.Router();

router.post('/pregunta-random/:categoria', PreguntaContoller.getPreguntaRandom);

module.exports = router;