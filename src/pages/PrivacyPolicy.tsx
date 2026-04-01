import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-navy mb-8">Privacy Policy</h1>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-navy mb-3">Information We Collect</h2>
              <p className="leading-relaxed">
                We collect information you provide directly to us, such as when you request a quote, contact us, or fill out a form on our website. This may include your name, phone number, email address, and mailing address.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-3">How We Use Your Information</h2>
              <p className="leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, to process requests, and to communicate with you about final expense insurance options.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-3">Information Sharing</h2>
              <p className="leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-3">Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-3">Contact Us</h2>
              <p className="leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2">
                Email: <a href="mailto:info@insuretylife.com" className="text-blue-600 hover:underline">info@insuretylife.com</a><br />
                Phone: <a href="tel:18008953413" className="text-blue-600 hover:underline">1-800-895-3413 (TTY)</a>
              </p>
            </section>

            <section>
              <p className="text-sm text-gray-500">
                This Privacy Policy is effective as of the date of publication and may be updated from time to time.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
