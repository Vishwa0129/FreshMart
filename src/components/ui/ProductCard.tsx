import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import Button from './Button';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };
  
  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };
  
  const discountedPrice = product.discount 
    ? (product.price - (product.price * product.discount / 100)).toFixed(2) 
    : null;
  
  return (
    <div className={`bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:shadow-md hover:-translate-y-1 ${featured ? 'h-full' : ''}`}>
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-48 object-cover"
          />
          
          {/* Discount badge */}
          {product.discount && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              {product.discount}% OFF
            </div>
          )}
          
          {/* Wishlist button */}
          <button 
            onClick={handleToggleWishlist}
            className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm hover:bg-gray-100"
          >
            <Heart 
              size={18} 
              className={isInWishlist(product.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'} 
            />
          </button>
        </div>
        
        <div className="p-4">
          <div className="text-xs text-gray-500 mb-1">{product.category}</div>
          <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
          
          <div className="flex items-center mb-2">
            {/* Star rating */}
            <div className="flex text-amber-400 mr-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <span className="text-xs text-gray-600">{product.rating}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              {discountedPrice ? (
                <div className="flex items-center">
                  <span className="font-bold text-gray-900 mr-2">${discountedPrice}</span>
                  <span className="text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
                </div>
              ) : (
                <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
              )}
              <div className="text-xs text-gray-500">per {product.unit}</div>
            </div>
            
            <Button 
              variant="primary" 
              size="sm" 
              onClick={handleAddToCart}
              className="flex items-center"
            >
              <ShoppingCart size={16} className="mr-1" />
              Add
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;