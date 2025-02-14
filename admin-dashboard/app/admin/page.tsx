"use client";
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React from "react";

export default function AdminLogin() {
  const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Login</h1>

        <SignedOut>
          <SignInButton>
            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition">
              Login
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <div className="space-y-4">
            <button
              onClick={() => router.push("/admin/dashboard")}
              className="w-full bg-blue-800 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-600 transition"
            >
              Go to Dashboard
            </button>
            <SignOutButton>
              <button className="w-full bg-red-800 text-white px-6 py-2 rounded-md font-medium hover:bg-red-600 transition">
                Logout
              </button>
            </SignOutButton>
          </div>
        </SignedIn>
      </div>
    </div>
  );
}
