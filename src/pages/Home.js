import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TodoList from '../TodoList';
import Cart from '../Cart';
import  '../Movie.css';


function Home() {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies');
        setMovieData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchMovieData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <div>
        <h1 style={{ color: 'blue', fontSize: '24px', textAlign: 'center' }}>Welcome to the To-Do List and Shopping Cart App</h1>
        <TodoList />
        <Cart />
      </div>

  <h2 style={{textAlign:'center'}}>Movie Information</h2>
      <div className="movie-info">
  {movieData.map((movie, index) => (
    <div className="movie-info-item" key={index}>
      <h3>{movie.Title}</h3>
      <p>Year: {movie.Year}</p>
      <p>Runtime: {movie.Runtime}</p>
      {movie.Poster && <img className="movie-poster" src={movie.Poster} alt={movie.Title} />}
    </div>
  ))}
</div>
</div>
 )
};


export default Home;
