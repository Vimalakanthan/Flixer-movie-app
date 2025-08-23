import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { WatchListContext } from '../context/WatchListContext'


const Navbar = () => {
    const { watchlist } = useContext(WatchListContext)
    return (
        <nav className='bg-black p-4 text-white flex justify-between fixed w-full z-10 '>
            <Link to="./" className='text-3xl font-bold text-red-700 transform transition-transform duration-300 hover:scale-110'>Flixer</Link>
            <Link to="./watchlist" className='text-xl4544'>Watchlist ({watchlist.length})</Link>
        </nav>
    )
}

export default Navbar