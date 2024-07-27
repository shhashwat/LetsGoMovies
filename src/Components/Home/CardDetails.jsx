import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CardDetails = () => {
  const { id } = useParams(); // Extract the movie ID from the URL
  const [movie, setMovie] = useState("");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=53925da6a8d35dc1cb8edfa2fa470619`); //<== at first this didn't work because I was also featching (:{results}) with this, so the URL I was using (https://api.themoviedb.org/3/movie/${id}) is for fetching a single movie by its ID, not a list of movies. The response from this endpoint does not contain a data object with a results array. Instead, it directly returns the movie object.
      setMovie(data);
      // try {
      //   const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=53925da6a8d35dc1cb8edfa2fa470619`);
      //   const data = await response.json();
      //   setMovie(data);
      // } catch (error) {
      //   console.error('Error fetching movie details:', error
      //   );
      // } <===== alternative method
    };

    fetchMovieDetails();
  }, [id]); // Re-fetch if the ID changes

  if (!movie) {
    return <div>Loading...</div>;
  }

// CLASSNAMES WITH "CD" SIGNIFY THE CARDDETAILS.JSX COMPONENTS

  return (
    <div className="cd-contents" >
      {/* <img className="cd-image" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} /> */}

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
