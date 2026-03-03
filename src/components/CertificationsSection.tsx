import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Cloud } from "lucide-react";

const CertificationsSection = () => (
  <SectionWrapper id="certifications" title="Certifications">
    <div className="max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-6 rounded-xl bg-card border border-primary/30 glow-primary text-center"
      >
        <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
          <Cloud size={36} className="text-primary animate-float" />
        </div>
        <h3 className="font-heading font-semibold text-lg">
          AWS Certified Cloud Practitioner
        </h3>
        <p className="text-muted-foreground text-sm mt-2">
          Amazon Web Services
        </p>
      </motion.div>
    </div>
  </SectionWrapper>
);

export default CertificationsSection;
