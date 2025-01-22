import React from 'react';
import './css/Search.css'
import { IoSearchSharp } from "react-icons/io5";
import { useGlobalContext } from '../context';
import Movies from './Movies';
const Search = () => {
    const { query, setQuery, isError, loading, setloading } = useGlobalContext()
    const handleSearchChange = (e) => {
        setQuery(e.target.value)
    };
    return (
        <section className='text-center'>
            <h5 className="">Search your favourite Movie</h5>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
                <div className='Search_icon text-center my-3'>
                    <IoSearchSharp className='icons' />
                    <input placeholder='Search here' value={query} onChange={handleSearchChange} type="text" className='Search_input bg-transparent text-danger outline-none border-none focus:outline-none focus:ring-2 focus:ring-blue-50' />
                </div>
            </form>
            <div>
                <p>{isError.show && isError.msg}</p>
            </div>
            <p>
                {loading ? <div className='loading'>Loading.....</div> : <Movies />}
            </p>

        </section>

    )
}

export default Search