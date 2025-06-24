import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">FreshMart</h3>
            <p className="text-green-100 mb-4">
              Your one-stop shop for fresh groceries, delivered right to your doorstep.
              We source directly from farmers to bring you the freshest produce.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-green-200 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-200 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-200 transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-green-100 hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/categories" className="text-green-100 hover:text-white transition">Shop by Category</Link>
              </li>
              <li>
                <Link to="/featured" className="text-green-100 hover:text-white transition">Featured Products</Link>
              </li>
              <li>
                <Link to="/about" className="text-green-100 hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-green-100 hover:text-white transition">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-green-100 hover:text-white transition">FAQ</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-green-100 hover:text-white transition">Shipping Policy</Link>
              </li>
              <li>
                <Link to="/returns" className="text-green-100 hover:text-white transition">Returns & Refunds</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-green-100 hover:text-white transition">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-green-100 hover:text-white transition">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-green-100">1234 Green Street, Produce City, PC 56789</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span className="text-green-100">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span className="text-green-100">support@freshmart.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-10 pt-6">
          <p className="text-center text-green-200 text-sm">
            &copy; {new Date().getFullYear()} FreshMart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;