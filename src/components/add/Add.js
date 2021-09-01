import React, { useState } from 'react'
import ResultsCard from '../results_card/ResultsCard'

const Add = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  const onChange = (e) => {
    e.preventDefault()
    setQuery(e.target.value)

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&langauge=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          console.log(data)
          setResults(data.results)
        } else {
          setResults([])
        }
      })
  }

  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <div className='input-wrapper'>
            <input
              type='text'
              placeholder='Busca una pelicula...'
              value={query}
              onChange={onChange}
            />
          </div>
          {results.length > 0 && (
            <ul className='results'>
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultsCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Add