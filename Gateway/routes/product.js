const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/add',productController.add);
router.get('/remove/:id',productController.remove);

module.express = router;