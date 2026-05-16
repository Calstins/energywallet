import PageTransition from '../components/PageTransition';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import StatsBanner from '../sections/StatsBanner';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import DownloadCTA from '../sections/DownloadCTA';

export default function HomePage() {
  return (
    <PageTransition>
      <Hero />
      <Features />
      <StatsBanner />
      <Testimonials />
      <FAQ />
      <DownloadCTA />
    </PageTransition>
  );
}
