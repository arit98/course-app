import React, { useContext, useState } from "react";
import "./Modal.css";
import { FaUserAlt } from "react-icons/fa";
import { auth } from "../../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const SignUpModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");
  const { isSignUpOpen, setIsLoggedIn, setSignUpOpen } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    if (password !== password2) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account Created");
      setSignUpOpen(false);
      setIsLoggedIn(true);
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };

  if (!isSignUpOpen) return null;

  return (
    <div className="modal-overlay" onClick={() => setSignUpOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-4 p-12 bg-white shadow-lg rounded-lg font-inter"
        >
          <div className="w-20 h-20 bg-gradient-to-b from-transparent to-[#F8F8F888] border border-[#F7F7F8] rounded-lg shadow-md">
            <FaUserAlt className="w-full h-full p-4 text-[#B73BBE]/[0.7]" />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-xl font-bold text-[#212121]">
              Register an account
            </p>
            <span className="text-xs max-w-[80%] text-center text-[#8B8E98] leading-4">
              Get started with our app, just create an account and enjoy the
              experience.
            </span>
          </div>
          {error && <div className="text-red-500 text-xs">{error}</div>}
          <div className="w-full flex flex-col gap-1 relative">
            <label
              className="text-xs font-semibold text-[#8B8E98]"
              htmlFor="email_field"
            >
              Email
            </label>
            <svg
              className="w-5 absolute left-3 bottom-2"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                stroke="#141B34"
                d="M7 8.5L9.942 10.239C11.657 11.254 12.343 11.254 14.058 10.239L17 8.5"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                stroke="#141B34"
                d="M2.016 13.476C2.081 16.541 2.114 18.074 3.245 19.209C4.376 20.345 5.95 20.384 9.099 20.463C11.039 20.512 12.96 20.512 14.901 20.463C18.05 20.384 19.624 20.345 20.755 19.209C21.886 18.074 21.919 16.541 21.984 13.476C22.005 12.49 22.005 11.51 21.984 10.524C21.919 7.459 21.886 5.926 20.755 4.791C19.624 3.655 18.05 3.616 14.901 3.537C12.96 3.488 11.039 3.488 9.099 3.537C5.95 3.616 4.376 3.655 3.245 4.791C2.114 5.926 2.081 7.459 2.016 10.524C1.995 11.51 1.995 12.49 2.016 13.476Z"
              />
            </svg>
            <input
            required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@mail.com"
              title="Input title"
              name="input-name"
              type="text"
              id="email_field"
              className="w-full h-10 pl-10 rounded-md border border-[#e5e5e5] shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#242424] bg-transparent"
            />
          </div>
          <div className="w-full flex flex-col gap-1 relative">
            <label
              className="text-xs font-semibold text-[#8B8E98]"
              htmlFor="password_field"
            >
              Password
            </label>
            <svg
              className="w-5 absolute left-3 bottom-2"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeWidth="1.5"
                stroke="#141B34"
                d="M18 11.004C17.417 9.917 16.273 9.158 14.952 9.099C13.477 9.034 11.979 9 10.329 9C8.679 9 7.181 9.034 5.706 9.099C3.953 9.177 2.513 10.488 2.279 12.162C2.126 13.254 2 14.373 2 15.513C2 16.653 2.126 17.773 2.279 18.865C2.513 20.539 3.953 21.85 5.706 21.928C6.42 21.959 7.26 21.983 8 22"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                stroke="#141B34"
                d="M6 9V6.5C6 4.015 8.015 2 10.5 2C12.985 2 15 4.015 15 6.5V9"
              />
              <path
                fill="#141B34"
                d="M21.205 15.105L20.624 15.696L21.205 15.105ZM21.42 16.477C21.746 16.797 22.271 16.792 22.591 16.466C22.912 16.14 22.907 15.615 22.58 15.295L21.42 16.477ZM18.023 15.105L17.442 14.514L18.023 15.105ZM18.238 18.039C18.564 18.359 19.089 18.354 19.409 18.028C19.73 17.702 19.725 17.177 19.399 16.857L18.238 18.039ZM14.26 20.762C13.704 21.308 12.796 21.308 12.24 20.762L11.079 21.944C12.279 23.123 14.22 23.123 15.421 21.944L14.26 20.762ZM12.24 20.762C11.691 20.224 11.691 19.358 12.24 18.82L11.079 17.638C9.869 18.825 9.869 20.757 11.079 21.944L12.24 20.762ZM12.24 18.82C12.796 18.274 13.704 18.274 14.26 18.82L15.421 17.638C14.22 16.459 12.279 16.459 11.079 17.638L12.24 18.82ZM14.26 18.82C14.808 19.358 14.808 20.224 14.26 20.762L15.421 21.944C16.63 20.757 16.63 18.825 15.421 17.638L14.26 18.82Z"
              />
            </svg>
            <input
            required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              title="Input title"
              name="input-name"
              type="password"
              id="password_field"
              className="w-full h-10 pl-10 rounded-md border border-[#e5e5e5] shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#242424] bg-transparent"
            />
          </div>
          <div className="w-full flex flex-col gap-1 relative">
            <label
              className="text-xs font-semibold text-[#8B8E98]"
              htmlFor="password2_field"
            >
              Confirm Password
            </label>
            <svg
              className="w-5 absolute left-3 bottom-2"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeWidth="1.5"
                stroke="#141B34"
                d="M18 11.004C17.417 9.917 16.273 9.158 14.952 9.099C13.477 9.034 11.979 9 10.329 9C8.679 9 7.181 9.034 5.706 9.099C3.953 9.177 2.513 10.488 2.279 12.162C2.126 13.254 2 14.373 2 15.513C2 16.653 2.126 17.773 2.279 18.865C2.513 20.539 3.953 21.85 5.706 21.928C6.42 21.959 7.26 21.983 8 22"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                stroke="#141B34"
                d="M6 9V6.5C6 4.015 8.015 2 10.5 2C12.985 2 15 4.015 15 6.5V9"
              />
              <path
                fill="#141B34"
                d="M21.205 15.105L20.624 15.696L21.205 15.105ZM21.42 16.477C21.746 16.797 22.271 16.792 22.591 16.466C22.912 16.14 22.907 15.615 22.58 15.295L21.42 16.477ZM18.023 15.105L17.442 14.514L18.023 15.105ZM18.238 18.039C18.564 18.359 19.089 18.354 19.409 18.028C19.73 17.702 19.725 17.177 19.399 16.857L18.238 18.039ZM14.26 20.762C13.704 21.308 12.796 21.308 12.24 20.762L11.079 21.944C12.279 23.123 14.22 23.123 15.421 21.944L14.26 20.762ZM12.24 20.762C11.691 20.224 11.691 19.358 12.24 18.82L11.079 17.638C9.869 18.825 9.869 20.757 11.079 21.944L12.24 20.762ZM12.24 18.82C12.796 18.274 13.704 18.274 14.26 18.82L15.421 17.638C14.22 16.459 12.279 16.459 11.079 17.638L12.24 18.82ZM14.26 18.82C14.808 19.358 14.808 20.224 14.26 20.762L15.421 21.944C16.63 20.757 16.63 18.825 15.421 17.638L14.26 18.82Z"
              />
            </svg>
            <input
              onChange={(e) => setPassword2(e.target.value)}
              placeholder="Confirm your password"
              title="Input title"
              name="input-name"
              type="password"
              id="password2_field"
              className="w-full h-10 pl-10 rounded-md border border-[#e5e5e5] shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#242424] bg-transparent"
            />
          </div>
          <div className="py-2"></div>
          <button
            type="submit"
            className="w-full h-10 bg-[#B73BBE] text-white rounded-md shadow-sm transition-all duration-300 hover:bg-[#A32DAA]"
          >
            Sign Up
          </button>
          <p className="md:hidden flex text-center text-red-500" onClick={() => setSignUpOpen(false)}>close the modal</p>
        </form>
      </div>
    </div>
  );
};

export default SignUpModal;
