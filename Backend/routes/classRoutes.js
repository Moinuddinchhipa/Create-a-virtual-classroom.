const express = require('express');
const { createClass, getClasses, enrollStudent } = require('../controllers/classController');
const router = express.Router();

router.post('/', createClass);
router.get('/', getClasses);
router.post('/:classId/enroll', enrollStudent);

module.exports = router;
