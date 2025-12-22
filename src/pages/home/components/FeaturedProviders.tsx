
const FeaturedProviders = () => {
  const providers = [
    {
      name: 'Sarah Mitchell',
      title: 'Digital Marketing Specialist',
      location: 'London, UK',
      rating: 4.9,
      reviews: 127,
      image: 'https://readdy.ai/api/search-image?query=professional%20businesswoman%20with%20confident%20smile%20in%20modern%20office%20setting%2C%20European%20features%2C%20clean%20business%20attire%2C%20natural%20lighting&width=300&height=300&seq=provider-001&orientation=squarish',
      specialties: ['SEO', 'PPC', 'Social Media'],
      price: 'From £75/hour',
      verified: true
    },
    {
      name: 'James Thompson',
      title: 'Full-Stack Developer',
      location: 'Manchester, UK',
      rating: 4.8,
      reviews: 89,
      image: 'https://readdy.ai/api/search-image?query=professional%20male%20developer%20with%20friendly%20expression%20in%20modern%20tech%20workspace%2C%20European%20features%2C%20casual%20business%20attire%2C%20natural%20lighting&width=300&height=300&seq=provider-002&orientation=squarish',
      specialties: ['React', 'Node.js', 'MongoDB'],
      price: 'From £85/hour',
      verified: true
    },
    {
      name: 'Emma Rodriguez',
      title: 'Brand Designer',
      location: 'Birmingham, UK',
      rating: 5.0,
      reviews: 156,
      image: 'https://readdy.ai/api/search-image?query=creative%20female%20designer%20with%20artistic%20background%20in%20modern%20design%20studio%2C%20European%20features%2C%20stylish%20casual%20attire%2C%20bright%20natural%20lighting&width=300&height=300&seq=provider-003&orientation=squarish',
      specialties: ['Logo Design', 'Brand Identity', 'Print'],
      price: 'From £60/hour',
      verified: true
    },
    {
      name: 'Michael Chen',
      title: 'Business Consultant',
      location: 'Leeds, UK',
      rating: 4.9,
      reviews: 203,
      image: 'https://readdy.ai/api/search-image?query=professional%20business%20consultant%20in%20formal%20attire%20with%20confident%20posture%20in%20modern%20office%2C%20Asian%20European%20features%2C%20natural%20lighting&width=300&height=300&seq=provider-004&orientation=squarish',
      specialties: ['Strategy', 'Operations', 'Growth'],
      price: 'From £120/hour',
      verified: true
    },
    {
      name: 'Lisa Anderson',
      title: 'Content Writer',
      location: 'Bristol, UK',
      rating: 4.8,
      reviews: 94,
      image: 'https://readdy.ai/api/search-image?query=professional%20female%20writer%20with%20laptop%20in%20bright%20modern%20workspace%2C%20European%20features%2C%20smart%20casual%20attire%2C%20natural%20lighting&width=300&height=300&seq=provider-005&orientation=squarish',
      specialties: ['Blog Writing', 'Copywriting', 'SEO Content'],
      price: 'From £45/hour',
      verified: true
    },
    {
      name: 'David Wilson',
      title: 'Home Renovation Expert',
      location: 'Glasgow, UK',
      rating: 4.9,
      reviews: 178,
      image: 'https://readdy.ai/api/search-image?query=skilled%20craftsman%20in%20work%20attire%20with%20tools%20in%20modern%20workshop%20setting%2C%20European%20features%2C%20professional%20work%20clothes%2C%20natural%20lighting&width=300&height=300&seq=provider-006&orientation=squarish',
      specialties: ['Kitchen', 'Bathroom', 'Extensions'],
      price: 'From £55/hour',
      verified: true
    }
  ];

  return (
    <section id="providers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-6 font-poppins">
            Featured Service Providers
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            Connect with our top-rated <strong>professionals</strong> who have helped thousands of businesses 
            achieve their goals. All providers are verified and background-checked.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {providers.map((provider, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative">
                    <img
                      src={provider.image}
                      alt={provider.name}
                      className="w-16 h-16 rounded-full object-cover object-top"
                    />
                    {provider.verified && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-white text-xs"></i>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1 font-inter group-hover:text-teal-600 transition-colors">
                      {provider.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-2 font-inter">{provider.title}</p>
                    <div className="flex items-center text-sm text-gray-500 font-inter">
                      <i className="ri-map-pin-line mr-1"></i>
                      {provider.location}
                    </div>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={`ri-star-${i < Math.floor(provider.rating) ? 'fill' : 'line'} text-yellow-400 text-sm`}
                      ></i>
                    ))}
                    <span className="ml-2 text-sm font-medium text-gray-900 font-inter">{provider.rating}</span>
                    <span className="ml-1 text-sm text-gray-500 font-inter">({provider.reviews} reviews)</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {provider.specialties.map((specialty, specialtyIndex) => (
                      <span
                        key={specialtyIndex}
                        className="px-3 py-1 bg-teal-50 text-teal-700 text-xs font-medium rounded-full font-inter"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900 font-inter">{provider.price}</span>
                  <button className="bg-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors text-sm whitespace-nowrap cursor-pointer font-inter">
                    Contact Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer font-inter">
            View All Providers
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProviders;
