import { useState } from "react";
import { netflixlogo, signout_icon_link } from "../utils/const";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const [ispops,setispops]=useState(false);
  const user = useSelector((store) => {
    return store.user;
  });

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
        <button className="px-5  border border-white rounded-s mx-3">
          English
        </button>
        {user && (
          <div>
            <div className="w-10 mr-3 cursor-pointer"
            onMouseEnter={()=>{setispops(true)}}
            onMouseLeave={()=>{setispops(false)}}>
            <img src={signout_icon_link} alt="icon" className="w-full"></img>
            {ispops &&
            <div className="absolute w-40 right-2 bg-neutral-700 rounded-md border border-gray-700 shadow-xl overflow-hidden z-20">
              <div className="px-4 py-2 cursor-pointer transition-colors">
                Manage Profiles
              </div>

              <div className="px-4 py-2  cursor-pointer transition-colors">
                My List
              </div>

              <div className="px-4 py-2 cursor-pointer transition-colors">
                Notifications
              </div>

              <div className="px-4 py-2  cursor-pointer transition-colors">
                Account
              </div>

              <div
                onClick={handlesignout}
                className="px-4 py-2 border-t border-gray-700 text-red-600 text-lg hover:bg-neutral-600 cursor-pointer transition-colors"
              >
                Sign Out
              </div>
            </div>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
