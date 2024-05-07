import React, { useState } from "react";
import logo from "/logo.png";
import "./Login.css";
import { logIn, signUp } from "../../FireBase";
import netflix_spinner from "/netflix_spinner.gif";

const Login = () => {
    const [signState, setSignState] = useState("Sign In");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const Authenticate = async (e) => {
        e.preventDefault();
        setLoading(true);
        signState === "Sign In"
        ? await logIn(email, password)
        : await signUp(name, email, password);

        setLoading(false);
    };

    return loading ? (
        <div className="login__spinner">
        <img src={netflix_spinner} alt="" />
        </div>
    ) : (
        <div className="login">
        <img src={logo} alt="" className="login__logo" />
        <div className="login__form">
            <h1>{signState}</h1>
            <form>
            {signState === "Sign Up" && (
                <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            )}

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={Authenticate} type="submit">
                Sign Up
            </button>
            <div className="form__help flex align__flex align-ctr ">
                <div className="remember flex align-ctr">
                <input type="checkbox" />
                <label htmlFor="">Remember Me</label>
                </div>
                <p>Need Help</p>
            </div>
            </form>
            <div className="form__switch">
            {signState === "Sign In" ? (
                <p>
                New to Netflix?{" "}
                <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span>
                </p>
            ) : (
                <p>
                Already have an account?{" "}
                <span onClick={() => setSignState("Sign In")}>Sign In Now</span>
                </p>
            )}
            </div>
        </div>
        </div>
    );
};

export default Login;
