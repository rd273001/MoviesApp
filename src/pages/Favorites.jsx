import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

const Favorites = () => {
  const { favoriteMovies } = useSelector( ( state ) => state.movies );

  return (
    <div className='mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-4'>Your Favorite Movies</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        { favoriteMovies.map( ( movie ) => (
          <MovieCard
            key={ movie.id }
            movie={ movie }
            isFavorite
          />
        ) ) }
      </div>
    </div>
  );
};

export default Favorites;