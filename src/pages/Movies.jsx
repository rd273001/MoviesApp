import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, toggleFavorite } from '../store/moviesSlice';
import MovieCard from '../components/MovieCard';
import LoadingIndicator from '../components/LoadingIndicator';
import Alert from '../components/Alert';

const Movies = () => {
  const dispatch = useDispatch();
  const { movies, favoriteMovies, isLoading, error } = useSelector( ( state ) => state.movies );

  useEffect( () => {
    dispatch( fetchMovies() );
  }, [dispatch] );
  
  useEffect( () => {
    console.log( 'MOVIES fetched2  =>  ', movies );
  }, [movies] );

  const handleFavoriteToggle = ( movie ) => {
    dispatch( toggleFavorite( movie ) );
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-4'>Movies</h1>
      { isLoading && <LoadingIndicator /> }
      { error && <Alert message={ error } type='error' /> }
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        { movies.length > 0 && [...movies].sort( ( a, b ) => b.rating - a.rating ).map( ( movie ) => (
          <MovieCard
            key={ movie.id }
            movie={ movie }
            isFavorite={ favoriteMovies.some( ( favMovie ) => favMovie.id === movie.id ) }
            onFavoriteToggle={ handleFavoriteToggle }
          />
        ) ) }
      </div>
    </div>
  );
};

export default Movies;