import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import SignIn from "./auth/signin/page";

export const metadata = {
  title:
    "Next Level IT Solution",
  description: "Software Company",
};

export default function Home() {
  return (
    <>
        <SignIn />
    </>
  );
}
