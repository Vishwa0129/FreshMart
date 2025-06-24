import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, SlidersHorizontal } from 'lucide-react';
import { getProductsByCategory } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [showFilters, setShowFilters] = useState(false);
  
  // Convert URL parameter to proper category name
  const categoryName = category ? category.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ') : '';
  
  let products = getProductsByCategory(categoryName);
  
  // Apply sorting
  products = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'featured':
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      default:
        return 0;
    }
  });
  
  // Apply price filter
  products = products.filter(product => 
    product.price >= priceRange[0] && product.price <= priceRange[1]
  );
  
  // Category banner images
  const categoryBanners: { [key: string]: string } = {
    Fruits: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    Vegetables: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    Dairy: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    Bakery: 'https://images.pexels.com/photos/1756061/pexels-photo-1756061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'Meat & Seafood': 'https://images.pexels.com/photos/4147875/pexels-photo-4147875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    Beverages: 'https://images.pexels.com/photos/2531186/pexels-photo-2531186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  };
  
  // Category descriptions
  const categoryDescriptions: { [key: string]: string } = {
    'Meat & Seafood': 'Discover our premium selection of fresh meat and seafood. From prime cuts to fresh-caught fish, we offer high-quality proteins for your table.',
    Fruits: 'Fresh, seasonal fruits sourced directly from local farms.',
    Vegetables: 'Organic and locally sourced vegetables for your healthy lifestyle.',
    Dairy: 'Fresh dairy products from trusted local farms.',
    Bakery: 'Freshly baked goods made daily in our store.',
    Beverages: 'Refreshing drinks and beverages for every occasion.'
  };
  
  return (
    <div>
      {/* Category Banner */}
      <div className="relative h-64 md:h-80">
        <img
          src={categoryBanners[categoryName] || categoryBanners.Fruits}
          alt={categoryName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">{categoryName}</h1>
          <p className="text-white text-center max-w-2xl">
            {categoryDescriptions[categoryName]}
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/categories" className="inline-flex items-center text-gray-600 hover:text-green-600">
            <ChevronLeft size={16} className="mr-1" />
            Back to Categories
          </Link>
        </div>
        
        {/* Filters and Sorting */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <SlidersHorizontal size={16} />
                Filters
              </Button>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
            
            <p className="text-gray-600">
              Showing {products.length} products
            </p>
          </div>
          
          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="w-full"
                />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-full"
                />
                <span className="text-sm text-gray-600">
                  ${priceRange[0]} - ${priceRange[1]}
                </span>
              </div>
            </div>
          )}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No products found</h2>
            <p className="text-gray-600">
              Try adjusting your filters to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;