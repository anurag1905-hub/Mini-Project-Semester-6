const express = require('express');
const router = express.Router();
const subscriptionController = require('../controllers/subscriptionController');
const searchController = require('../controllers/searchController');

router.post('/subscribe',subscriptionController.subscribe);
router.get('/search/:searchTerm',searchController.search);
router.use('/product/',require('./product'));


module.exports = router;