

import { motion } from "framer-motion";
import { GiGymBag } from "react-icons/gi";
const ProductsSection = () => {
  const products = [
    {
      title: "DNK Yellow Shoes",
      category: "Men",
      price: 120.00,
      oldPrice: 150.00,
      image: "/sports-shoe3.jpg",
    },
    {
      title: "DNK Blue Shoes",
      category: "Men",
      priceRange: "$200.00 - $240.00",
      image: "/sports-shoe1.jpg"
    },
    {
      title: "Dark Brown Jeans",
      category: "Men",
      price: 150.00,
      rating: 5,
      image: "/product-m-jeans1.jpg"
    },
    {
      title: "Blue Denim Jeans",
      category: "Women",
      price: 150.00,
      rating: 5,
      image: "/product-w-jeans2.jpg"
    },
    {
      title: "Basic Gray Jeans",
      category: "Women",
      price: 150.00,
      rating: 5,
      image: "/product-w-jeans4.jpg"

    },
    {
      title: "Blue Denim Shorts",
      category: "Women",
      price: 150.00,
      rating: 5,
      image: "/product-w-jeans1.jpg"
    },
    {
      title: "Anchor Bracelet",
      category: "Accessories",
      price: 150.00,
      rating: 5,
      image: "/product-accessory2.jpg"
    },
    {
      title: "Boho Bangle Bracelet",
      category: "Accessories",
      price: 150.00,
      rating: 5,
      image: "/product-accessory1.jpg"
    },
    {
      title: "Light Brown Purse",
      category: "Accessories",
      price: 150.00,
      rating: 5,
      image: "/product-bag1.jpg"
    },
    {
      title: "Bright Red Bag",
      category: "Accessories",
      price: 150.00,
      rating: 5,
      image: "/product-bag3.jpg"
    },
    
  ];

 

  return (
    <div className=" px-4 pt-10 pb-25 bg-[#F5F7F9]">
      <div className="container mx-auto">
        <div>
            <div className='relative group bg-[#F5F7F9]  flex items-center justify-center pt-10 pb-15 '>
              <h2 className=' text-5xl font-medium'>Featured Products</h2>
              <div className="absolute bottom-7 left-120 w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-[25%]"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {products.map((product, index) => (
                <div

               

                  key={index}
                  className={`p-6 rounded-lg shadow-md relative group ${
                    product.isCustom 
                      ? "bg-gray-100 flex items-center justify-center min-h-[200px]"
                      : "bg-white hover:shadow-lg transition-shadow"
                  }`}
                >
                    {!product.isCustom && product.image && (
                    <motion.div 
                    
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}


                    
                   
                    
                    className="mb-4">
                      <img 
                        src={product.image}
                        alt={product.title}
                        className="w-full object-cover rounded-t-lg"
                      />
                    </motion.div>
                  )}
                  {product.isCustom ? (
                    <h3 className="text-2xl font-bold text-gray-700">{product.title}</h3>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 mb-2">{product.category}</p>
                      
                      {product.oldPrice && (
                        <div className="flex gap-2">
                          <span className="text-gray-400 line-through">
                            ${product.oldPrice}
                          </span>
                          <span className="text-green-600 font-bold">
                            ${product.price}
                          </span>
                        </div>
                      )}

                      {product.priceRange && (
                        <p className="text-gray-800 font-medium">
                          {product.priceRange}
                        </p>
                      )}

                      {product.price && !product.oldPrice && (
                        <p className="text-gray-800 font-medium">${product.price}</p>
                      )}

                      {product.rating && (
                        <div className="flex mt-2 text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 fill-current"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      )}
                    </>
                  )}

                  <div className="transition-all duration-1000 ease-linear absolute top-7 right-8 p-2 rounded-full bg-white hidden group-hover:block" >
                    <span><GiGymBag /></span>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
{/* <div className='bg-[#F5F7F9]  flex items-center justify-center py-10 '>
        <h2 className='text-5xl font-medium'>Featured Products</h2>
    </div> */}

