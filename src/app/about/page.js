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
    <div className="min-h-screen bg-macchiato-base">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-8">
        <Header />
        
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Main Content */}
          <main className="flex-1 order-2 lg:order-1 space-y-6 md:space-y-8">
            {/* Introduction */}
            <section className="bg-macchiato-mantle rounded-lg p-4 md:p-6 lg:p-8 border border-macchiato-surface0">
              <Link 
                href="/" 
                className="inline-flex items-center text-xs md:text-sm text-macchiato-subtext0 hover:text-macchiato-text transition-colors mb-4 md:mb-6"
              >
                <span className="mr-2">←</span>
                Back to home
              </Link>
              
              <h1 className="text-2xl md:text-3xl font-bold text-macchiato-text mb-4 md:mb-6">
                About Me
              </h1>
              
              <div className="prose prose-lg text-macchiato-subtext1 space-y-3 md:space-y-4">
                <p className="text-sm md:text-base leading-relaxed">
                  Hi there! I&apos;m <strong className="text-macchiato-text">Mega Nugraha</strong>, allegedly a developer. 
                  Realistically, I&apos;m just someone who&apos;s too stubborn to quit and too caffeinated to think clearly.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  Currently studying Computer Science at some backwater university in Indonesia while pretending 
                  to understand <strong className="text-macchiato-blue">LLM distillation</strong>, because apparently 
                  running 7GB models on my laptop to generate grocery lists is peak productivity.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  I&apos;m a professional procrastinator who builds task management apps instead of managing tasks. 
                  I run LLMs locally because trusting the cloud is for people who don&apos;t read privacy policies, 
                  and I believe in the power of containerization to solve problems that containers created.
                </p>
                
                <p className="text-sm md:text-base leading-relaxed">
                  Most of my commits happen between 11 PM and 3 AM because apparently that&apos;s when my brain 
                  decides to function. I judge your cable management and think Arch is overrated while 
                  NixOS is for masochists.
                </p>
              </div>
            </section>

            {/* Skills */}
            <section className="bg-macchiato-mantle rounded-lg p-4 md:p-6 lg:p-8 border border-macchiato-surface0">
              <h2 className="text-xl md:text-2xl font-bold text-macchiato-text mb-4 md:mb-6">
                Skills & Technologies
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h3 className="text-base md:text-lg font-semibold text-macchiato-text mb-2 md:mb-3">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="text-xs bg-macchiato-surface0 text-macchiato-subtext1 px-2 md:px-3 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section className="bg-macchiato-mantle rounded-lg p-4 md:p-6 lg:p-8 border border-macchiato-surface0">
              <h2 className="text-xl md:text-2xl font-bold text-macchiato-text mb-4 md:mb-6">
                Things I&apos;ve Built (and somehow work)
              </h2>
              
              <div className="space-y-4 md:space-y-6">
                {projects.map((project, index) => (
                  <div key={index} className="border-b border-macchiato-surface0 last:border-b-0 pb-4 md:pb-6 last:pb-0">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 md:mb-3 gap-2">
                      <h3 className="text-base md:text-lg font-semibold text-macchiato-text">
                        {project.name}
                      </h3>
                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-macchiato-blue hover:text-macchiato-sapphire transition-colors w-fit"
                      >
                        <FaGithub size={20} />
                      </a>
                    </div>
                    
                    <p className="text-sm md:text-base text-macchiato-subtext1 mb-2 md:mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs bg-macchiato-surface0 text-macchiato-subtext0 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section className="bg-macchiato-mantle rounded-lg p-4 md:p-6 lg:p-8 border border-macchiato-surface0">
              <h2 className="text-xl md:text-2xl font-bold text-macchiato-text mb-4 md:mb-6">
                Let&apos;s Connect
              </h2>
              
              <p className="text-sm md:text-base text-macchiato-subtext1 mb-4 md:mb-6">
                Reach me at <strong>monmega110@gmail.com</strong> if you need someone to overcomplicate your simple problems.
              </p>
              
              <div className="flex flex-wrap gap-4 md:gap-6">
                <a
                  href="https://github.com/x1nx3r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-macchiato-subtext0 hover:text-macchiato-text transition-colors"
                >
                  <FaGithub size={20} />
                  <span className="text-sm md:text-base">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/muhammad-mega-nugraha-5a6193253"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-macchiato-subtext0 hover:text-macchiato-text transition-colors"
                >
                  <FaLinkedin size={20} />
                  <span className="text-sm md:text-base">LinkedIn</span>
                </a>
                <a
                  href="https://www.instagram.com/x1nx3r/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-macchiato-subtext0 hover:text-macchiato-text transition-colors"
                >
                  <FaInstagram size={20} />
                  <span className="text-sm md:text-base">Instagram</span>
                </a>
                <a
                  href="mailto:monmega110@gmail.com"
                  className="flex items-center space-x-2 text-macchiato-subtext0 hover:text-macchiato-text transition-colors"
                >
                  <FaEnvelope size={20} />
                  <span className="text-sm md:text-base">Email</span>
                </a>
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <div className="lg:w-80 order-1 lg:order-2">
            <SidebarBox />
          </div>
        </div>
      </div>
    </div>
  );
}