const User = require('../models/User');

// Register a new user
exports.registerUser = async (req, res) => {
    const { username, password, role } = req.body;
    try {
        const newUser = new User({ username, password, role });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Authenticate user (simplified for demonstration)
exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    // Here you should add password hashing and verification logic.
    // For simplicity, we'll skip that.
    
    try {
        const user = await User.findOne({ username });
        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
