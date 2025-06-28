import React, {useState} from "react";
import {RegistrationLoginFormContainer, LoginInputBox} from "./RegistrationForm.styled";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {toast} from 'react-toastify';
import Button from "../button";
import authOperations from "../../redux/auth/authOperations";


const RegistrationForm = () => {
	const [userName, setUserName] = useState('Derek');
	const [email, setEmail] = useState("car@car.com");
	const [password, setPassword] = useState("2wsx@WSX");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	const onHandleChange = e => {
		const {value, name} = e.target;
		
		switch (name) {
			case 'username':
				setUserName(value);
				break;
			case 'email':
				setEmail(value);
				break;
			case 'password':
				setPassword(value);
				break;
			default:
				return;
		}
	}
	
	const notifySuccessCreated = (email) => toast.success(`User ${email}  created!`);
	const notifyExistsUser = (email) => toast.error(`User ${email} already exists!`);
	
	const onSubmit = async (event) => {
		event.preventDefault();
		
		const response = await dispatch(authOperations.register({
			email,
			userName,
			password,
		}))
		
		resetForm();
		console.log("RESPONSE", response);
		if (response.payload.status === 201) {
			
			notifySuccessCreated(response.payload.data.user.email);
			navigate("/login");
			
			return;
		}
		
		notifyExistsUser(response.meta.arg.email);
	}
	
	const resetForm = () => {
		setUserName("");
		setEmail("");
		setPassword("");
	}
	
	return (
		<RegistrationLoginFormContainer onSubmit={onSubmit}>
			<LoginInputBox>
				<input
					id="name"
					type="text"
					name="username"
					value={userName}
					title="The name can only consist of Latin letters, apostrophes, dashes and spaces. For example, Adrian, Jacob Mercer, Castelmore d'Artagnan, etc."
					onChange={onHandleChange}
				/>
				<label htmlFor="name">Name</label>
			</LoginInputBox>
			<LoginInputBox>
				<input
					id="login"
					type="email"
					name="email"
					required
					value={email}
					pattern="^(http(s){0,1}:\/\/.){0,1}[\-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([\-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)$"
					title="Email must contain the @ symbol and be in the format example@mail.com"
					onChange={onHandleChange}
				/>
				<label htmlFor="login">Email</label>
			</LoginInputBox>
			<LoginInputBox>
				<input
					id="password"
					type="password"
					name="password"
					required
					value={password}
					pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
					title="The password must be at least 7 characters long and may contain numbers, Latin letters and special characters ! @ # $ % ^ & *"
					onChange={onHandleChange}
				/>
				<label htmlFor="password">Password</label>
			</LoginInputBox>
			<Button>Go!</Button>
		</RegistrationLoginFormContainer>
	)
}

export default RegistrationForm;