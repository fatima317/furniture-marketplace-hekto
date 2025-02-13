"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true); // State to track authentication check

  useEffect(() => {
    const isLogin = localStorage.getItem("isLogin"); // Check if user is logged in

    if (!isLogin) {
      router.push("/admin"); // Redirect if not logged in
    } else {
      setIsCheckingAuth(false); // Allow access to children components
    }
  }, [router]);

  // Show a loading state while redirecting
  if (isCheckingAuth) {
    return (
      <div className="flex h-screen justify-center items-center">
        <p className="text-lg font-semibold">Checking authentication...</p>
      </div>
    );
  }

  return <>{children}</>;
}
