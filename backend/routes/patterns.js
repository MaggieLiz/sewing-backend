const express = require('express');
const { getPatterns, getPatternById, addPattern, updatePattern, deletePattern } = require('../controllers/patternController');
const router = express.Router();

router.get('/', getPatterns);
router.get('/:id', getPatternById);  // Add this line
router.post('/', addPattern);
router.put('/:id', updatePattern);
router.delete('/:id', deletePattern);

module.exports = router;
