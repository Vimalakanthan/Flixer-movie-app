import React, { useContext } from 'react'
import { FaHeart } from 'react-icons/fa'
import { FaRegHeart } from "react-icons/fa"
import { WatchListContext } from '../context/WatchListContext'




const Moviecard = ({ movie }) => {
  const { toggleWatchlist, watchlist } = useContext(WatchListContext)



  const inWatchList = watchlist.some((m) => m.id == movie.id)
  return (
    <div className='bg-black p-4 m-2 rounded-lg  text-white relative shadow-[0_0_5px_red,0_0_10px_darkred]'>
      <img className='w-full h-80 object-contain rounded-l-2xl ' src={`https://www.themoviedb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <h3 className='text-lg font-bold mt-4'>{movie.title}</h3>
      <p className='text-gray-400 text-sm'> {movie.release_date} </p>
      <button className='absolute top-2 right-2 text-red-500 text-xl cursor-pointer' onClick={() => toggleWatchlist(movie)}>
        {inWatchList ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  )
}

export default Moviecard