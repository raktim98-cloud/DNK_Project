import { FaGreaterThan } from "react-icons/fa6";

function Woman() {
  return (
    <section className="py-20 bg-[#F5F7F9]">
      <div className="containe mx-auto">
        <div className="grid grid-cols-[400px_1fr] px-5">
          <div className="left">
            <form action="#" className="flex items-center gap-1.5">
              <input className="px-[12px] py-[8px] border border-[#e2e2e2;] focus:border-black/50 focus:outline-dotted transition-colors bg-white" type="search" name="search" id="search" placeholder="Search Products..." />
              <button type="submit" className="px-2 py-[12px] bg-[#0084d6;] text-white"><FaGreaterThan /></button>
            </form>
            <div className="filter_price">

            </div>
            <div className="catagories">

            </div>
            <div className="best_seller">

            </div>
          </div>
          <div className="product_part">

          </div>
        </div>
      </div>
    </section>
  )
}

export default Woman