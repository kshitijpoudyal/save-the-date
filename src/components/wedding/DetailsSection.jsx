import { motion } from 'framer-motion';
import { MapPin, Clock, CalendarDays } from 'lucide-react';

function EventBlock({ title, date, venue, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <p className="font-serif text-2xl sm:text-3xl text-foreground/70 mb-6">{title}</p>
      <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
        <div className="bg-background/60 rounded-lg p-5 border border-border">
          <div className="flex items-center justify-center gap-2 mb-2">
            <CalendarDays className="w-4 h-4 text-primary" />
            <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground">Date & Time</span>
          </div>
          <p className="font-serif text-lg sm:text-xl text-foreground">{date}</p>
        </div>
        <div className="bg-background/60 rounded-lg p-5 border border-border">
          <div className="flex items-center justify-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground">Venue</span>
          </div>
          <p className="font-serif text-lg sm:text-xl text-foreground">{venue}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function DetailsSection({ venueImage }) {
  return (
    <section className="relative py-16 sm:py-24">
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

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">
            The Details
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-foreground">
            Join Us in Celebration
          </h2>
        </motion.div>

        {/* Wedding */}
        <div className="mb-12">
          <EventBlock
            title="Wedding Ceremony"
            date={<>Saturday, June 27th<br/>at 9:00 AM</>}
            venue="Chitwan"
            delay={0.1}
          />
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <span className="font-serif text-sm italic text-muted-foreground">& also</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Reception */}
        <div>
          <EventBlock
            title="Reception"
            date={<>Monday, June 29th<br/>at 5:00 PM</>}
            venue={<>Harshah Batika<br/>Balkumari, Lalitpur</>}
            delay={0.1}
          />
        </div>
      </div>
    </section>
  );
}