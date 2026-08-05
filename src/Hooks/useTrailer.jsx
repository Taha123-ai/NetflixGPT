import { useEffect } from "react";
import { options } from "../utils/const";
import { useDispatch } from "react-redux";
import { addtrailer } from "../utils/nowplayingmovieslice";

const useTrailer = (key) => {
  const dispatch = useDispatch();
  const videodata = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/"+key+"/videos?language=en-US",
      options,
    );
    const data = await response.json();
    const trialer = data.results?.filter((data) => {
      return data.type === "Trailer" ? data : data[0];
    });
    console.log(trialer);
    dispatch(addtrailer(trialer[0] || trialer));
  };
  useEffect(() => {
    videodata();
  }, []);
};

export default useTrailer;
