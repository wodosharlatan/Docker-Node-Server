const mongoose = require("mongoose");
let SHA256 = require("crypto-js/sha256");
const axios = require("axios");

const userSchema = mongoose.Schema({
	Username: {
		type: String,
		required: true,
	},
	Password: {
		type: String,
		required: true,
	},
	Email: {
		type: String,
		required: true,
	},
	Key: {
		type: String,
		default: SHA256(Math.floor(Math.random() * 10) + 1).toString(),
	}
});

module.exports = mongoose.model("Users", userSchema);
