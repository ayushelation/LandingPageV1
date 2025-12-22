
const StatsSection = () => {
  const stats = [
    {
      number: '50,000+',
      label: 'Verified Providers',
      icon: 'ri-shield-check-line',
      description: 'Background-checked professionals'
    },
    {
      number: '2.5M+',
      label: 'Projects Completed',
      icon: 'ri-checkbox-circle-line',
      description: 'Successful business connections'
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
      icon: 'ri-heart-line',
      description: 'Happy customers worldwide'
    },
    {
      number: '24/7',
      label: 'Support Available',
      icon: 'ri-customer-service-line',
      description: 'Round-the-clock assistance'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-6 font-poppins">
            Trusted by Businesses Worldwide
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            Join thousands of successful businesses that have found their perfect <strong>service providers</strong> through GULLYHIVE. 
            Our platform delivers results that matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-teal-100 rounded-2xl flex items-center justify-center group-hover:bg-teal-200 transition-colors">
                <i className={`${stat.icon} text-2xl text-teal-600`}></i>
              </div>
              
              <div className="mb-2">
                <span className="text-4xl font-bold text-gray-900 font-poppins">{stat.number}</span>
              </div>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-2 font-inter">{stat.label}</h4>
              <p className="text-gray-600 text-sm font-inter">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
