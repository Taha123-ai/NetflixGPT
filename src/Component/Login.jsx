import { useRef, useState } from "react";
import { netflixbg } from "../utils/const";
import Header from "./Header";
import validate from "../utils/validate";
import signin from "../utils/signin";
import signup from "../utils/signup";
import {  updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/userslice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch =useDispatch();
  const [issignIN, setissignIn] = useState(true);
  const [validatemssg, setvalidatemssg] = useState(null);
  const Emailref = useRef(null);
  const passwordref = useRef(null);
  const nameref = useRef(null);

  async function fetchinfo() {
    const validateresult = validate(
      Emailref.current.value,
      passwordref.current.value,
    );
    setvalidatemssg(validateresult);
    if (validateresult) return;

    if (!issignIN) {
      
      const data=await signup(
        Emailref.current.value,
        passwordref.current.value,
        setvalidatemssg,
      );
      console.log(data);  
    // ****Updating name***
      updateProfile(auth.currentUser, {
        displayName: nameref.current.value,
        photoURL: "https://avatars.githubusercontent.com/u/4813992?v=4",
      })
        .then(() => {
          const {displayName,email,uid}=auth.currentUser;
          dispatch(adduser({ displayName: displayName ,email: email, uid: uid}));
          navigate("/main")
        })
        .catch((error) => {
          console.log(error);
        });
    }
    if (issignIN) {
      const signInuser = await signin(
        Emailref.current.value,
        passwordref.current.value,
      );
      console.log(signInuser);
      navigate("/main");
    }
  }

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
      <form className="relative z-10 bg-black/50  flex flex-col *: w-[28%] mx-auto mt-20 px-6 pt-10 pb-15 rounded-2xl">
        <div className="font-bold text-3xl text-white">
          {issignIN ? "Sign In" : "Sign Up"}
        </div>
        {!issignIN && (
          <input
            ref={nameref}
            type="email"
            placeholder="Name"
            className="bg-gray-900/70 mt-8 text-white placeholder-gray-400 border border-gray-500 rounded-lg px-4 py-3 outline-none focus:border-white w-full transition-all duration-300"
          ></input>
        )}
        <input
          ref={Emailref}
          type="email"
          placeholder="Email"
          className="bg-gray-900/70 mt-4 text-white placeholder-gray-400 border border-gray-500 rounded-lg px-4 py-3 outline-none focus:border-white w-full"
        ></input>
        <input
          ref={passwordref}
          type="password"
          placeholder="password"
          className="bg-gray-900/70 mt-4 text-white placeholder-gray-400 border border-gray-500 rounded-lg px-4 py-3 outline-none focus:border-white w-full"
        ></input>
        <p className="text-red-500 text-sm mt-4 ">{validatemssg}</p>
        <button
          onSubmit={(e) => {
            e.preventDefault();
          }}
          onClick={(e) => {
            e.preventDefault();
            fetchinfo();
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              fetchinfo();
            }
          }}
          className="bg-red-800 mt-3 cursor-pointer text-white placeholder-gray-400 border border-gray-500 rounded-lg px-4 py-3 outline-none focus:border-white w-full"
        >
          {issignIN?"Sign In":"Sign Up"}
        </button>
        <div
          className="mt-10 cursor-pointer text-white"
          onClick={toggleissignIn}
        >
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
