"use client";
import Link from "next/link";
import React from "react";
// import GoogleSigninButton from "../GoogleSigninButton";
import GoogleSigninButton from "../GoogleSigninButton";
import SignupWithPassword from "../SignupWithPassword";

export default function Signin() {
  return (
    <div>
      <div>
        <SignupWithPassword />
      </div>

      <div className="mt-6 text-center">
        <p className="text-dark">
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-[#DBDA00] p-1.5 rounded-lg">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
