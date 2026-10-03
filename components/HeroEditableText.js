"use client";

import { useEffect, useState } from "react";
import { DEMO_CONTENT_KEY } from "@/lib/demoContent";

// Renders the hero heading and paragraph. Until a demo edit is saved (from
// /admin-demo), this renders the exact same markup the site always has -
// the original 3-line heading with the gradient highlight on the last line -
// so nothing changes for anyone who never touches the demo. Only once an
// edit is saved does it switch to showing that edit, as a single plain
// block of text (there's no way to know where a line break or the gradient
// accent should go in text someone else typed).
export default function HeroEditableText({ defaultParagraph }) {
  const [paragraph, setParagraph] = useState(defaultParagraph);
  const [editedHeading, setEditedHeading] = useState(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(DEMO_CONTENT_KEY);
      if (!saved) return;
      const data = JSON.parse(saved);
      if (data.heroHeading) setEditedHeading(data.heroHeading);
      if (data.heroParagraph) setParagraph(data.heroParagraph);
    } catch {
      // Private browsing or a blocked storage API - just show the defaults.
    }
  }, []);

  return (
    <>
      {editedHeading ? (
        <h1 className="font-body text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          {editedHeading}
        </h1>
      ) : (
        <h1 className="font-body text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
          We build the website
          <br />
          your competitors
          <br />
          <span className="text-gradient">wish they had</span>
        </h1>
      )}
      <div className="mt-7 h-px w-10 bg-paper/30" />
      <p className="mt-7 max-w-md text-lg leading-relaxed text-muted">{paragraph}</p>
      {editedHeading && (
        <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-pink">
          ✎ Showing your saved demo edit · manage at /admin-demo
        </p>
      )}
    </>
  );
}
