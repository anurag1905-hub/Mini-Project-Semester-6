const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');
const searchController = require('../controllers/searchController');

router.post('/subscribe',subscriptionController.subscribe);
router.use('/product',require('./product'));
router.post('/search',searchController.search);

module.exports = router;