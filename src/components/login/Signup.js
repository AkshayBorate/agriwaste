import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

export default function SignupPage() {
    const [errorMessage, setErrorMessage] = useState("");
    const fullNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const mobileRef = useRef();
    const dateRef = useRef();
    const confirmPasswordRef = useRef();
    const navigate = useNavigate();

    const handleSignupSuccess = (event) => {
        event.preventDefault();
        setErrorMessage(""); 

        const fullName = fullNameRef.current.value.trim();
        const email = emailRef.current.value.trim();
        const mobile = mobileRef.current.value.trim();
        const date = dateRef.current.value.trim();
        const password = passwordRef.current.value.trim();
        const confirmPassword = confirmPasswordRef.current.value.trim();

        if (!fullName || !email || !mobile || !date || !password || !confirmPassword) {
            setErrorMessage("All fields are required!");
            return;
        }
        if (!/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(fullName)) {
            setErrorMessage("Please Enter a valid name!");
            return;
        }
        
        if (!/^[6-9][0-9]{9}$/.test(mobile)) {
            setErrorMessage("Please Enter Valid mobile number!");
            return;
        }
        if (!/^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,})(\.[a-zA-Z]{2,})?$/.test(email)) {
            setErrorMessage("Please Enter Valid email!");
            return;
        }
        if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#\$])[A-Za-z0-9@#\$]{6,12}$/.test(password)) {
            setErrorMessage("Password must be 6-12 characters, with at least one digit, one lowercase letter, one uppercase letter, and one special character (@, #, $)");
            return;
        }
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match!");
            return;
        }

        console.log("Full Name:", fullName);
        console.log("Email:", email);
        console.log("Mobile:", mobile);
        console.log("Date of Birth:", date);
        console.log("Password:", password);

        navigate("/logins");
    };

    return (
        <>
        
        <div className="signup-wrapper">
            <div className="signup-card">
            <Link to="/loginc" className="signup-link">Back</Link>
            <br></br>
                <h2 className="signup-header">Create an Account</h2>
                <form className="signup-form" onSubmit={handleSignupSuccess}>
                    {errorMessage && <p className="signup-error-message">{errorMessage}</p>}
                    <input
                        className="signup-input-field"
                        type="text"
                        placeholder="Full Name"
                        ref={fullNameRef}
                        required
                    />
                    <input
                        className="signup-input-field"
                        type="email"
                        placeholder="Email"
                        ref={emailRef}
                        required
                    />
                    <input
                        className="signup-input-field"
                        type="tel"
                        placeholder="Mobile Number"
                        ref={mobileRef}
                        required
                    />
                    <input
                        className="signup-input-field"
                        type="date"
                        ref={dateRef}
                        required
                    />
                    <input
                        className="signup-input-field"
                        type="password"
                        placeholder="Password"
                        ref={passwordRef}
                        required
                    />
                    <input
                        className="signup-input-field"
                        type="password"
                        placeholder="Confirm Password"
                        ref={confirmPasswordRef}
                        required
                    />
                    <button type="submit" className="signup-btn">Sign Up</button>
                </form>
                <div className="signup-footer">
                    <p>Already have an account? <Link to="/logins" className="signup-link">Sign In</Link></p>
                </div>
            </div>
        </div>
        </>
    );
}
