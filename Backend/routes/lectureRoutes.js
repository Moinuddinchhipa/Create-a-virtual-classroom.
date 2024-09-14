const express = require('express');
const { createLecture, addComment } = require('../controllers/lectureController');
const router = express.Router();

router.post('/', createLecture);
router.post('/:lectureId/comments', addComment);

module.exports = router;
