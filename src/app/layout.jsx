"use client";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
// import Loader from "@/components/common/Loader";
import Loader from "@/components/common/Loader"


export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {loading ? <Loader /> : children}
      </body>
    </html>
  );
}
