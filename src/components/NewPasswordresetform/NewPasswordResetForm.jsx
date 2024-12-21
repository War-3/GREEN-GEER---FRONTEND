import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Added import
import "./newPassword.css";

function NewPasswordResetForm() {
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePasswordResetSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");
    setError("");

    if (!token) {
      setError("Secret code is required.");
      setIsSubmitting(false);
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8040/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, newPassword }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message || "Your password has been successfully reset.");

        // Navigate to the homepage after successful verification
        navigate("/");
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Failed to reset password. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please check your network connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Reset Your Password</h2>
        <p>Enter your Secret Code and your new password below.</p>
        <form onSubmit={handlePasswordResetSubmit}>
          <div className="input-group">
            <label htmlFor="token">User Secret Code</label>
            <input
              type="text"
              id="token"
              name="token"
              placeholder="Enter your secret code"
              value={token}
              onChange={handleTokenChange}
              className="input"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              placeholder="New Password"
              value={newPassword}
              onChange={handlePasswordChange}
              className="input"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="input"
              required
            />
          </div>
          <button
            type="submit"
            className="reset-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Resetting..." : "Reset Password"}
          </button>
        </form>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
      <div className="image-container">
        <img
          src="https://www.deere.co.in/assets/images/region-1/products/tractors/john-deere-e-series-cab.jpg"
          alt="Tractor"
          className="image"
        />
      </div>
    </div>
  );
}

export default NewPasswordResetForm;
