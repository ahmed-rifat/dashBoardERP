"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faEnvelope,
  faUser,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function SigninWithPassword() {
  const [data, setData] = useState({
    remember: false,
  });

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const togglePasswordVisibility = () =>
    setShowPassword((prevState) => !prevState);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prevState) => !prevState);

  const phoneRegex = /^\+?[0-9\s\-]{7,15}$/;

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);

    // Validate the input value
    if (value === "" || phoneRegex.test(value)) {
      setError("");
    } else {
      setError("Please enter a valid phone number (e.g., +44 20 7946 0958).");
    }
  };

  const validatePasswords = (password, confirmPassword) => {
    if (password.length < 8) {
      setMessage("Password must be at least 8 characters.");
      setIsFormValid(false);
    } else if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      setIsFormValid(false);
    } else {
      setMessage("Passwords match!");
      setIsFormValid(true);
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePasswords(newPassword, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    validatePasswords(password, newConfirmPassword);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("http://127.0.0.1:8000/api/auth/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: data.name,
  //         phone_number: data.phone_number,
  //         email: data.email,
  //         email: data.user_name,
  //         password: data.password,
  //       }),
  //     });

  //     const result = await response.json();
  //     console.log('result', result)
  //     if (response.ok) {
  //       alert("Registration successful!");
  //       // Optionally, you can redirect or clear the form here
  //       setData({
  //         name: "",
  //         email: "",
  //         phone: "",
  //         password: "",
  //         confirmPassword: "",
  //         remember: false,
  //       });
  //     } else {
  //       alert(`Registration failed: ${result.message}`);
  //     }
  //   } catch (error) {
  //     console.error("Error during registration:", error);
  //     alert("An error occurred while registering. Please try again.");
  //   }
  // };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name Input */}
      <div className="mb-4">
        <label
          htmlFor="name"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Name
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
            className="w-full rounded-lg border border-stroke bg-[#E8F0FE] py-[15px] pl-6 pr-11 
              font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none
              dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
          <span className="absolute right-4.5 top-1/2 -translate-y-1/2">
            <FontAwesomeIcon icon={faUser} />
          </span>
        </div>
      </div>

      {/* Phone Input */}
      <div className="mb-4">
        <label
          htmlFor="phone_number"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Mobile No.
        </label>
        <div className="relative">
          <input
            type="tel"
            pattern="\+?[0-9\s\-]{7,15}"
            placeholder="Enter your phone no."
            name="phone_number"
            required
            autoComplete="off"
            onChange={handlePhoneChange}
            className="w-full rounded-lg border border-stroke bg-[#E8F0FE] py-[15px] pl-6 pr-11 
              font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none
              dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
          <span className="absolute right-4.5 top-1/2 -translate-y-1/2">
            <FontAwesomeIcon icon={faPhone} />
          </span>
        </div>
        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
      </div>

      {/* Email Input */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Email
        </label>
        <div className="relative">
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
            autoComplete="off"
            className="w-full rounded-lg border border-stroke bg-[#E8F0FE] py-[15px] pl-6 pr-11 
              font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none
              dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
          <span className="absolute right-4.5 top-1/2 -translate-y-1/2">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </div>
      </div>

      {/* User Name Input */}
      <div className="mb-4">
        <label
          htmlFor="user_name"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          User Name
        </label>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter your user name"
            name="user_name"
            required
            className="w-full rounded-lg border border-stroke bg-[#E8F0FE] py-[15px] pl-6 pr-11 
              font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none
              dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
          <span className="absolute right-4.5 top-1/2 -translate-y-1/2">
            <FontAwesomeIcon icon={faUser} />
          </span>
        </div>
      </div>

      {/* Password Input */}
      <div className="mb-5">
        <label
          htmlFor="password"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={handlePasswordChange}
            className="w-full rounded-lg border border-stroke bg-[#E8F0FE] py-[15px] pl-6 pr-11 
              font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none
              dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
          <span
            className="absolute right-4.5 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </span>
        </div>
      </div>

      {/* Confirm Password Input */}
      <div className="mb-5">
        <label
          htmlFor="confirm-password"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Confirm Password
        </label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirm-password"
            placeholder="Confirm your password"
            required
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="w-full rounded-lg border border-stroke bg-[#E8F0FE] py-[15px] pl-6 pr-11 
              font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none
              dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
          <span
            className="absolute right-4.5 top-1/2 -translate-y-1/2 cursor-pointer"
            onClick={toggleConfirmPasswordVisibility}
          >
            <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
          </span>
        </div>
        {message && (
          <p
            className={`mt-2 text-sm font-medium ${
              message === "Passwords match!" ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <div className="mb-4.5">
        <button
          type="submit"
          disabled={!isFormValid}
          className={`bold flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary p-4 font-medium text-black transition hover:bg-opacity-90 ${
            !isFormValid ? "cursor-not-allowed opacity-50" : ""
          }`}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}
