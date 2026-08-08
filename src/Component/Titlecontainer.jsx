import Netflixmainlanguage from "../utils/netflixmainlanguage";

const Titlecontainer = ({ title, bio ,val}) => {
  
  return (
    <div className="absolute z-8 bg-linear-to-l to-black/95 from-black/10 full h-screen py-60 px-16  text-white ">
      <h1 className="text-6xl font-bold tracking-tight w-4/12 py-2">{title}</h1>
      <div className="w-6/12 my-2">{bio}</div>
      <div className="flex mx-3 my-2 gap-3 px-6 py-3">
        <div className="flex gap-4">
          <button className="flex items-center gap-2 max-w-35 bg-white text-black pl-3 pr-3 py-2  cursor-pointer rounded-md text-lg font-semibold hover:bg-gray-200 transition">
            <span class="material-symbols-outlined">play_arrow</span>
            {Netflixmainlanguage[val].playbtn}
          </button>
          <button className="flex items-center gap-2 max-w-40 bg-gray-600/80 text-white px-3 h-11 cursor-pointer rounded-md text-sm font-semibold hover:bg-gray-500/80 transition">
            <span class="material-symbols-outlined">info</span>{Netflixmainlanguage[val].moreinfo}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Titlecontainer;
