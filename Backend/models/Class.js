const mongoose = require('mongoose');

const ClassSchema = new mongoose.Schema({
    title: { type: String, required: true },
    units: [{ type: String }],
    sessions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Lecture' }],
    enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Class', ClassSchema);
