import React, { useState } from "react"
import userValidation from "../../../utils/UserValidation";
import InputWrapper from "../../../components/input";


export default function SignUpForm() {
    const [user, setUser] = useState({
        name: '',
        username: '',
        password: '',
        confirm: ''

    })


    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: ''
        },
        username: {
            error: false,
            message: ''
        },
        password: {
            error: false,
            message: ''
        },
        confirm: {
            error: false,
            message: ''
        }
    })

    function checkStatusButton() {
        console.log('validating the button is called');
        return (errors.username.error || errors.password.error || errors.name.error || errors.confirm.error);
    }

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        validating(name, value);
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }))
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        alert(`name: ${user.name} username: ${user.username} password: ${user.password} confirmPassowrd: ${user.confirm}`);
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
            case 'name':
                userValidation.checkName(errors,value);
                break;
            case 'confirm':
                userValidation.checkConfirmPassword(errors,user.password, value);
                break;
        }
    }


    return (
        <div className="container-signup" >
            <form onSubmit={handleSubmit} className="card">
                <div className="form-main-card">
                    <div className="form-title">
                        Sign up
                    </div>
                    <div className="form-input-group">

                        <InputWrapper
                            type="text"
                            id="name"
                            value={user.name}
                            name="name"
                            placeholder="Name"
                            error={errors.name.error}
                            errorMessage={errors.name.message}
                            onChange={handleChange} />

                        <InputWrapper
                            type="text"
                            id="username"
                            value={user.username}
                            name="username"
                            placeholder="Username"
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


                        <InputWrapper
                            type="password"
                            id="confirm"
                            value={user.confirm}
                            name="confirm"
                            placeholder="Confirm Password"
                            error={errors.confirm.error}
                            errorMessage={errors.confirm.message}
                            onChange={handleChange} />

                    </div>
                    <div className="form-btn-item">
                        <button className="btn-form" onSubmit={handleSubmit} disabled={checkStatusButton()} >Submit</button>
                    </div>
                    <div className="redirect-link-item">
                        <span>Are you already created your account?</span>
                        <a href="/"> Sign in</a>
                    </div>
                </div>
            </form >
        </div >
    )
}