import React from 'react';
import { ArrowRight, Package, Users, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Partner in Promotional Excellence
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Discover our extensive range of promotional products designed to elevate your brand and make lasting impressions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/products"
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors inline-flex items-center"
            >
              Browse Our Catalogs <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Package className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Extensive Catalog</h3>
              <p className="text-gray-600">
                Access thousands of promotional products from trusted manufacturers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Users className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-gray-600">
                Our team provides personalized solutions for your promotional needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <TrendingUp className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Industry Insights</h3>
              <p className="text-gray-600">
                Stay informed with latest trends and promotional strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Company Casuals',
                image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80',
                link: '/products/casuals'
              },
              {
                title: 'K&B Best Buys',
                image: 'https://images.unsplash.com/photo-1560393464-5c69a73c5770?auto=format&fit=crop&q=80',
                link: '/products/best-buys'
              },
              {
                title: 'K&B Windjammer',
                image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80',
                link: '/products/windjammer'
              },
              {
                title: 'Custom Solutions',
                image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80',
                link: '/products/custom'
              }
            ].map((category) => (
              <a
                key={category.title}
                href={category.link}
                className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-semibold p-6">
                    {category.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Let us help you find the perfect promotional products for your brand.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}