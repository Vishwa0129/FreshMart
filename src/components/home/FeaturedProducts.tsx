import React from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedProducts } from '../../data/products';
import ProductCard from '../ui/ProductCard';
import Button from '../ui/Button';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
            <p className="text-gray-600">High-quality products selected for you</p>
          </div>
          <Link to="/featured" className="mt-4 sm:mt-0">
            <Button variant="outline">
              View All
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} featured />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;