import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function LoginPage() {
    const [isSigninActive, setIsSigninActive] = useState(true);
   
  
    function f1(){
      
        
    }
    

    return (
        <div className="unique-login-page">
            <div className="unique-login-container">
                <div className="unique-form-container">
                <Link to="/loginc" className="signup-link">Back</Link>
                    <h2 className="unique-form-title">Sign In</h2>
                    <form className="unique-form unique-signin-form">
                        <div className="unique-form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                className="unique-form-input"
                                type="text"
                                name="username"
                                placeholder="Enter your username"
                               
                            />
                        </div>
                        <div className="unique-form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                className="unique-form-input"
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                
                               
                            />
                        </div>
                        <div className="unique-form-options">
                            <label className="unique-checkbox-label">
                                <input type="checkbox" id="keepSignedIn" />
                                Keep me signed in
                            </label>
                        </div>
                        <button type="button" className="unique-form-submit-button" onClick={f1}>Sign In</button>
                    </form>
                    <div className="unique-signup-link">
                        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
