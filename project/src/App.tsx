import React, { useEffect } from 'react';
import { initPdfViewer } from './utils/pdfViewer';
import Navbar from './components/Navbar';
import AnimatedSection from './components/AnimatedSection';
import QuoteForm from './components/QuoteForm';
import { ASSETS } from './constants';
import { PRODUCTS } from './data/products';
import { 
  ArrowRight, 
  ExternalLink, 
  Search, 
  Target, 
  Megaphone, 
  BarChart3,
  User,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';


function App() {
  const [showPdf, setShowPdf] = React.useState(false);
  const pdfInitialized = React.useRef(false);

  const handlePdfToggle = () => {
    if (!pdfInitialized.current) {
      try {
        initPdfViewer();
        pdfInitialized.current = true;
      } catch (error) {
        console.error('PDF Viewer initialization failed:', error);
        return;
      }
    }
    setShowPdf(!showPdf);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen bg-air-blue text-white flex items-center">
        <div className="absolute inset-0">
            <img
              src={ASSETS.beachBackground}
              alt="Background"
              className="w-full h-full object-cover opacity-20"
            />
        </div>
        <AnimatedSection className="relative w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="mb-12">
              <img
                src={ASSETS.hoffmangruppeLogo}
                alt="Hoffmangruppe Promotions"
                className="h-24 w-auto rounded-lg"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Partner in Promotional Excellence
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Discover our extensive range of promotional products designed to elevate your brand and make lasting impressions.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-air-blue px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Browse Our Catalogs <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-air-blue transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </AnimatedSection>
        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowRight className="h-8 w-8 text-white transform rotate-90 hover:scale-110 transition-transform" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              Hoffmangruppe Promotions is your trusted partner for innovative marketing solutions and high-quality promotional products. With over a decade of experience, we specialize in helping businesses create lasting impressions through creative branding strategies and custom merchandise.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-6 text-air-blue">Our Story</h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    <i>"I started Hoffmangruppe Promotions in 2010 as an Authorized Kaeser & Blair Dealer to provide
                    specialty marketing solutions to my friends, family, and my organizations at discounted prices. 
                    I am grateful to have received countless referrals from my initial market. I am committed to 
                    saving my clients' marketing budgets for the same quality products they can get elsewhere. 
                    I look forward to connecting and becoming your marketing partner!"</i>
                    <br />
                    - Chris Hoffman, Owner/Founder
                  </p>
                </div>

                <div className="bg-gradient-to-br from-air-blue to-air-blue-700 p-10 rounded-2xl">
                  <div className="mb-8">
                    <img
                      src={ASSETS.kbLogo}
                      alt="Kaeser & Blair"
                      className="h-20 w-auto mb-8 mx-auto"
                    />
                    <h3 className="text-3xl font-bold mb-6 text-center text-white">Our Partnership</h3>
                    <p className="text-gray-100 mb-8 text-lg leading-relaxed">
                      Kaeser and Blair is a family owned company that has been a leader in the industry for 130 years! 
                      They have long lasting relationships with all of the industry suppliers. What that means for our 
                      clients is hundreds of preferred vendors offering YOU better pricing, reduced setup fees, and 
                      faster turnaround times!
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <p className="text-base text-gray-100">130+ Years in Business</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <p className="text-base text-gray-100">Preferred Vendor Network</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <p className="text-base text-gray-100">Faster Turnaround Times</p>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-air-blue text-white px-8 py-4 rounded-lg hover:bg-air-blue-600 transition-colors text-lg font-semibold"
                  >
                    Let's Work Together
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive collection of promotional products designed to make your brand stand out.
            </p>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-0">
            {PRODUCTS.map((item) => (
              <AnimatedSection
                key={item.title}
                animation="zoom-in"
                className="bg-white p-6 sm:p-8 rounded-lg shadow-md group hover:shadow-xl transition-all"
              >
                <div className="flex flex-col h-full">
                  {React.createElement(item.icon, { className: "h-10 w-10 sm:h-12 sm:w-12 text-air-blue mb-4 sm:mb-6" })}
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 flex-grow">{item.description}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-air-blue hover:text-air-blue-600 group-hover:translate-x-2 transition-all text-sm sm:text-base"
                  >
                    View Catalog <ExternalLink className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Custom Search Box */}
          <AnimatedSection animation="fade-up" delay={200} className="mt-12">
            <div className="bg-gradient-to-r from-air-blue to-air-blue-600 p-8 rounded-lg text-center max-w-2xl mx-auto">
              <Search className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Didn't find what you're looking for?</h3>
              <p className="text-white/90 mb-6">Search our extensive catalog of promotional products</p>
              <a 
                href="https://www.zoomcatalog.com/catalogsearch/HoffmangruppePromotions#list/all" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-air-blue px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                Search Catalog <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Promotional Products Section */}
      <section id="why-promo" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Promotional Products?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover how promotional products can elevate your brand and create lasting impressions.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Brand Recognition',
                description: 'Increase visibility and create lasting brand awareness',
                icon: Target
              },
              {
                title: 'Customer Engagement',
                description: 'Create meaningful connections with your audience',
                icon: Megaphone
              },
              {
                title: 'Measurable ROI',
                description: 'Track the success of your promotional campaigns',
                icon: BarChart3
              }
            ].map((item) => (
              <AnimatedSection
                key={item.title}
                animation="zoom-in"
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <item.icon className="h-12 w-12 text-air-blue mb-6" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </AnimatedSection>
            ))}
          </div>

          {/* PDF Embed Section */}
          <AnimatedSection animation="fade-up" delay={200} className="mt-24">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold mb-4 text-air-blue">2023 Ad Impressions Report</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive ad performance metrics and insights from 2023
              </p>
            </div>
            <div className="flex flex-col items-center px-4 sm:px-6">
              <button 
                id="show-pdf" 
                className="bg-air-blue text-white px-8 py-3 rounded-md font-medium hover:bg-air-blue-600 transition-colors mb-2"
                onClick={handlePdfToggle}
              >
                {showPdf ? 'Hide PDF Report' : 'Show PDF Report'}
              </button>
              <div id="pdf-viewer" className={`w-full max-w-4xl mx-auto ${showPdf ? 'block' : 'hidden'} mt-4`}>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <AnimatedSection animation="fade-right">
              <div className="space-y-8">
              <div className="mb-6">
                <img
                  src={ASSETS.hpLogo}
                  alt="HP Logo"
                  className="h-16 w-auto rounded-lg"
                />
              </div>
              <h2 className="text-3xl font-bold">Contact Us</h2>
              <p className="text-gray-600">
                Ready to elevate your brand? Get in touch with us today.
              </p>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600">
                  <User className="h-5 w-5 mr-2" />
                  Chris Hoffman
                </p>
                <p className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  Springfield, MO
                </p>
                <p className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-2" />
                  417.200.4633
                </p>
                <p className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-2" />
                  info@hoffmangruppe.com
                </p>
                <div className="flex space-x-4 pt-2">
                  <a href="https://www.facebook.com/profile.php?id=100063604969915" target="_blank" rel="noopener noreferrer">
                    <img src={ASSETS.facebookLogo} alt="Facebook" className="h-6 w-6 hover:opacity-75 transition-opacity" />
                  </a>
                  <a href="https://www.linkedin.com/in/chris-hoffman-62473a29" target="_blank" rel="noopener noreferrer">
                    <img src={ASSETS.linkedinLogo} alt="LinkedIn" className="h-6 w-6 hover:opacity-75 transition-opacity" />
                  </a>
                </div>
              </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={200}>
              <div className="bg-sky-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-[rgb(3_105_161)]">
                <h3 className="text-2xl font-semibold mb-6 text-sky-700">Request a Quote</h3>
                <QuoteForm className="[&_input]:shadow-sm [&_textarea]:shadow-sm" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-air-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img 
                  src={ASSETS.hoffmangruppeLogo} 
                  alt="Hoffmangruppe Promotions" 
                  className="h-12 w-auto rounded-lg"
                />
                <img 
                  src={ASSETS.kbLogo} 
                  alt="Kaeser & Blair" 
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-300 text-sm">
                Your trusted partner in promotional products and brand marketing solutions.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=100063604969915" target="_blank" rel="noopener noreferrer">
                  <img src={ASSETS.facebookLogo} alt="Facebook" className="h-6 w-6 hover:opacity-75 transition-opacity" />
                </a>
                <a href="https://www.linkedin.com/in/chris-hoffman-62473a29" target="_blank" rel="noopener noreferrer">
                  <img src={ASSETS.linkedinLogo} alt="LinkedIn" className="h-6 w-6 hover:opacity-75 transition-opacity" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Quick Links</h3>
              <nav className="space-y-2">
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white block text-sm text-left w-full"
                >
                  Home
                </button>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white block text-sm text-left w-full"
                >
                  About Us
                </button>
                <button 
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white block text-sm text-left w-full"
                >
                  Products
                </button>
                <button 
                  onClick={() => document.getElementById('why-promo')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white block text-sm text-left w-full"
                >
                  Why Promo?
                </button>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white block text-sm text-left w-full"
                >
                  Contact
                </button>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Contact Info</h3>
              <div className="text-gray-300 text-sm space-y-4">
                <p className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Chris Hoffman
                </p>
                <p className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Springfield, MO
                </p>
                <p className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  417.200.4633
                </p>
                <p className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  info@hoffmangruppe.com
                </p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-air-blue-600 mt-8 pt-8">
            <p className="text-center text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} Hoffmangruppe Promotions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
