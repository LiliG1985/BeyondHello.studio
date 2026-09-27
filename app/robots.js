const SITE_URL = "https://beyondhello.studio";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/book/success"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
