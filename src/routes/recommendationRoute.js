const express = require('express');
const router = express.Router();
const controller = require('../controllers/recommendationController');
router.post('/', controller.post);
router.get('/', controller.get);
router.get('/products', controller.getProduct);
router.get('/:id', controller.getById);
module.exports = router;