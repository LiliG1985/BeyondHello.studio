"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// The B-only and text-only crops (logo-mark-b.png, logo-mark-text.png) were
// cut from the same original artwork as the combined logo-wordmark.png, so
// their relative size and position below are taken directly from that
// artwork's real geometry (not guessed) — this is what makes the B land
// exactly flush and level with the text once the animation finishes, instead
// of looking off next to it. Everything scales off one number, LOCKUP_H.
//
//               (within a 609 x 296 reference frame)
//   B mark:     x 0–206,   y 0–296   (full height)
//   Text mark:  x 189–609, y 96–188  (overlaps the B slightly, sits mid-height)
const REF_W = 609;
const REF_H = 296;
const B_W = 206;
const TEXT_W = 420;
const TEXT_H = 92;
const TEXT_X = 189;
const TEXT_Y = 96;

function scaledBox(lockupHeight) {
  const scale = lockupHeight / REF_H;
  return {
    width: Math.round(REF_W * scale),
    height: lockupHeight,
    bWidth: Math.round(B_W * scale),
    textWidth: Math.round(TEXT_W * scale),
    textHeight: Math.round(TEXT_H * scale),
    textLeft: Math.round(TEXT_X * scale),
    textTop: Math.round(TEXT_Y * scale),
  };
}

const MOBILE = scaledBox(168);
const DESKTOP = scaledBox(240);

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
    const closeTimer = setTimeout(() => setPhase("closing"), 3600);
    const doneTimer = setTimeout(() => setPhase("done"), 4200);

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
        {/* Reference frame: sized/positioned exactly like the real artwork,
            just scaled — mobile size by default, bigger from sm: up. */}
        <div
          className="relative sm:hidden"
          style={{ width: MOBILE.width, height: MOBILE.height }}
        >
          <BAndText box={MOBILE} />
        </div>
        <div
          className="relative hidden sm:block"
          style={{ width: DESKTOP.width, height: DESKTOP.height }}
        >
          <BAndText box={DESKTOP} />
        </div>
      </div>
    </div>
  );
}

function BAndText({ box }) {
  return (
    <>
      <div
        className="intro-shake absolute left-0 top-0"
        style={{ width: box.bWidth, height: box.height }}
      >
        <span
          className="intro-flash absolute rounded-full bg-[radial-gradient(circle,rgba(255,47,126,0.6)_0%,rgba(123,92,255,0.4)_40%,transparent_70%)] blur-2xl"
          style={{
            width: box.height * 2,
            height: box.height * 2,
            left: box.bWidth / 2 - box.height,
            top: box.height / 2 - box.height,
          }}
        />
        <Image
          src="/images/logo-mark-b.png"
          alt=""
          width={206}
          height={296}
          className="intro-b-fly intro-b-ghost intro-b-ghost-1 absolute inset-0 h-full w-full"
        />
        <Image
          src="/images/logo-mark-b.png"
          alt=""
          width={206}
          height={296}
          className="intro-b-fly intro-b-ghost intro-b-ghost-2 absolute inset-0 h-full w-full"
        />
        <Image
          src="/images/logo-mark-b.png"
          alt=""
          width={206}
          height={296}
          priority
          className="intro-b-fly intro-b-main absolute inset-0 h-full w-full"
        />
      </div>
      <Image
        src="/images/logo-mark-text.png"
        alt=""
        width={420}
        height={92}
        priority
        className="intro-text absolute"
        style={{
          left: box.textLeft,
          top: box.textTop,
          width: box.textWidth,
          height: box.textHeight,
        }}
      />
    </>
  );
}
