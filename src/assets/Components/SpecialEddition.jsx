



function SpecialEddition() {
  return (
    <section style={{ backgroundImage: `url('banner-03.jpg')` }} className="bg-no-repeat bg-center bg-cover bg-local lg:bg-fixed">
        <div className="container mx-auto">
        <div className="p-5 lg:px-[93px] lg:py-[100px]  md:p-[50px] sm:p-[30px] grid grid-cols-1 md:grid-cols-[400px_1fr] lg:grid-cols-2 items-center justify-center text-center md:text-start ">
            <div>
            <h3 className="text-[1.25rem] leading-[1.2em] text-white font-bold">Limited Time Offer</h3>
            <h2 className="text-[2.62rem] leading-[1.3em] text-white font-bold pt-5 pb-4">Special Edition</h2>
            <p className="text-[16px] text-white ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <h2 className="text-[20px] leading-[1.2em] text-white font-bold py-6">Buy This T-shirt At 20% Discount, Use Code OFF20</h2>
            <button className="w-full md:w-[200px] bg-white text-blue-900 px-8 py-3 font-bold hover:bg-yellow-300 transition-all">
            SHOP NOW
          </button>
            </div>
        </div>
        </div>
    </section>
  )
}

export default SpecialEddition