const express = require('express');
const router = express.Router();
const controller = require('../controllers/recommendationController');

router.post('/', controller.post);
router.get('/', controller.get);
router.post('/products', controller.getProduct);

module.exports = router;