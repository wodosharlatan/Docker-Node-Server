// Set up variables
const express = require('express');
const app = express();
const port = process.env.PORT || 5173;
const cors = require('cors');
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// add ,"Access-Control-Allow-Credentials": true Header
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true); // add ,"Access-Control-Allow-Credentials": true Header
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// CORS 
app.use(cors({
    origin: '*'
}));



// Parse JSON
app.use(bodyParser.json());

// Import .env variables
require('dotenv/config')

// Import Routes
const loginRoute = require('./routes/login');

// Middleware
app.use('/login', loginRoute);



// Serve static files
app.use(express.static(__dirname + "/public"));

// Routes
app.get("/*", (req, res) => {
	const filePath = path.join(__dirname, "error_page", "index.html");
	res.sendFile(filePath);
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port} !`);
    }
);

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true})