"use client";

import { useEffect, useState } from "react";
import { DEMO_CONTENT_KEY } from "@/lib/demoContent";

// Same idea as HeroEditableText, for the hero visual image. A saved demo
// edit stores the image as a data URL (the file's actual bytes, encoded as
// text) rather than a path, since there's no server to upload a real file
// to in this demo.
export default function HeroEditableImage({ defaultImage, alt }) {
  const [image, setImage] = useState(defaultImage);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(DEMO_CONTENT_KEY);
      if (!saved) return;
      const data = JSON.parse(saved);
      if (data.heroImage) setImage(data.heroImage);
    } catch {
      // Private browsing or a blocked storage API - just show the default.
    }
  }, []);

  return (
    <img src={image} alt={alt} className="relative w-full object-contain drop-shadow-2xl" />
  );
}
