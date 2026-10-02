import Link from "next/link";
import WorkTile from "@/components/WorkTile";
import PageBanner from "@/components/PageBanner";
import { PROJECTS } from "@/lib/projects";

export const metadata = {
  title: "Work",
  description: "Recent custom website builds from Beyond Hello, for clients across the UAE and worldwide.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <main className="pb-14">
      <PageBanner
        eyebrow="Portfolio"
        title="Recent work"
        subtitle="A look at what's shipped so far. More case studies are added as projects launch."
        image="/images/recent-work-banner.jpg"
      />

      <div className="grid gap-8 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <div key={project.name} className="flex flex-col gap-4">
            <WorkTile
              label={project.name}
              tag={project.tag}
              gradient={project.gradient}
              image={project.image}
              tall
            />
            <div className="flex flex-col gap-3 text-sm text-muted">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/60">
                  The brief
                </span>
                <p className="mt-1 leading-relaxed">{project.brief}</p>
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-paper/60">
                  The build
                </span>
                <p className="mt-1 leading-relaxed">{project.build}</p>
              </div>
            </div>
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary w-fit text-sm"
              >
                Visit site →
              </a>
            )}
          </div>
        ))}

        <Link
          href="/book"
          className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-line p-10 text-center text-muted transition-colors hover:border-pink hover:text-paper"
        >
          <span className="font-display text-2xl font-bold text-paper">+</span>
          <span>Your project could be here next</span>
        </Link>
      </div>
    </main>
  );
}
