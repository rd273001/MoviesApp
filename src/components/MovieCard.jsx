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
      className='rounded-lg shadow-lg border-[1px] border-slate-400 shadow-gray-400 overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-gray-600 flex flex-col flex-grow'
    >
      
      <img
        src={ movie.image }
        alt={ movie.movie }
        className='w-full h-64 bg-gray-200 object-cover transition-transform duration-500'
      />
      <div className='p-4 flex flex-col flex-grow bg-[radial-gradient(#eee,#aaa)]'>
        <h3 className='text-xl font-bold mb-2'>{ movie.movie }</h3>

        <p className='text-gray-700 mb-2 mt-auto'>
          <span className='font-semibold'>Rating:</span> { movie.rating }
        </p>

        <div className='flex justify-between text-center gap-x-4'>
          <Link
            to={ movie.imdb_url }
            target='_blank'
            className='bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 px-3 rounded hover:scale-105 active:scale-100'
          >
            IMDb
          </Link>

          <button
            onClick={ handleFavoriteToggle }
            className={ `${ isFavorite
              ? 'bg-red-500 hover:bg-red-700'
              : 'bg-green-500 hover:bg-green-700'
              } text-white font-medium py-2 px-3 rounded transition-colors duration-300 hover:scale-105 active:scale-100` }
          >
            { isFavorite ? 'Remove' : 'Add to Favorites' }
          </button>
        </div>

      </div>
    </Link>
  );
} );

export default MovieCard;