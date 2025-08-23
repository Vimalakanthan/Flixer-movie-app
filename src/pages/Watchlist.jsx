import React, { useContext, useState } from 'react'
import Genrefilter from '../components/Genrefilter'
import { WatchListContext } from '../context/WatchListContext'
import Moviecard from '../components/Moviecard'


const Watchlist = () => {
    const { watchlist, genreList } = useContext(WatchListContext)



    const [search, setSearch] = useState("")
    const [selectedGenre, setSelectedGenre] = useState("")
    const filteredMovies = watchlist.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase())).filter(movie => { return !selectedGenre || movie.genre_ids.includes(Number(selectedGenre)) })
    return (


        <div className='pt-16 min-h-screen bg-black flex flex-col'>
            <div className='flex justify-center'>
                <input type="text" placeholder='Search Movies...' className='p-2 w-3/6 border rounded-lg border-gray-700 bg-black/40 backdrop-blur-md text-white fixed top-17 z-10' onChange={(e) => setSearch(e.target.value)} />
            </div>

            <div className='mt-15 flex justify-center'>
                <Genrefilter genreList={genreList} setSelectedGenre={setSelectedGenre} />
            </div>
            <div className='movies-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4  mt-30 '>
                {filteredMovies.map((movie) => {
                    return <Moviecard key={movie.id} movie={movie} />
                })}

            </div>

            <footer className='mt-auto'>
                <h3 className='text-3xl font-bold text-red-700 mt-20 text-center'>Flixer</h3>
                <p className=' text-white text-center mt-5'>Copyright &copy; 2025 All rights reserved</p>
            </footer>

        </div>




    )
}

export default Watchlist