import React,{useState,useEffect} from 'react';
import "./Row.css";
import axios from "./axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";


const base_url = "https://image.tmdb.org/t/p/original/";


function Row({title,fetchUrl,largePosters}) {
  const [movies , setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] =useState("");

  useEffect(() =>{
    async function fetchData(){
      const request = await  axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(request);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
    const opts={
      height:"390",
      width:"100%",
      playerVars:{autoplay:1,},
    }
    const handleClick = (movie) =>{
      if (trailerUrl) {
        setTrailerUrl("") ;
      }else {
        movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) =>{
          const urlParams= new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
      }
    };

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            onClick={() =>handleClick(movie)}
            className={`row__poster ${largePosters? "large__posters":null}`}
            src={`${base_url}${`${largePosters?movie.poster_path:movie.backdrop_path}`}`}
            alt={movie.name}
          />
        ))}
      </div>
      <div style={{padding: "0px"}}>
        {trailerUrl ? (<YouTube videoId={trailerUrl} opts={opts}/>): null} 
      </div>
    </div>
  );
}

export default Row;