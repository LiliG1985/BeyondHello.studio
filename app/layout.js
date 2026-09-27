import { Manrope } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import IntroAnimation from "@/components/IntroAnimation";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "Beyond Hello · Websites built for what's next",
  description:
    "Custom-built, launch-ready websites for founders and brands who want their first hello to land. Book your build online, worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="bg-ink text-paper font-body antialiased">
        <IntroAnimation />
        <div className="mx-auto max-w-6xl px-5">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
