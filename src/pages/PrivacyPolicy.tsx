import React from 'react';

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background pt-16 pb-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-on-background mb-6">Privacy Policy</h1>
        
        <div className="space-y-6 text-on-background/80">
          <section>
            <h2 className="text-xl font-semibold text-on-background mb-3">Information We Collect</h2>
            <p className="text-sm leading-relaxed">
              We collect information that you provide directly to us, including when you create an account,
              use our services, or communicate with us. This may include your name, email address, and
              preferences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-on-background mb-3">How We Use Your Information</h2>
            <p className="text-sm leading-relaxed">
              We use the information we collect to provide, maintain, and improve our services, to develop
              new ones, and to protect our company and our users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-on-background mb-3">Information Sharing</h2>
            <p className="text-sm leading-relaxed">
              We do not share your personal information with companies, organizations, or individuals
              outside of our company except in the following cases:
            </p>
            <ul className="list-disc list-inside text-sm leading-relaxed mt-2 space-y-1">
              <li>With your consent</li>
              <li>For legal reasons</li>
              <li>With our service providers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-on-background mb-3">Data Security</h2>
            <p className="text-sm leading-relaxed">
              We work hard to protect our users from unauthorized access to or unauthorized alteration,
              disclosure, or destruction of information we hold.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-on-background mb-3">Your Rights</h2>
            <p className="text-sm leading-relaxed">
              You have the right to access, correct, or delete your personal information. You can also
              object to our processing of your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-on-background mb-3">Contact Us</h2>
            <p className="text-sm leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <a href="mailto:privacy@netmirror.com" className="text-primary hover:underline">
                privacy@netmirror.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}; 