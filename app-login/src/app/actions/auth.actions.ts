export const loginAction = async (
  email: string,
  password: string,
  remember: boolean
): Promise<boolean> => {
  // TEMP login check (replace with Strapi)
  if (email === "ymhtet.tgi17@gmail.com" && password === "123456") {
    const token = "fake-jwt-token";

    if (remember) {
      localStorage.setItem("token", token);
    } else {
      sessionStorage.setItem("token", token);
    }

    return true;
  }

  return false;
};

export const forgotPasswordAction = async (email: string): Promise<void> => {
  if (!email) {
    throw new Error("Email is required");
  }

  // TEMP: later connect to Strapi reset-password API
  console.log("Reset password email sent to:", email);
};
