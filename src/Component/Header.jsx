import { netflixlogo } from "../utils/const"
const Header = () => {
  
  return (
    <div className="relative z-10 px-20  py-8 flex items-center justify-between w-screen">
        <img src={netflixlogo} alt="netflixlogo" className="w-40"></img>
        <div className="*:text-white font-medium mr-8" >
            <button className="px-8 py-1 border border-white rounded-s mx-4">English</button>
            {/* <button className="px-5 py-1 rounded-md bg-red-600" onClick={handle}>{value?"Sign In":"Sign out"}</button> */}
        </div>
    </div>
  )
}

export default Header