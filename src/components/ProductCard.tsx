import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
        <div className="absolute bottom-3 left-3 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-medium">
          {Math.round(((product.originalPrice - product.currentPrice) / product.originalPrice) * 100)}% OFF
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <span className="text-sm text-gray-500">{product.brand}</span>
          <span className="text-xs text-gray-500">{product.retailer}</span>
        </div>
        <h3 className="font-medium text-gray-900 mb-2">{product.name}</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-indigo-600">${product.currentPrice}</span>
            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
          </div>
          <a
            href={product.productUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700"
          >
            Shop <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;