import { Link } from 'react-router-dom';

export const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <Link
            to="/about"
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
        <h1 className="text-2xl font-bold mb-6">Privacy Policy</h1>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
            <p className="mb-2">We collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Movie preferences and watch history</li>
              <li>Device information and usage statistics</li>
              <li>Basic account information (if you choose to create an account)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
            <p className="mb-2">We use the collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide personalized movie recommendations</li>
              <li>Improve our service and user experience</li>
              <li>Analyze usage patterns and optimize performance</li>
              <li>Communicate important updates and changes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Data Storage and Security</h2>
            <p>We implement appropriate security measures to protect your personal information. Your data is stored securely and we regularly review our security practices to ensure your information remains protected.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Firebase for authentication and data storage</li>
              <li>Analytics services to improve our app</li>
              <li>Cloud services for hosting and content delivery</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of data collection</li>
              <li>Update your preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
            <p className="mt-2 text-red-400">support@netmirror.com</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Updates to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.</p>
            <p className="mt-4 text-sm text-gray-400">Last Updated: {new Date().toLocaleDateString()}</p>
          </section>
        </div>
      </div>
    </div>
  );
}; 