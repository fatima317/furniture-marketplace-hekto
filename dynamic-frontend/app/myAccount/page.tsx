import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton, UserButton } from '@clerk/nextjs' 
import Link from 'next/link'
import React from 'react'

export default function Loginpage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <SignedIn>
        <div className='text-center'>
            <UserButton />
          <h1 className="text-2xl font-bold text-center mb-4">Welcome</h1>
        </div>
        <div className="w-full bg-pink-500 text-white text-center p-3 rounded-lg mt-4 hover:bg-pink-600 transition">
        <SignOutButton redirectUrl='/'/>
        </div>
        </SignedIn>

        <SignedOut>
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <p className="text-gray-600 text-center mb-6">Sign in to your account</p>

        <div className="w-full bg-blue-500 text-white text-center p-3 rounded-lg mt-4 hover:bg-blue-600 transition"> 
            <SignInButton mode='modal'/>    
        </div>
        <div className="w-full bg-purple-500 text-white text-center p-3 rounded-lg mt-4 hover:bg-purple-600 transition"> 
          <SignUpButton mode='modal'/>
        </div>
        </SignedOut>
      </div>
    </div>
  )
} 