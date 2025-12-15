"use client";
import { loginAction, forgotPasswordAction } from "../actions/auth.actions";

export const useAuth = (onLoginSuccess: () => void) => {
  const login = async (email: string, password: string,remember: boolean) => {
    const success = await loginAction(email, password,remember);
    if (success) {
      onLoginSuccess();
    } else {
      alert("Invalid email or password");
    }
  };

  const forgotPassword = async (email: string) => {
    try {
      await forgotPasswordAction(email);
      alert(`Password reset link sent to ${email}`);
    } catch (error: any) {
      alert(error.message);
    }
  };

  return { login, forgotPassword };
};
