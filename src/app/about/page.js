import Link from "next/link";
import Header from "@/components/Header";
import SidebarBox from "@/components/SidebarBox";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export const metadata = {
  title: "About | Mega Nugraha",
  description: "Learn more about Mega Nugraha - developer, problem creator, and professional procrastinator.",
};

const skills = [
  { category: "Languages", items: ["Python", "TypeScript", "JavaScript", "PHP", "Node.js"] },
  { category: "Frameworks", items: ["Next.js", "React", "Laravel", "Express.js", "Electron"] },
  { category: "Tools", items: ["Docker", "Git", "Firebase", "Cloudflare", "Terraform"] },
  { category: "Systems", items: ["Linux (Fedora)", "Google Cloud", "Vercel", "Nginx"] },
];

const projects = [
  {
    name: "R2 Object Thrower",
    description: "File uploader with real-time usage tracking that prevents you from bankrupting yourself on cloud storage. Uses Cloudflare's GraphQL Analytics API because apparently everything needs to be complicated now.",
    url: "https://github.com/x1nx3r/r2-object-thrower",
    tech: ["Cloudflare R2", "GraphQL", "Analytics API"]
  },
  {
    name: "Silly-Widgy",
    description: "An Electron task widget that uses 200MB of RAM to display 50 characters of text. Features smooth animations that took longer to implement than the actual functionality.",
    url: "https://github.com/x1nx3r/silly-widgy",
    tech: ["Electron", "JavaScript", "CSS Animations"]
  },
  {
    name: "Laravel Docker Nginx Boilerplate",
    description: "Docker setup for Laravel because running PHP directly on servers is apparently too simple. Three containers to serve one web application - the modern way.",
    url: "https://github.com/x1nx3r/laravel-docker-nginx-boilerplate",
    tech: ["Docker", "Laravel", "Nginx", "PHP"]
  },
  {
    name: "Wait-A-Moment React App",
    description: "Loading page for when your serverless Laravel app is taking a nap. Pings sleeping applications until they remember how to respond to HTTP requests.",
    url: "https://github.com/x1nx3r/wait-a-moment",
    tech: ["React", "Serverless", "Laravel"]
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen newspaper-paper-with-bg newspaper-aged">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-10 newspaper-page-curl">
        <div className="newspaper-folio newspaper-ink-specks">
          <div className="newspaper-folio-sides">
            <span className="newspaper-smallcaps">Mega Nugraha Press</span>
            <span className="newspaper-registration-mark"></span>
          </div>
          <span className="newspaper-smallcaps">Staff Dossier</span>
          <div className="newspaper-folio-sides">
            <span className="newspaper-smallcaps">Vol. II</span>
            <span className="newspaper-dateline">Jakarta Bureau</span>
            <span className="newspaper-smallcaps">Compiled Nightly</span>
          </div>
        </div>

        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-10">
          <main className="space-y-10 newspaper-text">
            <section className="newspaper-ink-specks space-y-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-gray-600 newspaper-smallcaps hover:text-black transition-colors"
              >
                <span aria-hidden="true">←</span>
                Return to front page
              </Link>

              <div className="newspaper-separator"></div>

              <span className="newspaper-section-label">The Editor</span>
              <h1 className="text-3xl sm:text-4xl font-bold newspaper-headline newspaper-vintage-text">
                About Mega Nugraha
              </h1>

              <div className="newspaper-thin-separator"></div>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Hi there! I&apos;m <span className="newspaper-ink-underline">Mega Nugraha</span>, allegedly a developer.
                  Realistically, I&apos;m just someone who&apos;s too stubborn to quit and too caffeinated to think clearly.
                </p>
                <p>
                  Currently studying Computer Science at some backwater university in Indonesia while pretending to
                  understand <span className="newspaper-ink-underline">LLM distillation</span>, because apparently running
                  7GB models on my laptop to generate grocery lists is peak productivity.
                </p>
                <p>
                  I&apos;m a professional procrastinator who builds task management apps instead of managing tasks. I run
                  LLMs locally because trusting the cloud is for people who don&apos;t read privacy policies, and I believe
                  in the power of containerization to solve problems that containers created.
                </p>
                <p>
                  Most of my commits happen between 11 PM and 3 AM because apparently that&apos;s when my brain decides to
                  function. I judge your cable management and think Arch is overrated while NixOS is for masochists.
                </p>
              </div>
            </section>

            <section className="newspaper-ink-specks space-y-6">
              <span className="newspaper-section-label">Competencies Ledger</span>
              <h2 className="text-2xl font-semibold newspaper-vintage-text">Skills & Technologies</h2>
              <div className="newspaper-thin-separator"></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skills.map((skillGroup, index) => (
                  <div key={skillGroup.category} className="space-y-2">
                    <h3 className="text-xs uppercase tracking-[0.3em] text-gray-600 newspaper-smallcaps">
                      {skillGroup.category}
                    </h3>
                    <ul className="space-y-1 text-sm leading-relaxed">
                      {skillGroup.items.map((skill) => (
                        <li key={skill} className="flex items-start gap-2">
                          <span aria-hidden="true" className="text-xs pt-[2px]">•</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="newspaper-ink-specks space-y-6">
              <span className="newspaper-section-label">Selected Expeditions</span>
              <h2 className="text-2xl font-semibold newspaper-vintage-text">Things I&apos;ve Built (and somehow work)</h2>
              <div className="newspaper-thin-separator"></div>
              <div className="space-y-6">
                {projects.map((project) => (
                  <article
                    key={project.name}
                    className="space-y-3 border-b border-black/20 pb-6 last:border-none last:pb-0"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <h3 className="text-lg font-semibold newspaper-vintage-text">{project.name}</h3>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-gray-600 newspaper-smallcaps hover:text-black transition-colors"
                      >
                        View dossier
                        <FaGithub size={18} />
                      </a>
                    </div>
                    <p className="text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-gray-600 newspaper-smallcaps">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 border border-gray-300 bg-white/60">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="newspaper-ink-specks space-y-6">
              <span className="newspaper-section-label">Switchboard</span>
              <h2 className="text-2xl font-semibold newspaper-vintage-text">Let&apos;s Connect</h2>
              <div className="newspaper-thin-separator"></div>
              <p className="text-sm leading-relaxed">
                Reach me at <span className="newspaper-ink-underline">monmega110@gmail.com</span> if you need someone
                to overcomplicate your simple problems.
              </p>
              <div className="flex flex-wrap gap-6 text-sm uppercase tracking-[0.25em] text-gray-600 newspaper-smallcaps">
                <a
                  href="https://github.com/x1nx3r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-black transition-colors"
                >
                  <FaGithub size={18} />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/muhammad-mega-nugraha-5a6193253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-black transition-colors"
                >
                  <FaLinkedin size={18} />
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/x1nx3r/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-black transition-colors"
                >
                  <FaInstagram size={18} />
                  Instagram
                </a>
                <a
                  href="mailto:monmega110@gmail.com"
                  className="flex items-center gap-2 hover:text-black transition-colors"
                >
                  <FaEnvelope size={18} />
                  Email
                </a>
              </div>
            </section>
          </main>

          <aside className="space-y-6 newspaper-text">
            <SidebarBox />
          </aside>
        </div>
      </div>
    </div>
  );
}