"use client";
import React, { useState } from "react";

interface ForgotPasswordProps {
  onBackToLogin: () => void;
  onSendResetLink: (email: string) => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({
  onBackToLogin,
  onSendResetLink,
}) => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email");
      return;
    }
    setSuccess(true);
    onSendResetLink?.(email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md relative">
        
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">
          Forgot password
        </h2>
        <p className="text-gray-500 text-sm text-center mb-6">
          Enter your account email and we’ll send you a password reset link.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-900 transition-colors font-medium"
          >
            Send reset link
          </button>

          <button
            type="button"
            onClick={onBackToLogin}
            className="w-full text-center text-sm text-gray-600 underline mt-2"
          >
            Back to Sign in
          </button>
        </form>

        <p className="text-xs text-gray-400 mt-4 text-center">
          If the email is associated with an account, a reset link has been sent.
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
