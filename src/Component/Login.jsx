import { useState } from "react";
import { netflixbg } from "../utils/const";
import Header from "./Header";

const Login = () => {
  const [issignIN, setissignIn] = useState(true);
  function toggleissignIn() {
    setissignIn(!issignIN);
  }
  return (
    <div className="relative h-screen">
      <img
        src={netflixbg}
        alt="netflixbg"
        className="absolute inset object-cover h-full w-full"
      ></img>
      <div className="absolute inset h-full w-full bg-black/70"></div>
      <Header />
      <form className="relative z-10 bg-black/50  flex flex-col *:text-white w-[28%] mx-auto mt-20 px-6 pt-10 pb-15 rounded-2xl">
        <div className="font-bold text-3xl">
          {issignIN ? "Sign In" : "Sign Up"}
        </div>
        { (!issignIN) && <input
          type="email"
          placeholder="Name"
          className="bg-gray-900/70 mt-8 text-white placeholder-gray-400 border border-gray-500 rounded-lg px-4 py-3 outline-none focus:border-white w-full transition-all duration-300"
        ></input>}
        <input
          type="email"
          placeholder="Email"
          className="bg-gray-900/70 mt-4 text-white placeholder-gray-400 border border-gray-500 rounded-lg px-4 py-3 outline-none focus:border-white w-full"
        ></input>
        <input
          type="password"
          placeholder="password"
          className="bg-gray-900/70 mt-4 text-white placeholder-gray-400 border border-gray-500 rounded-lg px-4 py-3 outline-none focus:border-white w-full"
        ></input>
        <button
          className="w-full"
          className="bg-red-800 mt-4 text-white placeholder-gray-400 border border-gray-500 rounded-lg px-4 py-3 outline-none focus:border-white w-full"
        >
          Sign In
        </button>
        <div className="mt-10 cursor-pointer" onClick={toggleissignIn}>
          {issignIN ? (
            <span>New to Netflix? Sign up now.</span>
          ) : (
            <span>Already have an account? Sign in now.</span>
          )}
        </div>
      </form>
    </div>
  );
};
export default Login;
