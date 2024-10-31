import React from 'react';
import { Check } from 'lucide-react';

interface BrandFilterProps {
  brands: string[];
  selectedBrands: string[];
  onBrandToggle: (brand: string) => void;
}

const BrandFilter: React.FC<BrandFilterProps> = ({ brands, selectedBrands, onBrandToggle }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="font-semibold text-gray-900 mb-3">Brands</h3>
      <div className="space-y-2">
        {brands.map((brand) => (
          <label key={brand} className="flex items-center gap-2 cursor-pointer">
            <div
              className={`w-5 h-5 rounded border flex items-center justify-center ${
                selectedBrands.includes(brand)
                  ? 'bg-indigo-600 border-indigo-600'
                  : 'border-gray-300'
              }`}
              onClick={() => onBrandToggle(brand)}
            >
              {selectedBrands.includes(brand) && (
                <Check className="h-4 w-4 text-white" />
              )}
            </div>
            <span className="text-sm text-gray-700">{brand}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default BrandFilter;