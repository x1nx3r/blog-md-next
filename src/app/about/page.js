import Link from "next/link";
import Header from "@/components/Header";
import NewspaperFolio from "@/components/NewspaperFolio";
import SidebarBox from "@/components/SidebarBox";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export const metadata = {
  title: "About",
  description:
    "Learn more about Mega Nugraha - developer, problem creator, and professional procrastinator. Full-stack developer specializing in Next.js, React, Node.js, Python, and modern web technologies.",
  keywords: [
    "Mega Nugraha",
    "about",
    "developer",
    "full-stack developer",
    "Next.js",
    "React",
    "Node.js",
    "Python",
    "TypeScript",
    "Docker",
    "Firebase",
    "Cloudflare",
    "Linux",
    "portfolio",
    "skills",
    "experience",
    "Indonesia developer",
  ],
  authors: [{ name: "Mega Nugraha" }],
  creator: "Mega Nugraha",
  openGraph: {
    type: "profile",
    url: "https://x1nx3r.dev/about",
    title: "About Mega Nugraha",
    description:
      "Learn more about Mega Nugraha - developer, problem creator, and professional procrastinator. Full-stack developer specializing in modern web technologies.",
    siteName: "Mega Nugraha's Blog",
    images: [
      {
        url: "/profile-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mega Nugraha - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Mega Nugraha",
    description:
      "Learn more about Mega Nugraha - developer, problem creator, and professional procrastinator.",
    images: ["/profile-image.jpg"],
    creator: "@x1nx3r",
  },
  alternates: {
    canonical: "https://x1nx3r.dev/about",
  },
};

const skills = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "PHP", "Node.js"],
  },
  {
    category: "Frameworks",
    items: ["Next.js", "React", "Laravel", "Express.js", "Electron"],
  },
  {
    category: "Tools",
    items: ["Docker", "Git", "Firebase", "Cloudflare", "Terraform"],
  },
  {
    category: "Systems",
    items: ["Linux (Fedora)", "Google Cloud", "Vercel", "Nginx"],
  },
];

const projects = [
  {
    name: "R2 Object Thrower",
    description:
      "File uploader with real-time usage tracking that prevents you from bankrupting yourself on cloud storage. Uses Cloudflare's GraphQL Analytics API because apparently everything needs to be complicated now.",
    url: "https://github.com/x1nx3r/r2-object-thrower",
    tech: ["Cloudflare R2", "GraphQL", "Analytics API"],
  },
  {
    name: "Silly-Widgy",
    description:
      "An Electron task widget that uses 200MB of RAM to display 50 characters of text. Features smooth animations that took longer to implement than the actual functionality.",
    url: "https://github.com/x1nx3r/silly-widgy",
    tech: ["Electron", "JavaScript", "CSS Animations"],
  },
  {
    name: "Laravel Docker Nginx Boilerplate",
    description:
      "Docker setup for Laravel because running PHP directly on servers is apparently too simple. Three containers to serve one web application - the modern way.",
    url: "https://github.com/x1nx3r/laravel-docker-nginx-boilerplate",
    tech: ["Docker", "Laravel", "Nginx", "PHP"],
  },
  {
    name: "Wait-A-Moment React App",
    description:
      "Loading page for when your serverless Laravel app is taking a nap. Pings sleeping applications until they remember how to respond to HTTP requests.",
    url: "https://github.com/x1nx3r/wait-a-moment",
    tech: ["React", "Serverless", "Laravel"],
  },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/x1nx3r", icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/muhammad-mega-nugraha-5a6193253",
    icon: FaLinkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/x1nx3r/",
    icon: FaInstagram,
  },
  { label: "Email", href: "mailto:monmega110@gmail.com", icon: FaEnvelope },
];

