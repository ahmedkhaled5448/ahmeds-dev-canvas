import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { GraduationCap, Calendar, Award } from "lucide-react";

const EducationSection = () => (
  <SectionWrapper id="education" title="Education">
    <div className="max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-6 rounded-xl bg-card border border-border hover:glow-border transition-all duration-300"
      >
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-primary/10 text-primary">
            <GraduationCap size={28} />
          </div>
          <div>
            <h3 className="font-heading font-semibold text-lg">Obour Higher Institutes</h3>
            <p className="text-foreground mt-1">
              Bachelor's Degree in Management Information Systems
            </p>
            <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-primary" /> 2020–2024
              </span>
              <span className="flex items-center gap-1.5">
                <Award size={14} className="text-primary" /> Very Good with Honors
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default EducationSection;
