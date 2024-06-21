import { useState } from "react";
import "./login.css";
import { assets } from "../../assets/assets";

interface LoginProps {
  setShowLogin: (value: boolean) => void;
}
const Login = ({ setShowLogin }: LoginProps) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <div className="login">
      <form action="" className="login-container">
        <div className="login-title">
          <h2>{currentState}</h2>
          <img
            src={assets.cross_icon}
            alt="icon"
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className="login-inputs">
          {currentState !== "Login" ? (
            <input type="text" placeholder="Your name" required />
          ) : (
            <></>
          )}
          <input type="text" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuinig, I Agree to the terms of user & privacy policy</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrentState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")}>Login here</span>{" "}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