export default function AboutPage() {
  const now = new Date();
  const folioDate = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen newspaper-paper-with-bg newspaper-aged">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10 newspaper-page-curl">
        <NewspaperFolio
          publicationName="The Subpar Dev Press"
          date={folioDate}
          volume="Vol. II"
          editionNumber="About"
        />

        <section className="text-center newspaper-slight-tilt newspaper-ink-specks space-y-2">
          <Header />
        </section>

        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "About", href: null },
          ]}
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Main Content - 3 columns */}
          <main className="lg:col-span-3 space-y-10 newspaper-text">
            {/* Hero Section */}
            <section className="newspaper-ink-specks space-y-6">
              <span className="newspaper-section-label">The Editor</span>
              <h1 className="text-3xl sm:text-4xl font-bold newspaper-headline newspaper-vintage-text">
                About Mega Nugraha
              </h1>
              <p className="newspaper-deck">
                Developer, Problem Creator & Professional Procrastinator
              </p>

              <div className="newspaper-thin-separator"></div>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed newspaper-columns sm:columns-2 gap-8">
                <p className="newspaper-dropcap">
                  Hi there! I&apos;m{" "}
                  <span className="newspaper-ink-underline">Mega Nugraha</span>,
                  allegedly a developer. Realistically, I&apos;m just someone
                  who&apos;s too stubborn to quit and too caffeinated to think
                  clearly.
                </p>
                <p>
                  Currently studying Computer Science at some backwater
                  university in Indonesia while pretending to understand{" "}
                  <span className="newspaper-ink-underline">
                    LLM distillation
                  </span>
                  , because apparently running 7GB models on my laptop to
                  generate grocery lists is peak productivity.
                </p>
                <p>
                  I&apos;m a professional procrastinator who builds task
                  management apps instead of managing tasks. I run LLMs locally
                  because trusting the cloud is for people who don&apos;t read
                  privacy policies, and I believe in the power of
                  containerization to solve problems that containers created.
                </p>
                <p>
                  Most of my commits happen between 11 PM and 3 AM because
                  apparently that&apos;s when my brain decides to function. I
                  judge your cable management and think Arch is overrated while
                  NixOS is for masochists.
                </p>
              </div>
            </section>

            {/* Skills Section */}
            <section className="newspaper-ink-specks space-y-6">
              <span className="newspaper-section-label">
                s Competencies Ledger
              </span>
              <div className="newspaper-thin-separator"></div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {skills.map((skillGroup) => (
                  <div
                    key={skillGroup.category}
                    className="space-y-3 newspaper-spotlight-card"
                  >
                    <h3 className="text-xs uppercase tracking-[0.3em] text-gray-600 newspaper-smallcaps font-semibold border-b border-gray-300 pb-2">
                      {skillGroup.category}
                    </h3>
                    <ul className="space-y-1.5 text-sm leading-relaxed">
                      {skillGroup.items.map((skill) => (
                        <li key={skill} className="flex items-start gap-2">
                          <span
                            aria-hidden="true"
                            className="text-xs pt-[2px] text-gray-500"
                          >
                            ◆
                          </span>
                          <span className="newspaper-vintage-text">
                            {skill}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects Section */}
            <section className="newspaper-ink-specks space-y-6">
              <span className="newspaper-section-label">
                Selected Expeditions
              </span>
              <div className="newspaper-thin-separator"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                  <article
                    key={project.name}
                    className="newspaper-spotlight-card space-y-3 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-lg font-semibold newspaper-headline newspaper-vintage-text">
                          {project.name}
                        </h3>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 p-2 border border-gray-300 hover:border-gray-500 hover:bg-gray-100 transition-colors rounded"
                          aria-label={`View ${project.name} on GitHub`}
                        >
                          <FaGithub size={16} />
                        </a>
                      </div>
                      <p className="text-sm leading-relaxed text-gray-700 newspaper-tight">
                        {project.description}
                      </p>
                    </div>
                    <div className="newspaper-thin-separator"></div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-[0.65rem] uppercase tracking-[0.15em] text-gray-600 newspaper-smallcaps px-2 py-1 border border-gray-300 bg-white/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section className="newspaper-ink-specks space-y-6">
              <span className="newspaper-section-label">Switchboard</span>
              <div className="newspaper-thin-separator"></div>

              <div className="newspaper-spotlight-card">
                <p className="text-sm leading-relaxed mb-4 newspaper-vintage-text">
                  Reach me at{" "}
                  <span className="newspaper-ink-underline font-semibold">
                    monmega110@gmail.com
                  </span>{" "}
                  if you need someone to overcomplicate your simple problems.
                  Response times vary based on caffeine levels and moon phases.
                </p>

                <div className="newspaper-thin-separator my-4"></div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target={label !== "Email" ? "_blank" : undefined}
                      rel={
                        label !== "Email" ? "noopener noreferrer" : undefined
                      }
                      className="flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 hover:border-gray-500 hover:bg-gray-100 transition-all text-gray-700 hover:text-black"
                    >
                      <Icon size={18} aria-hidden="true" />
                      <span className="text-xs uppercase tracking-[0.2em] newspaper-smallcaps font-medium">
                        {label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          </main>

          {/* Sidebar - 1 column */}
          <aside className="lg:col-span-1 space-y-6">
            <SidebarBox />

            {/* Quick Facts Card */}
            <div className="newspaper-ad newspaper-ink-specks">
              <div className="newspaper-ad-heading">Quick Facts</div>
              <div className="newspaper-ad-divider"></div>
              <ul className="space-y-2 text-sm newspaper-text newspaper-vintage-text">
                <li className="flex justify-between border-b border-dashed border-gray-300 pb-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-600 newspaper-smallcaps">
                    Location
                  </span>
                  <span>Indonesia</span>
                </li>
                <li className="flex justify-between border-b border-dashed border-gray-300 pb-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-600 newspaper-smallcaps">
                    Status
                  </span>
                  <span>Available</span>
                </li>
                <li className="flex justify-between border-b border-dashed border-gray-300 pb-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-600 newspaper-smallcaps">
                    Coffee
                  </span>
                  <span>Mandatory</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-gray-600 newspaper-smallcaps">
                    OS
                  </span>
                  <span>Linux (Fedora)</span>
                </li>
              </ul>
            </div>

            {/* Hire Me Ad */}
            <div className="newspaper-ad newspaper-ink-specks">
              <div className="newspaper-ad-heading">Developer For Hire</div>
              <div className="newspaper-ad-divider"></div>
              <p className="text-xs uppercase tracking-widest text-gray-700 newspaper-smallcaps newspaper-text">
                Full-Stack Development • Cloud Solutions • DevOps Expertise
              </p>
              <div className="newspaper-ad-price">
                $15<span className="text-base">/hour</span>
              </div>
              <p className="text-sm newspaper-tight newspaper-text">
                <strong>Specializing in:</strong> Next.js, React, Node.js,
                Python, TypeScript, Docker, Firebase, Cloudflare & Linux
                systems.
              </p>
              <div className="newspaper-ad-divider mt-3"></div>
              <p className="text-xs newspaper-tight newspaper-text">
                Ready to tackle your next project. Contact through{" "}
                <span className="newspaper-ink-underline">GitHub</span> or
                direct mail above.
              </p>
            </div>
          </aside>
        </div>

        {/* Footer */}
        <footer className="text-center pt-4 text-xs text-gray-600 newspaper-faded newspaper-ink-specks">
          <div className="newspaper-thin-separator mb-4"></div>
          <div className="flex flex-col items-center gap-2">
            <div className="newspaper-folio-sides">
              <span className="newspaper-smallcaps">
                Printed on Recycled Electrons
              </span>
              <span className="newspaper-registration-mark"></span>
              <span className="newspaper-smallcaps">Personal Edition</span>
            </div>
            <div>
              © {now.getFullYear()} Mega Nugraha • All Rights Reserved • Built
              with Next.js & Too Much Coffee
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
