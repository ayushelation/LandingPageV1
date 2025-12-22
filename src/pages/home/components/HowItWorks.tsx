
const HowItWorks = () => {
  const steps = [
    {
      step: '01',
      title: 'Tell Us What You Need',
      description: 'Describe your service requirements, location, and preferred timing. Our smart matching system will understand your needs.',
      icon: 'ri-edit-line',
      color: 'from-teal-500 to-cyan-600'
    },
    {
      step: '02',
      title: 'Get Matched with Professionals',
      description: 'Receive quotes from verified service providers in your area. Compare profiles, ratings, and pricing to make the best choice.',
      icon: 'ri-team-line',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      step: '03',
      title: 'Book & Schedule Service',
      description: 'Choose your preferred professional and schedule the service at your convenience. Track progress and communicate directly.',
      icon: 'ri-calendar-check-line',
      color: 'from-orange-500 to-red-500'
    },
    {
      step: '04',
      title: 'Get Quality Work Done',
      description: 'Enjoy professional service delivery with quality assurance. Rate your experience and help others make informed decisions.',
      icon: 'ri-star-line',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-6 font-poppins">
            How GULLYHIVE Works
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            Getting quality <strong>professional services</strong> has never been easier. 
            Our streamlined process connects you with the right experts in just a few simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-gray-300 z-0"></div>
              )}
              
              <div className="relative z-10 text-center">
                {/* Step Number */}
                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <span className="text-2xl font-bold text-white font-poppins">{step.step}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${step.icon} text-2xl text-gray-700`}></i>
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-gray-900 mb-4 font-poppins">
                  {step.title}
                </h4>
                <p className="text-gray-600 font-inter leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-3xl p-12">
            <h4 className="text-3xl font-bold text-gray-900 mb-4 font-poppins">
              Ready to Get Started?
            </h4>
            <p className="text-xl text-gray-600 mb-8 font-inter">
              Join thousands of satisfied customers who trust GULLYHIVE for their service needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors whitespace-nowrap cursor-pointer font-inter">
                Post Your Requirement
              </button>
              <button className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors whitespace-nowrap cursor-pointer font-inter">
                Browse Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
