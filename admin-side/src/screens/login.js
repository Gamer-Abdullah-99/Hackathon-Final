import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../routes/fire";

export default function Login() {

    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    async function login() {
        try {
            let data = await signInWithEmailAndPassword(auth, email, password);
            console.log(data);
            navigate("/home");
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <div id="login">
            <br />
            <h2 id="login-heading">Login</h2>
            <br />
            <h4 id="login-sub-heading">Email Address : </h4>
            <input
                type="email"
                required
                value={email}
                placeholder="Email Address"
                onChange={(a) => {
                    setEmail(a.target.value);
                }}
            />
            <span id="form-error">{emailError}</span>
            <br />
            <h4 id="login-sub-heading">Password : </h4>
            <input
                type="password"
                required
                value={password}
                placeholder="Password"
                onChange={(a) => {
                    setPassword(a.target.value);
                }}
            />
            <span id="form-error">{passwordError}</span>
            <br />
            <button
                id="form-btn"
                onClick={() => {
                    if (email === "") {
                        setEmailError("Enter Email Address");
                        setTimeout(() => {
                            setEmailError("");
                        }, 3000);
                    } else if (password === "") {
                        setPasswordError("Enter Password");
                        setTimeout(() => {
                            setPasswordError("");
                        }, 3000);
                    } else if (email !== "" && password !== "") {
                        login();
                    }
                }}
            >
                Login
            </button>
        </div>
    );
}