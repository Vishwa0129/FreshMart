import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Fruits',
    image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 15
  },
  {
    id: '2',
    name: 'Vegetables',
    image: 'https://images.pexels.com/photos/1656663/pexels-photo-1656663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 20
  },
  {
    id: '3',
    name: 'Dairy',
    image: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 12
  },
  {
    id: '4',
    name: 'Bakery',
    image: 'https://images.pexels.com/photos/1756061/pexels-photo-1756061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 8
  },
  {
    id: '5',
    name: 'Meat & Seafood',
    image: 'https://images.pexels.com/photos/4147875/pexels-photo-4147875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 10
  },
  {
    id: '6',
    name: 'Beverages',
    image: 'https://images.pexels.com/photos/2531186/pexels-photo-2531186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    count: 18
  }
];

export const products: Product[] = [
  // Fruits
  {
    id: '1',
    name: 'Organic Bananas',
    category: 'Fruits',
    price: 0.99,
    image: 'https://images.pexels.com/photos/1028599/pexels-photo-1028599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Fresh organic bananas, perfect for smoothies and snacks.',
    stock: 50,
    unit: 'lb',
    rating: 4.5,
    reviews: [],
    featured: true
  },
  {
    id: '2',
    name: 'Red Apples',
    category: 'Fruits',
    price: 1.49,
    image: 'https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Crisp and sweet red apples, freshly harvested.',
    stock: 40,
    unit: 'lb',
    rating: 4.3,
    reviews: [],
    featured: true
  },
  {
    id: '3',
    name: 'Avocado',
    category: 'Fruits',
    price: 1.99,
    image: 'https://images.pexels.com/photos/2228553/pexels-photo-2228553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Ripe avocados, perfect for guacamole or toast.',
    stock: 30,
    unit: 'each',
    rating: 4.7,
    reviews: [],
    discount: 15
  },
  
  // Vegetables
  {
    id: '4',
    name: 'Broccoli',
    category: 'Vegetables',
    price: 1.29,
    image: 'https://images.pexels.com/photos/161514/brocoli-vegetables-salad-green-161514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Fresh green broccoli, locally sourced.',
    stock: 25,
    unit: 'lb',
    rating: 4.1,
    reviews: []
  },
  {
    id: '5',
    name: 'Carrots',
    category: 'Vegetables',
    price: 0.89,
    image: 'https://images.pexels.com/photos/1306559/pexels-photo-1306559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Fresh orange carrots, perfect for salads and cooking.',
    stock: 60,
    unit: 'lb',
    rating: 4.4,
    reviews: [],
    featured: true
  },
  {
    id: '6',
    name: 'Bell Peppers',
    category: 'Vegetables',
    price: 1.49,
    image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Colorful bell peppers, great for stir-fries.',
    stock: 40,
    unit: 'lb',
    rating: 4.3,
    reviews: []
  },
  
  // Dairy
  {
    id: '7',
    name: 'Organic Milk',
    category: 'Dairy',
    price: 3.49,
    image: 'https://images.pexels.com/photos/3735112/pexels-photo-3735112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Fresh organic whole milk from grass-fed cows.',
    stock: 20,
    unit: 'gallon',
    rating: 4.6,
    reviews: []
  },
  {
    id: '8',
    name: 'Greek Yogurt',
    category: 'Dairy',
    price: 4.99,
    image: 'https://images.pexels.com/photos/373882/pexels-photo-373882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Creamy Greek yogurt, high in protein and probiotics.',
    stock: 15,
    unit: '32oz',
    rating: 4.8,
    reviews: []
  },
  {
    id: '9',
    name: 'Cheddar Cheese',
    category: 'Dairy',
    price: 5.99,
    image: 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Sharp cheddar cheese, aged to perfection.',
    stock: 25,
    unit: 'lb',
    rating: 4.7,
    reviews: []
  },
  
  // Bakery
  {
    id: '10',
    name: 'Sourdough Bread',
    category: 'Bakery',
    price: 4.49,
    image: 'https://images.pexels.com/photos/2693447/pexels-photo-2693447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Freshly baked sourdough bread, made daily.',
    stock: 10,
    unit: 'loaf',
    rating: 4.7,
    reviews: [],
    featured: true
  },
  {
    id: '11',
    name: 'Croissants',
    category: 'Bakery',
    price: 2.99,
    image: 'https://images.pexels.com/photos/3724/food-morning-breakfast-orange.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Buttery, flaky croissants baked fresh every morning.',
    stock: 20,
    unit: 'piece',
    rating: 4.6,
    reviews: []
  },
  {
    id: '12',
    name: 'Whole Grain Bread',
    category: 'Bakery',
    price: 3.99,
    image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Healthy whole grain bread with seeds.',
    stock: 15,
    unit: 'loaf',
    rating: 4.5,
    reviews: []
  },
  
  // Meat & Seafood
  {
    id: '13',
    name: 'Salmon Fillet',
    category: 'Meat & Seafood',
    price: 12.99,
    image: 'https://images.pexels.com/photos/3296434/pexels-photo-3296434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Fresh Atlantic salmon fillet.',
    stock: 10,
    unit: 'lb',
    rating: 4.8,
    reviews: [],
    featured: true
  },
  {
    id: '14',
    name: 'Chicken Breast',
    category: 'Meat & Seafood',
    price: 5.99,
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Boneless, skinless chicken breast.',
    stock: 30,
    unit: 'lb',
    rating: 4.5,
    reviews: []
  },
  {
    id: '15',
    name: 'Ground Beef',
    category: 'Meat & Seafood',
    price: 6.99,
    image: 'https://images.pexels.com/photos/1927377/pexels-photo-1927377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Fresh ground beef, 85% lean.',
    stock: 25,
    unit: 'lb',
    rating: 4.4,
    reviews: []
  },
  {
    id: '19',
    name: 'Shrimp',
    category: 'Meat & Seafood',
    price: 14.99,
    image: 'https://images.pexels.com/photos/3875425/pexels-photo-3875425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Fresh jumbo shrimp, perfect for grilling or seafood dishes.',
    stock: 15,
    unit: 'lb',
    rating: 4.7,
    reviews: []
  },
  {
    id: '20',
    name: 'Pork Chops',
    category: 'Meat & Seafood',
    price: 7.99,
    image: 'https://images.pexels.com/photos/6941010/pexels-photo-6941010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Premium cut bone-in pork chops.',
    stock: 20,
    unit: 'lb',
    rating: 4.6,
    reviews: []
  },
  {
    id: '21',
    name: 'Tuna Steak',
    category: 'Meat & Seafood',
    price: 15.99,
    image: 'https://images.pexels.com/photos/8470793/pexels-photo-8470793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Fresh yellowfin tuna steak, sushi-grade.',
    stock: 12,
    unit: 'lb',
    rating: 4.9,
    reviews: [],
    featured: true
  },
  {
    id: '22',
    name: 'Lamb Chops',
    category: 'Meat & Seafood',
    price: 16.99,
    image: 'https://images.pexels.com/photos/6941042/pexels-photo-6941042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Premium New Zealand lamb chops.',
    stock: 10,
    unit: 'lb',
    rating: 4.8,
    reviews: []
  },
  {
    id: '23',
    name: 'Mussels',
    category: 'Meat & Seafood',
    price: 6.99,
    image: 'https://images.pexels.com/photos/8470837/pexels-photo-8470837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Fresh live mussels, perfect for seafood pasta.',
    stock: 20,
    unit: 'lb',
    rating: 4.5,
    reviews: []
  },
  
  // Beverages
  {
    id: '16',
    name: 'Orange Juice',
    category: 'Beverages',
    price: 3.99,
    image: 'https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Fresh-squeezed orange juice.',
    stock: 20,
    unit: 'gallon',
    rating: 4.6,
    reviews: []
  },
  {
    id: '17',
    name: 'Green Tea',
    category: 'Beverages',
    price: 4.49,
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Organic green tea bags.',
    stock: 30,
    unit: 'box',
    rating: 4.7,
    reviews: []
  },
  {
    id: '18',
    name: 'Sparkling Water',
    category: 'Beverages',
    price: 0.99,
    image: 'https://images.pexels.com/photos/2995263/pexels-photo-2995263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Refreshing sparkling water.',
    stock: 50,
    unit: 'bottle',
    rating: 4.3,
    reviews: []
  }
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getDiscountedProducts = (): Product[] => {
  return products.filter(product => product.discount);
};