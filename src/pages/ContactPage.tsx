import { Mail, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main
        className="pt-20"
        style={{
          background: "linear-gradient(135deg, #09103E 0%, #09103E 70%, #756256 100%)",
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight mb-6">
                <span style={{ color: "#FFDBA2" }}>Let's Talk</span>
                <br />
                <span className="text-white">Peace of Mind</span>
              </h1>

              <p className="text-white/70 max-w-lg mb-10">
                Striving to be your dedicated support, our team is available to handle your concerns and provide the information you need.
              </p>

              <div className="space-y-4">
                <a href="tel:18008953413" className="inline-flex items-center gap-3 text-white/90">
                  <Phone className="h-5 w-5" style={{ color: "#1D4ED8" }} />
                  <span className="text-sm font-medium">1-800-895-3413 (TTY)</span>
                </a>
                <div>
                  <a href="mailto:info@insuretylife.com" className="inline-flex items-center gap-3 text-white/90">
                    <Mail className="h-5 w-5" style={{ color: "#1D4ED8" }} />
                    <span className="text-sm font-medium">info@insuretylife.com</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:justify-self-end w-full">
              <div className="bg-white rounded-2xl shadow-xl p-10 md:p-12 w-full max-w-lg mx-auto">
                <h2 className="font-display text-2xl font-bold text-navy mb-6">Get in Touch</h2>

                <form className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      required
                      className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Phone"
                      required
                      className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="Email(optional)"
                      className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1">Message</label>
                    <textarea
                      placeholder="Write Message here..."
                      rows={5}
                      className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-blue-600"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-md bg-blue-600 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
