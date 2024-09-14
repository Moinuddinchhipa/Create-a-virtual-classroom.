const express = require('express');
const connectDB = require('./config/db');
const classRoutes = require('./routes/classRoutes');
const userRoutes = require('./routes/userRoutes');
const lectureRoutes = require('./routes/lectureRoutes');
require('dotenv').config();

const app = express();
connectDB();

app.use(express.json());
app.use('/api/classes', classRoutes);
app.use('/api/users', userRoutes);
app.use('/api/lectures', lectureRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(Server running on port ${PORT}));
