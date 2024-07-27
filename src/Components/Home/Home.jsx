import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.scss"
import axios from 'axios'
import { useState, useEffect} from 'react'

const apiKey = "53925da6a8d35dc1cb8edfa2fa470619";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/w500";
const upcoming = "upcoming";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";

const Card = ({ img,id }) => (
  <Link to={`/${id}`}>
    <img className='card' src={img} alt='cover' />
  </Link>
);

const Row = ({title,arr=[]})=>(
  <div className='row' >
    <h2>{title}</h2>
        <div>
          {
            arr.map((item,index)=>(
              <Card key={index} img={`${imgUrl}/${item.poster_path}`} id={item.id} />
            ))
          }

        </div>
  </div>
);

const Home = () => {

  const [upComingMovies,setUpcomingMovies] = useState([]);
  const [nowPlayingMovies,setnowPlayingMovies] = useState([]);
  const [popularMovies,setpopularMovies] = useState([]);
  const [topRatedMovies,settopRatedMovies] = useState([]);

  useEffect(() => {

    const fetchUpcoming = async()=>{
     const {data:{results}} = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`);
     setUpcomingMovies(results);
    };

    fetchUpcoming();

    const fetchNowPlaying = async()=>{
     const {data:{results}} = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
     setnowPlayingMovies(results);
    };

    fetchNowPlaying();

    const fetchPopular = async()=>{
     const {data:{results}} = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
     setpopularMovies(results);
    };

    fetchPopular();

    const fetchTopRated = async()=>{
     const {data:{results}} = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
     settopRatedMovies(results);
    };

    fetchTopRated();
  
  
  }, []);


  return (
    <section className="home">

      <div className="banner" style={{
        backgroundImage:popularMovies[0]? `url(${imgUrl}/${popularMovies[0].poster_path})`:'none',
      }} >

          {popularMovies[0] &&(<h1>{popularMovies[0].original_title}</h1>)}
          {popularMovies[0] &&(<p>{popularMovies[0].overview}</p>)}
      </div>

      <Row title={"Upcoming"} arr={upComingMovies} />
      <Row title={"Now Playing"} arr={nowPlayingMovies} />
      <Row title={"Popular"} arr={popularMovies} />
      <Row title={"Top Rated"} arr={topRatedMovies} />

    </section>
  )
}

export default Home