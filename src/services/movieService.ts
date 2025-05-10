import { Movie } from '../types/Movie';

const API_KEY = 'e8ce6034ab2713d3a56e5e3e1a5b9f88';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const headers = {
  'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGNlNjAzNGFiMjcxM2QzYTU2ZTVlM2UxYTViOWY4OCIsInN1YiI6IjY1MTg4N2I1OTZlMzBiMDBjNmEwOTQ2OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CDTKaWjLvMlpUmtUIFKklL9XCiP9NgnHLYs3wHeBraI`,
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

const mapMovieResponse = (movie: any): Movie => ({
  id: movie.id,
  title: movie.title,
  overview: movie.overview,
  poster_path: movie.poster_path,
  backdrop_path: movie.backdrop_path,
  release_date: movie.release_date,
  vote_average: movie.vote_average,
  vote_count: movie.vote_count,
  popularity: movie.popularity,
  original_language: movie.original_language,
  original_title: movie.original_title,
  genres: movie.genres || [],
  runtime: movie.runtime,
  status: movie.status,
  tagline: movie.tagline,
  budget: movie.budget,
  revenue: movie.revenue,
  homepage: movie.homepage,
  imdb_id: movie.imdb_id,
  production_companies: movie.production_companies,
  production_countries: movie.production_countries,
  spoken_languages: movie.spoken_languages
});

export const movieService = {
  async getTrendingMovies(): Promise<Movie[]> {
    try {
      const response = await fetch(
        `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
        { headers }
      );
      if (!response.ok) {
        throw new Error('Failed to fetch trending movies');
      }
      const data = await response.json();
      return data.results.map(mapMovieResponse);
    } catch (error) {
      console.error('Error fetching trending movies:', error);
      throw error;
    }
  },

  async getNewReleases(): Promise<Movie[]> {
    try {
      const response = await fetch(
        `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
        { headers }
      );
      if (!response.ok) {
        throw new Error('Failed to fetch new releases');
      }
      const data = await response.json();
      return data.results.map(mapMovieResponse);
    } catch (error) {
      console.error('Error fetching new releases:', error);
      throw error;
    }
  },

  async getPopularMovies(): Promise<Movie[]> {
    try {
      const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
        { headers }
      );
      if (!response.ok) {
        throw new Error('Failed to fetch popular movies');
      }
      const data = await response.json();
      return data.results.map(mapMovieResponse);
    } catch (error) {
      console.error('Error fetching popular movies:', error);
      throw error;
    }
  },

  async getRecommendedMovies(): Promise<Movie[]> {
    try {
      const response = await fetch(
        `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
        { headers }
      );
      if (!response.ok) {
        throw new Error('Failed to fetch recommended movies');
      }
      const data = await response.json();
      return data.results.map(mapMovieResponse);
    } catch (error) {
      console.error('Error fetching recommended movies:', error);
      throw error;
    }
  },

  async getMovieDetails(id: number): Promise<Movie> {
    try {
      const response = await fetch(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}`,
        { headers }
      );
      if (!response.ok) {
        throw new Error('Failed to fetch movie details');
      }
      const movie = await response.json();
      return mapMovieResponse(movie);
    } catch (error) {
      console.error('Error fetching movie details:', error);
      throw error;
    }
  },

  async searchMovies(query: string): Promise<Movie[]> {
    try {
      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`,
        { headers }
      );
      if (!response.ok) {
        throw new Error('Failed to search movies');
      }
      const data = await response.json();
      return data.results.map(mapMovieResponse);
    } catch (error) {
      console.error('Error searching movies:', error);
      throw error;
    }
  },

  async getMoviesByGenre(genreId: number): Promise<Movie[]> {
    try {
      const response = await fetch(
        `${BASE_URL}/discover/movie?with_genres=${genreId}&api_key=${API_KEY}`,
        { headers }
      );
      if (!response.ok) {
        throw new Error('Failed to fetch movies by genre');
      }
      const data = await response.json();
      return data.results.map(mapMovieResponse);
    } catch (error) {
      console.error('Error fetching movies by genre:', error);
      throw error;
    }
  },
}; 