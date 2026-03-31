import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function FooterSection() {
  return (
    <section className="py-24 sm:py-32 px-6 bg-foreground text-background">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-xs tracking-[0.35em] uppercase opacity-50 mb-8">
            We can't wait to celebrate with you
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light mb-4">
            Kshitij & Asmita
          </h2>

          <p className="font-serif text-xl sm:text-2xl italic opacity-70 mb-12">
            June 27, 2026
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px w-16 bg-current opacity-20" />
            <Heart className="w-4 h-4 opacity-40" />
            <div className="h-px w-16 bg-current opacity-20" />
          </div>

          <p className="font-sans text-sm opacity-50 leading-relaxed">
            More details, including RSVP information,<br />
            will follow in our formal invitation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}