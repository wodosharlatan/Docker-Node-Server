const express = require("express");
const router = express.Router();
const axios = require("axios");

// Import .env variables
require("dotenv/config");

// localhost:3000/entries => get all entries
router.get("/", async (req, res) => {
	res.send(" Login section :) ")
});

module.exports = router;