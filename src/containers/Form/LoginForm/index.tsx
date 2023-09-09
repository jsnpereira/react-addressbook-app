import React from "react";
import { useState } from "react";
import InputWrapper from "../../../components/input";
import userValidation from "../../../utils/UserValidation";

export default function LoginForm() {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        username: {
            error: false,
            message: ''
        },
        password: {
            error: false,
            message: ''
        }
    })

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        validating(name, value);
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        alert(`username: ${user.username} password: ${user.password}`);
    }

    function validating(fieldName: String, value: String) {
        console.log('validating is called');
        switch (fieldName) {
            case 'username':
                userValidation.checkUsername(errors, value);
                break;
            case 'password':
                userValidation.checkPassword(errors, value);
                break;
        }
    }

    function checkStatusButton() {
        console.log('validating the button is called');
        return (errors.username.error || errors.password.error);
    }

    return (
        <div className="container-login">
            <form onSubmit={handleSubmit} className="form-main-card">
                <div className="form-title">
                    Account Login
                </div>
                <div className="form-input-group">
                    <InputWrapper
                        type="text"
                        id="username"
                        value={user.username}
                        name="username"
                        placeholder="username"
                        error={errors.username.error}
                        errorMessage={errors.username.message}
                        onChange={handleChange} />
                    <InputWrapper
                        type="password"
                        id="password"
                        value={user.password}
                        name="password"
                        placeholder="Password"
                        error={errors.password.error}
                        errorMessage={errors.password.message}
                        onChange={handleChange} />
                </div>
                <div className="form-btn-item">
                    <button className="btn-form" onSubmit={handleSubmit} disabled={checkStatusButton()}>Submit</button>
                </div>
                <div className="redirect-link-item">
                    <span>Are you haven't account?</span>
                    <a href="/sign-up">Sign up</a>
                </div>
            </form >
        </div >
    )

}

