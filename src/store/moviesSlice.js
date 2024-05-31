import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.MOVIES_API_URL;

// Persisting Favorite Movies locally using localStorage
const getFavoriteMoviesFromLocalStorage = () => {
  const favoriteMovies = localStorage.getItem( 'favoriteMovies' );
  return favoriteMovies ? JSON.parse( favoriteMovies ) : [];
};

// Fetching movies from API stored as an env variable 
export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async () => {
    const response = await axios.get( API_URL );
    return response.data;
  }
);

const moviesSlice = createSlice( {
  name: 'movies',
  initialState: {
    movies: [],
    favoriteMovies: getFavoriteMoviesFromLocalStorage(), // Initialize from localStorage
    isLoading: false,
    error: null,
  },
  reducers: {
    // Reducer for toggling movie to Favorite/Unfavorite
    toggleFavorite: ( state, action ) => {
      const movie = action.payload;
      const isFavorite = state.favoriteMovies.some( ( m ) => m.id === movie.id );

      if ( isFavorite ) {
        state.favoriteMovies = state.favoriteMovies.filter( ( m ) => m.id !== movie.id );
      } else {
        state.favoriteMovies.push( movie );
      }
      localStorage.setItem( 'favoriteMovies', JSON.stringify( state.favoriteMovies ) ); // Save Favorite Movies to localStorage
    },
  },
  extraReducers: ( builder ) => {
    builder
      .addCase( fetchMovies.pending, ( state ) => {
        state.isLoading = true;
        state.error = null;
      } )
      .addCase( fetchMovies.fulfilled, ( state, action ) => {
        state.isLoading = false;
        state.movies = action.payload;
      } )
      .addCase( fetchMovies.rejected, ( state, action ) => {
        state.isLoading = false;
        state.error = action.error.message;
      } );
  },
} );

export const { toggleFavorite } = moviesSlice.actions;
export default moviesSlice.reducer;