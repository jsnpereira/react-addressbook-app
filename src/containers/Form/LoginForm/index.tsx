import React, {useEffect} from "react";
import { useState } from "react";
import InputWrapper from "../../../components/input";
import userValidation from "../../../utils/UserValidation";
import UserService from "../../../services/UserService";
import {useNavigate} from "react-router-dom";

export default function LoginForm() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const [validate, setValidate] = useState({
        username: {
            error: false,
            message: ''
        },
        password: {
            error: false,
            message: ''
        },
        buttonStatus: {
            disabled: true
        }
    })

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        validating(name, value);
        setUser((prevUser) => ({ ...prevUser, [name]: value }));
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        checkUserSignIn();
    }

    const checkUserSignIn =() => {
        let userService = new UserService();
        let info = {
            error: false,
            message: ''
        }
        console.log('check data before call api: '+user.username+' - '+user.password );
         userService.signIn(user).then( data => {
             console.log('UserService called: '+data.success+' - '+data.message);
             if(!data.success){
                 alert(data.message);
                 // validate.username.error = true;
                 // validate.password.error = true;
                 // validate.username.message = data.message;
                 // setValidate(validate);
             }
         })

    }

    function validating(fieldName: String, value: String) {
        switch (fieldName) {
            case 'username':
                userValidation.checkUsername(validate, value);
                break;
            case 'password':
                userValidation.checkPassword(validate, value);
                break;
        }
      }

    return (
        <div className="container-login">
            <form onSubmit={handleSubmit} onChange={handleChange} className="form-main-card">
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
                        error={validate.username.error}
                        errorMessage={validate.username.message}
                        onChange={handleChange} />
                    <InputWrapper
                        type="password"
                        id="password"
                        value={user.password}
                        name="password"
                        placeholder="Password"
                        error={validate.password.error}
                        errorMessage={validate.password.message}
                        onChange={handleChange} />
                </div>

                <div className="form-btn-item">
                    {/*<div >*/}
                    {/*    <span>{errorServerMessage.message}</span>*/}
                    {/*</div>*/}
                    <button className="btn-form"  onSubmit={handleSubmit} disabled={validate.buttonStatus.disabled}>Submit</button>
                </div>

                <div className="redirect-link-item">
                    <span>Are you haven't account?</span>
                    <a href="/sign-up">Sign up</a>
                </div>
            </form >
        </div >
    )

}

