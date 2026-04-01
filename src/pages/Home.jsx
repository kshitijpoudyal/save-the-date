import Navbar from '../components/wedding/Navbar';
import HeroSection from '../components/wedding/HeroSection';
import CountdownSection from '../components/wedding/CountdownSection';
import DetailsSection from '../components/wedding/DetailsSection';
import GallerySection from '../components/wedding/GallerySection';
import FooterSection from '../components/wedding/FooterSection';

const HERO_IMAGE = "/images/hero.jpg";
const VENUE_IMAGE = "/images/venue.png";

const GALLERY_IMAGES = [
  { src: "/images/gallery-1.jpg", alt: "Couple walking in garden" },
  { src: "/images/gallery-2.jpg", alt: "Engagement ring detail" },
  { src: "/images/gallery-3.jpg", alt: "Couple laughing together" },
  { src: "/images/gallery-4.jpg", alt: "Sunset silhouette" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection heroImage={HERO_IMAGE} />
      <CountdownSection />
      <DetailsSection venueImage={VENUE_IMAGE} />
      <GallerySection images={GALLERY_IMAGES} />
      <FooterSection />
    </div>
  );
}