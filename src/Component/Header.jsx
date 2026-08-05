import { netflixlogo } from "../utils/const";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => {
    return store.user;
  });
  

  const handlesignout = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="fixed top-0 right-0 left-0 z-10 px-20  py-5 flex items-center justify-between  bg-linear-to-b from-black to-black/20">
      <img src={netflixlogo} alt="netflixlogo" className="w-35 ml-2" ></img>
      <div className="*:text-white font-medium mr-8 flex">
        <button className="px-5  border border-white rounded-s mx-3">
          English
        </button>
        {user && (
          <div className="flex">
            <button
              className="px-3  rounded-md bg-red-600"
              onClick={handlesignout}
            >
              Sign Out
            </button>
            <img src={user.photoURL} className="w-8 rounded-3xl"></img>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
