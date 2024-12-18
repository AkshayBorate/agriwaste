import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./EmployeeRegister.css";

export default function EmployeeRegister() {
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const fullNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const mobileRef = useRef();
    const dateRef = useRef();
    const confirmPasswordRef = useRef();
    const salaryRef = useRef();  // Add salaryRef
    const navigate = useNavigate();

    const handleSignupSuccess = (event) => {
        event.preventDefault();
        setErrorMessage(""); 
        setSuccessMessage("");

        const fullName = fullNameRef.current.value.trim();
        const email = emailRef.current.value.trim();
        const mobile = mobileRef.current.value.trim();
        const date = dateRef.current.value.trim();
        const password = passwordRef.current.value.trim();
        const confirmPassword = confirmPasswordRef.current.value.trim();
        const salary = salaryRef.current.value.trim();  // Get salary value

        if (!fullName || !email || !mobile || !date || !password || !confirmPassword || !salary) {
            setErrorMessage("All fields are required!");
            return;
        }
        if (!/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(fullName)) {
            setErrorMessage("Please enter a valid name!");
            return;
        }
        if (!/^[6-9][0-9]{9}$/.test(mobile)) {
            setErrorMessage("Please enter a valid mobile number!");
            return;
        }
        if (!/^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,})(\.[a-zA-Z]{2,})?$/.test(email)) {
            setErrorMessage("Please enter a valid email!");
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
        console.log("Salary:", salary);

        setSuccessMessage("Employee account created successfully!");

        const datas = {
            name: fullName,
            email: email,
            mobileno: mobile,
            joiningdate: date,
            salary: salary,  
        };

        
        fetch("http://localhost:9000/addemp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(datas),
        })
        .then((response) => response.json())
        .then((val) => {
            console.log(val);
            alert("Data submitted");
        })
        .catch((err) => {
            console.log(err);
            setErrorMessage("An error occurred while submitting data.");
        });
    };

    return (
        <div className="employee-register-wrapper">
            <div className="employee-register-card">
                <h2 className="form-header">Register Employee</h2>
                <form className="employee-register-form" onSubmit={handleSignupSuccess}>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    <input
                        className="input-field"
                        type="text"
                        placeholder="Full Name"
                        ref={fullNameRef}
                        required
                    />
                    <input
                        className="input-field"
                        type="email"
                        placeholder="Email"
                        ref={emailRef}
                        required
                    />
                    <input
                        className="input-field"
                        type="tel"
                        placeholder="Mobile Number"
                        ref={mobileRef}
                        required
                    />
                    <input
                        className="input-field"
                        type="date"
                        ref={dateRef}
                        placeholder="Joining Date"
                        required
                    />
                    <input
                        className="input-field"
                        type="number"
                        placeholder="Salary"
                        ref={salaryRef}
                        required
                    />
                    <input
                        className="input-field"
                        type="password"
                        placeholder="Password"
                        ref={passwordRef}
                        required
                    />
                    <input
                        className="input-field"
                        type="password"
                        placeholder="Confirm Password"
                        ref={confirmPasswordRef}
                        required
                    />
                    <button type="submit" className="submit-btn">Create Employee</button>
                </form>
            </div>
        </div>
    );
}
