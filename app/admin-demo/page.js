"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  DEMO_CONTENT_KEY,
  DEFAULT_HERO_HEADING,
  DEFAULT_HERO_PARAGRAPH,
  DEFAULT_HERO_IMAGE,
} from "@/lib/demoContent";

// A personal learning demo of what a "client can edit the site themselves"
// tool would feel like - NOT a real CMS and not built to be secure.
//
// - The password below is just a soft gate so a random visitor who finds the
//   URL doesn't poke at it - it is NOT real security. Never link this page
//   from the real site's navigation, and don't treat it as safe to hand to
//   an actual client.
// - Saving only writes to this browser's localStorage, so the edit only
//   shows up for you, in this browser, on this device. A real version of
//   this - one other people's edits would actually need - requires a real
//   database behind it instead of localStorage, which is a bigger, separate
//   build.
const DEMO_PASSWORD = "beyondhello";

export default function AdminDemoPage() {
  const [unlocked, setUnlocked] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [heading, setHeading] = useState(DEFAULT_HERO_HEADING);
  const [paragraph, setParagraph] = useState(DEFAULT_HERO_PARAGRAPH);
  const [image, setImage] = useState(DEFAULT_HERO_IMAGE);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(DEMO_CONTENT_KEY);
      if (!saved) return;
      const data = JSON.parse(saved);
      if (data.heroHeading) setHeading(data.heroHeading);
      if (data.heroParagraph) setParagraph(data.heroParagraph);
      if (data.heroImage) setImage(data.heroImage);
    } catch {
      // Ignore - just start from the defaults.
    }
  }, []);

  function handleUnlock(e) {
    e.preventDefault();
    if (passwordInput === DEMO_PASSWORD) {
      setUnlocked(true);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  }

  function handleImageChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(file);
  }

  function handleSave() {
    try {
      window.localStorage.setItem(
        DEMO_CONTENT_KEY,
        JSON.stringify({ heroHeading: heading, heroParagraph: paragraph, heroImage: image })
      );
      setStatus("saved");
    } catch {
      setStatus("error");
    }
  }

  function handleReset() {
    try {
      window.localStorage.removeItem(DEMO_CONTENT_KEY);
    } catch {
      // Ignore.
    }
    setHeading(DEFAULT_HERO_HEADING);
    setParagraph(DEFAULT_HERO_PARAGRAPH);
    setImage(DEFAULT_HERO_IMAGE);
    setStatus("reset");
  }

  if (!unlocked) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center py-14">
        <form
          onSubmit={handleUnlock}
          className="w-full max-w-sm rounded-xl border border-line bg-card p-8"
        >
          <span className="eyebrow">Demo</span>
          <h1 className="mt-4 font-body text-xl font-bold uppercase tracking-tight">
            Content editor (demo)
          </h1>
          <p className="mt-3 text-sm text-muted">
            A personal demo so you can see what editing the site yourself would feel like. Not a
            real client tool.
          </p>
          <input
            type="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            placeholder="Password"
            className="mt-6 w-full rounded-md border border-line bg-ink px-4 py-3 text-sm text-paper outline-none focus:border-pink"
          />
          {passwordError && (
            <p className="mt-2 text-xs text-pink">That's not it, try again.</p>
          )}
          <button type="submit" className="btn-primary mt-5 w-full">
            Unlock
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="py-14">
      <span className="eyebrow">Demo</span>
      <h1 className="mt-4 font-body text-xl font-bold uppercase tracking-tight">
        Content editor (demo)
      </h1>
      <p className="mt-3 max-w-lg text-sm text-muted">
        Edit the homepage hero below, then save and open the homepage in this same browser to see
        it. This only saves to this browser, so it won't show up for anyone else, or on another
        device.
      </p>

      <div className="mt-8 flex max-w-xl flex-col gap-6 rounded-xl border border-line bg-card p-7">
        <div>
          <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            Hero heading
          </label>
          <input
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="mt-2 w-full rounded-md border border-line bg-ink px-4 py-3 text-sm text-paper outline-none focus:border-pink"
          />
        </div>

        <div>
          <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            Hero paragraph
          </label>
          <textarea
            value={paragraph}
            onChange={(e) => setParagraph(e.target.value)}
            rows={4}
            className="mt-2 w-full rounded-md border border-line bg-ink px-4 py-3 text-sm text-paper outline-none focus:border-pink"
          />
        </div>

        <div>
          <label className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            Hero image
          </label>
          <div className="mt-2 flex items-center gap-4">
            <img
              src={image}
              alt="Current hero visual"
              className="h-20 w-20 rounded-md border border-line object-cover"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="text-sm text-muted file:mr-4 file:rounded-md file:border file:border-line file:bg-ink file:px-3 file:py-2 file:text-xs file:font-semibold file:uppercase file:tracking-[0.2em] file:text-paper"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button type="button" onClick={handleSave} className="btn-primary">
            Save
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="rounded-md border border-line px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-paper transition-colors hover:border-pink hover:text-pink"
          >
            Reset to default
          </button>
          <Link href="/" className="text-sm font-semibold text-paper/80 hover:text-pink">
            View homepage →
          </Link>
        </div>

        {status === "saved" && (
          <p className="text-sm text-pink">
            Saved. Open the homepage in this browser to see it.
          </p>
        )}
        {status === "reset" && <p className="text-sm text-muted">Back to the default content.</p>}
        {status === "error" && (
          <p className="text-sm text-pink">
            Couldn't save - your browser may be blocking storage (private browsing does this).
          </p>
        )}
      </div>
    </main>
  );
}
