import { netflixlogo } from "../utils/const"
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import {  signOut } from "firebase/auth";
import { useSelector } from "react-redux";


const Header = () => {
  const user = useSelector((store)=>{return store.user});
  console.log(user);
  
  const navigate= useNavigate();
    const handlesignout =()=>{
        signOut(auth)
          .then(() => {
            navigate("/login");
          })
          .catch((error) => {
            console.log(error);
          });
    }
  
  return (
    <div className="relative z-10 px-20  py-8 flex items-center justify-between w-screen bg-linear-to-b from-black to-black/5">
        <img src={netflixlogo} alt="netflixlogo" className="w-40"></img>
        <div className="*:text-white font-medium mr-8" >
            <button className="px-8 py-1 border border-white rounded-s mx-4">English</button>
            {user &&<button className="px-5 py-1 rounded-md bg-red-600" onClick={handlesignout}>Sign Out</button>}
        </div>
    </div>
  )
}

export default Header