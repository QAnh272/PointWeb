const express = require('express');
const router = express.Router();
const siteController = require('../controller/siteController');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

router.post('/import-data', siteController.importData);
router.get('/search-data', siteController.searchData);
router.put('/edit-data', siteController.editData);
router.post('/upload-file', upload.single('file'), siteController.uploadFile);

module.exports = router;