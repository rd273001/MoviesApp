import React from 'react';

const MovieCard = ( { movie, onFavoriteToggle, isFavorite } ) => {
  const handleFavoriteToggle = () => {
    onFavoriteToggle( movie );
  };

  const openIMDbLink = () => {
    window.open( movie.imdb_url, '_blank' );
  };

  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden'>
      <img src={ movie.image } alt={ movie.movie } className='w-full h-64 object-cover' />
      <div className='p-4'>
        <h3 className='text-xl font-bold mb-2'>{ movie.movie }</h3>
        <p className='text-gray-700 mb-2'>
          <span className='font-semibold'>Rating:</span> { movie.rating }
        </p>
        <div className='flex justify-between'>
          <button
            onClick={ openIMDbLink }
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            IMDb Link
          </button>
          <button
            onClick={ handleFavoriteToggle }
            className={ `${ isFavorite
              ? 'bg-red-500 hover:bg-red-700'
              : 'bg-green-500 hover:bg-green-700'
              } text-white font-bold py-2 px-4 rounded` }
          >
            { isFavorite ? 'Remove from Favorites' : 'Add to Favorites' }
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;