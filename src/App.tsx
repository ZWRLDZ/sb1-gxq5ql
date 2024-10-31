import React, { useState, useMemo } from 'react';
import { Sparkles, Tag, TrendingUp, Heart } from 'lucide-react';
import ProductCard from './components/ProductCard';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import BrandFilter from './components/BrandFilter';
import { Product } from './types';

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: "Nike Air Max 270",
      originalPrice: 150,
      currentPrice: 89.97,
      brand: "Nike",
      image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=800",
      category: "shoes",
      retailer: "Nike Factory Store",
      productUrl: "https://www.nike.com/t/air-max-270-mens-shoes-KkLcGR/AH8050-002"
    },
    {
      id: 2,
      name: "Levi's 501 Original Fit Jeans",
      originalPrice: 98,
      currentPrice: 59.99,
      brand: "Levi's",
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800",
      category: "clothing",
      retailer: "Levi's Outlet",
      productUrl: "https://www.levi.com/US/en_US/clothing/men/jeans/501-original-fit-mens-jeans/p/005010194"
    },
    {
      id: 3,
      name: "Coach Willow Shoulder Bag",
      originalPrice: 350,
      currentPrice: 175,
      brand: "Coach",
      image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800",
      category: "accessories",
      retailer: "Coach Outlet",
      productUrl: "https://www.coachoutlet.com/products/willow-shoulder-bag/C3866.html"
    },
    {
      id: 4,
      name: "Ralph Lauren Cable-Knit Sweater",
      originalPrice: 198,
      currentPrice: 99.99,
      brand: "Ralph Lauren",
      image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?auto=format&fit=crop&w=800",
      category: "clothing",
      retailer: "Ralph Lauren Factory Store",
      productUrl: "https://www.ralphlauren.com/women-clothing-sweaters/cable-knit-cashmere-sweater/594808.html"
    },
    {
      id: 5,
      name: "Adidas Ultraboost 22",
      originalPrice: 190,
      currentPrice: 133,
      brand: "Adidas",
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800",
      category: "shoes",
      retailer: "Adidas Outlet",
      productUrl: "https://www.adidas.com/us/ultraboost-22-shoes/GX5461.html"
    }
  ];

  const brands = useMemo(() => 
    Array.from(new Set(products.map(product => product.brand))).sort(),
    [products]
  );

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      
      return matchesCategory && matchesSearch && matchesBrand;
    });
  }, [products, activeCategory, searchQuery, selectedBrands]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Today's Best Deals</h1>
          <div className="w-72">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
        </div>

        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {['all', 'clothing', 'accessories', 'shoes'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex gap-8">
          <div className="w-64 flex-shrink-0">
            <BrandFilter
              brands={brands}
              selectedBrands={selectedBrands}
              onBrandToggle={handleBrandToggle}
            />
            
            <div className="mt-6 bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold text-gray-900 mb-3">About Our Deals</h3>
              <p className="text-sm text-gray-600">
                We curate the best deals from official retail outlets and authorized sellers. All prices are verified daily.
              </p>
            </div>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-indigo-600" />
            Why Shop Through Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Tag className="h-6 w-6 text-indigo-600" />
              <div>
                <h3 className="font-medium">Verified Deals</h3>
                <p className="text-gray-600 text-sm">All discounts verified from official retailers</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <TrendingUp className="h-6 w-6 text-indigo-600" />
              <div>
                <h3 className="font-medium">Daily Updates</h3>
                <p className="text-gray-600 text-sm">New deals added every day</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Heart className="h-6 w-6 text-indigo-600" />
              <div>
                <h3 className="font-medium">Curated Selection</h3>
                <p className="text-gray-600 text-sm">Only the best deals make our list</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;