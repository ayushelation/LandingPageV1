
const ServiceCategories = () => {
  const categories = [
    {
      title: 'Home Cleaning & Housekeeping',
      description: 'Professional cleaning services for homes and small commercial spaces',
      image: 'https://readdy.ai/api/search-image?query=professional%20home%20cleaning%20service%20team%20with%20modern%20equipment%20cleaning%20living%20room%2C%20bright%20European%20style%20interior%20with%20natural%20lighting%20and%20clean%20aesthetic&width=400&height=300&seq=home-cleaning-gully-001&orientation=landscape',
      services: ['Home Deep Cleaning', 'Sofa / Upholstery Cleaning', 'Mattress Cleaning', 'Carpet & Rug Shampooing', 'Move-in / Move-out Cleaning'],
      color: 'from-teal-500 to-cyan-600',
      totalServices: 8
    },
    {
      title: 'Repairs & Maintenance',
      description: 'Expert electricians, plumbers, and carpenters for all home repair needs',
      image: 'https://readdy.ai/api/search-image?query=skilled%20technician%20repairing%20electrical%20wiring%20in%20modern%20European%20home%20with%20professional%20tools%20and%20safety%20equipment%2C%20clean%20workspace%20with%20natural%20lighting&width=400&height=300&seq=repairs-maintenance-gully-002&orientation=landscape',
      services: ['Electrician Services', 'Plumbing Solutions', 'Carpenter Work', 'Handyman Services', 'RO / Water Purifier Service'],
      color: 'from-emerald-500 to-teal-600',
      totalServices: 7
    },
    {
      title: 'Appliance Repair & Service',
      description: 'Complete repair and maintenance for all home appliances',
      image: 'https://readdy.ai/api/search-image?query=appliance%20repair%20technician%20servicing%20air%20conditioner%20in%20modern%20European%20home%20interior%20with%20professional%20tools%20and%20clean%20workspace&width=400&height=300&seq=appliance-repair-gully-003&orientation=landscape',
      services: ['AC Service & Repair', 'Refrigerator Repair', 'Washing Machine Repair', 'TV / LED Repair', 'Water Purifier Service'],
      color: 'from-orange-500 to-red-500',
      totalServices: 10
    },
    {
      title: 'Painting & Home Improvement',
      description: 'Transform your space with professional painting and improvement services',
      image: 'https://readdy.ai/api/search-image?query=professional%20painters%20working%20on%20interior%20wall%20painting%20in%20modern%20European%20style%20home%20with%20clean%20tools%20and%20bright%20natural%20lighting&width=400&height=300&seq=painting-improvement-gully-004&orientation=landscape',
      services: ['Interior Wall Painting', 'Exterior Painting', 'Waterproofing', 'Wood Painting & Polish', 'Texture & Feature Wall'],
      color: 'from-indigo-500 to-purple-600',
      totalServices: 7
    },
    {
      title: 'Pest Control',
      description: 'Comprehensive pest control solutions for homes and commercial spaces',
      image: 'https://readdy.ai/api/search-image?query=professional%20pest%20control%20specialist%20in%20protective%20gear%20treating%20modern%20European%20home%20interior%20with%20safe%20equipment%20and%20clean%20environment&width=400&height=300&seq=pest-control-gully-005&orientation=landscape',
      services: ['Cockroach Control', 'Termite Treatment', 'Bed Bugs Treatment', 'General Home Pest Control', 'Mosquito Fogging'],
      color: 'from-green-500 to-emerald-600',
      totalServices: 7
    },
    {
      title: 'Packers & Movers',
      description: 'Reliable relocation services for homes, offices, and vehicles',
      image: 'https://readdy.ai/api/search-image?query=professional%20moving%20team%20carefully%20packing%20household%20items%20in%20modern%20European%20home%20with%20organized%20boxes%20and%20protective%20materials&width=400&height=300&seq=packers-movers-gully-006&orientation=landscape',
      services: ['Local Home Shifting', 'Intercity Relocation', 'Office Relocation', 'Vehicle Transport', 'Packing & Unpacking'],
      color: 'from-pink-500 to-rose-600',
      totalServices: 6
    },
    {
      title: 'Beauty & Grooming at Home',
      description: 'Professional salon services delivered to your doorstep',
      image: 'https://readdy.ai/api/search-image?query=professional%20beauty%20therapist%20providing%20salon%20services%20at%20home%20in%20clean%20modern%20European%20interior%20with%20professional%20equipment%20and%20serene%20atmosphere&width=400&height=300&seq=beauty-grooming-gully-007&orientation=landscape',
      services: ['Salon at Home', 'Makeup & Hair Styling', 'Manicure & Pedicure', 'Basic Spa / Massage'],
      color: 'from-purple-500 to-pink-600',
      totalServices: 4
    },
    {
      title: 'Home Health & Elderly Care',
      description: 'Compassionate healthcare services in the comfort of your home',
      image: 'https://readdy.ai/api/search-image?query=caring%20healthcare%20professional%20providing%20elderly%20care%20in%20comfortable%20modern%20European%20home%20setting%20with%20medical%20equipment%20and%20warm%20lighting&width=400&height=300&seq=health-elderly-care-gully-008&orientation=landscape',
      services: ['Elderly Attendant', 'Home Nursing', 'Post-operative Care', 'Physiotherapy at Home', 'Mother & Baby Care'],
      color: 'from-cyan-500 to-blue-600',
      totalServices: 6
    },
    {
      title: 'Interior & Renovation',
      description: 'Complete interior design and renovation solutions for your home',
      image: 'https://readdy.ai/api/search-image?query=interior%20designer%20working%20on%20modern%20European%20kitchen%20renovation%20with%20design%20plans%20and%20materials%20in%20bright%20contemporary%20setting&width=400&height=300&seq=interior-renovation-gully-009&orientation=landscape',
      services: ['Modular Kitchen Design', 'Wardrobes & Storage', 'False Ceiling & Lighting', 'Flooring Solutions', 'Bathroom Renovation'],
      color: 'from-amber-500 to-orange-600',
      totalServices: 7
    },
    {
      title: 'Home Security & Smart Devices',
      description: 'Advanced security systems and smart home technology installation',
      image: 'https://readdy.ai/api/search-image?query=security%20technician%20installing%20smart%20home%20devices%20and%20CCTV%20system%20in%20modern%20European%20home%20with%20clean%20technology%20setup&width=400&height=300&seq=security-smart-devices-gully-010&orientation=landscape',
      services: ['CCTV Installation', 'Video Door Phones', 'Smart Locks & Doorbells', 'Wi-Fi Router Setup', 'Alarm Systems'],
      color: 'from-slate-500 to-gray-600',
      totalServices: 5
    },
    {
      title: 'Vehicle Services',
      description: 'Convenient doorstep vehicle maintenance and repair services',
      image: 'https://readdy.ai/api/search-image?query=professional%20mechanic%20servicing%20motorcycle%20at%20doorstep%20with%20modern%20tools%20and%20equipment%20in%20clean%20European%20residential%20setting&width=400&height=300&seq=vehicle-services-gully-011&orientation=landscape',
      services: ['Two-Wheeler Service', 'Car Basic Service', 'Car Cleaning / Detailing', 'Battery Jumpstart'],
      color: 'from-red-500 to-pink-600',
      totalServices: 4
    },
    {
      title: 'Professional Services',
      description: 'Expert legal, financial, and business consultation services',
      image: 'https://readdy.ai/api/search-image?query=professional%20consultant%20providing%20legal%20and%20financial%20advice%20in%20modern%20European%20office%20setting%20with%20documents%20and%20clean%20workspace&width=400&height=300&seq=professional-services-gully-012&orientation=landscape',
      services: ['CA / Tax Filing', 'Legal Consultation', 'Documentation & Notary', 'Import Export Advisory'],
      color: 'from-violet-500 to-purple-600',
      totalServices: 7
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-6 font-poppins">
            Our Service Categories
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            GULLYHIVE connects you with verified <strong>professionals</strong> across 12 major service categories. 
            From home maintenance to professional services, find the right expert for every need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-20 group-hover:opacity-30 transition-opacity`}></div>
              </div>
              
              <div className="p-5">
                <h4 className="text-lg font-bold text-gray-900 mb-2 font-poppins group-hover:text-teal-600 transition-colors">
                  {category.title}
                </h4>
                <p className="text-gray-600 mb-3 font-inter leading-relaxed text-sm">
                  {category.description}
                </p>
                
                <div className="space-y-1">
                  {category.services.slice(0, 3).map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center text-xs text-gray-700 font-inter">
                      <i className="ri-check-line text-teal-600 mr-2 text-sm"></i>
                      {service}
                    </div>
                  ))}
                  <div className="text-xs text-teal-600 font-medium mt-2 font-inter">
                    +{category.totalServices - 3} more services
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer font-inter">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
