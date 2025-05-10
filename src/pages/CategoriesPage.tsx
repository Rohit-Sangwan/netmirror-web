import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Movie } from '../types/Movie';
import { movieService } from '../services/movieService';
import { MovieCard } from '../components/MovieCard';
import { RippleEffect } from '../components/RippleEffect';

interface Genre {
  id: number;
  name: string;
}

const genres: Genre[] = [
  { id: 28, name: 'Action' },
  { id: 35, name: 'Comedy' },
  { id: 18, name: 'Drama' },
  { id: 27, name: 'Horror' },
  { id: 878, name: 'Science Fiction' },
  { id: 16, name: 'Animation' },
  { id: 10751, name: 'Family' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 53, name: 'Thriller' },
];

const years = Array.from({ length: 25 }, (_, i) => 2024 - i);

const CategoriesPage: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [selectedRating, setSelectedRating] = useState<string>('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        let data: Movie[];
        if (selectedGenre) {
          data = await movieService.getMoviesByGenre(selectedGenre);
        } else {
          data = await movieService.getPopularMovies();
        }

        // Apply year filter
        if (selectedYear) {
          data = data.filter(
            (movie) => movie.release_date?.startsWith(selectedYear)
          );
        }

        // Apply rating filter
        if (selectedRating) {
          const minRating = parseFloat(selectedRating);
          data = data.filter((movie) => movie.vote_average >= minRating);
        }

        setMovies(data);
      } catch (err) {
        setError('Failed to load movies');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [selectedGenre, selectedYear, selectedRating]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-900 p-4"
    >
      {/* Filters */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Categories</h2>
        
        {/* Genre Selection */}
        <div className="mb-6">
          <h3 className="text-gray-400 mb-2">Genres</h3>
          <div className="flex flex-wrap gap-2">
            <RippleEffect>
              <button
                onClick={() => setSelectedGenre(null)}
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedGenre === null
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                All
              </button>
            </RippleEffect>
            {genres.map((genre) => (
              <RippleEffect key={genre.id}>
                <button
                  onClick={() => setSelectedGenre(genre.id)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedGenre === genre.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {genre.name}
                </button>
              </RippleEffect>
            ))}
          </div>
        </div>

        {/* Additional Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-400 mb-2">Year</label>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Any Year</option>
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Rating</label>
            <select
              value={selectedRating}
              onChange={(e) => setSelectedRating(e.target.value)}
              className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="">Any Rating</option>
              <option value="9">9+ Stars</option>
              <option value="8">8+ Stars</option>
              <option value="7">7+ Stars</option>
              <option value="6">6+ Stars</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="animate-pulse bg-gray-800 rounded-lg aspect-[2/3]"
            />
          ))}
        </div>
      ) : error ? (
        <div className="text-red-500 text-center py-8">{error}</div>
      ) : movies.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </motion.div>
      ) : (
        <div className="text-gray-400 text-center py-8">No movies found</div>
      )}
    </motion.div>
  );
};

export default CategoriesPage; 