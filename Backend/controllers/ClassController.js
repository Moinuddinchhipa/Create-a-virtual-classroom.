const Class = require('../models/Class');

// Create a new class
exports.createClass = async (req, res) => {
    const { title } = req.body;
    try {
        const newClass = new Class({ title });
        await newClass.save();
        res.status(201).json(newClass);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all classes
exports.getClasses = async (req, res) => {
    try {
        const classes = await Class.find();
        res.status(200).json(classes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Enroll a student in a class
exports.enrollStudent = async (req, res) => {
    const { classId } = req.params;
    const { userId } = req.body;
    
    try {
        const cls = await Class.findById(classId);
        if (!cls) return res.status(404).json({ message: 'Class not found' });

        cls.enrolledStudents.push(userId);
        await cls.save();
        res.status(200).json(cls);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
