import React from 'react';
import Navbar from './components/Navbar';
import AnimatedSection from './components/AnimatedSection';
import QuoteForm from './components/QuoteForm';
import { ASSETS } from './constants';
import { PRODUCTS } from './data/products';
import { 
  ArrowRight, 
  Package, 
  Users, 
  TrendingUp, 
  ExternalLink, 
  Search, 
  Target, 
  Megaphone, 
  BarChart3
} from 'lucide-react';


function App() {
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
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn more about our story, our partnership, and what makes us different
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chris Hoffman Section */}
            <AnimatedSection animation="fade-right" className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
                  <p className="text-gray-600 mb-6">
                    "I started Hoffmangruppe Promotions in 2010 as an Authorized Kaeser & Blair Dealer to provide
                    specialty marketing solutions to my friends, family, and my organizations at discounted prices. 
                    I am grateful to have received countless referrals from my initial market. I am committed to 
                    saving my clients' marketing budgets for the same quality products they can get elsewhere. 
                    I look forward to connecting and becoming your marketing partner!"
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-air-blue">13+</div>
                      <div className="text-sm text-gray-600">Years in Business</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-air-blue">500+</div>
                      <div className="text-sm text-gray-600">Happy Clients</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-air-blue">$1M+</div>
                      <div className="text-sm text-gray-600">Saved for Clients</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-air-blue">100%</div>
                      <div className="text-sm text-gray-600">Satisfaction Guarantee</div>
                    </div>
                  </div>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-air-blue text-white px-6 py-3 rounded-md hover:bg-air-blue-600 transition-colors"
                  >
                    Let's Work Together
                  </button>
                </div>
              </div>
            </AnimatedSection>

            {/* K&B Section */}
            <AnimatedSection animation="fade-left" delay={200} className="lg:col-span-1">
              <div className="bg-gradient-to-b from-air-blue to-air-blue-600 p-8 rounded-lg shadow-lg text-white h-full">
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <img
                      src={ASSETS.kbLogo}
                      alt="Kaeser & Blair"
                      className="h-16 w-auto mb-6 mx-auto"
                    />
                    <h3 className="text-2xl font-semibold mb-4 text-center">Our Partnership</h3>
                    <p className="text-gray-100 mb-6">
                      Kaeser and Blair is a family owned company that has been a leader in the industry for 130 years! 
                      They have long lasting relationships with all of the industry suppliers. What that means for our 
                      clients is hundreds of preferred vendors offering YOU better pricing, reduced setup fees, and 
                      faster turnaround times!
                    </p>
                  </div>
                  <div className="mt-auto space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <p className="text-sm text-gray-100">130+ Years in Business</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <p className="text-sm text-gray-100">Preferred Vendor Network</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <p className="text-sm text-gray-100">Faster Turnaround Times</p>
                    </div>
                  </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((item) => (
              <AnimatedSection
                key={item.title}
                animation="zoom-in"
                className="bg-white p-8 rounded-lg shadow-md group hover:shadow-xl transition-all"
              >
                <div className="flex flex-col h-full">
                  {React.createElement(item.icon, { className: "h-12 w-12 text-air-blue mb-6" })}
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{item.description}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-air-blue hover:text-air-blue-600 group-hover:translate-x-2 transition-all"
                  >
                    View Catalog <ExternalLink className="ml-2 h-5 w-5" />
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
              <button className="bg-white text-air-blue px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center">
                Search Catalog <ArrowRight className="ml-2 h-5 w-5" />
              </button>
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <AnimatedSection animation="fade-right">
              <div className="space-y-8">
              <img
                src={ASSETS.hoffmangruppeLogo}
                alt="Hoffmangruppe Promotions"
                className="h-16 w-auto rounded-lg"
              />
                <h2 className="text-3xl font-bold">Contact Us</h2>
                <p className="text-gray-600">
                  Ready to elevate your brand? Get in touch with us today.
                </p>
                <div className="space-y-4">
                  <p className="flex items-center text-gray-600">
                    <Package className="h-5 w-5 mr-2" />
                    123 Business Avenue, Suite 100
                  </p>
                  <p className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-2" />
                    (555) 123-4567
                  </p>
                  <p className="flex items-center text-gray-600">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    info@hoffmangruppe.com
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-left" delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-6">Request a Quote</h3>
                <QuoteForm />
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
              <div className="text-gray-300 text-sm space-y-2">
                <p>123 Business Avenue</p>
                <p>Suite 100, City, State ZIP</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@hoffmangruppe.com</p>
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
