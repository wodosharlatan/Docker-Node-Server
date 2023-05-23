import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp/signup.jsx";
import Home from "./Home/home.jsx";

function App() {
	return (
		<>
			<main>
				<Router>
					<Routes>
						<Route path="/" element={<SignUp />} />
						<Route path="/Home" element={<Home />} />
					</Routes>
				</Router>
			</main>
		</>
	);
}

export default App;
