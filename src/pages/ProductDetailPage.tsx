import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star, ChevronLeft } from 'lucide-react';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import Button from '../components/ui/Button';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();
  
  const product = id ? getProductById(id) : undefined;
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <p className="mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const handleToggleWishlist = () => {
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
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link to="/categories" className="inline-flex items-center text-gray-600 hover:text-green-600">
          <ChevronLeft size={16} className="mr-1" />
          Back to Products
        </Link>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-gray-50 rounded-lg overflow-hidden">
          <img 
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Product Details */}
        <div>
          <span className="text-sm text-gray-500">{product.category}</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">{product.name}</h1>
          
          {/* Rating */}
          <div className="flex items-center mb-4">
            <div className="flex text-amber-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={`${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                />
              ))}
            </div>
            <span className="text-gray-600">{product.rating} ({product.reviews.length} reviews)</span>
          </div>
          
          {/* Price */}
          <div className="mb-6">
            {discountedPrice ? (
              <div className="flex items-center">
                <span className="text-2xl font-bold text-gray-900 mr-3">${discountedPrice}</span>
                <span className="text-lg text-gray-500 line-through">${product.price.toFixed(2)}</span>
                <span className="ml-3 px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded">
                  {product.discount}% OFF
                </span>
              </div>
            ) : (
              <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
            )}
            <p className="text-sm text-gray-500 mt-1">per {product.unit}</p>
          </div>
          
          {/* Description */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
            <p className="text-gray-700">{product.description}</p>
          </div>
          
          {/* Quantity */}
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">Quantity</h3>
            <div className="flex items-center">
              <button 
                className="w-10 h-10 rounded-l border border-gray-300 flex items-center justify-center bg-gray-50 text-gray-600 hover:bg-gray-100"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <input 
                type="number" 
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 h-10 border-t border-b border-gray-300 text-center"
              />
              <button 
                className="w-10 h-10 rounded-r border border-gray-300 flex items-center justify-center bg-gray-50 text-gray-600 hover:bg-gray-100"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
          
          {/* Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button 
              variant="primary" 
              size="lg" 
              onClick={handleAddToCart}
              className="flex items-center justify-center"
              fullWidth
            >
              <ShoppingCart size={20} className="mr-2" />
              Add to Cart
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={handleToggleWishlist}
              className="flex items-center justify-center"
            >
              <Heart 
                size={20} 
                className={`${isInWishlist(product.id) ? 'fill-red-500 text-red-500' : ''}`} 
              />
            </Button>
          </div>
          
          {/* Stock */}
          <div className="text-sm text-gray-700">
            <span className="font-medium">Availability:</span> 
            {product.stock > 0 ? (
              <span className="text-green-600 ml-1">In Stock ({product.stock} available)</span>
            ) : (
              <span className="text-red-600 ml-1">Out of Stock</span>
            )}
          </div>
        </div>
      </div>
      
      {/* Reviews section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
        
        {product.reviews.length > 0 ? (
          <div className="space-y-6">
            {product.reviews.map(review => (
              <div key={review.id} className="border-b border-gray-200 pb-6">
                <div className="flex justify-between mb-2">
                  <div className="font-medium">{review.userName}</div>
                  <div className="text-sm text-gray-500">{review.date}</div>
                </div>
                <div className="flex text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${i < Math.floor(review.rating) ? 'fill-current' : ''}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <p className="text-gray-600 mb-4">This product has no reviews yet.</p>
            <Button variant="outline">Write a Review</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;