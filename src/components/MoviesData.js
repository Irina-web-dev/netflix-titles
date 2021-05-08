import React, { useState, useEffect } from 'react'

import MovieCard from './MovieCard'
import image from '../assets/hollywood.jpg'

const MoviesData = () => {
  const [movies, setMovies] = useState(undefined)
  const [visible, setVisible] = useState(10)

  const API_URL = 'https://netflix-movie-data.herokuapp.com/movies'

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setMovies(data))
  },[])

  const showMoreMovies = () => {
    setVisible(prevValue => prevValue + 10)
  }

  return (
    <>
      <header className='header'>
        <img className='hollywood-image' src={image} alt="Hollywood" />
      </header>
      {!movies ? 
        <h1 className='loading'>Loading...</h1>
      : 
        <>
          <div className='movies-container'>
          <MovieCard movies={movies} visible={visible} setVisible={setVisible}  />
          </div>
          <button className='load-more-button' onClick={showMoreMovies}>Show more results</button>
        </>
      }
    </>
  )
}

export default MoviesData