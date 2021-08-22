'use strict';

const express = require('express');
const RankingContoller = require('../controllers/rankingtrivia');

const router = express.Router();

router.post('/set-ranking', RankingContoller.setRanking);
router.get('/ranking', RankingContoller.getRankings);

module.exports = router;