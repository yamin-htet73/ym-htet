"use client"; 
import { useState } from "react";
import Login from "./components/Login";
import Layout from "./pages/Layout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <Layout />
      ) : (
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
      )}
      
    </>
  );
}


export default App;
