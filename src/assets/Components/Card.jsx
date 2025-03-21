import React from 'react';

const Card = () => {
  return (
    <div className="bg-white py-20 flex items-center justify-center gap-4">
        <div className="relative overflow-hidden rounded-lg shadow-lg  max-w-sm ">
        <img 
        src="image_1.jpg" 
        alt="image"
        className="w-full h-full object-cover rounded-t-lg overflow-hidden "
      />
      <div className="color size-full bg-[rgba(33,21,144,0.4)] absolute top-0 left-0 -z-0"></div>
      {/* Card Content */}
      <div className="p-6 text-center">
        {/* Discount Offer */}
        <h3 className="text-2xl font-bold text-white mb-2 absolute px-4 top-[60%]">
          20% Off On Tank Tops
        </h3>

        {/* Description */}
        <p className="text-white mb-4 absolute top-[70%] left-4 px-[23px]">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Proin ac dictum.
        </p>

        {/* Shop Now Button */}
        <a
          href="/shop-now"
          className="absolute left-[116px] top-[85%] inline-block  px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          SHOP NOW
        </a>
      </div>
    </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg  max-w-sm ">
        <img 
        src="image_2.jpg" 
        alt="image"
        className="w-full h-full object-cover rounded-t-lg overflow-hidden "
      />
      <div className="color size-full bg-[rgba(33,21,144,0.4)] absolute top-0 left-0 -z-0"></div>
      {/* Card Content */}
      <div className="p-6 text-center">
        {/* Discount Offer */}
        <h3 className="text-2xl font-bold text-white mb-2 absolute px-4 top-[60%]">
          20% Off On Tank Tops
        </h3>

        {/* Description */}
        <p className="text-white mb-4 absolute top-[70%] left-4 px-[23px]">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Proin ac dictum.
        </p>

        {/* Shop Now Button */}
        <a
          href="/shop-now"
          className="absolute left-[116px] top-[85%] inline-block  px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          SHOP NOW
        </a>
      </div>
    </div>
        <div className="relative overflow-hidden rounded-lg shadow-lg  max-w-sm ">
        <img 
        src="image_3.jpg" 
        alt="image"
        className="w-full h-full object-cover rounded-t-lg overflow-hidden "
      />
      <div className="color size-full bg-[rgba(33,21,144,0.4)] absolute top-0 left-0 -z-0"></div>
      {/* Card Content */}
      <div className="p-6 text-center">
        {/* Discount Offer */}
        <h3 className="text-2xl font-bold text-white mb-2 absolute px-4 top-[60%]">
          20% Off On Tank Tops
        </h3>

        {/* Description */}
        <p className="text-white mb-4 absolute top-[70%] left-4 px-[23px]">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Proin ac dictum.
        </p>

        {/* Shop Now Button */}
        <a
          href="/shop-now"
          className="absolute left-[116px] top-[85%] inline-block  px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          SHOP NOW
        </a>
      </div>
    </div>
    </div>
  );
};


export default Card;