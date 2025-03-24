import { image } from 'framer-motion/client';
import React from 'react';

const BestSellers = () => {
  const products = [
    { name: 'Green Hoodie', price: '$150.00', image:"/product-hoodie1.jpg" },
    { name: 'Lemons Tshirt', price: '$25.00 - $28.00', image:"/tshirt2.jpg" },
    { name: 'DNK Blue Shoes', price: '$200.00 - $240.00', image:"/sports-shoe1.jpg" },
    { name: 'Red Hoodie', price: '$150.00', image:"/product-hoodie2.jpg" },
    { name: 'Blue Denim Shorts', price: '$150.00 $130.00', image:"/product-w-jeans1.jpg" },
  ];

  return (
    <div className="py-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl pb-4">Our Best Sellers</h1>
      <div className="space-y-4">
        {products.map((product, index) => (
          <div key={index} className="border-b pb-4 flex items-center">
          <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-lg mr-4" />
          <div>
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;