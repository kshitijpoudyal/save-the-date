import { motion } from 'framer-motion';

export default function GallerySection({ images }) {
  return (
    <section className="py-24 sm:py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-sans text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">
            Our Story
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground">
            A Love to Remember
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="overflow-hidden rounded-sm aspect-square"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}