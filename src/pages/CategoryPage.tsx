import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { movieService } from '../services/movieService';
import { Movie } from '../types/Movie';
import { LoadingSection } from '../components/LoadingSection';
import { ErrorSection } from '../components/ErrorSection';

type CategoryParams = {
  category: string;
};

export const CategoryPage = () => {
  const { category } = useParams<CategoryParams>();
  const navigate = useNavigate();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>(undefined);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (!category) {
      navigate('/');
      return;
    }
    setPage(1);
    fetchMovies(1);
  }, [category, navigate]);

  const fetchMovies = async (pageNum: number) => {
    if (!category) return;
    
    try {
      setLoading(true);
      const newMovies = await movieService.getMoviesByCategory(category, pageNum);
      if (pageNum === 1) {
        setMovies(newMovies);
      } else {
        setMovies(prev => [...prev, ...newMovies]);
      }
      setHasMore(newMovies.length > 0);
      setError(undefined);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load movies. Please try again later.';
      setError(errorMessage);
      console.error('Error fetching movies:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadMore = () => {
    if (!loading && hasMore && category) {
      setPage(prev => prev + 1);
      fetchMovies(page + 1);
    }
  };

  const getCategoryTitle = (cat: string) => {
    switch (cat) {
      case 'korean':
        return 'Korean Movies';
      case 'hindi':
        return 'Hindi Movies';
      case 'hollywood':
        return 'Hollywood Movies';
      case 'anime':
        return 'Anime';
      case 'trending':
        return 'Trending Now';
      default:
        return cat.charAt(0).toUpperCase() + cat.slice(1);
    }
  };

  if (!category) return null;
  if (loading && movies.length === 0) return <LoadingSection />;
  if (error && movies.length === 0) return <ErrorSection message={error} onRetry={() => fetchMovies(1)} />;

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-[#121212] border-b border-[#1F1F1F]">
        <div className="px-4 py-3">
          <Link
            to="/"
            className="inline-flex items-center text-[#BB86FC] active:opacity-70"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-4 pb-20">
        <h1 className="text-xl font-medium mb-4">{getCategoryTitle(category)}</h1>
        
        <div className="grid grid-cols-2 gap-3">
          {movies.map((movie) => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              className="active:scale-[0.98] transition-transform"
            >
              <div className="relative aspect-[2/3] rounded-xl overflow-hidden bg-[#2D2D2D]">
                <img
                  src={movie.posterPath}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <h3 className="text-sm font-medium text-white truncate">{movie.title}</h3>
                  <p className="text-xs text-[#9E9E9E]">{movie.releaseDate?.split('-')[0]}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {hasMore && (
          <div className="mt-6 text-center">
            <button
              onClick={loadMore}
              disabled={loading}
              className="bg-[#BB86FC] text-black py-2.5 px-6 rounded-xl font-medium active:opacity-70 disabled:opacity-50"
            >
              {loading ? 'Loading...' : 'Load More'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}; 