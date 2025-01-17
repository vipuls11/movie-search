import React from 'react'
import './css/Movies.css'
import Search from './Search';
import { useGlobalContext } from '../context'
import { NavLink } from 'react-router-dom';

const Movies = () => {
    const { movie } = useGlobalContext();
    // console.log(movie, 'movie')
    return (
        <div className='container py-5'>
            <div>
                <Search />
            </div>
            <div className='row justify-content-center g-md-3 g-4'>
                {movie.map((movielem) => {
                    // console.log(movielem)
                    const { Poster, Title, Type, Year, imdbID } = movielem;
                    const MovieTitle = Title.substring(0, 15)
                    return (
                        <NavLink to={`/movie/${imdbID}`} className=' col-md-3 ' key={imdbID}>
                            <div className="card border rounded p-3">
                                <img src={Poster} alt={Title} className='wrapper poster_image' />
                                <div className='my-2'>
                                    <h3 className='title'>{MovieTitle.length >= 15 ? `${MovieTitle}...` : MovieTitle}</h3>
                                    <p className='m-0 p-0'>{Type}</p>
                                    <p>{Year}</p>
                                </div>
                            </div>
                        </NavLink>
                    )
                })}
            </div>

        </div>
    )
}

export default Movies