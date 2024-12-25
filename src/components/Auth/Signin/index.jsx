"use client";
import Link from "next/link";
import React from "react";
// import GoogleSigninButton from "../GoogleSigninButton";
import GoogleSigninButton from "../GoogleSigninButton";
import SigninWithPassword from "../SigninWithPassword";

export default function Signin() {
  return (
    <div>
      <div>
        <SigninWithPassword />
      </div>

      <div className="mt-6 text-center">
        <p className="text-dark">
          Don’t have any account?{" "}
          <Link href="/auth/signup" className="text-primary bold p-1.5 rounded-lg">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
