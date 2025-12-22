
const SearchSection = () => {
  const serviceCategories = [
    {
      icon: 'ri-home-4-line',
      title: 'Home Cleaning',
      description: 'Deep cleaning, sofa cleaning, carpet shampooing',
      color: 'text-teal-600 bg-teal-50'
    },
    {
      icon: 'ri-tools-line',
      title: 'Repairs & Maintenance',
      description: 'Electrician, plumber, carpenter services',
      color: 'text-emerald-600 bg-emerald-50'
    },
    {
      icon: 'ri-tv-line',
      title: 'Appliance Repair',
      description: 'AC, refrigerator, washing machine repair',
      color: 'text-orange-600 bg-orange-50'
    },
    {
      icon: 'ri-paint-brush-line',
      title: 'Painting & Improvement',
      description: 'Interior painting, waterproofing, texture work',
      color: 'text-indigo-600 bg-indigo-50'
    },
    {
      icon: 'ri-bug-line',
      title: 'Pest Control',
      description: 'Cockroach, termite, bed bug treatment',
      color: 'text-green-600 bg-green-50'
    },
    {
      icon: 'ri-truck-line',
      title: 'Packers & Movers',
      description: 'Home shifting, office relocation, vehicle transport',
      color: 'text-pink-600 bg-pink-50'
    },
    {
      icon: 'ri-scissors-cut-line',
      title: 'Beauty at Home',
      description: 'Salon services, makeup, spa treatments',
      color: 'text-purple-600 bg-purple-50'
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Health & Elderly Care',
      description: 'Home nursing, physiotherapy, elderly care',
      color: 'text-cyan-600 bg-cyan-50'
    },
    {
      icon: 'ri-home-gear-line',
      title: 'Interior & Renovation',
      description: 'Kitchen design, wardrobes, flooring',
      color: 'text-amber-600 bg-amber-50'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Security & Smart Devices',
      description: 'CCTV, smart locks, alarm systems',
      color: 'text-slate-600 bg-slate-50'
    },
    {
      icon: 'ri-car-line',
      title: 'Vehicle Services',
      description: 'Two-wheeler service, car cleaning, battery help',
      color: 'text-red-600 bg-red-50'
    },
    {
      icon: 'ri-briefcase-line',
      title: 'Professional Services',
      description: 'Legal consultation, tax filing, documentation',
      color: 'text-violet-600 bg-violet-50'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-6 font-poppins">
            What Are You Looking For?
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            Browse our comprehensive range of <strong>professional services</strong>. 
            GULLYHIVE has verified experts ready to help with all your home and business needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200 text-center">
                <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${category.icon} text-2xl`}></i>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-2 font-poppins group-hover:text-teal-600 transition-colors">
                  {category.title}
                </h4>
                
                <p className="text-sm text-gray-600 font-inter leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
              Can't Find What You're Looking For?
            </h4>
            <p className="text-gray-600 mb-6 font-inter">
              Tell us about your specific requirements and we'll connect you with the right professionals.
            </p>
            <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer font-inter">
              Post Your Requirement
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;
