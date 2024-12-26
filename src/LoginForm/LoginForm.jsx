import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const LoginForm = () => {
    const [isLogin, setIsLogin] = useState(true); 

    const showRegister = () => setIsLogin(false);
    const showLogin = () => setIsLogin(true);

    return (
        <div className="wrapper-container">
            {isLogin ? (
                <div className="wrapper form-box login">
                    <form action="">
                        <h1>Login</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Username" required />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required />
                            <FaLock className="icon" />
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" />
                                Remember me
                            </label>
                            <a href="#">Forgot password?</a>
                        </div>
                        <button type="submit">Login</button>
                        <div className="register-link">
                            <p>
                                Don't have an account?{" "}
                                <a href="#" onClick={(e) => { e.preventDefault(); showRegister(); }}>
                                    Register
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="wrapper form-box register">
                    <form action="">
                        <h1>Register</h1>
                        <div className="input-box">
                            <input type="text" placeholder="Username" required />
                            <FaUser className="icon" />
                        </div>
                        <div className="input-box">
                            <input type="email" placeholder="Email" required />
                            <FaEnvelope className="icon" />
                        </div>
                        <div className="input-box">
                            <input type="password" placeholder="Password" required />
                            <FaLock className="icon" />
                        </div>
                        <div className="remember-forgot">
                            <label>
                                <input type="checkbox" />
                                I agree to the terms & conditions
                            </label>
                        </div>
                        <button type="submit">Register</button>
                        <div className="register-link">
                            <p>
                                Already have an account?{" "}
                                <a href="#" onClick={(e) => { e.preventDefault(); showLogin(); }}>
                                    Login
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default LoginForm;
