import React, { useEffect, Suspense, useState } from 'react';
import { 
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
  useLocation
} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import CategoriesPage from './pages/CategoriesPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import { TabBar } from './components/TabBar';
import { StatusBar } from './components/StatusBar';
import { ErrorBoundary } from './components/ErrorBoundary';

const MobileOnlyWarning = () => (
  <div className="fixed inset-0 bg-gray-900 z-50 flex items-center justify-center p-4 text-center">
    <div className="bg-gray-800 p-6 rounded-lg max-w-sm">
      <h2 className="text-xl font-bold text-red-500 mb-4">Mobile Only</h2>
      <p className="text-gray-300 mb-4">
        This application is designed exclusively for mobile devices. Please access it from your smartphone for the best experience.
      </p>
      <div className="text-sm text-gray-400">
        <p>Coming soon as a native mobile app!</p>
      </div>
    </div>
  </div>
);

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="text-white text-xl">Loading...</div>
  </div>
);

const ErrorFallback = ({ error }: { error: Error }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="text-red-500 text-xl">Error: {error.message}</div>
  </div>
);

const Layout = () => {
  const [isMobile, setIsMobile] = useState(true);
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith('/movie/');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) {
    return <MobileOnlyWarning />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <StatusBar />
      {/* Main Content */}
      <main className="pb-16">
        <Suspense fallback={<LoadingFallback />}>
          <Outlet />
        </Suspense>
      </main>

      {/* Tab Bar - Only show on main pages */}
      {!isDetailPage && <TabBar />}
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MovieDetailsPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Route>
  )
);

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const initApp = async () => {
      try {
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to initialize app'));
        setIsLoading(false);
      }
    };

    initApp();
  }, []);

  if (isLoading) {
    return <LoadingFallback />;
  }

  if (error) {
    return <ErrorFallback error={error} />;
  }

  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}; 