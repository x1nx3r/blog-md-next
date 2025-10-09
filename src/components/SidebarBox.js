import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

const projects = [
  {
    name: "R2 Object Thrower",
    description: "File uploader with real-time usage tracking",
    url: "https://github.com/x1nx3r/r2-object-thrower"
  },
  {
    name: "Silly-Widgy",
    description: "Electron task widget that uses 200MB of RAM",
    url: "https://github.com/x1nx3r/silly-widgy"
  },
  {
    name: "Laravel Docker Boilerplate",
    description: "Docker setup for Laravel projects",
    url: "https://github.com/x1nx3r/laravel-docker-nginx-boilerplate"
  }
];

const techStack = [
  "Next.js", "React", "Node.js", "Python", "TypeScript", 
  "Docker", "Firebase", "Cloudflare", "Linux"
];

export default function SidebarBox() {
  return (
    <aside className="w-full lg:w-80 lg:ml-6 space-y-4 md:space-y-6">
      {/* Social Links */}
      <div className="bg-macchiato-mantle rounded-lg p-3 md:p-4">
        <h3 className="text-base md:text-lg font-semibold text-macchiato-text mb-2 md:mb-3">
          You Can Reach Me Here:
        </h3>
        <div className="flex justify-center lg:justify-start space-x-3 md:space-x-4">
          <a
            href="https://github.com/x1nx3r"
            target="_blank"
            rel="noopener noreferrer"
            className="text-macchiato-subtext0 hover:text-macchiato-text transition-colors"
          >
            <FaGithub size={32} className="md:w-10 md:h-10" />
          </a>
          <a
            href="https://linkedin.com/in/muhammad-mega-nugraha-5a6193253"
            target="_blank"
            rel="noopener noreferrer"
            className="text-macchiato-subtext0 hover:text-macchiato-text transition-colors"
          >
            <FaLinkedin size={32} className="md:w-10 md:h-10" />
          </a>
          <a
            href="https://www.instagram.com/x1nx3r/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-macchiato-subtext0 hover:text-macchiato-text transition-colors"
          >
            <FaInstagram size={32} className="md:w-10 md:h-10" />
          </a>
          <a
            href="mailto:monmega110@gmail.com"
            className="text-macchiato-subtext0 hover:text-macchiato-text transition-colors"
          >
            <FaEnvelope size={32} className="md:w-10 md:h-10" />
          </a>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-macchiato-mantle rounded-lg p-3 md:p-4">
        <h3 className="text-base md:text-lg font-semibold text-macchiato-text mb-2 md:mb-3">
          Currently Working On
        </h3>
        <p className="text-xs md:text-sm text-macchiato-subtext0 leading-relaxed">
          Pretending to understand <strong>LLM distillation</strong>, because apparently 
          running 7GB models on my laptop to generate grocery lists is peak productivity.
        </p>
      </div>

      {/* Featured Projects */}
      <div className="bg-macchiato-mantle rounded-lg p-3 md:p-4">
        <h3 className="text-base md:text-lg font-semibold text-macchiato-text mb-2 md:mb-3">
          Featured Projects
        </h3>
        <div className="space-y-2 md:space-y-3">
          {projects.map((project, index) => (
            <div key={index} className="border-b border-macchiato-surface0 last:border-b-0 pb-2 last:pb-0">
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:bg-macchiato-surface0 rounded p-2 -m-2 transition-colors"
              >
                <h4 className="text-xs md:text-sm font-medium text-macchiato-text">
                  {project.name}
                </h4>
                <p className="text-xs text-macchiato-subtext0 mt-1">
                  {project.description}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="bg-macchiato-mantle rounded-lg p-3 md:p-4">
        <h3 className="text-base md:text-lg font-semibold text-macchiato-text mb-2 md:mb-3">
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-1 md:gap-2">
          {techStack.map((tech, index) => (
            <span 
              key={index}
              className="text-xs bg-macchiato-surface0 text-macchiato-subtext1 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

    </aside>
  );
}
