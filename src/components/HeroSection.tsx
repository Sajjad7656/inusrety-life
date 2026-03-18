import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { getCookieValue, removeCookiesByPrefix } from "@/lib/cookies";
import { LEADID_COOKIE_PREFIX } from "@/config/medalertApiConfig";

const HeroSection = () => {
  const [zipCode, setZipCode] = useState("");
  const [zipError, setZipError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const isAgentLoggedIn = getCookieValue("agentLoggedIn") === "true";
  const urlZip = new URLSearchParams(location.search).get("zipcode");
  const HOME_CLEAR_ZIP_FLAG = "inusrety_home_clear_zip_on_url_set";

  // Sync zip input with URL param (agent flow)
  useEffect(() => {
    if (!urlZip) return;

    const numericValue = urlZip.replace(/\D/g, "").slice(0, 5);

    // After first submit: URL gets ?zipcode=... but input should clear
    if (sessionStorage.getItem(HOME_CLEAR_ZIP_FLAG) === "1") {
      sessionStorage.removeItem(HOME_CLEAR_ZIP_FLAG);
      setZipCode("");
      setZipError("");
      return;
    }

    setZipCode(numericValue);
    setZipError("");
  }, [location.search, urlZip]);

  // On Home load: remove old LeadID cookies to keep tokens fresh
  useEffect(() => {
    if (location.pathname !== "/") return;
    removeCookiesByPrefix(LEADID_COOKIE_PREFIX);
  }, [location.pathname]);

  const handleSubmit = () => {
    const cleanedZip = zipCode.replace(/\D/g, "").slice(0, 5);

    if (cleanedZip.length !== 5) {
      setZipError("Please enter 5 digit zipcode.");
      return;
    }

    setZipError("");

    if (isAgentLoggedIn) {
      // First submit: stay on Home but set ?zipcode=... in URL
      if (!urlZip) {
        sessionStorage.setItem(HOME_CLEAR_ZIP_FLAG, "1");
        window.history.replaceState(
          null,
          "",
          `/?zipcode=${encodeURIComponent(cleanedZip)}`
        );
        window.location.reload();
        return;
      }

      // Second submit: wait 5 seconds then go to Quote with zipcode prefill
      window.setTimeout(() => {
        navigate(`/quote`);
      }, 5000);
      return;
    }

    // Not logged in: go to Quote without URL params
    navigate(`/quote`);
  };

  return (
    <section className="pt-20" style={{ backgroundColor: "#09103E" }}>
      <div className="grid min-h-[700px] grid-cols-1 lg:grid-cols-2 gap-0" style={{ backgroundColor: "#09103E" }}>
        <div
          className="flex items-center"
          style={{ background: "linear-gradient(135deg, #09103E 0%, #09103E 70%, #756256 100%)" }}
        >
          <div className="w-full px-6 py-16 sm:px-10 lg:px-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
              <span style={{ color: "#FFDBA2" }}>Peace of Mind</span>
              <br />
              <span className="text-white">Starts with</span>
              <br />
              <span style={{ color: "#FFDBA2" }}>Planning</span>
            </h1>

            <p className="text-white/80 text-lg mb-6 max-w-lg">
              Ensure your family is financially protected from unexpected end-of-life expenses with simple, affordable coverage.
            </p>

            <div className="flex items-center gap-2 text-white/90 text-sm mb-6">
              <Phone className="w-4 h-4" style={{ color: "#FFB700" }} />
              1-800-895-3413 (TTY)
            </div>

            <div className="max-w-xl">
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
                className="w-full px-4 py-3 rounded-md text-gray-900 bg-white border border-white/30 outline-none mb-3"
              />
              {zipError && (
                <p className="mt-2 text-sm text-red-400 mb-3">{zipError}</p>
              )}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="relative hidden lg:block" style={{ backgroundColor: "#09103E" }}>
          <img
            src="/images/about-couple.webp"
            alt="Happy senior couple enjoying retirement"
            className="absolute inset-0 h-full w-full object-cover object-right"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
