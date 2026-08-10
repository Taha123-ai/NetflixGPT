import { useRef, useState } from "react";
import { lagn_support, netflixlogo, signout_icon_link } from "../utils/const";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addlang } from "../utils/configlangslice";
import Netflixmainlanguage from "../utils/netflixmainlanguage";
import { useNavigate } from "react-router-dom";

const Header = ({ val }) => {
  const navigate=useNavigate();
  const {gpt}=useSelector(store=>store?.GPTmovies);
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
    <div className="fixed top-0 right-0 left-0 z-10 px-20  py-5 flex items-center justify-between  bg-linear-to-b from-black to-black/20">
      <img src={netflixlogo} alt="netflixlogo" className="w-35 ml-2"></img>
      <div className="*:text-white font-medium  flex">
        <select
          className="px-3 border border-white rounded-s bg-transparent mr-4 *:bg-black"
          onChange={handlelangchange}
          ref={Langref}
          value={val}
        >
          {lagn_support.map((lang) => (
            <option value={lang.value} key={lang.Identifier}>
              {lang.value}
            </option>
          ))}
        </select>
        {user && (
          <div className="flex gap-3">
            <button
              onClick={()=>{gpt?navigate("/main"):navigate("/gptsearch")}}
              className="  
                 w-32 h-10
                  rounded-full
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
              {gpt?Netflixmainlanguage[val].Searchhomebtn:Netflixmainlanguage[val].Searchgptbtn}
            </button>

            <div
              className="w-10  cursor-pointer"
              onMouseEnter={() => {
                setispops(true);
              }}
              onMouseLeave={() => {
                setispops(false);
              }}
              onClick={()=>{
                setispops(!ispops);
              }}
            >
              <img
                src={signout_icon_link}
                alt="icon"
                className="w-full ml-2"
              ></img>
              {ispops && (
                <div className="absolute right-16 w-45 overflow-hidden rounded-xl border border-white/10 bg-neutral-900/95 shadow-2xl shadow-black/50 backdrop-blur-md">
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
