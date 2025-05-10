import React, { useState, useEffect } from 'react';
import { MovieCard } from '../components/MovieCard';
import { Movie } from '../types/Movie';
import { movieService } from '../services/movieService';

export const SearchScreen: React.FC = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const searchTimeout = setTimeout(async () => {
      if (query.trim().length < 2) {
        setMovies([]);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const results = await movieService.searchMovies(query);
        setMovies(results);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to search movies');
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(searchTimeout);
  }, [query]);

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Status Bar Spacing */}
      <div className="h-12"></div>

      {/* Search Bar */}
      <div className="sticky top-0 z-10 bg-[#121212] px-4 py-3">
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9E9E9E]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies..."
            className="w-full pl-12 pr-10 py-3 bg-[#1F1F1F] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-[#BB86FC] text-base"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9E9E9E] active:opacity-70"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="px-4 pb-20">
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#BB86FC]"></div>
          </div>
        )}

        {error && (
          <div className="text-center py-8">
            <p className="text-[#CF6679]">{error}</p>
          </div>
        )}

        {!loading && !error && query.length < 2 && (
          <div className="text-center py-12">
            <p className="text-[#9E9E9E]">Start typing to search for movies...</p>
          </div>
        )}

        {!loading && !error && query.length >= 2 && movies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#9E9E9E]">No movies found for "{query}"</p>
          </div>
        )}

        {!loading && !error && movies.length > 0 && (
          <div className="grid grid-cols-1 gap-4">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}; 