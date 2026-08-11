import { useSelector } from "react-redux";
import useTrailer from "../Hooks/useTrailer";

const Videocontainer = ({ id }) => {
  useTrailer(id);
  const key = useSelector((store) => {
    return store?.movies?.Trailer?.key;
  });
  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden">
      <iframe
        className="absolute top-1/2 left-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 scale-[1.15] sm:scale-[1.25] md:scale-[1.35]"
        src={
          "https://www.youtube.com/embed/" +
          key +
          "?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&loop=1&playlist=" +
          key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
};

export default Videocontainer;
