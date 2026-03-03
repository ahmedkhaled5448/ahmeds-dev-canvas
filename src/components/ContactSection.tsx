import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Mail, Linkedin, Phone } from "lucide-react";

const ContactSection = () => (
  <SectionWrapper id="contact" title="Get In Touch" subtitle="Open to Junior Developer opportunities — let's connect!">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-lg mx-auto p-8 rounded-xl bg-card border border-border text-center"
    >
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="mailto:ahmed.khaled01278@gmail.com"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:glow-primary transition-all duration-300 hover:scale-105"
        >
          <Mail size={18} /> Email Me
        </a>
        <a
          href="https://linkedin.com/in/ahmed-khaled-341464316"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:border-primary hover:text-primary transition-all duration-300 hover:scale-105"
        >
          <Linkedin size={18} /> LinkedIn
        </a>
      </div>
      <p className="mt-4 text-muted-foreground text-sm flex items-center justify-center gap-2">
        <Phone size={14} className="text-primary" /> +20 1061498951
      </p>
    </motion.div>
  </SectionWrapper>
);

export default ContactSection;
