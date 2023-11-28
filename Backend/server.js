// server.js

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/travelandtales', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define User schema
const userSchema = new mongoose.Schema({


    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
      },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                // Using a simple regex to check for a valid email format
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Invalid email format',
        },

    },
    Location: {
        type: String,

    },
    selectedPackages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Package',
    }],
});



const User = mongoose.model('User', userSchema);

// Register a new user
app.post('/register', async (req, res) => {
    try {
        const { name,  username, password, email, Location } = req.body;

        // Check if the username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            username,
            password: hashedPassword,
            email,
            name,
            Location,
        });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        // Check if the error is a validation error
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message });
        }
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


// Login user
app.post('/login', async (req, res) => {
    
    try {
        const { username, password } = req.body;

        // Find the user in the database
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: user._id, username: user.username }, 'your-secret-key');

        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

const isAuthorized = (req, res, next) => {
    // Verify the JWT token
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, 'your-secret-key', (err, user) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // Pass the user's information to the next middleware
        req.user = user;
        next();
    });
}

const isAdmin = (req, res, next) => {
    // Verify the JWT token
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    jwt.verify(token, 'your-secret-key', (err, user) => {


        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // Check if the user is an admin
        user.username === 'admin' ? next() : res.status(401).json({ message: 'Unauthorized' });
    });
}


app.get('/protected', isAdmin, (req, res) => {
    // Verify the JWT token
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    jwt.verify(token, 'your-secret-key', (err, user) => {


        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        res.json({ message: 'You have access to this protected route', user });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Add the package schema
const packageSchema = new mongoose.Schema({
    city: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const Package = mongoose.model('Package', packageSchema);

// Endpoint to get a list of available packages
app.get('/packages', async (req, res) => {
    try {
        const packages = await Package.find();
        res.json(packages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Endpoint to choose a package
app.post('/choose-package', isAuthorized,  async (req, res) => {
    try {
        
        const {packageId} = req.body;
        const userId = req.user.userId;
        // Find the user by ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Find the package by ID
        const selectedPackage = await Package.findById(packageId);
        if (!selectedPackage) {
            return res.status(404).json({ message: 'Package not found' });
        }

        // Add the selected package to the user's model
        user.selectedPackages.push(selectedPackage);
        await user.save();

        res.json({ message: 'Package chosen successfully', selectedPackage });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Endpoint to view user's selected packages
app.get('/user-packages', isAuthorized, async (req, res) => {
    try {
        
        const userId = req.user.userId;
        
        // Find the user by ID with populated selectedPackages
        const user = await User.findById(userId).populate('selectedPackages');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user.selectedPackages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Example package creation
app.post('/create-package', isAdmin, async (req, res) => {
    try {
        const { city, description, price } = req.body;

        // Create a new package
        const newPackage = new Package({
            city,
            description,
            price,
        });
        

        await newPackage.save();

        res.status(201).json({ message: 'Package created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

