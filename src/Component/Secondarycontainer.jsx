import { useSelector } from "react-redux"
import Movielist from "./Movielist"

const Secondarycontainer = () => {
  const movies = useSelector(store=>store?.movies);
  const {Nowplayingmovie,toprated,Trailer,upcoming,popular}=movies || {}


  if(!Nowplayingmovie || !toprated || !Trailer || !upcoming || !popular ){
    return (
    <div className="bg-black min-h-screen flex items-center justify-center text-zinc-500 font-medium">
      Loading your feed...
    </div>
  );
  }  


  return (
    <div className="bg-black">
      <div className="ml-10 -mt-32 relative z-8">
        <Movielist Title={"Now playing"} movies={movies?.Nowplayingmovie}/>
        <Movielist Title={"Toprated"} movies={movies?.toprated}/>
        <Movielist Title={"Upcoming"} movies={movies?.upcoming}/>
        <Movielist Title={"Popular"} movies={movies?.popular}/>
      </div>
    </div>
  )
}

export default Secondarycontainer