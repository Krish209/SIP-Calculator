import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-6">
          <strong>Effective Date:</strong> May 3, 2025
        </p>

        <div className="space-y-6 leading-relaxed">
          <p>
            Welcome to SipGo, an open-source investment calculator platform designed to provide you with a comprehensive overview of various investment schemes. Our platform is completely free of charge, open-source, and does not require any form of registration. This Privacy Policy explains how we handle your information when you use our platform.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>
            <p>
              We do not collect any personal information. Our service is designed to be used anonymously, and no account creation or identity verification is required. Any data you input into the calculator remains local to your device.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">2. Use of Information</h2>
            <p>
              Since no personal information is collected, we do not use any user data for analytics, marketing, or other purposes. Your information is not tracked or stored in any form.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">3. Data Sharing</h2>
            <p>
              As no information is collected, we do not share any data with third parties.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">4. Cookies and Tracking Technologies</h2>
            <p>
              Our platform does not use cookies or tracking technologies. Your activity is not monitored or stored. If this changes in the future, we will update this policy and inform users accordingly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
            <p>
              While we do not collect personal data, we maintain appropriate security practices to ensure the integrity and availability of our service. We are committed to providing a safe and secure experience for all users.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">6. User Rights</h2>
            <p>
              Since we do not collect or store any personal data, no user rights related to data access, correction, or deletion apply.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">7. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date. We encourage you to check this page from time to time to stay informed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy, feel free to contact us at:{" "}
              <a href="mailto:raju@gmail.com" className="text-blue-600">
                support@sipgo.in
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
