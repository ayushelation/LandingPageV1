
import { useState } from 'react';
import HeroSection from './components/HeroSection';
import SearchSection from './components/SearchSection';
import ServiceCategories from './components/ServiceCategories';
import FeaturedProviders from './components/FeaturedProviders';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import StatsSection from './components/StatsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <HeroSection 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
        />
        <SearchSection />
        <ServiceCategories />
        <FeaturedProviders />
        <HowItWorks />
        <StatsSection />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
