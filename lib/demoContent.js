// Shared by the /admin-demo control panel and the homepage hero, so both
// read and write the same localStorage key.
//
// This is a LEARNING DEMO, not a real CMS: it only shows your own saved edit
// in your own browser, on this device. A real visitor to the site, or you on
// a different device, would never see it change - that would need an actual
// database behind it, which is a separate, bigger step. This just lets you
// click through the experience of "log in, edit, save, see it on the page"
// so you can feel what it's like before deciding whether to build it for
// real for clients.
export const DEMO_CONTENT_KEY = "bh_demo_edit_v1";

// Starting values shown in the /admin-demo form before you've saved an edit
// of your own. The real homepage default heading (three lines, with the
// gradient highlight on the last one) can't be written as plain text like
// this, so it lives directly in HeroEditableText instead - this is just a
// plain-text starting point for the edit form.
export const DEFAULT_HERO_HEADING = "We build the website your competitors wish they had";
export const DEFAULT_HERO_PARAGRAPH =
  "Visitors decide whether to stay in seconds, before they read a word. We build custom, launch-ready sites that make those seconds count. Pick a package, book your slot, and we take it from there.";
export const DEFAULT_HERO_IMAGE = "/images/hero-visual.webp";
