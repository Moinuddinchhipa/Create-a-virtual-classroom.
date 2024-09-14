const Lecture = require('../models/Lecture');

// Create a new lecture
exports.createLecture = async (req, res) => {
    const { title, content } = req.body;
    try {
        const newLecture = new Lecture({ title, content });
        await newLecture.save();
        res.status(201).json(newLecture);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Add a comment to a lecture
exports.addComment = async (req, res) => {
    const { lectureId } = req.params;
    const { text } = req.body;

    try {
        const lecture = await Lecture.findById(lectureId);
        if (!lecture) return res.status(404).json({ message: 'Lecture not found' });

        lecture.comments.push({ text });
        await lecture.save();
        res.status(200).json(lecture);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
