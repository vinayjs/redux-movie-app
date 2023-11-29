import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/api/movieapi';
import {APIKey} from '../../common/api/Movieapikey'

function Home() {
  useEffect(() => {
    const movieText = 'Harry'
    const fetchMovies = async () => {
      const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`
      ).catch((error) => {
        console.log('err', error)
      })
      console.log("The response from the API ", response)
    }
    fetchMovies();
  }, [])
  return (
      <>
        <div className='banner-image'></div>
        <MovieListing />
      </>
    )
}

export default Home