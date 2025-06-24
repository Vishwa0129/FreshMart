import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <div className="max-w-md mx-auto">
          <ShoppingCart size={48} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
          <Link to="/categories">
            <Button>Start Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Cart Items */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="hidden md:grid grid-cols-5 gap-4 p-4 bg-gray-50 border-b">
              <div className="col-span-2 font-medium">Product</div>
              <div className="font-medium">Price</div>
              <div className="font-medium">Quantity</div>
              <div className="font-medium text-right">Total</div>
            </div>
            
            <div className="divide-y divide-gray-200">
              {cartItems.map(item => {
                const discountedPrice = item.product.discount 
                  ? (item.product.price - (item.product.price * item.product.discount / 100))
                  : item.product.price;
                
                const itemTotal = discountedPrice * item.quantity;
                
                return (
                  <div key={item.product.id} className="p-4 grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                    {/* Product */}
                    <div className="md:col-span-2 flex items-center">
                      <img 
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded mr-4"
                      />
                      <div>
                        <Link to={`/product/${item.product.id}`} className="font-medium text-gray-900 hover:text-green-600">
                          {item.product.name}
                        </Link>
                        <div className="text-sm text-gray-500">{item.product.category}</div>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div>
                      {item.product.discount ? (
                        <div>
                          <div className="font-medium">${discountedPrice.toFixed(2)}</div>
                          <div className="text-sm text-gray-500 line-through">${item.product.price.toFixed(2)}</div>
                        </div>
                      ) : (
                        <div className="font-medium">${item.product.price.toFixed(2)}</div>
                      )}
                    </div>
                    
                    {/* Quantity */}
                    <div className="flex items-center">
                      <button 
                        className="w-8 h-8 rounded-l border border-gray-300 flex items-center justify-center bg-gray-50 text-gray-600 hover:bg-gray-100"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.product.id, Math.max(1, parseInt(e.target.value) || 1))}
                        className="w-12 h-8 border-t border-b border-gray-300 text-center"
                      />
                      <button 
                        className="w-8 h-8 rounded-r border border-gray-300 flex items-center justify-center bg-gray-50 text-gray-600 hover:bg-gray-100"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        +
                      </button>
                      
                      <button 
                        className="ml-4 text-red-500 hover:text-red-700"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    
                    {/* Total */}
                    <div className="text-right font-medium">
                      ${itemTotal.toFixed(2)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">$0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">${(getCartTotal() * 0.08).toFixed(2)}</span>
              </div>
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${(getCartTotal() + (getCartTotal() * 0.08)).toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <Link to="/checkout">
              <Button variant="primary" fullWidth size="lg">
                Proceed to Checkout
              </Button>
            </Link>
            
            <div className="mt-6">
              <h3 className="font-medium mb-2">We Accept</h3>
              <div className="flex space-x-2">
                <div className="bg-gray-100 rounded p-2">
                  <span className="text-xs">Visa</span>
                </div>
                <div className="bg-gray-100 rounded p-2">
                  <span className="text-xs">Mastercard</span>
                </div>
                <div className="bg-gray-100 rounded p-2">
                  <span className="text-xs">Paypal</span>
                </div>
                <div className="bg-gray-100 rounded p-2">
                  <span className="text-xs">Apple Pay</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;