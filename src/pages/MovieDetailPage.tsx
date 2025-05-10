import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { movieService } from '../services/movieService';
import { Movie } from '../types/Movie';

const LoadingFallback = () => (
  <div className="flex justify-center items-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
  </div>
);

const ErrorFallback = ({ error, onRetry }: { error: Error; onRetry: () => void }) => (
  <div className="text-center py-8">
    <h2 className="text-2xl font-bold text-red-500 mb-4">Error Loading Movie</h2>
    <p className="text-gray-400 mb-4">{error.message}</p>
    <button
      onClick={onRetry}
      className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition-colors"
    >
      Try Again
    </button>
  </div>
);

export const MovieDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchMovieDetails = async () => {
    if (!id) return;
    
    try {
      setIsLoading(true);
      setError(null);
      const movieData = await movieService.getMovieDetails(id);
      setMovie(movieData);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load movie details'));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  if (isLoading) {
    return <LoadingFallback />;
  }

  if (error) {
    return <ErrorFallback error={error} onRetry={fetchMovieDetails} />;
  }

  if (!movie) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold text-red-500">Movie Not Found</h2>
        <button
          onClick={() => navigate('/')}
          className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition-colors"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-4 left-4 z-20 bg-black/50 rounded-full p-2"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Movie Poster */}
      <div className="relative w-full h-[60vh]">
        {movie.posterPath ? (
          <img
            src={movie.posterPath}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <span className="text-gray-400">No Poster Available</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
      </div>

      {/* Movie Details */}
      <div className="px-4 -mt-8 relative z-10">
        <div className="bg-gray-900 rounded-t-3xl p-6">
          <h1 className="text-2xl font-bold mb-2">{movie.title}</h1>
          
          <div className="flex items-center gap-4 mb-4 text-sm">
            <div className="flex items-center">
              <span className="text-yellow-400 mr-1">★</span>
              <span>{movie.voteAverage.toFixed(1)}</span>
            </div>
            <span className="text-gray-400">|</span>
            <span>{new Date(movie.releaseDate).getFullYear()}</span>
            <span className="text-gray-400">|</span>
            <span>{movie.voteCount} votes</span>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Overview</h2>
            <p className="text-gray-300 leading-relaxed text-sm">{movie.overview}</p>
          </div>

          <div className="flex gap-4">
            <a
              href={`https://www.themoviedb.org/movie/${movie.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-md transition-colors text-center"
            >
              View on TMDB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}; 