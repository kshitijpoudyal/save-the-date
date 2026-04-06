import { motion } from 'framer-motion';

function EventCard({ type, date, time, venue, venueUrl, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center space-y-2"
    >
      <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{type}</p>
      <p className="font-serif text-2xl sm:text-3xl text-foreground">{date}</p>
      <p className="font-serif text-xl sm:text-2xl text-foreground">{time}</p>
      {venueUrl ? (
        <a href={venueUrl} target="_blank" rel="noopener noreferrer" className="font-serif text-xl sm:text-2xl text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity">{venue}</a>
      ) : (
        <p className="font-serif text-xl sm:text-2xl text-foreground">{venue}</p>
      )}
    </motion.div>
  );
}

export default function DetailsSection({ venueImage }) {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="absolute inset-0 overflow-hidden">
        <img src={venueImage} alt="Wedding venue" className="w-full h-full object-cover opacity-10" />
      </div>
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-amber-100/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-rose-100/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-8 text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-muted-foreground mb-4">
            Wedding Invitation
          </p>
          <p className="font-serif text-lg sm:text-xl font-light text-muted-foreground mb-4">
            We warmly invite you to join us in celebrating the wedding of
          </p>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light text-foreground">
            Kshitij &amp; Asmita
          </h2>
        </motion.div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-10">
          <div className="h-px flex-1 bg-foreground/40" />
          <span className="font-serif text-2xl text-foreground">♡</span>
          <div className="h-px flex-1 bg-foreground/40" />
        </div>

        {/* Ceremony */}
        <EventCard
          type="Wedding Ceremony"
          date="Saturday, 27 June 2026"
          time="9:00 AM"
          venue="Dhawan, Chitwan"
          venueUrl="https://www.google.com/maps/search/?api=1&query=Dhawan,+Chitwan,+Nepal"
          delay={0.1}
        />

        {/* Divider */}
        <div className="flex items-center gap-4 my-10">
          <div className="h-px flex-1 bg-foreground/40" />
          <span className="font-serif text-2xl text-foreground">&amp;</span>
          <div className="h-px flex-1 bg-foreground/40" />
        </div>

        {/* Reception */}
        <EventCard
          type="Wedding Reception"
          date="Monday, 29 June 2026"
          time="5:00 PM"
          venue="Harshah Batika, Balkumari, Lalitpur"
          venueUrl="https://www.google.com/maps/search/?api=1&query=Harshah+Batika,+Balkumari,+Lalitpur,+Nepal"
          delay={0.1}
        />
      </div>
    </section>
  );
}