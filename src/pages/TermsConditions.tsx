import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20 px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-navy mb-8">Terms & Conditions</h1>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-navy mb-3">Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing and using Insurety Life’s website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-3">Use License</h2>
              <p className="leading-relaxed">
                Permission is granted to temporarily download one copy of the materials on Insurety Life’s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-3">Disclaimer</h2>
              <p className="leading-relaxed">
                The materials on Insurety Life’s website are provided on an 'as is' basis. Insurety Life makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-3">Limitations</h2>
              <p className="leading-relaxed">
                In no event shall Insurety Life or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-3">Revisions and Errata</h2>
              <p className="leading-relaxed">
                The materials appearing on Insurety Life’s website could include technical, typographical, or photographic errors. Insurety Life does not warrant that any of the materials on its website are accurate, complete, or current.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-3">Governing Law</h2>
              <p className="leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Insurety Life operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-navy mb-3">Contact Information</h2>
              <p className="leading-relaxed">
                Questions about the Terms & Conditions should be sent to:
              </p>
              <p className="mt-2">
                Email: <a href="mailto:info@insuretylife.com" className="text-blue-600 hover:underline">info@insuretylife.com</a><br />
                Phone: <a href="tel:18008953413" className="text-blue-600 hover:underline">1-800-895-3413 (TTY)</a>
              </p>
            </section>

            <section>
              <p className="text-sm text-gray-500">
                These Terms & Conditions are effective as of the date of publication and may be updated from time to time.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditions;
