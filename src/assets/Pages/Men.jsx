import { FaGreaterThan } from "react-icons/fa6";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import React, { useState } from 'react';
import BestSellers from "../Components/BestSellers";
import MenProducts from "../Components/MenProducts";


  

function Men() {

  const [priceRange, setPriceRange] = useState({ min: 20, max: 200 });

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange(prev => ({ ...prev, [name]: parseInt(value, 10) }));
  };
  return (
    <section className="pb-20 pt-30 bg-[#F5F7F9]">
      <div className="containe mx-auto">
        <div className="grid grid-cols-[400px_1fr] px-5">
          {/* left */}
          <div className="">
            <form action="#" className="flex items-center gap-1.5">
              <input className="px-[12px] py-[8px] border border-[#e2e2e2;] focus:border-black/50 focus:outline-dotted transition-colors bg-white" type="search" name="search" id="search" placeholder="Search Products..." />
              <button type="submit" className="px-2 py-[12px] bg-[#0084d6;] text-white"><FaGreaterThan /></button>
            </form>
            {/* filter_price */}
            <div className="px-4 py-8  rounded-lg">
      <h2 className="font-bold text-2xl mb-4">Filter by Price</h2>
      <div className="flex items-center justify-between">
        
        <input
          type="range"
          name="max"
          min="20"
          max="200"
          value={priceRange.max}
          onChange={handlePriceChange}
          className="w-full"
        />
      </div>
      <div className="mt-4">
        <span className="text-sm">Price: ${priceRange.min} – ${priceRange.max}</span>
      </div>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        FILTER
      </button>
    </div>
            {/* catagories */}
            <div className="overflow-x-auto">
  <table className="min-w-full">
    <thead>
      <tr>
        <th className="py-2 px-4 text-left text-2xl">Categories</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="py-2 px-4">Accessories</td>
        <td className="py-2 px-4">(7)</td>
      </tr>
      <tr>
        <td className="py-2 px-4">Men</td>
        <td className="py-2 px-4">(14)</td>
      </tr>
      <tr>
        <td className="py-2 px-4">Women</td>
        <td className="py-2 px-4">(17)</td>
      </tr>
    </tbody>
  </table>
</div>
            {/* best_seller */}
            <div className="">
                <BestSellers/>
            </div>
          </div>
          {/* product_part */}
          <div className="px-25 py-30">
            <div>
            <div className="bg-white px-6 py-15">
    <h1 className="text-6xl font-bold pb-20">Men</h1>
    <p className="text-gray-700 mb-4">
        Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.
    </p>
    <p className="text-gray-700 mb-4">
        Class aptent taciti sociosqu ad littora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.
    </p>
    <p className="text-gray-700 mb-4">
        Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed ut.
    </p>
    <div className="flex items-center justify-between">
        <div className="text-gray-600 mb-4">
            Showing 1–12 of 17 results
        </div>
        
        <select className="block  p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700">
            <option>Default sorting</option>
            <option>Sort by popularity</option>
            <option>Sort by average rating</option>
            <option>Sort by latest</option>
            <option>Sort by price: low to high</option>
            <option>Sort by price: high to low</option>
        </select>
    </div>
    
</div>
            </div>
            <MenProducts/>
            <div className="flex items-center justify-start gap-1.5">
              <button className="px-4.5 py-2.5 bg-black text-white hover:bg-white hover:text-black border">1</button>
              <button className="px-4.5 py-2.5 text-black hover:bg-black hover:text-white border">2</button>
              <button className="px-3 py-3.5 text-black hover:bg-black hover:text-white border"><HiOutlineArrowNarrowRight /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Men