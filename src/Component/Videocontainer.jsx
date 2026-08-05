import { useSelector } from "react-redux";
import useTrailer from "../Hooks/useTrailer";

const Videocontainer = ({ id }) => {
  useTrailer(id);
  const key = useSelector((store) => {
    return store?.movies?.Trailer?.key;
  });
  return (
    <div className=" w-full h-screen overflow-hidden">
      <iframe
        className="w-full h-full scale-135 "
        // src={
        //   "https://www.youtube.com/embed/" +
        //   key +
        //   "?si=OMU73R3aNK9ADacy?&autoplay=1&mute=1"
        // }
        src={
          "https://www.youtube.com/embed/" +
          key +
          "?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&loop=1&playlist=" +
          key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default Videocontainer;
