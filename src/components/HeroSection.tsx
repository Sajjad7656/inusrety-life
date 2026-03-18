import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { getCookieValue } from "@/lib/cookies";
import { removeCookiesByPrefix } from "@/lib/cookies";
import { LEADID_COOKIE_PREFIX } from "@/config/medalertApiConfig";


const HeroSection = () => {
  const [zipCode, setZipCode] = useState("");
  const [zipError, setZipError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const isAgentLoggedIn = getCookieValue("agentLoggedIn") === "true";
  const urlZip = new URLSearchParams(location.search).get("zipcode");
  const HOME_CLEAR_ZIP_FLAG = "inusrety_home_clear_zip_on_url_set";

  useEffect(() => {
    if (urlZip) {
      const numericValue = urlZip.replace(/\D/g, "").slice(0, 5);

      // Logged-in first submit flow:
      // - we add ?zipcode=... to URL
      // - but you asked the zipcode input should clear
      //   after the URL parameter is added.
      if (sessionStorage.getItem(HOME_CLEAR_ZIP_FLAG) === "1") {
        sessionStorage.removeItem(HOME_CLEAR_ZIP_FLAG);
        setZipCode("");
        setZipError("");
        return;
      }

      setZipCode(numericValue);
      setZipError("");
    }
  }, [location.search, urlZip]);

  // Like medalert: on Home load, remove old LeadID cookies.
  // This keeps tokens fresh for the new zipcode flow.
  useEffect(() => {
    if (location.pathname !== "/") return;
    removeCookiesByPrefix(LEADID_COOKIE_PREFIX);
  }, [location.pathname]);

  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      {/* Background with gradient overlay - #756256 in bottom-left corner */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(to top right, #756256 0%, #09103E 40%, #09103E 100%)`
          }}
        />
        <img
          src="/images/hero-couple.png"
          alt="Happy senior couple enjoying retirement"
          className="absolute right-0 top-0 h-full w-full object-cover object-right-center"
        />
      </div>

      <div className="relative z-20 container mx-auto px-4 lg:px-8 flex items-center min-h-screen">
        {/* Left Content */}
        <div className="w-full lg:w-3/5 pr-0 lg:pr-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 animate-fade-in-up">
            <span style={{ color: '#FFDBA2' }}>Peace of Mind</span>
            <br />
            Starts with
            <span style={{ color: '#FFDBA2' }}> Planning</span>
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-lg">
            Ensure your family is financially protected from unexpected end-of-life expenses with simple, affordable coverage.
          </p>

          <div className="flex items-center gap-2 text-gray-300 text-sm mb-8">
            <Phone className="w-4 h-4" />
            1-800-895-3413 (TTY)
          </div>

          <div className="max-w-sm">
            <input
              type="text"
              placeholder="Zip Code"
              value={zipCode}
              inputMode="numeric"
              pattern="\d*"
              maxLength={5}
              onChange={(e) => {
                const numericValue = e.target.value.replace(/\D/g, "").slice(0, 5);
                setZipCode(numericValue);
                setZipError("");
              }}
              onPaste={(e) => e.preventDefault()}
              className="w-full px-4 py-3 border border-gray-600 rounded-md text-white bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent mb-3 placeholder-gray-400"
            />
            {zipError && <p className="text-sm text-red-400 mb-3">{zipError}</p>}
            <button
              type="button"
              onClick={() => {
                const cleanedZip = zipCode.replace(/\D/g, "").slice(0, 5);
                if (cleanedZip.length !== 5) {
                  setZipError("Please enter 5 digit zipcode.");
                  return;
                }

                setZipError("");

                if (isAgentLoggedIn) {
                  // First time: stay on Home, but URL MUST include ?zipcode=...
                  if (!urlZip) {
                    // Mark that after we navigate with ?zipcode=..., Home zipcode field should clear.
                    sessionStorage.setItem(HOME_CLEAR_ZIP_FLAG, "1");
                    window.history.replaceState(
                      null,
                      "",
                      `/?zipcode=${encodeURIComponent(cleanedZip)}`
                    );
                    window.location.reload();
                    return;
                  }

                  // Second time (or if URL already has zipcode): go to Quote page
                  window.setTimeout(() => {
                    navigate(
                      `/quote`
                    );
                  }, 5000);
                  return;
                }

                // Not logged in: go to Quote WITHOUT adding URL parameters
                navigate(`/quote`);
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-colors"
            >
              Submit
            </button>
          </div>
        </div>

        {/* Right Image - Reduced size */}
        <div className="hidden lg:block lg:w-1/2 absolute right-0 top-0 h-full">
          <img
            src="/images/about-couple.webp"
            alt="Couple planning their future"
            className="w-full h-full object-cover object-right-scale object-right-top"
            style={{ objectFit: 'cover', objectPosition: 'right center', width: '85%', height: '85%', margin: 'auto', position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)' }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
