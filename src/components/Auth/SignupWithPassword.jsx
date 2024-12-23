"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';



export default function SigninWithPassword() {
  const [data, setData] = useState({
    remember: false,
  });

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePasswords(e.target.value, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    validatePasswords(password, e.target.value);
  };

  const validatePasswords = (password, confirmPassword) => {
    if (password && confirmPassword) {
      if (password === confirmPassword) {
        setMessage("Passwords match!");
      } else {
        setMessage("Passwords do not match.");
      }
    } else {
      setMessage("");
    }
  };

  return (
    <form>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Name
        </label>

        <div className="relative">
          <input
            type="name"
            placeholder="Enter your name"
            name="name"
            className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />

          <span className="absolute right-4.5 top-1/2 -translate-y-1/2">
          <FontAwesomeIcon
            icon={faUser}
          />
          </span>
        </div>
      </div>

      

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
            autoComplete="off"
            className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />

          <span className="absolute right-4.5 top-1/2 -translate-y-1/2">
          <FontAwesomeIcon
            icon={faEnvelope}
          />
          </span>
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="mobile-no"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Mobile No.
        </label>

        <div className="relative">
          <input
            type="mobile-no"
            placeholder="Enter your mobile no"
            name="mobile-no"
            autoComplete="off"
            className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />

          <span className="absolute right-4.5 top-1/2 -translate-y-1/2">
          <FontAwesomeIcon
            icon={faEnvelope}
          />
          </span>
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="username"
          className="mb-2.5 block font-medium text-dark dark:text-white"
        >
          Username
        </label>

        <div className="relative">
          <input
            type="username"
            placeholder="Enter your username"
            name="username"
            className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 
            font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none
             dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />

          <span className="absolute right-4.5 top-1/2 -translate-y-1/2">
          <FontAwesomeIcon
            icon={faUser}
          />
          </span>
        </div>
      </div>

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
            autoComplete="off"
            value={password}
            onChange={handlePasswordChange}
            className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />

          <span className="absolute right-4.5 top-1/2 -translate-y-1/2"
              onClick={togglePasswordVisibility}>
             <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </span>
        </div>
      </div>

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
            autoComplete="off"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
          />
           <span className="absolute right-4.5 top-1/2 -translate-y-1/2"
              onClick={toggleConfirmPasswordVisibility}>
            <FontAwesomeIcon icon={ showConfirmPassword ? faEyeSlash : faEye} />

          </span>
        </div>
        
        {message && (
        <p
          className={`text-sm font-medium mb-5 ${
            message === "Passwords match!" ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
      </div>
      

      <div className="mb-4.5">
        <button
          type="submit"
          className="flex w-full text-black bold cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#DBDA00] p-4 font-medium transition hover:bg-opacity-90"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}
