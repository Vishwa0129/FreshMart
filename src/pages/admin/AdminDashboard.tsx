import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  Package, 
  BarChart, 
  Settings,
  LogOut,
  ChevronRight,
  CircleDollarSign,
  TrendingUp
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { products } from '../../data/products';
import Button from '../../components/ui/Button';

type TabType = 'dashboard' | 'products' | 'orders' | 'customers';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const { user, logout } = useAuth();
  
  if (!user || user.role !== 'admin') {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
        <p className="mb-6">You don't have permission to access the admin dashboard.</p>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }
  
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm">
        <div className="p-4 border-b">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-green-500">Fresh<span className="text-green-700">Mart</span></span>
          </Link>
        </div>
        
        <div className="py-4">
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium ${
                  activeTab === 'dashboard' 
                    ? 'text-green-600 bg-green-50 border-r-4 border-green-500' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <LayoutDashboard size={18} className="mr-3" />
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('products')}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium ${
                  activeTab === 'products' 
                    ? 'text-green-600 bg-green-50 border-r-4 border-green-500' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <ShoppingBag size={18} className="mr-3" />
                Products
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium ${
                  activeTab === 'orders' 
                    ? 'text-green-600 bg-green-50 border-r-4 border-green-500' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Package size={18} className="mr-3" />
                Orders
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('customers')}
                className={`w-full flex items-center px-4 py-3 text-sm font-medium ${
                  activeTab === 'customers' 
                    ? 'text-green-600 bg-green-50 border-r-4 border-green-500' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Users size={18} className="mr-3" />
                Customers
              </button>
            </li>
            <li>
              <Link
                to="/admin/analytics"
                className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <BarChart size={18} className="mr-3" />
                Analytics
              </Link>
            </li>
            <li>
              <Link
                to="/admin/settings"
                className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <Settings size={18} className="mr-3" />
                Settings
              </Link>
            </li>
          </ul>
        </div>
        
        <div className="absolute bottom-0 w-64 border-t p-4">
          <button
            onClick={logout}
            className="flex items-center text-gray-700 hover:text-red-600"
          >
            <LogOut size={18} className="mr-3" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-gray-900">
              {activeTab === 'dashboard' && 'Dashboard'}
              {activeTab === 'products' && 'Products Management'}
              {activeTab === 'orders' && 'Orders Management'}
              {activeTab === 'customers' && 'Customer Management'}
            </h1>
          </div>
        </header>
        
        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {activeTab === 'dashboard' && (
            <DashboardContent />
          )}
          
          {activeTab === 'products' && (
            <ProductsContent />
          )}
          
          {activeTab === 'orders' && (
            <OrdersContent />
          )}
          
          {activeTab === 'customers' && (
            <CustomersContent />
          )}
        </main>
      </div>
    </div>
  );
};

const DashboardContent: React.FC = () => {
  return (
    <div>
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow-sm rounded-lg p-6">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-lg">
              <CircleDollarSign className="text-green-600" size={24} />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
              <p className="text-2xl font-semibold text-gray-900">$12,426.85</p>
            </div>
          </div>
          <div className="mt-4 flex items-center text-green-600">
            <TrendingUp size={16} className="mr-1" />
            <span>12.5% increase</span>
          </div>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6">
          <div className="flex items-center">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Package className="text-blue-600" size={24} />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Orders</h3>
              <p className="text-2xl font-semibold text-gray-900">156</p>
            </div>
          </div>
          <div className="mt-4 flex items-center text-green-600">
            <TrendingUp size={16} className="mr-1" />
            <span>8.2% increase</span>
          </div>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6">
          <div className="flex items-center">
            <div className="bg-amber-100 p-3 rounded-lg">
              <Users className="text-amber-600" size={24} />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Customers</h3>
              <p className="text-2xl font-semibold text-gray-900">24</p>
            </div>
          </div>
          <div className="mt-4 flex items-center text-green-600">
            <TrendingUp size={16} className="mr-1" />
            <span>20% increase</span>
          </div>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6">
          <div className="flex items-center">
            <div className="bg-purple-100 p-3 rounded-lg">
              <ShoppingBag className="text-purple-600" size={24} />
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-500">Products</h3>
              <p className="text-2xl font-semibold text-gray-900">{products.length}</p>
            </div>
          </div>
          <div className="mt-4 flex items-center text-gray-600">
            <span>Total products</span>
          </div>
        </div>
      </div>
      
      {/* Recent Orders */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Recent Orders</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #ORD-001
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  John Doe
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  May 15, 2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  $125.00
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Delivered
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-green-600 hover:text-green-900">
                    View
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #ORD-002
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Jane Smith
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  May 14, 2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  $89.50
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Processing
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-green-600 hover:text-green-900">
                    View
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #ORD-003
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Michael Brown
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  May 14, 2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  $42.75
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    Shipped
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-green-600 hover:text-green-900">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <Link to="/admin/orders" className="text-sm font-medium text-green-600 hover:text-green-500">
            View all orders
            <ChevronRight size={16} className="inline ml-1" />
          </Link>
        </div>
      </div>
      
      {/* Top Selling Products */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Top Selling Products</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sold
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.slice(0, 5).map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img className="h-10 w-10 rounded object-cover" src={product.image} alt={product.name} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {Math.floor(Math.random() * 50) + 10} units
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.stock} units
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <Link to="/admin/products" className="text-sm font-medium text-green-600 hover:text-green-500">
            View all products
            <ChevronRight size={16} className="inline ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProductsContent: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">All Products</h2>
        <Button>Add New Product</Button>
      </div>
      
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img className="h-10 w-10 rounded object-cover" src={product.image} alt={product.name} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                        <div className="text-sm text-gray-500">ID: {product.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.stock} {product.unit}s
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-green-600 hover:text-green-900 mr-3">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const OrdersContent: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Recent Orders</h2>
      </div>
      
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #ORD-001
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  John Doe
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  May 15, 2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  $125.00
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Credit Card
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Delivered
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-green-600 hover:text-green-900">
                    View
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #ORD-002
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Jane Smith
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  May 14, 2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  $89.50
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  PayPal
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Processing
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-green-600 hover:text-green-900">
                    View
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #ORD-003
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Michael Brown
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  May 14, 2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  $42.75
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Cash on Delivery
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    Shipped
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-green-600 hover:text-green-900">
                    View
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #ORD-004
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Emily Johnson
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  May 13, 2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  $67.20
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Credit Card
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Cancelled
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-green-600 hover:text-green-900">
                    View
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  #ORD-005
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Robert Wilson
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  May 12, 2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  $112.35
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  PayPal
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Delivered
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-green-600 hover:text-green-900">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const CustomersContent: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Customers</h2>
      </div>
      
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Join Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Orders
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Spent
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                        JD
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">John Doe</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  john@example.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Jan 15, 2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  5
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  $425.75
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-green-600 hover:text-green-900">
                    View
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                        JS
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Jane Smith</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  jane@example.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Feb 20, 2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  3
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  $189.50
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-green-600 hover:text-green-900">
                    View
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                        MB
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">Michael Brown</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  michael@example.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Mar 5, 2025
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  $76.25
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-green-600 hover:text-green-900">
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;