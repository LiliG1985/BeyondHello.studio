const SITE_URL = "https://beyondhello.studio";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/book/success", "/admin-demo"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
