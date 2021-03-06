const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

router.post('/flights/:id/destinations', destinationsCtrl.create)
router.delete('/flights/:id/destinations/:id', destinationsCtrl.delete)
router.delete('/flights/:id/destinations/:DestinationsId', destinationsCtrl.delete)



module.exports = router;