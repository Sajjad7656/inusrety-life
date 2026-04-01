import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  MARS_SEARCH_URL,
  API_KEY_GETMEDALERTNOW,
  LEAD_IP_URL,
  LEADID_COOKIE_PREFIX,
} from "@/config/medalertApiConfig";

const Apidata = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const leadId = searchParams.get("leadid");

  const [data, setData] = useState<{
    fname: string;
    lname: string;
    zipcode: string;
    phone: string;
    email: string;
    site: string;
    playback: string;
    ip_address: string;
    location: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!leadId) {
      setError("Missing lead ID parameter.");
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const marsUrl = `${MARS_SEARCH_URL}?api_key=${API_KEY_GETMEDALERTNOW}&lead_id=${encodeURIComponent(
          leadId
        )}`;
        const marsRes = await fetch(marsUrl);
        const marsJson = await marsRes.json();

        let marsData = {
          fname: "N/A",
          lname: "N/A",
          zipcode: "N/A",
          phone: "N/A",
          email: "N/A",
          site: "N/A",
          playback: "",
        };

        let ip_from_mars = "";

        if (marsJson?.success && Array.isArray(marsJson?.result) && marsJson.result.length > 0) {
          const lead = marsJson.result[0];
          marsData = {
            fname: lead.first_name || "N/A",
            lname: lead.last_name || "N/A",
            zipcode: lead.zip_code || "N/A",
            phone: lead.phone_no || "N/A",
            email: lead.email || "N/A",
            site: lead.site || "N/A",
            playback: lead.playback || "",
          };
          ip_from_mars = lead.ip_location || "";
        }

        let selected_ip = ip_from_mars || "N/A";
        if (ip_from_mars === "" || ip_from_mars === "N/A") {
          const proxyUrl = `https://jtoken.marsswitch.com/lead-ip/?leadid=${encodeURIComponent(leadId)}`;
          try {
            const proxyRes = await fetch(proxyUrl);
            if (proxyRes.ok) {
              const proxyJson = await proxyRes.json();
              selected_ip = proxyJson.proxy_ip || "N/A";
            }
          } catch (err) {
            console.error("Error fetching fallback IP from marsswitch:", err);
          }
        }

        let locationStr = "N/A";
        if (selected_ip !== "N/A" && selected_ip !== "") {
          const geoUrl = `https://ipapi.co/${selected_ip}/json/`;
          try {
            const geoRes = await fetch(geoUrl);
            if (geoRes.ok) {
              const geoJson = await geoRes.json();
              locationStr = `${geoJson.region || "Unknown"}, ${geoJson.country_name || "Unknown"}`;
            }
          } catch (err) {
            console.error("Error fetching geolocation:", err);
          }
        }

        const finalData = {
          ...marsData,
          ip_address: selected_ip,
          location: locationStr,
        };

        setData(finalData);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch lead data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [leadId]);

  const playbackFields = useMemo(() => {
    const playback = (data?.playback || "").toUpperCase();
    return playback.split("|").map((f) => f.trim()).filter(Boolean);
  }, [data?.playback]);

  const rowColor = (key: string) => {
    const map: Record<string, string[]> = {
      fname: ["FNAME"],
      lname: ["LNAME"],
      zipcode: ["ZIPCODE", "ZIP_CODE", "ZIPCD"],
      phone: ["PHONE"],
    };

    const targets = map[key] || [];
    const matched = targets.some((t) => playbackFields.includes(t));
    return matched ? "bg-green-100" : "bg-red-100";
  };

  const handleReturnHome = () => {
    // Remove leadid_token-* cookie(s) for this flow.
    // Similar intent to medalert.
    if (typeof document !== "undefined") {
      const cookies = document.cookie ? document.cookie.split("; ") : [];
      for (const c of cookies) {
        const [namePart] = c.split("=");
        const cookieName = decodeURIComponent(namePart);
        const cookieValue = decodeURIComponent(c.split("=").slice(1).join("="));

        if (cookieName.startsWith(LEADID_COOKIE_PREFIX) && cookieValue === leadId) {
          document.cookie = `${encodeURIComponent(cookieName)}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; max-age=0`;
        }
      }
    }

    navigate("/");
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen text-lg text-gray-800">
        Loading lead data...
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600 text-lg font-semibold">
        {error}
      </div>
    );

  if (!data)
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-700 text-lg">
        No data found.
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col items-center from-blue-100 to-indigo-100 py-12 px-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full p-8">
        <h1 className="text-3xl font-bold text-indigo-700 text-center mb-8">
          insuretylife
        </h1>

        <div className="space-y-3 text-gray-800">
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Lead ID:</span>
            <span>{leadId}</span>
          </div>

          <div className={`flex justify-between border-b pb-2 ${rowColor("fname")}`}>
            <span className="font-semibold">First Name:</span>
            <span>{data.fname}</span>
          </div>

          <div className={`flex justify-between border-b pb-2 ${rowColor("lname")}`}>
            <span className="font-semibold">Last Name:</span>
            <span>{data.lname}</span>
          </div>

          <div className={`flex justify-between border-b pb-2 ${rowColor("zipcode")}`}>
            <span className="font-semibold">Zip Code:</span>
            <span>{data.zipcode}</span>
          </div>

          <div className={`flex justify-between border-b pb-2 ${rowColor("phone")}`}>
            <span className="font-semibold">Phone:</span>
            <span>{data.phone}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">IP Address:</span>
            <span>{data.ip_address}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Location:</span>
            <span>{data.location}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Source Site:</span>
            <span>{data.site}</span>
          </div>
        </div>
      </div>

      <Link
        to="/"
        onClick={handleReturnHome}
        className="mt-8 inline-block bg-indigo-700 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-800 transition"
      >
        ⬅️ Return to Home
      </Link>
    </div>
  );
};

export default Apidata;

