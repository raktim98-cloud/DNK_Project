

function SpecialEddition() {
  return (
    <section style={{ backgroundImage: `url('banner-03.jpg')` }} className="bg-no-repeat bg-center bg-cover bg-fixed">
        <div className="container mx-auto">
        <div className="px-[93px] py-[100px]">
            <h3 className="text-[1.25rem] leading-[1.2em] text-white font-bold">Limited Time Offer</h3>
            <h2 className="text-[2.62rem] leading-[1.3em] text-white font-bold pt-5 pb-4">Special Edition</h2>
            <p className="text-[16px] text-white pr-[427px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <h2 className="text-[20px] leading-[1.2em] text-white font-bold py-6">Buy This T-shirt At 20% Discount, Use Code OFF20</h2>
            <button className="bg-white text-blue-900 px-8 py-3 font-bold hover:bg-yellow-300 transition-all">
            SHOP NOW
          </button>
        </div>
        </div>
    </section>
  )
}

export default SpecialEddition