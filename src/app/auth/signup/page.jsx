import React from "react";
import Link from "next/link";
import Image from "next/image";
import Signup from "@/components/Auth/Signup";

export const metadata = {
  title: "Next.js Register Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Register Page NextAdmin Dashboard Kit",
};

const SignUp = () => {
  return (
    <div className="mx-20 my-15 grid h-full grid-cols-1 gap-5 md:grid-cols-2">
      <div className="w-full p-7.5">
        <Link className="mb-10 inline-block" href="/">
          <Image
            className="hidden dark:block"
            src={"/images/logo/NextLevelIT_dark.png"}
            alt="Logo"
            width={176}
            height={32}
          />
          <Image
            className="dark:hidden"
            src={"/images/logo/nxtFFFFF_light.png"}
            alt="Logo"
            width={176}
            height={32}
          />
        </Link>
        <p className="mb-3 text-xl font-medium text-dark dark:text-white">
          Register your account
        </p>

        <h1 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-heading-3">
          Open an <span className="text-primary">Account!</span>
        </h1>

        <p className="w-full max-w-[375px] font-medium text-dark-4 dark:text-dark-6">
          Please Register your account by completing the necessary fields below
        </p>

        {/* <div >
          <Image
            src={"/images/grids/grid-02.svg"}
            alt="Logo"
            width={405}
            height={325}
            className="mx-auto dark:opacity-30"
          />
        </div> */}
      </div>
      <div className="w-full rounded-md border shadow-2 hover:border-primary p-4 drop-shadow-md hover:drop-shadow-xl sm:p-12.5 xl:p-15">
        <Signup />
      </div>
    </div>
  );
};

export default SignUp;
