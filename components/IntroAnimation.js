"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// intro-swoosh-layer.webp and intro-text-layer.webp are two clean cutouts from
// the SAME original artwork/canvas (2778 x 1535), so they land in exactly the
// same spot automatically as long as both are displayed at the same size,
// stacked in the same box — no manual alignment math needed like the old
// B-monogram version required.
const REF_W = 1688;
const REF_H = 932;

function scaledBox(height) {
  return { width: Math.round((REF_W / REF_H) * height), height };
}

const MOBILE = scaledBox(180);
const DESKTOP = scaledBox(260);

export default function IntroAnimation() {
  const [phase, setPhase] = useState("hidden"); // hidden | playing | closing | done

  useEffect(() => {
    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem("bh-intro-seen") === "1";
    } catch {
      alreadySeen = false;
    }

    if (alreadySeen) {
      setPhase("done");
      return;
    }

    try {
      sessionStorage.setItem("bh-intro-seen", "1");
    } catch {
      // ignore, worst case the animation plays again
    }

    setPhase("playing");
    // Flight + landing animation runs 3.6s (see globals.css), then it holds
    // fully still for 3s so the wordmark is actually readable, then fades.
    const closeTimer = setTimeout(() => setPhase("closing"), 6600);
    const doneTimer = setTimeout(() => setPhase("done"), 7100);

    return () => {
      clearTimeout(closeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] overflow-hidden bg-ink transition-opacity duration-500 ${
        phase === "closing" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <span className="intro-whiteflash absolute inset-0 bg-white" />
      <div className="flex h-full w-full items-center justify-center">
        <div className="relative sm:hidden" style={{ width: MOBILE.width, height: MOBILE.height }}>
          <Lockup box={MOBILE} />
        </div>
        <div className="relative hidden sm:block" style={{ width: DESKTOP.width, height: DESKTOP.height }}>
          <Lockup box={DESKTOP} />
        </div>
      </div>
    </div>
  );
}

// The swoosh is cut into 3 pieces (intro-swoosh-piece-a/b/c.webp) that overlay
// back into the exact original graphic with no gaps or overlap. Each piece
// flies its own path (see .intro-swoosh-path-a/b/c in globals.css) so they
// visibly separate and scatter in different directions, then all land back
// in place together for the wordmark to complete the logo on top.
const PIECES = ["a", "b", "c"];

function Lockup({ box }) {
  return (
    <>
      <span
        className="intro-flash absolute rounded-full bg-[radial-gradient(circle,rgba(255,47,126,0.6)_0%,rgba(123,92,255,0.4)_40%,transparent_70%)] blur-2xl"
        style={{
          width: box.height * 1.6,
          height: box.height * 1.6,
          left: box.width / 2 - (box.height * 1.6) / 2,
          top: box.height / 2 - (box.height * 1.6) / 2,
        }}
      />
      {PIECES.map((p) => (
        <span key={p}>
          {/* Trailing ghost copies of this piece, same flight path, time-offset and blurred */}
          <Image
            src={`/images/intro-swoosh-piece-${p}.webp`}
            alt=""
            width={REF_W}
            height={REF_H}
            className={`intro-swoosh-path-${p} intro-swoosh-ghost intro-swoosh-ghost-1 absolute inset-0 h-full w-full`}
          />
          <Image
            src={`/images/intro-swoosh-piece-${p}.webp`}
            alt=""
            width={REF_W}
            height={REF_H}
            className={`intro-swoosh-path-${p} intro-swoosh-ghost intro-swoosh-ghost-2 absolute inset-0 h-full w-full`}
          />
          <Image
            src={`/images/intro-swoosh-piece-${p}.webp`}
            alt=""
            width={REF_W}
            height={REF_H}
            priority
            className={`intro-swoosh-path-${p} intro-swoosh-main absolute inset-0 h-full w-full`}
          />
        </span>
      ))}
      <Image
        src="/images/intro-text-layer.webp"
        alt="Beyond Hello Studio"
        width={REF_W}
        height={REF_H}
        priority
        className="intro-text absolute inset-0 h-full w-full"
      />
    </>
  );
}
