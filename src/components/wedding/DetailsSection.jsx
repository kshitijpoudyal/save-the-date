import { motion } from 'framer-motion';
import { MapPin, Clock, CalendarDays } from 'lucide-react';

function DetailCard({ icon: Icon, title, line1, line2, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center text-center px-6"
    >
      <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mb-5">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="font-serif text-xl sm:text-2xl font-medium text-foreground mb-3">{title}</h3>
      <p className="font-sans text-sm text-foreground/80 leading-relaxed">{line1}</p>
      {line2 && <p className="font-sans text-sm text-foreground/80 leading-relaxed">{line2}</p>}
    </motion.div>
  );
}

export default function DetailsSection({ venueImage }) {
  return (
    <section className="relative py-24 sm:py-32">
      {/* Venue background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={venueImage}
          alt="Wedding venue"
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      {/* Flares */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-amber-100/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-rose-100/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">
            The Details
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground">
            Join Us in Celebration
          </h2>
        </motion.div>

        {/* Wedding */}
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center font-serif text-xl sm:text-2xl text-foreground/70 mb-10"
          >
            Wedding Ceremony
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 max-w-2xl mx-auto">
            <DetailCard
              icon={CalendarDays}
              title="Date & Time"
              line1="Saturday, June 27th at 9:00 AM"
              delay={0.1}
            />
            <DetailCard
              icon={MapPin}
              title="Venue"
              line1="Chitwan"
              delay={0.2}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-border" />
          <span className="font-serif text-sm italic text-muted-foreground">& also</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Reception */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center font-serif text-xl sm:text-2xl text-foreground/70 mb-10"
          >
            Reception
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 max-w-2xl mx-auto">
            <DetailCard
              icon={CalendarDays}
              title="Date & Time"
              line1="Monday, June 29th at 5:00 PM"
              delay={0.1}
            />
            <DetailCard
              icon={MapPin}
              title="Venue"
              line1="Harshah Batika"
              line2="Balkumari, Lalitpur"
              delay={0.2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}