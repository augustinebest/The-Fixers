const express = require('express');
const router = express.Router();
const ArtisianController = require('../Contollers/ArtisianContoller');
const upload = require('../Services/image_uploads');

router.post('/add', upload.upload.single('pictures'), ArtisianController.addArtisans);
router.get('/get', ArtisianController.getArtisans);

module.exports = router;