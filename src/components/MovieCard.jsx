import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/moviesSlice';

const MovieCard = React.memo( ( { movie, isFavorite } ) => {
  const dispatch = useDispatch();

  // Function to handle the favorite toggle click
  const handleFavoriteToggle = ( e ) => {
    // Prevent click event on card click to redirect to IMDb url
    e.preventDefault();
    dispatch( toggleFavorite( movie ) );
  };

  return (
    // Card container with hover effect and click event to open IMDb link
    <Link
      to={ movie.imdb_url }
      target='_blank'
      className='bg-[radial-gradient(#ccc,#eee)] rounded-lg shadow-lg ring-0 ring-slate-300 shadow-gray-400 overflow-hidden transform transition duration-500 hover:scale-105'
    >
      
      <img
        src={ movie.image }
        alt={ movie.movie }
        className='w-full h-64 object-cover transition-transform duration-500'
      />
      <div className='p-4'>
        <h3 className='text-xl font-bold mb-2'>{ movie.movie }</h3>

        <p className='text-gray-700 mb-2'>
          <span className='font-semibold'>Rating:</span> { movie.rating }
        </p>

        <div className='flex justify-between items-end gap-x-4'>
          <Link
            to={ movie.imdb_url }
            target='_blank'
            className='bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-3 rounded'
          >
            IMDb
          </Link>

          <button
            onClick={ handleFavoriteToggle }
            className={ `${ isFavorite
              ? 'bg-red-500 hover:bg-red-700'
              : 'bg-green-500 hover:bg-green-700'
              } text-white font-medium py-2 px-3 rounded transition-colors duration-300` }
          >
            { isFavorite ? 'Remove from Favorites' : 'Add to Favorites' }
          </button>
        </div>

      </div>
    </Link>
  );
} );

export default MovieCard;