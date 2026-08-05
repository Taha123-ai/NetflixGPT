import { useEffect } from "react";
import { options } from "../utils/const";
import { useDispatch } from "react-redux";
import { addmovies } from "../utils/nowplayingmovieslice";

const useNowplayingmovies = () => {
    const dispatch = useDispatch();
    const fetchdata= async ()=>{
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    const json =await response.json();

    dispatch(addmovies(json.results));
    };

    useEffect(()=>{
        fetchdata();
    },[]);
}

export default useNowplayingmovies;