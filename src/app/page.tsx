'use client';

import { Hero } from './components/index.';
import { Roadmap } from './components/roadmap';
import { Partners } from './components/partners';
import { Community } from './components/community';
import { Footer } from './components/footer';
import { Navigation } from './components/navigation';
import { FlyingText } from './components/flying-text';
import { HowToBuy } from './components/how-to-buy';
import { MediaGallery } from './components/media-section'; 

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 text-white overflow-hidden">
      <Navigation /> <br /><br />
      <Hero />
      <HowToBuy />
      <FlyingText text="Welcome to the future of meme coins!" direction="left" />
      <Roadmap />
      <FlyingText text="Join our amazing partners!" direction="right" />
      <Partners />
      <FlyingText text="Meet our awesome community!" direction="left" />
      <Community />
      <FlyingText text="Check out our latest updates!" direction="right" />
      <MediaGallery /> 
      <Footer />
    </main>
  );
}
