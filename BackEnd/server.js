// Set up variables
const express = require('express');
const app = express();
const port = process.env.PORT || 5173;
const cors = require('cors');
const path = require("path");
const bodyParser = require('body-parser');

// Parse JSON
app.use(bodyParser.json());

// Import .env variables
require('dotenv/config')

// Import Routes
const loginRoute = require('./routes/login');

// Middleware
app.use('/login', loginRoute);

// CORS 
app.use(cors());

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