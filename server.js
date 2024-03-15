
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/expenseTrackerDataBase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// SCHEMAS 
// User schema and model
const userSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    email: String,
    password: String,
});

const User = mongoose.model('User', userSchema);



// SIHN UP PAGE HANDLE 
app.post('/signup', async (req, res) => {
    const { fName, lName, email, password, confirmpassword } = req.body;

    if (!fName || !lName || !email || !password || !confirmpassword) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    if (password !== confirmpassword) {
        return res.status(400).json({ error: "Password doesn't match" });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ fName, lName, email, password: hashedPassword });
        await newUser.save();
        res.json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// LOGIN PAGE HANDLE
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        const foundUser = await User.findOne({ email });
        if (foundUser) {
            const isPasswordValid = await bcrypt.compare(password, foundUser.password);
            if (isPasswordValid) {
                res.json({ message: 'Login successful'});
            } else {
                res.status(401).json({ error: 'Invalid credentials' });
            }
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Listening to port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

