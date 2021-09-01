import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import MovieCard from '../movie_card/MovieCard'

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext)
  return (
    <>
      <div className='movie-page'>
        <div className='container'>
          <div className='header'>
            <h1 className='heading'>Peliculas para ver</h1>
            <span className='count-pill'>
              {watchlist.length}
              {watchlist.length === 1 ? ' Pelicula' : ' Peliculas'}
            </span>
          </div>
          {watchlist.length > 0 ? (
            <div className='movie-grid'>
              {watchlist.map((movie) => (
                <MovieCard movie={movie} type='watchlist' />
              ))}
            </div>
          ) : (
            <h2 className='no-movies'>
              No hay peliculas en tu lista, agrega alguna!
            </h2>
          )}
        </div>
      </div>
    </>
  )
}

export default Watchlist
