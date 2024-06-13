const express = require('express');
const { getPatterns, addPattern, updatePattern, deletePattern } = require('../controllers/patternController');
const router = express.Router();

router.get('/', getPatterns);
router.post('/', addPattern);
router.put('/:id', updatePattern);
router.delete('/:id', deletePattern);

module.exports = router;
