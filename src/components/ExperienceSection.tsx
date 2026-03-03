import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => (
  <SectionWrapper id="experience" title="Experience">
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative pl-8 border-l-2 border-primary/30"
      >
        <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
          <Briefcase size={12} className="text-primary-foreground" />
        </div>
        <div className="p-6 rounded-xl bg-card border border-border hover:glow-border transition-all duration-300">
          <h3 className="font-heading font-semibold text-lg">IT Support Role</h3>
          <ul className="mt-3 space-y-2 text-muted-foreground text-sm leading-relaxed">
            <li>• Provided technical support for hardware and software issues</li>
            <li>• Troubleshot system and network problems</li>
            <li>• Assisted users with technical inquiries and system usage</li>
            <li>• Ensured smooth day-to-day IT operations</li>
          </ul>
        </div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default ExperienceSection;
