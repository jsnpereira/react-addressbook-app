import LoginForm from "../../containers/Form/LoginForm"
import './../../styles/pages/login/login.css'

export default function HomePage() {

    return (
        <div className="login-main-box">
            <div className="title-box">
                <h2 className="title">Welcome addressbook app</h2>
            </div>

            <div className="login-box">
                <LoginForm />
            </div>
        </div>
    )

}