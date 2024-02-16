import { Link } from "react-router-dom"
import "./Login.css"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {

    const {login} = useContext(AuthContext);

const handleLogin = ()=>{
    login();

}
    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello world</h1>
                    {/* <p>To get started, simply enter your username and password in the fields below. We take your privacy seriously and employ robust security measures to safeguard your information</p> */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.</p>
                    <span>Don't  you have an account?</span>
                    <Link to="/register"><button>Register</button></Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form >
                        <input type="text" name="" placeholder="Usename" />
                        <input type="password" name="" placeholder="password" />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login