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
        language,
      );
      // ****Updating name***
      updateProfile(auth.currentUser, {
        displayName: nameref.current.value,
        photoURL: "https://avatars.githubusercontent.com/u/222603244?v=4",
      })
        .then(() => {
          const { displayName, email, uid, photoURL } = auth.currentUser;

          dispatch(
            adduser({
              displayName: displayName,
              email: email,
              uid: uid,
              photoURL: photoURL,
            }),
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
        language,
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
      <Header val={language} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchinfo();
        }}
        className="
    relative z-10
    w-[calc(100%-2rem)]
    max-w-md
    mx-auto
    mt-90 sm:mt-90 md:mt-36
    p-6 sm:p-8 md:p-10
    bg-black/50
    rounded-2xl
    flex flex-col
  "
      >
        <div className="font-bold text-2xl sm:text-3xl text-white">
          {issignIN ? get.loginsignInbtn : get.loginsignupbtn}
        </div>

        {!issignIN && (
          <input
            ref={nameref}
            type="text"
            placeholder={get.nameplaceholder}
            className="
        w-full
        mt-8
        bg-gray-900/70
        text-white
        placeholder-gray-400
        border border-gray-500
        rounded-lg
        px-4 py-3
        md:py-4
        outline-none
        focus:border-white
        transition-all duration-300
      "
          />
        )}

        <input
          ref={Emailref}
          type="email"
          placeholder={get.emailplaceholder}
          className="
      w-full
      mt-4
      bg-gray-900/70
      text-white
      placeholder-gray-400
      border border-gray-500
      rounded-lg
      px-4 py-3
      md:py-4
      outline-none
      focus:border-white
    "
        />

        <input
          ref={passwordref}
          type="password"
          placeholder={get.passwordplaceholder}
          className="
      w-full
      mt-4
      bg-gray-900/70
      text-white
      placeholder-gray-400
      border border-gray-500
      rounded-lg
      px-4 py-3
      md:py-4
      outline-none
      focus:border-white
    "
        />

        <p className="text-red-500 text-sm mt-4 min-h-5">{validatemssg}</p>

        <button
          type="submit"
          className="
      w-full
      mt-3
      cursor-pointer
      bg-red-800
      hover:bg-red-700
      text-white
      border border-gray-500
      rounded-lg
      px-4 py-3
      outline-none
      transition-colors duration-200
    "
        >
          {issignIN ? get.loginsignInbtn : get.loginsignupbtn}
        </button>

        <div
          className="
      mt-8
      text-sm sm:text-base
      cursor-pointer
      text-white
      hover:underline
    "
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
