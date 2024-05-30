import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.MOVIES_API_URL;
console.log( 'API_URL => ', API_URL );

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
    favoriteMovies: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    toggleFavorite: ( state, action ) => {
      const movie = action.payload;
      const isFavorite = state.favoriteMovies.some( ( m ) => m.id === movie.id );

      if ( isFavorite ) {
        state.favoriteMovies = state.favoriteMovies.filter( ( m ) => m.id !== movie.id );
      } else {
        state.favoriteMovies.push( movie );
      }
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