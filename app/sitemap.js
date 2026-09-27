const SITE_URL = "https://beyondhello.studio";

// Static site map of the pages we want indexed. book/success is left out on
// purpose - it's a post-checkout confirmation page, not content to be found
// in search.
export default function sitemap() {
  const routes = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/pricing", priority: 0.9, changeFrequency: "monthly" },
    { path: "/work", priority: 0.8, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/book", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
  ];

  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
