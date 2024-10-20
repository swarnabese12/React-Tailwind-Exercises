import React, { useState, useEffect } from "react";

const SuccessNotification = () => {
  return (
    <div className="flex items-center p-4 mb-4 text-green-700 bg-green-100 rounded-lg shadow-md">
      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 2a8 8 0 100 16 8 8 0 000-16zm3.293 5.293a1 1 0 00-1.414 0L9 10.586 7.121 8.707a1 1 0 10-1.414 1.414l2.293 2.293a1 1 0 001.414 0l4-4a1 1 0 000-1.414z"
          clipRule="evenodd"
        />
      </svg>
      <span>Successfully signed in</span>
    </div>
  );
};

const WarningNotification = ({ message }) => {
  return (
    <div className="flex items-center p-4 mb-4 text-red-700 bg-red-100 rounded-lg shadow-md">
      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M8.257 3.099c.37-.737 1.302-.737 1.674 0l6.428 12.95c.372.738-.093 1.651-.87 1.651H3.699c-.777 0-1.242-.913-.87-1.651l6.428-12.95zM10 13a1 1 0 100 2 1 1 0 000-2zm0-8a1 1 0 100 2 1 1 0 000-2z"
          clipRule="evenodd"
        />
      </svg>
      <span>{message}</span>
    </div>
  );
};

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccessLogin, setIsSuccessLogin] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [showWarningNotification, setShowWarningNotification] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const successSigninClicked = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsSuccessLogin(true);
      setIsLoading(false);
    }, 2000);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  useEffect(() => {
    if (isSuccessLogin) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (email === "") {
        setWarningMessage("Please enter email");
        setShowWarningNotification(true);
      } else if (!emailRegex.test(email)) {
        setWarningMessage("Please enter a valid email address");
        setShowWarningNotification(true);
      } else if (password === "") {
        setWarningMessage("Please enter password");
        setShowWarningNotification(true);
      } else if (password.length !== 6) {
        // Check for exact length of 6
        setWarningMessage("Password length should be 6");
        setShowWarningNotification(true);
      } else {
        setShowSuccessNotification(true);
      }
      setEmail("");
      setPassword("");
      setIsSuccessLogin(false);
      const timer = setTimeout(() => {
        setShowSuccessNotification(false);
        setShowWarningNotification(false);
      }, 5000);
      console.log("timer--->", timer);
    }
  }, [isSuccessLogin, email, password]);

  return (
    <div>
      <div className="flex justify-end">
        <button className="text-blue-500 hover:text-blue-700 font-medium bg-transparent border-none cursor-pointer">
          Sign Up
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-4 text-center">LOGIN</h1>
      <span className="text-lg">Email</span>
      <input
        type="email"
        placeholder="Enter email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-16 w-full max-w-md px-4 mb-4 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <span className="text-lg">Password</span>
      <div className="relative">
        <input
          type={passwordVisible ? "text" : "password"}
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-16 w-full max-w-md px-4 mb-6 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-600"
        >
          {passwordVisible ? "Hide" : "Show"}
        </button>
      </div>
      <button
        className={`h-16 w-full max-w-md px-4 mb-4 border border-gray-300 rounded-sm ${
          isLoading
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 font-bold text-white"
        }`}
        onClick={successSigninClicked}
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5 mr-3 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                fill="currentColor"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 0116 0h-2a6 6 0 00-12 0H4z"
              />
            </svg>
            Loading...
          </div>
        ) : (
          "LOGIN"
        )}
      </button>
      {showSuccessNotification && <SuccessNotification />}
      {showWarningNotification && (
        <WarningNotification message={warningMessage} />
      )}
    </div>
  );
};

const SignupForm = ({ onLoginClick }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center text-navy">SIGN UP</h1>
      <span className="text-lg text-navy">First Name</span>
      <input
        type="text"
        placeholder="Enter first name"
        className="h-16 w-full max-w-md px-4 mb-4 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <span className="text-lg text-navy">Last Name</span>
      <input
        type="text"
        placeholder="Enter last name"
        className="h-16 w-full max-w-md px-4 mb-4 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <span className="text-lg text-navy">Email</span>
      <input
        type="email"
        placeholder="Enter email address"
        className="h-16 w-full max-w-md px-4 mb-4 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="h-16 w-full max-w-md px-4 mb-4 border border-gray-300 rounded-sm bg-navy font-bold text-white">
        SIGN UP
      </button>
      <button
        onClick={onLoginClick}
        className="text-blue-500 hover:text-blue-700 font-medium bg-transparent border-none cursor-pointer"
      >
        Already have an account?
      </button>
    </div>
  );
};

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  return (
    <div
      style={{
        background: "linear-gradient(to right, #507687, #A4C8C8)",
      }}
      className="h-screen"
    >
      <div className="flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full mt-4">
          {isLogin ? (
            <LoginForm />
          ) : (
            <SignupForm onLoginClick={handleLoginClick} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
