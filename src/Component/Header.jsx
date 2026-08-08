import { useRef, useState } from "react";
import { Lang_support, netflixlogo, signout_icon_link } from "../utils/const";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addlang } from "../utils/configlangslice";
import Netflixmainlanguage from "../utils/netflixmainlanguage";

const Header = ({ val }) => {
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
      <div className="*:text-white font-medium mr-8 flex">
        <select
          className="pl-2  py-1 border border-white rounded-s bg-transparent mx-6 *:bg-black"
          onChange={handlelangchange}
          ref={Langref}
          value={val}
        >
          {Lang_support.map((options) => {
            return (
              <option value={options.name} key={options.identifier}>
                {options.name}
              </option>
            );
          })}
        </select>
        {user && (
          <div>
            <div
              className="w-10 mr-3 cursor-pointer"
              onMouseEnter={() => {
                setispops(true);
              }}
              onMouseLeave={() => {
                setispops(false);
              }}
            >
              <img src={signout_icon_link} alt="icon" className="w-full"></img>
              {ispops && (
                <div className="absolute w-40 right-2 bg-neutral-700 rounded-md border border-gray-700 shadow-xl overflow-hidden z-20">
                  <div className="px-4 py-2 cursor-pointer transition-colors">
                    {Netflixmainlanguage[val].profile}
                  </div>

                  <div className="px-4 py-2  cursor-pointer transition-colors">
                    {Netflixmainlanguage[val].list}
                  </div>

                  <div className="px-4 py-2 cursor-pointer transition-colors">
                    {Netflixmainlanguage[val].Notification}
                  </div>

                  <div className="px-4 py-2  cursor-pointer transition-colors">
                    {Netflixmainlanguage[val].Account}
                  </div>

                  <div
                    onClick={handlesignout}
                    className="px-4 py-2 border-t border-gray-700 text-red-600 text-lg hover:bg-neutral-600 cursor-pointer transition-colors"
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
