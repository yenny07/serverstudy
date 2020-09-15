const express = require('express');
const router = express.Router();
const studyController = require('../controllers/studyController');

// GET
    router.get('/:id', studyController.get);

// POST
    router.post('/', studyController.post);

module.exports = router;
