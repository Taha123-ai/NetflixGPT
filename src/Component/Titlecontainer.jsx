import Netflixmainlanguage from "../utils/netflixmainlanguage";

const Titlecontainer = ({ title, bio ,val}) => {
  
  return (
    <div className=" absolute z-8 bg-linear-to-l to-black/95 from-black/10 h-screen sm:h-screen md:h-screen sm:py-35 md:py-60 py-40 px-4 sm:px-14 md:px-16 md:w-full sm:11/12 w-9/12 text-white ">
      <h1 className="font-bold text-2xl sm:text-5xl md:text-6xl sm:font-bold md:font-bold tracking-tight md:w-4/12 py-0 md:py-2">{title}</h1>
      <div className="hidden sm:inline-block md:inline-block sm:4/12 md:w-6/12 sm:my-0 md:my-2">{bio}</div>
      <div className="flex sm:mx-3 md:mx-3 mx-0 my-2 gap-3 sm:px-3 px-0 md:px-6 py-4">
        <div className="flex gap-4">
          <button className="flex items-center  sm:gap-2 md:gap-2 sm:max-wd-33 md:max-w-35 bg-white text-black sm:pl-2 pl-1 md:pl-3 pr-2 md:pr-3 sm:pr-3  md:h-11 py-0 sm:py-2 md:py-2  h-8  cursor-pointer rounded-md  sm:text-lg text-sm md:text-lg font-semibold hover:bg-gray-200 transition">
            <span class="material-symbols-outlined">play_arrow</span>
            {Netflixmainlanguage[val].playbtn}
          </button>
          <button className="flex items-center md:gap-2 sm:gap-2 gap-1 h-8 md:h-11  max-w-40 bg-gray-600/80 text-white md:px-3 sm:px-3 px-1 cursor-pointer rounded-md text-sm sm:font-semibold font-medium md:font-semibold hover:bg-gray-500/80 transition">
            <span class="material-symbols-outlined">info</span>{Netflixmainlanguage[val].moreinfo}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Titlecontainer;
