import { Link } from "react-router-dom"
import "./Register.css"

const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Social Book</h1>
                    {/* <p>To get started, simply enter your username and password in the fields below. We take your privacy seriously and employ robust security measures to safeguard your information</p> */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.</p>
                    <span>Do you have an account?</span>
                   <Link to="/login"> <button>Login</button></Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input   type="text" name="Username" placeholder="Username" />
                        <input type="email" name="email" placeholder="email" />
                        <input type="password" name="password" placeholder="password" />
                        <input type="password" name="conform" placeholder="conform password" />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register