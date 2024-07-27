import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CardDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState("");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const {data} = await axios.get(`https://api.themoviedb.org/3/movie/top_rated/${id}?api_key=53925da6a8d35dc1cb8edfa2fa470619`); 
      setMovie(data);
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }


  return (
    <div className="cd-contents" >

        <div className="cd-image" style={{
          
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
        }}>
        
        <h1 className="cd-orignal_title" >{movie.title}</h1>
        <p className="cd-overview" >{movie.overview}</p>
        <p className="cd-overview" >{movie.tagline}</p>


        </div>

    </div>
  );
};

export default CardDetails;
