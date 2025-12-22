
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'For Businesses': [
      'Post a Project',
      'Browse Providers',
      'How It Works',
      'Success Stories',
      'Pricing'
    ],
    'For Providers': [
      'Join as Provider',
      'Provider Resources',
      'Success Tips',
      'Community',
      'Support'
    ],
    'Company': [
      'About Us',
      'Careers',
      'Press',
      'Blog',
      'Contact'
    ],
    'Support': [
      'Help Center',
      'Safety',
      'Terms of Service',
      'Privacy Policy',
      'Cookie Policy'
    ]
  };

  return (
    <footer className="bg-emerald-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 font-poppins">GULLYHIVE</h3>
            <p className="text-emerald-100 mb-6 font-inter leading-relaxed">
              Connecting businesses with qualified service providers across industries. 
              Your trusted platform for professional growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center hover:bg-emerald-400 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center hover:bg-emerald-400 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center hover:bg-emerald-400 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center hover:bg-emerald-400 transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-lg"></i>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4 font-inter">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-emerald-100 hover:text-white transition-colors cursor-pointer font-inter">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-emerald-500 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-emerald-100 text-sm font-inter">
              © {currentYear} GULLYHIVE. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="https://readdy.ai/?ref=logo" className="text-emerald-100 hover:text-white text-sm transition-colors cursor-pointer font-inter">
                Powered by Readdy
              </a>
              <div className="flex items-center space-x-2">
                <i className="ri-shield-check-line text-emerald-200"></i>
                <span className="text-emerald-100 text-sm font-inter">Secure Platform</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
