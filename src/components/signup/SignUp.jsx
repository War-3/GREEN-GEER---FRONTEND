import React, { useState } from "react";
import "./SignUp.css";
import { Icons } from "../CloudImages/CloudImages";
import { Image, Transformation } from "cloudinary-react";
import EmailVerification from "../Emailverification/EmailVerification";
function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [passwordError, setPasswordError] = useState("");
  const [apiError, setApiError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOpt, setShowOtp] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Validate password whenever it changes
    if (name === "password") {
      validatePassword(value);
    }
  };
  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (password.length < minLength) {
      setPasswordError("Password must be at least 8 characters long");
    } else if (!hasUpperCase) {
      setPasswordError("Password must contain at least one uppercase letter");
    } else if (!hasSpecialChar) {
      setPasswordError("Password must contain at least one special character");
    } else {
      setPasswordError("");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Check if password error exists before submitting the form
    if (passwordError) {
      alert("Please fix the password requirements.");
      return;
    }
    setIsSubmitting(true);
    setApiError("");
    try {
      const { name, email, password } = formData
      const response = await fetch("http://127.0.0.1:8040/api/signup/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email, name, password
        }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        setApiError(errorData.message || "Something went wrong!");
        setIsSubmitting(false);
        return;
      }
      const data = await response.json();
      alert("Signup successful! Welcome");
      setFormData({ name: "", email: "", password: "" }); // Reset the form
      setShowOtp(true)
    } catch (error) {
      setApiError("Failed to connect to the server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleGoogleSignup = () => {
    console.log("Sign up with Google");
  };
  const handleAppleSignup = () => {
    console.log("Sign up with Apple");
  };
  return (
    <>
      {!showOpt ? (
        <div className="container">
          <div className="form-container">
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Enter Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="input"
                required
              />
              <div className="email">
                <label htmlFor="email">Enter Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>
              <label htmlFor="password">Choose Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="input"
                required
              />
              {passwordError && <p className="error-text">{passwordError}</p>}
              {apiError && <p className="error-text">{apiError}</p>}
              <button
                type="submit"
                className="signup-button"
                name="Sign up"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Sign Up"}

              </button>
            </form>
            <div className="google-icon">
              <button onClick={handleGoogleSignup} className="google-button">
                <Image cloudName="degnky4ab" publicId={Icons.google}>
                  <Transformation crop="scale" angle="0" className="google-icon4" />
                </Image>
                Sign Up with Google{" "}
              </button>
            </div>
            <div className="google-icon">
              <button onClick={handleAppleSignup} className="apple-button">
                <Image cloudName="degnky4ab" publicId={Icons.apple}>
                  <Transformation crop="scale" angle="0" className="google-icon4" />
                </Image>
                Sign Up with Apple{" "}
              </button>
            </div>
            <p className="login-text">
              Already Have An Account? <a href="/signin">Login</a>
            </p>
          </div>
          <div className="image-container">
            <img
              src="https://www.deere.co.in/assets/images/region-1/products/tractors/john-deere-e-series-cab.jpg"
              alt="Tractor"
              className="image"
            />
          </div>
        </div>
      ) : (
        <EmailVerification />
      )}
    </>
  );

}
export default SignUp;
