const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    text: { type: String, required: true },
    replies: [{ text: String }],
});

const LectureSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String },
    comments: [CommentSchema],
});

module.exports = mongoose.model('Lecture', LectureSchema);
