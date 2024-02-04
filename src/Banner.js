import React, { useState ,useEffect} from 'react'
import axios from './axios'
import requests from './Requests';
import "./Banner.css"


function Banner() {
  const [movie, setMovie] = useState([]);
  const backgroundImageUrl = movie?.backdrop_path
    ? `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
    : "";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
        Math.floor((Math.random()*request.data.results.length))
        ]
      );
      
      return request;
      
      }
      fetchData();
    }, []);
    
      function truncate(str,n){
        return str?.length> n? str.substr(0,n-1)+'...':str;
      }
    

  

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${backgroundImageUrl}")`,
        backgroundPosition: "center center",
        height: "300px",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
          <h1 className="banner__description">{truncate(movie?.overview,150)}</h1>
        </div>
      </div>
      <div className='banner__fadeBottom' />
    </header>
  );
}

export default Banner;
      