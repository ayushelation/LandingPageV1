
import { useState } from 'react';

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedLocation: string;
  setSelectedLocation: (location: string) => void;
}

const HeroSection = ({ searchQuery, setSearchQuery, selectedLocation, setSelectedLocation }: HeroSectionProps) => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const popularServices = [
    'Home Cleaning', 'AC Repair', 'Electrician', 'Plumber', 'Painting', 
    'Pest Control', 'Packers & Movers', 'Beauty at Home', 'CCTV Installation'
  ];

  const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 
    'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur'
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Handle search logic here
      console.log('Searching for:', searchQuery, 'in', selectedLocation);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20European%20home%20interior%20with%20professional%20service%20providers%20working%2C%20bright%20natural%20lighting%2C%20clean%20minimalist%20design%20with%20warm%20atmosphere%20and%20professional%20tools&width=1920&height=1080&seq=hero-background-gully-main&orientation=landscape')`
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-full">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 font-poppins leading-tight">
            Find Trusted <span className="text-teal-400">Professionals</span><br />
            For Every Home Need
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto font-inter leading-relaxed">
            GULLYHIVE connects you with verified <strong className="text-white">service providers</strong> across 
            12+ categories. From home cleaning to professional services, get quality work done at your doorstep.
          </p>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Service Search */}
              <div className="lg:col-span-6 relative">
                <div className="relative">
                  <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"></i>
                  <input
                    type="text"
                    placeholder="What service do you need?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent font-inter text-lg"
                  />
                </div>
                
                {/* Search Suggestions */}
                {showSuggestions && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg mt-1 shadow-lg z-20 max-h-60 overflow-y-auto">
                    {popularServices
                      .filter(service => service.toLowerCase().includes(searchQuery.toLowerCase()))
                      .map((service, index) => (
                        <div
                          key={index}
                          className="px-4 py-3 hover:bg-gray-50 cursor-pointer font-inter"
                          onClick={() => {
                            setSearchQuery(service);
                            setShowSuggestions(false);
                          }}
                        >
                          <i className="ri-search-line text-gray-400 mr-3"></i>
                          {service}
                        </div>
                      ))
                    }
                  </div>
                )}
              </div>

              {/* Location Search */}
              <div className="lg:col-span-4">
                <div className="relative">
                  <i className="ri-map-pin-line absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"></i>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent font-inter text-lg appearance-none cursor-pointer"
                  >
                    <option value="">Select your city</option>
                    {cities.map((city, index) => (
                      <option key={index} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <div className="lg:col-span-2">
                <button
                  onClick={handleSearch}
                  className="w-full bg-teal-600 text-white py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer font-inter text-lg"
                >
                  Search
                </button>
              </div>
            </div>
          </div>

          {/* Popular Services */}
          <div className="text-center">
            <p className="text-gray-300 mb-4 font-inter">Popular services:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {popularServices.slice(0, 6).map((service, index) => (
                <button
                  key={index}
                  onClick={() => setSearchQuery(service)}
                  className="bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/20 transition-colors whitespace-nowrap cursor-pointer font-inter border border-white/20"
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <i className="ri-arrow-down-line text-2xl"></i>
      </div>
    </section>
  );
};

export default HeroSection;
