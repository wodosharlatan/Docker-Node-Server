import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();

	// get cookie with name of UniqueUserIdentifier
	function getCookie() {
		if (document.cookie.length !== 0) {
			var array = document.cookie.split("=");
			const cookieValue = JSON.parse(array[1]);
			return cookieValue.key;
		} else {
			navigate("/");
		}
	}

	if (getCookie() === undefined) {
		navigate("/");
	}

	return (
		<div>
			<h1>Home Sweet Home</h1>
		</div>
	);
}

export default Home;
