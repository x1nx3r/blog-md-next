import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaLinux,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
  SiCloudflare,
  SiHuggingface,
} from "react-icons/si";

const newsroomContacts = [
  { label: "GitHub", href: "https://github.com/x1nx3r", icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mega-nugraha/",
    icon: FaLinkedin,
  },
  {
    label: "Hugging Face",
    href: "https://huggingface.co/x1nx3r",
    icon: SiHuggingface,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/x1nx3r/",
    icon: FaInstagram,
  },
  { label: "Email", href: "mailto:monmega110@gmail.com", icon: FaEnvelope },
];

const projects = [
  {
    name: "R2 Object Thrower",
    description: "Cloud buckets wrangled with real-time analytics",
    url: "https://github.com/x1nx3r/r2-object-thrower",
  },
  {
    name: "Silly-Widgy",
    description: "Desktop ticker that refuses to conserve RAM",
    url: "https://github.com/x1nx3r/silly-widgy",
  },
  {
    name: "Laravel Docker Boilerplate",
    description: "Newspapers may fold, but containers remain afloat",
    url: "https://github.com/x1nx3r/laravel-docker-nginx-boilerplate",
  },
];

const techStack = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Python", icon: FaPython },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Docker", icon: FaDocker },
  { name: "Firebase", icon: SiFirebase },
  { name: "Cloudflare", icon: SiCloudflare },
  { name: "Linux", icon: FaLinux },
];

export default function SidebarBox() {
  return (
    <aside className="space-y-8 text-sm newspaper-text newspaper-vintage-text">
      <section className="newspaper-ink-specks">
        <span className="newspaper-section-label">My Socials</span>
        <ul className="space-y-3">
          {newsroomContacts.map(({ label, href, icon: Icon }) => (
            <li
              key={label}
              className="flex items-center justify-between border-b border-dashed border-gray-300 pb-2 last:border-none"
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-black transition-colors newspaper-smallcaps tracking-[0.3em] text-gray-700 newspaper-text"
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
                {label}
              </a>
              <span className="text-[0.65rem] uppercase tracking-[0.3em] text-gray-500 newspaper-smallcaps">
                Open
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="newspaper-ink-specks">
        <span className="newspaper-section-label">Tech Stacks</span>
        <div className="grid grid-cols-2 gap-3">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-3 px-1 py-2 text-gray-700 newspaper-text newspaper-vintage-text"
            >
              <tech.icon className="w-5 h-5" aria-hidden="true" />
              <span className="text-xs uppercase tracking-[0.2em] newspaper-smallcaps">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <div className="newspaper-ad newspaper-ink-specks">
        <div className="newspaper-ad-heading">Newsletter Syndication</div>
        <div className="newspaper-ad-divider"></div>
        <p className="text-xs uppercase tracking-widest text-gray-700 newspaper-smallcaps newspaper-text">
          Get the latest dispatches delivered straight to your telegraph.
        </p>
        <p className="text-sm mt-2 newspaper-text newspaper-vintage-text">
          Coming soon — reserve your seat on the press wire by reaching out
          through the Newsroom Directory.
        </p>
      </div>
    </aside>
  );
}
