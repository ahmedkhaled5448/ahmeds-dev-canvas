import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project One",
    description: "A full-stack web application with modern UI and real-time features. Add your real project here.",
    tags: ["React.js", "Node.js", "MongoDB"],
  },
  {
    title: "Project Two",
    description: "Responsive dashboard with data visualization and user management. Add your real project here.",
    tags: ["React.js", "Tailwind CSS", "MySQL"],
  },
  {
    title: "Project Three",
    description: "Cloud-deployed application with CI/CD pipeline. Add your real project here.",
    tags: ["AWS", "Node.js", "Docker"],
  },
];

const ProjectsSection = () => (
  <SectionWrapper id="projects" title="Projects" subtitle="Some of my recent work">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.5 }}
          className="group rounded-xl bg-card border border-border overflow-hidden hover:glow-border transition-all duration-300"
        >
          {/* Image placeholder */}
          <div className="h-44 bg-secondary flex items-center justify-center border-b border-border">
            <span className="text-muted-foreground text-sm">Project Image</span>
          </div>

          <div className="p-6">
            <h3 className="font-heading font-semibold text-lg mb-2">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:glow-primary-sm transition-all duration-300"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Github size={14} /> GitHub
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
