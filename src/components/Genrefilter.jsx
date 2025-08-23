import React, { useContext } from 'react'

const Genrefilter = ({ genreList, setSelectedGenre }) => {

  return (
    <div >
      <select className='p-2 bg-black border backdrop:blur-md rounded-lg text-white' onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value="">All Genres</option>
        {genreList.map((genre) => {
          return (
            <option key={genre.id} value={genre.id}>{genre.name}</option>
          )
        })}
      </select>
    </div>
  )
}

export default Genrefilter