import { useState } from "react";
import { Phone, Mail, ArrowLeft } from "lucide-react";

const QuotePage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    zipCode: '',
    phone: '',
    agreeToTCPA: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, #151940 0%, #7B6658 100%)`
        }}
      />
      
      {/* Header */}
      <header className="relative z-10 shadow-sm" style={{ backgroundColor: '#09103E' }}>
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <img src="/images/logo.png" alt="Insurety Life" className="h-10" />
            </a>
            <a 
              href="/" 
              className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Quote Form Section */}
      <section className="relative z-10 py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Centered Heading */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ color: '#FFEAC9' }}>
                Get A Quote
              </h1>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white">
                <h1 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#FFEAC9' }}>
                  Get the Guidance You Need
                </h1>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Ask for plan comparisons or just help for final expense coverage, our licensed insurance agent will get in touch with you.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: '#FFB700' }} />
                    <div>
                      <h3 className="font-semibold text-lg mb-1" style={{ color: '#FFEAC9' }}>Dial the Number</h3>
                      <p className="text-gray-300">1-800-895-3413 (TTY)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: '#FFB700' }} />
                    <div>
                      <h3 className="font-semibold text-lg mb-1" style={{ color: '#FFEAC9' }}>Drop an Email</h3>
                      <p className="text-gray-300">info@insuretylife.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <div className="bg-white rounded-lg shadow-lg p-6 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* First Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  {/* Zip Code */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Zip Code *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  {/* TCPA Agreement */}
                  <div className="pt-4">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreeToTCPA"
                        checked={formData.agreeToTCPA}
                        onChange={handleInputChange}
                        className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        required
                      />
                      <span className="text-sm text-gray-600 leading-relaxed">
                        By checking this box, you represent you are 18+ years of age and agree to the Privacy Policy and Terms and Conditions. By selecting the above check box you agree by your electronic signature that you give written consent to be contacted by insuretylife.com and the licensed insurance agents working under that name by phone, email, and text/SMS to the home or mobile number(s) I provided even if my provided number is on a national or state Do Not Call Registry. This is a solicitation for insurance. In some cases, pre-recorded messages and automated technology may be used to contact you for marketing purposes. Carrier data rates may apply. This consent is not required as a condition to purchase services or products. Consent can be revoked at any time for any reason through any reasonable means. Submitting false information may subject you to liability.
                      </span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors text-lg"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuotePage;
