"use client";
import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import ForgotPassword from "./ForgotPassword";

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showForgot, setShowForgot] = useState(false); // toggle forgot password view

  const { login, forgotPassword } = useAuth(onLoginSuccess);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password, remember);
  };

  const handleSendResetLink = async (resetEmail: string) => {
    try {
      await forgotPassword(resetEmail); // call your hook
      alert("Check your inbox for the password reset link!");
    } catch (error) {
      alert("Failed to send reset link. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {!showForgot ? (
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          <p className="text-gray-500 text-sm text-center mb-6">
            Welcome !Please sign in to your account
        </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />

            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="h-4 w-4"
                />
                Remember me
              </label>

              {/* Show ForgotPassword component on click */}
              <button
                type="button"
                onClick={() => setShowForgot(true)}
                className="underline text-blue-600"
              >
                Forgot password
              </button>
            </div>

            <button className="w-full bg-blue-800 text-white py-2 rounded-lg">
              Sign in
            </button>
          </form>
        </div>
      ) : (
        <ForgotPassword
          onBackToLogin={() => setShowForgot(false)}
          onSendResetLink={handleSendResetLink} 
        />
      )}
    </div>
  );
};

export default Login;
