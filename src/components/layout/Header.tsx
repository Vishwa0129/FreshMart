import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, User, Search, Menu, X } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartItems } = useCart();
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-green-500">Fresh<span className="text-green-700">Mart</span></span>
          </Link>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:block flex-grow max-w-md mx-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-2 px-4 pr-10 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-green-500">
                <Search size={18} />
              </button>
            </form>
          </div>

          {/* Navigation - desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/wishlist" className="flex items-center text-gray-700 hover:text-green-500">
              <Heart size={20} className="mr-1" />
              <span className="text-sm">Wishlist</span>
            </Link>
            <Link to="/cart" className="flex items-center text-gray-700 hover:text-green-500 relative">
              <ShoppingCart size={20} className="mr-1" />
              <span className="text-sm">Cart</span>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
            {user ? (
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-green-500">
                  <User size={20} className="mr-1" />
                  <span className="text-sm">{user.name.split(' ')[0]}</span>
                </button>
                <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-lg hidden group-hover:block">
                  <Link to="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">My Account</Link>
                  <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">Orders</Link>
                  {user.role === 'admin' && (
                    <Link to="/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50">Admin Dashboard</Link>
                  )}
                  <button onClick={logout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50">
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="flex items-center text-gray-700 hover:text-green-500">
                <User size={20} className="mr-1" />
                <span className="text-sm">Login</span>
              </Link>
            )}
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-500" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Search bar - mobile only */}
        <div className="mt-4 md:hidden">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full py-2 px-4 pr-10 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-green-500">
              <Search size={18} />
            </button>
          </form>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-100">
            <ul className="space-y-4">
              <li>
                <Link to="/" className="block py-2 text-gray-700 hover:text-green-500" onClick={toggleMenu}>Home</Link>
              </li>
              <li>
                <Link to="/categories" className="block py-2 text-gray-700 hover:text-green-500" onClick={toggleMenu}>Categories</Link>
              </li>
              <li>
                <Link to="/wishlist" className="block py-2 text-gray-700 hover:text-green-500" onClick={toggleMenu}>Wishlist</Link>
              </li>
              <li>
                <Link to="/cart" className="block py-2 text-gray-700 hover:text-green-500" onClick={toggleMenu}>
                  Cart {cartItems.length > 0 && `(${cartItems.length})`}
                </Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link to="/account" className="block py-2 text-gray-700 hover:text-green-500" onClick={toggleMenu}>My Account</Link>
                  </li>
                  <li>
                    <Link to="/orders" className="block py-2 text-gray-700 hover:text-green-500" onClick={toggleMenu}>Orders</Link>
                  </li>
                  {user.role === 'admin' && (
                    <li>
                      <Link to="/admin" className="block py-2 text-gray-700 hover:text-green-500" onClick={toggleMenu}>Admin Dashboard</Link>
                    </li>
                  )}
                  <li>
                    <button onClick={() => { logout(); toggleMenu(); }} className="block w-full text-left py-2 text-gray-700 hover:text-green-500">
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/login" className="block py-2 text-gray-700 hover:text-green-500" onClick={toggleMenu}>Login / Register</Link>
                </li>
              )}
            </ul>
          </nav>
        )}
      </div>

      {/* Categories navbar */}
      <div className="bg-green-50 hidden md:block">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-8 py-3 overflow-x-auto">
            <li>
              <Link to="/category/fruits" className="text-sm font-medium text-gray-700 hover:text-green-600">Fruits</Link>
            </li>
            <li>
              <Link to="/category/vegetables" className="text-sm font-medium text-gray-700 hover:text-green-600">Vegetables</Link>
            </li>
            <li>
              <Link to="/category/dairy" className="text-sm font-medium text-gray-700 hover:text-green-600">Dairy</Link>
            </li>
            <li>
              <Link to="/category/bakery" className="text-sm font-medium text-gray-700 hover:text-green-600">Bakery</Link>
            </li>
            <li>
              <Link to="/category/meat" className="text-sm font-medium text-gray-700 hover:text-green-600">Meat & Seafood</Link>
            </li>
            <li>
              <Link to="/category/beverages" className="text-sm font-medium text-gray-700 hover:text-green-600">Beverages</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;