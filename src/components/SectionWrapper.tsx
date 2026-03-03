import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, title, subtitle, children, className = "" }: Props) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground max-w-lg mx-auto">{subtitle}</p>
        )}
        <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
      </motion.div>
      {children}
    </div>
  </section>
);

export default SectionWrapper;
