import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function getTimeLeft(targetDate) {
  const diff = targetDate - new Date();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function TimeUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-serif text-4xl sm:text-6xl md:text-7xl font-light text-foreground">
        {String(value).padStart(2, '0')}
      </span>
      <span className="font-sans text-[10px] sm:text-xs tracking-[0.25em] uppercase text-muted-foreground mt-2">
        {label}
      </span>
    </div>
  );
}

export default function CountdownSection() {
  const weddingDate = new Date('2026-06-27T16:00:00');
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(weddingDate));

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(weddingDate)), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 sm:py-32 px-6 bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-sans text-xs tracking-[0.35em] uppercase text-muted-foreground mb-6"
        >
          Counting Down To
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-16"
        >
          Our Forever Begins
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center gap-8 sm:gap-14 md:gap-20"
        >
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </motion.div>
      </div>
    </section>
  );
}