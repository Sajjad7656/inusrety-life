import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LEADID_COOKIE_PREFIX } from "@/config/medalertApiConfig";
import { getCookieValueByPrefix } from "@/lib/cookies";

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    const leadId = getCookieValueByPrefix(LEADID_COOKIE_PREFIX);
    if (!leadId) return;

    const timer = window.setTimeout(() => {
      navigate(`/apidata?leadid=${encodeURIComponent(leadId)}`, {
        replace: true,
      });
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-4">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #151940 0%, #7B6658 100%)",
        }}
      />
      <div className="relative z-10 text-center text-white max-w-2xl mx-auto">
        <div className="mx-auto mb-8 w-32 h-32 rounded-full bg-[#FFDBA2] flex items-center justify-center">
          <svg
            className="w-14 h-14 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Thank You
        </h1>
        <p className="text-sm md:text-base font-semibold mb-4">
          We have received your submission and will get back to you.
        </p>
        <p className="text-xs md:text-sm mb-6 max-w-xl mx-auto">
          If you have any urgent questions or would like to get further
          information, please don’t hesitate to call us. Our customer service
          team is available to assist you.
        </p>

        <a
          href="tel:+18008953413"
          className="block text-lg md:text-xl font-extrabold text-[#FFDBA2] mb-2"
        >
          +1-800-895-3413
        </a>
        <p className="text-[11px] md:text-xs mb-8">
          Hours of Operation: 8 AM to 7 PM EST
        </p>

        {/* <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition-colors"
        >
          ⬅️ Return to Home
        </Link> */}
      </div>
    </div>
  );
};

export default ThankYou;

