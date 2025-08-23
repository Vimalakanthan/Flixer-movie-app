import React, { useEffect, useState } from 'react'
import Moviecard from '../components/Moviecard'


const Home = () => {
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")

    useEffect(() => {

        let url = `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=595f65015450d30b2900b61b7d01367d`

        if (search) {
            url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=595f65015450d30b2900b61b7d01367d`
        }

        fetch(url)
            .then((response) => response.json())
            .then((data) => setMovies(data.results))
    }, [page, search])

    return (
        <div className='p-4 bg-black'>
            <div className='flex justify-center'>
                <input type="text" placeholder='Search Movies...' className='p-2 w-3/6 border rounded-lg border-gray-700 bg-black/40 outline-0 text-white fixed top-17 z-10' onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className='movies-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4  mt-30 '>
                {movies.map((movie) => {
                    return <Moviecard key={movie.id} movie={movie} />
                })}

            </div>
            <div className="page-container flex justify-between mt-5" >
                <button disabled={page == 1} className='px-4 py-1 bg-white text-black rounded-lg cursor-pointer' onClick={() => {
                    setPage((prev) => prev - 1)
                }}>Prev</button>
                <button className='px-4 py-1 bg-white text-black rounded-lg cursor-pointer' onClick={() => {
                    setPage((prev) => prev + 1)
                }} >Next</button>
            </div>

            <footer>
                <h3 className='text-3xl font-bold text-red-700 mt-20 text-center'>Flixer</h3>
                <p className=' text-white text-center mt-5'>Copyright &copy; 2025 All rights reserved</p>
            </footer>
        </div>
    )
}

export default Home