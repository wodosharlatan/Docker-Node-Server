const express = require("express");
const router = express.Router();
const axios = require("axios");

// Import .env variables
require("dotenv/config");

// localhost:3000/entries => get all entries
router.post("/", async (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	const email = req.body.email;

	res.send({
		username: username,
		password: password,
		email: email,
	});

});

module.exports = router;