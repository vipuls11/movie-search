import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../context';
import './css/SingleMovies.css'
import 'bootstrap/dist/css/bootstrap.min.css';  // Using the minified version
const SingleMovies = () => {
    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState('')

    const { id } = useParams();
    const getMovies = async (url) => {
        setLoading(true)
        try {
            const response = await fetch(url)
            const result = await response.json()
            // console.log(result)
            if (result.Response === 'True') {

                setMovie(result)

            }
        } catch (error) {
            console.warn(error)
        }
        finally {
            setLoading(false)  // Ensure loading is set to false after the data is fetched or an error occurs
        }
    }

    useEffect(() => {
        const Timeouter = setTimeout(() => {
            getMovies(`${API_URL}&i=${id}`);

        }, 800);
        return () => clearTimeout(Timeouter)
    }, [id])

    if (loading) {
        return (
            <div className='loading d-flex justify-content-center align-items-center '>
                <h3>Page is loading....</h3>
            </div>
        )
    }
    if (!movie) {
        return (
            <div>
                <p>No movie found!</p>
            </div>
        )
    }
    return (

        <div>
            <section className='main_card'>
                <div className="single_card" key={movie.id}>
                    <div className="" >
                        <img src={movie.Poster} alt={movie.Title} className='rounded' />
                    </div>
                    <div className=" mt-2">
                        <h4>{movie.Title}</h4>
                        <p className='m-0 p-0'>{movie.Type}</p>
                        <p className='m-0 p-0'>{movie.Released}</p>
                        <p className='m-0 p-0'>{movie.Genre}</p>
                        <p className='m-0 p-0'>{movie.ImdbRating}</p>
                        <p className='m-0 p-0'>{movie.Country}</p>
                        <p className='m-0 p-0'>{movie.Year}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SingleMovies