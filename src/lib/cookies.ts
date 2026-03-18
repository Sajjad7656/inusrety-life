const getRawCookie = (cookieName: string) => {
  if (typeof document === "undefined") return null;

  const cookies = document.cookie ? document.cookie.split("; ") : [];
  const found = cookies.find((c) => c.startsWith(`${cookieName}=`));
  if (!found) return null;

  return decodeURIComponent(found.split("=").slice(1).join("="));
};

export const getCookieValue = (cookieName: string) => {
  return getRawCookie(cookieName);
};

export const setCookieValue = (
  cookieName: string,
  value: string,
  days: number
) => {
  if (typeof document === "undefined") return;

  const maxAgeSeconds = Math.floor(days * 24 * 60 * 60);
  document.cookie = `${encodeURIComponent(
    cookieName
  )}=${encodeURIComponent(value)}; path=/; max-age=${maxAgeSeconds}`;
};

export const removeCookieValue = (cookieName: string) => {
  if (typeof document === "undefined") return;

  document.cookie = `${encodeURIComponent(
    cookieName
  )}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; max-age=0`;
};

// Returns the first cookie value whose name starts with the provided prefix.
export const getCookieValueByPrefix = (prefix: string) => {
  if (typeof document === "undefined") return null;

  const cookies = document.cookie ? document.cookie.split("; ") : [];
  for (const c of cookies) {
    const [namePart] = c.split("=");
    const name = decodeURIComponent(namePart);
    if (name && name.startsWith(prefix)) {
      return decodeURIComponent(c.split("=").slice(1).join("="));
    }
  }
  return null;
};

export const removeCookiesByPrefix = (prefix: string) => {
  if (typeof document === "undefined") return;

  const cookies = document.cookie ? document.cookie.split("; ") : [];
  for (const c of cookies) {
    const [namePart] = c.split("=");
    const name = decodeURIComponent(namePart);
    if (name && name.startsWith(prefix)) {
      document.cookie = `${encodeURIComponent(name)}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; max-age=0`;
    }
  }
};

