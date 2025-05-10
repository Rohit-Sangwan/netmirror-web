import { Link } from 'react-router-dom';

export const TermsOfServicePage = () => {
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
        <h1 className="text-2xl font-bold mb-6">Terms of Service</h1>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using NetMirror, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this application.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Use License</h2>
            <p className="mb-2">Permission is granted to temporarily use NetMirror for personal, non-commercial purposes. This license does not include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for commercial purposes</li>
              <li>Attempting to reverse engineer any software contained in NetMirror</li>
              <li>Removing any copyright or proprietary notations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. User Responsibilities</h2>
            <p className="mb-2">As a user of NetMirror, you agree to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate information when required</li>
              <li>Maintain the security of your account</li>
              <li>Not use the service for any illegal purposes</li>
              <li>Not interfere with the proper functioning of the application</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Content Disclaimer</h2>
            <p>NetMirror provides access to movie information and content for informational purposes only. We do not host or stream any movies directly. All content is provided for reference and discovery purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Limitation of Liability</h2>
            <p>NetMirror shall not be liable for any damages arising out of the use or inability to use the materials on our application, even if we have been notified of the possibility of such damages.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Revisions and Errata</h2>
            <p>The materials appearing on NetMirror could include technical, typographical, or photographic errors. We do not warrant that any of the materials are accurate, complete, or current.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Links</h2>
            <p>NetMirror has not reviewed all of the sites linked to its application and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by NetMirror.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Modifications</h2>
            <p>NetMirror may revise these terms of service at any time without notice. By using this application, you agree to be bound by the current version of these terms of service.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Contact Information</h2>
            <p>If you have any questions about these Terms of Service, please contact us at:</p>
            <p className="mt-2 text-red-400">support@netmirror.com</p>
          </section>

          <section>
            <p className="text-sm text-gray-400">Last Updated: {new Date().toLocaleDateString()}</p>
          </section>
        </div>
      </div>
    </div>
  );
}; 