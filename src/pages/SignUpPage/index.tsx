import SignUpForm from "../../containers/Form/SignUpForm"
import './../../styles/pages/signup/signup.css'
import ModalSimples from "../../components/Modal/ModalSimples";
import React, {useEffect, useState} from "react";

export default function SignUpPage() {

    return (
        <div className="signup-main-box">

            <div className="title-box">
                <h1 className="title">Create your adressbook's account </h1>
            </div>
            <div className="signup-box" >
                <SignUpForm />
            </div>
        </div>
    )
}