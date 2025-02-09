// "use client";
// import { useState } from "react";
// import LoginPage from "@/components/ui/login/LoginComponent";
// import { SessionWrapper } from "@/components/ui/login/SessionWrapper";
// import SignupPage from "@/components/ui/login/SignupComponent";

// export default function Home() {

//   const [showSignup, setShowSignup] = useState<boolean>(false);

//   return (
//     <div className="flex justify-center py-20">
//       <SessionWrapper>
//         <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg space-y-8">
//           {/* Toggle Signup/Login */}
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//             {showSignup ? "Create an Account" : "Sign In"}
//           </h2>
//           <p className="text-center text-gray-600 mb-4">
//             {showSignup
//               ? "Sign up with your email or preferred platform."
//               : "Sign in to access your account."}
//           </p>

//           {/* Form switching */}
//           {showSignup ? (
//             <SignupPage />
//           ) : (
//             <LoginPage />
//           )}

//           <div className="flex justify-center">
//             <button
//               onClick={() => setShowSignup(!showSignup)}
//               className="text-sm text-blue-500 hover:text-blue-600"
//             >
//               {showSignup ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
//             </button>
//           </div>
//         </div>
//       </SessionWrapper>
//     </div>
//   );
// }
