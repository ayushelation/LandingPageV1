
import { useState } from 'react';

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d54hqmrontabvievu2c0', {
        method: 'POST',
        body: new URLSearchParams(formDataToSend as any)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          location: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-12 lg:p-16 text-white">
              <h3 className="text-4xl lg:text-5xl font-bold mb-6 font-poppins leading-tight">
                Ready to Find Your Perfect Service Provider?
              </h3>
              <p className="text-xl mb-8 text-teal-50 font-inter leading-relaxed">
                Join thousands of satisfied customers who trust GULLYHIVE for quality 
                <strong> professional services</strong>. Get matched with verified experts in minutes, not hours.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <i className="ri-shield-check-line text-2xl text-teal-200 mr-4"></i>
                  <span className="text-lg font-inter">Verified & background-checked professionals</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-money-rupee-circle-line text-2xl text-teal-200 mr-4"></i>
                  <span className="text-lg font-inter">Transparent pricing with no hidden costs</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-time-line text-2xl text-teal-200 mr-4"></i>
                  <span className="text-lg font-inter">Quick response within 2 hours</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-customer-service-2-line text-2xl text-teal-200 mr-4"></i>
                  <span className="text-lg font-inter">24/7 customer support & quality assurance</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-white/20 border-2 border-white"></div>
                  ))}
                </div>
                <div>
                  <p className="text-sm text-teal-100 font-inter">Join 100,000+ satisfied customers</p>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white p-12 lg:p-16">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 font-poppins">
                Get Free Quotes Today
              </h4>
              
              <form id="service-request-form" onSubmit={handleSubmit} data-readdy-form className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent font-inter"
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent font-inter"
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent font-inter"
                  />
                </div>
                
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent font-inter appearance-none cursor-pointer"
                  >
                    <option value="">Select Service Category</option>
                    <option value="home-cleaning">Home Cleaning & Housekeeping</option>
                    <option value="repairs-maintenance">Repairs & Maintenance</option>
                    <option value="appliance-repair">Appliance Repair & Service</option>
                    <option value="painting-improvement">Painting & Home Improvement</option>
                    <option value="pest-control">Pest Control</option>
                    <option value="packers-movers">Packers & Movers</option>
                    <option value="beauty-grooming">Beauty & Grooming at Home</option>
                    <option value="health-elderly-care">Home Health & Elderly Care</option>
                    <option value="interior-renovation">Interior & Renovation</option>
                    <option value="security-smart-devices">Home Security & Smart Devices</option>
                    <option value="vehicle-services">Vehicle Services</option>
                    <option value="professional-services">Professional Services</option>
                  </select>
                </div>
                
                <div>
                  <input
                    type="text"
                    name="location"
                    placeholder="Your Location (City/Area)"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent font-inter"
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder="Describe your service requirements (max 500 characters)"
                    value={formData.message}
                    onChange={handleInputChange}
                    maxLength={500}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none font-inter"
                  ></textarea>
                  <div className="text-sm text-gray-500 mt-1 font-inter">
                    {formData.message.length}/500 characters
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-600 text-white py-4 rounded-lg font-semibold hover:bg-teal-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer font-inter"
                >
                  {isSubmitting ? 'Submitting...' : 'Get Free Quotes Now'}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="text-green-600 text-sm font-medium text-center font-inter">
                    Thank you! We'll connect you with qualified professionals within 2 hours.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="text-red-600 text-sm font-medium text-center font-inter">
                    Something went wrong. Please try again or contact support.
                  </div>
                )}
              </form>
              
              <p className="text-xs text-gray-500 mt-4 text-center font-inter">
                By submitting this form, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
