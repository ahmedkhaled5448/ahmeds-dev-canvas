import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { GraduationCap, MapPin, Cloud } from "lucide-react";

const badges = [
  { icon: GraduationCap, label: "Very Good with Honors" },
  { icon: MapPin, label: "Cairo, Egypt" },
  { icon: Cloud, label: "AWS Certified" },
];

const AboutSection = () => (
  <SectionWrapper id="about" title="About Me">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Avatar card */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-0 rounded-2xl bg-primary/10 border border-primary/20 rotate-6" />
          <div className="absolute inset-0 rounded-2xl bg-card border border-border flex items-center justify-center">
            <span className="text-8xl">👨‍💻</span>
          </div>
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-muted-foreground leading-relaxed text-lg mb-6">
          Full-Stack Software Developer with hands-on experience in React.js and Node.js.
          AWS Certified Cloud Practitioner with a solid understanding of cloud concepts
          and backend infrastructure. Passionate about building scalable web applications
          and continuously improving technical and problem-solving skills.
        </p>
        <div className="flex flex-wrap gap-3">
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium"
            >
              <Icon size={16} className="text-primary" />
              {label}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default AboutSection;
