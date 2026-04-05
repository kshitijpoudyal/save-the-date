import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicPlayer({ src = "/music/background.mp3" }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set audio properties
    audio.loop = true;
    audio.volume = 0.3;

    // Try to autoplay immediately
    const tryAutoplay = () => {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Autoplay blocked, waiting for interaction:", err);
        // If autoplay blocked, play on first interaction
        const handleFirstInteraction = () => {
          audio.play().then(() => {
            setIsPlaying(true);
          }).catch((e) => console.log("Play prevented:", e));
        };
        window.addEventListener("scroll", handleFirstInteraction, { once: true });
        window.addEventListener("click", handleFirstInteraction, { once: true });
        window.addEventListener("touchstart", handleFirstInteraction, { once: true });
      });
    };

    tryAutoplay();
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Play prevented:", err);
      });
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} preload="auto" />
      
      {/* Floating music toggle button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-all duration-300 hover:shadow-xl"
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 animate-pulse" />
        ) : (
          <VolumeX className="w-6 h-6" />
        )}
      </button>
    </>
  );
}
