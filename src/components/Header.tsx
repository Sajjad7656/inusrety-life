import { useState } from "react";
import { Menu, X, Phone, Shield } from "lucide-react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-sm" style={{ backgroundColor: '#09103E' }}>
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Insurety Life" className="h-10" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="font-medium text-white hover:text-blue-400 transition-colors">Home</a>
          <a href="/about" className="font-medium text-white hover:text-blue-400 transition-colors">About Us</a>
          <a href="/contact" className="font-medium text-white hover:text-blue-400 transition-colors">Contact Us</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="/quote" className="bg-blue-100 text-blue-700 font-medium text-sm px-6 py-2.5 rounded-full hover:bg-blue-200 transition-colors">
            Get a Quote
          </a>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden px-4 py-6 space-y-4" style={{ backgroundColor: '#09103E' }}>
          <a href="/" className="block font-medium text-white">Home</a>
          <a href="/about" className="block font-medium text-white">About Us</a>
          <a href="/contact" className="block font-medium text-white">Contact Us</a>
          <a href="/quote" className="inline-block bg-blue-100 text-blue-700 font-medium text-sm px-6 py-2.5 rounded-full">
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
