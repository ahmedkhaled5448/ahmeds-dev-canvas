import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Code, Server, Database, Cloud, Cpu, Wrench } from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["React.js", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "MongoDB", "SQL"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["AWS"],
  },
  {
    title: "Languages",
    icon: Cpu,
    skills: ["C++", "JavaScript"],
  },
  {
    title: "Other",
    icon: Wrench,
    skills: ["IT Support", "Full Stack Development", "Problem Solving"],
  },
];

const SkillsSection = () => (
  <SectionWrapper id="skills" title="Skills" subtitle="Technologies and tools I work with">
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="p-6 rounded-xl bg-card border border-border hover:glow-border transition-all duration-300"
        >
          <div className="flex items-center gap-3 mb-4">
            <cat.icon size={20} className="text-primary" />
            <h3 className="font-heading font-semibold">{cat.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-sm rounded-full bg-secondary text-foreground border border-border hover:border-primary hover:glow-primary-sm transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default SkillsSection;
