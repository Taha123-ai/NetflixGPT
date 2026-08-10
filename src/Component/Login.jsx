import { useRef, useState } from "react";
import { netflixbg } from "../utils/const";
import Header from "./Header";
import validate from "../utils/validate";
import signin from "../utils/signin";
import signup from "../utils/signup";
import { updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { adduser } from "../utils/userslice";
import loginlanguage from "../utils/loginlanguage";
 

const Login = () => {
  const dispatch = useDispatch();
  const language = useSelector((store) => store?.configlang?.Lang);
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
      await signup(
        Emailref.current.value,
        passwordref.current.value,
        setvalidatemssg,
        language
      );
      // ****Updating name***
      updateProfile(auth.currentUser, {
        displayName: nameref.current.value,
        photoURL: "https://avatars.githubusercontent.com/u/222603244?v=4",
      })
        .then(() => {
          const { displayName, email, uid,photoURL } = auth.currentUser;

          dispatch(
            adduser({ displayName: displayName, email: email, uid: uid ,photoURL:photoURL }),
          );
          
          
        })
        .catch((error) => {
          console.log("update error" + error);
        });
    }
    if (issignIN) {
       await signin(
        Emailref.current.value,
        passwordref.current.value,
        setvalidatemssg,
        language
      );  
      
    }
  }

  function toggleissignIn() {
    setissignIn(!issignIN);
  }
  const get = loginlanguage[language];
  return (
    <div className="absolute top-0 left-0 right-0 h-screen">
      <img
        src={netflixbg}
        alt="netflixbg"
        className="absolute inset object-cover h-full w-full"
      ></img>
      <div className="absolute inset h-full w-full bg-black/70"></div>
      <Header val={language}/>
      <form className="relative z-10 bg-black/50  flex flex-col *: w-[28%] mx-auto mt-33 px-6 pt-10 pb-15 rounded-2xl">
        <div className="font-bold text-3xl text-white">
          {issignIN ? get.loginsignInbtn : get.loginsignupbtn}
        </div>
        {!issignIN && (
          <input
            ref={nameref}
            type="email"
            placeholder={get.nameplaceholder}
            className="bg-gray-900/70 mt-8 text-white placeholder-gray-400 border border-gray-500 rounded-lg px-4 py-3 outline-none focus:border-white w-full transition-all duration-300"
          ></input>
        )}
        <input
          ref={Emailref}
          type="email"
          placeholder={get.emailplaceholder}
          className="bg-gray-900/70 mt-4 text-white placeholder-gray-400 border border-gray-500 rounded-lg px-4 py-3 outline-none focus:border-white w-full"
        ></input>
        <input
          ref={passwordref}
          type="password"
          placeholder={get.passwordplaceholder}
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
          {issignIN ? get.loginsignInbtn : get.loginsignupbtn}
        </button>
        <div
          className="mt-10 cursor-pointer text-white"
          onClick={toggleissignIn}
        >
          {issignIN ? (
            <span>{get.signInupnowpara}</span>
          ) : (
            <span>{get.signInnowpara}</span>
          )}
        </div>
      </form>
    </div>
  );
};
export default Login;
