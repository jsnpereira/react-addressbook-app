import React, { useState} from "react"
import userValidation from "../../../utils/UserValidation";
import InputWrapper from "../../../components/input";
import UserService from "../../../services/UserService";
import { useNavigate} from "react-router-dom";



const SignUpForm = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    })

    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: ''
        },
        email: {
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
        },
        buttonStatus: {
            disabled: true
        }
    })

    function checkStatusButton() {
        console.log('validating the button is called');
        return (errors.email.error || errors.password.error || errors.name.error || errors.confirm.error);
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
        let userService = new UserService();
        userService.createNewUser(user).then((response) => {
           alert("Status code - create new user: "+ response.status );
            if(response.status == 201) {
                navigate('/addressbook');
            }
       });
    }

    function validating(fieldName: String, value: String) {
        console.log('validating is called');
        switch (fieldName) {
            case 'email':
                userValidation.checkEmail(errors, value);
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
                            id="email"
                            value={user.email}
                            name="email"
                            placeholder="E-mail"
                            error={errors.email.error}
                            errorMessage={errors.email.message}
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
                        <button className="btn-form" onSubmit={handleSubmit} disabled={errors.buttonStatus.disabled} >Submit</button>
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

export default SignUpForm;