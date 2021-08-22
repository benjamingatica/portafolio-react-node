'use strict';

const express = require('express');
const TramoContoller = require('../controllers/tramo');

const router = express.Router();

router.get('/tramos', TramoContoller.getTramos);
router.put('/tramo/:id', TramoContoller.updateTramo);

module.exports = router;