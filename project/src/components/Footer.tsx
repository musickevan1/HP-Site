import hoffmangruppeLogo from '/src/assets/HP logo.jpg';
import kbLogo from '/src/assets/K&B.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-night text-white mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          {/* Company Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-8">
              <div className="h-14 w-auto">
                <img
                  src={hoffmangruppeLogo}
                  alt="Hoffmangruppe Promotions"
                  className="h-full w-auto object-contain hover:opacity-80 transition-opacity"
                  style={{ maxWidth: '160px' }}
                />
              </div>
              <div className="h-14 w-auto">
                <img
                  src={kbLogo}
                  alt="Kaeser & Blair"
                  className="h-full w-auto object-contain hover:opacity-80 transition-opacity"
                  style={{ maxWidth: '160px' }}
                />
              </div>
            </div>
            <p className="text-silver text-base leading-relaxed">
              Your trusted partner in promotional product solutions, delivering excellence through innovative branding strategies.
            </p>
          </div>

          {/* Rest of the footer content remains the same */}
        </div>

        {/* Footer Bottom */}
        {/* Footer Bottom */}
        <div className="border-t border-night-600 py-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-silver text-sm tracking-wide">
              © {currentYear} Hoffmangruppe Promotions. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <a href="#" className="text-silver hover:text-white text-sm transition-colors duration-200 hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="text-silver hover:text-white text-sm transition-colors duration-200 hover:underline">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
