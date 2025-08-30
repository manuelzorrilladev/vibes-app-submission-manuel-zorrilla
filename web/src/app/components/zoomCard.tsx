
import React from 'react';
import { Product } from '../types/types'; 



const ProductDetail: React.FC<Product> = ( product) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto">
      <div className="w-full md:w-1/2 p-4 flex justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto object-contain max-h-96 rounded-lg shadow-sm"
        />
      </div>

      <div className="w-full md:w-1/2 p-4 space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          {product.name}
        </h1>

        <p className="text-xl sm:text-2xl text-gray-700 font-semibold">
          ${product.price.toFixed(2)}
        </p>

        <span className={`inline-block text-sm font-semibold px-3 py-1 rounded-full ${product.isAvailable ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-800'}`}>
          {product.isAvailable ? 'En stock' : 'Sin stock'}
        </span>


        <button className="w-full mt-6 py-3 px-6 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-colors duration-300">
          Agregar a favoritos
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;