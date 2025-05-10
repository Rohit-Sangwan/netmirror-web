import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Movie } from '../types/Movie';
import { movieService } from '../services/movieService';
import { RippleEffect } from '../components/RippleEffect';
import { Snackbar } from '../components/Snackbar';

const MovieDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        if (id) {
          const data = await movieService.getMovieDetails(parseInt(id));
          setMovie(data);
        }
      } catch (err) {
        setError('Failed to load movie details');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const handleAddToWatchlist = () => {
    setSnackbarMessage('Added to watchlist');
    setShowSnackbar(true);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: movie?.title,
        text: `Check out ${movie?.title} on NetMirror!`,
        url: window.location.href,
      });
    } else {
      setSnackbarMessage('Link copied to clipboard');
      setShowSnackbar(true);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 p-4">
        <div className="animate-pulse">
          <div className="h-96 bg-gray-800 rounded-lg mb-4"></div>
          <div className="h-8 bg-gray-800 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-800 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-800 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="min-h-screen bg-gray-900 p-4 flex items-center justify-center">
        <div className="text-red-500 text-center">
          <p className="text-xl mb-2">Error</p>
          <p>{error || 'Movie not found'}</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-900"
    >
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold text-white mb-2"
          >
            {movie.title}
          </motion.h1>
          <div className="flex items-center space-x-4 text-gray-300">
            <span>{movie.release_date?.split('-')[0]}</span>
            <span>•</span>
            <span>{movie.runtime} min</span>
            <span>•</span>
            <span>{movie.vote_average.toFixed(1)} ⭐</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Action Buttons */}
        <div className="flex space-x-4 mb-6">
          <RippleEffect>
            <button
              onClick={handleAddToWatchlist}
              className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-full flex items-center justify-center space-x-2"
            >
              <span>Add to Watchlist</span>
            </button>
          </RippleEffect>
          <RippleEffect>
            <button
              onClick={handleShare}
              className="flex-1 bg-gray-800 text-white py-3 px-6 rounded-full flex items-center justify-center space-x-2"
            >
              <span>Share</span>
            </button>
          </RippleEffect>
        </div>

        {/* Overview */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
          <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div>
            <h3 className="text-gray-400 mb-2">Release Date</h3>
            <p className="text-white">{movie.release_date}</p>
          </div>
          <div>
            <h3 className="text-gray-400 mb-2">Language</h3>
            <p className="text-white">{movie.original_language.toUpperCase()}</p>
          </div>
          <div>
            <h3 className="text-gray-400 mb-2">Rating</h3>
            <p className="text-white">{movie.vote_average.toFixed(1)} / 10</p>
          </div>
          <div>
            <h3 className="text-gray-400 mb-2">Votes</h3>
            <p className="text-white">{movie.vote_count}</p>
          </div>
        </div>

        {/* Genres */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Genres</h2>
          <div className="flex flex-wrap gap-2">
            {movie.genres?.map((genre) => (
              <span
                key={genre.id}
                className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Snackbar
        message={snackbarMessage}
        isVisible={showSnackbar}
        onClose={() => setShowSnackbar(false)}
      />
    </motion.div>
  );
};

export default MovieDetailsPage; 