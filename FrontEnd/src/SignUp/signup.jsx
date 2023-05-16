import { useState } from "react";
import { useNavigate } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import { sha256 } from "crypto-hash";
import axios from "axios";
import "./signup.scss";

/* Async function */
function SignUp() {
    const navigate = useNavigate();
	const [formState, setFormState] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

    const GenerateID = () =>{
        axios.get(`http://localhost:5173/login`).then((res) => {
                    const datalength = res.data.length;
                    return datalength + 1;
        });
        
    }

	const sendToBackEnd = async (e) => {
		e.preventDefault();

		for (let key in formState) {
			if (formState[key].trim().length === 0) {
				alert(`${key} is empty`);
				return;
			}
		}

		if (formState.password !== formState.confirmPassword) {
			alert("Passwords do not match");
			return;
		}

		axios
			.post(`http://localhost:5173/login`, {
				username: formState.username,
				email: formState.email,
				password: await sha256(formState.password),
                id: GenerateID().toString(),
			})
			.then((res) => {
				setFormState({
					username: "",
					email: "",
					password: "",
					confirmPassword: "",
				});
                navigate("/Home");
                
			})
			.catch((err) => {
				console.log(err);
			});

		

	};

	return (
		<>
			<div>
				<a href="https://github.com/wodosharlatan" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a
					href="https://gitlab.com/wodosharlatan/Docker-Node-Server"
					target="_blank"
				>
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>

			<div className="container">
				<form
					onSubmit={(e) => {
						sendToBackEnd(e);
					}}
				>
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							value={formState.username}
							onChange={(e) =>
								setFormState({ ...formState, username: e.target.value })
							}
							className="form-control"
							id="username"
							placeholder="Enter username"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email address</label>
						<input
							type="email"
							value={formState.email}
							onChange={(e) =>
								setFormState({ ...formState, email: e.target.value })
							}
							className="form-control"
							id="email"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							value={formState.password}
							onChange={(e) =>
								setFormState({ ...formState, password: e.target.value })
							}
							className="form-control"
							id="password"
							placeholder="Password"
						/>
					</div>
					<div className="form-group">
						<label htmlFor="confirmPassword">Confirm Password</label>
						<input
							type="password"
							value={formState.confirmPassword}
							onChange={(e) =>
								setFormState({ ...formState, confirmPassword: e.target.value })
							}
							className="form-control"
							id="confirmPassword"
							placeholder="Confirm Password"
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		</>
	);
}

export default SignUp;
