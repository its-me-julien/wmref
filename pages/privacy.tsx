import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - World Mobile Referral</title>
        <meta
          name="description"
          content="Read the Privacy Policy for World Mobile Referral. Learn how we collect, use, and protect your data."
        />
        <link rel="canonical" href="https://worldmobilereferral.com/privacy/" />
      </Head>
      <main className="max-w-3xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-bold text-black">Privacy Policy</h1>
        <p className="mt-4 text-midGrey">Effective Date: 25 February 2025</p>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">1. Introduction</h2>
          <p className="mt-2 text-midGrey">
            Welcome to World Mobile Referral. We are an independent platform providing information on referral opportunities. 
            We are not affiliated with, sponsored by, or endorsed by World Mobile.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">2. Information We Collect</h2>
          <p className="mt-2 text-midGrey">
            We collect anonymized usage data automatically, including IP addresses, browser type, and usage metrics. 
            We do not collect personally identifiable information such as your name, email, or phone number.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">3. Tracking Technologies</h2>
          <p className="mt-2 text-midGrey">
            We use cookies and tracking technologies such as Google Analytics (GA4) and Cloudflare Analytics 
            to analyze anonymized traffic patterns and improve user experience. These tools do not store personally identifiable data.
            You can adjust your browser settings to manage or disable cookies.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">4. How We Use Your Data</h2>
          <p className="mt-2 text-midGrey">
            The anonymized data we collect is used for website performance analysis, security monitoring, 
            and improving our services. It is never linked to individual users.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">5. Data Sharing</h2>
          <p className="mt-2 text-midGrey">
            We do not sell or share user data with third parties. However, anonymized data may be processed 
            by analytics providers such as Google Analytics and Cloudflare to help us understand website traffic patterns.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">6. Data Retention</h2>
          <p className="mt-2 text-midGrey">
            Anonymized analytics data is stored for a limited period and is used only for improving website performance. 
            Data retention policies follow the terms set by Google Analytics (GA4) and Cloudflare.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">7. User Rights</h2>
          <p className="mt-2 text-midGrey">
            As we do not collect personal data, there is no need for users to request deletion or correction. 
            If you have any privacy concerns, you may contact us for further clarification.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">8. Data Security</h2>
          <p className="mt-2 text-midGrey">
            We implement industry-standard security measures, including Cloudflare’s security protocols, to protect against unauthorized access 
            and ensure safe browsing.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">9. Changes to This Privacy Policy</h2>
          <p className="mt-2 text-midGrey">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
            Users are encouraged to review this policy periodically.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold text-black">10. Contact Us</h2>
          <p className="mt-2 text-midGrey">
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:hello@worldmobilereferral.com" className="hover:underline">
              hello@worldmobilereferral.com
            </a>.
          </p>
        </section>
      </main>
    </>
  );
}
