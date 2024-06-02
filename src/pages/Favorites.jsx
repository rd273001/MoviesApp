import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

const Favorites = () => {
  const { favoriteMovies } = useSelector( ( state ) => state.movies );

  return (
    <div className='mx-auto px-4 pt-4 pb-12'>
      <h1 className='text-2xl font-bold mb-5'>Your Favorite Movies</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12'>
        { favoriteMovies?.length > 0
          ? favoriteMovies.map( ( movie ) => (
          <MovieCard
            key={ movie.id }
            movie={ movie }
            isFavorite
          />
          ) )
          : <p className='col-span-4 sm:text-3xl text-xl'>No Movie added to Favorites yet.</p>
        }
      </div>
    </div>
  );
};

export default Favorites;