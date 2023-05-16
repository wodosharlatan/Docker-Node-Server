const express = require("express");
const router = express.Router();
const User = require("../models/user_model");

// Import .env variables
require("dotenv/config");

// Make new user
router.post("/", async (req, res) => {
	const user = new User({
		Username: req.body.username,
		Password: req.body.password,
		Email: req.body.email,
	});

	try {
		const savedUser = await user.save();
		res.json(savedUser);
	} catch (err) {
		res.json({ message: err.toString() });
	}
});

module.exports = router;