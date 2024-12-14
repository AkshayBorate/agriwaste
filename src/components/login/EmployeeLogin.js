import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.css";

export default function EmployeeLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const f1 = async () => {
        try {
            const response = await axios.get("http://localhost:9000/getemp");
            const employee = response.data.find(
                (emp) => emp.email === email && emp.password === password
            );

            if (employee) {
                alert("Login Successful!");
            } else {
                setErrorMessage("Invalid email or password.");
            }
        } catch (error) {
            setErrorMessage("Error while logging in. Please try again later.");
            console.error(error);
        }
    };

    return (
        <div className="unique-login-page">
            <div className="unique-login-container">
                <div className="unique-form-container">
                    <Link to="/loginc" className="signup-link">Back</Link>
                    <h1 className="unique-form-title">Employee</h1>
                    <h2 className="unique-form-title">Sign In</h2>
                    <form
                        className="unique-form unique-signin-form"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="unique-form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                className="unique-form-input"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="unique-form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                className="unique-form-input"
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="unique-form-options">
                            <label className="unique-checkbox-label">
                                <input type="checkbox" id="keepSignedIn" />
                                Keep me signed in
                            </label>
                        </div>
                        {errorMessage && (
                            <p className="error-message">{errorMessage}</p>
                        )}
                        <button
                            type="button"
                            className="unique-form-submit-button"
                            onClick={f1}
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
