// This is a Server Component on purpose: the page itself is a client
// component ("use client" in page.js), and Next.js only reads a `metadata`
// export from a server component. A layout one level up is the way to still
// set metadata for a client-component page.
//
// /admin-demo is a personal, non-production learning demo (see page.js for
// the full explanation) - it should never show up in search results, so this
// keeps it out even if someone links to it directly. robots.js also lists it
// under disallow as a second layer of the same thing.
export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminDemoLayout({ children }) {
  return children;
}
