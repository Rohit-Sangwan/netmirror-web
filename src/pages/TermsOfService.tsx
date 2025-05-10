import React from 'react';

export const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background pt-16 pb-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-on-background mb-6">Terms of Service</h1>
        
        <div className="space-y-6 text-on-background/80">
          <section>
            <h2 className="text-xl font-semibold text-on-background mb-3">1. Acceptance of Terms</h2>
            <p className="text-sm leading-relaxed">
              By accessing and using this application, you accept and agree to be bound by the terms and
              provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-on-background mb-3">2. Use License</h2>
            <p className="text-sm leading-relaxed">
              Permission is granted to temporarily download one copy of the application for personal,
              non-commercial transitory viewing only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-on-background mb-3">3. User Responsibilities</h2>
            <p className="text-sm leading-relaxed">
              You agree to use the application only for lawful purposes and in accordance with these Terms.
            </p>
            <ul className="list-disc list-inside text-sm leading-relaxed mt-2 space-y-1">
              <li>Not to violate any applicable laws or regulations</li>
              <li>Not to infringe the rights of any third party</li>
              <li>Not to interfere with or disrupt the application</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-on-background mb-3">4. Intellectual Property</h2>
            <p className="text-sm leading-relaxed">
              The application and its original content, features, and functionality are owned by us and are
              protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-on-background mb-3">5. Disclaimer</h2>
            <p className="text-sm leading-relaxed">
              The application is provided "as is". We make no warranties, expressed or implied, and hereby
              disclaim all warranties of merchantability and fitness for a particular purpose.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-on-background mb-3">6. Limitation of Liability</h2>
            <p className="text-sm leading-relaxed">
              In no event shall we be liable for any damages arising out of the use or inability to use
              the application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-on-background mb-3">7. Changes to Terms</h2>
            <p className="text-sm leading-relaxed">
              We reserve the right to modify or replace these Terms at any time. It is your responsibility
              to review these Terms periodically for changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-on-background mb-3">8. Contact Information</h2>
            <p className="text-sm leading-relaxed">
              If you have any questions about these Terms, please contact us at:
              <br />
              <a href="mailto:legal@netmirror.com" className="text-primary hover:underline">
                legal@netmirror.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}; 