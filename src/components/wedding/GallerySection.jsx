import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GallerySection({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const selected = selectedIndex !== null ? images[selectedIndex] : null;
  
  // Swipe handling for lightbox
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-slide when lightbox is open
  useEffect(() => {
    if (selectedIndex === null) return;
    
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [selectedIndex, images.length]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        setSelectedIndex((selectedIndex + 1) % images.length);
      } else {
        setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
      }
    }
  };

  const prev = (e) => { e.stopPropagation(); setSelectedIndex((selectedIndex - 1 + images.length) % images.length); };
  const next = (e) => { e.stopPropagation(); setSelectedIndex((selectedIndex + 1) % images.length); };

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

        {/* Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="overflow-hidden rounded-sm aspect-square cursor-pointer"
              onClick={() => setSelectedIndex(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedIndex(null)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <button className="absolute top-4 right-4 text-white/80 hover:text-white z-10" onClick={() => setSelectedIndex(null)}>
                <X className="w-8 h-8" />
              </button>
              <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-10" onClick={prev}>
                <ChevronLeft className="w-10 h-10" />
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-10" onClick={next}>
                <ChevronRight className="w-10 h-10" />
              </button>
              
              <motion.img
                key={selectedIndex}
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={selected.src}
                alt={selected.alt}
                className="max-w-full max-h-[80vh] rounded-sm object-contain select-none"
                onClick={(e) => e.stopPropagation()}
                draggable={false}
              />

              {/* Carousel Indicators */}
              <div className="flex gap-2 mt-6" onClick={(e) => e.stopPropagation()}>
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === selectedIndex 
                        ? 'bg-white w-8' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}