import { getQueriesForElement } from '@testing-library/react'
import React from 'react'
import MovieControls from '../movie_control/MovieControls'

const MovieCard = ({ movie, type }) => {
  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return 'green'
    } else if (vote >= 6) {
      return 'orange'
    } else {
      return 'red'
    }
  }
  return (
    <div className='movie-card'>
      <div className='img-contain'>
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} Poster`}
        />
      </div>
      <div className='movie-info'>
        <h3>{movie.title}</h3>
        <span className={`tag ${setVoteClass(movie.vote_average)}`}>
          {movie.vote_average}
        </span>
      </div>
      <MovieControls type={type} movie={movie} />
      <div className='movie-overview'>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  )
}

export default MovieCard
