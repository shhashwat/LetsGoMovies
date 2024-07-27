import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const url = "https://api.themoviedb.org/3/movie/top_rated";
const imgUrl = "https://image.tmdb.org/t/p/w500";
const apiKey = "53925da6a8d35dc1cb8edfa2fa470619";

const Card = ({img,title,id }) => (
    <div className="tv-card-container">
        <Link to={`/${id}`}>
        <img className='tv-card' src={img} alt='cover' />
        <h3>{title}</h3>
        </Link>
    </div>

    
);

const Row = ({title,arr=[]})=>(
  <div className='tv-row' >
          {
            arr.map((item,index)=>(
              <Card key={index} img={`${imgUrl}/${item.poster_path}`} id={item.id} title={item.title} />
            ))
          }
  </div>
);

const MyList = () => {

  const [tvShow,setTvShow] = useState([]);

  useEffect(()=>{
    const fetchTvShow = async ()=>{
      const {data:{results}} = await axios.get(`${url}?api_key=${apiKey}`);
      setTvShow(results);
    }
    fetchTvShow();
  },[])

  return (
    <div>
      <Row title={"TVShows"} arr={tvShow} />
    </div>
  )
}

export default MyList