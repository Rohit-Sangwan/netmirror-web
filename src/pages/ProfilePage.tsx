import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Movie } from '../types/Movie';
import { MovieCard } from '../components/MovieCard';
import { RippleEffect } from '../components/RippleEffect';
import { Snackbar } from '../components/Snackbar';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinner } from '../components/LoadingSpinner';

// Mock data for demonstration
const mockWatchlist: Movie[] = [
  {
    id: 1,
    title: 'Inception',
    overview: 'A thief who steals corporate secrets...',
    poster_path: '/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    backdrop_path: '/s3TBrRGB1iav7gFOCNx3H31MoES.jpg',
    release_date: '2010-07-16',
    vote_average: 8.4,
    vote_count: 30000,
    popularity: 100,
    original_language: 'en',
    original_title: 'Inception',
  },
  // Add more mock movies as needed
];

const mockHistory: Movie[] = [
  {
    id: 2,
    title: 'The Dark Knight',
    overview: 'When the menace known as the Joker...',
    poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    backdrop_path: '/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg',
    release_date: '2008-07-18',
    vote_average: 8.5,
    vote_count: 25000,
    popularity: 95,
    original_language: 'en',
    original_title: 'The Dark Knight',
  },
  // Add more mock movies as needed
];

export const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'watchlist' | 'history'>('watchlist');
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveFromWatchlist = (movieId: number) => {
    setSnackbarMessage('Removed from watchlist');
    setShowSnackbar(true);
  };

  const handleClearHistory = () => {
    setSnackbarMessage('History cleared');
    setShowSnackbar(true);
  };

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      // Implement your login logic here
      // For now, we'll just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-900 p-4"
    >
      {/* Profile Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center">
            <span className="text-3xl text-white">👤</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">John Doe</h1>
            <p className="text-gray-400">john.doe@example.com</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-white">{mockWatchlist.length}</p>
            <p className="text-gray-400">Watchlist</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-white">{mockHistory.length}</p>
            <p className="text-gray-400">Watched</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-white">4.5</p>
            <p className="text-gray-400">Avg. Rating</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 border-b border-gray-800">
          <RippleEffect>
            <button
              onClick={() => setActiveTab('watchlist')}
              className={`pb-4 px-4 ${
                activeTab === 'watchlist'
                  ? 'text-primary-500 border-b-2 border-primary-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Watchlist
            </button>
          </RippleEffect>
          <RippleEffect>
            <button
              onClick={() => setActiveTab('history')}
              className={`pb-4 px-4 ${
                activeTab === 'history'
                  ? 'text-primary-500 border-b-2 border-primary-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              History
            </button>
          </RippleEffect>
        </div>
      </div>

      {/* Content */}
      {activeTab === 'watchlist' ? (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-white">My Watchlist</h2>
            <RippleEffect>
              <button
                onClick={() => {
                  setSnackbarMessage('Watchlist cleared');
                  setShowSnackbar(true);
                }}
                className="text-gray-400 hover:text-white"
              >
                Clear All
              </button>
            </RippleEffect>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mockWatchlist.map((movie) => (
              <div key={movie.id} className="relative group">
                <MovieCard movie={movie} />
                <button
                  onClick={() => handleRemoveFromWatchlist(movie.id)}
                  className="absolute top-2 right-2 bg-gray-900 bg-opacity-75 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-white">Viewing History</h2>
            <RippleEffect>
              <button
                onClick={handleClearHistory}
                className="text-gray-400 hover:text-white"
              >
                Clear History
              </button>
            </RippleEffect>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {mockHistory.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      )}

      <Snackbar
        message={snackbarMessage}
        isVisible={showSnackbar}
        onClose={() => setShowSnackbar(false)}
      />

      <div className="max-w-md mx-auto mt-8">
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="text-center mb-6">
            <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Anonymous User</h2>
            <p className="text-gray-400 mt-2">
              Sign in to access your profile and watchlist
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <LoadingSpinner />
                </div>
              ) : (
                'Sign In'
              )}
            </button>

            <div className="text-center text-sm text-gray-400">
              <p>Don't have an account?</p>
              <button
                onClick={() => navigate('/signup')}
                className="text-blue-500 hover:text-blue-400 mt-1"
              >
                Create Account
              </button>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-700">
            <h3 className="text-lg font-semibold mb-4">Features Available After Sign In</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Save movies to your watchlist
              </li>
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Get personalized recommendations
              </li>
              <li className="flex items-center text-gray-300">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Track your watch history
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfilePage; 