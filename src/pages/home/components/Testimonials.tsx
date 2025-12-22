
const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rachel Green',
      title: 'Marketing Director',
      company: 'TechStart Solutions',
      image: 'https://readdy.ai/api/search-image?query=professional%20businesswoman%20with%20confident%20smile%20in%20modern%20office%2C%20European%20features%2C%20business%20attire%2C%20natural%20lighting&width=200&height=200&seq=testimonial-001&orientation=squarish',
      rating: 5,
      text: 'GULLYHIVE connected us with an amazing digital marketing team that increased our online leads by 300%. The quality of professionals on this platform is outstanding.'
    },
    {
      name: 'Mark Johnson',
      title: 'CEO',
      company: 'Johnson & Associates',
      image: 'https://readdy.ai/api/search-image?query=professional%20businessman%20with%20friendly%20expression%20in%20corporate%20setting%2C%20European%20features%2C%20formal%20business%20attire%2C%20natural%20lighting&width=200&height=200&seq=testimonial-002&orientation=squarish',
      rating: 5,
      text: 'Finding the right web developer was crucial for our business. GULLYHIVE made it simple and we found someone who exceeded our expectations. Highly recommended!'
    },
    {
      name: 'Sophie Williams',
      title: 'Founder',
      company: 'Creative Boutique',
      image: 'https://readdy.ai/api/search-image?query=creative%20female%20entrepreneur%20with%20artistic%20background%20in%20modern%20workspace%2C%20European%20features%2C%20stylish%20business%20casual%2C%20natural%20lighting&width=200&height=200&seq=testimonial-003&orientation=squarish',
      rating: 5,
      text: 'The brand designer we found through GULLYHIVE transformed our entire visual identity. The process was smooth and the results speak for themselves.'
    },
    {
      name: 'David Brown',
      title: 'Operations Manager',
      company: 'Brown Industries',
      image: 'https://readdy.ai/api/search-image?query=professional%20manager%20in%20industrial%20setting%20with%20confident%20posture%2C%20European%20features%2C%20business%20casual%20attire%2C%20natural%20lighting&width=200&height=200&seq=testimonial-004&orientation=squarish',
      rating: 5,
      text: 'We needed a business consultant urgently and GULLYHIVE delivered. The consultant helped us streamline our operations and save 40% on costs.'
    },
    {
      name: 'Emma Davis',
      title: 'Restaurant Owner',
      company: 'The Garden Bistro',
      image: 'https://readdy.ai/api/search-image?query=restaurant%20owner%20with%20warm%20smile%20in%20modern%20restaurant%20setting%2C%20European%20features%2C%20casual%20professional%20attire%2C%20natural%20lighting&width=200&height=200&seq=testimonial-005&orientation=squarish',
      rating: 5,
      text: 'The home renovation expert we hired through GULLYHIVE completely transformed our restaurant space. Professional, reliable, and excellent quality work.'
    },
    {
      name: 'James Wilson',
      title: 'Tech Entrepreneur',
      company: 'InnovateTech',
      image: 'https://readdy.ai/api/search-image?query=young%20tech%20entrepreneur%20with%20laptop%20in%20modern%20startup%20office%2C%20European%20features%2C%20casual%20business%20attire%2C%20natural%20lighting&width=200&height=200&seq=testimonial-006&orientation=squarish',
      rating: 5,
      text: 'GULLYHIVE is a game-changer for finding quality service providers. The vetting process ensures you get professionals who deliver real results.'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gray-900 mb-6 font-poppins">
            What Our Clients Say
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            Don't just take our word for it. Here's what business owners say about their experience 
            finding <strong>professional services</strong> through GULLYHIVE.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6 font-inter leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover object-top mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 font-inter">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600 font-inter">{testimonial.title}</p>
                  <p className="text-sm text-teal-600 font-medium font-inter">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
