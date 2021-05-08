import React from 'react'
import image from '../assets/netflix-icon.jpg'

const MovieCard = ({ movies,  visible }) => {

  return (
    <>
      {movies.slice(0, visible).map(movie => (
        <div className='movie-item' key={movie.id}>
          <img className='image' src={image} alt="Netflix icon" />
          <p className='movie-title'>{movie.title}</p>
          <div className='movie-details'>
            <p className='details'><span className='highlighted'>Release year</span>: {movie.release_year}</p>
            <p className='details'><span className='highlighted'>Genres</span>: {movie.listed_in}</p>
          </div>
        </div>
      ))
      }
    </>
  )
}

export default MovieCard