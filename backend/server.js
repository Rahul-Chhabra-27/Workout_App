const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const workoutRotes = require('./routes/workout');
dotenv.config();

// express() inkoves...
const app = express();
app.use(express.json());

// global middleware
app.use((req,res,next) => {
    next();
})
app.use('/api/workout',workoutRotes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => console.log(`DB is connected && Server is running on port ${PORT}`));
})
.catch((err) => console.log(err));