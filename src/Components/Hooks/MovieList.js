import React, { useState } from 'react'

const MovieList = props => {
    const [movies, setMovies] = useState([
        'Toy Story',
        'Indina Jones',
        'Monsters Inc.'
    ])
    const [input, setInput] = useState('')

    return <div>
        {movies.map((movie, i) => <h2 key={i}>{movie}</h2>)}
        <input onChange={e => setInput(e.target.value)} />
        <button onClick={() => setMovies([...movies, input])}>Take Me to the Cine</button>
    </div>
}

export default MovieList