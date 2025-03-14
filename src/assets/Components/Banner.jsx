const Banner = () => {
  return (
    <div className="banner relative w-full bg-gradient-to-r bg-black/60 min-h-[400px] flex items-center justify-center">
      <div className=" pt-24 pb-50 relative w-full bg-gradient-to-r  min-h-[400px] grid grid-cols-2">
      <div className="text-center text-white space-y-6 px-4">
        {/* Head */}
        <div className="space-y-2">
          <h1 className="text-6xl font-bold animate-pulse px-[60px] leading-1.3">
            Raining Offers For Hot Summer!
          </h1>
          
        </div>

        {/*Discount*/}
        <div className="text-2xl md:text-4xl font-bold py-2 px-6 rounded-full inline-block">
          25%Off On All Products
        </div>

        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-900 px-8 py-3 rounded-[4px] font-bold hover:bg-yellow-300 transition-all">
            SHOP NOW
          </button>
          <button className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white/20 transition-all">
            FIND MORE
          </button>
        </div>
      </div>

      
    </div>
    </div>
  );
};

export default Banner;