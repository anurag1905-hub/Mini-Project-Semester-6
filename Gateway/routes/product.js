const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/add',productController.add);
router.post('/remove',productController.remove);

module.exports = router;