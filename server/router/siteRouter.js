const express = require('express');
const router = express.Router();
const siteController = require('../controller/siteController');

router.get('/api/search-student-scores', siteController.searchStudentScores);

module.exports = router;