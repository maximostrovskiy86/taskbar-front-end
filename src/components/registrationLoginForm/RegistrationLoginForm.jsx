import React, {useState} from "react";
import {RegistrationLoginFormContainer, LoginInputBox} from "./RegistrationLoginForm.styled";
import Button from "../button";



const RegistrationLoginForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onHandleChange = e => {
        const {value, name} = e.target;

        switch (name) {
            case 'username':
                setUsername(value);
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
    //
    // const notifySuccessCreated = (email, name) => toast.success(`User ${email} and name ${name} created!`);
    // const notifyExistsUser = (email) => toast.error(`User ${email} already exists!`);

    // const onSubmit = async (event) => {
    //     event.preventDefault();
    //
    //     const response = await dispatch(authOperations.register({
    //         email,
    //         username,
    //         password,
    //     }))
    //
    //     resetForm();
    //
    //     if (response.payload.status === 201) {
    //
    //         notifySuccessCreated(response.payload.data.email, response.payload.data.username);
    //         navigate("/login");
    //
    //         return;
    //     }
    //
    //     notifyExistsUser(response.meta.arg.email);
    // }

    // const resetForm = () => {
    //     setUsername("");
    //     setEmail("");
    //     setPassword("");
    // }

    return (
        <RegistrationLoginFormContainer>
            <LoginInputBox>
                <input
                    id="name"
                    type="text"
                    name="username"
                    value={username}
                    title="The name can only consist of Latin letters, apostrophes, dashes and spaces. For example, Adrian, Jacob Mercer, Castelmore d'Artagnan, etc."
                    onChange={onHandleChange}
                />
                <label htmlFor="name">Choose your name to sign up or log in</label>
            </LoginInputBox>
            <Button>go!</Button>
        </RegistrationLoginFormContainer>
    )
}

export default RegistrationLoginForm;