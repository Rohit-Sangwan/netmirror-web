import { Link } from 'react-router-dom';

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <Link
            to="/"
            className="inline-flex items-center text-gray-400 hover:text-white"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto p-4">
        <div className="space-y-8">
          {/* App Info */}
          <section>
            <h1 className="text-2xl font-bold mb-4">About NetMirror</h1>
            <p className="text-gray-300 mb-4">
              NetMirror is your ultimate movie discovery app, helping you find and explore movies from around the world. 
              From Hollywood blockbusters to Korean dramas, Hindi cinema to anime, we bring you a diverse collection of films.
            </p>
            <p className="text-gray-300">
              Version 1.0.0
            </p>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Features</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Discover trending movies</li>
              <li>Browse movies by category</li>
              <li>Search for your favorite films</li>
              <li>View detailed movie information</li>
              <li>Get personalized recommendations</li>
            </ul>
          </section>

          {/* Legal Buttons */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Legal</h2>
            <div className="space-y-3">
              <Link
                to="/privacy-policy"
                className="block w-full bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-lg transition-colors text-center"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="block w-full bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-lg transition-colors text-center"
              >
                Terms of Service
              </Link>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p className="text-gray-300 mb-3">
              Have questions or feedback? Reach out to us at:
            </p>
            <a
              href="mailto:support@netmirror.com"
              className="block w-full bg-red-600 hover:bg-red-700 text-white py-3 px-4 rounded-lg transition-colors text-center"
            >
              support@netmirror.com
            </a>
          </section>

          {/* Copyright */}
          <section className="pt-4 border-t border-gray-800">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} NetMirror. All rights reserved.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}; 