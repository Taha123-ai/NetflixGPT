import { useRef, useState } from "react";
import { lagn_support, netflixlogo, signout_icon_link } from "../utils/const";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addlang } from "../utils/configlangslice";
import Netflixmainlanguage from "../utils/netflixmainlanguage";
import { useNavigate } from "react-router-dom";

const Header = ({ val }) => {
  const navigate = useNavigate();
  const { gpt } = useSelector((store) => store?.GPTmovies);
  const [ispops, setispops] = useState(false);
  const dispatch = useDispatch();
  const Langref = useRef(null);

  const user = useSelector((store) => {
    return store.user;
  });

  const handlelangchange = () => {
    dispatch(addlang(Langref.current.value));
  };
  const handlesignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="fixed top-0 right-0 left-0 z-10 px-3 sm:px-13 md:px-20  py-5 flex items-center gap-2 justify-between  bg-linear-to-b from-black to-black/20">
      <img
        src={netflixlogo}
        alt="netflixlogo"
        className="w-19 sm:22 md:w-35 md:ml-2 "
      ></img>
      <div className="*:text-white text-sm md:py-1 md:font-medium  flex">
        <select
          className=" text-xs  md:text-lg sm:px-2  md:px-3 px-1 w-18  md:w-30 border border-white rounded-s  cursor-pointer bg-transparent  md:mr-12  mr-15 py-1 sm:mr-12 *:bg-black"
          onChange={handlelangchange}
          ref={Langref}
          value={val}
        >
          {lagn_support.map((lang) => {
            const shortText =
              lang.value.length > 7
                ? lang.value.substring(0, 3).toUpperCase()
                : lang.value;

            return (
              <option
                value={lang.value}
                key={lang.Identifier}
                className="text-sm"
              >
                {shortText}
              </option>
            );
          })}
        </select>
        {user && (
          <div className="flex gap-2 md:gap-3">
            <button
              onClick={() => {
                gpt ? navigate("/main") : navigate("/gptsearch");
              }}
              className="  
                  md:w-32 md:h-10 md:text-lg
                  sm:w-25 sm:h-9
                  w-10 h-6 text-sm
                  md:rounded-full
                  rounded-md
                  bg-linear-to-r from-red-600 to-red-500
                  text-white font-semibold
                  shadow-lg shadow-red-500/30
                  transition-all duration-200 ease-out
                  hover:scale-105
                  hover:shadow-xl hover:shadow-red-500/40
                  hover:from-red-500 hover:to-red-400
                  active:scale-95
                  active:shadow-md
                  cursor-pointer
                  flex items-center justify-center
                  whitespace-nowrap"
            >
              {gpt
                ? Netflixmainlanguage[val].Searchhomebtn
                : Netflixmainlanguage[val].Searchgptbtn}
            </button>

            <div
              className="md:w-10 w-6 sm:w-9 rounded-md  cursor-pointer"
              onMouseEnter={() => {
                setispops(true);
              }}
              onMouseLeave={() => {
                setispops(false);
              }}
              onClick={() => {
                setispops(!ispops);
              }}
            >
              <img
                src={signout_icon_link}
                alt="icon"
                className="md:w-full sm:w-full w-full md:ml-2 "
              ></img>
              {ispops && (
                <div className="absolute  right-3  sm:right-10 md:right-16 w-28  md:w-45 overflow-hidden rounded-xl border border-white/10 bg-neutral-900/95 shadow-2xl shadow-black/50 backdrop-blur-md">
                  <div className="px-4 py-3 cursor-pointer text-sm text-gray-200 transition-all duration-200 hover:bg-white/10 hover:text-white hover:pl-5">
                    {Netflixmainlanguage[val].list}
                  </div>

                  <div className="px-4 py-3 cursor-pointer text-sm text-gray-200 transition-all duration-200 hover:bg-white/10 hover:text-white hover:pl-5">
                    {Netflixmainlanguage[val].Notification}
                  </div>

                  <div className="px-4 py-3 cursor-pointer text-sm text-gray-200 transition-all duration-200 hover:bg-white/10 hover:text-white hover:pl-5">
                    {Netflixmainlanguage[val].Account}
                  </div>

                  <div
                    onClick={handlesignout}
                    className="px-4 py-3 mt-1 border-t border-white/10 text-red-500 text-sm font-semibold hover:bg-red-500/10 hover:text-red-400 cursor-pointer transition-all duration-200"
                  >
                    {Netflixmainlanguage[val].signoutbtn}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
