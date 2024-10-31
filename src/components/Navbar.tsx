import React from 'react';
import { ShoppingBag, Heart, User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">ThriftHub</span>
          </div>
          
          <div className="flex items-center gap-6">
            <button className="text-gray-600 hover:text-gray-900">
              <Heart className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <ShoppingBag className="h-6 w-6" />
            </button>
            <button className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
              <User className="h-5 w-5" />
              <span>Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;