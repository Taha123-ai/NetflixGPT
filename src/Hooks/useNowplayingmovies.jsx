import { useEffect } from "react";
import { options } from "../utils/const";
import { useDispatch, useSelector } from "react-redux";
import { addmovies } from "../utils/nowplayingmovieslice";

const useNowplayingmovies = () => {
    const dispatch = useDispatch();
    const movie = useSelector((store)=>store.movies.Nowplayingmovie);
    const fetchdata= async ()=>{
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    const json =await response.json();

    dispatch(addmovies(json.results));
    };

    useEffect(()=>{
        !movie && fetchdata();
    },[]);
}

export default useNowplayingmovies;