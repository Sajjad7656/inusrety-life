import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { Phone, Mail, ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { getCookieValueByPrefix } from "@/lib/cookies";
import {
  API_KEY_GETMEDALERTNOW,
  API_KEY_FORM,
  LEAD_IP_URL,
  LEADID_COOKIE_PREFIX,
  MARS_SUBMIT_URL,
} from "@/config/medalertApiConfig";

const QuotePage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    zipCode: '',
    phone: '',
    agreeToTCPA: false
  });

  const navigate = useNavigate();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If we entered this page with ?zipcode=..., we want to prefill the form.
  // After we clean the URL (remove ?zipcode=...), we MUST NOT clear the input.
  // When user opens "/quote" fresh (no param), this ref will be false and we clear.
  const prefilledFromQueryRef = useRef(false);
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    zipCode: "",
    phone: "",
    agreeToTCPA: "",
  });


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (name === "zipCode" && type !== "checkbox") {
      const numericValue = value.replace(/\D/g, "").slice(0, 5);
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
      setErrors((prev) => ({ ...prev, zipCode: "" }));
      return;
    }

    if (name === "phone" && type !== "checkbox") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
      setErrors((prev) => ({ ...prev, phone: "" }));
      return;
    }

    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
      if (name === "agreeToTCPA") {
        setErrors((prev) => ({ ...prev, agreeToTCPA: "" }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "firstName") {
      setErrors((prev) => ({ ...prev, firstName: "" }));
    }

    if (name === "lastName") {
      setErrors((prev) => ({ ...prev, lastName: "" }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const cleanedZip = formData.zipCode.replace(/\D/g, "").slice(0, 5);
      const cleanedPhone = formData.phone.replace(/\D/g, "").slice(0, 10);

      const firstName = formData.firstName.trim();
      const lastName = formData.lastName.trim();
      const agreeToTCPA = formData.agreeToTCPA;

      const nextErrors = {
        firstName: !firstName ? "Please fill all fields first name." : "",
        lastName: !lastName ? "Please fill all fields last name." : "",
        zipCode: cleanedZip.length !== 5 ? "Please enter 5 digit zipcode." : "",
        phone: cleanedPhone.length !== 10 ? "Please enter 10 digit phone number." : "",
        agreeToTCPA: agreeToTCPA ? "" : "Please check the consent box.",
      };

      const hasError =
        nextErrors.firstName ||
        nextErrors.lastName ||
        nextErrors.zipCode ||
        nextErrors.phone ||
        nextErrors.agreeToTCPA;

      setErrors(nextErrors);
      if (hasError) return;

      const isUuidToken = (value: string) =>
        /^[A-F0-9]{8}(-[A-F0-9]{4}){3}-[A-F0-9]{12}$/i.test(value);

      const sleep = (ms: number) =>
        new Promise((resolve) => window.setTimeout(resolve, ms));

      const waitForLeadIdCookie = async (timeoutMs = 12000) => {
        const start = Date.now();
        while (Date.now() - start < timeoutMs) {
          const token = getCookieValueByPrefix(LEADID_COOKIE_PREFIX);
          if (token && isUuidToken(token)) return token;
          await sleep(400);
        }
        return null;
      };

      const leadId = await waitForLeadIdCookie();
      if (!leadId) {
        alert("Could not generate Lead ID. Please try again.");
        return;
      }

      // Clean URL after LeadID cookie is ready (keep zipcode in input).
      try {
        const url = new URL(window.location.href);
        url.searchParams.delete("zipcode");
        window.history.replaceState({}, "", `${url.pathname}${url.search}`);
      } catch {
        // ignore cleanup errors
      }

      let ip_location = "";
      try {
        const ipResponse = await fetch(
          `${LEAD_IP_URL}?leadid=${encodeURIComponent(leadId)}`
        );
        if (ipResponse.ok) {
          const ipData = await ipResponse.json();
          ip_location = ipData?.proxy_ip || "";
        }
      } catch {
        // If IP lookup fails, submit without ip_location.
        ip_location = "";
      }

      const marsData = {
        first_name: formData.firstName.trim(),
        last_name: formData.lastName.trim(),
        zip_code: cleanedZip,
        phone_no: cleanedPhone,
        email: "",
        ip_location,
        lead_id: leadId,
        site: window.location.hostname,
        api_key: API_KEY_FORM,
      };

      const queryString = new URLSearchParams(marsData as Record<string, string>).toString();
      const response = await fetch(`${MARS_SUBMIT_URL}?${queryString}`);
      if (!response.ok) {
        throw new Error(`Submit failed with status ${response.status}`);
      }

      // First show a simple Thank You page (no URL params).
      navigate(`/thank-you`);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
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
                      onPaste={(e) => e.preventDefault()}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-500 mt-1">{errors.firstName}</p>
                    )}
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
                      onPaste={(e) => e.preventDefault()}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-500 mt-1">{errors.lastName}</p>
                    )}
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
                      onPaste={(e) => e.preventDefault()}
                      inputMode="numeric"
                      pattern="\d*"
                      maxLength={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                    {errors.zipCode && (
                      <p className="text-sm text-red-500 mt-1">{errors.zipCode}</p>
                    )}
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
                      onPaste={(e) => e.preventDefault()}
                      inputMode="numeric"
                      pattern="\d*"
                      maxLength={10}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                    )}
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
                    {errors.agreeToTCPA && (
                      <p className="text-sm text-red-500 mt-2">{errors.agreeToTCPA}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors text-lg"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Request"}
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
