import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const PromoBanner: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-green-600 to-green-700 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Get Fresh Produce Delivered Today!</h2>
            <p className="mb-6 opacity-90 max-w-lg mx-auto md:mx-0">
              Join thousands of happy customers who get their groceries delivered right to their doorstep. Use code FRESH15 for 15% off your first order.
            </p>
            <Link to="/signup">
              <Button variant="secondary" size="lg">
                Sign Up & Save 15%
              </Button>
            </Link>
          </div>
          
          <div className="md:flex justify-end hidden">
            <img 
              src="https://images.pexels.com/photos/1132034/pexels-photo-1132034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Fresh produce" 
              className="rounded-lg shadow-lg max-w-sm h-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;