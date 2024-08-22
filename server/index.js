const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Registration = require('./models/datamodel'); // Corrected import
app.use(cors({ origin: 'http://localhost:5173' }));


const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/icfai', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

// Define routes
app.post('/register', async (req, res) => {
    const newRegistration = req.body;

    try {
        console.log("Received data", newRegistration);
        const result = await Registration.create(newRegistration);
        console.log("Successful connection", result);
        res.json(result);
    } catch (error) {
        console.error("Error during creation", error);
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
